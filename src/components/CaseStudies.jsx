import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

const CASE_KEYS = ['financial', 'retail', 'health'];

export default function CaseStudies() {
  const { t } = useTranslation();

  return (
    <section id="case-studies" className="relative py-24 lg:py-32 bg-[var(--color-neutral)] scroll-mt-28 premium-grain premium-grain-light">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <p className="font-heading text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--color-secondary)] mb-4">
              {t('cases.eyebrow')}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3rem] font-bold text-[var(--color-surface-dark)] mb-6 tracking-[-0.03em] leading-[1.1]">
              {t('cases.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-[1.75]">{t('cases.subtitle')}</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-7">
          {CASE_KEYS.map((key, i) => (
            <FadeIn key={key} delay={i * 90}>
              <article className="group h-full flex flex-col rounded-2xl bg-white border border-gray-200/90 overflow-hidden shadow-premium-card hover:shadow-premium-hover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[var(--color-primary)]/15">
                <div className="relative h-1.5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-secondary)]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="p-8 lg:p-9 flex flex-col flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-8">
                    {t(`cases.items.${key}.industry`)}
                  </p>
                  <div className="space-y-5 mb-10 flex-1">
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">{t('cases.challenge')}</p>
                      <p className="text-gray-700 leading-relaxed text-[15px]">{t(`cases.items.${key}.problem`)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">{t('cases.solution')}</p>
                      <p className="text-gray-700 leading-relaxed text-[15px]">{t(`cases.items.${key}.solution`)}</p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-gray-100">
                    <p className="font-heading text-4xl font-bold tracking-tight text-[var(--color-secondary)] mb-2 tabular-nums">
                      {t(`cases.items.${key}.result`)}
                    </p>
                    <p className="text-sm font-semibold text-[var(--color-surface-dark)]">{t(`cases.items.${key}.resultLabel`)}</p>
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
