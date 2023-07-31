import {
  GameMode,
  LolChampionBuildItemsListType,
  LolChampionBuildType,
  Rolename,
} from '../types/gql-dynamic/globalTypes';
import { t } from '../../common/i18n/i18n';
import { NString, Nullable } from '../../common/types/lang';

export function formatRoleName(position: Rolename): string {
  switch (position) {
    case Rolename.ADC:
      return t('Bot');
    case Rolename.JUNGLE:
      return t('Jungle');
    case Rolename.MID:
      return t('Mid');
    case Rolename.SUPPORT:
      return t('Support');
    case Rolename.TOP:
      return t('Top');
    case Rolename.UNKNOWN:
      return t('Unknown');
  }
}

export function formatItemsBuildType(type: LolChampionBuildItemsListType): string {
  switch (type) {
    case LolChampionBuildItemsListType.Boots:
      return t('Boots');
    case LolChampionBuildItemsListType.Core:
      return t('Mythic & Core Items');
    case LolChampionBuildItemsListType.Early:
      return t('Early Items');
    case LolChampionBuildItemsListType.FullBuild:
      return t('Additional Items');
    case LolChampionBuildItemsListType.MythicItem:
      return t('Mythic Items');
    case LolChampionBuildItemsListType.Situational:
      return t('Situational Items');
    case LolChampionBuildItemsListType.Starter:
      return t('Starter Items');
    case LolChampionBuildItemsListType.FirstCore:
      return t('1st Core Item');
    case LolChampionBuildItemsListType.SecondCore:
      return t('2nd Core Item');
    case LolChampionBuildItemsListType.FifthItem:
      return t('5th Item');
    case LolChampionBuildItemsListType.FourthItem:
      return t('4th Item');
    case LolChampionBuildItemsListType.SixthItem:
      return t('6th Item');
  }
}

export function formatRunesPath(slug: number): string {
  switch (slug) {
    case 8000:
      return t('Precision');
    case 8100:
      return t('Domination');
    case 8200:
      return t('Sorcery');
    case 8300:
      return t('Inspiration');
    case 8400:
      return t('Resolve');
    default:
      return '';
  }
}

export function formatBuildName(
  championName: string,
  buildType: Nullable<LolChampionBuildType>,
  matchupChampionName: NString,
  proPlayerName: NString
): string {
  switch (buildType) {
    case LolChampionBuildType.MOST_POPULAR:
      return `${championName} most popular build`;
    case LolChampionBuildType.HIGHEST_WIN_RATE:
      return `${championName} highest win rate build`;
    case LolChampionBuildType.MATCHUP_SPECIFIC:
      return `${championName} build ${matchupChampionName ? `VS ${matchupChampionName}` : ''}`;
    case LolChampionBuildType.PRO_PLAYERS:
      return `${championName} build  ${proPlayerName ? `used by ${proPlayerName}` : ''}`;
  }
  return `${championName} build`;
}

export function formatPrefix(gameMode: GameMode): string {
  switch (gameMode) {
    case GameMode.SUMMONER_RIFT:
      return ``;
    case GameMode.ARAM:
      return `ARAM`;
    case GameMode.ARENA:
      return `Arena`;
  }
  return ``;
}
