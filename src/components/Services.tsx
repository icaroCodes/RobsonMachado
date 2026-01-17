import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Home, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: Ruler,
    title: "Projetos de Engenharia",
    description: "Desenvolvimento técnico detalhado, cálculo estrutural e planejamento executivo com foco em segurança e otimização."
  },
  {
    icon: Home,
    title: "Design de Interiores",
    description: "Harmonização de espaços unindo estética refinada e funcionalidade prática para ambientes residenciais e comerciais."
  },
  {
    icon: ClipboardCheck,
    title: "Gerenciamento de Obras",
    description: "Supervisão rigorosa, controle de cronograma e gestão de custos para garantir a entrega perfeita do seu empreendimento."
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 px-6 md:px-12 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-brown mb-2"
          >
            Especialidades
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-dark-green"
          >
            Excelência em cada etapa
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 border border-dark-green/10 bg-beige hover:bg-white transition-colors duration-500 rounded-sm"
            >
              <div className="mb-6 inline-block p-4 bg-dark-green text-beige rounded-full group-hover:bg-brown transition-colors duration-300">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-dark-green mb-4">{service.title}</h4>
              <p className="text-dark-green/70 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;