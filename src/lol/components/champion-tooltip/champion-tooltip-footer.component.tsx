import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { MiddleDot } from '../../format/symbols';
import { genChampionPath } from '../../utils/links';
import { t } from '../../../common/i18n/i18n';
import { ChampionPageSection } from '../../../common/types/champions';
import { Text12x500Mixin } from '../../ui/typography';

interface Props {
  championSlug: string;
  className?: string;
}

export const ChampionTooltipFooter: FunctionComponent<Props> = props => {
  const { championSlug, className } = props;

  return (
    <div className={clsx(Wrapper, className)}>
      <a href={genChampionPath(championSlug, ChampionPageSection.BUILDS)}>{t('Build')}</a>
      {MiddleDot}
      <a href={genChampionPath(championSlug, ChampionPageSection.GUIDE)}>{t('Guide')}</a>
      {MiddleDot}
      <a href={genChampionPath(championSlug, ChampionPageSection.PRO_BUILDS)}>{t('Probuilds')}</a>
      {MiddleDot}
      <a href={genChampionPath(championSlug, ChampionPageSection.COMBOS)}>{t('Combos')}</a>
      {MiddleDot}
      <a href={genChampionPath(championSlug, ChampionPageSection.COUNTERS)}>{t('Counters')}</a>
    </div>
  );
};

const Wrapper = css`
  ${Text12x500Mixin};
  color: var(--moba-widget-text-secondary)!important;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--moba-widget-bg-primary-dark);

  a {
    display: block;
    margin: 0 8px;
    color: var(--moba-widget-link-primary)!important;

    &:focus,
    &:hover {
      color: var(--moba-widget-link-hover)!important;
    }
  }
`;
