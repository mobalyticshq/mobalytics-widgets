import { FunctionComponent, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { NNumber, NString, Nullable } from '../../../common/types/lang';
import { validateRegion, validateRolename } from '../../utils/validation';
import { ChampionBuildWidgetError } from './champion-build-widget-error/champion-build-widget-error';
import { ChampionBuildWidgetContent } from './champion-build-widget-content/champion-build-widget-content';

import { amumuCrying } from '../../utils/images';
import { MOBA_APP_LINK } from '../../config';
import { formatBuildType } from '../../utils/build-data-format.utils';
import { WidgetThemeProvider } from '../../components/theme-provider/theme-provider';
import { WidgetSize } from '../../types/widget-props';

interface Props {
  champion: NString;
  role: NString;
  region: NString;
  patch: NString;
  buildType: NString;
  buildID: NString;
  widgetWidth: NNumber;
  isCompact?: boolean;
}

const ChampionBuildWidget: FunctionComponent<Props> = props => {
  const { isCompact, champion, role, widgetWidth, patch, region, buildType, buildID } = props;
  const validatedRole = validateRolename(role);
  const validatedRegion = validateRegion(region);
  const validatedBuildType = buildType ? formatBuildType(buildType) : null;
  const [height, widgetSize] = widgetWidth && getWidgetHeight(widgetWidth, !!isCompact) || [];

  return (
    <WidgetThemeProvider>
      {champion && (!role || validatedRole) ? (
        <ChampionBuildWidgetContent
          champion={champion}
          role={validatedRole}
          region={validatedRegion}
          patch={patch}
          buildType={validatedBuildType}
          buildID={!!buildID ? parseInt(buildID): null}
          compact={!!isCompact}
          widgetWidth={widgetWidth}
          widgetSize={widgetSize}
          className={clsx(Wrapper(height ? `${height}px`: 'auto'))}
        />
      ) : (
        <ChampionBuildWidgetError
          imgSrc={amumuCrying()}
          title={'Something Went Wrong'}
          text={'Sorry, but it appears that this widget or Mobalytics is experiencing some problems at the moment.'}
          link={{
            text: 'Check Mobalytics Status',
            url: MOBA_APP_LINK,
          }}
          className={clsx(Wrapper(height ? `${height}px`: 'auto'))}
        />
      )}
    </WidgetThemeProvider>
  );
};


function getWidgetHeight (widgetWidth: number, isCompact: boolean): Nullable<[number, WidgetSize]> {
  if(widgetWidth >= 740) return [isCompact ? 466 : 778, 'x-large'];
  if(widgetWidth >= 600) return [isCompact ? 616 : 862, 'large'];
  if(widgetWidth >= 560) return [isCompact ? 616 : 862, 'medium'];
  if(widgetWidth >= 300) return [isCompact ? 682 : 682, 'small'];
  return null;
}

const Wrapper = (height: string) => css`
  width: 100%;
  height: ${height};
`;

export default ChampionBuildWidget;
