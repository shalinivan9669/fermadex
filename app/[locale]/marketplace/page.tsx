import React from 'react';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';

const i18nNamespaces = ['marketplace'];

export default async function MarketplacePage({
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
        <h1 className="text-2xl font-bold mb-4">{t('marketplace_title')}</h1>
        <div className="flex">
          {/* Фильтры и сортировка */}
          <aside className="w-1/4 pr-4">
            {/* Категории */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{t('categories')}</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <button className="text-left w-full hover:text-primary-light">
                    {t('category.projects')}
                  </button>
                </li>
                <li>
                  <button className="text-left w-full hover:text-primary-light">
                    {t('category.accounts')}
                  </button>
                </li>
                <li>
                  <button className="text-left w-full hover:text-primary-light">
                    {t('category.proxies')}
                  </button>
                </li>
                <li>
                  <button className="text-left w-full hover:text-primary-light">
                    {t('category.tools')}
                  </button>
                </li>
              </ul>
            </div>
            {/* Сортировка */}
            <div>
              <h2 className="text-xl font-semibold">{t('sorting')}</h2>
              <select className="mt-2 w-full p-2 border rounded">
                <option value="date">{t('sort.date')}</option>
                <option value="price_low">{t('sort.price_low')}</option>
                <option value="price_high">{t('sort.price_high')}</option>
                <option value="popularity">{t('sort.popularity')}</option>
              </select>
            </div>
          </aside>
          {/* Список товаров */}
          <section className="w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Карточка товара */}
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="border rounded p-4 flex flex-col items-center"
                >
                  <div className="h-40 w-full bg-gray-200 mb-4">
                    {/* Изображение товара */}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t('product.name')}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {t('product.description')}
                  </p>
                  <p className="text-primary-light font-bold mb-4">
                    {t('product.price')}
                  </p>
                  <button className="px-4 py-2 bg-primary-light text-white rounded hover:bg-primary-dark">
                    {t('buy_now')}
                  </button>
                </div>
              ))}
            </div>
            {/* Пагинация */}
            <div className="mt-4 flex justify-center">
              <button className="px-3 py-1 border rounded-l">
                {t('pagination.prev')}
              </button>
              <button className="px-3 py-1 border-t border-b">1</button>
              <button className="px-3 py-1 border-t border-b">2</button>
              <button className="px-3 py-1 border-t border-b">3</button>
              <button className="px-3 py-1 border rounded-r">
                {t('pagination.next')}
              </button>
            </div>
          </section>
        </div>
        {/* Всплывающее окно поддержки */}
        <div className="fixed bottom-4 right-4">
          <button className="p-3 bg-primary-light text-white rounded-full shadow-lg">
            {t('support')}
          </button>
        </div>
      </main>
    </TranslationsProvider>
  );
}
