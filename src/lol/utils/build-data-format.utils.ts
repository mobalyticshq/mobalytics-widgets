import { AbilityIndexToKey } from './abilities';
import { isDef, validateStrEnumValue } from '../../common/utils/lang';
import { LolChampionBuildItemsListType, LolChampionBuildType, SkillKey } from '../types/gql-dynamic/globalTypes';
import { filterNonNull } from '../../common/utils/list';
import { LolChampionWidgetDynamicQuery_lol_champion_build_items } from '../types/gql-dynamic/LolChampionWidgetDynamicQuery';
import { ItemsBuildT } from '../components/items-build/types';
import { LolChampionWidgetStaticQuery_champion_flatData_abilities } from '../types/gql-static/LolChampionWidgetStaticQuery';
import { Ability } from '../components/champion-abilities-order/types';
import { extractFromFlatList } from './squidex-data.utils';
import { Dict, Nullable } from '../../common/types/lang';
import { LolGameItemFragment } from '../types/gql-static/LolGameItemFragment';
import { numberComparator, sortBy } from '../../common/utils/sorting';
import {
  AugmentsRecommendationsBlockAugmentListItem,
  AugmentsRecommendationsBlockAugments,
  ConnectChampionBuildsOptionsInput,
  ConnectedChampionAugment,
} from '../components/augments-recommendations-block/augments-recommendations-block.types';
import { LolChampionAugmentFragment } from '../types/gql-static/LolChampionAugmentFragment';

const EXCLUDED_ITEM_BUILD_TYPES = [LolChampionBuildItemsListType.Situational, LolChampionBuildItemsListType.MythicItem];

export function formatItemsBuild(
  itemsBuild: LolChampionWidgetDynamicQuery_lol_champion_build_items[],
  gameItems: LolGameItemFragment[]
): Nullable<ItemsBuildT[]> {
  return itemsBuild
    .map(it => {
      const { type, items } = it;
      if (items && type && !EXCLUDED_ITEM_BUILD_TYPES.includes(type)) {
        const connectedItems: Nullable<{ riotId: number; name: string; isMythic: boolean }[]> = items
          .map(it => {
            const item = gameItems.find(i => i.riotId === it);

            if (it && item && item.name) {
              return {
                riotId: it,
                name: item.name,
                isMythic: !!extractFromFlatList(item.type)?.find(type => type.slug === 'mythic'),
              };
            }

            return null;
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
  const abilities = extractFromFlatList(rawAbilities);
  return abilities
    ?.map(it => {
      const { slug, name, activationKey } = it;
      const key = activationKey !== AbilityIndexToKey[0] && validateStrEnumValue<SkillKey>(SkillKey, activationKey);
      return slug && name && key ? { slug, name, activationKey: key } : null;
    })
    .filter(filterNonNull);
}

export function formatSkillOrder(skillOrder: number[]): SkillKey[] {
  return skillOrder?.map(it => validateStrEnumValue<SkillKey>(SkillKey, AbilityIndexToKey[it])).filter(filterNonNull);
}

export function formatAbilityOrder(order: number[], abilities: Ability[]): Ability[] {
  return order
    .map(it => {
      const { slug, name } = abilities?.find(i => i.activationKey === AbilityIndexToKey[it]) || {};
      const activationKey = validateStrEnumValue<SkillKey>(SkillKey, AbilityIndexToKey[it]);
      return slug && name && activationKey ? { slug, name, activationKey } : null;
    })
    .filter(filterNonNull);
}

export function formatSkillMaxOrder(skillMaxOrder: number[]): SkillKey[] {
  return skillMaxOrder.map(it => validateStrEnumValue<SkillKey>(SkillKey, AbilityIndexToKey[it])).filter(filterNonNull);
}

export function formatBuildType(type: string): Nullable<LolChampionBuildType> {
  switch (type) {
    case 'most-popular':
      return LolChampionBuildType.MOST_POPULAR;
    case 'highest-wr':
      return LolChampionBuildType.HIGHEST_WIN_RATE;
    case 'recommended':
      return LolChampionBuildType.RECOMMENDED;
  }
}

export function formatChampionAugmentsByRiotId(
  augments: Nullable<LolChampionAugmentFragment[]>
): Nullable<Dict<ConnectedChampionAugment>> {
  if (isDef(augments)) {
    const mappedAugments = augments
      ?.map((it): Nullable<ConnectedChampionAugment> => {
        if (isDef(it.riotId) && isDef(it.name) && isDef(it.description) && isDef(it.rarity)) {
          return {
            id: it.riotId,
            name: it.name,
            description: it.description,
            rarity: it.rarity,
          };
        }

        return null;
      })
      .filter(isDef);

    const dict: Dict<ConnectedChampionAugment> = {};

    mappedAugments.forEach(i => {
      dict[i.id] = i;
    });

    return dict;
  }

  return null;
}

export function formatAugments(
  augmentOptions: Nullable<ConnectChampionBuildsOptionsInput['augmentOptions']>,
  augmentByRiotId: Nullable<Dict<ConnectedChampionAugment>>
): Nullable<AugmentsRecommendationsBlockAugments[]> {
  if (!!augmentOptions?.length && isDef(augmentByRiotId)) {
    return augmentOptions.reduce<AugmentsRecommendationsBlockAugments[]>((acc, it, index) => {
      if (isDef(it) && !!it.augments?.length) {
        const augments = it.augments.reduce<AugmentsRecommendationsBlockAugmentListItem[]>((acc, it) => {
          if (isDef(it)) {
            const augmentItemData = augmentByRiotId[it.id];

            if (isDef(augmentItemData)) {
              const connectedChampionAugment: AugmentsRecommendationsBlockAugmentListItem = {
                id: it.id,
                slug: String(it.id),
                name: augmentItemData.name,
                description: augmentItemData.description,
                rarity: augmentItemData.rarity,
                pickRate: it.pickRate,
              };

              acc.push(connectedChampionAugment);
            }
          }

          return acc;
        }, []);

        const list = sortBy(augments, it => it.pickRate || 0, numberComparator)?.slice(0, 3);

        acc.push({ round: String(formatAugmentsRound(index)), list });
      }

      return acc;
    }, []);
  }

  return null;
}

function formatAugmentsRound(index: number): number {
  switch (index) {
    case 0:
      return 2;
    case 1:
      return 5;
    case 2:
      return 8;
    case 3:
    default:
      return 11;
  }
}
