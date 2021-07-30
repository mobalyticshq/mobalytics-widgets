import { FunctionComponent, h } from 'preact';
import { css } from 'goober';

import { gameItemIcon } from '../../../lol/utils/images';

interface Props {
  riotId: string;
}

export const InlineGameItemIcon: FunctionComponent<Props> = props => {
  const { riotId } = props;
  return <img src={gameItemIcon(riotId)} role="presentation" alt="" className={Icon} loading="lazy" />;
};

const Icon = css`
  width: 16px;
  height: 16px;
`;


