import { motion } from 'framer-motion'
import { FiShield, FiHeadphones, FiMapPin, FiFileText, FiDollarSign, FiClock } from 'react-icons/fi'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const features = [
  { icon: FiShield, title: 'New Vehicles', desc: 'Latest models with full maintenance' },
  { icon: FiHeadphones, title: '24/7 Assistance', desc: 'Support available anytime' },
  { icon: FiMapPin, title: 'Airport Delivery', desc: 'Free delivery & collection' },
  { icon: FiFileText, title: 'Full Insurance', desc: 'Comprehensive coverage included' },
  { icon: FiDollarSign, title: 'Transparent Pricing', desc: 'No hidden fees, guaranteed' },
  { icon: FiClock, title: 'Fast Booking', desc: 'Reserve in under 2 minutes' },
]

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '100+', label: 'Vehicles Rented' },
  { value: '5★', label: 'Average Rating' },
  { value: '24/7', label: 'Support' },
]

function Counter({ value, visible }: { value: string; visible: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={visible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="text-4xl md:text-5xl font-bold text-premium-red"
    >
      {value}
    </motion.span>
  )
}

export function WhyChooseUs() {
  const [ref, visible] = useScrollAnimation<HTMLElement>()

  return (
    <section id="about" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Why Choose Us
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We set the standard for premium car rental in Marrakech
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center"
            >
              <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group hover:bg-premium-red/10 transition-colors">
                <feat.icon className="text-2xl text-premium-red group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-white font-semibold mb-1">{feat.title}</h4>
              <p className="text-white/40 text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <Counter value={stat.value} visible={visible} />
              <p className="text-white/50 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
