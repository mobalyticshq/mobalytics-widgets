import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { getPerksColor } from '../../../format/colors';
import { RunesComponentProps } from '../types';
import { RunesIcon } from '../../images/runes-icon.component';

interface Props extends RunesComponentProps{
  className?: string;
}

export const RunesBuildCompactBlock: FunctionComponent<Props> = props => {
  const { className } = props;
  const { keystone, style, subStyle, runes } = props;
  const { primary, secondary, perks } = runes;

  return (
    <div className={clsx(Wrapper, className)}>
      <div className={clsx(Row, LineWrapper(getPerksColor(style)))}>
        <RunesIcon slug={style} className={MainIcon} isActive={true} isKeystones={true} />
        <RunesIcon slug={keystone} className={KeystoneIcon} isActive={true} isKeystones={true} />
        {primary.map((it) => <RunesIcon key={it} slug={it} className={Icon} isActive={true}/>)}
      </div>
      <div className={clsx(Row, LineWrapper(getPerksColor(subStyle)))}>
        <RunesIcon slug={subStyle} className={Icon} isActive={true} isKeystones={true} />
        {secondary.map((it, index) => <RunesIcon key={index} slug={it} className={Icon} isActive={true}/>)}
      </div>
      <div className={Row}>
        {perks.map((it, index) => <RunesIcon key={index} slug={it} className={PerksIcon} isActive={true}/>)}
      </div>
    </div>
  );
};

const Wrapper = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -12px;
`;

const Row = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 22px;
  margin-top: 12px;

  &:last-child {
    margin-right: 0;
  }

  img{
    margin-left: 16px;
    position: relative;
    z-index: 1;

    &:first-child{
      margin-left: 0;
    }
  }
`;

const LineWrapper = (color: string) => css`
  position: relative;

  &:before {
    display: block;
    content: '';
    width: calc(100% - 40px);
    height: 2px;
    position: absolute;
    z-index: 0;
    background: ${color};
    top: calc(50% - 1px);
    left: 20px;
  }

  &:after {
    display: block;
    content: '';
    width: calc(100% - 40px);
    height: 4px;
    position: absolute;
    top: calc(50% - 3px);
    left: 20px;

    border-top: 1px solid ${color};
    border-bottom: 1px solid ${color};
    opacity: 0.6;
    z-index: 0;
  }
`;

const Icon = css`
  max-width: 32px;
  max-height: 32px;
`;

const MainIcon = css`
  max-width: 36px;
  max-height: 36px;
`;

const KeystoneIcon = css`
  width: 48px;
  height: 48px;
  margin-left: 4px!important;
  margin-right: -8px;
`;

const PerksIcon = css`
  width: 24px;
  height: 24px;
  border-width: 1px;
`;
