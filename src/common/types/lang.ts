export type Nullable<T> = T | null | undefined;
export type NString = Nullable<string>;
export type NNumber = Nullable<number>;
export type NBoolean = Nullable<boolean>;

export type Dict<T> = { [key: string]: Nullable<T> };
