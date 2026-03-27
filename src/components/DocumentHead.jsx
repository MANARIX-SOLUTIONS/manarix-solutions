import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function DocumentHead() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language?.startsWith('fr') ? 'fr' : 'en';
  }, [i18n.language]);

  useEffect(() => {
    document.title = i18n.t('meta.title');
  }, [i18n, i18n.language]);

  return null;
}
