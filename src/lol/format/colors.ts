import { SkillKey } from '../types/gql-dynamic/globalTypes';

export enum winRateColors {
  POOR = '#E54787',
  AVERAGE = '#FFFFFF',
  GOOD = '#1DC49B',
  GREAT = '#85D0FF',
}

export function formatWinRateColor(winRate?: number) {
  if (winRate === undefined) {
    return winRateColors.AVERAGE;
  }
  if (winRate < 40) {
    return winRateColors.POOR;
  }
  if (winRate >= 40 && winRate < 60) {
    return winRateColors.AVERAGE;
  }
  if (winRate >= 60 && winRate < 80) {
    return winRateColors.GOOD;
  }
  if (winRate >= 80) {
    return winRateColors.GREAT;
  }
  return winRateColors.AVERAGE;
}

export const getSkillKeyColor = (key: SkillKey): string => {
  switch(key){
    case SkillKey.PASSIVE:
      return '#FFC306';
    case SkillKey.Q:
      return '#38C6F4';
    case SkillKey.W:
      return '#47CC42';
    case SkillKey.E:
      return '#FF2576';
    case SkillKey.R:
      return '#858cb2';
  }
};

export const getPerksColor = (perk: number): string => {
  switch (perk) {
    case 8000:
      return '#f2bf43';
    case 8100:
      return '#ca3e3f';
    case 8200:
      return '#9ea9fb';
    case 8300:
      return '#49aab9';
    case 8400:
      return '#a1d586';
    default:
      return '#fff';
  }
};
