/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LolChampionTooltipDynamicQuery
// ====================================================

export interface LolChampionTooltipDynamicQuery_championTier_flatData_riftTiers {
  __typename: "ChampionTiersV1riftTiersChildDto";
  /**
   * The Summoners Rift Tiers/Tier nested field.
   */
  tier: string | null;
  /**
   * The Summoners Rift Tiers/Role nested field.
   */
  role: string | null;
  /**
   * The Summoners Rift Tiers/Skill Level nested field.
   */
  skillLevel: string | null;
}

export interface LolChampionTooltipDynamicQuery_championTier_flatData {
  __typename: "ChampionTiersV1DataFlatDto";
  riftTiers: LolChampionTooltipDynamicQuery_championTier_flatData_riftTiers[] | null;
}

export interface LolChampionTooltipDynamicQuery_championTier {
  __typename: "ChampionTiersV1";
  /**
   * The flat data of the Tiers content.
   */
  flatData: LolChampionTooltipDynamicQuery_championTier_flatData;
}

export interface LolChampionTooltipDynamicQuery_championMeta_flatData_type_flatData {
  __typename: "ChampionTypeV1DataFlatDto";
  name: string | null;
  slug: string | null;
}

export interface LolChampionTooltipDynamicQuery_championMeta_flatData_type {
  __typename: "ChampionTypeV1";
  /**
   * The flat data of the Champion Type content.
   */
  flatData: LolChampionTooltipDynamicQuery_championMeta_flatData_type_flatData;
}

export interface LolChampionTooltipDynamicQuery_championMeta_flatData {
  __typename: "ChampionsV1DataFlatDto";
  name: string | null;
  type: LolChampionTooltipDynamicQuery_championMeta_flatData_type[] | null;
}

export interface LolChampionTooltipDynamicQuery_championMeta {
  __typename: "ChampionsV1";
  /**
   * The flat data of the Champions content.
   */
  flatData: LolChampionTooltipDynamicQuery_championMeta_flatData;
}

export interface LolChampionTooltipDynamicQuery {
  /**
   * Query Tiers content items.
   */
  championTier: LolChampionTooltipDynamicQuery_championTier[] | null;
  /**
   * Query Champions content items.
   */
  championMeta: LolChampionTooltipDynamicQuery_championMeta[] | null;
}

export interface LolChampionTooltipDynamicQueryVariables {
  filter: string;
}
