import { FunctionComponent, h } from 'preact';
import { forwardRef } from 'preact/compat';
import { useQuery } from 'graphql-hooks';
import { lolApi } from '../../../api/api';
import { useEffect } from 'preact/hooks';
import { CHAMPION_TOOLTIP_QUERY_GQL } from '../../../api/dynamic/queries/champion-tooltip-query.gql';
import {
  LolChampionTooltipDynamicQuery,
  LolChampionTooltipDynamicQueryVariables,
} from '../../../types/gql-dynamic/LolChampionTooltipDynamicQuery';
import { LolChampionELO, Rolename, TierLevel } from '../../../types/gql-dynamic/globalTypes';
import { ChampionTooltip } from '../../../components/champion-tooltip/champion-tooltip.component';
import { CHAMPION_TOOLTIP_STATIC_QUERY_GQL } from '../../../api/static/queries/champion-tooltip-query.gql';
import {
  LolChampionTooltipStaticQuery,
  LolChampionTooltipStaticQueryVariables,
} from '../../../types/gql-static/LolChampionTooltipStaticQuery';
import { firstItem } from '../../../../common/utils/list';
import { isDef, validateStrEnumValue } from '../../../../common/utils/lang';
import { formatCounters, formatMetric, validateChampionType } from './champion-tooltip.utils';
import { numberComparator, sortBy } from '../../../../common/utils/sorting';
import { validateRolename } from '../../../utils/validation';

interface Props {
  championSlug: string;
  role?: string
  onDataLoaded?(): void;

  className?: string;
}

const staticSkillLevel = 'low-elo';

export const ChampionTooltipWidgetContent: FunctionComponent<Props> = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { championSlug, role, onDataLoaded, className} = props;

    const { loading: dynamicLoading, error: dynamicError, data: dynamicData } = useQuery<
      LolChampionTooltipDynamicQuery,
      LolChampionTooltipDynamicQueryVariables
      >(CHAMPION_TOOLTIP_QUERY_GQL , {
      variables: {
        championSlug,
        skillLevel: LolChampionELO.LOW,
      },
      client: lolApi.dynamicDataClient,
    });

    const { loading: staticLoading, error: staticError, data: staticData } = useQuery<
      LolChampionTooltipStaticQuery,
      LolChampionTooltipStaticQueryVariables
      >(CHAMPION_TOOLTIP_STATIC_QUERY_GQL, {
      variables: {
        filter: `data/slug/iv eq '${championSlug}'`,
      },
      client: lolApi.staticDataClient,
    });

    const loading = dynamicLoading || staticLoading;
    const error = dynamicError || staticError;
    const data = dynamicData && staticData;

    const championMeta = firstItem(staticData?.championMeta);
    const championTier = firstItem(staticData?.championTier);

    const championName = championMeta?.flatData.name;

    const roleName = validateRolename(role) || validateRolename(dynamicData?.lol?.champion?.build?.role);

    if(!loading && !!error || !roleName || !championName){
      return (
        <div ref={ref} className={className}>
          <ChampionTooltip
            championSlug={championSlug}
            championName={championSlug}
            isLoading={true}
          />
        </div>
      );
    }

    const championType = (firstItem(championMeta?.flatData.type)?.flatData);
    const dynamicChampionData = firstItem(dynamicData?.lol?.championsList?.champions)?.roleData?.find(
      it => it.role === roleName
    )?.champion;

    const tier = championTier?.flatData.riftTiers?.find(
      it => it.skillLevel === staticSkillLevel && validateStrEnumValue<Rolename>(Rolename, it.role) === roleName
    )?.tier;

    const countersOptions = dynamicChampionData?.countersOptions?.options;
    const { winRateHistory, pickRateHistory, banRateHistory } = dynamicChampionData?.stats || {};

    const counterChampions = countersOptions && sortBy(formatCounters(countersOptions), it => it.winRate, numberComparator).slice(0, 4)

    useEffect(() => {
      if(loading || (!!data && !error)){
        onDataLoaded?.();
      }
    }, [onDataLoaded, loading, data, error]);

    return (
      <div ref={ref} className={className}>
        <ChampionTooltip
          championSlug={championSlug}
          championName={championName}
          tier={validateStrEnumValue(TierLevel, tier?.toUpperCase())}
          championType={championType && validateChampionType(championType)}
          winRate={isDef(winRateHistory) ? formatMetric(winRateHistory) : null}
          pickRate={isDef(pickRateHistory) ? formatMetric(pickRateHistory) : null}
          banRate={isDef(banRateHistory) ? formatMetric(banRateHistory) : null}
          counterChampions={counterChampions}
          isLoading={dynamicLoading || staticLoading}
        />
      </div>
    );
  }
);
