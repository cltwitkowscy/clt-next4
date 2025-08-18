﻿import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n/routing';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  // dopasuj root oraz ścieżki z prefiksem języka
  matcher: ['/', '/(en|fr)/:path*']
};
