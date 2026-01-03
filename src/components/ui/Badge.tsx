import type { ReactNode } from 'react'
import { Calendar } from 'lucide-react'

type BadgeVariant = 'yellow' | 'green' | 'gray' | 'custom'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
  withIcon?: boolean
}

const variantClasses: Record<BadgeVariant, string> = {
  yellow: 'bg-yellow-300 border-3 border-black',
  green: 'bg-green-300 border-2 border-black',
  gray: 'bg-gray-100 border-2 border-black',
  custom: ''
}

export function Badge({ children, variant = 'gray', className = '', withIcon = false }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 font-bold text-sm ${variantClasses[variant]} ${className}`}>
      {withIcon && <Calendar size={16} />}
      {children}
    </span>
  )
}

interface DateBadgeProps {
  startDate: string
  endDate: string
}

export function DateBadge({ startDate, endDate }: DateBadgeProps) {
  return (
    <Badge variant="yellow" withIcon className="px-4 py-2">
      {startDate} - {endDate}
    </Badge>
  )
}

interface TechBadgeProps {
  tech: string
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <Badge variant="gray" className="px-2 py-1 text-xs">
      {tech}
    </Badge>
  )
}
