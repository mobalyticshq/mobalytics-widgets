import { gql } from '../../../../common/utils/graphql';

export const LolGameItemFragment = gql`
  fragment LolGameItemFragment on GameItemsV1DataFlatDto {
    riotId
    name
    type {
      flatData {
        name
        slug
      }
    }
  }
`;
