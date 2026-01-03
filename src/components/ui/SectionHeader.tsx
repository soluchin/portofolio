import type { ReactNode } from 'react'

type ColorVariant = 'orange' | 'purple' | 'pink' | 'emerald' | 'yellow' | 'cyan'

interface SectionHeaderProps {
  children: ReactNode
  color?: ColorVariant
  icon?: ReactNode
}

const colorClasses: Record<ColorVariant, string> = {
  orange: 'bg-orange-400',
  purple: 'bg-purple-400',
  pink: 'bg-pink-400',
  emerald: 'bg-emerald-400',
  yellow: 'bg-yellow-300',
  cyan: 'bg-cyan-400'
}

export function SectionHeader({ children, color = 'orange', icon }: SectionHeaderProps) {
  return (
    <div className={`inline-block ${colorClasses[color]} border-4 border-black px-6 py-2 mb-8 neo-shadow`}>
      <h2 className="text-2xl md:text-3xl font-black flex items-center gap-2">
        {icon}
        {children}
      </h2>
    </div>
  )
}
