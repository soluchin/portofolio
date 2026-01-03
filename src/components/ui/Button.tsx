import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'custom'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  className?: string
  icon?: ReactNode
  external?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-black text-white border-black',
  secondary: 'bg-blue-500 text-white border-black',
  success: 'bg-emerald-400 text-black border-black',
  custom: ''
}

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  icon,
  external = true 
}: ButtonProps) {
  const baseClasses = `flex items-center gap-2 px-4 py-2 border-3 font-bold text-sm w-fit neo-hover transition-all ${variantClasses[variant]} ${className}`
  
  if (href) {
    return (
      <a 
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClasses}
      >
        {icon}
        {children}
      </a>
    )
  }

  return (
    <button className={baseClasses}>
      {icon}
      {children}
    </button>
  )
}

interface SocialButtonProps {
  href: string
  icon: ReactNode
  children: ReactNode
  variant?: 'github' | 'linkedin'
}

export function SocialButton({ href, icon, children, variant = 'github' }: SocialButtonProps) {
  const variantStyles = {
    github: 'bg-black text-white',
    linkedin: 'bg-blue-500 text-white'
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center gap-2 ${variantStyles[variant]} px-6 py-3 border-4 border-black font-bold neo-hover transition-all`}
    >
      {icon}
      {children}
    </a>
  )
}
