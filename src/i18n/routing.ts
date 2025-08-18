import { createNavigation } from "next-intl/navigation";

export const routing = {
  locales: ["en", "pl"] as const,
  defaultLocale: "en" as const
};

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
