import { NNumber, NString } from '../common/types/lang';
import { Widgets } from '../common/types/widgets';
import { FunctionComponent, h, render } from 'preact';
import { collectPropsFromElement } from '../common/utils/dom-scanner';

import ChampionBuildWidget from '../lol/widgets/champion-build-widget/champion-build-widget.component';
import { useErrorBoundary } from 'preact/hooks';

interface Props {
  // widget type
  dataMobaWidget?: NString;

  // lol champion widget props
  dataMobaChampion?: NString;
  dataMobaChampionRole?: NString;
  dataMobaChampionRegion?: NString;
  dataMobaChampionPatch?: NString;
  dataMobaChampionBuildType?: NString;
  dataMobaChampionBuildId?: NString;
  dataMobaChampionTierIcon?: NString;
  dataMobaWidth?: NNumber;
}

const WidgetEntrypoint: FunctionComponent<Props> = props => {
  // global error boundaries to not block widgets rendering
  const [error] = useErrorBoundary();
  if (error) {
    return null;
  }

  const {
    dataMobaWidget,
    dataMobaChampion,
    dataMobaChampionRole,
    dataMobaWidth,
    dataMobaChampionRegion,
    dataMobaChampionPatch,
    dataMobaChampionBuildType,
    dataMobaChampionBuildId,
    dataMobaChampionTierIcon = 'ON',
  } = props;

  // render async widget base on widget type
  switch (dataMobaWidget) {
    case Widgets.LOL_CHAMPION_BUILD:
    case Widgets.LOL_CHAMPION_BUILD_COMPACT:
      return (
        <ChampionBuildWidget
          champion={dataMobaChampion}
          role={dataMobaChampionRole}
          region={dataMobaChampionRegion}
          patch={dataMobaChampionPatch}
          buildType={dataMobaChampionBuildType}
          buildID={dataMobaChampionBuildId}
          widgetWidth={dataMobaWidth}
          isCompact={dataMobaWidget === Widgets.LOL_CHAMPION_BUILD_COMPACT}
          showTierIcon={dataMobaChampionTierIcon?.toUpperCase() === 'ON'}
        />
      );
    default:
      // todo: log error
      return null;
  }
};

export const mountWidgetHostElements = (elements: NodeListOf<Element>): void => {
  elements.forEach(el => {
    if (!el.__isMobaMounted) {
      // mark node as mounded
      el.__isMobaMounted = true;
      // collect host element props
      const props = collectPropsFromElement(el);
      // clean host element content
      el.innerHTML = '';
      // render widget to host element
      render(h<Props>(WidgetEntrypoint, props), el, undefined);
    }
  });
};
