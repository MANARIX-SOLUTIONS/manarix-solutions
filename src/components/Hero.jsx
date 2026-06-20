import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Shield, Sparkles } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import PremiumButton from './PremiumButton';

const METRIC_CONFIG = [
  { key: 'projects', end: 50, suffix: '+', decimals: 0 },
  { key: 'reliability', end: 99.9, suffix: '%', decimals: 1 },
  { key: 'experience', end: 4, suffix: '+', decimals: 0 },
  { key: 'expertise', end: 3, suffix: '', decimals: 0 },
];

const nodePositions = [
  [120, 80],
  [200, 200],
  [280, 120],
  [120, 320],
  [280, 280],
  [40, 200],
  [360, 200],
];

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none lg:aspect-[5/4] animate-float-soft">
      <motion.div
        className="absolute -inset-4 rounded-[2rem] bg-[var(--color-secondary)]/10 blur-2xl"
        animate={reduceMotion ? {} : { opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 rounded-[1.75rem] glass-panel shadow-premium overflow-hidden ring-1 ring-white/10">
        <div
          className="absolute -inset-px rounded-[1.75rem] opacity-50"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,168,107,0.4) 0%, transparent 42%, rgba(11,31,58,0.55) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/12 via-transparent to-[var(--color-primary-light)]/20 animate-gradient-shift" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="heroLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A86B" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0B1F3A" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7B7" />
              <stop offset="100%" stopColor="#00A86B" />
            </linearGradient>
          </defs>
          <g opacity="0.5" stroke="url(#heroLine)" strokeWidth="1.2" fill="none" strokeLinecap="round">
            <path d="M40 200 L120 80 L200 200 L280 120 L360 200" />
            <path d="M40 200 L120 320 L200 200 L280 280 L360 200" />
            <path d="M120 80 L200 200 L280 120" />
            <path d="M120 320 L200 200 L280 280" />
          </g>
          {nodePositions.map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="6"
              fill="url(#nodeGrad)"
              filter="url(#glow)"
              initial={{ opacity: 0.6 }}
              animate={reduceMotion ? {} : { opacity: [0.5, 1, 0.5], r: [5.5, 6.5, 5.5] }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          ))}
          <rect x="48" y="48" width="304" height="124" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
          <rect x="64" y="68" width="128" height="9" rx="4" fill="rgba(255,255,255,0.45)" />
          <rect x="64" y="90" width="208" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
          <rect x="64" y="104" width="168" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />
          <rect x="64" y="128" width="88" height="26" rx="8" fill="rgba(0,168,107,0.6)" />
          <rect x="260" y="128" width="72" height="26" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
        </svg>
      </div>
      <div className="absolute -z-10 -inset-10 rounded-[2.5rem] bg-gradient-to-tr from-[var(--color-secondary)]/20 via-transparent to-[var(--color-primary)]/10 blur-3xl" />
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <header className="relative min-h-[100svh] flex items-center overflow-hidden bg-[var(--color-surface-dark)] pt-28 pb-24 md:pt-36 md:pb-32 premium-grain">
      <div className="orb orb-green w-[420px] h-[420px] -top-32 -right-32 opacity-80" />
      <div className="orb orb-blue w-[360px] h-[360px] bottom-0 -left-40 opacity-70 animation-delay-1000" />
      <div className="orb orb-green w-[280px] h-[280px] top-1/2 left-1/3 opacity-40 animation-delay-500" />

      <div className="absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(0,168,107,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_50%,rgba(0,168,107,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-surface-dark)]/20 to-[var(--color-surface-dark)]" />
      </div>
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <pattern id="heroGrid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-14 lg:gap-16 xl:gap-20 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-secondary)]" aria-hidden />
              <span className="font-heading text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-white/80">
                {t('brand.tagline')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease }}
              className="font-heading text-[2.25rem] sm:text-5xl lg:text-[3.35rem] xl:text-[3.65rem] font-bold leading-[1.06] tracking-[-0.04em] mb-7"
            >
              <span className="text-gradient-premium">{t('hero.title')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease }}
              className="text-lg md:text-xl text-white/72 leading-[1.7] mb-10 max-w-xl font-light"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <PremiumButton to="/contact" variant="primary" className="px-9 py-4">
                {t('hero.ctaPrimary')}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </PremiumButton>
              <PremiumButton href="#services" variant="ghost" className="px-9 py-4">
                {t('hero.ctaSecondary')}
              </PremiumButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.32, ease }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {METRIC_CONFIG.map(({ key, end, suffix, decimals }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease }}
                  className="glass-panel rounded-2xl px-4 py-5 metric-glow hover:bg-white/[0.08] transition-colors duration-300"
                >
                  <p className="font-heading text-2xl sm:text-[1.75rem] lg:text-3xl font-bold text-[var(--color-secondary)] mb-1.5">
                    <AnimatedCounter end={end} suffix={suffix} decimals={decimals} />
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-white/50 leading-snug uppercase tracking-wide">
                    {t(`hero.metrics.${key}.label`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative hidden sm:block"
          >
            <HeroVisual />
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease }}
              className="absolute -bottom-6 -left-2 md:-left-6 flex items-center gap-3 px-5 py-3 rounded-2xl glass-panel shadow-premium"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/20">
                <Shield className="w-5 h-5 text-[var(--color-secondary)]" aria-hidden />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-white tabular-nums">99.9%</p>
                <p className="text-xs text-white/50">{t('hero.metrics.reliability.label')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors group"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent group-hover:from-[var(--color-secondary)] transition-colors animate-scroll-nudge origin-top" />
      </motion.a>
    </header>
  );
}
