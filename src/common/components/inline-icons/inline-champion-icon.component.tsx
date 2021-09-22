import { FunctionComponent, h } from 'preact';
import { css } from 'goober';

import { championImage } from '../../../lol/utils/images';

interface Props {
  slug: string;
}

export const InlineChampionIcon: FunctionComponent<Props> = props => {
  const { slug } = props;
  return <img src={championImage(slug)} role="presentation" alt="" className={Icon} loading="lazy" />;
};

const Icon = css`
  display: block;
  border: 2px solid var(--moba-widget-border-secondary-light);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  transform: translate(0, 2px);
`;
