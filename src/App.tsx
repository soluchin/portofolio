import { Github, Linkedin, Building2, GraduationCap, Award } from 'lucide-react'
import { profile, techStacks, experiences, certifications, projects, degrees } from './data/data'
import { SectionHeader, SocialButton } from './components/ui'
import { ExperienceCard, EducationCard, ProjectCard, CertificationCard, TechStackCard } from './components/cards'

// Helper function to format date
const formatDate = (date: Date | "present"): string => {
  if (date === "present") return "Present"
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

// Hero Section Component
function HeroSection() {
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
            <p className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
              {profile.bio}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <SocialButton href={profile.github} icon={<Github size={20} />} variant="github">
                GitHub
              </SocialButton>
              <SocialButton href={profile.linkedin} icon={<Linkedin size={20} />} variant="linkedin">
                LinkedIn
              </SocialButton>
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
  // Duplicate the array for seamless loop
  const duplicatedStacks = [...techStacks, ...techStacks, ...techStacks, ...techStacks, ...techStacks]

  return (
    <section className="py-12 md:py-8 border-y-4 border-black bg-lime-300 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedStacks.map((stack, index) => (
            <TechStackCard key={index} stack={stack} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Experience Section Component
function ExperienceSection() {
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "present" ? new Date() : a.endDate
    const dateB = b.endDate === "present" ? new Date() : b.endDate
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-orange-200 rounded-full blur-blob animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-200 rounded-full blur-blob-sm"></div>
      
      {/* Sparkle decorations */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-orange-400 border-2 border-black sparkle animate-float hidden md:block"></div>
      <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-red-400 border-2 border-black sparkle-diamond animate-float hidden md:block" style={{animationDelay: '0.7s'}}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader color="orange" icon={<Building2 size={28} />}>
          Experience
        </SectionHeader>
        
        <div className="space-y-6">
          {sortedExperiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} formatDate={formatDate} />
          ))}
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
        <SectionHeader color="pink">
          🚀 Projects
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
    <div className="min-h-screen bg-[#fffef0] grid-pattern">
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <Footer />
    </div>
  )
}

export default App
