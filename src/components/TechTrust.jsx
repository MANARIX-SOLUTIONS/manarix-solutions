import { useTranslation } from 'react-i18next';
import TechIcon from './TechIcon';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

const TECH_KEYS = [
  'java',
  'spring',
  'aws',
  'docker',
  'kubernetes',
  'postgres',
  'kafka',
  'angular',
  'react',
];

export default function TechTrust() {
  const { t } = useTranslation();

  const TechBadge = ({ techKey }) => (
    <div className="group shrink-0 w-[152px] sm:w-[172px]">
      <div className="h-full min-h-[6.5rem] flex flex-col items-center justify-center gap-3 px-4 py-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-gray-200/80 shadow-[0_8px_30px_-12px_rgba(11,31,58,0.1)] hover:shadow-[0_24px_48px_-20px_rgba(11,31,58,0.16)] hover:border-[var(--color-secondary)]/25 transition-all duration-500 hover:-translate-y-1.5">
        <TechIcon
          name={techKey}
          className="w-12 h-12 group-hover:scale-110 transition-transform duration-500"
        />
        <p className="font-heading font-semibold text-[13px] text-[var(--color-text)] tracking-tight text-center">
          {t(`technologies.${techKey}`)}
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="trust"
      className="relative py-20 lg:py-28 bg-[var(--color-neutral-alt)] scroll-mt-28 overflow-hidden"
    >
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative">
        <SectionHeader
          eyebrow={t('techTrust.eyebrow')}
          title={t('techTrust.title')}
          subtitle={t('techTrust.subtitle')}
        />

        <FadeIn delay={100}>
          <div
            className="trust-marquee-wrap relative w-full overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
            aria-label={t('techTrust.title')}
          >
            <div className="trust-marquee-track">
              {[...TECH_KEYS, ...TECH_KEYS].map((key, index) => (
                <TechBadge key={`${key}-${index}`} techKey={key} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
