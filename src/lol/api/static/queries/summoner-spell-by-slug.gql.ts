import { gql } from '../../../../common/utils/graphql';

export const SummonerSpellFragment = gql`
  fragment SummonerSpellFragment on SummonersSpellsV1DataFlatDto {
    riotId
    slug
    name
    description
    tooltip
    stats {
      slug
      name
      value
    }
  }
`;

export const STATIC_SPELL_FRAGMENT = gql`
  query LolSummonerSpellBySlug($filter: String!) {
    spells: querySummonersSpellsV1Contents(filter: $filter) {
      flatData {
        ...SummonerSpellFragment
      }
    }
  }
  ${SummonerSpellFragment}
`;
