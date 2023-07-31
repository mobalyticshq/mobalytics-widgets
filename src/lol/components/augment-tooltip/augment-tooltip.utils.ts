import { t } from '../../../common/i18n/i18n';

export function formatAugmentTooltipRarity(value: number): string {
  switch (value) {
    case 0:
      return t('Silver');
    case 4:
      return t('Gold');
    case 8:
      return t('Prismatic');
    default:
      return t('Unknown');
  }
}
