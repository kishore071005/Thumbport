import { useState } from 'react';
import { projects } from '../data/projects';
import ThumbnailCard from './ThumbnailCard';
import ProjectModal from './ProjectModal';
import type { Project } from '../types/project';

export default function ThumbnailGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 bg-bg-dark border-t border-border-dark relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/10 w-[400px] h-[400px] rounded-full bg-accent-orange/3 blur-[120px] pointer-events-none" />
      
      <div className="w-full px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest text-accent-orange uppercase font-sans">
            Showcase
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-text-white mt-2 uppercase">
            Selected Work
          </h2>
          <div className="w-16 h-1 bg-accent-orange mx-auto my-4 rounded-full" />
          <p className="font-sans text-text-dim text-sm sm:text-base leading-relaxed">
            A collection of thumbnail concepts designed to grab attention and tell the story before the video even begins.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project) => (
            <ThumbnailCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
