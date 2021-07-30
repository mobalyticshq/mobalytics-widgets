import { gql } from '../../../../common/utils/graphql';

export const DYNAMIC_CHAMPION_BUILD_QUERY_GQL = gql`
  query LolChampionWidgetDynamicQuery($champion: String!, $role: Rolename) {
    lol {
      champion(filters: {slug: $champion, role: $role}) {
        build {
          type
          name
          patch
          role
          championSlug
          spells
          skillOrder
          skillMaxOrder
          items {
            type
            items
          }
          perks {
            IDs
            style
            subStyle
          }
          stats {
            wins
            matchCount
          }
        }
        stats {
          tier
          winRateHistory {
            x
            value
          }
        }
      }
    }
  }
`;
