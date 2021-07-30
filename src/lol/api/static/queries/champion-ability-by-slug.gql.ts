import { gql } from '../../../../common/utils/graphql';

export const STATIC_CHAMPION_ABILITY_BY_RIOT_ID = gql`
  query LolChampionAbilityBySlug($filter: String!) {
    items: queryChampionsAbilitiesV1Contents(filter: $filter) {
      flatData {
        activationKey
        riotDesc: ddragonDescription
        mobaDesc: description
        name
        slug
        stats {
          slug
          value
        }
        customStats {
          slug
          value
        }
      }
    }
  }
`;
