import type {AbstractIntlMessages} from "next-intl";
import {getRequestConfig} from "next-intl/server";
import {routing} from "./routing";

export default getRequestConfig(async ({locale}) => {
  const supported = routing.locales as readonly string[];
  const loc = supported.includes(locale) ? locale : routing.defaultLocale;

  const messages = (await import(`../messages/${loc}.json`)).default as AbstractIntlMessages;

  return {locale: loc, messages};
});
