import { de, type TranslationKeys } from './de';
import { en } from './en';

export const translations = {
  de,
  en,
} as const;

export type Locale = 'de' | 'en';
export type { TranslationKeys };
