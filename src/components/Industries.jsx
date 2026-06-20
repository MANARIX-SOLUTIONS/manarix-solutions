import { useTranslation } from 'react-i18next';
import {
  Building2,
  CreditCard,
  Shield,
  HeartPulse,
  Truck,
  Store,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

const INDUSTRY_KEYS = [
  'banking',
  'fintech',
  'insurance',
  'healthcare',
  'logistics',
  'retail',
];

const industryIcons = {
  banking: Building2,
  fintech: CreditCard,
  insurance: Shield,
  healthcare: HeartPulse,
  logistics: Truck,
  retail: Store,
};

export default function Industries() {
  const { t } = useTranslation();

  return (
    <section
      id="industries"
      className="relative section-shell bg-[var(--color-neutral-alt)] scroll-mt-28 overflow-hidden premium-grain premium-grain-light"
    >
      <div className="absolute top-0 left-0 w-[min(45vw,24rem)] h-[min(45vw,24rem)] bg-[radial-gradient(circle_at_center,rgba(0,168,107,0.05),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative">
        <SectionHeader
          eyebrow={t('industries.eyebrow')}
          title={t('industries.title')}
          subtitle={t('industries.subtitle')}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {INDUSTRY_KEYS.map((key, i) => {
            const Icon = industryIcons[key];
            return (
              <FadeIn key={key} delay={i * 60}>
                <article className="group card-premium h-full p-8 lg:p-9 bg-white">
                  <div className="inline-flex p-3.5 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/8 text-[var(--color-primary)] mb-6 group-hover:bg-[var(--color-secondary)]/10 group-hover:border-[var(--color-secondary)]/20 group-hover:text-[var(--color-secondary)] transition-all duration-500">
                    <Icon className="w-7 h-7" aria-hidden />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
                    {t(`industries.items.${key}.title`)}
                  </h3>
                  <p className="text-[var(--color-gray)] leading-relaxed text-[15px]">
                    {t(`industries.items.${key}.description`)}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
