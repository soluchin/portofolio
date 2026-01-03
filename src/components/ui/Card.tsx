import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export function Card({ children, className = '', hoverable = true }: CardProps) {
  return (
    <div 
      className={`bg-white border-4 border-black p-6 rounded-md neo-shadow ${hoverable ? 'neo-hover' : ''} transition-all ${className}`}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  title: string
  subtitle?: string
  titleSize?: 'sm' | 'md' | 'lg'
}

export function CardHeader({ title, subtitle, titleSize = 'md' }: CardHeaderProps) {
  const titleClasses = {
    sm: 'text-lg font-black mb-2',
    md: 'text-xl font-black mb-1',
    lg: 'text-xl md:text-2xl font-black mb-1'
  }

  return (
    <div>
      <h3 className={titleClasses[titleSize]}>{title}</h3>
      {subtitle && <p className="text-lg font-bold text-gray-700 mb-2">{subtitle}</p>}
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={className}>{children}</div>
}
