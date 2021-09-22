import { gql } from '../../../../common/utils/graphql';

export const DYNAMIC_CHAMPION_BUILD_QUERY_GQL = gql`
  query LolChampionWidgetDynamicQuery(
    $champion: String!
    $role: Rolename
    $patch: String
    $region: Region
    $buildID: Int
    $buildType: LolChampionBuildType
  ) {
    lol {
      champion(filters: { slug: $champion, role: $role, patch: $patch, region: $region }) {
        build(filters: { buildId: $buildID, type: $buildType }) {
          id
          type
          name
          role
          patch
          championSlug
          vsChampionSlug
          proPlayer {
            name
          }
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
