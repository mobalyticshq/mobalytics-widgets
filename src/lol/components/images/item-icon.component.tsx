import { Fragment, FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { gameItemIcon } from '../../utils/images';
import { useTooltipHook } from '../../../common/components/tooltip-hook/tooltip-hook';
import { ItemTooltip } from '../item-tooltip/item-tooltip.component';

interface Props {
  slug: string;
  name: string;
  isMythic?: boolean;
  className?: string;
}

export const ItemIcon: FunctionComponent<Props> = props => {
  const { slug, name, isMythic, className } = props;

  const { mountTooltip, triggerHandler, contentRef, contentClass, dataLoadedHandler } = useTooltipHook({
    isAsync: true,
  });

  return (
    <Fragment>
      <img
        src={gameItemIcon(slug)}
        className={clsx(Icon, isMythic && Mythic, className)}
        alt={name}
        role="presentation"
        loading="lazy"
        onMouseOver={triggerHandler}
      />
      {
        mountTooltip && (
          <ItemTooltip
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

const Icon = css`
  width: 36px;
  height: 36px;
  display: block;
  border: 1px solid var(--moba-widget-border-primary-light);
  border-radius: 2px;
  cursor: help;
`;

const Mythic = css`
  border: 2px solid var(--moba-widget-border-secondary-light);
`;
