import clsx from 'clsx';
import { useEffect } from 'preact/hooks';
import { FunctionComponent, h } from 'preact';
import { useTooltipHook } from '../../../common/components/tooltip-hook/tooltip-hook';
import { ChampionTooltipWidgetContent } from './champion-tooltip-widget-content/champion-tooltip-widget-content.component';
import { extractChampionNameFromUrl } from './champion-tooltip-widget.utils';
import { GlobalStyle } from '../../ui/global.mixin';
import { DefaultTheme } from '../../ui/themes';

interface Props {
  hostElement: Element;
}

const ChampionTooltipWidget: FunctionComponent<Props> = props => {
  const { hostElement } = props;
  const { mountTooltip, triggerHandler, contentRef, contentClass, dataLoadedHandler } = useTooltipHook({
    isAsync: true,
    interactive: true,
  });
  const isTagNameValid = hostElement.tagName?.toUpperCase() === 'A';
  const champion = extractChampionNameFromUrl(hostElement.getAttribute('href'));

  useEffect(() => {
    const handler = (e: Event) => {
      hostElement.removeEventListener('mouseenter', handler);
      triggerHandler.call(hostElement, e);
    };
    isTagNameValid && champion && hostElement.addEventListener('mouseenter', handler);
    return () => {
      isTagNameValid && champion && hostElement.removeEventListener('mouseenter', handler);
    };
  }, [isTagNameValid, champion, hostElement, triggerHandler]);

  if (!isTagNameValid) {
    // todo: log invalid tag name
    return null;
  }

  if (!champion) {
    // todo: log champion is missing
    return null;
  }

  if (mountTooltip) {
    return (
      <ChampionTooltipWidgetContent
        ref={contentRef}
        championSlug={champion}
        onDataLoaded={dataLoadedHandler}
        className={clsx(GlobalStyle, contentClass, DefaultTheme)}
      />
    );
  }

  return null;
};

export default ChampionTooltipWidget;
