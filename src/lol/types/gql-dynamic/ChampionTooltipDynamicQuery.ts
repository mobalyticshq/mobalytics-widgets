/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LolChampionELO, Rolename } from "./globalTypes";

// ====================================================
// GraphQL query operation: ChampionTooltipDynamicQuery
// ====================================================

export interface ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_stats_winRateHistory {
  __typename: "LolChampionStatsHistoryPoint";
  x: string | null;
  value: number | null;
}

export interface ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_stats_pickRateHistory {
  __typename: "LolChampionStatsHistoryPoint";
  x: string | null;
  value: number | null;
}

export interface ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_stats_banRateHistory {
  __typename: "LolChampionStatsHistoryPoint";
  x: string | null;
  value: number | null;
}

export interface ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_stats {
  __typename: "LolChampionStats";
  winRateHistory: ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_stats_winRateHistory[] | null;
  pickRateHistory: ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_stats_pickRateHistory[] | null;
  banRateHistory: ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_stats_banRateHistory[] | null;
}

export interface ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions_options_counterMetrics {
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

export interface ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions_options {
  __typename: "LolChampionCounter";
  matchupSlug: string | null;
  counterMetrics: ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions_options_counterMetrics | null;
}

export interface ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions {
  __typename: "LolChampionCounterOptions";
  options: ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions_options[] | null;
}

export interface ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion {
  __typename: "LolChampion";
  stats: ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_stats | null;
  countersOptions: ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion_countersOptions | null;
}

export interface ChampionTooltipDynamicQuery_lol_championsList_champions_roleData {
  __typename: "RoleData";
  role: Rolename | null;
  champion: ChampionTooltipDynamicQuery_lol_championsList_champions_roleData_champion | null;
}

export interface ChampionTooltipDynamicQuery_lol_championsList_champions {
  __typename: "LolChampionsListItem";
  /**
   * Champion's data corresponding to the role
   */
  roleData: ChampionTooltipDynamicQuery_lol_championsList_champions_roleData[] | null;
}

export interface ChampionTooltipDynamicQuery_lol_championsList {
  __typename: "LolChampionsList";
  champions: ChampionTooltipDynamicQuery_lol_championsList_champions[] | null;
}

export interface ChampionTooltipDynamicQuery_lol {
  __typename: "LoL";
  championsList: ChampionTooltipDynamicQuery_lol_championsList | null;
}

export interface ChampionTooltipDynamicQuery {
  lol: ChampionTooltipDynamicQuery_lol | null;
}

export interface ChampionTooltipDynamicQueryVariables {
  championSlug: string;
  skillLevel: LolChampionELO;
}
