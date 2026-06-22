export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: 'reserve',
    question: 'How do I reserve a car?',
    answer: 'You can reserve directly through our website using the booking section, or contact us via WhatsApp or phone. We confirm availability within minutes.',
  },
  {
    id: 'insurance',
    question: 'Is insurance included?',
    answer: 'Yes, all rentals include comprehensive insurance coverage. Additional options are available upon request.',
  },
  {
    id: 'payment',
    question: 'Can I pay on arrival?',
    answer: 'Yes, we accept payment on arrival in cash (MAD, EUR, USD) or by credit card. A deposit is required to confirm the reservation.',
  },
  {
    id: 'airport',
    question: 'Do you deliver to the airport?',
    answer: 'Absolutely. We deliver and collect vehicles at Marrakech Menara Airport free of charge.',
  },
  {
    id: 'age',
    question: 'What is the minimum age?',
    answer: 'The minimum age to rent is 21 years with a valid driver\'s license. Drivers under 25 may be subject to a young driver fee.',
  },
  {
    id: 'license',
    question: 'Do I need an international license?',
    answer: 'An international driving permit is recommended but not always required. A valid license from your country of residence is accepted.',
  },
]
