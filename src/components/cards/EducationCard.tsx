import { GraduationCap, BookOpen, FlaskConical, ScrollText } from 'lucide-react'
import { Card, Badge, DateBadge } from '../ui'
import type { Degree } from '../../types/degree'

interface EducationCardProps {
  degree: Degree
}

export function EducationCard({ degree }: EducationCardProps) {
  return (
    <Card>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-purple-400 border-3 border-black neo-shadow flex items-center justify-center shrink-0">
            <GraduationCap size={28} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black">{degree.degree} in {degree.fieldOfStudy}</h3>
            <p className="text-gray-700 font-medium">{degree.institution}</p>
            {degree.grade && (
              <Badge variant="green" className="mt-2">
                {degree.grade}
              </Badge>
            )}
          </div>
        </div>
        <div className="shrink-0">
          <DateBadge 
            startDate={String(degree.startYear)} 
            endDate={String(degree.endYear)} 
          />
        </div>
      </div>

      {/* Favorite Courses */}
      {degree.favoriteCourses && degree.favoriteCourses.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={18} className="text-cyan-600" />
            <h4 className="font-bold text-sm uppercase tracking-wide text-gray-600">Favorite Courses</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {degree.favoriteCourses.map((course, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-cyan-100 border-2 border-black text-sm font-medium"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {degree.projects && degree.projects.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <FlaskConical size={18} className="text-pink-600" />
            <h4 className="font-bold text-sm uppercase tracking-wide text-gray-600">Academic Projects</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {degree.projects.map((project, index) => (
              <div 
                key={index} 
                className="p-3 bg-pink-50 border-2 border-black"
              >
                <p className="font-bold text-sm">{project.name}</p>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Thesis */}
      {degree.thesis && (
        <div className="p-4 bg-yellow-100 border-3 border-black neo-shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <ScrollText size={18} className="text-yellow-700" />
            <h4 className="font-bold text-sm uppercase tracking-wide text-gray-600">Thesis</h4>
          </div>
          <p className="font-bold text-gray-800">{degree.thesis.title}</p>
          {degree.thesis.titleId && (
            <p className="text-gray-600 text-sm mt-1 italic">{degree.thesis.titleId}</p>
          )}
        </div>
      )}
    </Card>
  )
}
