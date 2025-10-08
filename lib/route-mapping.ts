import type { Locale } from '@/locales';

/**
 * Route mapping between German and English URLs
 */
export const routeMapping = {
  home: { de: '/', en: '/en' },
  contact: { de: '/kontakt', en: '/en/contact' },
  applications: { de: '/produktuebersicht', en: '/en/applications' },
  applicationsAlt: { de: '/applications', en: '/en/applications' },
  productsPage: { de: '/products', en: '/en/products' },
  resources: { de: '/ressourcen', en: '/en/resources' },
  productPages: {
    datev: { de: '/schnittstelle-datev', en: '/en/datev-interface' },
    travel: { de: '/reisekosten', en: '/en/travel-expenses' },
    dunning: { de: '/dunning', en: '/en/dunning' },
    localization: { de: '/localization-germany', en: '/en/localization-germany' },
    absence: { de: '/abwesenheitsverwaltung', en: '/en/absence-management' },
    peakship: { de: '/peak-ship', en: '/en/peak-ship' },
  },
  imprint: { de: '/impressum', en: '/en/imprint' },
  privacy: { de: '/datenschutzerklarung', en: '/en/privacy' },
} as const;

/**
 * Get the alternate URL for a given path in a different locale
 * @param currentPath - The current path
 * @param targetLocale - The target locale
 * @returns The alternate URL or the home page if no mapping found
 */
export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  // Remove trailing slash for consistency
  const path = currentPath.endsWith('/') && currentPath !== '/'
    ? currentPath.slice(0, -1)
    : currentPath;

  // Helper function to search through nested route objects
  const findRoute = (obj: Record<string, unknown>): string | null => {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null && 'de' in value && 'en' in value) {
        // Check if current path matches either language
        const route = value as { de: string; en: string };
        if (route.de === path || route.en === path) {
          return route[targetLocale] as string;
        }
      } else if (typeof value === 'object' && value !== null) {
        // Recurse into nested objects
        const found = findRoute(value as Record<string, unknown>);
        if (found) return found;
      }
    }
    return null;
  };

  const alternateUrl = findRoute(routeMapping);

  // If no mapping found, return home page of target locale
  return alternateUrl || (targetLocale === 'en' ? '/en' : '/');
}

/**
 * Get all route mappings for a specific page (useful for hreflang tags)
 * @param currentPath - The current path
 * @returns Object with de and en URLs
 */
export function getRouteMapping(currentPath: string): { de: string; en: string } {
  const path = currentPath.endsWith('/') && currentPath !== '/'
    ? currentPath.slice(0, -1)
    : currentPath;

  const findRoute = (obj: Record<string, unknown>): { de: string; en: string } | null => {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null && 'de' in value && 'en' in value) {
        const route = value as { de: string; en: string };
        if (route.de === path || route.en === path) {
          return { de: route.de, en: route.en };
        }
      } else if (typeof value === 'object' && value !== null) {
        const found = findRoute(value as Record<string, unknown>);
        if (found) return found;
      }
    }
    return null;
  };

  return findRoute(routeMapping) || { de: '/', en: '/en' };
}

/**
 * Check if a path is a localized route
 * @param path - The path to check
 * @returns true if the path is in the route mapping
 */
export function isLocalizedRoute(path: string): boolean {
  const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;

  const checkRoute = (obj: Record<string, unknown>): boolean => {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'object' && value !== null && 'de' in value && 'en' in value) {
        const route = value as { de: string; en: string };
        if (route.de === cleanPath || route.en === cleanPath) {
          return true;
        }
      } else if (typeof value === 'object' && value !== null) {
        if (checkRoute(value as Record<string, unknown>)) return true;
      }
    }
    return false;
  };

  return checkRoute(routeMapping);
}
