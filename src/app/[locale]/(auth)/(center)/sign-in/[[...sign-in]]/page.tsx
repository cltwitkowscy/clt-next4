import type { Metadata, PageProps } from 'next';
import { SignIn } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

export async function generateMetadata({ params }: PageProps<{ locale: string }>): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'SignIn' });
  return {
    title: t('meta_title'),
    description: t('meta_description')
  };
}

export default async function SignInPage({ params }: PageProps<{ locale: string }>) {
  const { locale } = params;
  setRequestLocale(locale);
  return <SignIn path={getI18nPath('/sign-in', locale)} />;
}
