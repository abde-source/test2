import type { ReactNode } from 'react'
import { useTheme } from '../../context/ThemeContext'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div
      className={`rounded-2xl ${isDark ? 'bg-white/5 backdrop-blur-xl border border-white/10' : 'bg-black/5 backdrop-blur-xl border border-black/10'} ${hover ? 'hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)]' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
