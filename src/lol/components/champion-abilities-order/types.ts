import { SkillKey } from '../../types/gql-dynamic/globalTypes';

export interface Ability {
  slug: string;
  name: string;
  activationKey: SkillKey;
}
