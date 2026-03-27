import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

const STEP_KEYS = ['discover', 'strategize', 'build', 'scale'];

const stepIcons = {
  discover: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  strategize: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  build: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  scale: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

export default function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[var(--color-surface-dark)] scroll-mt-28 overflow-hidden premium-grain">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(11,61,145,0.55),transparent_55%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[min(100vw,40rem)] h-[min(100vw,40rem)] bg-[var(--color-secondary)]/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-px h-96 bg-gradient-to-b from-transparent via-white/10 to-transparent" aria-hidden />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <p className="font-heading text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--color-secondary)] mb-4">
              {t('process.eyebrow')}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3rem] font-bold text-white mb-6 tracking-[-0.03em] leading-[1.1]">
              {t('process.title')}
            </h2>
            <p className="text-lg text-white/60 leading-[1.75]">{t('process.subtitle')}</p>
          </div>
        </FadeIn>

        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute top-[2.35rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-full" />
            <div className="grid grid-cols-4 gap-8">
              {STEP_KEYS.map((key, i) => (
                <FadeIn key={key} delay={i * 100}>
                  <div className="text-center group">
                    <div className="relative mx-auto w-[4.75rem] h-[4.75rem] rounded-2xl bg-gradient-to-br from-white/[0.09] to-white/[0.02] border border-white/15 backdrop-blur-md flex items-center justify-center text-[var(--color-secondary)] mb-7 shadow-premium transition-all duration-500 group-hover:border-[var(--color-secondary)]/40 group-hover:shadow-[0_0_48px_-8px_rgba(255,111,60,0.35)]">
                      {stepIcons[key]}
                    </div>
                    <p className="font-heading text-lg font-bold text-white mb-1.5 tracking-tight">{t(`process.steps.${key}.title`)}</p>
                    <p className="text-sm text-white/50 leading-snug px-2">{t(`process.steps.${key}.subtitle`)}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-4 max-w-md mx-auto">
          {STEP_KEYS.map((key, i) => (
            <FadeIn key={key} delay={i * 80}>
              <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-premium">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[var(--color-primary)]/40 border border-white/10 flex items-center justify-center text-[var(--color-secondary)]">
                  {stepIcons[key]}
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-white tracking-tight">{t(`process.steps.${key}.title`)}</p>
                  <p className="text-sm text-white/50 mt-1">{t(`process.steps.${key}.subtitle`)}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
