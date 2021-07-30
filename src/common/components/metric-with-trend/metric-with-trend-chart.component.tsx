import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';
import { TriangleWithRoundedCorners } from '../triangle-with-rounded-corners/triangle-with-rounded-corners.component';
import { Text12x400Mixin, Text32x400Mixin } from '../../../lol/ui/typography';

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
      <p className={Title}>{title}</p>
      <div className={MetricValue}>
        <p className={Value}>{valueFormatterFn(value)}</p>
        <div className={MetricMeta}>
          <TriangleWithRoundedCorners isDown={isDown} />
          {symbol && <p className={Symbol}>{symbol}</p>}
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
  margin-left: 4px;
`;

const Title = css`
  ${Text12x400Mixin};
  color: #6b6889;
  letter-spacing: 0.25px;
  margin: 0;
  padding: 0;
`;

const Value = css`
  ${Text32x400Mixin};
  line-height: 32px;
  color: #fff;
  margin: 0;
  padding: 0;
  font-family: apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  letter-spacing: -1px;
`;

const Symbol = css`
  ${Text12x400Mixin};
  color: #fff;
  line-height: 1;
  text-align: center;
  margin: 0;
  padding: 0;
`;
