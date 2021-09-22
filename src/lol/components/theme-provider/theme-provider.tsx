import { FunctionComponent, createContext, h } from 'preact';
import { css } from 'goober';
import clsx from 'clsx';

import { NString } from '../../../common/types/lang';
import { getThemeClassName } from '../../../common/utils/theme';
import { DefaultTheme } from '../../ui/themes';
import { GlobalStyle } from '../../ui/global.mixin';

export const WidgetThemeTheme = createContext<NString>(null);

export const WidgetThemeProvider: FunctionComponent = props => {
  const { children } = props;
  const themeClassName = getThemeClassName();
  return (
    <WidgetThemeTheme.Provider value={themeClassName}>
      <div className={clsx(Wrapper, GlobalStyle, DefaultTheme, themeClassName)}>
        {children}
      </div>
    </WidgetThemeTheme.Provider>
  );
};

const Wrapper = css`
  width: 100%;
`;
