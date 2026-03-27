import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none lg:aspect-[5/4] animate-float-soft">
      <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/[0.09] to-white/[0.02] backdrop-blur-2xl border border-white/[0.12] shadow-premium overflow-hidden ring-1 ring-white/5">
        <div
          className="absolute -inset-px rounded-[1.75rem] opacity-40"
          style={{
            background: 'linear-gradient(135deg, rgba(255,111,60,0.35) 0%, transparent 45%, rgba(11,61,145,0.4) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/15 via-transparent to-[var(--color-primary-light)]/25 animate-gradient-shift" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="heroLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8F6A" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#4A7FD4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0B3D91" stopOpacity="0.45" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB59A" />
              <stop offset="100%" stopColor="#FF6F3C" />
            </linearGradient>
          </defs>
          <g opacity="0.42" stroke="url(#heroLine)" strokeWidth="1" fill="none" strokeLinecap="round">
            <path d="M40 200 L120 80 L200 200 L280 120 L360 200" />
            <path d="M40 200 L120 320 L200 200 L280 280 L360 200" />
            <path d="M120 80 L200 200 L280 120" />
            <path d="M120 320 L200 200 L280 280" />
          </g>
          {[
            [120, 80],
            [200, 200],
            [280, 120],
            [120, 320],
            [280, 280],
            [40, 200],
            [360, 200],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5.5" fill="url(#nodeGrad)" filter="url(#glow)" />
          ))}
          <rect x="48" y="48" width="304" height="124" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.14)" />
          <rect x="64" y="68" width="128" height="9" rx="4" fill="rgba(255,255,255,0.42)" />
          <rect x="64" y="90" width="208" height="5" rx="2.5" fill="rgba(255,255,255,0.14)" />
          <rect x="64" y="104" width="168" height="5" rx="2.5" fill="rgba(255,255,255,0.09)" />
          <rect x="64" y="128" width="88" height="26" rx="8" fill="rgba(255,111,60,0.55)" />
          <rect x="260" y="128" width="72" height="26" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />
        </svg>
      </div>
      <div className="absolute -z-10 -inset-8 rounded-[2.25rem] bg-gradient-to-tr from-[var(--color-secondary)]/30 via-[var(--color-primary)]/15 to-transparent blur-3xl opacity-90" />
      <div className="absolute -z-20 -inset-4 rounded-[2rem] bg-[var(--color-primary)]/20 blur-2xl" />
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header className="relative min-h-[100svh] flex items-center overflow-hidden bg-[var(--color-surface-dark)] pt-28 pb-20 md:pt-36 md:pb-28 premium-grain">
      <div className="absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(11,61,145,0.55),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_80%,rgba(255,111,60,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(11,61,145,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-surface-dark)]" />
      </div>
      <div className="absolute inset-0 opacity-[0.055]">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <pattern id="heroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 xl:gap-24 items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 hero-reveal">
              <span className="h-px w-10 bg-gradient-to-r from-[var(--color-secondary)] to-transparent" aria-hidden />
              <p className="font-heading text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[var(--color-secondary)]">
                {t('hero.eyebrow')}
              </p>
            </div>
            <h1 className="font-heading text-[2.125rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-7 hero-reveal hero-reveal-delay-1">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/[0.78] leading-[1.65] mb-5 max-w-xl hero-reveal hero-reveal-delay-2 font-light">
              {t('hero.subtitle')}
            </p>
            <p className="text-base text-white/45 mb-5 hero-reveal hero-reveal-delay-3 font-heading font-medium tracking-wide">
              {t('hero.tagline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-14 hero-reveal hero-reveal-delay-4">
              <Link
                to="/contact"
                className="btn-premium-primary inline-flex items-center justify-center px-9 py-4 rounded-xl bg-[var(--color-secondary)] text-white font-semibold text-[15px] hover:scale-[1.02] active:scale-[0.98]"
              >
                {t('hero.ctaPrimary')}
              </Link>
              <a
                href="#services"
                className="btn-premium-ghost inline-flex items-center justify-center px-9 py-4 rounded-xl font-semibold text-[15px] text-white border border-white/20 bg-white/[0.06] backdrop-blur-xl hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
            <div
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-md text-sm text-white/65 hero-reveal hero-reveal-delay-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
            >
              <svg className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white/90 font-medium tracking-tight">{t('hero.trustBadge')}</span>
            </div>
          </div>

          <div className="hero-reveal hero-reveal-delay-6 relative">
            <div className="absolute -top-6 -right-4 hidden xl:block w-px h-32 bg-gradient-to-b from-[var(--color-secondary)]/20 via-white/20 to-transparent" aria-hidden />
            <HeroVisual />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-nudge text-white/50">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
}
