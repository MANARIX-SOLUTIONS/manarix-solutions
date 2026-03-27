import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedCounter from './AnimatedCounter';
import FadeIn from './FadeIn';

const logoPlaceholders = ['Vertex Global', 'Nordic Finance', 'Pulse Retail', 'Helix Health', 'Apex Manufacturing'];

const stats = [
  { value: 50, suffix: '+', labelKey: 'trust.stats.projects' },
  { value: 10, suffix: '+', labelKey: 'trust.stats.industries' },
];

export default function SocialProof() {
  const { t } = useTranslation();
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section
      ref={ref}
      id="trust"
      className={`relative py-20 lg:py-28 bg-[var(--color-neutral)] border-y border-[#0b3d91]/[0.06] transition-all duration-700 scroll-mt-28 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="absolute inset-0 opacity-[0.5] bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,transparent_35%,transparent_65%,rgba(243,245,249,1)_100%)] pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative">
        <div id="about" className="scroll-mt-28 max-w-3xl mb-16 lg:mb-20">
          <FadeIn>
            <p className="font-heading text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--color-secondary)] mb-4">
              {t('trust.eyebrow')}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3rem] font-bold text-[var(--color-surface-dark)] mb-6 tracking-[-0.03em] leading-[1.1]">
              {t('trust.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-[1.75] max-w-2xl">{t('trust.body')}</p>
          </FadeIn>
        </div>

        <FadeIn delay={80}>
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-4 w-full max-w-2xl mb-10">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300/80" />
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] whitespace-nowrap">
                {t('trust.logosLabel')}
              </p>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300/80" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5">
              {logoPlaceholders.map((name) => (
                <div
                  key={name}
                  className="h-14 px-8 flex items-center justify-center rounded-xl bg-white border border-gray-200/90 text-gray-400 font-heading font-semibold text-xs tracking-[0.08em] uppercase shadow-premium-card hover:shadow-premium-hover hover:border-[var(--color-primary)]/15 transition-all duration-500 hover:-translate-y-0.5"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto pt-4 md:pt-8 border-t border-gray-200/80">
          <div className="text-center md:text-left md:border-r md:border-gray-200/90 md:pr-10">
            <p className="font-heading text-4xl md:text-[2.75rem] font-bold tracking-tight text-[var(--color-secondary)] mb-2 tabular-nums">
              <AnimatedCounter end={stats[0].value} suffix={stats[0].suffix} />
            </p>
            <p className="text-gray-600 font-medium text-[15px]">{t(stats[0].labelKey)}</p>
          </div>
          <div className="text-center md:text-left md:border-r md:border-gray-200/90 md:pr-10">
            <p className="font-heading text-4xl md:text-[2.75rem] font-bold tracking-tight text-[var(--color-secondary)] mb-2 tabular-nums">
              <AnimatedCounter end={stats[1].value} suffix={stats[1].suffix} />
            </p>
            <p className="text-gray-600 font-medium text-[15px]">{t(stats[1].labelKey)}</p>
          </div>
          <div className="text-center md:text-left flex flex-col justify-center">
            <p className="font-heading text-xl md:text-2xl font-bold text-[var(--color-primary)] leading-snug tracking-tight">
              {t('trust.stats.impactTitle')}
            </p>
            <p className="text-gray-600 mt-2 text-[15px] leading-relaxed">{t('trust.stats.impactSubtitle')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
