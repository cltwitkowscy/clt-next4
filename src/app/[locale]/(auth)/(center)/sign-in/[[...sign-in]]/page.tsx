import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

// Prosty jawny typ – bez PageProps i bez Promise:
type RouteParams = { params: { locale: string } };

export async function generateMetadata(
  { params: { locale } }: RouteParams
): Promise<Metadata> {
  // Używamy getTranslations({ locale }) BEZ namespace.
  const t = await getTranslations({ locale });
  return {
    // Klucze z prefiksem "SignIn." zamiast namespace.
    title: t("SignIn.meta_title"),
    description: t("SignIn.meta_description"),
  };
}

export default async function SignInPage(
  { params: { locale } }: RouteParams
) {
  setRequestLocale(locale);
  return <SignIn path={getI18nPath("/sign-in", locale)} />;
}