import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

// Uwaga: NIE typujemy parametru funkcji Page ani generateMetadata,
// żeby nie ścierać się z wewnętrznym Next.js PageProps (który u Ciebie wymaga Promise).
export async function generateMetadata({ params }: any): Promise<Metadata> {
  // "await" zadziała i dla Promise, i dla zwykłego obiektu
  const { locale } = await params;
  const t = await getTranslations({ locale }); // <— bez namespace w obiekcie opcji
  return {
    title: t("SignIn.meta_title"),
    description: t("SignIn.meta_description")
  };
}

export default async function SignInPage({ params }: any) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SignIn path={getI18nPath("/sign-in", locale)} />;
}
