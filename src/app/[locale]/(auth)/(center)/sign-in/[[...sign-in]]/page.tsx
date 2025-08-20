import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

// Next oczekuje PageProps z params: Promise<any>, więc używamy Promise tu:
type RouteParams = { params: Promise<{ locale: string }> };

export async function generateMetadata(
  { params }: RouteParams
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SignIn" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function SignInPage({ params }: RouteParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SignIn path={getI18nPath("/sign-in", locale)} />;
}
