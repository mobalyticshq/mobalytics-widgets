/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SummonerSpellFragment
// ====================================================

export interface SummonerSpellFragment_stats {
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

export interface SummonerSpellFragment {
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
  stats: SummonerSpellFragment_stats[] | null;
}
