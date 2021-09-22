import { SkillKey } from '../types/gql-dynamic/globalTypes';

export function formatWinRateColor(winRate?: number) {
  if (winRate === undefined) {
    return 'var(--moba-widget-metric-wr-average)';
  }
  if (winRate < 40) {
    return 'var(--moba-widget-metric-wr-poor)';
  }
  if (winRate >= 40 && winRate < 60) {
    return 'var(--moba-widget-metric-wr-average)';
  }
  if (winRate >= 60 && winRate < 80) {
    return 'var(--moba-widget-metric-wr-good)';
  }
  if (winRate >= 80) {
    return 'var(--moba-widget-metric-wr-great)';
  }
  return 'var(--moba-widget-metric-wr-average)';
}

export const getSkillKeyColor = (key: SkillKey): string => {
  switch(key){
    case SkillKey.PASSIVE:
      return 'var(--moba-widget-skill-key-passive)';
    case SkillKey.Q:
      return 'var(--moba-widget-skill-key-q)';
    case SkillKey.W:
      return 'var(--moba-widget-skill-key-w)';
    case SkillKey.E:
      return 'var(--moba-widget-skill-key-e)';
    case SkillKey.R:
      return 'var(--moba-widget-skill-key-r)';
  }
};

export const getPerksColor = (perk: number): string => {
  switch (perk) {
    case 8000:
      return 'var(--moba-widget-perk-8000)';
    case 8100:
      return 'var(--moba-widget-perk-8100)';
    case 8200:
      return 'var(--moba-widget-perk-8200)';
    case 8300:
      return 'var(--moba-widget-perk-8300)';
    case 8400:
      return 'var(--moba-widget-perk-8400)';
    default:
      return 'var(--moba-widget-perk-default)';
  }
};
