import { FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-deep-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex flex-col leading-tight mb-4">
              <span className="text-2xl font-display font-bold text-white tracking-wide">LAKHLIDI</span>
              <span className="text-xs text-premium-red uppercase tracking-[0.4em]">Rent Car</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Premium car rental in Marrakech. Luxury vehicles, professional service, unforgettable experiences.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['Home', 'Cars', 'About', 'Services', 'Reviews', 'FAQ', 'Contact'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/50 hover:text-premium-red text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+21263641167" className="flex items-center gap-3 text-white/50 hover:text-premium-red transition-colors">
                <FaPhone className="text-premium-red text-xs" />
                +212 6 63 64 11 67
              </a>
              <a href="https://wa.me/21263641167" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-premium-red transition-colors">
                <FaWhatsapp className="text-premium-red text-xs" />
                WhatsApp
              </a>
              <a href="https://instagram.com/lakhlidi.cars" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-premium-red transition-colors">
                <FaInstagram className="text-premium-red text-xs" />
                @lakhlidi.cars
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <FaMapMarkerAlt className="text-premium-red text-xs" />
                Marrakech, Morocco
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/lakhlidi.cars"
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-12 h-12 rounded-xl flex items-center justify-center text-white/70 hover:text-premium-red hover:border-premium-red/30 transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/21263641167"
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-12 h-12 rounded-xl flex items-center justify-center text-white/70 hover:text-green-500 hover:border-green-500/30 transition-all"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>&copy; 2026 LAKHLIDI RENT CAR. All Rights Reserved.</p>
          <p>Website crafted by Abdo Tahiri.</p>
        </div>
      </div>
    </footer>
  )
}
