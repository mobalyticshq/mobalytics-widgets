import { Nullable } from '../../../common/types/lang';
import { LolChampionBuildItemsListType } from '../../types/gql-dynamic/globalTypes';

export interface ItemsBuildT {
  type: Nullable<LolChampionBuildItemsListType>;
  items: { riotId: number; name: string; isMythic: boolean }[];
};
