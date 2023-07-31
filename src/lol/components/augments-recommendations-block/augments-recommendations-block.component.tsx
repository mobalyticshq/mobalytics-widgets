import { css } from 'goober';
import { FunctionComponent, h } from 'preact';

import { AugmentsRecommendationsBlockProps } from './augments-recommendations-block.types';
import { AugmentIcon } from '../augment-icon/augment-icon.component';
import { t } from '../../../common/i18n/i18n';
import { isDef } from '../../../common/utils/lang';
import { formatPercent } from '../../format/number';
import { TextBody3RRMixin, TextMetric5RMMixin } from '../../ui/typography';
import clsx from 'clsx';

export const AugmentsRecommendationsBlock: FunctionComponent<AugmentsRecommendationsBlockProps> = props => {
  const { augments, className } = props;

  return (
    <div className={clsx(wrapperCss, className)}>
      {augments.map(it => {
        return (
          <div key={it.round} className={colCss}>
            <div className={titleCss}>
              {t('Round')} {it.round}
            </div>

            {it.list.map((i, index) => {
              return (
                <div key={i.id}>
                  {index !== 0 && <span className={dividerCss} />}

                  <AugmentIcon {...i} className={augmentIconCss} />

                  {isDef(i.pickRate) && <div className={winRateCss}>{formatPercent(i.pickRate)}</div>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const wrapperCss = css`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const titleCss = css`
  ${TextBody3RRMixin};
  color: var(--moba-widget-grey-300);
  margin-bottom: 8px;
  text-transform: capitalize;
`;

const colCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const dividerCss = css`
  display: flex;
  width: 1px;
  height: 8px;
  margin: 4px auto;
  background-color: var(--moba-widget-base-100);
`;

const augmentIconCss = css`
  cursor: help;
`;

const winRateCss = css`
  ${TextMetric5RMMixin};
  margin-top: 4px;
  text-align: center;
  color: var(--moba-widget-grey-100);
`;
