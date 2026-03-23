import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o background ao rolar, igual ao site da Apple
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled 
            ? 'py-3 backdrop-blur-xl bg-white/70 border-b border-black/[0.05]' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Section */}
          <motion.div 
            whileHover={{ opacity: 0.7 }}
            className="cursor-pointer z-[101]"
          >
            <h1 className="text-xl font-semibold tracking-tighter text-black leading-none">
              ROBSON
            </h1>
            <span className="text-[9px] tracking-[0.3em] uppercase text-black/50 block mt-1">
              Projetos e Construções
            </span>
          </motion.div>

          {/* Desktop Nav - Apple Style */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-black/60 hover:text-black transition-all duration-300 tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botão Call to Action Minimalista */}
          <div className="hidden md:block">
  <motion.a
    href="https://api.whatsapp.com/send?phone=558594069922&text=Oi%2C%20vim%20pelo%20seu%20site%21%20Gostaria%20de%20um%20or%C3%A7amento."
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-5 py-2 bg-black text-white text-[12px] font-medium rounded-full hover:bg-zinc-800 transition-colors duration-300 inline-block tracking-wide shadow-lg shadow-black/5"
  >
    Orçamento
  </motion.a>
</div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-[101] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu */}
      {/* Fullscreen Mobile Menu - Melhorado */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-white md:hidden flex flex-col justify-center px-10"
          >
            {/* Background decorativo com blur removido para otimizar a performance (reduz stuttering no mobile) */}

            <nav className="flex flex-col space-y-8 relative z-10">
              {links.map((link, i) => (
                <motion.a
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-bold tracking-tighter text-black flex items-center group"
                >
                  <span className="text-[12px] mr-4 opacity-30 font-mono">0{i + 1}</span>
                  {link.name}
                </motion.a>
              ))}

              {/* CTA Adicional no Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                className="pt-10"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=558594069922&text=Oi%2C%20vim%20pelo%20seu%20site%21%20Gostaria%20de%20um%20or%C3%A7amento."
                  className="w-full py-5 bg-black text-white text-center rounded-2xl font-medium text-lg block"
                >
                  Solicitar Orçamento
                </a>
              </motion.div>
            </nav>

            {/* Rodapé do Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-black/40"
            >
              <span>Robson Engenharia</span>
              <span>© 2026</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;