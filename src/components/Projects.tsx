import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAnimationLevel } from '../contexts/AnimationContext';

const projectsData = [
  {
    id: 1,
    title: "Residência de alto padrão",
    category: "Projeto Arquitetônico Residencial",
    images: ["/projetoferrari.jpeg", "/projetoferrari2.jpeg", "/projetoferrari3.jpeg"],
    description: "Projeto residencial unifamiliar de linguagem contemporânea, com volumetria marcante, linhas retas e forte contraste de materiais. A proposta prioriza funcionalidade, conforto e estética, integrando garagem coberta, área social bem iluminada e suíte no pavimento superior com varanda. O uso de iluminação linear embutida valoriza a arquitetura e reforça a leitura noturna.",
  },
  {
    id: 2,
    title: "Beach Way Riviera",
    category: "Projeto de automação",
    images: ["/beachWay.jpeg"],
    description: "Projeto de automação residencial de alto padrão, desenvolvido para integrar conforto, lazer e tecnologia à arquitetura contemporânea. A proposta valoriza a área de lazer com piscina como núcleo do ambiente, utilizando automação para controle inteligente de iluminação, ventilação e cenários, ampliando a experiência de uso, o bem-estar e a funcionalidade da residência.",
  },
  {
    id: 3,
    title: "Condomínio",
    category: "Desenho arquitetônico",
    images: ["/apartamento.jpeg", "/basket.jpeg", "/interiordoapartamento.jpeg", "/piscinadoapartamento.jpeg", "/piscinadoapartamento2.jpeg", "/quadradoapartamento.jpeg"],
    description: "Este projeto de condomínio foi desenvolvido como atividade prática de estágio na disciplina de Desenho Arquitetônico, abrangendo concepção, representação técnica e organização espacial.",
  },
  {
    id: 4,
    title: "Edifício Residencial Vertical de Alto Padrão",
    category: "Projeto Arquitetônico Residencial Multifamiliar",
    images: ["/predio.jpeg"],
    description: "Projeto arquitetônico de edifício residencial vertical, com múltiplas unidades habitacionais distribuídas em pavimentos tipo. A proposta enfatiza fachada contemporânea, varandas contínuas, iluminação arquitetônica cênica, repetição modular e valorização urbana, com forte presença visual.",
  },
  {
    id: 5,
    title: "Pioneira Residencial",
    category: "Projeto Arquitetônico de Condomínio Residencial",
    images: ["/pioneira2.jpeg", "/pioneira1.jpeg", "/pioneira3.jpeg"],
    description: "Projeto arquitetônico de um condomínio residencial, responsável pelo controle de acesso, identidade visual e primeira leitura arquitetônica do empreendimento. A proposta trabalha volumetria horizontal, materiais naturais, iluminação arquitetônica linear e transparência visual, equilibrando segurança, funcionalidade e presença institucional.",
  },
  {
    id: 6,
    title: "Residência Unifamiliar com Área de Lazer",
    category: "Projeto Arquitetônico Residencial Unifamiliar",
    images: ["/casinha.jpeg"],
    description: "Projeto arquitetônico de residência unifamiliar de alto padrão, com foco em concepção espacial, volumetria contemporânea, integração interior–exterior, área de lazer com piscina e valorização da iluminação natural.",
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { level } = useAnimationLevel();

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

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
              layoutId={level === 'high' ? `project-container-${project.id}` : undefined}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative aspect-[4/3] overflow-hidden rounded-sm bg-beige"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.img
                layoutId={level === 'high' ? `project-image-${project.id}` : undefined}
                src={project.images[0]}
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
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              className={`absolute inset-0 ${level === 'high' ? 'bg-dark-green/90 backdrop-blur-sm' : 'bg-dark-green/95'}`}
            />
            
            <motion.div
              layoutId={level === 'high' ? `project-container-${selectedProject.id}` : undefined}
              initial={level !== 'high' ? { opacity: 0, scale: 0.95, y: 20 } : false}
              animate={level !== 'high' ? { opacity: 1, scale: 1, y: 0 } : false}
              exit={level !== 'high' ? { opacity: 0, scale: 0.95, y: 20 } : false}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full max-w-3xl bg-beige rounded-sm overflow-hidden z-10 max-h-[90vh] flex flex-col ${level === 'high' ? 'shadow-2xl' : 'shadow-xl'}`}
            >
              <div className="relative h-64 md:h-96 w-full group/modal overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    layoutId={level === 'high' && currentImageIndex === 0 ? `project-image-${selectedProject.id}` : undefined}
                    initial={level !== 'high' ? { opacity: 0 } : false}
                    animate={level !== 'high' ? { opacity: 1 } : false}
                    exit={level !== 'high' ? { opacity: 0 } : false}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-dark-green/50 text-white rounded-full hover:bg-dark-green/80 transition-colors z-30"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-dark-green/50 text-white rounded-full hover:bg-dark-green/80 transition-colors z-30"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-dark-green/80 rounded-full text-[10px] text-white tracking-widest uppercase z-30">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  className="absolute top-4 right-4 p-2 bg-beige/80 text-dark-green rounded-full hover:bg-white transition-colors z-40"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-brown mb-4">
                   <span>{selectedProject.category}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">{selectedProject.title}</h3>
                
                <p className="text-dark-green/80 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <div className="pt-8 border-t border-dark-green/10 flex justify-between items-center">
                   <span className="text-dark-green/50 text-sm">Robson Machado Engenharia</span>
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