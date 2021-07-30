import { FunctionComponent, h, Fragment } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { championAbilityImage } from '../../utils/images';
import { useTooltipHook } from '../../../common/components/tooltip-hook/tooltip-hook';
import { ChampionAbilityTooltipWrapper } from '../champion-ability-tooltip/champion-ability-tooltip-wrapper.component';

interface Props {
  slug: string;
  name: string;
  className?: string;
}

export const ChampionAbilityIcon: FunctionComponent<Props> = props => {
  const { slug, name, className } = props;

  const { mountTooltip, triggerHandler, contentRef, contentClass, dataLoadedHandler } = useTooltipHook({
    isAsync: true,
  });

  return (
    <Fragment>
      <img
        src={championAbilityImage(slug)}
        className={clsx(Icon, className)}
        alt={name}
        role="presentation"
        loading="lazy"
        onMouseEnter={triggerHandler}
      />
      {
        mountTooltip && (
          <ChampionAbilityTooltipWrapper
            ref={contentRef}
            slug={slug}
            onDataLoaded={dataLoadedHandler}
            className={contentClass}
          />
        )
      }
    </Fragment>
  );
};

const Icon = css`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: help;
`;
