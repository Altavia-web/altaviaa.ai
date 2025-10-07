import { translations, type Locale as LocaleType } from '@/locales';

// Re-export Locale type
export type Locale = LocaleType;

/**
 * Get translations for a specific locale
 * @param locale - The locale to get translations for (default: 'de')
 * @returns Translation object for the specified locale
 */
export function getTranslations(locale: Locale = 'de') {
  return translations[locale];
}

/**
 * Hook-style function for getting translations (can be used in Client Components)
 * @param locale - The locale to get translations for (default: 'de')
 * @returns Translation object for the specified locale
 */
export function useTranslations(locale: Locale = 'de') {
  return translations[locale];
}

/**
 * Get the current locale from a pathname
 * @param pathname - The current pathname
 * @returns 'en' if pathname starts with /en, otherwise 'de'
 */
export function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'de';
}

/**
 * Check if a locale is valid
 * @param locale - The locale to check
 * @returns true if locale is 'de' or 'en'
 */
export function isValidLocale(locale: string): locale is Locale {
  return locale === 'de' || locale === 'en';
}
