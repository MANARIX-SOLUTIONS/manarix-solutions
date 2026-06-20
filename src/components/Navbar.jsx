import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';
import BrandLogo from './BrandLogo';
import LanguageSwitcher from './LanguageSwitcher';
import PremiumButton from './PremiumButton';

const sectionLinks = [
  { hash: '#services', id: 'services', labelKey: 'nav.services' },
  { hash: '#industries', id: 'industries', labelKey: 'nav.industries' },
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const homeSectionTo = (hash) => ({ pathname: '/', hash });

  const NavLink = ({ link }) => {
    const isActive =
      link.id === 'contact'
        ? location.pathname === '/contact'
        : isHome && activeSection === link.id;

    const content = (
      <>
        <span className="relative z-10">{link.label}</span>
        {isActive && (
          <motion.span
            layoutId="nav-indicator"
            className="absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </>
    );

    const baseClass =
      'relative px-1 py-1 text-[13px] font-medium tracking-wide transition-colors duration-300';

    if (link.to) {
      return (
        <Link
          to={link.to}
          className={`${baseClass} ${isActive ? 'text-[var(--color-secondary)]' : 'text-white/70 hover:text-white'}`}
        >
          {content}
        </Link>
      );
    }

    return (
      <Link
        to={homeSectionTo(link.hash)}
        className={`${baseClass} ${isActive ? 'text-[var(--color-secondary)]' : 'text-white/70 hover:text-white'}`}
      >
        {content}
      </Link>
    );
  };

  const navLinks = [
    ...sectionLinks.map((s) => ({ ...s, label: t(s.labelKey), to: undefined })),
    { to: '/contact', label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'rgba(11, 31, 58, 0.94)' : 'rgba(11, 31, 58, 0.72)',
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl backdrop-saturate-150 border-b transition-shadow duration-500 ${
        scrolled
          ? 'border-white/[0.08] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)]'
          : 'border-white/[0.05]'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="flex items-center justify-between h-[72px] gap-4">
          <Link
            to="/"
            className="group shrink-0 flex items-center rounded-xl bg-white/98 p-2 pr-3 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35)] ring-1 ring-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_-8px_rgba(0,168,107,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)]"
            aria-label={t('brand.name')}
          >
            <BrandLogo className="h-8 md:h-9 max-h-9 max-w-[min(200px,42vw)]" />
          </Link>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-end min-w-0">
            <div className="flex items-center gap-1 xl:gap-2 px-2 py-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.06] mr-2">
              {navLinks.slice(0, -1).map((link) => (
                <NavLink key={link.id} link={link} />
              ))}
            </div>
            <NavLink link={navLinks[navLinks.length - 1]} />
            <div className="w-px h-5 bg-white/10 mx-1" aria-hidden />
            <LanguageSwitcher />
            <PremiumButton to="/contact" variant="primary" className="px-5 py-2.5 text-[13px] ml-1">
              {t('nav.bookConsultation')}
            </PremiumButton>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-white hover:bg-white/10 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/10 transition-colors"
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-4 flex flex-col gap-1">
                {sectionLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={homeSectionTo(link.hash)}
                      onClick={() => setIsOpen(false)}
                      className="block text-white/90 hover:text-[var(--color-secondary)] font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-white/90 hover:text-[var(--color-secondary)] font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  {t('nav.contact')}
                </Link>
                <PremiumButton
                  to="/contact"
                  variant="primary"
                  className="mt-3 w-full py-3.5"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.bookConsultation')}
                </PremiumButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
