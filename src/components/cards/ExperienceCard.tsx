import { MapPin } from 'lucide-react'
import { Card, CardHeader, DateBadge } from '../ui'
import type { Experience } from '../../types/experience'

interface ExperienceCardProps {
  experience: Experience
  formatDate: (date: Date | "present") => string
}

export function ExperienceCard({ experience, formatDate }: ExperienceCardProps) {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <CardHeader 
            title={experience.role} 
            subtitle={experience.company} 
            titleSize="lg" 
          />
          {experience.location && (
            <p className="flex items-center gap-1 text-gray-600 text-sm mb-3">
              <MapPin size={16} />
              {experience.location}
            </p>
          )}
          <p className="text-gray-700">{experience.description}</p>
        </div>
        <div className="shrink-0">
          <DateBadge 
            startDate={formatDate(experience.startDate)} 
            endDate={formatDate(experience.endDate)} 
          />
        </div>
      </div>
    </Card>
  )
}
