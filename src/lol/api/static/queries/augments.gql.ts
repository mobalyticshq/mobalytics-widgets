import { gql } from '../../../../common/utils/graphql';

export const LolChampionAugmentFragmentGql = gql`
  fragment LolChampionAugmentFragment on ChampionsAugmentsV1DataFlatDto {
    riotId
    name
    description
    rarity
  }
`;
