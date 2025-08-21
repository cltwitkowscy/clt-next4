import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

// Jawne, proste propsy (bez PageProps i bez Promise w params)
type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  setRequestLocale(locale);                 // ustaw kontekst lokalizacji
  const t = await getTranslations("SignIn"); // poprawny overload z namespace (bez obiektu)
  return {
    title: t("meta_title"),
    description: t("meta_description")
  };
}

export default async function Page({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  return <SignIn path={getI18nPath("/sign-in", locale)} />;
}
