import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Variantes para animação de revelação em cascata (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <footer className="relative bg-dark-green pt-32 pb-12 px-6 overflow-hidden">
      
      {/* --- ONDAS ANIMADAS (Mestre do CSS) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        {/* Onda 1 - Mais lenta e profunda */}
        <motion.svg 
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative block w-[200%] h-[120px] fill-beige"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </motion.svg>

        {/* Onda 2 - Movimento Contínuo (Ilusão de Ótica) */}
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[200%] h-[120px] opacity-[0.02] pointer-events-none"
        >
          <svg className="w-full h-full fill-brown" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Coluna 1: Logo & Slogan */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-[0.25em] text-beige">ROBSON MACHADO</h2>
              <p className="text-xs uppercase tracking-[0.5em] text-brown mt-4 font-semibold">
                Engenharia de Precisão
              </p>
            </div>
            <p className="text-beige/50 text-sm max-w-sm font-light leading-relaxed">
              Transformando visões complexas em estruturas sólidas através da engenharia civil de alto padrão e inovação técnica.
            </p>
          </motion.div>

          {/* Coluna 2: Links Rápidos */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-beige/20 text-xs uppercase tracking-[0.3em] font-bold">Menu</h3>
            <ul className="space-y-3">
              {['Projetos', 'Metodologia', 'Sobre nós', 'Contato'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-beige/60 hover:text-brown text-sm font-light transition-all flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-brown mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 3: Social & Action */}
          <motion.div variants={itemVariants} className="space-y-8 md:text-right flex flex-col md:items-end">
             <div className="space-y-4">
                <h3 className="text-beige/20 text-xs uppercase tracking-[0.3em] font-bold">Conectar</h3>
                <div className="flex gap-4 justify-start md:justify-end">
                  {[Instagram, Linkedin, Mail].map((Icon, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.2, rotate: 5, color: '#A67C52' }}
                      className="text-beige/40 transition-colors"
                      href="#"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
             </div>

             <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="group flex items-center gap-4 bg-beige/5 border border-beige/10 px-6 py-3 rounded-full hover:bg-beige hover:text-dark-green transition-all duration-500"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase">Voltar ao topo</span>
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </motion.button>
          </motion.div>
        </div>

        {/* Rodapé Final com Linha Animada */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-px w-full bg-gradient-to-r from-transparent via-beige/10 to-transparent mb-8"
        />

        <div className="flex flex-col md:row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-beige/20 font-medium">
          <p>© 2026 Robson Machado — Estética & Rigor Técnico</p>
          
          <div className="flex items-center gap-2 group">
             <span className="opacity-50">Criado por</span>
             <a href="#" className="text-beige/40 group-hover:text-brown transition-colors">
                IcaroCodes <span className="inline-block group-hover:rotate-45 transition-transform">↗</span>
             </a>
          </div>
        </div>
      </motion.div>

      {/* Esferas de Luz Sutil (Ilusão de ótica de profundidade) */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brown/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-beige/5 rounded-full blur-[150px]"></div>
    </footer>
  );
};

export default Footer;