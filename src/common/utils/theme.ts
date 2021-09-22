import { NString, Nullable } from '../types/lang';
import { getDocumentCookie } from './document';
import { FandomDarkTheme, FandomLightTheme } from '../../lol/ui/themes';

enum WidgetHost {
  LOL_WIKI = 'leagueoflegends.fandom.com',
}

export enum WidgetThemeName {
  LOL_WIKI_LIGHT = 'lol-wiki-light',
  LOL_WIKI_DARK = 'lol-wiki-dark',
}

export function getWidgetThemeName (): Nullable<WidgetThemeName> {
  if(window.location.host === WidgetHost.LOL_WIKI){
    const themeName = getDocumentCookie('theme');
    return themeName && themeName === 'light' ? WidgetThemeName.LOL_WIKI_LIGHT : WidgetThemeName.LOL_WIKI_DARK;
  }
  return null;
}

export function getThemeClassName(): NString {
  const name = getWidgetThemeName();
  switch (name) {
    case WidgetThemeName.LOL_WIKI_LIGHT:
      return FandomLightTheme;
    case WidgetThemeName.LOL_WIKI_DARK:
      return FandomDarkTheme;
  }
  return null;
}
