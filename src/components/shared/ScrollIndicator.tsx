import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3">
      <span className="text-white/40 text-xs uppercase tracking-widest rotate-90 mb-8">
        Scroll
      </span>
      <div className="w-[2px] h-24 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-premium-red rounded-full origin-top"
          style={{ scaleY }}
        />
      </div>
    </div>
  )
}
