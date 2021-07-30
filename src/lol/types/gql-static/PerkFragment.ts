/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

type GqlTagsScalar = string[] | null;

// ====================================================
// GraphQL fragment: PerkFragment
// ====================================================

export interface PerkFragment_flatData {
  __typename: "RunesV1DataFlatDto";
  riotId: number | null;
  name: string | null;
  slug: string | null;
  shortDescription: string | null;
  longDescription: string | null;
  customDescription: string | null;
  childRunes: GqlTagsScalar | null;
}

export interface PerkFragment {
  __typename: "RunesV1";
  /**
   * The id of the Perks content.
   */
  id: string;
  /**
   * The flat data of the Perks content.
   */
  flatData: PerkFragment_flatData;
}
