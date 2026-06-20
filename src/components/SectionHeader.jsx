import FadeIn from './FadeIn';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto max-w-3xl'
      : 'text-left max-w-2xl';

  return (
    <FadeIn className={`mb-16 lg:mb-24 ${alignClass} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-3 mb-5 ${
            align === 'center' ? 'justify-center w-full' : ''
          }`}
        >
          <span
            className={`h-px w-8 ${
              dark
                ? 'bg-gradient-to-r from-[var(--color-secondary)]/60 to-transparent'
                : 'bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)]/20'
            }`}
            aria-hidden
          />
          <p className="font-heading text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--color-secondary)]">
            {eyebrow}
          </p>
          {align === 'center' && (
            <span
              className={`h-px w-8 ${
                dark
                  ? 'bg-gradient-to-l from-[var(--color-secondary)]/60 to-transparent'
                  : 'bg-gradient-to-l from-[var(--color-secondary)] to-[var(--color-secondary)]/20'
              }`}
              aria-hidden
            />
          )}
        </div>
      )}
      <h2
        className={`font-heading text-[2rem] sm:text-4xl lg:text-[3.125rem] font-bold tracking-[-0.035em] leading-[1.08] mb-5 ${
          dark ? 'text-white' : 'text-[var(--color-primary)]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-[1.75] ${
            dark ? 'text-white/60' : 'text-[var(--color-gray)]'
          } ${align === 'center' ? 'max-w-2xl mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
