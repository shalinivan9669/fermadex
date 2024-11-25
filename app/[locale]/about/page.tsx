import React from 'react';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['about'];

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="container mx-auto p-4">
        {/* Заголовок */}
        <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
        <p className="mb-8">{t('introduction')}</p>
        {/* Разделы */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{t('mission.title')}</h2>
          <p>{t('mission.content')}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{t('team.title')}</h2>
          {/* Здесь можно добавить информацию о команде */}
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{t('history.title')}</h2>
          <p>{t('history.content')}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{t('values.title')}</h2>
          <p>{t('values.content')}</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{t('partners.title')}</h2>
          {/* Здесь можно добавить логотипы партнеров и клиентов */}
        </section>
        {/* Футер */}
        <footer className="mt-8">
          <p>{t('contact_info')}</p>
          {/* Ссылки на социальные сети */}
        </footer>
      </main>
    </TranslationsProvider>
  );
}
