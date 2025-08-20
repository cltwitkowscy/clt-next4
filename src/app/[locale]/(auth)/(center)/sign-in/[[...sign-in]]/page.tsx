import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

// Next 15 (.next/types) zwykle generuje Promise w params — zostajemy przy tym
type RouteParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { locale } = await params;

  // WAŻNE: nie podajemy namespace w opcjach (bo przeciążenia na to nie pozwalają),
  // a typ tłumacza luzujemy castem, żeby akceptował "SignIn.*".
  const tx = await getTranslations({ locale });
  const t = tx as unknown as (key: string, values?: Record<string, unknown>) => string;

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
