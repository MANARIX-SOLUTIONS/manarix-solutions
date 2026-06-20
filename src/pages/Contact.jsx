import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PremiumButton from '../components/PremiumButton';
import FormField, { inputClassName } from '../components/FormField';
import FadeIn from '../components/FadeIn';

const SERVICE_OPTION_KEYS = [
  'transformation',
  'engineering',
  'fintech',
  'cloud',
  'integration',
  'consulting',
  'general',
];

const contactCards = [
  {
    key: 'email',
    href: 'mailto:contact@manarix.com',
    icon: Mail,
    value: 'contact@manarix.com',
  },
  {
    key: 'location',
    icon: MapPin,
    valueKey: 'locationValue',
  },
];

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = SERVICE_OPTION_KEYS.map((key) => ({
    value: t(`contactPage.services.${key}`),
    key,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-alt)]">
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative py-20 lg:py-28 bg-[var(--color-primary)] overflow-hidden premium-grain">
          <div className="orb orb-green w-[420px] h-[420px] -top-32 right-0 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,168,107,0.18),transparent_60%)] pointer-events-none" />
          <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[1400px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-heading text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--color-secondary)] mb-4">
                {t('contactPage.metaLabel')}
              </p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-white mb-5 tracking-[-0.035em] leading-[1.1]">
                {t('contactPage.title')}
              </h1>
              <p className="text-lg md:text-xl text-white/72 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                {t('contactPage.subtitle')}
              </p>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-panel">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-secondary)] opacity-40" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-secondary)]" />
                </span>
                <span className="text-white/85 font-medium text-sm">
                  {t('contactPage.responseBadge')}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
              <FadeIn direction="left" className="space-y-6">
                <div className="card-premium p-8 lg:p-9 bg-white">
                  <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] mb-3 tracking-tight">
                    MANARIX
                  </h2>
                  <p className="text-[var(--color-gray)] leading-relaxed mb-8">
                    {t('footer.tagline')}
                  </p>
                  <div className="space-y-4">
                    {contactCards.map(({ key, href, icon: Icon, value, valueKey }) => {
                      const content = (
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-neutral-alt)] border border-gray-100 hover:border-[var(--color-secondary)]/25 transition-colors duration-300">
                          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)]">
                            <Icon className="w-5 h-5" aria-hidden />
                          </div>
                          <div>
                            <p className="font-semibold text-[var(--color-text)] text-sm mb-0.5">
                              {t(`contactPage.cards.${key}`)}
                            </p>
                            <p className="text-[var(--color-gray)] text-sm">
                              {valueKey ? t(`contactPage.cards.${valueKey}`) : value}
                            </p>
                          </div>
                        </div>
                      );

                      return href ? (
                        <a key={key} href={href} className="block group">
                          {content}
                        </a>
                      ) : (
                        <div key={key}>{content}</div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-premium-card">
                    <Clock className="w-5 h-5 text-[var(--color-secondary)] mb-3" aria-hidden />
                    <p className="font-heading font-bold text-[var(--color-text)] text-sm mb-1">
                      {t('contactPage.responseBadge')}
                    </p>
                    <p className="text-xs text-[var(--color-gray)] leading-relaxed">
                      {t('contactPage.footnote')}
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-premium-card">
                    <Globe className="w-5 h-5 text-[var(--color-secondary)] mb-3" aria-hidden />
                    <p className="font-heading font-bold text-[var(--color-text)] text-sm mb-1">
                      {t('contactPage.cards.location')}
                    </p>
                    <p className="text-xs text-[var(--color-gray)] leading-relaxed">
                      {t('contactPage.cards.locationValue')}
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={100} direction="right">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-premium bg-white p-10 lg:p-12 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[var(--color-secondary)]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9 text-[var(--color-secondary)]" aria-hidden />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] mb-4">
                      {t('contactPage.successTitle')}
                    </h2>
                    <p className="text-[var(--color-gray)] mb-8 leading-relaxed">
                      {t('contactPage.successBody')}
                    </p>
                    <PremiumButton to="/" variant="ghostLight" className="inline-flex">
                      <ArrowLeft className="w-4 h-4" aria-hidden />
                      {t('contactPage.backHome')}
                    </PremiumButton>
                  </motion.div>
                ) : (
                  <div className="card-premium bg-white p-8 md:p-10 lg:p-12">
                    <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] mb-2 tracking-tight">
                      {t('contactPage.formTitle')}
                    </h2>
                    <p className="text-[var(--color-gray)] mb-8">{t('contactPage.formIntro')}</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <FormField id="name" label={t('contactPage.fields.fullName')}>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={inputClassName()}
                            placeholder={t('contactPage.placeholders.name')}
                          />
                        </FormField>
                        <FormField id="email" label={t('contactPage.fields.email')}>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={inputClassName()}
                            placeholder={t('contactPage.placeholders.email')}
                          />
                        </FormField>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <FormField id="phone" label={t('contactPage.fields.phone')}>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClassName()}
                            placeholder={t('contactPage.placeholders.phone')}
                          />
                        </FormField>
                        <FormField id="company" label={t('contactPage.fields.company')}>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={inputClassName()}
                            placeholder={t('contactPage.placeholders.company')}
                          />
                        </FormField>
                      </div>

                      <FormField id="service" label={t('contactPage.fields.service')}>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className={inputClassName('appearance-none cursor-pointer')}
                        >
                          <option value="">{t('contactPage.selectService')}</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt.key} value={opt.value}>
                              {opt.value}
                            </option>
                          ))}
                        </select>
                      </FormField>

                      <FormField id="message" label={t('contactPage.fields.message')}>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className={inputClassName('resize-none min-h-[140px]')}
                          placeholder={t('contactPage.placeholders.message')}
                        />
                      </FormField>

                      <PremiumButton
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-10 py-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
                            {t('contactPage.sending')}
                          </>
                        ) : (
                          <>
                            {t('contactPage.submit')}
                            <Send className="w-4 h-4" aria-hidden />
                          </>
                        )}
                      </PremiumButton>
                    </form>

                    <p className="text-xs text-[var(--color-gray)] mt-6 leading-relaxed">
                      {t('contactPage.footnote')}
                    </p>
                  </div>
                )}
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
