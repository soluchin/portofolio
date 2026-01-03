import { Card, CardHeader, Badge, DateBadge } from '../ui'
import type { Degree } from '../../types/degree'

interface EducationCardProps {
  degree: Degree
}

export function EducationCard({ degree }: EducationCardProps) {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <CardHeader 
            title={`${degree.degree} in ${degree.fieldOfStudy}`}
            subtitle={degree.institution}
            titleSize="lg"
          />
          {degree.grade && (
            <Badge variant="green" className="mb-3">
              {degree.grade}
            </Badge>
          )}
          {degree.description && (
            <p className="text-gray-700 mt-2">{degree.description}</p>
          )}
        </div>
        <div className="shrink-0">
          <DateBadge 
            startDate={String(degree.startYear)} 
            endDate={String(degree.endYear)} 
          />
        </div>
      </div>
    </Card>
  )
}
