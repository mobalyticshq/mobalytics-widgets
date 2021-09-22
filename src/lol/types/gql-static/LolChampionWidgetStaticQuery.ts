/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LolChampionWidgetStaticQuery
// ====================================================

export interface LolChampionWidgetStaticQuery_champion_flatData_abilities_flatData {
  __typename: "ChampionsAbilitiesV1DataFlatDto";
  slug: string | null;
  name: string | null;
  activationKey: string | null;
}

export interface LolChampionWidgetStaticQuery_champion_flatData_abilities {
  __typename: "ChampionsAbilitiesV1";
  /**
   * The id of the Abilities content.
   */
  id: string;
  /**
   * The flat data of the Abilities content.
   */
  flatData: LolChampionWidgetStaticQuery_champion_flatData_abilities_flatData;
}

export interface LolChampionWidgetStaticQuery_champion_flatData {
  __typename: "ChampionsV1DataFlatDto";
  name: string | null;
  abilities: LolChampionWidgetStaticQuery_champion_flatData_abilities[] | null;
}

export interface LolChampionWidgetStaticQuery_champion {
  __typename: "ChampionsV1";
  /**
   * The id of the Champions content.
   */
  id: string;
  /**
   * The flat data of the Champions content.
   */
  flatData: LolChampionWidgetStaticQuery_champion_flatData;
}

export interface LolChampionWidgetStaticQuery_perks_flatData {
  __typename: "RunesV1DataFlatDto";
  riotId: number | null;
  name: string | null;
}

export interface LolChampionWidgetStaticQuery_perks {
  __typename: "RunesV1";
  /**
   * The id of the Perks content.
   */
  id: string;
  /**
   * The flat data of the Perks content.
   */
  flatData: LolChampionWidgetStaticQuery_perks_flatData;
}

export interface LolChampionWidgetStaticQuery_itemsChunk1_flatData_type_flatData {
  __typename: "GameItemTypeV1DataFlatDto";
  name: string | null;
  slug: string | null;
}

export interface LolChampionWidgetStaticQuery_itemsChunk1_flatData_type {
  __typename: "GameItemTypeV1";
  /**
   * The flat data of the Game Item Type content.
   */
  flatData: LolChampionWidgetStaticQuery_itemsChunk1_flatData_type_flatData;
}

export interface LolChampionWidgetStaticQuery_itemsChunk1_flatData {
  __typename: "GameItemsV1DataFlatDto";
  riotId: number | null;
  name: string | null;
  type: LolChampionWidgetStaticQuery_itemsChunk1_flatData_type[] | null;
}

export interface LolChampionWidgetStaticQuery_itemsChunk1 {
  __typename: "GameItemsV1";
  /**
   * The flat data of the Game Items content.
   */
  flatData: LolChampionWidgetStaticQuery_itemsChunk1_flatData;
}

export interface LolChampionWidgetStaticQuery_itemsChunk2_flatData_type_flatData {
  __typename: "GameItemTypeV1DataFlatDto";
  name: string | null;
  slug: string | null;
}

export interface LolChampionWidgetStaticQuery_itemsChunk2_flatData_type {
  __typename: "GameItemTypeV1";
  /**
   * The flat data of the Game Item Type content.
   */
  flatData: LolChampionWidgetStaticQuery_itemsChunk2_flatData_type_flatData;
}

export interface LolChampionWidgetStaticQuery_itemsChunk2_flatData {
  __typename: "GameItemsV1DataFlatDto";
  riotId: number | null;
  name: string | null;
  type: LolChampionWidgetStaticQuery_itemsChunk2_flatData_type[] | null;
}

export interface LolChampionWidgetStaticQuery_itemsChunk2 {
  __typename: "GameItemsV1";
  /**
   * The flat data of the Game Items content.
   */
  flatData: LolChampionWidgetStaticQuery_itemsChunk2_flatData;
}

export interface LolChampionWidgetStaticQuery {
  /**
   * Query Champions content items.
   */
  champion: LolChampionWidgetStaticQuery_champion[] | null;
  /**
   * Query Perks content items.
   */
  perks: LolChampionWidgetStaticQuery_perks[] | null;
  /**
   * Query Game Items content items.
   */
  itemsChunk1: LolChampionWidgetStaticQuery_itemsChunk1[] | null;
  /**
   * Query Game Items content items.
   */
  itemsChunk2: LolChampionWidgetStaticQuery_itemsChunk2[] | null;
}

export interface LolChampionWidgetStaticQueryVariables {
  filter: string;
}
