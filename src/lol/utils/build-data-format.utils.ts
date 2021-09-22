import { AbilityIndexToKey } from './abilities';
import { validateStrEnumValue } from '../../common/utils/lang';
import { LolChampionBuildItemsListType, LolChampionBuildType, SkillKey } from '../types/gql-dynamic/globalTypes';
import { filterNonNull } from '../../common/utils/list';
import { LolChampionWidgetDynamicQuery_lol_champion_build_items } from '../types/gql-dynamic/LolChampionWidgetDynamicQuery';
import { ItemsBuildT } from '../components/items-build/types';
import { LolChampionWidgetStaticQuery_champion_flatData_abilities } from '../types/gql-static/LolChampionWidgetStaticQuery';
import { Ability } from '../components/champion-abilities-order/types';
import { extractFromFlatList } from './squidex-data.utils';
import { Nullable } from '../../common/types/lang';
import { LolGameItemFragment } from '../types/gql-static/LolGameItemFragment';

export function formatItemsBuild(
  itemsBuild: LolChampionWidgetDynamicQuery_lol_champion_build_items[],
  gameItems: LolGameItemFragment[]
): Nullable<ItemsBuildT[]> {
  return itemsBuild
    .map(it => {
      const { type, items } = it;
      if (items && type && type !== LolChampionBuildItemsListType.Situational) {
        const connectedItems: Nullable<{ riotId: number; name: string; isMythic: boolean }[]> = items
          .map(it => {
            const item = gameItems.find(i => (i.riotId === it));
            return it && item && item.name
              ? {
                riotId: it,
                name: item.name,
                isMythic: !!extractFromFlatList(item.type)?.find(type => type.slug === 'mythic'),
              }
              : null;
          })
          .filter(filterNonNull);
        return { type, items: connectedItems };
      }
      return null;
    })
    .filter(filterNonNull);
}

export function formatAbilities(
  rawAbilities: LolChampionWidgetStaticQuery_champion_flatData_abilities[]
): Nullable<Ability[]> {
  const abilities = extractFromFlatList(rawAbilities)
  return abilities?.map(it => {
      const { slug, name, activationKey } = it;
      const key = activationKey !== AbilityIndexToKey[0] && validateStrEnumValue<SkillKey>(SkillKey, activationKey);
      return slug && name && key
        ? { slug, name, activationKey: key }
        : null;
    })
    .filter(filterNonNull);
}

export function formatSkillOrder(skillOrder: number[]): SkillKey[] {
  return skillOrder
    ?.map(it => validateStrEnumValue<SkillKey>(SkillKey, AbilityIndexToKey[it]))
    .filter(filterNonNull);
}

export function formatAbilityOrder(order: number[], abilities: Ability[]): Ability[] {
  return order.map(it => {
    const { slug, name } = abilities?.find(i => i.activationKey === AbilityIndexToKey[it]) || {};
    const activationKey = validateStrEnumValue<SkillKey>(SkillKey, AbilityIndexToKey[it]);
    return slug && name && activationKey ? { slug, name, activationKey } : null;
  }).filter(filterNonNull);
}

export function formatSkillMaxOrder(skillMaxOrder: number[]): SkillKey[] {
   return skillMaxOrder
     .map(it => validateStrEnumValue<SkillKey>(SkillKey, AbilityIndexToKey[it]))
     .filter(filterNonNull);
}

export function formatBuildType(type: string): Nullable<LolChampionBuildType> {
  switch (type) {
    case 'most-popular':
      return LolChampionBuildType.MOST_POPULAR;
    case 'highest-wr':
      return LolChampionBuildType.HIGHEST_WIN_RATE;
    case 'recommended':
      return LolChampionBuildType.RECOMMENDED
  }
}
