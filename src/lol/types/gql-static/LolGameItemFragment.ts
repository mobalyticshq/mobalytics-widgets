/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LolGameItemFragment
// ====================================================

export interface LolGameItemFragment_type_flatData {
  __typename: "GameItemTypeV1DataFlatDto";
  name: string | null;
  slug: string | null;
}

export interface LolGameItemFragment_type {
  __typename: "GameItemTypeV1";
  /**
   * The flat data of the Game Item Type content.
   */
  flatData: LolGameItemFragment_type_flatData;
}

export interface LolGameItemFragment {
  __typename: "GameItemsV1DataFlatDto";
  riotId: number | null;
  name: string | null;
  type: LolGameItemFragment_type[] | null;
}
