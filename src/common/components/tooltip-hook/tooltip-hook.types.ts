import { VNode } from 'preact';
import { Ref } from 'preact/hooks';
import { Props as TippyProps } from 'tippy.js';

export interface TooltipHookPayload<PortalElement extends Element> {
  contentRef: Ref<PortalElement | null>;
  contentClass: string;
  triggerHandler: (this: Event['currentTarget'], event: Event) => void;
  unmountTooltip(): void;
  dataLoadedHandler(): void;
  mountTooltip: ((vnode: VNode) => VNode) | null;
}

export interface TooltipHookProps extends Partial<Omit<TippyProps, 'content'>> {
  isAsync?: boolean;
}
