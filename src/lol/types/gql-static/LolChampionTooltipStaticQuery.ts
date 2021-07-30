/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LolChampionTooltipStaticQuery
// ====================================================

export interface LolChampionTooltipStaticQuery_championTier_flatData_riftTiers {
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

export interface LolChampionTooltipStaticQuery_championTier_flatData {
  __typename: "ChampionTiersV1DataFlatDto";
  riftTiers: LolChampionTooltipStaticQuery_championTier_flatData_riftTiers[] | null;
}

export interface LolChampionTooltipStaticQuery_championTier {
  __typename: "ChampionTiersV1";
  /**
   * The flat data of the Tiers content.
   */
  flatData: LolChampionTooltipStaticQuery_championTier_flatData;
}

export interface LolChampionTooltipStaticQuery_championMeta_flatData_type_flatData {
  __typename: "ChampionTypeV1DataFlatDto";
  name: string | null;
  slug: string | null;
}

export interface LolChampionTooltipStaticQuery_championMeta_flatData_type {
  __typename: "ChampionTypeV1";
  /**
   * The flat data of the Champion Type content.
   */
  flatData: LolChampionTooltipStaticQuery_championMeta_flatData_type_flatData;
}

export interface LolChampionTooltipStaticQuery_championMeta_flatData {
  __typename: "ChampionsV1DataFlatDto";
  name: string | null;
  type: LolChampionTooltipStaticQuery_championMeta_flatData_type[] | null;
}

export interface LolChampionTooltipStaticQuery_championMeta {
  __typename: "ChampionsV1";
  /**
   * The flat data of the Champions content.
   */
  flatData: LolChampionTooltipStaticQuery_championMeta_flatData;
}

export interface LolChampionTooltipStaticQuery {
  /**
   * Query Tiers content items.
   */
  championTier: LolChampionTooltipStaticQuery_championTier[] | null;
  /**
   * Query Champions content items.
   */
  championMeta: LolChampionTooltipStaticQuery_championMeta[] | null;
}

export interface LolChampionTooltipStaticQueryVariables {
  filter: string;
}
