import { Nullable } from '../types/lang';
import { isDef } from './lang';

export function firstItem<T>(list: Nullable<T[]>): T | null {
  return list?.length ? list[0] || null : null;
}

export function filterNonNull<T>(value: Nullable<T>): value is T {
  return isDef(value);
}
