import { gql } from '../../../../common/utils/graphql';

export const CHAMPION_TOOLTIP_QUERY_GQL = gql`
  query LolChampionTooltipDynamicQuery($championSlug: String!, $skillLevel: LolChampionELO!) {
    lol {
      champion(filters: {slug: $championSlug }){
        build{
          role
        }
        stats(topHistoryPoints: 2) {
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
      }
      championsList(filters: { slug: $championSlug, elo: $skillLevel }) {
        champions {
          roleData {
            role
            champion {
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
