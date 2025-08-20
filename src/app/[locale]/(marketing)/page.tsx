import { getTNS } from '@/i18n/compat';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Sponsors } from '@/components/Sponsors';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTNS(locale, 'Index');

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTNS(locale, 'Index');

  return (
    <>
      <p>
        {`Follow `}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://twitter.com/ixartz"
          target="_blank"
          rel="noreferrer noopener"
        >
          @Ixartz on Twitter
        </a>
        {` for updates and more information about the boilerplate.`}
      </p>
      <h2 className="mt-5 text-2xl font-bold">
        Boilerplate Code for Your Next.js Project with Tailwind CSS
      </h2>
      <p className="text-base">
        Next.js Boilerplate is a developer-friendly starter code for Next.js projects, built with Tailwind CSS and TypeScript.
        {' '}
        <span role="img" aria-label="zap">
          âšˇď¸Ź
        </span>
        {' '}
        Designed with developer experience in mind, it includes:
      </p>
      <ul className="mt-3 text-base">
        <li>đźš€ Next.js with App Router support</li>
        <li>đź”Ą TypeScript for type checking</li>
        <li>đź’Ž Tailwind CSS integration</li>
        <li>
          đź”’ Authentication with
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://clerk.com?utm_source=github&amp;utm_medium=sponsorship&amp;utm_campaign=nextjs-boilerplate"
          >
            Clerk
          </a>
          {' '}
          (includes passwordless, social, and multi-factor auth)
        </li>
        <li>đź“¦ ORM with DrizzleORM (PostgreSQL, SQLite, MySQL support)</li>
        <li>
          đź’˝ Dev database with PGlite and production with
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://www.prisma.io/?via=nextjsindex"
          >
            Prisma PostgreSQL
          </a>
        </li>
        <li>
          đźŚ Multi-language support (i18n) with next-intl and
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://l.crowdin.com/next-js"
          >
            Crowdin
          </a>
        </li>
        <li>đź”´ Form handling (React Hook Form) and validation (Zod)</li>
        <li>đź“Ź Linting and formatting (ESLint, Prettier)</li>
        <li>đź¦Š Git hooks and commit linting (Husky, Commitlint)</li>
        <li>đź¦ş Testing suite (Vitest, React Testing Library, Playwright)</li>
        <li>đźŽ‰ Storybook for UI development</li>
        <li>
          đź° AI-powered code reviews with
          {' '}
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
          >
            CodeRabbit
          </a>
        </li>
        <li>
          đźš¨ Error monitoring (
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://sentry.io/for/nextjs/?utm_source=github&amp;utm_medium=paid-community&amp;utm_campaign=general-fy25q1-nextjs&amp;utm_content=github-banner-nextjsboilerplate-logo"
          >
            Sentry
          </a>
          ) and logging (LogTape, an alternative to Pino.js)
        </li>
        <li>đź–Ąď¸Ź Monitoring as Code (Checkly)</li>
        <li>
          đź” Security and bot protection (
          <a
            className="font-bold text-blue-700 hover:border-b-2 hover:border-blue-700"
            href="https://launch.arcjet.com/Q6eLbRE"
          >
            Arcjet
          </a>
          )
        </li>
        <li>đź¤– SEO optimization (metadata, JSON-LD, Open Graph tags)</li>
        <li>âš™ď¸Ź Development tools (VSCode config, bundler analyzer, changelog generation)</li>
      </ul>
      <p className="text-base">
        Our sponsors&apos; exceptional support has made this project possible.
        Their services integrate seamlessly with the boilerplate, and we
        recommend trying them out.
      </p>
      <h2 className="mt-5 text-2xl font-bold">{t('sponsors_title')}</h2>
      <Sponsors />
    </>
  );
};

