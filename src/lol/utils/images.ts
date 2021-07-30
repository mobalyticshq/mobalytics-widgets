import { CDN_CGI_LOL_IMG_PATH, CDN_COMMON_ICON_PATH, CDN_COMMON_IMG_PATH, CDN_LOL_IMG_PATH } from '../config';
import { Rolename } from '../types/gql-dynamic/globalTypes';

export function championImage(slug: string): string {
  return `${CDN_LOL_IMG_PATH}/dd/champions/icons/${slug.toLowerCase()}.png`;
}

export function summonerSpellIcon(slug: number | string): string {
  return `${CDN_LOL_IMG_PATH}/dd/summoner-spells/${slug}.png`;
}

export function championAbilityImage(slug: string): string {
  return `${CDN_LOL_IMG_PATH}/dd/champions/abilities/${slug}.png`;
}

export function gameItemIcon(slug: number | string): string {
  return `${CDN_LOL_IMG_PATH}/dd/game-items/${slug}.png`;
}

export function perkIcon(slug: number | string): string {
  // we can't use ddragon image here because they have lower quality then ours
  return `${CDN_LOL_IMG_PATH}/perks/${slug}.png`;
}

export function roleNameIcon(roleName: Rolename): string {
  return `${CDN_LOL_IMG_PATH}/rolename-icon/${roleName}.svg`;
}

export function mobalyticsLogoSymbol(): string {
  return `${CDN_COMMON_IMG_PATH}/logo/moba-logo-symbol-beta.svg`;
}

export function championPosterImage(slug: string): string {
  return `${CDN_LOL_IMG_PATH}/dd/champions/backgrounds/${slug.toLowerCase()}.jpg`;
}

export function amumuCrying(): string {
  return `${CDN_LOL_IMG_PATH}/ui/game-items/items-list-empty.png`;
}

export function emoteImage(name: string): string {
  return `${CDN_LOL_IMG_PATH}/ui/emotes/${name}`;
}

export function championPosterW400Image(slug: string): string {
  return `${CDN_CGI_LOL_IMG_PATH}/fit=cover,width=400/assets/lol/images/dd/champions/backgrounds/${slug.toLowerCase()}.jpg`;
}

export function championClassIcon(slug: string) {
  return `${CDN_LOL_IMG_PATH}/champions-classes/${slug}.svg`;
}

/**
 * Common SVG icons
 * Examples:
 *    https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/S.svg
 *    https://cdn.mobalytics.gg/assets/common/icons/hex-tiers/A.svg
 *
 *    ?1 in the end of URL need for reset cache after gold color was updated
 */
export function hexTierIcon(tier: string): string {
  return `${CDN_COMMON_ICON_PATH}/hex-tiers/${tier.toUpperCase()}.svg?1`;
}
