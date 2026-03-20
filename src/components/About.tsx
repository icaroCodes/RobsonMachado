import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '/types';

const experiences: ExperienceItem[] = [
  { company: "AF Engenharia", role: "Engenharia Civil" },
  { company: "Stager Automações", role: "Gestão de Projetos" },
  { company: "Athos Construções", role: "Execução de Obras" },
  { company: "Obra Bossa Nova", role: "Supervisão Técnica" },
  { company: "Formas Engenharia", role: "Projetos Complementares" },
  { company: "Alves Mendes Construções", role: "Planejamento" },
];

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 md:py-32 px-4 md:px-12 bg-dark-green text-beige overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-row items-start justify-between gap-4 sm:gap-10 md:gap-16">

        <div className="w-[45%] md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brown font-bold tracking-widest uppercase text-[10px] sm:text-xs md:text-sm mb-2 block">Sobre o Profissional</span>
            <h2 className="text-[17px] sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 md:mb-8 leading-tight">Experiência sólida,<br />visão moderna.</h2>

            <div className="space-y-3 sm:space-y-5 md:space-y-6 text-beige/70 text-[10px] sm:text-[15px] md:text-lg leading-relaxed font-light">
              <p>
                Formado em <span className="text-beige font-medium">Tecnologia da Construção pelo IFCE</span>, atuo na convergência entre precisão técnica e gestão eficiente.
              </p>

              <p>
                Minha base em projetos técnicos e modelagem 3D me proporciona leitura estratégica do projeto à execução.
              </p>

              <p>
                Com experiência em gestão e automação residencial, entrego obras focadas em qualidade, controle e excelência.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-[55%] md:w-1/2">
          <h3 className="text-[10px] sm:text-sm md:text-xl font-bold mb-4 sm:mb-8 border-b border-beige/10 pb-2 sm:pb-4 opacity-60 uppercase tracking-widest">Trajetória Profissional</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-3 sm:p-5 md:p-6 border border-beige/10 hover:border-brown/50 transition-colors rounded-sm bg-white/[0.02]"
              >
                <h4 className="text-[11px] sm:text-base md:text-lg font-bold text-beige leading-tight">{exp.company}</h4>
                <p className="text-[9px] sm:text-sm text-brown mt-0.5 sm:mt-1">{exp.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 sm:mt-10 md:mt-12 p-3 sm:p-6 md:p-8 bg-beige/5 rounded-sm border-l-2 border-brown">
            <p className="text-[10px] sm:text-sm md:text-base italic leading-relaxed text-beige/80">
              "Minha missão é transformar complexidade técnica em tranquilidade para o cliente."
            </p>
            <p className="text-[9px] sm:text-xs md:text-sm mt-2 sm:mt-4 font-bold text-brown">— Robson Machado</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;