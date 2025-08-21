import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

// Prosty typ props – bez PageProps i bez Promise w params
type RouteParams = { params: { locale: string } };

export async function generateMetadata(
  { params }: RouteParams
): Promise<Metadata> {
  const { locale } = params;
  // v3: nie podajemy namespace w opcjach – używamy pełnych kluczy w t()
  const t = await getTranslations({ locale });

  return {
    title: t("SignIn.meta_title"),
    description: t("SignIn.meta_description"),
  };
}

export default async function SignInPage({ params }: RouteParams) {
  const { locale } = params;
  setRequestLocale(locale);
  return <SignIn path={getI18nPath("/sign-in", locale)} />;
}
