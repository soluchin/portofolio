import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { DivIcon } from 'leaflet'
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { Experience } from '../types/experience'
import type { Degree } from '../types/degree'
import type { Profile } from '../types/profile'

// Create DivIcon with Lucide-style SVG icons
const createIcon = (svg: string, bgColor: string) => new DivIcon({
  html: `
    <div style="position: relative; width: 40px; height: 48px;">
      <div style="
        width: 36px; 
        height: 36px; 
        background: ${bgColor}; 
        border: 3px solid #000; 
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        box-shadow: 3px 3px 0px 0px #000;
      ">
        ${svg}
      </div>
      <div style="
        width: 4px; 
        height: 12px; 
        background: #000; 
        position: absolute; 
        bottom: 0; 
        left: 50%; 
        transform: translateX(-50%);
      "></div>
    </div>
  `,
  className: '',
  iconSize: [40, 48],
  iconAnchor: [20, 48],
  popupAnchor: [0, -48],
})

// Lucide Briefcase icon SVG for experience
const briefcaseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`

// Lucide Home icon SVG
const homeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`

// Lucide GraduationCap icon SVG for education
const graduationCapSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`

// Create icons with neo-brutalism colors
const yellowPinIcon = createIcon(briefcaseSvg, '#facc15')  // Yellow for experience
const homeIcon = createIcon(homeSvg, '#22d3ee')            // Cyan for home
const educationIcon = createIcon(graduationCapSvg, '#a855f7') // Purple for education

interface ExperienceMapProps {
  experiences: Experience[]
  degrees?: Degree[]
  profile?: Profile
  selectedExperience: Experience | null
  onMarkerClick: (experience: Experience) => void
  formatDate: (date: Date | "present") => string
}

// Component to handle map view changes
function MapController({ center, zoom }: { center: LatLngExpression; zoom: number }) {
  const map = useMap()
  map.setView(center, zoom, { animate: true })
  return null
}

export function ExperienceMap({ experiences, degrees, profile, selectedExperience, onMarkerClick, formatDate }: ExperienceMapProps) {
  // Filter experiences with valid coordinates
  const validExperiences = experiences.filter(
    exp => exp.longlat && exp.longlat.lat && exp.longlat.long && exp.longlat.long <= 180
  )

  // Filter degrees with valid coordinates
  const validDegrees = degrees?.filter(
    deg => deg.longlat && deg.longlat.lat && deg.longlat.long && deg.longlat.long <= 180
  ) || []

  // Default center (Indonesia)
  const defaultCenter: LatLngExpression = [-2.5, 118]
  const defaultZoom = 4

  // Calculate center based on selected experience
  const mapCenter: LatLngExpression = selectedExperience?.longlat 
    ? [selectedExperience.longlat.lat, selectedExperience.longlat.long]
    : defaultCenter
  
  const mapZoom = selectedExperience ? 10 : defaultZoom

  return (
    <div className="w-full h-full overflow-hidden">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        className="w-full h-full"
        scrollWheelZoom={true}
        style={{ minHeight: '400px', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController center={mapCenter} zoom={mapZoom} />
        
        {/* Home marker */}
        {profile?.homeLonglat && (
          <Marker
            position={[profile.homeLonglat.lat, profile.homeLonglat.long]}
            icon={homeIcon}
          >
            <Popup>
              <div className="font-bold">🏠 Home</div>
              <div className="text-sm">Where I live</div>
            </Popup>
          </Marker>
        )}
        
        {/* Experience markers */}
        {validExperiences.map((exp, index) => (
          <Marker
            key={`exp-${index}`}
            position={[exp.longlat!.lat, exp.longlat!.long]}
            icon={yellowPinIcon}
            eventHandlers={{
              click: () => onMarkerClick(exp),
            }}
          >
            <Popup>
              <div className="font-bold">{exp.role}</div>
              <div className="text-sm">{exp.company}</div>
              <div className="text-xs text-gray-600">
                {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Education markers */}
        {validDegrees.map((deg, index) => (
          <Marker
            key={`edu-${index}`}
            position={[deg.longlat!.lat, deg.longlat!.long]}
            icon={educationIcon}
          >
            <Popup>
              <div className="font-bold">🎓 {deg.institution}</div>
              <div className="text-sm">{deg.degree} in {deg.fieldOfStudy}</div>
              <div className="text-xs text-gray-600">
                {deg.startYear} - {deg.endYear}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
