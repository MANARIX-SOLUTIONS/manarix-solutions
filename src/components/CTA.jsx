import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail } from 'lucide-react';
import FadeIn from './FadeIn';
import PremiumButton from './PremiumButton';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 overflow-hidden scroll-mt-28 bg-[var(--color-primary)] premium-grain"
    >
      <div className="orb orb-green w-[480px] h-[480px] top-0 left-1/4 opacity-40" />
      <div className="orb orb-blue w-[400px] h-[400px] bottom-0 right-0 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(0,168,107,0.2),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse" aria-hidden />
              <span className="text-sm text-white/70 font-medium">Enterprise consulting</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-white mb-6 leading-[1.12] tracking-[-0.035em]">
              {t('cta.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/72 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PremiumButton to="/contact" variant="primary" className="px-10 py-4 text-base">
                {t('cta.primary')}
                <ArrowRight className="w-5 h-5" aria-hidden />
              </PremiumButton>
              <PremiumButton href="mailto:contact@manarix.com" variant="ghost" className="px-10 py-4 text-base">
                <Mail className="w-5 h-5" aria-hidden />
                {t('cta.secondary')}
              </PremiumButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
