import { ensureLocale, getTNS } from "@/i18n/compat";

type Props = { locale?: string };

export default async function Hello({ locale: incoming }: Props) {
  const locale = await ensureLocale(incoming);
  // Historycznie ten komponent używał namespace "Dashboard"
  const t = await getTNS(locale, "Dashboard");
  return <p>{t("hello_message")}</p>;
}