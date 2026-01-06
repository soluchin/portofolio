import { useState } from 'react'
import { ExternalLink, X, ZoomIn } from 'lucide-react'
import { Card, CardHeader, TechBadge, Button } from '../ui'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card className="flex flex-col">
        {/* Project Image */}
        {project.image && (
          <div 
            className="w-full h-40 mb-4 border-3 border-black overflow-hidden bg-gray-100 cursor-pointer relative group"
            onClick={() => setIsModalOpen(true)}
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
            </div>
          </div>
        )}
        
        <CardHeader title={project.name} titleSize="md" />
        <p className="text-gray-700 mb-4 flex-1">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>
        
        {project.url && (
          <Button 
            href={project.url} 
            variant="primary" 
            icon={<ExternalLink size={16} />}
          >
            View Project
          </Button>
        )}
      </Card>

      {/* Image Modal/Lightbox */}
      {isModalOpen && project.image && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 bg-white border-3 border-black p-2 neo-shadow hover:bg-red-400 transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={24} />
          </button>
          
          {/* Modal content */}
          <div 
            className="max-w-[90vw] max-h-[90vh] bg-white border-4 border-black neo-shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
