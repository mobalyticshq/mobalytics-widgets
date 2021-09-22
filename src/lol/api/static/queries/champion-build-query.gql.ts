import { gql } from '../../../../common/utils/graphql';
import { LolGameItemFragment } from './game-items-query.gql';

export const STATIC_CHAMPION_BUILD_QUERY_GQL = gql`
  query LolChampionWidgetStaticQuery($filter: String!) {
    champion: queryChampionsV1Contents(filter: $filter) {
      id
      flatData {
        name
        abilities {
          id
          flatData {
            slug
            name
            activationKey
          }
        }
      }
    }
    perks: queryRunesV1Contents {
      id
      flatData {
        riotId
        name
      }
    }
    itemsChunk1: queryGameItemsV1Contents(top: 200, skip: 0) {
      flatData {
        ...LolGameItemFragment
      }
    }
    itemsChunk2: queryGameItemsV1Contents(top: 200, skip: 200) {
      flatData {
        ...LolGameItemFragment
      }
    }
  }
  ${LolGameItemFragment}
`;
