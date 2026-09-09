import en from './en.json';
import ru from './ru.json';

export type Locale = 'en' | 'ru';

const translations: Record<Locale, typeof en> = { en, ru };

export const defaultLocale: Locale = 'ru';

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale];
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  return 'ru';
}
