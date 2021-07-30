import { gql } from '../../../../common/utils/graphql';

export const STATIC_PERK_FRAGMENT = gql`
  fragment PerkFragment on RunesV1 {
    id
    flatData {
      riotId
      name
      slug
      shortDescription
      longDescription
      customDescription: customLongDescription
      childRunes
    }
  }
`;

export const STATIC_PERK_BY_RIOT_ID = gql`
  query LolPerkByRiotId($filter: String!) {
    perks: queryRunesV1Contents(filter: $filter) {
      ...PerkFragment
    }
  }
  ${STATIC_PERK_FRAGMENT}
`;
