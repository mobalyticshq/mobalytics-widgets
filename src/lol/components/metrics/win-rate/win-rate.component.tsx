import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import { formatWinRateColor } from '../../../format/colors';
import { formatPercent } from '../../../format/number';
import clsx from 'clsx';

interface Props  {
  winRate: number;
  className?: string;
}

export const WinRate: FunctionComponent<Props> = props => {
  const { className, winRate,  } = props;
  const color = formatWinRateColor(winRate);

  return (
    <span className={clsx(colorStyle(color),className)} >{formatPercent(winRate)}</span>
  );
};

const colorStyle = (color: string) => css`
  color: ${color}!important;
`
