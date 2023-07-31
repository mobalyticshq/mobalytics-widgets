import { css } from 'goober';
import { FunctionComponent, h } from 'preact';
import { augmentsImage } from '../../../common/format/images';
import clsx from 'clsx';
import { forwardRef } from 'preact/compat';
import { useTooltipHook } from '../../../common/components/tooltip-hook/tooltip-hook';
import { AugmentTooltip } from '../augment-tooltip/augment-tooltip.component';
import { AugmentsRecommendationsBlockAugmentListItem } from '../augments-recommendations-block/augments-recommendations-block.types';

interface Props extends AugmentsRecommendationsBlockAugmentListItem {
  className?: string;
}

export const AugmentIcon: FunctionComponent<Props> = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, slug, name, id, description, rarity } = props;

  const { mountTooltip, triggerHandler, contentRef, contentClass, unmountTooltip } = useTooltipHook({ isAsync: false });

  return (
    <div className={clsx(wrapperCss, className)} ref={ref}>
      <img
        className={iconCss}
        src={augmentsImage(slug)}
        alt={name}
        onMouseOver={triggerHandler}
        onMouseOut={unmountTooltip}
      />
      {mountTooltip && (
        <AugmentTooltip
          id={id}
          slug={slug}
          name={name}
          description={description}
          rarity={rarity}
          ref={contentRef}
          className={contentClass}
        />
      )}
    </div>
  );
});

const wrapperCss = css`
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
