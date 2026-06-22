import { useState } from 'react'
import { motion } from 'framer-motion'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FiCalendar, FiMapPin, FiCheckCircle, FiXCircle, FiLoader } from 'react-icons/fi'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const locations = ['Marrakech Airport', 'Marrakech City Center', 'Hotel Delivery']

export function BookingSection() {
  const [pickup, setPickup] = useState<Date | null>(null)
  const [ret, setRet] = useState<Date | null>(null)
  const [location, setLocation] = useState(locations[0])
  const [checking, setChecking] = useState(false)
  const [result, setResult] = useState<{ available: boolean; message: string } | null>(null)
  const [ref, visible] = useScrollAnimation<HTMLElement>()

  const handleCheck = async () => {
    if (!pickup || !ret) return
    setChecking(true)
    setResult(null)
    await new Promise(r => setTimeout(r, 1500))
    const available = Math.random() > 0.2
    setResult({
      available,
      message: available
        ? 'Vehicle available! Complete your reservation below.'
        : 'Sorry, no vehicles available for these dates.',
    })
    setChecking(false)
  }

  const days = pickup && ret ? Math.max(1, Math.ceil((ret.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24))) : 0

  return (
    <section id="booking" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Book Your Vehicle"
          subtitle="Select dates and check availability instantly"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="max-w-3xl mx-auto p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-white/60 mb-2 flex items-center gap-2">
                  <FiCalendar className="text-premium-red" /> Pickup Date
                </label>
                <DatePicker
                  selected={pickup}
                  onChange={(d: Date | null) => setPickup(d)}
                  selectsStart
                  startDate={pickup}
                  endDate={ret}
                  minDate={new Date()}
                  placeholderText="Select pickup date"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-premium-red/50"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2 flex items-center gap-2">
                  <FiCalendar className="text-premium-red" /> Return Date
                </label>
                <DatePicker
                  selected={ret}
                  onChange={(d: Date | null) => setRet(d)}
                  selectsEnd
                  startDate={pickup}
                  endDate={ret}
                  minDate={pickup || new Date()}
                  placeholderText="Select return date"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-premium-red/50"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm text-white/60 mb-2 flex items-center gap-2">
                <FiMapPin className="text-premium-red" /> Pickup Location
              </label>
              <select
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-premium-red/50"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc} className="bg-deep-black">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={handleCheck}
              disabled={!pickup || !ret || checking}
              className="w-full"
              size="lg"
            >
              {checking ? (
                <span className="flex items-center gap-2">
                  <FiLoader className="animate-spin" /> Checking...
                </span>
              ) : (
                'Check Availability'
              )}
            </Button>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-xl flex items-start gap-3 ${
                  result.available
                    ? 'bg-green-500/10 border border-green-500/20'
                    : 'bg-red-500/10 border border-red-500/20'
                }`}
              >
                {result.available ? (
                  <FiCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                ) : (
                  <FiXCircle className="text-red-500 mt-0.5 shrink-0" />
                )}
                <div>
                  <p className="text-white font-medium">{result.message}</p>
                  {result.available && days > 0 && (
                    <p className="text-white/60 text-sm mt-1">
                      Estimated price: <span className="text-premium-red font-semibold">{(days * 1500).toLocaleString()} MAD</span> for {days} day{days > 1 ? 's' : ''}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
