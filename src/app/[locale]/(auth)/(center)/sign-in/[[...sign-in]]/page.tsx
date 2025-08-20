import type { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type ISignInPageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: ISignInPageProps): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale });
  return {
    title: t('SignIn.meta_title'),
    description: t('SignIn.meta_description')
  };
}

export default async function SignInPage({ params }: ISignInPageProps) {
  const { locale } = params;
  setRequestLocale(locale);
  return <SignIn path={getI18nPath('/sign-in', locale)} />;
}
