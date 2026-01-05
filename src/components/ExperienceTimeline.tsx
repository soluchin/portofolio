import { MapPin, Calendar, List, Map } from 'lucide-react'
import type { Experience } from '../types/experience'

interface ExperienceTimelineProps {
  experiences: Experience[]
  selectedExperience: Experience | null
  onExperienceClick: (experience: Experience) => void
  formatDate: (date: Date | "present") => string
}

export function ExperienceTimeline({ 
  experiences, 
  selectedExperience, 
  onExperienceClick, 
  formatDate 
}: ExperienceTimelineProps) {
  return (
    <div className="h-full overflow-y-auto space-y-0">
      {experiences.map((exp, index) => (
        <div key={index} className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-black"></div>
          
          {/* Timeline dot */}
          <div 
            className={`absolute left-1 top-6 w-5 h-5 rounded-full border-3 border-black z-10 cursor-pointer transition-all ${
              selectedExperience === exp ? 'bg-yellow-400 scale-125' : 'bg-white hover:bg-yellow-200'
            }`}
            onClick={() => onExperienceClick(exp)}
          ></div>
          
          {/* Content */}
          <div 
            className={`ml-10 pb-6 cursor-pointer transition-all ${
              selectedExperience === exp ? 'scale-[1.02]' : ''
            }`}
            onClick={() => onExperienceClick(exp)}
          >
            <div 
              className={`p-4 border-3 border-black rounded-lg transition-all ${
                selectedExperience === exp 
                  ? 'bg-yellow-100 neo-shadow' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h4 className="font-black text-lg">{exp.role}</h4>
              <p className="font-bold text-gray-700">{exp.company}</p>
              
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <Calendar size={14} />
                {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
              </div>
              
              <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
              
              {exp.location && (
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                  <MapPin size={14} />
                  {exp.location}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

interface MobileViewToggleProps {
  view: 'list' | 'map'
  onViewChange: (view: 'list' | 'map') => void
}

export function MobileViewToggle({ view, onViewChange }: MobileViewToggleProps) {
  return (
    <div className="flex bg-white border-3 border-black rounded-lg overflow-hidden neo-shadow mb-4">
      <button
        onClick={() => onViewChange('list')}
        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 font-bold transition-all ${
          view === 'list' 
            ? 'bg-yellow-300 text-black' 
            : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
      >
        <List size={20} />
        Timeline
      </button>
      <div className="w-0.5 bg-black"></div>
      <button
        onClick={() => onViewChange('map')}
        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 font-bold transition-all ${
          view === 'map' 
            ? 'bg-yellow-300 text-black' 
            : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Map size={20} />
        Map
      </button>
    </div>
  )
}
