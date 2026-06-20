import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';

const TESTIMONIAL_KEYS = ['one', 'two', 'three'];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section
      id="testimonials"
      className="relative section-shell bg-white scroll-mt-28 premium-grain premium-grain-light overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[min(50vw,28rem)] h-[min(50vw,28rem)] bg-[radial-gradient(circle,rgba(0,168,107,0.04),transparent_65%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative">
        <SectionHeader
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {TESTIMONIAL_KEYS.map((key, i) => (
            <FadeIn key={key} delay={i * 80}>
              <blockquote className="group relative h-full p-8 lg:p-9 rounded-2xl bg-[var(--color-neutral-alt)] border border-gray-200/80 hover:border-[var(--color-secondary)]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(11,31,58,0.14)]">
                <div className="absolute top-0 left-8 w-12 h-1 rounded-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] opacity-80" />
                <Quote className="w-9 h-9 text-[var(--color-secondary)]/25 mb-6 mt-2" aria-hidden />
                <p className="text-[15px] leading-[1.8] text-[var(--color-text)]/85 mb-8">
                  &ldquo;{t(`testimonials.items.${key}.quote`)}&rdquo;
                </p>
                <footer className="border-t border-gray-200/80 pt-6">
                  <p className="font-heading font-semibold text-[var(--color-primary)] text-[15px]">
                    {t(`testimonials.items.${key}.author`)}
                  </p>
                  <p className="text-sm text-[var(--color-gray)] mt-1">
                    {t(`testimonials.items.${key}.org`)}
                  </p>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
