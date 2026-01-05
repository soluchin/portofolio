import type { ReactNode } from "react"

interface BackdropCardProps {
  children: ReactNode
  className?: string
}

export function MainCanvasCard({ children, className = '' }: BackdropCardProps) {
  return (
    <div 
      className={`border-4 border-black bg-[#fffeee] rounded-md neo-shadow transition-all m-1 md:mx-auto md:w-[85vw] ${className}`}
    >
      {children}
    </div>
  )
}