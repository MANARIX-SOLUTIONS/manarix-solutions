import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FadeIn from './FadeIn';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden scroll-mt-28 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] premium-grain"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-0 w-[min(110vw,44rem)] h-[min(110vw,44rem)] bg-[var(--color-secondary)] rounded-full blur-[110px] -translate-x-1/2 animate-gradient-shift" />
        <div className="absolute bottom-0 right-0 w-[min(100vw,38rem)] h-[min(100vw,38rem)] bg-[#1a4db5] rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.035\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[1400px] text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-6 max-w-3xl mx-auto leading-[1.15] tracking-[-0.03em]">
            {t('cta.title')}
          </h2>
          <p className="text-xl md:text-[1.35rem] text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {t('cta.subtitle')}
          </p>
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md mb-12 shadow-[0_1px_0_rgba(255,255,255,0.1)_inset]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/90 font-medium text-sm tracking-tight">{t('cta.responseBadge')}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="btn-premium-primary inline-flex items-center justify-center px-10 py-4 rounded-xl bg-[var(--color-secondary)] text-white font-semibold text-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              {t('cta.primary')}
            </Link>
            <a
              href="mailto:contact@manarixsolutions.com"
              className="btn-premium-ghost inline-flex items-center justify-center px-10 py-4 rounded-xl font-semibold text-lg text-white border border-white/30 bg-white/[0.08] backdrop-blur-md hover:bg-white/12 hover:border-white/45 hover:scale-[1.02]"
            >
              {t('cta.secondary')}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
