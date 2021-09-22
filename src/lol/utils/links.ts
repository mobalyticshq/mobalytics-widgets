import queryString from 'query-string';

import { ChampionPageSection, ChampionPageUrlQueryParams } from '../../common/types/champions';
import { MOBA_APP_LINK } from '../config';
import { Nullable } from '../../common/types/lang';

export function genPathQuery(path: string, queryParams?: Nullable<{ [key: string]: string }> ): string {
  const search = queryParams && queryString.stringify(queryParams);
  return search && search.length > 2 ? `${path}?${search}` : path;
}

export function genChampionPath(championSlug: string, section: Nullable<ChampionPageSection>, queryParams?: Nullable<ChampionPageUrlQueryParams> ): string {
  const path = `${MOBA_APP_LINK}/lol/champions/${championSlug}/${section || ChampionPageSection.BUILDS}`;
  const search = queryParams && queryString.stringify(queryParams);
  return `${path}${search && search.length > 2 ? `?${search}` : ''}`;
}
