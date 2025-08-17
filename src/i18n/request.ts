import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  let messages;
  try {
    messages = (await import(../locales/.json)).default;
  } catch {
    // Fallback na en, gdy np. brakuje pliku dla danego języka
    messages = (await import('../locales/en.json')).default;
  }
  // ⬅️ ważne: zwracamy też locale
  return { locale, messages };
});
