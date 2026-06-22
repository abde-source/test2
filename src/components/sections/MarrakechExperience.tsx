import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const experiences = [
  {
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800',
    title: 'Jemaa el-Fna',
    desc: 'The vibrant heart of Marrakech',
  },
  {
    image: 'https://images.unsplash.com/photo-1597203690433-4f5c0c18cdfe?w=800',
    title: 'Koutoubia Mosque',
    desc: 'Iconic landmark of the city',
  },
  {
    image: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?w=800',
    title: 'Atlas Mountains',
    desc: 'Breathtaking mountain escapes',
  },
  {
    image: 'https://images.unsplash.com/photo-1590072315806-e7be150b7746?w=800',
    title: 'Palm Grove',
    desc: 'Tranquil oasis on the edge of the city',
  },
]

export function MarrakechExperience() {
  const [ref, visible] = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            The Marrakech Experience
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore Morocco with total freedom
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <motion.img
                src={exp.image}
                alt={exp.title}
                loading="lazy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-deep-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white font-display">{exp.title}</h3>
                <p className="text-white/60">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
