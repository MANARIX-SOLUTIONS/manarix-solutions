import { useTranslation } from 'react-i18next';
import {
  Search,
  Map,
  Layers,
  Code2,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

const STEP_KEYS = [
  'discovery',
  'strategy',
  'architecture',
  'development',
  'deployment',
  'improvement',
];

const stepIcons = {
  discovery: Search,
  strategy: Map,
  architecture: Layers,
  development: Code2,
  deployment: Rocket,
  improvement: TrendingUp,
};

export default function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="relative section-shell bg-[var(--color-surface-dark)] scroll-mt-28 overflow-hidden premium-grain">
      <div className="orb orb-green w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(0,168,107,0.12),transparent_55%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative">
        <SectionHeader
          eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          subtitle={t('process.subtitle')}
          dark
        />

        <div className="hidden xl:block max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute top-[2.5rem] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="grid grid-cols-6 gap-3">
              {STEP_KEYS.map((key, i) => {
                const Icon = stepIcons[key];
                return (
                  <FadeIn key={key} delay={i * 70}>
                    <div className="text-center group relative">
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 font-heading text-[10px] font-bold text-white/25 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="relative mx-auto w-[4.5rem] h-[4.5rem] rounded-2xl glass-panel flex items-center justify-center text-[var(--color-secondary)] mb-6 mt-4 shadow-premium transition-all duration-500 group-hover:border-[var(--color-secondary)]/50 group-hover:shadow-[0_0_56px_-8px_rgba(0,168,107,0.35)] group-hover:-translate-y-1">
                        <Icon className="w-6 h-6" aria-hidden />
                      </div>
                      <p className="font-heading text-sm font-bold text-white mb-1.5 tracking-tight">
                        {t(`process.steps.${key}.title`)}
                      </p>
                      <p className="text-xs text-white/42 leading-snug px-1">
                        {t(`process.steps.${key}.subtitle`)}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>

        <div className="xl:hidden grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {STEP_KEYS.map((key, i) => {
            const Icon = stepIcons[key];
            return (
              <FadeIn key={key} delay={i * 50}>
                <div className="flex gap-4 p-6 rounded-2xl glass-panel shadow-premium hover:bg-white/[0.07] transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-secondary)]/15 border border-[var(--color-secondary)]/20 flex items-center justify-center text-[var(--color-secondary)]">
                    <Icon className="w-5 h-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[var(--color-secondary)]/70 uppercase tracking-wider mb-1">
                      Step {i + 1}
                    </p>
                    <p className="font-heading text-base font-bold text-white tracking-tight">
                      {t(`process.steps.${key}.title`)}
                    </p>
                    <p className="text-sm text-white/50 mt-1">
                      {t(`process.steps.${key}.subtitle`)}
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
