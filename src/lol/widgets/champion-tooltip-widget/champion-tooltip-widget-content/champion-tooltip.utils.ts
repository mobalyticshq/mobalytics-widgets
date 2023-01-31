import { NNumber, NString, Nullable } from '../../../../common/types/lang';
import { calcWinRate } from '../../../../common/utils/math';
import { filterNonNull } from '../../../../common/utils/list';
import {
  LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions_options,
  LolChampionTooltipDynamicQuery_lol_champion_stats_winRateHistory,
} from '../../../types/gql-dynamic/LolChampionTooltipDynamicQuery';

export function formatMetric(
  history: LolChampionTooltipDynamicQuery_lol_champion_stats_winRateHistory[]
): Nullable<{ value: number; isDown: boolean }> {
  const list = history.slice().reverse() || [];
  const [curr, prev] = list;
  return curr?.value ? { value: curr?.value, isDown: !!(prev?.value && curr?.value < prev?.value) } : null;
}

export function formatCounters(
  options: LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions_options[]
): { championSlug: string; winRate: NNumber }[] {
  return options
    .map(it => {
        if(it.matchupSlug){
          const { wins, looses } = it.counterMetrics || {};
          return {
            championSlug: it.matchupSlug,
            winRate: wins && looses && calcWinRate(wins, looses),
          }
        }
        return null;
      }
    )
    .filter(filterNonNull);
}


export function validateChampionType(type: { name: NString; slug: NString}): Nullable<{ name: string; slug: string }> {
  return type?.name && type?.slug ? { slug: type.slug, name: type.name } : null
}
