import { NNumber } from '../../../common/types/lang';
import { LolChampionBuildItemsListType, LolChampionBuildType, Rolename } from '../../types/gql-dynamic/globalTypes';

export interface LolAugment {
  id: number;
  slug: string;
  name: string;
  description: string;
  rarity: number;
}

export interface AugmentsRecommendationsBlockProps {
  className?: string;
  augments: AugmentsRecommendationsBlockAugments[];
}

export interface AugmentsRecommendationsBlockAugments {
  round: string;
  list: AugmentsRecommendationsBlockAugmentListItem[];
}

export interface AugmentsRecommendationsBlockAugmentListItem extends LolAugment {
  pickRate: NNumber;
}


// region ---- ConnectChampionBuildsOptionsInput

export interface ConnectChampionBuildsOptionsInput {
  id: string;
  championSlug: string;
  type: LolChampionBuildType;
  vsChampionSlug: string | null;
  vsRole: Rolename | null;
  role: Rolename | null;
  stats: ConnectChampionBuildsOptionsInputStat | null;
  perks: ConnectChampionBuildsOptionsInputPerk | null;
  items: ConnectChampionBuildsOptionsInputItem[] | null;
  augmentOptions?: (ConnectChampionBuildsOptionsInputAugmentOption | null)[] | null;
}

interface ConnectChampionBuildsOptionsInputStat {
  wins: number | null;
  matchCount: number | null;
}

interface ConnectChampionBuildsOptionsInputPerk {
  IDs: number[] | null;
  style: number;
  subStyle: number;
}

interface ConnectChampionBuildsOptionsInputItem {
  type: LolChampionBuildItemsListType | null;
  items: number[] | null;
  timeToTarget: number | null;
  slots: number[] | null;
}

export interface ConnectChampionBuildsOptionsInputAugmentOption {
  augments: (ConnectChampionBuildsOptionsInputAugmentOptionItem | null)[] | null;
}

export interface ConnectChampionBuildsOptionsInputAugmentOptionItem {
  id: number;
  pickRate: number | null;
}

export interface ConnectedChampionAugment {
  id: number;
  name: string;
  description: string;
  rarity: number;
}

// endregion
