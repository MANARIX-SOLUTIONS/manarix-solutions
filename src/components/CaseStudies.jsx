import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

const CASE_KEYS = ['banking', 'payments', 'operations'];

export default function CaseStudies() {
  const { t } = useTranslation();

  return (
    <section id="case-studies" className="relative section-shell bg-[var(--color-neutral-alt)] scroll-mt-28 premium-grain premium-grain-light">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <SectionHeader
          eyebrow={t('cases.eyebrow')}
          title={t('cases.title')}
          subtitle={t('cases.subtitle')}
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {CASE_KEYS.map((key, i) => (
            <FadeIn key={key} delay={i * 80}>
              <article className="group card-premium h-full flex flex-col bg-white overflow-hidden">
                <div className="relative h-44 overflow-hidden bg-[var(--color-primary)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-secondary)]/40 opacity-90 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <defs>
                        <pattern id={`case-grid-${key}`} width="24" height="24" patternUnits="userSpaceOnUse">
                          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#case-grid-${key})`} />
                    </svg>
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-2">
                      {t(`cases.items.${key}.industry`)}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-white tracking-tight leading-snug">
                      {t(`cases.items.${key}.title`)}
                    </h3>
                  </div>
                </div>

                <div className="p-8 lg:p-9 flex flex-col flex-1">
                  <div className="space-y-6 mb-8 flex-1">
                    <div>
                      <p className="text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-[0.15em] mb-2">
                        {t('cases.challenge')}
                      </p>
                      <p className="text-[var(--color-text)]/80 leading-relaxed text-[15px]">
                        {t(`cases.items.${key}.problem`)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-[0.15em] mb-2">
                        {t('cases.solution')}
                      </p>
                      <p className="text-[var(--color-text)]/80 leading-relaxed text-[15px]">
                        {t(`cases.items.${key}.solution`)}
                      </p>
                    </div>
                  </div>
                  <div className="pt-7 border-t border-gray-100">
                    <p className="text-[10px] font-bold text-[var(--color-gray)] uppercase tracking-[0.15em] mb-2">
                      {t('cases.outcome')}
                    </p>
                    <p className="font-heading text-3xl font-bold tracking-tight text-gradient-dark mb-2 tabular-nums">
                      {t(`cases.items.${key}.result`)}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-text)]">
                      {t(`cases.items.${key}.resultLabel`)}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
