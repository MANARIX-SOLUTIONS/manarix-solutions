import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function DocumentHead() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language?.startsWith('fr') ? 'fr' : 'en';
  }, [i18n.language]);

  useEffect(() => {
    document.title = t('meta.title');

    const description = t('meta.description');
    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', description);
  }, [i18n, i18n.language, t]);

  return null;
}
