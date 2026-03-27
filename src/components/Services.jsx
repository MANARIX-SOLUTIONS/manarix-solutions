import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

const SERVICE_KEYS = ['strategy', 'custom', 'innovation', 'data'];

const icons = {
  strategy: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  custom: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  innovation: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 3.86l-.477 2.387a2 2 0 01-.547 1.022A1.997 1.997 0 0112 18c-.001-.746-.434-1.424-1.11-1.757l-.318-.159a6 6 0 00-3.86 3.86l-.477 2.387a2 2 0 01-.547 1.022A1.997 1.997 0 014 18c.001-.746.434-1.424 1.11-1.757l.318-.159a6 6 0 003.86-3.86l.477-2.387a2 2 0 01.547-1.022A1.997 1.997 0 0112 6c.746.001 1.424.434 1.757 1.11l.159.318a6 6 0 003.86 3.86l2.387.477a2 2 0 011.022.547A1.997 1.997 0 0118 12c-.001.746-.434 1.424-1.11 1.757l-.318.159a6 6 0 00-3.86 3.86l-.477 2.387a2 2 0 01-.547 1.022z" />
    </svg>
  ),
  data: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 001 1h6a1 1 0 001-1V4" />
    </svg>
  ),
};

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white scroll-mt-28 overflow-hidden premium-grain premium-grain-light">
      <div className="absolute top-0 right-0 w-[min(55vw,32rem)] h-[min(55vw,32rem)] bg-[radial-gradient(circle_at_center,rgba(11,61,145,0.12),transparent_65%)]" />
      <div className="absolute bottom-0 left-0 w-[min(45vw,24rem)] h-[min(45vw,24rem)] bg-[radial-gradient(circle_at_center,rgba(255,111,60,0.06),transparent_60%)]" />
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <p className="font-heading text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--color-secondary)] mb-4">
              {t('services.eyebrow')}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3rem] font-bold text-[var(--color-surface-dark)] mb-6 tracking-[-0.03em] leading-[1.1]">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-[1.75] max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7">
          {SERVICE_KEYS.map((key, i) => (
            <FadeIn key={key} delay={i * 80}>
              <article className="group relative h-full p-8 lg:p-9 rounded-2xl bg-[var(--color-neutral)]/80 border border-gray-200/90 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[var(--color-primary)]/20 shadow-premium-card hover:shadow-premium-hover">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--color-primary)]/[0.07] via-transparent to-[var(--color-secondary)]/[0.06] pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="inline-flex p-3.5 rounded-xl bg-white border border-gray-100/90 text-[var(--color-primary)] mb-7 group-hover:border-[var(--color-secondary)]/30 group-hover:text-[var(--color-secondary)] group-hover:shadow-[0_12px_40px_-12px_rgba(255,111,60,0.35)] transition-all duration-500">
                    {icons[key]}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[var(--color-surface-dark)] mb-3 tracking-tight">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{t(`services.items.${key}.description`)}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
