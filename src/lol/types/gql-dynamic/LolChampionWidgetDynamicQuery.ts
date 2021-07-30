/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Rolename, LolChampionBuildType, LolChampionBuildItemsListType, TierLevel } from "./globalTypes";

// ====================================================
// GraphQL query operation: LolChampionWidgetDynamicQuery
// ====================================================

export interface LolChampionWidgetDynamicQuery_lol_champion_build_items {
  __typename: "LolChampionBuildItemsList";
  type: LolChampionBuildItemsListType | null;
  items: number[] | null;
}

export interface LolChampionWidgetDynamicQuery_lol_champion_build_perks {
  __typename: "LolChampionBuildPerk";
  IDs: number[] | null;
  style: number;
  subStyle: number;
}

export interface LolChampionWidgetDynamicQuery_lol_champion_build_stats {
  __typename: "LolChampionBuildStats";
  wins: number | null;
  matchCount: number | null;
}

export interface LolChampionWidgetDynamicQuery_lol_champion_build {
  __typename: "LolChampionBuild";
  type: LolChampionBuildType;
  name: string | null;
  patch: string | null;
  role: Rolename | null;
  championSlug: string;
  spells: number[] | null;
  skillOrder: number[] | null;
  skillMaxOrder: number[] | null;
  items: LolChampionWidgetDynamicQuery_lol_champion_build_items[] | null;
  perks: LolChampionWidgetDynamicQuery_lol_champion_build_perks | null;
  stats: LolChampionWidgetDynamicQuery_lol_champion_build_stats | null;
}

export interface LolChampionWidgetDynamicQuery_lol_champion_stats_winRateHistory {
  __typename: "LolChampionStatsHistoryPoint";
  x: string | null;
  value: number | null;
}

export interface LolChampionWidgetDynamicQuery_lol_champion_stats {
  __typename: "LolChampionStats";
  tier: TierLevel | null;
  winRateHistory: LolChampionWidgetDynamicQuery_lol_champion_stats_winRateHistory[] | null;
}

export interface LolChampionWidgetDynamicQuery_lol_champion {
  __typename: "LolChampion";
  build: LolChampionWidgetDynamicQuery_lol_champion_build | null;
  stats: LolChampionWidgetDynamicQuery_lol_champion_stats | null;
}

export interface LolChampionWidgetDynamicQuery_lol {
  __typename: "LoL";
  champion: LolChampionWidgetDynamicQuery_lol_champion | null;
}

export interface LolChampionWidgetDynamicQuery {
  lol: LolChampionWidgetDynamicQuery_lol | null;
}

export interface LolChampionWidgetDynamicQueryVariables {
  champion: string;
  role?: Rolename | null;
}
