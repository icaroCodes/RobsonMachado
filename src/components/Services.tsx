import React from 'react';
import { motion } from 'framer-motion';
import {
  Ruler,
  Building2,
  Home,
  Droplets,
  Waves,
  ClipboardList
} from 'lucide-react';

const services = [
  {
    icon: Ruler,
    title: "Projeto Arquitetônico",
    description:
      "Criação de projetos arquitetônicos completos, com estudo de layout, volumetria e soluções técnicas que aliam estética, conforto e viabilidade construtiva."
  },
  {
    icon: Building2,
    title: "Projeto Executivo e Projeto Legal",
    description:
      "Elaboração detalhada para aprovação em órgãos competentes e execução da obra, garantindo conformidade legal, precisão técnica e redução de retrabalhos."
  },
  {
    icon: Home,
    title: "Projeto de Automação Residencial",
    description:
      "Planejamento de automação inteligente para residências, integrando iluminação, segurança e conforto com soluções modernas e eficientes."
  },
  {
    icon: Droplets,
    title: "Projeto Hidráulico",
    description:
      "Dimensionamento e planejamento de sistemas hidráulicos eficientes, assegurando pressão adequada, economia de água e desempenho confiável."
  },
  {
    icon: Waves,
    title: "Projeto Hidrossanitário",
    description:
      "Desenvolvimento de sistemas de esgoto e drenagem conforme normas técnicas, garantindo segurança sanitária e funcionamento duradouro da edificação."
  },
  {
    icon: ClipboardList,
    title: "Gestão e Acompanhamento de Obras",
    description:
      "Controle técnico da obra com acompanhamento de cronograma, custos e qualidade, assegurando execução fiel ao projeto e previsibilidade total."
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-4 sm:p-6 lg:p-8 border border-dark-green/10 bg-beige hover:bg-white transition-colors duration-500 rounded-sm flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="mb-4 sm:mb-6 inline-block p-3 sm:p-4 bg-dark-green text-beige rounded-full group-hover:bg-brown transition-colors duration-300">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
              <h4 className="text-xs sm:text-lg lg:text-xl font-bold text-dark-green mb-2 sm:mb-4 line-clamp-2 min-h-[2.5rem] lg:min-h-0">{service.title}</h4>
              <p className="text-dark-green/70 leading-relaxed text-[10px] sm:text-sm lg:text-base line-clamp-4 sm:line-clamp-none">
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