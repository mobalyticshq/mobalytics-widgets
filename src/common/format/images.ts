import { CDN_COMMON_ICON_PATH } from '../../lol/config';
import { TierLevel } from '../../lol/types/gql-dynamic/globalTypes';

export function commonIcon(name: string): string {
  return `${CDN_COMMON_ICON_PATH}/${name}.svg`;
}

/**
 * Common SVG icons
 * Examples:
 *    https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/S.svg
 *    https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/A.svg
 *
 *    ?1 in the end of URL need for reset cache after gold color was updated
 */
export function hexTierIcon(tier: TierLevel): string {
  return `${CDN_COMMON_ICON_PATH}/hex-tiers/${tier.toUpperCase()}.svg?1`;
}

export function augmentsImage(slug: string): string {
  return `${CDN_COMMON_ICON_PATH}/lol-arena-augment/${slug}.svg?1`;
}
