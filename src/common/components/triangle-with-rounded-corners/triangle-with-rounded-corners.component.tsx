import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { NBoolean } from '../../types/lang';
import { commonIcon } from '../../format/images';

interface Props {
  isDown?: NBoolean;
  className?: string;
}

export const TriangleWithRoundedCorners: FunctionComponent<Props> = props => {
  const { isDown, className } = props;
  const [iconName, translate] = isDown ? ['trend-down', 'translate(0, -25%)'] : ['trend-up', 'translate(0, 25%)'];
  const style = { transform: translate };
  return (
    <img src={commonIcon(iconName)} alt="" style={style} className={clsx(Icon, className)} loading="lazy" />
  );
};

const Icon = css`
  display: block;
  width: 10px;
  height: 8px;
`;
