import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'pl', 'de'],
  defaultLocale: 'en'
});

// kompatybilność ze starymi importami:
export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
