import { Eye } from 'lucide-react';
import type { Project } from '../types/project';

interface ThumbnailCardProps {
  project: Project;
  onClick: () => void;
}

export default function ThumbnailCard({ project, onClick }: ThumbnailCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-dark bg-bg-card shadow-lg cursor-pointer hover:border-border-light transition-all duration-300"
    >
      {/* Thumbnail Image rendering */}
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none" 
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/95 via-bg-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 md:p-6">
        <h3 className="font-display font-extrabold text-base sm:text-lg text-text-white leading-tight mb-2">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs font-bold text-text-white font-sans">
          <Eye className="w-4 h-4 text-accent-orange" />
          View Full Size
        </div>
      </div>
    </div>
  );
}
