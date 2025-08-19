import { ensureLocale, getTNS } from "@/i18n/compat";

type Props = { locale?: string };

export default async function CurrentCount({ locale: incoming }: Props) {
  const locale = await ensureLocale(incoming);
  const t = await getTNS(locale, "CurrentCount");
  const count = 0;

  return (
    <section>
      <h2>{t("title")}</h2>
      <p>{t("count", { num: count })}</p>
    </section>
  );
}