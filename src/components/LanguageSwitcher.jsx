import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', labelKey: 'language.en' },
  { code: 'fr', labelKey: 'language.fr' },
];

export default function LanguageSwitcher({ className = '' }) {
  const { i18n, t } = useTranslation();

  return (
    <div
      className={`flex items-center gap-1 rounded-xl border border-white/15 bg-white/[0.06] p-1 backdrop-blur-sm ${className}`}
      role="group"
      aria-label={t('language.switch')}
    >
      {languages.map(({ code, labelKey }) => {
        const active = i18n.language?.startsWith(code);
        return (
          <button
            key={code}
            type="button"
            onClick={() => void i18n.changeLanguage(code)}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold tracking-wide transition-all duration-200 ${
              active
                ? 'bg-[var(--color-secondary)] text-white shadow-md'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            aria-label={t(labelKey)}
            title={t(labelKey)}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
