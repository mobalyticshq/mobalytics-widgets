import { NString, Nullable } from '../../common/types/lang';

export function extractFromFlatList<T>(list: Nullable<{ flatData: T }[]>): T[] | null {
  return list ? list.map(it => it.flatData) : null;
}

export function findBySlug<T extends { slug: NString }>(slug: NString, list: Nullable<T[]>): T | null {
  return slug && list ? list.find(it => it.slug === slug) || null : null;
}
