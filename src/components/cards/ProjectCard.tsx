import { ExternalLink } from 'lucide-react'
import { Card, CardHeader, TechBadge, Button } from '../ui'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col">
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
  )
}
