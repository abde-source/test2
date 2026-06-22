import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/sections/Hero'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { VehicleShowcase } from '../components/sections/VehicleShowcase'
import { BookingSection } from '../components/sections/BookingSection'
import { MarrakechExperience } from '../components/sections/MarrakechExperience'
import { Services } from '../components/sections/Services'
import { Reviews } from '../components/sections/Reviews'
import { FAQ } from '../components/sections/FAQ'
import { Contact } from '../components/sections/Contact'

export function Home() {
  return (
    <>
      <Helmet>
        <title>LAKHLIDI RENT CAR — Premium Car Rental Marrakech</title>
        <meta name="description" content="Premium car rental in Marrakech. Luxury vehicles, instant booking, professional service. Drive Marrakech Differently." />
        <meta property="og:title" content="LAKHLIDI RENT CAR — Premium Car Rental Marrakech" />
        <meta property="og:description" content="Premium vehicles. Instant booking. Professional service. Drive Marrakech Differently." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="car rental Marrakech, luxury car rental Morocco, rent car Marrakech, premium vehicles Morocco, LAKHLIDI" />
      </Helmet>
      <Hero />
      <WhyChooseUs />
      <VehicleShowcase />
      <BookingSection />
      <MarrakechExperience />
      <Services />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  )
}
