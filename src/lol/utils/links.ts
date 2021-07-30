import { ChampionPageSection } from '../../common/types/champions';
import { MOBA_APP_LINK } from '../config';

export function genChampionPath(championSlug: string, section?: ChampionPageSection ): string {
  return `${MOBA_APP_LINK}/lol/champions/${championSlug}/${section || ChampionPageSection.BUILDS}`;
}
