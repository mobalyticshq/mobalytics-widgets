import { CDN_COMMON_ICON_PATH } from '../../lol/config';

export function commonIcon(name: string): string {
  return `${CDN_COMMON_ICON_PATH}/${name}.svg`;
}
