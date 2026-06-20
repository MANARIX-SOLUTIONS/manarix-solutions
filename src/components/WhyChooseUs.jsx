import { useTranslation } from 'react-i18next';
import {
  Target,
  Layers,
  ShieldCheck,
  CreditCard,
  Cloud,
  ArrowRightLeft,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

const PILLAR_KEYS = [
  'businessFirst',
  'architecture',
  'security',
  'fintech',
  'cloud',
  'delivery',
];

const pillarIcons = {
  businessFirst: Target,
  architecture: Layers,
  security: ShieldCheck,
  fintech: CreditCard,
  cloud: Cloud,
  delivery: ArrowRightLeft,
};

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="relative section-shell bg-white scroll-mt-28 overflow-hidden premium-grain premium-grain-light">
      <div className="absolute top-1/2 left-0 w-[min(100vw,28rem)] h-[min(100vw,28rem)] -translate-y-1/2 -translate-x-1/2 bg-[radial-gradient(circle,rgba(0,168,107,0.04),transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative">
        <SectionHeader
          eyebrow={t('why.eyebrow')}
          title={t('why.title')}
          subtitle={t('why.subtitle')}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {PILLAR_KEYS.map((key, i) => {
            const Icon = pillarIcons[key];
            return (
              <FadeIn key={key} delay={i * 55}>
                <div className="group relative h-full p-8 lg:p-9 rounded-2xl overflow-hidden border border-gray-200/80 bg-gradient-to-br from-[var(--color-neutral-alt)] to-white shadow-premium-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(11,31,58,0.18)]">
                  <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="inline-flex p-3 rounded-xl bg-white border border-gray-100 text-[var(--color-secondary)] mb-5 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white transition-all duration-500 shadow-sm">
                      <Icon className="w-6 h-6" aria-hidden />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--color-text)] group-hover:text-white mb-3 transition-colors duration-500 tracking-tight">
                      {t(`why.pillars.${key}.title`)}
                    </h3>
                    <p className="text-[var(--color-gray)] group-hover:text-white/82 leading-relaxed text-[15px] transition-colors duration-500">
                      {t(`why.pillars.${key}.description`)}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
