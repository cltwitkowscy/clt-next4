import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const supported = ['pl','en'] as const;
  const safeLocale = (supported as readonly string[]).includes(locale as string) ? locale : 'en';
  const messages = (await import(`./messages/${safeLocale}.json`)).default;
  return {messages};
});
