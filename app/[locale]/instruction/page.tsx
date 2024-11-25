import BackButton from './BackButton';
import styles from '../page.module.css';
import LanguageChanger from '@/components/LanguageChanger';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['instruction'];

async function Instruction({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className={styles.main}>
        <h1>{t('instruction_header')}</h1>
        <div dangerouslySetInnerHTML={{ __html: t('instruction_content') }} />
        <BackButton />
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}

export default Instruction;
