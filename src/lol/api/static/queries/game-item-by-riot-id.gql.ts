import { gql } from '../../../../common/utils/graphql';

export const STATIC_GAME_ITEM_BY_RIOT_ID = gql`
  query LolGameItemByRiotId($filter: String!) {
    items: queryGameItemsV1Contents(filter: $filter) {
      flatData {
        riotId
        name
        cost
        tags {
          flatData {
            name
            slug
          }
        }
        buildsInto
        buildsFrom
        mainItemTag
        effectDescription
        type {
          flatData {
            slug
            name
            description
          }
        }
        fitForChampionType {
          flatData {
            slug
            name
          }
        }
      }
    }
  }
`;
