import { gql } from '../../../../common/utils/graphql';

export const CHAMPION_TOOLTIP_STATIC_QUERY_GQL = gql`
  query LolChampionTooltipStaticQuery($filter: String!) {
    championTier: queryChampionTiersV1Contents(filter: $filter) {
      flatData {
        riftTiers {
          tier
          role
          skillLevel
        }
      }
    }

    championMeta: queryChampionsV1Contents(filter: $filter) {
      flatData {
        name
        type {
          flatData {
            name
            slug
          }
        }
      }
    }
  }
`;
