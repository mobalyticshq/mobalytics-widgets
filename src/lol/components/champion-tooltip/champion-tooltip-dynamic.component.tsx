import { FunctionComponent, h, Fragment} from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { NNumber, Nullable } from '../../../common/types/lang';
import { t } from '../../../common/i18n/i18n';
import { WinRate } from '../metrics/win-rate/win-rate.component';
import { championImage } from '../../utils/images';
import { formatIndicator } from '../../../common/format/number';
import { MetricWithTrend } from '../../../common/components/metric-with-trend/metric-with-trend-chart.component';
import { Text12x400Mixin, Text12x500Mixin } from '../../ui/typography';

interface Props {
  winRate: Nullable<{ value: number; isDown: boolean }>;
  pickRate: Nullable<{ value: number; isDown: boolean }>;
  banRate: Nullable<{ value: number; isDown: boolean }>;
  counterChampions: Nullable<{ championSlug: string; winRate: NNumber }[]>;

  className?: string;
}

export const ChampionTooltipDynamicData: FunctionComponent<Props> = props => {
  const { counterChampions, winRate, pickRate, banRate, className } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      <div className={MetricsWrapper}>
        {winRate && (
          <MetricWithTrend
            title={t('Win rate')}
            value={winRate.value}
            isDown={winRate.isDown}
            valueFormatterFn={formatIndicator}
            symbol={'%'}
          />
        )}
        {pickRate && (
          <MetricWithTrend
            title={t('Pick rate')}
            value={pickRate.value}
            isDown={pickRate.isDown}
            valueFormatterFn={formatIndicator}
            symbol={'%'}
          />
        )}
        {banRate && (
          <MetricWithTrend
            title={t('Ban rate')}
            value={banRate.value}
            isDown={banRate.isDown}
            valueFormatterFn={formatIndicator}
            symbol={'%'}
          />
        )}
      </div>

      {!!counterChampions && (
        <Fragment>
          <div className={Title}>{t('Counters')}</div>
          <div className={Row}>
            {counterChampions.map(it => {
              return (
                <div key={it.championSlug} className={Counter}>
                  <img src={championImage(it.championSlug)} alt="" className={RoundedIcon} role="presentation"  loading="lazy"/>
                  {it.winRate && <WinRate winRate={it.winRate} />}
                </div>
              );
            })}
          </div>
        </Fragment>
      )}
    </div>
  );
};

const Wrapper = css`
  width: 250px;
  height: 164px;
  padding: 16px;
  margin-left: -1px;
`;

const MetricsWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const RoundedIcon = css`
  display: block;
  border: 2px solid #F2BF43;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const Row = css`
  display: flex;
`;

const Title = css`
  ${Text12x400Mixin};
  color: #6b6889;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Counter = css`
  ${Text12x500Mixin};
  margin-left: 24px;

  &:first-child {
    margin: 0;
  }

  & > span {
    display: block;
    margin-top: 4px;
  }
`;
