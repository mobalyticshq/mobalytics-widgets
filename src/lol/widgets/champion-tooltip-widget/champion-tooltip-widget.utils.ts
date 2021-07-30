import { NString } from '../../../common/types/lang';

export function extractChampionNameFromUrl(url: NString): NString {
  const match = url?.match(/https:\/\/app.mobalytics.gg\/lol\/champions\/(.+)\/build/);
  return match?.[1]?.toLowerCase();
}
