import React, { useState, useEffect } from 'react';
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentiators from './components/Differentiators';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutGroup>
      <div className={`min-h-screen font-sans selection:bg-brown selection:text-white bg-beige ${isMenuOpen ? "overflow-hidden max-h-screen" : ""}`}>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-green"
              exit={{ 
                y: "-100vh",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
              }}
            >
              {/* Efeito de Ilusão de Ótica/Profundidade ao fundo */}
              <motion.div 
                className="absolute inset-0 opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                style={{
                  background: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "30px 30px"
                }}
              />

              <motion.div
                className="relative flex flex-col items-center w-full px-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Logo com animação de "Floating" 3D */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotateY: [0, 15, 0] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative z-10 mb-6"
                >
                  <img 
                    src="/logorobsonmachado.png" 
                    alt="logo" 
                    className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]" 
                  />
                </motion.div>

                {/* Texto Ajustado: menor no mobile (text-xl) e normal no desktop (md:text-5xl) */}
                <motion.h1 
                  className="text-white text-xl md:text-5xl font-light uppercase whitespace-nowrap"
                  initial={{ letterSpacing: "0.2em", opacity: 0 }}
                  animate={{ 
                    // No mobile usamos 0.3em e no desktop voltamos para 0.6em
                    letterSpacing: window.innerWidth < 768 ? "0.3em" : "0.6em", 
                    opacity: 1 
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  Robson Machado
                </motion.h1>

                {/* Barra de progresso */}
                <div className="w-32 md:w-48 h-[1px] bg-white/20 mt-8 overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-brown"
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              <main className="relative z-0">
                <Hero />
                <Services />
                <Differentiators />
                <Projects />
                <Testimonials />
                <About />
                <Contact />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}

export default App;