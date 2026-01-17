import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Residencial Horizonte",
    category: "Projetos de Engenharia",
    image: "https://picsum.photos/800/600?random=1",
    description: "Complexo residencial de alto padrão com 12 unidades. Estrutura em concreto armado aparente e integração total com a topografia do terreno.",
    year: "2024",
    location: "Fortaleza, CE"
  },
  {
    id: 2,
    title: "Loft Industrial Athos",
    category: "Design de Interiores",
    image: "https://picsum.photos/800/600?random=2",
    description: "Reforma completa de galpão industrial transformado em espaço corporativo. Foco em acústica e iluminação natural.",
    year: "2023",
    location: "Eusébio, CE"
  },
  {
    id: 3,
    title: "Clínica Vida & Saúde",
    category: "Gerenciamento",
    image: "https://picsum.photos/800/600?random=3",
    description: "Gestão completa de obra hospitalar, cumprindo rigorosas normas da ANVISA e prazos apertados para inauguração.",
    year: "2023",
    location: "Sobral, CE"
  },
  {
    id: 4,
    title: "Casa Verano",
    category: "Engenharia",
    image: "https://picsum.photos/800/600?random=4",
    description: "Projeto estrutural e hidrossanitário para residência de veraneio sustentável, com reaproveitamento de águas pluviais.",
    year: "2022",
    location: "Aquiraz, CE"
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-brown mb-2 block">Portfólio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark-green">Projetos Selecionados</h2>
          </div>
          <div className="mt-6 md:mt-0 text-dark-green/60">
            Design funcional, execução precisa.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-container-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative aspect-[4/3] overflow-hidden rounded-sm"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                layoutId={`project-image-${project.id}`}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-dark-green/20 group-hover:bg-dark-green/0 transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-green/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                <div className="text-beige">
                  <p className="text-xs uppercase tracking-widest mb-1">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <div className="bg-beige text-dark-green p-2 rounded-full">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark-green/90 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              className="relative w-full max-w-3xl bg-beige rounded-sm overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              <div className="relative h-64 md:h-96 w-full">
                <motion.img
                  layoutId={`project-image-${selectedProject.id}`}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(null);
                  }}
                  className="absolute top-4 right-4 p-2 bg-beige/80 text-dark-green rounded-full hover:bg-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-brown mb-4">
                   <span>{selectedProject.category}</span>
                   <span>•</span>
                   <span>{selectedProject.year}</span>
                   <span>•</span>
                   <span>{selectedProject.location}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">{selectedProject.title}</h3>
                
                <p className="text-dark-green/80 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="pt-8 border-t border-dark-green/10 flex justify-between items-center">
                   <span className="text-dark-green/50 text-sm">Robson Machado Engenharia</span>
                   <button className="text-dark-green font-semibold hover:text-brown transition-colors">
                     Ver detalhes técnicos
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;