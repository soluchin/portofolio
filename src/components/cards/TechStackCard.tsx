import type { Stack } from '../../types/stack'

interface TechStackCardProps {
  stack: Stack
}

export function TechStackCard({ stack }: TechStackCardProps) {
  return (
    <div className="shrink-0 mx-4 bg-white border-4 border-black px-6 py-4 neo-shadow flex items-center gap-3">
      <img src={stack.icon} alt={stack.name} className="w-8 h-8 md:w-10 md:h-10" />
      <span className="font-bold text-sm md:text-base whitespace-nowrap">{stack.name}</span>
    </div>
  )
}
