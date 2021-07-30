import { NString } from '../../common/types/lang';
import { Rolename } from '../types/gql-dynamic/globalTypes';
import { validateStrEnumValue } from '../../common/utils/lang';

export function validateRolename(value: NString): Rolename | null {
  return value ? validateStrEnumValue<Rolename>(Rolename, value.toUpperCase()) : null;
}
