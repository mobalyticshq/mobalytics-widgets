import { NString } from '../../common/types/lang';
import { Region, Rolename } from '../types/gql-dynamic/globalTypes';
import { validateStrEnumValue } from '../../common/utils/lang';

export function validateRolename(value: NString): Rolename | null {
  return value ? validateStrEnumValue<Rolename>(Rolename, value.toUpperCase()) : null;
}

export const validateRegion = (value: NString): Region | null => {
  return validateStrEnumValue<Region>(Region, value);
};
