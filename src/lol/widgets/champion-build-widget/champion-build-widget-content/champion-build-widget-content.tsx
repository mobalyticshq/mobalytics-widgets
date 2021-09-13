import { FunctionComponent, h} from 'preact';
import { useQuery } from 'graphql-hooks';
import { css } from 'goober';
import clsx from 'clsx';

import { DYNAMIC_CHAMPION_BUILD_QUERY_GQL } from '../../../api/dynamic/queries/champion-build-query.gql';
import { lolApi } from '../../../api/api';
import { NNumber, NString, Nullable } from '../../../../common/types/lang';
import { ChampionBuildWidgetError } from '../champion-build-widget-error/champion-build-widget-error';
import { ChampionBuildWidgetLoading } from '../champion-build-widget-loading/champion-build-widget-loading';
import {
  LolChampionWidgetDynamicQuery,
  LolChampionWidgetDynamicQueryVariables,
} from '../../../types/gql-dynamic/LolChampionWidgetDynamicQuery';
import { LolChampionBuildType, Region, Rolename } from '../../../types/gql-dynamic/globalTypes';
import {
  LolChampionWidgetStaticQuery,
  LolChampionWidgetStaticQueryVariables,
} from '../../../types/gql-static/LolChampionWidgetStaticQuery';
import { STATIC_CHAMPION_BUILD_QUERY_GQL } from '../../../api/static/queries/champion-build-query.gql';
import { firstItem } from '../../../../common/utils/list';
import { calcWinRate } from '../../../../common/utils/math';
import { validateStrEnumValue } from '../../../../common/utils/lang';
import { BuildHeader } from '../../../components/build-header/build-header.component';
import { amumuCrying, championPosterImage, emoteImage } from '../../../utils/images';
import { WidgetFooter } from '../../../components/widget-footer/widget-footer.component';
import {
  formatAbilities,
  formatAbilityOrder,
  formatItemsBuild, formatSkillMaxOrder,
  formatSkillOrder,
} from '../../../utils/build-data-format.utils';
import { ChampionBuildWidgetBody } from '../champion-build-widget-body/champion-build-widget-body';
import { MOBA_APP_LINK } from '../../../config';
import { genChampionPath } from '../../../utils/links';
import { extractFromFlatList } from '../../../utils/squidex-data.utils';

interface Props {
  champion: string;
  role: Nullable<Rolename>;
  region: Nullable<Region>;
  patch: NString;
  buildType?: Nullable<LolChampionBuildType>;
  buildID?: NNumber;
  compact: boolean;
  widgetWidth: NNumber;
  className?: string;
}

const MIN_WIDGET_WIDTH = 300;
const SMALL_WIDGET_WIDTH = 560;

export const ChampionBuildWidgetContent: FunctionComponent<Props> = props => {
  const { champion, role, compact, widgetWidth, region, patch, buildID, className } = props;

  const isSmall = !!(widgetWidth && widgetWidth < SMALL_WIDGET_WIDTH);
  const isCompact = compact || isSmall;

  const {
    loading: dynamicLoading,
    error: dynamicError,
    data: dynamicData,
  } = useQuery<LolChampionWidgetDynamicQuery, LolChampionWidgetDynamicQueryVariables>(
    DYNAMIC_CHAMPION_BUILD_QUERY_GQL,
    {
      variables: { champion, role, region, patch, buildID },
      client: lolApi.dynamicDataClient,
    }
  );

  const {
    loading: staticLoading,
    error: staticError,
    data: staticData,
  } = useQuery<LolChampionWidgetStaticQuery, LolChampionWidgetStaticQueryVariables>(STATIC_CHAMPION_BUILD_QUERY_GQL, {
    variables: { filter: `data/slug/iv eq '${champion}'` },
    client: lolApi.staticDataClient,
  });

  const loading = dynamicLoading || staticLoading;
  const error = dynamicError || staticError;

  if (loading) {
    return (
      <ChampionBuildWidgetLoading
        className={clsx(Wrapper, className)}
        isCompact={isCompact}
        isSmall={isSmall}
      />
    );
  }

  if (error || (!staticData)) {
    return (
      <ChampionBuildWidgetError
        imgSrc={amumuCrying()}
        title={'Something Wrong'}
        text={'We are so sorry, but it seems that this widget or the Mobalytics platform are experiencing some problems at the moment.'}
        link={{
          text: 'Check Mobalytics Status',
          url: MOBA_APP_LINK,
        }}
        className={clsx(Wrapper, className)}
      />
    );
  }

  const championStats = firstItem(staticData?.champion)?.flatData;
  const championBuild = dynamicData?.lol?.champion?.build;
  const gameItems =  extractFromFlatList([...(staticData.itemsChunk1 || []), ...(staticData.itemsChunk2 || [])])?.filter(it => !!it.riotId);

  // build props
  const { spells, items, skillOrder: rawSkillOrder, skillMaxOrder: rawSkillMaxOrder, stats, patch: buildPatch, perks} = championBuild || {};

  // stats props
  const { abilities: rawAbilities, name: championName } = championStats || {};

  // header props
  const roleName = validateStrEnumValue<Rolename>(Rolename, role);
  const winRate = stats && stats.wins && stats.matchCount ? calcWinRate(stats.wins, stats.matchCount - stats.wins) : null
  const abilities = rawAbilities && formatAbilities(rawAbilities);

  // build props
  const itemsBuild = gameItems && items && formatItemsBuild(items, gameItems);
  const skillOrder = rawSkillOrder && formatSkillOrder(rawSkillOrder);
  const abilitiesOrder = rawSkillMaxOrder && abilities && formatAbilityOrder(rawSkillMaxOrder, abilities);
  const skillMaxOrder = rawSkillMaxOrder && formatSkillMaxOrder(rawSkillMaxOrder);

  const isBuildAvailable = !!itemsBuild || !!skillOrder || !!abilitiesOrder || !!skillMaxOrder;

  const bgClass = !isSmall && !isCompact ? Background(championPosterImage(champion)) : '';

  if(championName){
    return (
      <div className={clsx(Wrapper, className)}>
        <BuildHeader
          championName={championName} championSlug={champion}
          roleName={roleName}
          patch={buildPatch}
          winRate={winRate}
          gamesCount={!isSmall ? stats?.matchCount : null}
        />
        {
          isBuildAvailable ? (
            <ChampionBuildWidgetBody
              abilities={abilities}
              itemsBuild={itemsBuild}
              skillOrder={skillOrder}
              abilitiesOrder={abilitiesOrder}
              skillMaxOrder={skillMaxOrder}
              spells={spells}
              perks={perks}
              isCompact={isCompact}
              isSmall={isSmall}
              className={bgClass}
            />
          ) : (
            <ChampionBuildWidgetError
              imgSrc={emoteImage('blitzcrank.png')}
              title={'Not Enough Data'}
              text={`We need more game data to show a reliable build. This may be because a new patch just started or because there aren't enough players playing ${championName} as ${role}.`}
              link={{
                text: `Check other ${championName} builds on Mobalytics`,
                url: genChampionPath(champion),
              }}
              className={clsx(Wrapper, bgClass)}
            />
          )
        }
        <WidgetFooter championName={championName} championSlug={champion} isSmall={isSmall}/>
      </div>
    );
  }

  return null;
};


const Wrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: ${MIN_WIDGET_WIDTH}px;
  background-color: #2d2652!important;
  border-radius: 6px;
`;

const Background = (bg: string) => css`
  background: radial-gradient(56% 38% at 91% 0%, rgba(45, 38, 82, 0.2) 0%, #2C274F 100%), url('${bg}');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 500px;
`;
