import { CdnVideo } from '../types/video';
import { CDN_LOL_VIDEO_PATH } from '../../lol/config';

export function championAbilityVideo(slug: string): CdnVideo {
  return {
    slug,
    mp4: `${CDN_LOL_VIDEO_PATH}/champion-abilities/${slug}.mp4?1`,
    webm: `${CDN_LOL_VIDEO_PATH}/champion-abilities/${slug}.webm?1`,
    placeholder: `${CDN_LOL_VIDEO_PATH}/champion-abilities/${slug}.png?1`,
  };
}
