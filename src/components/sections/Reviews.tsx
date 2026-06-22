import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { reviews } from '../../data/reviews'

export function Reviews() {
  const [current, setCurrent] = useState(0)
  const [ref] = useScrollAnimation<HTMLElement>()

  const next = () => setCurrent(p => (p + 1) % reviews.length)
  const prev = () => setCurrent(p => (p - 1 + reviews.length) % reviews.length)

  return (
    <section id="reviews" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Real reviews from real customers"
        />

        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard className="p-8 md:p-12 text-center">
                  <img
                    src={reviews[current].photo}
                    alt={reviews[current].name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-premium-red/30"
                  />
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar
                        key={i}
                        className={`${i < reviews[current].rating ? 'text-yellow-500' : 'text-white/10'}`}
                      />
                    ))}
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    "{reviews[current].text}"
                  </p>
                  <p className="text-white font-semibold">{reviews[current].name}</p>
                  <p className="text-white/40 text-sm">{reviews[current].date}</p>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="glass p-3 rounded-xl text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <FiChevronLeft />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    i === current ? 'bg-premium-red w-6' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="glass p-3 rounded-xl text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
