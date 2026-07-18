import { useEffect } from 'react';
import { X, Send } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-bg-dark/95 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Window Container */}
      <div className="relative w-full max-w-5xl bg-bg-card border border-border-light rounded-xl overflow-hidden shadow-2xl z-10 my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 bg-bg-dark/80 hover:bg-accent-orange text-text-white hover:text-bg-dark border border-border-light rounded-full transition-all duration-200 z-20 cursor-pointer shadow"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Simple Layout for Just Image */}
        <div className="flex flex-col">
          {/* Image */}
          <div className="w-full bg-bg-dark flex items-center justify-center border-b border-border-dark aspect-video">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-contain pointer-events-none" 
            />
          </div>

          {/* Title and CTA */}
          <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-text-white leading-tight">
              {project.title}
            </h2>
            
            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent-orange hover:bg-accent-orange-light text-bg-dark font-sans text-xs font-bold rounded-lg transition-all whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              Discuss This Concept
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
