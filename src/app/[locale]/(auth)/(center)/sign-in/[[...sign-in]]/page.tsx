import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

// Prosty, jawny typ params:
type RouteParams = { params: { locale: string } };

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("SignIn");
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function SignInPage({ params }: RouteParams) {
  const { locale } = params;
  setRequestLocale(locale);
  return <SignIn path={getI18nPath("/sign-in", locale)} />;
}