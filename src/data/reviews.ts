export interface Review {
  id: string
  name: string
  photo: string
  rating: number
  text: string
  date: string
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Omar B.',
    photo: 'https://i.pravatar.cc/100?img=11',
    rating: 5,
    text: 'Exceptional service. The car was immaculate and delivered directly to my hotel in Marrakech. Will definitely rent again.',
    date: 'March 2026',
  },
  {
    id: '2',
    name: 'Sophie L.',
    photo: 'https://i.pravatar.cc/100?img=9',
    rating: 5,
    text: 'Très professionnel. Voiture haut de gamme et service irréprochable. Je recommande vivement.',
    date: 'February 2026',
  },
  {
    id: '3',
    name: 'Youssef M.',
    photo: 'https://i.pravatar.cc/100?img=12',
    rating: 5,
    text: 'Best rental experience in Morocco. The Mercedes S-Class was spotless and the booking process was seamless.',
    date: 'January 2026',
  },
  {
    id: '4',
    name: 'Anna K.',
    photo: 'https://i.pravatar.cc/100?img=5',
    rating: 4,
    text: 'Great service and friendly staff. The airport pickup made everything so convenient.',
    date: 'December 2025',
  },
  {
    id: '5',
    name: 'Karim H.',
    photo: 'https://i.pravatar.cc/100?img=3',
    rating: 5,
    text: 'Premium service from start to finish. The Porsche Cayenne made our trip to the Atlas Mountains unforgettable.',
    date: 'November 2025',
  },
]
