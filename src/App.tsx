import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { WhatsAppButton } from './components/shared/WhatsAppButton'
import { ScrollIndicator } from './components/shared/ScrollIndicator'
import { Home } from './pages/Home'

export default function App() {
  const location = useLocation()

  return (
    <>
      <LoadingScreen />
      <Navbar />
      <ScrollIndicator />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
