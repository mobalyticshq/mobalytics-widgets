import { Tooltips } from '../common/types/widgets';
import { FunctionComponent, h, render } from 'preact';
import { collectPropsFromElement } from '../common/utils/dom-scanner';

import ChampionTooltipWidget from '../lol/widgets/champion-tooltip-widget/champion-tooltip-widget.component';
import { NString } from '../common/types/lang';
import { useErrorBoundary } from 'preact/hooks';

interface Props {
  // host element
  hostElement: Element;

  // tooltip type
  dataMobaTooltip?: NString;
}

const TooltipEntrypoint: FunctionComponent<Props> = props => {
  // global error boundaries to not block widgets rendering
  const [error] = useErrorBoundary();
  if (error) {
    return null;
  }

  // render async tooltip base on tooltip type
  switch (props.dataMobaTooltip) {
    case Tooltips.LOL_CHAMPION_TOOLTIP:
      return <ChampionTooltipWidget hostElement={props.hostElement} />;
    default:
      // todo: log error
      return null;
  }
};

export const mountTooltipHostElements = (elements: NodeListOf<Element>): void => {
  elements.forEach(el => {
    if (!el.__isMobaMounted) {
      // mark node as mounded
      el.__isMobaMounted = true;
      // collect host element props
      const props = collectPropsFromElement(el);
      // render tooltip to document body (in fact just adds event listener)
      render(h<Props>(TooltipEntrypoint, { ...props, hostElement: el }), el, undefined);
    }
  });
};
