import {createLocalizedPathnamesNavigation, type Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en';

export const pathnames: Pathnames = {
  '/': '/',
  '/about': '/about',
  '/portfolio': '/portfolio'
};

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, defaultLocale, localePrefix: 'as-needed', pathnames});
