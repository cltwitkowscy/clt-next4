import type { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getI18nPath } from '@/utils/Helpers';

type AnyProps = any;

export async function generateMetadata({ params }: AnyProps): Promise<Metadata> {
  const p = params && typeof (params as any).then === 'function' ? await params : params;
  const locale: string = p?.locale ?? 'en';
  const t = await getTranslations({ locale });
  const tx = t as unknown as (key: string, values?: Record<string, unknown>) => string;
  return { title: tx('SignIn.meta_title'), description: tx('SignIn.meta_description') };
}

export default async function SignInPage({ params }: AnyProps) {
  const p = params && typeof (params as any).then === 'function' ? await params : params;
  const locale: string = p?.locale ?? 'en';
  setRequestLocale(locale);
  return <SignIn path={getI18nPath('/sign-in', locale)} />;
}
