export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    id: 'airport',
    title: 'Airport Transfer',
    description: 'We meet you at Marrakech Airport with your vehicle ready. No waiting, no hassle.',
    icon: 'BsAirplane',
  },
  {
    id: 'long-term',
    title: 'Long-Term Rental',
    description: 'Special rates for weekly and monthly rentals. Perfect for extended stays.',
    icon: 'BsCalendarWeek',
  },
  {
    id: 'short-term',
    title: 'Short-Term Rental',
    description: 'Daily and hourly rentals available for quick trips around the city.',
    icon: 'BsClock',
  },
  {
    id: 'chauffeur',
    title: 'Chauffeur Service',
    description: 'Professional driver available for guided tours and business meetings.',
    icon: 'BsPersonBadge',
  },
  {
    id: 'business',
    title: 'Business Rentals',
    description: 'Premium executive cars for corporate clients and business travelers.',
    icon: 'BsBriefcase',
  },
  {
    id: 'tourist',
    title: 'Tourist Packages',
    description: 'Curated rental packages including routes and recommendations for exploring Morocco.',
    icon: 'BsCompass',
  },
]
