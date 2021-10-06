import { Fragment, FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { summonerSpellIcon } from '../../utils/images';
import { useTooltipHook } from '../../../common/components/tooltip-hook/tooltip-hook';
import { SpellTooltip } from '../spell-tooltip/spell-tooltip.component';

interface Props {
  riotId: string;
  className?: string;
}

export const SpellIcon: FunctionComponent<Props> = props => {
  const { riotId, className } = props;
  const { mountTooltip, triggerHandler, contentRef, contentClass, dataLoadedHandler, unmountTooltip } = useTooltipHook({ isAsync: true});
  return (
    <Fragment>
      <img
        src={summonerSpellIcon(riotId)}
        className={clsx(Icon, className)}
        alt=""
        role="presentation"
        loading="lazy"
        onMouseOver={triggerHandler}
        onMouseOut={unmountTooltip}
      />
      {
        mountTooltip && (
          <SpellTooltip
            ref={contentRef}
            riotId={riotId?.toString()}
            onDataLoaded={dataLoadedHandler}
            className={contentClass}
          />
        )
      }
    </Fragment>
  );
};

const Icon = css`
  width: 36px;
  height: 36px;
  display: block;
  border: 1px solid var(--moba-widget-border-primary-light);
  border-radius: 2px;
  cursor: help;
`;
