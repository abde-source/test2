import { motion } from 'framer-motion'
import { BsAirplane, BsCalendarWeek, BsClock, BsPersonBadge, BsBriefcase, BsCompass } from 'react-icons/bs'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { services } from '../../data/services'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BsAirplane, BsCalendarWeek, BsClock, BsPersonBadge, BsBriefcase, BsCompass,
}

export function Services() {
  const [ref, visible] = useScrollAnimation<HTMLElement>()

  return (
    <section id="services" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Services"
          subtitle="Everything you need for a premium driving experience"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <GlassCard className="p-8 h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-premium-red/10 flex items-center justify-center mb-5 group-hover:bg-premium-red/20 transition-colors">
                    {Icon && <Icon className="text-2xl text-premium-red" />}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                  <p className="text-white/50 leading-relaxed">{s.description}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
