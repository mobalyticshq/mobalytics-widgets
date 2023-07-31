export type StringTranslationParams = { [key: string]: string | number };

export function genParamKey(key: string): RegExp {
  return new RegExp(`{{\\s*${key}\\s*}}`, 'gi');
}

export function applyStringParams(tr: string, params: StringTranslationParams): string {
  const keys = Object.keys(params);
  return keys.reduce((result: string, key: string) => result.replace(genParamKey(key), params[key].toString()), tr);
}

// tmp function in order to implement localization in the future
export function t(term: string, params?: StringTranslationParams): string {
  if (params) {
    return applyStringParams(term, params);
  }
  return term;
}
