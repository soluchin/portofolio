import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { Experience } from '../types/experience'

// Yellow pin icon for neo-brutalism style
const yellowPinIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
      <circle cx="12" cy="10" r="8" fill="#facc15" stroke="#000" stroke-width="2"/>
      <circle cx="12" cy="10" r="4" fill="#000"/>
      <path d="M12 18 L12 24" stroke="#000" stroke-width="3"/>
    </svg>
  `),
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
})

interface ExperienceMapProps {
  experiences: Experience[]
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

export function ExperienceMap({ experiences, selectedExperience, onMarkerClick, formatDate }: ExperienceMapProps) {
  // Filter experiences with valid coordinates
  const validExperiences = experiences.filter(
    exp => exp.longlat && exp.longlat.lat && exp.longlat.long && exp.longlat.long <= 180
  )

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
        
        {validExperiences.map((exp, index) => (
          <Marker
            key={index}
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
      </MapContainer>
    </div>
  )
}
