import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { RunesSlotsBlock } from './runes-slots-block.component';
import { RunesComponentProps } from '../types';
import { RunesSlotsMapByID } from '../../../static/runes';
import { RunesIcon } from '../../images/runes-icon.component';

interface Props extends RunesComponentProps{
  className?: string;
}

export const RunesBuildBlock: FunctionComponent<Props> = props => {
  const { className, runes, keystone, style, subStyle } = props;
  const { primary, secondary, perks } = runes;

  return (
    <div className={clsx(Wrapper, className)}>
      <div className={Col}>
        <RunesSlotsBlock
          path={style}
          keystone={keystone}
          runes={primary}
          slots={RunesSlotsMapByID[style].slots}
        />
      </div>
      <div className={Col}>
        <RunesSlotsBlock
          path={subStyle}
          keystone={null}
          runes={secondary}
          slots={RunesSlotsMapByID[subStyle].slots.slice(1)}
        />
        <div className={Row}>
          {perks.map((it, index) => <RunesIcon key={index} slug={it} className={PerksIcon} isActive={true} />)}
        </div>
      </div>
    </div>
  );
};

const Wrapper = css`
  display: flex;
  flex-wrap: wrap;
`;

const Row = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

const Col = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PerksIcon = css`
  width: 24px;
  height: 24px;
  margin: 0 8px;
  border-width: 1px;
`;
