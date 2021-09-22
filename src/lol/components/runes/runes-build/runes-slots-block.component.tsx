import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { formatRunesPath } from '../../../format/texts';
import { NNumber } from '../../../../common/types/lang';
import { RunesIcon } from '../../images/runes-icon.component';
import { Text14x700Mixin } from '../../../ui/typography';

interface Props {
  path: number;
  keystone: NNumber;
  runes: number[];
  slots: number[][];
  className?: string;
}

export const RunesSlotsBlock: FunctionComponent<Props> = props => {
  const { className, path, keystone, runes, slots } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      <div className={Header}>
        <RunesIcon className={PathIcon} slug={path} isActive={true} isKeystones={true}/>
        <div className={Name}>{formatRunesPath(path)}</div>
      </div>
      <div className={Grid}>
        {slots.map((row, rowIndex) => {
          const isKeystones = keystone && row.includes(keystone);
          return (
            <div className={clsx(Row, isKeystones && KeystoneRow)} key={rowIndex}>
              {row.map(runeSlug => {
                const isActive = ((keystone === runeSlug) || runes.includes(runeSlug));
                return  (
                  <RunesIcon slug={runeSlug} isActive={isActive} isKeystones={!!isKeystones}/>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 204px;
`;

const Grid = css`
  display: grid;
  row-gap: 20px;
  position: relative;
`;

const Header = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const Name = css`
  ${Text14x700Mixin};
  color: var(--moba-widget-text-primary-dark)!important;
  text-transform: capitalize;
  margin-left: 8px;
`;

const PathIcon = css`
  width: 36px!important;
  height: 36px!important;
`;

const Row = css`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-column-gap: 20px;
  position: relative;
`;

const KeystoneRow = css`
  margin-top: -5px;
  margin-bottom: -5px;
`;
