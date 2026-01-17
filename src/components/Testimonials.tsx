import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Eduardo",
    role: "Diretor Comercial",
    text: "A atenção aos detalhes do Robson é impressionante. Ele não apenas entregou a obra no prazo, como antecipou problemas que nos economizaram um valor significativo.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Mariana Souza",
    role: "Arquiteta Parceira",
    text: "Trabalhar com o Robson é ter a certeza de que o projeto arquitetônico será respeitado e executado com maestria técnica. Um parceiro de confiança.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Roberto Campos",
    role: "Proprietário Residencial",
    text: "Profissionalismo raro. Desde o primeiro orçamento até a entrega das chaves, a comunicação foi clara e transparente. Recomendo de olhos fechados.",
    avatar: "https://picsum.photos/100/100?random=12"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">O que dizem os clientes</h2>
          <div className="h-1 w-20 bg-brown mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-beige/30 p-8 rounded-sm border border-beige/50"
            >
              <div className="flex gap-1 mb-6 text-brown">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-dark-green/80 italic mb-8 leading-relaxed font-light">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover filter grayscale contrast-125" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-green text-sm">{t.name}</h4>
                  <p className="text-xs text-dark-green/50 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;