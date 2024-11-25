import i18nConfig from '@/i18nConfig';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { dir } from 'i18next';
import { notFound } from 'next/navigation';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import Menu from '@/components/Menu';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fermadex',
  description: 'Платформа для управления криптоактивами',
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const i18nNamespaces = ['common'];

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}>
        <ThemeProvider attribute="class">
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <Menu />
            {children}
          </TranslationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
