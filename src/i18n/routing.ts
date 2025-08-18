<<<<<<< HEAD
﻿import {createLocalizedPathnamesNavigation, type Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en';

export const pathnames: Pathnames = {
  '/': '/',
  '/about': '/about',
  '/portfolio': '/portfolio'
};

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, defaultLocale, localePrefix: 'as-needed', pathnames});
=======
import { createNavigation } from "next-intl/navigation";

export const routing = {
  locales: ["en", "pl"] as const,
  defaultLocale: "en" as const
};

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
>>>>>>> 82cda11126ec4e63f19433198ec033cacf2bc9b2
