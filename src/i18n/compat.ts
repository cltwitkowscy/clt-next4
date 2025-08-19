import { getTranslations, getLocale } from "next-intl/server";

/** Zwraca translator namespacowany: t("meta_title") => "NS.meta_title" */
export async function getTNS(locale: string, ns: string) {
  const l = locale ?? (await getLocale());
  const tAll = await getTranslations({ locale: l });

  const t = ((key: string, ...args: any[]) =>
    (tAll as any)(`${ns}.${key}`, ...(args as any))) as any;

  t.rich   = (key: string, ...args: any[]) => (tAll as any).rich(`${ns}.${key}`, ...(args as any));
  t.markup = (key: string, ...args: any[]) => (tAll as any).markup(`${ns}.${key}`, ...(args as any));
  t.raw    = (key: string)                => (tAll as any).raw(`${ns}.${key}`);
  t.has    = (key: string)                => (tAll as any).has(`${ns}.${key}`);

  return t as (key: string, ...args: any[]) => string;
}

/** Jeżeli nie podano locale, pobierz z kontekstu */
export async function ensureLocale(existing?: string) {
  return existing ?? (await getLocale());
}