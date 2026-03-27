import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BrandLogo from './BrandLogo';

const quickLinkDefs = [
  { to: { pathname: '/', hash: '#services' }, labelKey: 'footer.links.services' },
  { to: { pathname: '/', hash: '#about' }, labelKey: 'footer.links.about' },
  { to: '/contact', labelKey: 'footer.links.contact' },
];

const socialLinks = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://twitter.com', label: 'Twitter', icon: 'twitter' },
];

const SocialIcon = ({ icon }) => {
  const icons = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };
  return icons[icon] || null;
};

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="relative bg-[var(--color-surface-dark)] text-white border-t border-white/[0.07] premium-grain">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-5 inline-block rounded-lg bg-white p-2 pr-3 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
              <BrandLogo className="h-12 sm:h-14 max-w-[min(260px,85vw)]" />
            </div>
            <p className="text-white/65 text-sm leading-[1.75] mb-8 max-w-sm">{t('footer.tagline')}</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] text-white/85 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={link.label}
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">{t('footer.navigation')}</h4>
            <ul className="space-y-4">
              {quickLinkDefs.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-[var(--color-secondary)] transition-colors text-[15px]"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-white/70 text-[15px]">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@manarixsolutions.com" className="hover:text-[var(--color-secondary)] transition-colors leading-snug">
                  contact@manarixsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-[var(--color-secondary)] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t('footer.globalDelivery')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">{t('footer.newsletter')}</h4>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">{t('footer.newsletterHint')}</p>
            {subscribed ? (
              <p className="text-[var(--color-secondary)] font-medium text-sm">{t('footer.subscribed')}</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.emailPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/12 text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-secondary)]/80 focus:ring-1 focus:ring-[var(--color-secondary)]/30 text-sm transition-shadow"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--color-secondary)] text-white text-sm font-semibold hover:bg-[var(--color-secondary-hover)] transition-colors shadow-[0_8px_24px_-8px_rgba(255,111,60,0.5)]"
                >
                  {t('footer.subscribe')}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/[0.08] mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
