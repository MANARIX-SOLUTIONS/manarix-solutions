import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  RefreshCw,
  Code2,
  CreditCard,
  Cloud,
  Link2,
  Lightbulb,
  ArrowRight,
  Compass,
  Hammer,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';
import PremiumButton from './PremiumButton';
import FadeIn from './FadeIn';

const SERVICE_LAYOUT = [
  { key: 'transformation', featured: false, large: true, colSpan: 'lg:col-span-2' },
  { key: 'engineering', featured: false, large: false, colSpan: 'lg:col-span-1' },
  { key: 'fintech', featured: true, large: true, colSpan: 'lg:col-span-2' },
  { key: 'cloud', featured: false, large: false, colSpan: 'lg:col-span-1' },
  { key: 'integration', featured: false, large: false, colSpan: 'lg:col-span-1' },
  { key: 'consulting', featured: false, large: false, colSpan: 'lg:col-span-1' },
];

const serviceIcons = {
  transformation: RefreshCw,
  engineering: Code2,
  fintech: CreditCard,
  cloud: Cloud,
  integration: Link2,
  consulting: Lightbulb,
};

const pillarIcons = {
  strategy: Compass,
  build: Hammer,
  scale: TrendingUp,
};

const PILLAR_KEYS = ['strategy', 'build', 'scale'];

export default function Services() {
  const { t } = useTranslation();
  const [activePillar, setActivePillar] = useState(null);

  const filteredServices =
    activePillar === null
      ? SERVICE_LAYOUT
      : SERVICE_LAYOUT.filter(({ key }) => {
          if (activePillar === 'strategy') {
            return ['transformation', 'consulting'].includes(key);
          }
          if (activePillar === 'build') {
            return ['engineering', 'fintech', 'integration'].includes(key);
          }
          return ['cloud', 'transformation'].includes(key);
        });

  return (
    <section
      id="services"
      className="relative section-shell bg-[var(--color-neutral-alt)] scroll-mt-28 overflow-hidden premium-grain premium-grain-light"
    >
      <div className="absolute top-0 right-0 w-[min(55vw,32rem)] h-[min(55vw,32rem)] bg-[radial-gradient(circle_at_center,rgba(11,31,58,0.04),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[min(45vw,24rem)] h-[min(45vw,24rem)] bg-[radial-gradient(circle_at_center,rgba(0,168,107,0.05),transparent_60%)] pointer-events-none" />
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative">
        <SectionHeader
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <FadeIn delay={60}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14 lg:mb-16">
            <button
              type="button"
              onClick={() => setActivePillar(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activePillar === null
                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[0_8px_24px_-8px_rgba(11,31,58,0.35)]'
                  : 'bg-white text-[var(--color-gray)] border-gray-200/90 hover:border-[var(--color-secondary)]/30 hover:text-[var(--color-primary)]'
              }`}
            >
              {t('services.title')}
            </button>
            {PILLAR_KEYS.map((key) => {
              const Icon = pillarIcons[key];
              const isActive = activePillar === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActivePillar(isActive ? null : key)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? 'bg-[var(--color-secondary)] text-white border-[var(--color-secondary)] shadow-[0_8px_24px_-8px_rgba(0,168,107,0.4)]'
                      : 'bg-white text-[var(--color-gray)] border-gray-200/90 hover:border-[var(--color-secondary)]/30 hover:text-[var(--color-primary)]'
                  }`}
                >
                  <Icon className="w-4 h-4" aria-hidden />
                  {t(`services.pillars.${key}`)}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14 lg:mb-16">
          <AnimatePresence mode="popLayout">
            {filteredServices.map(({ key, featured, large, colSpan }) => {
              const Icon = serviceIcons[key];
              const globalIndex = SERVICE_LAYOUT.findIndex((s) => s.key === key);
              return (
                <motion.div
                  key={key}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={colSpan}
                >
                  <ServiceCard
                    serviceKey={key}
                    icon={Icon}
                    index={globalIndex}
                    featured={featured}
                    large={large}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <FadeIn delay={120}>
          <div className="relative rounded-2xl overflow-hidden bg-[var(--color-primary)] p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_100%,rgba(0,168,107,0.2),transparent_60%)] pointer-events-none" />
            <div className="relative max-w-xl">
              <h3 className="font-heading text-2xl lg:text-[1.75rem] font-bold text-white mb-3 tracking-tight">
                {t('services.ctaBand.title')}
              </h3>
              <p className="text-white/65 leading-relaxed">
                {t('services.ctaBand.subtitle')}
              </p>
            </div>
            <PremiumButton
              to="/contact"
              variant="primary"
              className="relative shrink-0 px-8 py-4"
            >
              {t('services.ctaBand.button')}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </PremiumButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
