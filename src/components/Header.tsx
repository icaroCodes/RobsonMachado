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
              Engenharia Civil
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
    href="https://api.whatsapp.com/send?phone=558594069922&text=oi,%20vim%20pelo%20seu%20site!%20Quero%20um%20or%C3%A7amento"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropBlur: "0px" }}
            animate={{ opacity: 1, backdropBlur: "20px" }}
            exit={{ opacity: 0, backdropBlur: "0px" }}
            className="fixed inset-0 z-[90] bg-white/90 backdrop-blur-2xl md:hidden flex flex-col justify-center px-12"
          >
            <nav className="flex flex-col space-y-6">
              {links.map((link, i) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-semibold tracking-tight text-black hover:text-black/50 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;