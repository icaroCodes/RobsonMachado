import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, MessageSquare } from 'lucide-react';
import Counter from './ui/Counter';

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-[#fdfcfb]">
      
      {/* Imersão 3D/Ilusão de Fundo - Camadas de profundidade */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-dark-green/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brown/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 space-y-10 md:space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="space-y-6 md:space-y-6"
        >
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dark-green/10 bg-white/40 backdrop-blur-md text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-dark-green/80 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brown animate-ping" />
              Robson Machado • Projetos e Construções
            </span>
          </motion.div>
          
          <h2 className="text-[2.6rem] md:text-6xl lg:text-7xl font-bold text-dark-green leading-[1.05] tracking-tight">
            Transforme suas <br className="hidden md:block"/>
            <span className="text-brown italic relative inline-block">
                ideias
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-brown/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
            </span> em <span className="text-brown italic">realidade</span>.
          </h2>
          
          <p className="text-[15px] md:text-xl text-dark-green/70 max-w-2xl mx-auto font-medium leading-relaxed px-2 md:px-0">
            Soluções técnicas de alto nível para quem valoriza <span className="text-dark-green font-bold">precisão</span> e <span className="text-dark-green font-bold">excelência</span>.
          </p>
        </motion.div>

        {/* Botões Mobile "Premium" - Agora menos esticados no mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-row items-center justify-center gap-3 md:gap-4 px-2 sm:px-4"
        >
          <a 
            href="https://wa.me/558594069922?text=Olá!%20Vim%20pelo%20seu%20site."
            className="group relative px-6 md:px-10 py-3 md:py-4 bg-dark-green text-white text-[11px] sm:text-sm md:text-base font-bold rounded-xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(26,46,36,0.3)] hover:shadow-dark-green/20 transition-all duration-500 flex items-center justify-center gap-2 md:gap-3 active:scale-95 whitespace-nowrap"
          >
            <span className="relative z-10">Orçamento</span>
            <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-brown to-dark-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Glossy Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
          </a>
          
          <a 
            href="/curriculo.pdf" 
            download="curriculorobsonmachado.pdf"
            className="group px-6 md:px-10 py-3 md:py-4 bg-white border border-dark-green/10 text-dark-green text-[11px] sm:text-sm md:text-base font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 relative overflow-hidden shadow-sm active:scale-95 whitespace-nowrap"
          >
            <span className="relative z-10">Portfólio</span>
            <Download className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-dark-green/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </motion.div>

        {/* Contador com Glassmorphism no Mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-3 gap-2 md:gap-12 mt-12 md:mt-24 py-6 md:py-16 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/50 md:bg-transparent md:border-0 md:border-t md:border-dark-green/5"
        >
          <div className="scale-90 md:scale-100 border-r border-dark-green/5">
            <Counter value={4} label="Anos" />
          </div>
          <div className="scale-90 md:scale-100 border-r border-dark-green/5">
            <Counter value={50} label="Projetos" suffix="+" />
          </div>
          <div className="scale-90 md:scale-100">
            <Counter value={50} label="Clientes" suffix="+" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <div className="p-2 rounded-full bg-white/80 border border-dark-green/5 shadow-sm">
            <ArrowDown className="text-dark-green/60 w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;