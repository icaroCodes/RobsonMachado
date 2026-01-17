import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const differentiators = [
  "Segurança Técnica",
  "Eficiência de Custos",
  "Cumprimento Rigoroso de Prazos",
  "Conformidade Legal & Regulatória"
];

const Differentiators: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-dark-green text-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="md:w-1/3">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Por que escolher <br/>
            <span className="text-brown">Robson Machado?</span>
          </motion.h2>
          <p className="text-beige/60 leading-relaxed">
            Uma abordagem que vai além do básico. Foco total em entregar valor real, segurança e tranquilidade para o seu investimento.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-8">
          {differentiators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex items-center space-x-6 border-b border-beige/10 pb-6 group"
            >
              <CheckCircle2 className="text-brown w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-xl md:text-3xl font-light tracking-wide">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;