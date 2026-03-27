import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Services from '../components/Services';
import Process from '../components/Process';
import CaseStudies from '../components/CaseStudies';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  useLayoutEffect(() => {
    const hash = location.hash || (typeof window !== 'undefined' ? window.location.hash : '');
    if (!hash) return;
    const id = hash.replace(/^#/, '');
    if (!id) return;

    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <Process />
      <CaseStudies />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
}
