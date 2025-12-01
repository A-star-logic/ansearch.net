import { defaultLang, ui } from './ui';

/**
 * Paths that don't have translations and should always use the default locale
 */
const untranslatedPaths = ['/policies/', '/tools/'];

/**
 * Extract the language from the url
 * @param url the url to extract the language from
 * @returns the language or the default language
 */
export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang]: string[] = url.pathname.split('/');
  if (lang && lang in ui) {
    return lang as keyof typeof ui;
  }
  return defaultLang;
}

/**
 * Rewrite the path to use the current language
 * Falls back to default locale for paths that don't have translations
 * @param lang the language to use
 * @returns a function that takes a path and returns the translated path
 */
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, language = lang): string {
    // Check if this path should not be translated
    const shouldSkipTranslation = untranslatedPaths.some((prefix) => {
      return path.startsWith(prefix);
    });

    if (shouldSkipTranslation) {
      return path; // Return path without language prefix
    }

    if (path === '/') {
      const homeTranslated = language === defaultLang ? path : `/${language}`;
      return homeTranslated;
    }
    return language === defaultLang ? path : `/${language}${path}`;
  };
}

/**
 * Get the translations object for the current language
 * @param lang the language to use
 * @returns the translations for the current language
 */
export function useTranslations(lang: string): (typeof ui)[keyof typeof ui] {
  if (lang in ui) {
    return ui[lang as keyof typeof ui];
  }
  return ui[defaultLang];
}
