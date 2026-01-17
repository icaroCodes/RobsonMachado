import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, label, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  // Referência para detectar quando o contador aparece na tela
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay: 0.2, // Pequeno delay para elegância
        ease: [0.16, 1, 0.3, 1], 
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="flex flex-col items-center space-y-2">
      <div className="flex items-baseline text-dark-green">
        <motion.span className="text-5xl md:text-6xl font-bold tracking-tighter">
          {rounded}
        </motion.span>
        {suffix && (
          <span className="text-2xl font-semibold ml-1 text-brown">{suffix}</span>
        )}
      </div>
      <p className="text-[10px] uppercase tracking-[0.4em] text-dark-green/40 font-bold">
        {label}
      </p>
    </div>
  );
};

export default Counter;