/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LolChampionAbilityBySlug
// ====================================================

export interface LolChampionAbilityBySlug_items_flatData_stats {
  __typename: "ChampionsAbilitiesV1statsChildDto";
  /**
   * The Stats/Slug nested field.
   */
  slug: string | null;
  /**
   * The Stats/Value nested field.
   */
  value: string | null;
}

export interface LolChampionAbilityBySlug_items_flatData_customStats {
  __typename: "ChampionsAbilitiesV1customStatsChildDto";
  /**
   * The Stats (Override)/Slug nested field.
   */
  slug: string | null;
  /**
   * The Stats (Override)/Value nested field.
   */
  value: string | null;
}

export interface LolChampionAbilityBySlug_items_flatData {
  __typename: "ChampionsAbilitiesV1DataFlatDto";
  activationKey: string | null;
  /**
   * Populated automatically
   */
  riotDesc: string | null;
  mobaDesc: string | null;
  name: string | null;
  slug: string | null;
  stats: LolChampionAbilityBySlug_items_flatData_stats[] | null;
  /**
   * You can override specific ability stats, for example just couldown.
   */
  customStats: LolChampionAbilityBySlug_items_flatData_customStats[] | null;
}

export interface LolChampionAbilityBySlug_items {
  __typename: "ChampionsAbilitiesV1";
  /**
   * The flat data of the Abilities content.
   */
  flatData: LolChampionAbilityBySlug_items_flatData;
}

export interface LolChampionAbilityBySlug {
  /**
   * Query Abilities content items.
   */
  items: LolChampionAbilityBySlug_items[] | null;
}

export interface LolChampionAbilityBySlugVariables {
  filter: string;
}
