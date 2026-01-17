import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const numero = "558594069922";
    const texto = `Olá, meu nome é ${formData.name}. %0A%0A${formData.message}%0A%0AContato: ${formData.phone}`;
    window.open(`https://api.whatsapp.com/send?phone=${numero}&text=${texto}`, '_blank');
  };

  return (
    <section id="contato" className="py-12 md:py-24 px-4 md:px-6 bg-beige overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto bg-white/60 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-2xl shadow-dark-green/5 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row">
          
          {/* Lado Esquerdo - Info Minimalista */}
          <div className="lg:w-[35%] bg-dark-green p-8 md:p-12 lg:p-16 text-beige flex flex-col justify-between">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Vamos criar <br className="hidden md:block" /> algo <span className="text-brown italic">único?</span>
              </h2>
              
              <div className="space-y-3 pt-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brown font-bold opacity-80">Contato Direto</p>
                <div className="flex flex-col gap-1 md:gap-2">
                  <a href="mailto:robsoniago.machado@gmail.com" className="text-base md:text-lg font-light hover:text-brown transition-colors truncate">
                    robsoniago.machado@gmail.com
                  </a>
                  <a href="tel:558594069922" className="text-base md:text-lg font-light hover:text-brown transition-colors">
                    +55 85 9406-9922
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 md:pt-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brown font-bold mb-4 opacity-80">Social</p>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {[
                  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/robson-iago-borges-machado-653281346/' },
                  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/robsonmachado.eng/' }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    className="flex items-center gap-2 text-xs md:text-sm font-medium hover:text-brown transition-all group"
                  >
                    <social.icon size={16} className="text-beige group-hover:text-brown transition-colors" />
                    <span>{social.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="lg:w-[65%] p-8 md:p-12 lg:p-16 bg-white/40">
            <form onSubmit={handleWhatsApp} className="space-y-8 md:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-12">
                
                {/* Input Nome */}
                <div className="relative group">
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="peer w-full bg-transparent border-b border-dark-green/10 py-2 focus:border-brown focus:outline-none transition-colors text-dark-green font-light placeholder-transparent text-sm md:text-base" 
                    placeholder="Nome" 
                  />
                  <label className="absolute left-0 top-2 text-[10px] font-bold uppercase tracking-widest text-brown transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-dark-green/30 peer-focus:-top-4 peer-focus:text-brown peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 pointer-events-none">
                    Seu Nome
                  </label>
                </div>

                {/* Input Telefone */}
                <div className="relative group">
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="peer w-full bg-transparent border-b border-dark-green/10 py-2 focus:border-brown focus:outline-none transition-colors text-dark-green font-light placeholder-transparent text-sm md:text-base" 
                    placeholder="Telefone" 
                  />
                  <label className="absolute left-0 top-2 text-[10px] font-bold uppercase tracking-widest text-brown transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-dark-green/30 peer-focus:-top-4 peer-focus:text-brown peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 pointer-events-none">
                    Telefone
                  </label>
                </div>

                {/* Textarea Mensagem */}
                <div className="relative group md:col-span-2">
                  <textarea 
                    rows={2} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="peer w-full bg-transparent border-b border-dark-green/10 py-2 focus:border-brown focus:outline-none transition-colors text-dark-green font-light placeholder-transparent resize-none text-sm md:text-base" 
                    placeholder="Mensagem" 
                  />
                  <label className="absolute left-0 top-2 text-[10px] font-bold uppercase tracking-widest text-brown transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-dark-green/30 peer-focus:-top-4 peer-focus:text-brown peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 pointer-events-none">
                    Como posso ajudar?
                  </label>
                </div>
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between w-full md:w-max md:min-w-[240px] bg-dark-green text-beige py-4 md:py-5 px-8 md:px-10 rounded-full hover:bg-brown transition-all duration-500 shadow-lg"
              >
                <span className="font-bold uppercase tracking-widest text-[10px] md:text-[11px]">Iniciar Conversa</span>
                <div className="ml-4 p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              </motion.button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;