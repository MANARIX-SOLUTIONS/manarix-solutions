import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 0.12,
}) {
  const reduceMotion = useReducedMotion();

  const offset = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, delay: delay / 1000, ease }}
    >
      {children}
    </motion.div>
  );
}
