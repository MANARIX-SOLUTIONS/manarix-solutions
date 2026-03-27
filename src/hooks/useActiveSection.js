import { useEffect, useState } from 'react';

const sections = ['about', 'services', 'process', 'case-studies', 'why-us', 'contact'];

function getSectionTop(el) {
  const rect = el.getBoundingClientRect();
  return rect.top + window.scrollY;
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerOffset = windowHeight * 0.28;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = getSectionTop(el);
          if (scrollY >= top - triggerOffset) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection('');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return activeSection;
}
