import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({locale}) => {
  const messages =
    (await import(`../locales/${locale}.json`).catch(() => import("../locales/en.json"))).default;

  return {locale, messages};
});
