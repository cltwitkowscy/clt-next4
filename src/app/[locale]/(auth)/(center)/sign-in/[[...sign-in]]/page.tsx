import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

// Next/.next/types oczekuje params jako Promise<...>
type RouteParams = { params: Promise<{ locale: string }> };

export async function generateMetadata(
  { params }: RouteParams
): Promise<Metadata> {
  const { locale } = await params;
  // WAŻNE: bez namespace w obiekcie; klucze z prefiksem "SignIn."
  const t = await getTranslations({ locale });

  return {
    title: t("SignIn.meta_title"),
    description: t("SignIn.meta_description"),
  };
}

export default async function SignInPage({ params }: RouteParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SignIn path={getI18nPath("/sign-in", locale)} />;
}
