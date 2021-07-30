/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

type GqlTagsScalar = string[] | null;

// ====================================================
// GraphQL query operation: LolGameItemByRiotId
// ====================================================

export interface LolGameItemByRiotId_items_flatData_tags_flatData {
  __typename: "GameItemTagV1DataFlatDto";
  name: string | null;
  slug: string | null;
}

export interface LolGameItemByRiotId_items_flatData_tags {
  __typename: "GameItemTagV1";
  /**
   * The flat data of the Game Item Tag content.
   */
  flatData: LolGameItemByRiotId_items_flatData_tags_flatData;
}

export interface LolGameItemByRiotId_items_flatData_type_flatData {
  __typename: "GameItemTypeV1DataFlatDto";
  slug: string | null;
  name: string | null;
  description: string | null;
}

export interface LolGameItemByRiotId_items_flatData_type {
  __typename: "GameItemTypeV1";
  /**
   * The flat data of the Game Item Type content.
   */
  flatData: LolGameItemByRiotId_items_flatData_type_flatData;
}

export interface LolGameItemByRiotId_items_flatData_fitForChampionType_flatData {
  __typename: "ChampionTypeV1DataFlatDto";
  slug: string | null;
  name: string | null;
}

export interface LolGameItemByRiotId_items_flatData_fitForChampionType {
  __typename: "ChampionTypeV1";
  /**
   * The flat data of the Champion Type content.
   */
  flatData: LolGameItemByRiotId_items_flatData_fitForChampionType_flatData;
}

export interface LolGameItemByRiotId_items_flatData {
  __typename: "GameItemsV1DataFlatDto";
  riotId: number | null;
  name: string | null;
  /**
   * Item total cost
   */
  cost: number | null;
  tags: LolGameItemByRiotId_items_flatData_tags[] | null;
  /**
   * List of items Riot IDs
   */
  buildsInto: GqlTagsScalar | null;
  /**
   * List of Riot item IDs
   */
  buildsFrom: GqlTagsScalar | null;
  /**
   * Displays next to item details info
   */
  mainItemTag: string | null;
  effectDescription: string | null;
  type: LolGameItemByRiotId_items_flatData_type[] | null;
  fitForChampionType: LolGameItemByRiotId_items_flatData_fitForChampionType[] | null;
}

export interface LolGameItemByRiotId_items {
  __typename: "GameItemsV1";
  /**
   * The flat data of the Game Items content.
   */
  flatData: LolGameItemByRiotId_items_flatData;
}

export interface LolGameItemByRiotId {
  /**
   * Query Game Items content items.
   */
  items: LolGameItemByRiotId_items[] | null;
}

export interface LolGameItemByRiotIdVariables {
  filter: string;
}
