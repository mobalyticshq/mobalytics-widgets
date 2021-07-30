import { SkillKey } from '../types/gql-dynamic/globalTypes';

export const SkillKeyOrder: Record<SkillKey, number> = {
  [SkillKey.PASSIVE]: 0,
  [SkillKey.Q]: 1,
  [SkillKey.W]: 2,
  [SkillKey.E]: 3,
  [SkillKey.R]: 4,
};
