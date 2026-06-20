import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BrandLogo from './BrandLogo';
import FadeIn from './FadeIn';

const companyLinks = [
  { hash: '#why-us', labelKey: 'footer.links.whyUs' },
  { hash: '#process', labelKey: 'footer.links.process' },
  { hash: '#case-studies', labelKey: 'footer.links.caseStudies' },
  { to: '/contact', labelKey: 'footer.links.contact' },
];

const serviceLinkKeys = ['transformation', 'engineering', 'fintech', 'cloud'];
const industryLinkKeys = ['banking', 'fintech', 'insurance', 'healthcare'];
const resourceLinks = [
  { hash: '#case-studies', labelKey: 'footer.resourceLinks.cases' },
  { hash: '#process', labelKey: 'footer.resourceLinks.process' },
];

export default function Footer() {
  const { t } = useTranslation();

  const homeSectionTo = (hash) => ({ pathname: '/', hash });

  const linkClass =
    'text-white/65 hover:text-[var(--color-secondary)] transition-colors duration-300 text-[14px] inline-flex items-center gap-1 group';

  return (
    <footer className="relative bg-[var(--color-surface-dark)] text-white border-t border-white/[0.07] premium-grain overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/30 to-transparent" />
      <div className="orb orb-green w-[320px] h-[320px] -bottom-40 -left-20 opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] py-16 lg:py-20 relative">
        <FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
            <div className="lg:col-span-1">
              <div className="mb-5 inline-block rounded-xl bg-white p-2.5 pr-3.5 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/15">
                <BrandLogo className="h-12 sm:h-14 max-w-[min(260px,85vw)]" />
              </div>
              <p className="text-white/60 text-sm leading-[1.8] mb-6 max-w-sm">
                {t('footer.tagline')}
              </p>
              <a
                href="https://linkedin.com/company/manarix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-panel text-white/75 hover:text-white hover:border-[var(--color-secondary)]/30 transition-all duration-300 text-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.22em] text-white/35 mb-6">
                {t('footer.company')}
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.labelKey}>
                    <Link to={link.to || homeSectionTo(link.hash)} className={linkClass}>
                      <span className="w-0 group-hover:w-2 h-px bg-[var(--color-secondary)] transition-all duration-300" aria-hidden />
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.22em] text-white/35 mb-6">
                {t('footer.services')}
              </h4>
              <ul className="space-y-3">
                {serviceLinkKeys.map((key) => (
                  <li key={key}>
                    <Link to={homeSectionTo('#services')} className={linkClass}>
                      <span className="w-0 group-hover:w-2 h-px bg-[var(--color-secondary)] transition-all duration-300" aria-hidden />
                      {t(`footer.serviceLinks.${key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.22em] text-white/35 mb-6">
                {t('footer.industries')}
              </h4>
              <ul className="space-y-3">
                {industryLinkKeys.map((key) => (
                  <li key={key}>
                    <Link to={homeSectionTo('#industries')} className={linkClass}>
                      <span className="w-0 group-hover:w-2 h-px bg-[var(--color-secondary)] transition-all duration-300" aria-hidden />
                      {t(`footer.industryLinks.${key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.22em] text-white/35 mb-6">
                {t('footer.contact')}
              </h4>
              <ul className="space-y-4 text-white/65 text-[14px] mb-8">
                <li>
                  <a href="mailto:contact@manarix.com" className={linkClass}>
                    contact@manarix.com
                  </a>
                </li>
              </ul>
              <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.22em] text-white/35 mb-4">
                {t('footer.resources')}
              </h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.labelKey}>
                    <Link to={homeSectionTo(link.hash)} className={linkClass}>
                      <span className="w-0 group-hover:w-2 h-px bg-[var(--color-secondary)] transition-all duration-300" aria-hidden />
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <div className="border-t border-white/[0.08] mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/35 text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-white/35 hover:text-white transition-colors duration-300">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-white/35 hover:text-white transition-colors duration-300">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
