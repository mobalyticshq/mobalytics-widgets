import { FunctionComponent, h} from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { hexTierIcon } from '../../utils/images';
import { TierLevel } from '../../types/gql-dynamic/globalTypes';

interface Props {
  name: TierLevel;
  className?: string;
}

export const TierIcon: FunctionComponent<Props> = props => {
  const { name, className } = props;
  return <img src={hexTierIcon(name)} className={clsx(Icon, className)} alt={name} loading="lazy" />;
};

const Icon = css`
  width: 27px;
  height: 32px;
`;
