import {  NNumber,  Nullable } from '../types/lang';
import { isDef } from './lang';
import { SortDirection } from '../types/sorting';

export function numberComparator(a: NNumber, b: NNumber): number {
  return isDef(a) && isDef(b) ? a - b : -1;
}

export function sortBy<T, V>(
  list: T[],
  accessFn: (value: T) => Nullable<V>,
  comparator: (a: Nullable<V>, b: Nullable<V>) => number,
  direction?: SortDirection,
  safeCopy: boolean = true
): T[] {
  const result = safeCopy ? list.slice() : list;
  direction === SortDirection.ASC
    ? result.sort((a: T, b: T) => comparator(accessFn(a), accessFn(b)))
    : result.sort((a: T, b: T) => comparator(accessFn(b), accessFn(a)));
  return result;
}
