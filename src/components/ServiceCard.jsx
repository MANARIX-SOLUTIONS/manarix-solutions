import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ServiceCard({
  serviceKey,
  icon: Icon,
  index,
  featured = false,
  large = false,
  className = '',
}) {
  const { t } = useTranslation();

  const cardBase = featured
    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[0_32px_64px_-24px_rgba(11,31,58,0.45)]'
    : 'bg-white text-[var(--color-text)] border-gray-200/80 shadow-premium-card';

  const iconWrap = featured
    ? 'bg-white/10 border-white/15 text-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)]/20 group-hover:border-[var(--color-secondary)]/40'
    : 'bg-[var(--color-neutral-alt)] border-gray-100 text-[var(--color-primary)] group-hover:bg-[var(--color-secondary)]/10 group-hover:border-[var(--color-secondary)]/25 group-hover:text-[var(--color-secondary)]';

  const descClass = featured ? 'text-white/70' : 'text-[var(--color-gray)]';
  const highlightClass = featured ? 'text-white/55' : 'text-[var(--color-gray)]';
  const checkClass = featured ? 'text-[var(--color-secondary)]' : 'text-[var(--color-secondary)]';
  const linkClass = featured
    ? 'text-[var(--color-secondary)] hover:text-white'
    : 'text-[var(--color-primary)] hover:text-[var(--color-secondary)]';

  return (
    <article
      className={`group relative flex flex-col h-full rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${cardBase} ${large ? 'p-9 lg:p-10' : 'p-8 lg:p-9'} ${className}`}
    >
      {!featured && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--color-primary)]/[0.03] via-transparent to-[var(--color-secondary)]/[0.05] pointer-events-none" />
      )}
      {featured && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgba(0,168,107,0.22),transparent_55%)] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <pattern id={`svc-grid-${serviceKey}`} width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#svc-grid-${serviceKey})`} />
            </svg>
          </div>
        </>
      )}

      <div className="relative flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <span
              className={`font-heading text-xs font-bold tabular-nums tracking-wider ${
                featured ? 'text-white/30' : 'text-[var(--color-gray)]/50'
              }`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div
              className={`inline-flex p-3 rounded-xl border transition-all duration-500 ${iconWrap}`}
            >
              <Icon className="w-6 h-6" aria-hidden />
            </div>
          </div>
          <ArrowUpRight
            className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
              featured ? 'text-[var(--color-secondary)]' : 'text-[var(--color-secondary)]'
            }`}
            aria-hidden
          />
        </div>

        <h3
          className={`font-heading font-bold tracking-tight mb-3 ${
            large ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'
          } ${featured ? 'text-white' : 'text-[var(--color-text)]'}`}
        >
          {t(`services.items.${serviceKey}.title`)}
        </h3>

        <p className={`leading-relaxed text-[15px] mb-6 ${large ? 'max-w-xl' : ''} ${descClass}`}>
          {t(`services.items.${serviceKey}.description`)}
        </p>

        <ul className={`space-y-2.5 mb-8 flex-1 ${highlightClass}`}>
          {[0, 1, 2].map((i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${checkClass}`} aria-hidden />
              <span>{t(`services.items.${serviceKey}.highlights.${i}`)}</span>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${linkClass}`}
        >
          {t('services.learnMore')}
          <ArrowUpRight className="w-4 h-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
