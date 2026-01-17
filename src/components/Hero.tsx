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
      ease: [0.16, 1, 0.3, 1], // "Apple-like" ease curve
    },
  },
};


const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="space-y-6"
        >

          <motion variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-widest text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-dark-green animate-pulse" />
            Robson Machado | Engenharia Civil
          </span>
        </motion>
        
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-green leading-[1.1] tracking-tight">
            Transforme suas <br/>
            <span className="text-brown italic">ideias</span> em <span className="text-brown italic">realidade</span>.
          </h2>
          <p className="text-lg md:text-xl text-dark-green/70 max-w-2xl mx-auto font-light leading-relaxed">
            Soluções técnicas de alto nível para quem valoriza precisão, segurança e excelência estética.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://wa.me/558594069922?text=Olá!%20Vim%20pelo%20seu%20site."
            className="group relative px-8 py-4 bg-dark-green text-beige font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span className="relative z-10">Entrar em contato</span>
            <MessageSquare className="w-4 h-4 relative z-10" />
            <div className="absolute inset-0 bg-brown transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
          </a>
          
          <a 
  href="/curriculo.pdf" 
  download="curriculorobsonmachado.pdf"
  className="group px-8 py-4 bg-transparent border border-dark-green text-dark-green font-semibold rounded-full hover:bg-dark-green/10 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 relative overflow-hidden backdrop-blur-sm"
>
  {/* Efeito de brilho sutil no hover (Vibe Soumyajit) */}
  <span className="absolute inset-0 bg-dark-green/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
  
  <span className="relative z-10">Baixar CV</span>
  <Download className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
</a>
            
          
        </motion.div>

        <motion.div 
  whileHover={{ perspective: 1000 }}
  className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pt-16 border-t border-dark-green/5"
>
  <Counter value={4} label="Anos de Experiência" />
  <Counter value={50} label="Projetos Entregues" suffix="+" />
  <Counter value={50} label="Clientes Satisfeitos" suffix="+" />
</motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-dark-green/40 w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;