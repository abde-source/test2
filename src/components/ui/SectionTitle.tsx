import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
}

export function SectionTitle({ title, subtitle, center = true }: SectionTitleProps) {
  const [ref, visible] = useScrollAnimation<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
