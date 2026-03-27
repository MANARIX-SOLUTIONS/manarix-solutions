import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useActiveSection } from '../hooks/useActiveSection';
import BrandLogo from './BrandLogo';
import LanguageSwitcher from './LanguageSwitcher';

const sectionLinks = [
  { hash: '#about', id: 'about', labelKey: 'nav.about' },
  { hash: '#services', id: 'services', labelKey: 'nav.services' },
  { hash: '#process', id: 'process', labelKey: 'nav.process' },
  { hash: '#case-studies', id: 'case-studies', labelKey: 'nav.caseStudies' },
  { hash: '#why-us', id: 'why-us', labelKey: 'nav.whyUs' },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const homeSectionTo = (hash) => ({ pathname: '/', hash });

  const NavLink = ({ link }) => {
    const isActive =
      link.id === 'contact'
        ? location.pathname === '/contact'
        : isHome && activeSection === link.id;
    const baseClass = 'relative inline-block text-[13px] font-medium tracking-wide transition-colors duration-300';
    const activeClass = 'text-[var(--color-secondary)]';
    const inactiveClass = 'text-white/75 hover:text-white';

    const content = (
      <>
        {link.label}
        {isActive && (
          <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent" />
        )}
      </>
    );

    if (link.to) {
      return (
        <Link to={link.to} className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}>
          {content}
        </Link>
      );
    }

    return (
      <Link to={homeSectionTo(link.hash)} className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}>
        {content}
      </Link>
    );
  };

  const barClass = scrolled
    ? 'bg-[var(--color-surface-dark)]/[0.92] backdrop-blur-2xl backdrop-saturate-150 border-b border-white/[0.08] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.45)]'
    : 'bg-gradient-to-b from-[var(--color-surface-dark)]/80 to-transparent backdrop-blur-md border-b border-white/[0.06]';

  const navLinks = [
    ...sectionLinks.map((s) => ({ ...s, label: t(s.labelKey), to: undefined })),
    { to: '/contact', label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${barClass}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="flex items-center justify-between h-[72px] gap-4">
          <Link
            to="/"
            className="group shrink-0 flex items-center rounded-lg bg-white/95 p-1.5 pr-2.5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]"
            aria-label={t('brand.name')}
          >
            <BrandLogo className="h-8 md:h-9 max-h-9 max-w-[min(200px,42vw)]" />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-end min-w-0">
            {navLinks.map((link) => (
              <NavLink key={link.id} link={link} />
            ))}
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="shrink-0 px-6 py-2.5 rounded-xl bg-[var(--color-secondary)] text-white text-[13px] font-semibold tracking-wide shadow-[0_10px_28px_-6px_rgba(255,111,60,0.55)] hover:bg-[var(--color-secondary-hover)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_36px_-6px_rgba(255,111,60,0.6)] active:scale-[0.98]"
            >
              {t('nav.bookConsultation')}
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-white hover:bg-white/10 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/10"
              aria-expanded={isOpen}
              aria-label={t('nav.toggleMenu')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-5 border-t border-white/10 bg-[var(--color-surface-dark)]/95 backdrop-blur-xl rounded-b-2xl -mx-2 px-2 mb-2 shadow-xl">
            <div className="flex flex-col gap-0.5">
              {sectionLinks.map((link) => (
                <Link
                  key={link.id}
                  to={homeSectionTo(link.hash)}
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 hover:text-[var(--color-secondary)] font-medium transition-colors py-3 px-4 rounded-xl hover:bg-white/5"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-white/90 hover:text-[var(--color-secondary)] font-medium transition-colors py-3 px-4 rounded-xl hover:bg-white/5"
              >
                {t('nav.contact')}
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 px-5 py-3.5 rounded-xl bg-[var(--color-secondary)] text-white font-semibold text-center shadow-lg"
              >
                {t('nav.bookConsultation')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
