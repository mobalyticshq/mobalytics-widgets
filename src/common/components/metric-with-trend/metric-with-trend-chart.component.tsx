import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';
import { TriangleWithRoundedCorners } from '../triangle-with-rounded-corners/triangle-with-rounded-corners.component';
import { Text12x400Mixin, Text20x400Mixin } from '../../../lol/ui/typography';

interface Props {
  title: string;
  value: number;
  isDown: boolean;
  valueFormatterFn: (value: number) => string;
  symbol?: string;

  className?: string;
}

export const MetricWithTrend: FunctionComponent<Props> = props => {
  const { title, value, symbol, isDown, valueFormatterFn, className } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      <div className={Title}>{title}</div>
      <div className={MetricValue}>
        <div className={Value}>{valueFormatterFn(value)}</div>
        <div className={MetricMeta}>
          <TriangleWithRoundedCorners isDown={isDown} />
          {symbol && <div className={Symbol}>{symbol}</div>}
        </div>
      </div>
    </div>
  );
};

const Wrapper = css`
  margin-right: 12px;
`;

const MetricValue = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MetricMeta = css`
  width: 13px;
  margin-left: 4px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1px;
`;

const Title = css`
  ${Text12x400Mixin};
  color: #6B6889!important;
  letter-spacing: 0.25px;
  margin: 0;
  padding: 0;
`;

const Value = css`
  ${Text20x400Mixin};
  font-family: Oswald, sans-serif!important;
  line-height: 32px!important;
  color: #fff!important;
  margin: 0;
  padding: 0;
`;

const Symbol = css`
  ${Text12x400Mixin};
  color: #fff!important;
  line-height: 1!important;
  text-align: center;
  margin: 0;
  padding: 0;
`;
