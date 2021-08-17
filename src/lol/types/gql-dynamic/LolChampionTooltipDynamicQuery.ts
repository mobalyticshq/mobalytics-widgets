/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LolChampionELO, Rolename } from "./globalTypes";

// ====================================================
// GraphQL query operation: LolChampionTooltipDynamicQuery
// ====================================================

export interface LolChampionTooltipDynamicQuery_lol_champion_build {
  __typename: "LolChampionBuild";
  role: Rolename | null;
}

export interface LolChampionTooltipDynamicQuery_lol_champion_stats_winRateHistory {
  __typename: "LolChampionStatsHistoryPoint";
  x: string | null;
  value: number | null;
}

export interface LolChampionTooltipDynamicQuery_lol_champion_stats_pickRateHistory {
  __typename: "LolChampionStatsHistoryPoint";
  x: string | null;
  value: number | null;
}

export interface LolChampionTooltipDynamicQuery_lol_champion_stats_banRateHistory {
  __typename: "LolChampionStatsHistoryPoint";
  x: string | null;
  value: number | null;
}

export interface LolChampionTooltipDynamicQuery_lol_champion_stats {
  __typename: "LolChampionStats";
  winRateHistory: LolChampionTooltipDynamicQuery_lol_champion_stats_winRateHistory[] | null;
  pickRateHistory: LolChampionTooltipDynamicQuery_lol_champion_stats_pickRateHistory[] | null;
  banRateHistory: LolChampionTooltipDynamicQuery_lol_champion_stats_banRateHistory[] | null;
}

export interface LolChampionTooltipDynamicQuery_lol_champion {
  __typename: "LolChampion";
  build: LolChampionTooltipDynamicQuery_lol_champion_build | null;
  stats: LolChampionTooltipDynamicQuery_lol_champion_stats | null;
}

export interface LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions_options_counterMetrics {
  __typename: "LolChampionCounterMetrics";
  /**
   * Wins count
   */
  wins: number | null;
  /**
   * Looses count
   */
  looses: number | null;
}

export interface LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions_options {
  __typename: "LolChampionCounter";
  matchupSlug: string | null;
  counterMetrics: LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions_options_counterMetrics | null;
}

export interface LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions {
  __typename: "LolChampionCounterOptions";
  options: LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions_options[] | null;
}

export interface LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion {
  __typename: "LolChampion";
  countersOptions: LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions | null;
}

export interface LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData {
  __typename: "RoleData";
  role: Rolename | null;
  champion: LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion | null;
}

export interface LolChampionTooltipDynamicQuery_lol_championsList_champions {
  __typename: "LolChampionsListItem";
  /**
   * Champion's data corresponding to the role
   */
  roleData: LolChampionTooltipDynamicQuery_lol_championsList_champions_roleData[] | null;
}

export interface LolChampionTooltipDynamicQuery_lol_championsList {
  __typename: "LolChampionsList";
  champions: LolChampionTooltipDynamicQuery_lol_championsList_champions[] | null;
}

export interface LolChampionTooltipDynamicQuery_lol {
  __typename: "LoL";
  champion: LolChampionTooltipDynamicQuery_lol_champion | null;
  championsList: LolChampionTooltipDynamicQuery_lol_championsList | null;
}

export interface LolChampionTooltipDynamicQuery {
  lol: LolChampionTooltipDynamicQuery_lol | null;
}

export interface LolChampionTooltipDynamicQueryVariables {
  championSlug: string;
  skillLevel: LolChampionELO;
}
