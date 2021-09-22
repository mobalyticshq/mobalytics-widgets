import { FunctionComponent, h, Fragment } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { perkIcon } from '../../utils/images';
import { NBoolean } from '../../../common/types/lang';
import { useTooltipHook } from '../../../common/components/tooltip-hook/tooltip-hook';
import { PerkTooltip } from '../perk-tooltip/perk-tooltip.component';

interface Props {
  slug: number;
  isActive: NBoolean;
  isKeystones?: NBoolean;
  className?: string;
}

export const RunesIcon: FunctionComponent<Props> = props => {
  const { slug, isActive, isKeystones, className } = props;

  const { mountTooltip, triggerHandler, contentRef, contentClass, dataLoadedHandler } = useTooltipHook({
    isAsync: true,
  });

  return (
    <Fragment>
      <img
        src={perkIcon(slug)}
        className={clsx(isKeystones ? KeystoneIcon : PerksIcon, isActive && Active, className)}
        alt=""
        role="presentation"
        loading="lazy"
        onMouseEnter={triggerHandler}
      />

      {
        mountTooltip && (
          <PerkTooltip
            ref={contentRef}
            riotId={slug}
            onDataLoaded={dataLoadedHandler}
            className={contentClass}
          />
        )
      }
    </Fragment>
  );
};

const KeystoneIcon = css`
  display: block;
  width: 48px;
  height: 48px;
  opacity: 0.5;
  mix-blend-mode: luminosity;
  cursor: help;
`;

const PerksIcon = css`
  display: block;
  width: 38px;
  height: 38px;
  border: 0 solid var(--moba-widget-border-secondary-light);
  border-radius: 50%;

  opacity: 0.5;
  mix-blend-mode: luminosity;
  cursor: help;
`;

const Active = css`
  opacity: 1;
  mix-blend-mode: normal;
  border-width: 2px;
`;
