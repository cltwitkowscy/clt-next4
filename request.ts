// src/i18n/request.ts
import type {AbstractIntlMessages} from 'next-intl';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  // Ustal wspierany język
  const supported = new Set(routing.locales as readonly string[]);
  const loc = supported.has(locale as any) ? (locale as typeof routing.locales[number]) : routing.defaultLocale;

  // ⬇️ Jeżeli pliki masz w src/messages, ZOSTAW tę linię:
  const messages: AbstractIntlMessages = (await import(`../messages/${loc}.json`)).default;

  // ⬇️ Jeśli zamiast tego używasz src/locales, PODMIEŃ tylko powyższą linię na:
  // const messages: AbstractIntlMessages = (await import(`../locales/${loc}.json`)).default;

  return {locale: loc, messages};
});
