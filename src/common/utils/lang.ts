import { Nullable } from '../types/lang';

export function isDef<T>(value: Nullable<T>): value is T {
  return value !== null && value !== undefined;
}

export function isDefAndNotEmpty<T extends ArrayLike<never>>(value: Nullable<T>): value is T {
  return !!(value && value.length);
}

export function getStrEnumValues<T>(obj: object): T[] {
  const result = [];
  for (const key in obj) {
    result.push((obj as { [key: string]: T })[key] as T);
  }
  return result;
}

export function getStrEnumKeys<T>(obj: object): (keyof T)[] {
  const result = [];
  for (const key in obj) {
    result.push(key as keyof T);
  }
  return result;
}

export function isStrEnumValue<T>(obj: object, value: any): value is T {
  return getStrEnumValues<T>(obj).indexOf(value) !== -1;
}

export function isStrEnumKey<T>(obj: object, value: any): value is keyof T {
  return getStrEnumKeys<T>(obj).indexOf(value) !== -1;
}

export function validateStrEnumValue<T>(obj: Nullable<object>, value: any): T | null {
  return obj && isStrEnumValue<T>(obj, value) ? (value as T) : null;
}
