/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LolSummonerSpellBySlug
// ====================================================

export interface LolSummonerSpellBySlug_spells_flatData_stats {
  __typename: "SummonersSpellsV1statsChildDto";
  /**
   * The Stats/Slug nested field.
   */
  slug: string | null;
  /**
   * The Stats/Name nested field.
   */
  name: string | null;
  /**
   * The Stats/Value nested field.
   */
  value: string | null;
}

export interface LolSummonerSpellBySlug_spells_flatData {
  __typename: "SummonersSpellsV1DataFlatDto";
  riotId: string | null;
  slug: string | null;
  name: string | null;
  /**
   * Automatically populated from Riot Data Dragon
   */
  description: string | null;
  /**
   * Automatically populated from Riot Data Dragon
   */
  tooltip: string | null;
  stats: LolSummonerSpellBySlug_spells_flatData_stats[] | null;
}

export interface LolSummonerSpellBySlug_spells {
  __typename: "SummonersSpellsV1";
  /**
   * The flat data of the Summoners Spells content.
   */
  flatData: LolSummonerSpellBySlug_spells_flatData;
}

export interface LolSummonerSpellBySlug {
  /**
   * Query Summoners Spells content items.
   */
  spells: LolSummonerSpellBySlug_spells[] | null;
}

export interface LolSummonerSpellBySlugVariables {
  filter: string;
}
