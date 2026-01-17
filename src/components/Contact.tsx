import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 px-6 md:px-12 bg-beige">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-sm">
        
        <div className="md:w-5/12 bg-dark-green p-10 md:p-12 text-beige flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Vamos conversar?</h2>
            <p className="text-beige/70 mb-8 leading-relaxed">
              Tem um projeto em mente? Entre em contato para agendar uma consultoria ou solicitar um orçamento detalhado.
            </p>
          </div>

          <div className="space-y-6">
            <a href="#" className="flex items-center gap-4 hover:text-brown transition-colors">
              <Mail className="w-5 h-5 text-brown" />
              <span>contato@robsonmachado.eng.br</span>
            </a>
            <a href="#" className="flex items-center gap-4 hover:text-brown transition-colors">
              <Phone className="w-5 h-5 text-brown" />
              <span>(85) 99999-9999</span>
            </a>
            
            <div className="flex gap-4 pt-6 mt-6 border-t border-beige/10">
              <a href="#" className="p-2 bg-beige/10 rounded-full hover:bg-brown transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-beige/10 rounded-full hover:bg-brown transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-7/12 p-10 md:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase text-dark-green tracking-wide">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border-b border-dark-green/20 py-2 focus:border-brown focus:outline-none bg-transparent transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold uppercase text-dark-green tracking-wide">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full border-b border-dark-green/20 py-2 focus:border-brown focus:outline-none bg-transparent transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs font-bold uppercase text-dark-green tracking-wide">Assunto</label>
              <select id="subject" className="w-full border-b border-dark-green/20 py-2 focus:border-brown focus:outline-none bg-transparent transition-colors">
                <option>Projeto de Engenharia</option>
                <option>Design de Interiores</option>
                <option>Gerenciamento de Obra</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase text-dark-green tracking-wide">Mensagem</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full border-b border-dark-green/20 py-2 focus:border-brown focus:outline-none bg-transparent transition-colors resize-none"
                placeholder="Descreva brevemente sua necessidade..."
              ></textarea>
            </div>

            <button type="button" className="group flex items-center justify-between w-full bg-dark-green text-beige py-4 px-6 mt-4 hover:bg-brown transition-colors duration-300">
              <span className="font-bold uppercase tracking-widest text-sm">Enviar Mensagem</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;