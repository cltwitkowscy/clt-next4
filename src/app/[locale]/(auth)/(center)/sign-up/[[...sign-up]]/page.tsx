import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale });
  return {
    title: t("SignUp.meta_title"),
    description: t("SignUp.meta_description"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  return <SignUp path={getI18nPath("/sign-up", locale)} />;
}
