import { NString } from './lang';

export enum ChampionPageSection {
  BUILDS = 'build',
  ARAM_BUILDS = 'aram-builds',
  PRO_BUILDS = 'pro-builds',
  COUNTERS = 'counters',
  GUIDE = 'guide',
  COMBOS = 'combos',
  LIVE_GAMES = 'live-games',
  LEADERBOARD = 'leaderboard',
}

export type ChampionPageUrlQueryParams = {
  rank?: NString;
  region?: NString;
  patch?: NString;
  queue?: NString;
  buildID?: NString;

  utm_medium?: NString;
  utm_source?: NString;
  utm_campaign?: NString;
  utm_content?: NString;
}
