import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const differentiators = [
  {
    title: "Segurança Técnica",
    description: "Cada decisão é baseada em critério técnico, normas e experiência prática de obra, reduzindo riscos e improvisos."
  },
  {
    title: "Gestão e Organização",
    description: "Trabalho com cronograma, documentação e acompanhamento constante, garantindo controle real da execução.."
  },
  {
    title: "Presença em Obra",
    description: "A obra não fica “solta”. Estou presente, acompanho equipes e confiro se o projeto está sendo executado corretamente"
  },
  {
    title: "Antecipação de Problemas",
    description: "Problemas são identificados e resolvidos antes de impactar custo, prazo ou gerar desgaste ao cliente."
  },
  {
    title: "Comunicação Clara e Transparente",
    description: "O cliente entende o que está sendo feito, por que está sendo feito e quanto isso impacta no projeto ou na obra."
  }
];

const Differentiators: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-dark-green text-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-row items-start justify-between gap-4 md:gap-12">
        <div className="w-[45%] md:w-1/3">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-[15px] sm:text-2xl md:text-5xl font-bold tracking-tight mb-3 md:mb-6 leading-tight"
          >
            Por que escolher <br/>
            <span className="text-brown">Robson Machado??</span>
          </motion.h2>
          <p className="text-[10px] sm:text-sm md:text-base text-beige/60 leading-relaxed">
            Uma abordagem que vai além do básico. Foco total em entregar valor real, segurança e tranquilidade para o seu investimento.
          </p>
        </div>

        <div className="w-[55%] md:w-1/2 flex flex-col space-y-2 md:space-y-4">
          {differentiators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border-b border-beige/10 pb-3 md:pb-6 group cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 md:gap-6">
                  <CheckCircle2 className="text-brown w-3 h-3 md:w-6 md:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] sm:text-lg md:text-3xl font-light tracking-wide leading-tight">{item.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-brown/50 w-3 h-3 md:w-5 md:h-5" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-beige/60 text-[9px] sm:text-sm md:text-base leading-relaxed pl-5 md:pl-12 max-w-md">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;