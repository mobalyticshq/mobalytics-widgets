import { formatAugmentTooltipRarity } from './augment-tooltip.utils';
import { LolAugment } from '../augments-recommendations-block/augments-recommendations-block.types';
import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import { t } from '../../../common/i18n/i18n';
import { TextBody2RRMixin, TextMetric5RMMixin } from '../../ui/typography';
import clsx from 'clsx';
import { forwardRef } from 'preact/compat';
import { augmentsImage } from '../../../common/format/images';

interface Props extends LolAugment {
  className?: string;
}

export const AugmentTooltip: FunctionComponent<Props> = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { slug, name, description, rarity, className } = props;

  return (
    <div className={clsx(tooltipWrapperCss, className)} ref={ref}>
      <header className={headerCss}>
        <div className={iconWrapperCss}>
          <img className={iconCss} src={augmentsImage(slug)} alt={name} />
        </div>

        <div className={hextechInfoCss}>
          <p className={infoInnerCss}>{name}</p>
          <p className={infoInnerCss}>{t('Rarity: {{value}}', { value: formatAugmentTooltipRarity(rarity) })}</p>
        </div>
      </header>
      <p className={descriptionCss}>{description}</p>
    </div>
  );
});

const tooltipWrapperCss = css`
  max-width: 244px;
  padding: 16px 12px;
  color: var(--moba-widget-base-500);
  border-radius: 6px;
  border: 1px solid var(--moba-widget-base-100);
  box-shadow: 0 4px 20px rgba(29, 21, 70, 0.8);
  background-color: var(--moba-widget-base-500);
`;

const headerCss = css`
  display: flex;
  margin-bottom: 12px;
`;

const hextechInfoCss = css`
  ${TextMetric5RMMixin};
  color: var(--moba-widget-white-100);
  margin-left: 12px;
`;

const infoInnerCss = css`
  margin: 0;
`;

const descriptionCss = css`
  ${TextBody2RRMixin};
  color: var(--moba-widget-grey-100);
`;

const iconWrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  border-radius: 3px;
  border: 2px solid var(--moba-widget-base-100);
  background-color: var(--moba-widget-base-500);
`;

const iconCss = css`
  width: 30px;
  height: 30px;
`;
