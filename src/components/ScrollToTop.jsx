import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollUp}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-[var(--color-primary)] text-white shadow-[0_12px_40px_-8px_rgba(11,31,58,0.45)] border border-white/10 flex items-center justify-center hover:bg-[var(--color-secondary)] hover:scale-105 active:scale-95 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
