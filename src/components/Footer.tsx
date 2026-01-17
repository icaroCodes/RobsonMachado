import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/robsonmachado.eng/", label: "Instagram" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/robson-iago-borges-machado-653281346/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:robsoniago.machado@gmail.com", label: "Email" },
  ];

  return (
    // Reduzido pt-32 para pt-20 no mobile
    <footer className="relative bg-dark-green pt-20 md:pt-32 pb-8 md:pb-12 px-6 overflow-hidden">
      
      {/* --- ONDAS ANIMADAS --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <motion.svg 
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative block w-[200%] h-[60px] md:h-[120px] fill-beige" // Altura reduzida no mobile
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </motion.svg>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Gap reduzido de 12 para 8 no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
          
          {/* Coluna 1: Logo & Slogan */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-4 md:space-y-6 text-center md:text-left">
            <div>
              {/* Fonte reduzida no mobile (text-xl para text-3xl no md) */}
              <h2 className="text-xl md:text-3xl font-bold tracking-[0.2em] md:tracking-[0.25em] text-beige">ROBSON MACHADO</h2>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] text-brown mt-2 md:mt-4 font-semibold">
                Engenharia de Precisão
              </p>
            </div>
            <p className="text-beige/50 text-xs md:text-sm max-w-sm font-light leading-relaxed mx-auto md:mx-0">
              Transformando visões complexas em estruturas sólidas através da engenharia civil de alto padrão.
            </p>
          </motion.div>

          {/* Coluna 2: Links Rápidos - Oculto ou simplificado no Mobile se desejar, mas aqui está compacto */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-center md:text-left">
            <h3 className="text-beige/20 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">Menu</h3>
            <ul className="flex flex-wrap justify-center md:block gap-x-6 gap-y-2 md:space-y-3">
              {[
                { label: 'Serviços', path: 'servicos' },
                { label: 'Projetos', path: 'projetos' },
                { label: 'Sobre', path: 'sobre' },
                { label: 'Contato', path: 'contato' }
              ].map((item) => (
                <li key={item.path}>
                  <a 
                    href={`#${item.path}`} 
                    className="text-beige/60 hover:text-brown text-xs md:text-sm font-light transition-all flex items-center group"
                  >
                    <span className="hidden md:inline-block w-0 group-hover:w-4 h-[1px] bg-brown mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    <motion.span whileHover={{ x: 5 }}>{item.label}</motion.span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Coluna 3: Social & Action */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8 flex flex-col items-center md:items-end">
            <div className="space-y-3 md:space-y-4 text-center md:text-right">
              <h3 className="text-beige/20 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">Conectar</h3>
              <div className="flex gap-6 md:gap-4 justify-center md:justify-end">
                {socialLinks.map(({ Icon, href, label }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#A67C52' }}
                    className="text-beige/40 cursor-pointer"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="group flex items-center gap-3 bg-beige/5 border border-beige/10 px-5 py-2.5 rounded-full hover:bg-beige hover:text-dark-green transition-all duration-500"
            >
              <span className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase">Voltar ao topo</span>
              <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Linha Divisória */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-px w-full bg-gradient-to-r from-transparent via-beige/10 to-transparent mb-6 md:mb-8"
        />

        {/* Copyright e Créditos */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-beige/20 font-medium text-center">
          <p>© 2026 Robson Machado — Estética & Rigor Técnico</p>
          
          <div className="flex items-center gap-2 group">
            <span className="opacity-50">Criado por</span>
            <a href="https://github.com/IcaroCodes" className="text-beige/40 group-hover:text-brown transition-colors">
              IcaroCodes <span className="inline-block group-hover:rotate-45 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Esferas de Luz (Ajustadas para não "vazar" tanto no mobile) */}
      <div className="absolute top-1/2 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-brown/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
    </footer>
  );
};

export default Footer;