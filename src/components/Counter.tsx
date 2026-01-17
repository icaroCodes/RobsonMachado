import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

const Counter: React.FC<{ value: number; label: string; suffix?: string }> = ({ value, label, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Animação ultra rápida: dura apenas 0.8 segundos para qualquer número
      const controls = animate(0, value, {
        duration: 0.2, 
        ease: [0.16, 1, 0.3, 1], // Easing de "saída rápida" (Power4.out)
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <span className="text-2xl md:text-5xl font-black text-[#1A2F23] tracking-tighter tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] text-[#8B5E3C] font-bold mt-1 opacity-80">
        {label}
      </span>
    </div>
  );
};

export default Counter;