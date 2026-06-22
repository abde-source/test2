import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const [hover, setHover] = useState(false)

  return (
    <motion.button
      onClick={toggle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileTap={{ scale: 0.9 }}
      className="relative p-2 rounded-xl glass cursor-pointer"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.4 }}
      >
        {theme === 'dark' ? (
          <FiSun className="text-yellow-400 text-xl" />
        ) : (
          <FiMoon className="text-white text-xl" />
        )}
      </motion.div>
      {hover && (
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/60 whitespace-nowrap"
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </motion.span>
      )}
    </motion.button>
  )
}
