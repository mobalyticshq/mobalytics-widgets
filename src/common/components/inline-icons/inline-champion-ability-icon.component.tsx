import { FunctionComponent, h } from 'preact';
import { css } from 'goober';

import { championAbilityImage } from '../../../lol/utils/images';

interface Props {
  slug: string;
}

export const InlineChampionAbilityIcon: FunctionComponent<Props> = props => {
  const { slug } = props;
  return <img src={championAbilityImage(slug)} role="presentation" alt="" className={Icon} loading="lazy" />;
};

const Icon = css`
  width: 16px;
  height: 16px;
`;
