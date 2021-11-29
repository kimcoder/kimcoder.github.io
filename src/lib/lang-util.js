import { siteConfig } from '../siteConfig';

const LANGUAGE_SESSION_KEY = 'lang';

export const getCurrentLanguage = () => {
  if (typeof window === 'undefined') {
    return '';
  }
  return window.sessionStorage.getItem(LANGUAGE_SESSION_KEY);
}

export const updateLanguage = (lang) => {
  if (!siteConfig.languages.find((options) => options.value === lang)) {
    console.warn(`Cannot update language. It's wrong value`);
    return;
  }
  sessionStorage.setItem(LANGUAGE_SESSION_KEY, lang);
}