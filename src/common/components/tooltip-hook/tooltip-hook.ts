import { css } from 'goober';
import { VNode } from 'preact';
import { createPortal } from 'preact/compat';
import tippy, { Instance as TippyInstance, hideAll } from 'tippy.js';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { TooltipHookPayload, TooltipHookProps } from './tooltip-hook.types';

function mountTooltip(vnode: VNode): VNode {
  return createPortal(vnode, document.body);
}

const contentClass = css`
  visibility: hidden;
  position: absolute;
`;

export function useTooltipHook<TriggerElement extends Element = Element, PortalElement extends Element = Element>(
  props?: TooltipHookProps
): TooltipHookPayload<PortalElement> {
  const [triggerState, setTriggerState] = useState<number>(0);
  const triggerElementRef = useRef<TriggerElement | null>(null);
  const contentRef = useRef<PortalElement | null>(null);
  const tippyRef = useRef<TippyInstance>();
  const propsRef = useRef<TooltipHookProps | undefined>(props);

  const triggerHandler = useCallback((e: Event) => {
    if (!triggerElementRef.current) {
      triggerElementRef.current = e.currentTarget as TriggerElement;
      setTriggerState(1);
    }
  }, []);

  const dataLoadedHandler = useCallback(() => {
    if (tippyRef.current && contentRef.current) {
      tippyRef.current.setContent(contentRef.current);
      tippyRef.current.show();
    }
  }, []);

  useEffect(() => {
    if (!tippyRef.current && triggerElementRef.current) {
      const { isAsync, ...rest } = propsRef.current || {};
      tippyRef.current = tippy(triggerElementRef.current, {
        content: contentRef.current || undefined,
        ...rest,
        delay: 0,
        onShow: (instance: TippyInstance) => {
          hideAll({ duration: 0 });
          const content = instance.props.content as HTMLElement | null;
          if (content) {
            content.style.visibility = 'visible';
            content.style.position = 'relative';
          }
        },
      });
      !isAsync && tippyRef.current.show();
    }
  }, [tippyRef, triggerElementRef, triggerState]);

  return {
    contentRef,
    triggerHandler,
    dataLoadedHandler,
    contentClass,
    mountTooltip: triggerElementRef.current ? mountTooltip : null,
  };
}
