import { FunctionComponent, h} from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { hexTierIcon } from '../../utils/images';
import { TierLevel } from '../../types/gql-dynamic/globalTypes';

interface Props {
  name: TierLevel;
  alt?: string;
  className?: string;
}

export const TierIcon: FunctionComponent<Props> = props => {
  const { name, alt, className } = props;
  return (
    <div className={clsx(Wrapper,className)}>
      <svg className={Icon} viewBox="0 0 32 38"  width="32" height="38" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 1l15 9v18l-15 9-15-9V10l15-9z" fill="#F2BF43" />
      </svg>
      <img src={hexTierIcon(name)} className={Icon} alt={alt || name} loading="lazy" />
    </div>
  );
};

const Wrapper = css`
  position: relative;
  width: 27px;
  height: 32px;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0;
    filter: drop-shadow(0px 0px 3px #F2BF43);

    transition: opacity ease .15s;
  }

  img {
    position: absolute;
    z-index: 1;
  }

  &:hover{
    svg{
      opacity: 1;
    }
  }
`;

const Icon = css`
  display: block;
  width: 27px;
  height: 32px;
`;
