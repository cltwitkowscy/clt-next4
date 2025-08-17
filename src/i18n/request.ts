import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  let messages;
  try {
    messages = (await import(../locales/.json)).default;
  } catch {
    // Fallback na en, jeśli np. brakuje pliku fr.json
    messages = (await import('../locales/en.json')).default;
  }
  return {messages};
});
