import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

const PILLAR_KEYS = ['fluency', 'support', 'scale', 'execution'];
const TESTIMONIAL_KEYS = ['one', 'two'];

const pillarIcons = {
  fluency: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86 3.86l-.477 2.387a2 2 0 01-.547 1.022A1.997 1.997 0 0112 18c-.001-.746-.434-1.424-1.11-1.757l-.318-.159a6 6 0 00-3.86 3.86l-.477 2.387a2 2 0 01-.547 1.022A1.997 1.997 0 014 18c.001-.746.434-1.424 1.11-1.757l.318-.159a6 6 0 003.86-3.86l.477-2.387a2 2 0 01.547-1.022A1.997 1.997 0 0112 6c.746.001 1.424.434 1.757 1.11l.159.318a6 6 0 003.86 3.86l2.387.477a2 2 0 011.022.547A1.997 1.997 0 0118 12c-.001.746-.434 1.424-1.11 1.757l-.318.159a6 6 0 00-3.86 3.86l-.477 2.387a2 2 0 01-.547 1.022z" />
    </svg>
  ),
  support: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  ),
  scale: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  execution: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-white scroll-mt-28 overflow-hidden premium-grain premium-grain-light">
      <div className="absolute top-1/2 left-0 w-[min(100vw,28rem)] h-[min(100vw,28rem)] -translate-y-1/2 -translate-x-1/2 bg-[radial-gradient(circle,rgba(11,61,145,0.06),transparent_65%)] pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <p className="font-heading text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--color-secondary)] mb-4">
              {t('why.eyebrow')}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3rem] font-bold text-[var(--color-surface-dark)] mb-8 tracking-[-0.03em] leading-[1.1]">
              {t('why.title')}
            </h2>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 py-3 rounded-full bg-[var(--color-neutral)] border border-gray-200/90 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset]">
              <span className="font-heading font-semibold text-[var(--color-primary)]">{t('why.strategy')}</span>
              <span className="text-[var(--color-secondary)] font-bold text-lg leading-none">+</span>
              <span className="font-heading font-semibold text-[var(--color-primary)]">{t('why.technology')}</span>
              <span className="hidden sm:block w-px h-4 bg-gray-300" aria-hidden />
              <span className="text-sm text-gray-600">{t('why.innovationLine')}</span>
            </div>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-7 mb-24">
          {PILLAR_KEYS.map((key, i) => (
            <FadeIn key={key} delay={i * 70}>
              <div className="group h-full p-8 lg:p-9 rounded-2xl border border-gray-200/90 bg-gradient-to-br from-[var(--color-neutral)]/90 to-white shadow-premium-card hover:shadow-[0_28px_56px_-16px_rgba(11,61,145,0.2)] hover:border-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-[var(--color-primary)]">
                <div className="text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] mb-5 transition-colors duration-500">
                  {pillarIcons[key]}
                </div>
                <h3 className="font-heading text-xl font-bold text-[var(--color-surface-dark)] group-hover:text-white mb-3 transition-colors duration-500 tracking-tight">
                  {t(`why.pillars.${key}.title`)}
                </h3>
                <p className="text-gray-600 group-hover:text-white/88 leading-relaxed text-[15px] transition-colors duration-500">
                  {t(`why.pillars.${key}.description`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-surface-dark)] text-center mb-12 tracking-tight">
            {t('why.testimonialsTitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIAL_KEYS.map((key) => (
              <blockquote
                key={key}
                className="relative p-8 md:p-10 rounded-2xl bg-[var(--color-surface-dark)] text-white border border-white/[0.08] shadow-premium overflow-hidden group hover:border-white/15 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-secondary)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <svg className="relative w-10 h-10 text-[var(--color-secondary)]/35 mb-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="relative text-lg leading-[1.7] text-white/[0.92] mb-8 font-light">
                  &ldquo;{t(`why.testimonials.${key}.quote`)}&rdquo;
                </p>
                <footer className="relative border-t border-white/10 pt-6">
                  <p className="font-heading font-semibold text-white">{t(`why.testimonials.${key}.author`)}</p>
                  <p className="text-sm text-white/50 mt-1">{t(`why.testimonials.${key}.org`)}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
