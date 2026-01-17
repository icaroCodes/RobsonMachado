import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const links = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <motion.header
  className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 flex items-center justify-between backdrop-blur-md bg-beige/80 border-b border-dark-green/5"
>
  <div className="flex items-center gap-2 z-50">
    <motion.div
      layoutId="brand"
      className="flex flex-col"
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <h1 className="text-2xl font-bold tracking-tight text-dark-green">
        ROBSON
      </h1>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-[10px] tracking-[0.2em] uppercase text-brown leading-none"
      >
        Engenharia Civil
      </motion.span>
    </motion.div>
  </div>


      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-dark-green/70 hover:text-dark-green transition-colors duration-300 uppercase tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-50 text-dark-green"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-0 left-0 w-full h-screen bg-beige flex flex-col items-center justify-center space-y-8 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-dark-green hover:text-brown transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;