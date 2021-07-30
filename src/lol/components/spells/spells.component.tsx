import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { SpellIcon } from '../images/spell-icon.component';

interface Props {
  spells: number[];
  className?: string;
}

export const Spells: FunctionComponent<Props> = props => {
  const { spells, className } = props;
  return (
    <div className={clsx(Wrapper, className)} >
      {spells.map((it) => {
        return <SpellIcon riotId={it.toString()} className={Icon}/>;
      })}
    </div>
  );
};

const Wrapper = css`
  display: flex;
`;

const Icon = css`
  width: 36px;
  height: 36px;
  display: block;
  border: 1px solid #372B60;
  border-radius: 2px;
  margin: 0 8px 0 0;
`;

