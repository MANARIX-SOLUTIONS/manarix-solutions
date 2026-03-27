import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SERVICE_OPTION_KEYS = ['strategy', 'custom', 'innovation', 'data', 'general'];

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
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral)]">
      <Navbar />
      <main className="pt-[72px]">
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] overflow-hidden premium-grain">
          <div className="absolute inset-0 opacity-35">
            <div className="absolute top-0 right-0 w-[min(100vw,28rem)] h-[min(100vw,28rem)] bg-[var(--color-secondary)] rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
          <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-[1400px] text-center">
            <p className="font-heading text-[11px] font-semibold tracking-[0.28em] uppercase text-[var(--color-secondary)] mb-4">
              {t('contactPage.metaLabel')}
            </p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-5 tracking-[-0.03em]">
              {t('contactPage.title')}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              {t('contactPage.subtitle')}
            </p>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-white/90 font-medium text-sm tracking-tight">{t('contactPage.responseBadge')}</span>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[var(--color-neutral)]">
          <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
            <div className="max-w-3xl mx-auto">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-gray-200/80 shadow-premium-card p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{t('contactPage.successTitle')}</h2>
                  <p className="text-gray-600 mb-8">{t('contactPage.successBody')}</p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {t('contactPage.backHome')}
                  </Link>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200/90 shadow-premium-card p-8 md:p-12">
                  <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] mb-2">{t('contactPage.formTitle')}</h2>
                  <p className="text-gray-600 mb-8">{t('contactPage.formIntro')}</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('contactPage.fields.fullName')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition"
                          placeholder={t('contactPage.placeholders.name')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('contactPage.fields.email')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition"
                          placeholder={t('contactPage.placeholders.email')}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('contactPage.fields.phone')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition"
                          placeholder={t('contactPage.placeholders.phone')}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('contactPage.fields.company')}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition"
                          placeholder={t('contactPage.placeholders.company')}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contactPage.fields.service')}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition bg-white"
                      >
                        <option value="">{t('contactPage.selectService')}</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.key} value={opt.value}>
                            {opt.value}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contactPage.fields.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition resize-none"
                        placeholder={t('contactPage.placeholders.message')}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-10 py-4 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-hover)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          {t('contactPage.sending')}
                        </>
                      ) : (
                        t('contactPage.submit')
                      )}
                    </button>
                  </form>

                  <p className="text-sm text-gray-500 mt-6">{t('contactPage.footnote')}</p>
                </div>
              )}
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="mailto:contact@manarixsolutions.com"
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-primary)]">{t('contactPage.cards.email')}</p>
                  <p className="text-gray-600 text-sm">contact@manarixsolutions.com</p>
                </div>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-primary)]">{t('contactPage.cards.phone')}</p>
                  <p className="text-gray-600 text-sm">+1 (234) 567-890</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-primary)]">{t('contactPage.cards.location')}</p>
                  <p className="text-gray-600 text-sm">{t('contactPage.cards.locationValue')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
