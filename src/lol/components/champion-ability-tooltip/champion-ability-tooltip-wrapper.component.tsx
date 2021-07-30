import { FunctionComponent, h } from 'preact';
import { useQuery } from 'graphql-hooks';
import { lolApi } from '../../api/api';
import { forwardRef } from 'preact/compat';
import { useEffect } from 'preact/hooks';
import { firstItem } from '../../../common/utils/list';
import { GlobalStyle } from '../../ui/global.mixin';
import { ChampionAbilityTooltip } from './champion-ability-tooltip.component';
import { STATIC_CHAMPION_ABILITY_BY_RIOT_ID } from '../../api/static/queries/champion-ability-by-slug.gql';
import {
  LolChampionAbilityBySlug,
  LolChampionAbilityBySlugVariables,
} from '../../types/gql-static/LolChampionAbilityBySlug';
import { findBySlug } from '../../utils/squidex-data.utils';

interface Props {
  slug: string;
  onDataLoaded?(): void;
  className?: string;
}

enum ChampionAbilityStatSlug {
  Cost = 'cost',
  Range = 'range',
  Cooldown = 'cooldown',
}

export const ChampionAbilityTooltipWrapper: FunctionComponent<Props> = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { slug, onDataLoaded, className } = props;
  const { loading, error, data } = useQuery<LolChampionAbilityBySlug, LolChampionAbilityBySlugVariables>(STATIC_CHAMPION_ABILITY_BY_RIOT_ID, {
    variables: { filter: `data/slug/iv eq '${slug}'` },
    client: lolApi.staticDataClient,
  });

  useEffect(() => {
    !loading && !error && !!data && onDataLoaded?.();
  }, [loading, error, data, onDataLoaded]);

  // todo: log error
  if (loading || error || !data) {
    return null;
  }

  const ability = firstItem(data.items)?.flatData;

  return (
    <div ref={ref} className={className}>
      <ChampionAbilityTooltip
        slug={slug}
        name={ability?.name || slug}
        abilityKey={ability?.activationKey}
        description={ability?.riotDesc || ability?.mobaDesc}
        range={findBySlug(ChampionAbilityStatSlug.Range, ability?.stats)?.value}
        cost={findBySlug(ChampionAbilityStatSlug.Cost, ability?.stats)?.value}
        cooldown={findBySlug(ChampionAbilityStatSlug.Cooldown, ability?.stats)?.value}
        className={GlobalStyle}
      />
    </div>
  );
});
