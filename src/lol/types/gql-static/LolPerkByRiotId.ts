/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

type GqlTagsScalar = string[] | null;

// ====================================================
// GraphQL query operation: LolPerkByRiotId
// ====================================================

export interface LolPerkByRiotId_perks_flatData {
  __typename: "RunesV1DataFlatDto";
  riotId: number | null;
  name: string | null;
  slug: string | null;
  shortDescription: string | null;
  longDescription: string | null;
  customDescription: string | null;
  childRunes: GqlTagsScalar | null;
}

export interface LolPerkByRiotId_perks {
  __typename: "RunesV1";
  /**
   * The id of the Perks content.
   */
  id: string;
  /**
   * The flat data of the Perks content.
   */
  flatData: LolPerkByRiotId_perks_flatData;
}

export interface LolPerkByRiotId {
  /**
   * Query Perks content items.
   */
  perks: LolPerkByRiotId_perks[] | null;
}

export interface LolPerkByRiotIdVariables {
  filter: string;
}
