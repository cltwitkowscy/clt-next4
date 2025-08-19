import {createNavigation} from "next-intl/navigation";

export const locales = ["pl","en","de"] as const;
export const defaultLocale = "pl";

export const routing = {
  locales,
  defaultLocale,
  localePrefix: "as-needed"
} as const;

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
