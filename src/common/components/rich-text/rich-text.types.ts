import { NString } from '../../types/lang';

export type InTextSubstitutionFn = (group: string, values: NString[]) => any | null;
