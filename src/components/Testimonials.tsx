import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Eduardo Henrique Moura",
    role: "Cliente residencial",
    text: "Desde a primeira reunião ficou claro que não era um serviço comum. Cada decisão foi explicada com clareza e embasamento técnico, o que trouxe muita segurança."
  },
  {
    id: 2,
    name: "Renata Pires Albuquerque",
    role: "Cliente residencial",
    text: "O projeto respeitou exatamente o que imaginávamos, mas apresentou soluções que jamais teríamos considerado sozinhos. O resultado final superou a expectativa."
  },
  {
    id: 3,
    name: "Fábio Luiz Sampaio",
    role: "Cliente – construção própria",
    text: "Não tive dor de cabeça em nenhuma etapa. Orçamento transparente, cronograma realista e acompanhamento constante. Foi uma obra tranquila, algo raro."
  },
  {
    id: 4,
    name: "Camila Rocha Figueiredo",
    role: "Cliente residencial",
    text: "O cuidado com os detalhes fez toda a diferença. Nada foi feito no improviso; cada escolha tinha fundamento técnico e estético."
  },
  {
    id: 5,
    name: "Thiago Moreira Bastos",
    role: "Cliente – reforma completa",
    text: "Senti confiança do início ao fim. Sempre soube o que estava sendo feito e o motivo de cada decisão. Faria tudo novamente sem hesitar."
  }
];


const PremiumCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play suave (opcional, pode remover se preferir controle manual total)
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Apple-esque ease (easeOutExpo ish)
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* --- AMBIENT LIGHTING (3D ILLUSION) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orb 1 - Movimento lento e orgânico */}
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0], 
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[120px]" 
        />
        {/* Orb 2 - Accent Light (Dourado/Bronze muito sutil) */}
        <motion.div 
          animate={{ 
            x: [0, -70, 30, 0], 
            y: [0, 60, -40, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#AD8B73]/10 rounded-full blur-[140px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* --- ESQUERDA: CABEÇALHO E CONTROLES --- */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#AD8B73]" />
              <span className="text-[#AD8B73] text-xs font-semibold tracking-[0.2em] uppercase">
                Depoimentos
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1]">
              A excelência <br/>
              <span className="text-neutral-500">nos detalhes.</span>
            </h2>
          </motion.div>

          {/* Controles de Navegação Minimalistas */}
          <div className="flex items-center gap-4 pt-4">
            <button 
              onClick={prev}
              className="group p-4 rounded-full border border-neutral-800 hover:border-[#AD8B73] transition-colors duration-300 bg-neutral-900/50 backdrop-blur-sm"
              aria-label="Anterior"
            >
              <ArrowLeft size={20} className="text-neutral-400 group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={next}
              className="group p-4 rounded-full border border-neutral-800 hover:border-[#AD8B73] transition-colors duration-300 bg-neutral-900/50 backdrop-blur-sm"
              aria-label="Próximo"
            >
              <ArrowRight size={20} className="text-neutral-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Indicadores de Progresso */}
          <div className="flex gap-2 mt-4">
             {testimonials.map((_, i) => (
               <div key={i} className="relative h-1 w-12 rounded-full bg-neutral-800 overflow-hidden">
                 {i === current && (
                   <motion.div 
                     layoutId="progress"
                     className="absolute inset-0 bg-[#AD8B73]"
                     transition={{ duration: 0.6 }}
                   />
                 )}
               </div>
             ))}
          </div>
        </div>

        {/* --- DIREITA: CARTÃO FLUTUANTE 3D --- */}
        <div className="w-full md:w-2/3 h-[400px] relative perspective-[2000px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              {/* Cartão Glassmorphism Premium */}
              <div className="h-full w-full relative bg-neutral-900/40 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50 flex flex-col justify-between overflow-hidden group hover:border-white/10 transition-colors duration-500">
                
                {/* Efeito de brilho ao passar o mouse (Gradient Shine) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <Quote size={80} className="absolute top-8 right-8 text-white/5 pointer-events-none" />

                <div className="relative z-10 flex-grow flex items-center">
                  <p className="text-xl md:text-2xl lg:text-3xl text-neutral-200 font-light leading-relaxed tracking-wide">
                    "{testimonials[current].text}"
                  </p>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div>
                    <h4 className="text-white font-medium text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-neutral-500 text-sm mt-1">
                      {testimonials[current].role}
                    </p>
                  </div>
                  
                  {/* Pequeno detalhe visual de autoridade */}
                  <div className="hidden md:block">
                     <div className="flex -space-x-2">
                        {[1,2,3,4,5].map((s) => (
                           <div key={s} className="w-2 h-2 rounded-full bg-[#AD8B73]" style={{ opacity: 0.5 + (s * 0.1) }} />
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default PremiumCarousel;