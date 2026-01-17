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
    <section id="sobre" className="py-24 px-6 md:px-12 bg-dark-green text-beige">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brown font-bold tracking-widest uppercase text-sm mb-2 block">Sobre o Profissional</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experiência sólida,<br />visão moderna.</h2>
            
            <div className="space-y-4 text-beige/70 text-lg leading-relaxed font-light">
              <p>
                Formado em Tecnologia da Construção pelo IFCE, atuo na convergência entre precisão técnica e gestão eficiente.
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

        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-8 border-b border-beige/10 pb-4">Trajetória Profissional</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-beige/10 hover:border-brown/50 transition-colors rounded-sm"
              >
                <h4 className="font-bold text-beige">{exp.company}</h4>
                <p className="text-sm text-brown mt-1">{exp.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-beige/5 rounded-sm border-l-2 border-brown">
             <p className="text-sm italic">
               "Minha missão é transformar complexidade técnica em tranquilidade para o cliente."
             </p>
             <p className="text-xs mt-2 font-bold text-brown">— Robson Machado</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;