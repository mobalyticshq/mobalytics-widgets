import { FunctionComponent, h } from 'preact';
import { formatWinRateColor } from '../../../format/colors';
import { formatPercent } from '../../../format/number';

interface Props  {
  winRate: number;
  className?: string;
}

export const WinRate: FunctionComponent<Props> = props => {
  const { className, winRate,  } = props;
  const color = formatWinRateColor(winRate);

  return (
    <span className={className} style={{ color }}>{formatPercent(winRate)}</span>
  );
};
