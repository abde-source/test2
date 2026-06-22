import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { vehicles, type Vehicle } from '../../data/vehicles'

const categories = ['All', 'Economy', 'Sedan', 'SUV', 'Automatic', 'Premium']

export function VehicleShowcase() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [ref, visible] = useScrollAnimation<HTMLElement>()

  const filtered = vehicles.filter(v => {
    const matchCategory = filter === 'All' || v.category.includes(filter)
    const matchSearch = v.name.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <section id="cars" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Fleet"
          subtitle="Choose from our premium selection of vehicles"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-premium-red text-white'
                    : 'glass text-white/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search cars..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-premium-red/50 transition-colors"
            />
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((vehicle, i) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} visible={visible} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-white/40 mt-12">No vehicles match your criteria.</p>
        )}
      </div>
    </section>
  )
}

function VehicleCard({ vehicle, index, visible }: { vehicle: Vehicle; index: number; visible: boolean }) {
  const [hover, setHover] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="perspective-1000"
    >
      <motion.div
        animate={{ rotateY: hover ? 3 : 0, scale: hover ? 1.02 : 1 }}
        transition={{ duration: 0.4 }}
        className="preserve-3d"
      >
        <GlassCard className="overflow-hidden group cursor-pointer">
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={vehicle.image}
              alt={vehicle.name}
              loading="lazy"
              animate={{ scale: hover ? 1.08 : 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
            />
            {vehicle.featured && (
              <span className="absolute top-3 right-3 bg-premium-red text-white text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-white mb-3">{vehicle.name}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <Spec label={vehicle.transmission} />
              <Spec label={vehicle.fuel} />
              <Spec label={`${vehicle.seats} Seats`} />
              {vehicle.ac && <Spec label="AC" />}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-premium-red">{vehicle.price} MAD</span>
                <span className="text-white/40 text-sm"> / day</span>
              </div>
              <Button size="sm">Reserve</Button>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}

function Spec({ label }: { label: string }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-white/60 border border-white/5">
      {label}
    </span>
  )
}
