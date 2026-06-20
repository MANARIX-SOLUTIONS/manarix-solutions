import { Link } from 'react-router-dom';

const variants = {
  primary:
    'btn-premium-primary btn-shine bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-hover)] focus-visible:ring-offset-[var(--color-primary)]',
  ghost:
    'btn-premium-ghost text-white border border-white/20 bg-white/[0.06] backdrop-blur-xl hover:bg-white/10 hover:border-white/30 focus-visible:ring-offset-[var(--color-primary)]',
  ghostLight:
    'btn-premium-ghost text-[var(--color-primary)] border border-[var(--color-primary)]/12 bg-white hover:bg-[var(--color-neutral-alt)] hover:border-[var(--color-secondary)]/30 focus-visible:ring-offset-white',
};

export default function PremiumButton({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] disabled:pointer-events-none';

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
}
