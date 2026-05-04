import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[9998] cursor-zoom-out"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 md:inset-10 lg:inset-20 bg-[#0b0b0d] md:border md:border-white/10 md:rounded-[2.5rem] z-[9999] overflow-y-auto flex flex-col lg:flex-row shadow-2xl"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="fixed top-4 right-4 md:absolute md:top-6 md:right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors z-[10000]"
            >
              <X size={24} />
            </button>

            {/* Left: Image Container */}
            <div className="w-full lg:w-3/5 h-[40vh] lg:h-full relative overflow-hidden bg-zinc-900">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-transparent opacity-60" />
            </div>

            {/* Right: Content Container */}
            <div className="w-full lg:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-[#0b0b0d]">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 text-[#b0fb3a] mb-4">
                    <span className="text-sm font-bold tracking-[0.2em] uppercase font-sans">
                      Project Detail
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white font-heading tracking-tighter leading-tight">
                    {project.title}
                  </h2>
                </div>

                <p className="text-[#a3a3a3] text-lg font-sans leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-white font-bold font-heading text-xl">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-[#b0fb3a] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#b0fb3a] text-black hover:bg-[#9edb34] transition-colors rounded-full font-bold text-[15px]"
                >
                  Visit Website <ExternalLink size={18} />
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-full font-bold text-[15px]"
                >
                  Source Code <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
