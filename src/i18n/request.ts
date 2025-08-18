import type {AbstractIntlMessages} from "next-intl";
import {getRequestConfig} from "next-intl/server";
import {routing} from "./routing";

export default getRequestConfig(async ({locale}) => {
  const supported = routing.locales as readonly string[];
  const loc = supported.includes(locale) ? locale : routing.defaultLocale;

  let messages: AbstractIntlMessages;
  switch (loc) {
    case "pl":
      messages = (await import("../messages/pl.json")).default as AbstractIntlMessages;
      break;
    case "de":
      messages = (await import("../messages/de.json")).default as AbstractIntlMessages;
      break;
    default:
      messages = (await import("../messages/en.json")).default as AbstractIntlMessages;
  }

  return {
    locale: loc,
    messages,
    // Nie zabijaj buildu, gdy brakuje klucza
    getMessageFallback: ({key}) => key,
    onError: (err) => {
      // W produkcji pomijamy brakujące klucze
      // (inne błędy możesz logować)
      if ((err as any)?.code === "MISSING_MESSAGE") return;
      console.error(err);
    }
  };
});
