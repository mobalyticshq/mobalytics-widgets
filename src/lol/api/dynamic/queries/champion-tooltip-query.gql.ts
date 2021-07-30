import { gql } from '../../../../common/utils/graphql';

export const CHAMPION_TOOLTIP_QUERY_GQL = gql`
  query LolChampionTooltipDynamicQuery($championSlug: String!, $skillLevel: LolChampionELO!) {
    lol {
      champion(filters: {slug: $championSlug }){
        build{
          role
        }
      }
      championsList(filters: { slug: $championSlug, elo: $skillLevel }) {
        champions {
          roleData {
            role
            champion {
              stats {
                winRateHistory {
                  x
                  value
                }
                pickRateHistory {
                  x
                  value
                }
                banRateHistory {
                  x
                  value
                }
              }
              countersOptions(top: 5) {
                options {
                  matchupSlug
                  counterMetrics {
                    wins
                    looses
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
