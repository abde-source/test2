import { motion } from 'framer-motion'
import { FiPhone, FiInstagram, FiMessageCircle, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'
import { Button } from '../ui/Button'
import { GlassCard } from '../ui/GlassCard'
import { SectionTitle } from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useState } from 'react'

export function Contact() {
  const [ref, visible] = useScrollAnimation<HTMLElement>()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="We're here to help you find the perfect vehicle"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <GlassCard className="p-8">
              <div className="flex flex-col gap-6">
                <ContactInfo
                  icon={FiPhone}
                  label="Phone"
                  value="+212 6 63 64 11 67"
                  href="tel:+21263641167"
                />
                <ContactInfo
                  icon={FiInstagram}
                  label="Instagram"
                  value="@lakhlidi.cars"
                  href="https://instagram.com/lakhlidi.cars"
                />
                <ContactInfo
                  icon={FiMessageCircle}
                  label="WhatsApp"
                  value="+212 6 63 64 11 67"
                  href="https://wa.me/21263641167"
                />
                <ContactInfo
                  icon={FiMapPin}
                  label="Location"
                  value="Marrakech, Morocco"
                />
              </div>
            </GlassCard>

            <GlassCard className="h-64 overflow-hidden p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d135456.70220174286!2d-8.075835702613859!3d31.629472286499257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87b02b!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2s!4v1!4m2!1m16!2m15!1m6!2m2!1d-8.010479!2d31.628674!3m2!2i438!3m2!2i390!3m2!2i1024!4f13.1!5e0!3m2!1sen!2s!4v1"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Marrakech location"
              />
            </GlassCard>
          </div>

          <div>
            <GlassCard className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Phone Number" />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-premium-red/50 transition-colors resize-none"
                />
                <Button type="submit" className="w-full" size="lg">
                  {sent ? (
                    <span className="flex items-center gap-2">
                      <FiCheckCircle /> Message Sent
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FiSend /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Input({ type = 'text', placeholder }: { type?: string; placeholder: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-premium-red/50 transition-colors"
    />
  )
}

function ContactInfo({ icon: Icon, label, value, href }: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-premium-red/10 flex items-center justify-center group-hover:bg-premium-red/20 transition-colors">
        <Icon className="text-premium-red text-lg" />
      </div>
      <div>
        <p className="text-white/40 text-sm">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return content
}
