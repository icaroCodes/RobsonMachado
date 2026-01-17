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
    <section id="contato" className="py-24 px-6 bg-beige">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto bg-white/60 backdrop-blur-xl rounded-[3rem] border border-white/20 shadow-2xl shadow-dark-green/5 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row">
          
          {/* Lado Esquerdo - Info Minimalista */}
          <div className="lg:w-[35%] bg-dark-green p-12 lg:p-16 text-beige flex flex-col justify-between">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Vamos criar <br /> algo <span className="text-brown italic">único?</span>
              </h2>
              
              <div className="space-y-4 pt-4">
                <p className="text-xs uppercase tracking-[0.3em] text-brown font-bold">Contato Direto</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:robsoniago.machado@gmail.com" className="text-lg font-light hover:text-brown transition-colors">robsoniago.machado@gmail.com</a>
                  <a href="tel:558594069922" className="text-lg font-light hover:text-brown transition-colors">+55 85 9406-9922</a>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <p className="text-xs uppercase tracking-[0.3em] text-brown font-bold mb-4">Social</p>
              <div className="flex gap-6">
                {[
                  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/robson-iago-borges-machado-653281346/' },
                  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/robsonmachado.eng/' }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    className="flex items-center gap-2 text-sm font-medium hover:text-brown transition-all group"
                  >
                    <social.icon size={18} className="text-beige group-hover:text-brown transition-colors" />
                    <span className="hidden sm:inline">{social.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="lg:w-[65%] p-12 lg:p-16 bg-white/40">
            <form onSubmit={handleWhatsApp} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                
                <div className="relative group">
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="peer w-full bg-transparent border-b border-dark-green/10 py-3 focus:border-brown focus:outline-none transition-colors text-dark-green font-light placeholder-transparent" 
                    placeholder="Nome" 
                  />
                  <label className="absolute left-0 top-3 text-[10px] font-bold uppercase tracking-widest text-brown transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-green/30 peer-focus:-top-4 peer-focus:text-brown peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] pointer-events-none">Seu Nome</label>
                </div>

                <div className="relative group">
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="peer w-full bg-transparent border-b border-dark-green/10 py-3 focus:border-brown focus:outline-none transition-colors text-dark-green font-light placeholder-transparent" 
                    placeholder="Telefone" 
                  />
                  <label className="absolute left-0 top-3 text-[10px] font-bold uppercase tracking-widest text-brown transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-green/30 peer-focus:-top-4 peer-focus:text-brown peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] pointer-events-none">Telefone</label>
                </div>

                <div className="relative group md:col-span-2">
                  <textarea 
                    rows={3} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="peer w-full bg-transparent border-b border-dark-green/10 py-3 focus:border-brown focus:outline-none transition-colors text-dark-green font-light placeholder-transparent resize-none" 
                    placeholder="Mensagem" 
                  />
                  <label className="absolute left-0 top-3 text-[10px] font-bold uppercase tracking-widest text-brown transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-green/30 peer-focus:-top-4 peer-focus:text-brown peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] pointer-events-none">Como posso ajudar?</label>
                </div>
              </div>

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group flex items-center justify-between w-full md:w-max md:min-w-[280px] bg-dark-green text-beige py-5 px-10 rounded-full hover:bg-brown transition-all duration-500 shadow-xl shadow-dark-green/10"
              >
                <span className="font-bold uppercase tracking-widest text-[11px]">Iniciar Conversa</span>
                <div className="ml-4 p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight size={18} />
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