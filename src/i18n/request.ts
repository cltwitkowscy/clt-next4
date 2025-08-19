import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const l = locale ?? "en";
  const messages = (await import(../locales/.json)).default;
  return { locale: l, messages };
});