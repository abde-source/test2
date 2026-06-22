export interface Vehicle {
  id: string
  name: string
  image: string
  category: string[]
  transmission: string
  fuel: string
  seats: number
  ac: boolean
  price: number
  featured?: boolean
}

export const vehicles: Vehicle[] = [
  {
    id: 'mercedes-s',
    name: 'Mercedes-Benz Classe S',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
    category: ['Premium', 'Sedan', 'Automatic'],
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    ac: true,
    price: 2500,
    featured: true,
  },
  {
    id: 'porsche-cayenne',
    name: 'Porsche Cayenne',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    category: ['Premium', 'SUV', 'Automatic'],
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    ac: true,
    price: 3000,
    featured: true,
  },
  {
    id: 'bmw-x5',
    name: 'BMW X5',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    category: ['Premium', 'SUV', 'Automatic'],
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 5,
    ac: true,
    price: 2200,
    featured: true,
  },
  {
    id: 'audi-a6',
    name: 'Audi A6',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fd4a0d2f?w=800',
    category: ['Sedan', 'Automatic', 'Economy'],
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 5,
    ac: true,
    price: 1200,
  },
  {
    id: 'renault-clio',
    name: 'Renault Clio',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800',
    category: ['Economy', 'Automatic'],
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    ac: true,
    price: 500,
  },
  {
    id: 'dacia-duster',
    name: 'Dacia Duster',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
    category: ['SUV', 'Economy', 'Automatic'],
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 5,
    ac: true,
    price: 700,
  },
  {
    id: 'lamborghini-urus',
    name: 'Lamborghini Urus',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
    category: ['Premium', 'SUV', 'Automatic'],
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    ac: true,
    price: 6000,
    featured: true,
  },
  {
    id: 'mercedes-gle',
    name: 'Mercedes-Benz GLE',
    image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800',
    category: ['Premium', 'SUV', 'Automatic'],
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 5,
    ac: true,
    price: 2800,
  },
]
