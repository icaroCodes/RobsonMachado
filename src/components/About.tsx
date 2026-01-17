import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '/types';

const experiences: ExperienceItem[] = [
  { company: "AF Engenharia", role: "Engenharia Civil" },
  { company: "Stager Automações", role: "Gestão de Projetos" },
  { company: "Athos", role: "Execução de Obras" },
  { company: "Obra Bossa Nova", role: "Supervisão Técnica" },
  { company: "Forms Engenharia", role: "Projetos Complementares" },
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
            
            <div className="space-y-6 text-beige/70 text-lg leading-relaxed font-light">
              <p>
                Com formação em Tecnologia da Construção pelo IFCE, minha trajetória é marcada pela união entre a precisão técnica e a capacidade de gestão.
              </p>
              <p>
                Iniciei como projetista de AutoCAD e Revit, evoluindo naturalmente para o universo 3D com SketchUp e renderização. Essa base projetual me deu uma visão única para a execução em canteiro de obras.
              </p>
              <p>
                Atuei como gerente de projetos em automação residencial, o que refinou minha atenção aos detalhes e tecnologias integradas. Hoje, aplico toda essa bagagem para entregar obras que são sinônimo de excelência.
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