import clsx from 'clsx';
import { css, keyframes } from 'goober';
import { VNode } from 'preact';
import { createPortal } from 'preact/compat';
import { useCallback, useContext, useEffect, useRef, useState } from 'preact/hooks';
import tippy, { Instance as TippyInstance, hideAll } from 'tippy.js';

import { TooltipHookPayload, TooltipHookProps } from './tooltip-hook.types';
import { DefaultTheme } from '../../../lol/ui/themes';
import { WidgetThemeTheme } from '../../../lol/components/theme-provider/theme-provider';

function mountTooltip(vnode: VNode): VNode {
  return createPortal(vnode, document.body);
}

const rotate = keyframes`
  from { opacity: 0; transform: translate(0, -5px); }
  to { opacity: 1; transform: translate(0, 0px);}
`;

const contentClass = css`
  visibility: hidden;
  position: absolute;
  animation: ${rotate} .15s ease-in forwards;
`;

export function useTooltipHook<TriggerElement extends Element = Element, PortalElement extends Element = Element>(
  props?: TooltipHookProps
): TooltipHookPayload<PortalElement> {
  const [triggerState, setTriggerState] = useState<number>(0);
  const triggerElementRef = useRef<TriggerElement | null>(null);
  const contentRef = useRef<PortalElement | null>(null);
  const tippyRef = useRef<TippyInstance>();
  const propsRef = useRef<TooltipHookProps | undefined>(props);
  const themeClassName = useContext(WidgetThemeTheme);

  const triggerHandler = useCallback((e: Event) => {
    if (!triggerElementRef.current && !!e?.currentTarget) {
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

  const unmountTooltip = useCallback(() => { hideAll({ duration: 0 }) }, []);

  useEffect(() => {
    if (!tippyRef.current && triggerElementRef.current) {
      const { isAsync, ...rest } = propsRef.current || {};
      tippyRef.current = tippy(triggerElementRef.current, {
        content: contentRef.current || undefined,
        ...rest,
        delay: 0,
        onShow: (instance: TippyInstance) => {
          hideAll({ duration: 0, exclude: instance });
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
    unmountTooltip,
    contentClass: clsx(contentClass, DefaultTheme, themeClassName),
    mountTooltip: triggerElementRef.current ? mountTooltip : null,
  };
}
