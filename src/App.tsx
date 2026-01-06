import { useState, useEffect, useRef, useCallback } from 'react'
import { Github, Linkedin, Footprints, GraduationCap, Award, BadgeAlert, Download, Mail } from 'lucide-react'
import { profile, techStacks, experiences, certifications, projects, degrees } from './data/data'
import { SectionHeader, SocialButton, MainCanvasCard } from './components/ui'
import { EducationCard, ProjectCard, CertificationCard, TechStackCard } from './components/cards'
import { ExperienceMap } from './components/ExperienceMap'
import { ExperienceTimeline, MobileViewToggle } from './components/ExperienceTimeline'
import type { Experience } from './types/experience'

// Helper function to format date
const formatDate = (date: Date | "present"): string => {
  if (date === "present") return "Present"
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

// Hook to check if a file exists
function useFileExists(url: string | undefined): { exists: boolean; fullUrl: string } {
  const [exists, setExists] = useState(false)
  
  // Construct full URL with base path
  const fullUrl = url ? `${import.meta.env.BASE_URL}/${url.replace(/^\//, '')}` : ''
  
  useEffect(() => {
    if (!url || url.trim() === '') {
      setExists(false)
      return
    }
    
    fetch(fullUrl, { method: 'HEAD' })
      .then(response => {
        setExists(response.ok)
      })
      .catch(() => {
        setExists(false)
      })
  }, [fullUrl, url])
  
  return { exists, fullUrl }
}

// Hero Section Component
function HeroSection() {
  const { exists: resumeExists, fullUrl: resumeFullUrl } = useFileExists(profile.resumeURL)
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20 relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-yellow-300 rounded-full blur-blob-lg animate-pulse-glow"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 md:w-80 md:h-80 bg-pink-300 rounded-full blur-blob animate-float-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300 rounded-full blur-blob-sm"></div>
      <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-lime-300 rounded-full blur-blob-sm animate-pulse-glow"></div>
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-black neo-shadow-lg overflow-hidden bg-yellow-300">
              <img 
                src={profile.image as string} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative sparkle elements */}
            <div className="absolute -top-6 -right-6 w-10 h-10 md:w-12 md:h-12 bg-red-500 border-3 border-black neo-shadow-sm sparkle animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 md:w-10 md:h-10 bg-blue-500 border-3 border-black neo-shadow-sm sparkle-diamond animate-float" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-yellow-400 border-2 border-black sparkle animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute -top-2 left-1/4 w-5 h-5 bg-lime-400 border-2 border-black sparkle-diamond animate-float" style={{animationDelay: '1.5s'}}></div>
          </div>

          {/* Profile Info */}
          <div className="text-center lg:text-left flex-1">
            <div className="inline-block bg-yellow-300 border-4 border-black px-4 py-1 mb-4 neo-shadow">
              <span className="font-bold text-sm md:text-base">{profile.title}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-4 leading-relaxed">
              {profile.bio}
            </p>
            
            {/* Email */}
            <a 
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black mb-6 font-medium transition-colors"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            
            {/* Social Links & Resume */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <SocialButton href={profile.github} icon={<Github size={20} />} variant="github">
                GitHub
              </SocialButton>
              <SocialButton href={profile.linkedin} icon={<Linkedin size={20} />} variant="linkedin">
                LinkedIn
              </SocialButton>
              {resumeExists && (
                <a 
                  href={resumeFullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-lime-400 text-black px-6 py-3 border-4 border-black font-bold neo-hover transition-all"
                >
                  <Download size={20} />
                  Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional floating sparkles */}
      <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-orange-400 border-2 border-black sparkle animate-float hidden md:block" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 left-1/6 w-8 h-8 bg-purple-400 border-2 border-black sparkle-diamond animate-float hidden md:block" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute top-1/3 left-20 w-5 h-5 bg-cyan-400 border-2 border-black sparkle animate-float hidden lg:block" style={{animationDelay: '1.2s'}}></div>
    </section>
  )
}

// Tech Stack Marquee Component
function TechStackSection() {
  // Duplicate the array once for seamless loop (original + 1 copy)
  const duplicatedStacks = [...techStacks, ...techStacks]
  
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  
  // Calculate content width for seamless loop
  useEffect(() => {
    if (contentRef.current) {
      // Get width of half the content (one set of techStacks)
      const fullWidth = contentRef.current.scrollWidth
      setContentWidth(fullWidth / 2)
    }
  }, [])
  
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }, [])
  
  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk
  }, [isDragging, startX, scrollLeft])
  
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }, [])
  
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    const x = e.touches[0].pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }, [isDragging, startX, scrollLeft])

  return (
    <section className="py-12 md:py-8 border-y-4 border-black bg-lime-300 overflow-hidden">
      <div 
        ref={containerRef}
        className={`relative overflow-x-auto scrollbar-hide cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        <div 
          ref={contentRef}
          className={`flex w-max ${isDragging ? '' : 'animate-marquee'}`}
          style={{ '--marquee-width': `${contentWidth}px` } as React.CSSProperties}
        >
          {duplicatedStacks.map((stack, index) => (
            <TechStackCard key={index} stack={stack} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Footprints Section Component
function FootprintsSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)
  const [mobileView, setMobileView] = useState<'list' | 'map'>('list')
  
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "present" ? new Date() : a.endDate
    const dateB = b.endDate === "present" ? new Date() : b.endDate
    return dateB.getTime() - dateA.getTime()
  })

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperience(selectedExperience === experience ? null : experience)
  }

  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-orange-200 rounded-full blur-blob animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-200 rounded-full blur-blob-sm"></div>
      
      {/* Sparkle decorations */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-orange-400 border-2 border-black sparkle animate-float hidden md:block"></div>
      <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-red-400 border-2 border-black sparkle-diamond animate-float hidden md:block" style={{animationDelay: '0.7s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader color="orange" icon={<Footprints size={28} />}>
          My Footprints
        </SectionHeader>
        
        {/* Main container with neo-brutalism style */}
        <div className="bg-white border-4 border-black rounded-xl neo-shadow-lg overflow-hidden">
          {/* Mobile Toggle */}
          <div className="md:hidden p-4 border-b-4 border-black">
            <MobileViewToggle view={mobileView} onViewChange={setMobileView} />
          </div>
          
          {/* Desktop: Side by side layout */}
          <div className="flex flex-col md:flex-row">
            {/* Timeline - Left side */}
            <div className={`md:w-2/5 lg:w-1/3 border-r-0 md:border-r-4 border-black ${mobileView === 'list' ? 'block' : 'hidden md:block'}`}>
              <div className="p-4 border-b-4 border-black bg-gray-50">
                <h3 className="font-black text-lg">Journey Timeline</h3>
              </div>
              <div className="max-h-125 md:max-h-150 overflow-y-auto">
                <ExperienceTimeline 
                  experiences={sortedExperiences}
                  selectedExperience={selectedExperience}
                  onExperienceClick={handleExperienceClick}
                  formatDate={formatDate}
                />
              </div>
            </div>
            
            {/* Map - Right side */}
            <div className={`md:w-3/5 lg:w-2/3 ${mobileView === 'map' ? 'block' : 'hidden md:block'}`}>
              <ExperienceMap 
                experiences={sortedExperiences}
                degrees={degrees}
                profile={profile}
                selectedExperience={selectedExperience}
                onMarkerClick={handleExperienceClick}
                formatDate={formatDate}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Education Section Component
function EducationSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-cyan-200 border-y-4 border-black relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-16 right-16 w-8 h-8 bg-purple-500 border-2 border-black sparkle animate-float hidden md:block"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 bg-cyan-500 border-2 border-black sparkle-diamond animate-float hidden md:block" style={{animationDelay: '0.9s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-yellow-400 border-2 border-black sparkle animate-float hidden lg:block" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader color="purple" icon={<GraduationCap size={28} />}>
          Education
        </SectionHeader>
        
        <div className="grid gap-6">
          {degrees.map((degree, index) => (
            <EducationCard key={index} degree={degree} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section Component
function ProjectsSection() {
  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-pink-200 rounded-full blur-blob animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-purple-200 rounded-full blur-blob-sm animate-pulse-glow"></div>
      
      {/* Sparkle decorations */}
      <div className="absolute top-32 right-20 w-7 h-7 bg-pink-500 border-2 border-black sparkle animate-float hidden md:block"></div>
      <div className="absolute bottom-1/3 left-16 w-5 h-5 bg-purple-400 border-2 border-black sparkle-diamond animate-float hidden md:block" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-yellow-400 border-2 border-black sparkle animate-float hidden lg:block" style={{animationDelay: '0.5s'}}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader color="pink" icon={<BadgeAlert size={28} />}>
          Projects
        </SectionHeader>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Certifications Section Component
function CertificationsSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-rose-200 border-y-4 border-black relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-12 left-16 w-7 h-7 bg-emerald-500 border-2 border-black sparkle animate-float hidden md:block"></div>
      <div className="absolute bottom-16 right-20 w-6 h-6 bg-rose-500 border-2 border-black sparkle-diamond animate-float hidden md:block" style={{animationDelay: '0.6s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-orange-400 border-2 border-black sparkle animate-float hidden lg:block" style={{animationDelay: '1.3s'}}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader color="emerald" icon={<Award size={28} />}>
          Certifications
        </SectionHeader>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} formatDate={formatDate} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-white py-8 px-4 border-t-4 border-black">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-4">
          <a 
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-3 border-3 border-white neo-hover transition-all"
          >
            <Github size={24} />
          </a>
          <a 
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-3 border-3 border-white neo-hover transition-all"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="font-bold">
          © {currentYear} {profile.name}. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <div className="grid-pattern md:py-10">
        <MainCanvasCard>
          <HeroSection />
          {techStacks.length > 0 && <TechStackSection />}
          {experiences.length > 0 && <FootprintsSection />}
          {degrees.length > 0 && <EducationSection />}
          {projects.length > 0 && <ProjectsSection />}
          {certifications.length > 0 && <CertificationsSection />}
        </MainCanvasCard>
      </div>
      <Footer />
    </>
  )
}

export default App
