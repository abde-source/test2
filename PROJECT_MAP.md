# LAKHLIDI RENT CAR — PROJECT MAP

## TECH_STACK

| Category | Technology | Version | Status |
|---|---|---|---|
| Build | Vite | ^8.x | ✅ |
| Framework | React | ^19.x | ✅ |
| Language | TypeScript | ^5.x | ✅ |
| Styling | Tailwind CSS | ^4.x | ✅ |
| Animations | Framer Motion | ^12.x | ✅ |
| Routing | React Router | ^7.x | ✅ |
| SEO | react-helmet-async | ^2.x | ✅ |
| PWA | vite-plugin-pwa | ^1.x | ✅ |
| Icons | react-icons | ^5.x | ✅ |
| Date Picker | react-datepicker | ^7.x | ✅ |
| Carousel | Swiper (manual) | - | ✅ |

## SYSTEM_FLOW

```
User enters site
  ↓
LoadingScreen (2.5s animation)
  ↓
Hero with video autoplay + CTAs
  ↓
Sticky transparent navbar appears on scroll
  ↓
Section scroll (one-page layout):
  Hero → WhyChooseUs → Vehicles → Booking →
  MarrakechExperience → Services → Reviews → FAQ → Contact
  ↓
Footer with links, contact, social
  ↓
Floating WhatsApp button (always visible)
  ↓
Dark/Light toggle via ThemeContext
```

## ARCHITECTURE

**Pattern:** Feature-adjacent sections with shared UI primitives. No global `/controllers`, `/services`, or `/utils` — components are organized by section.

**Data:** Static TypeScript files in `/data/`. Ready to swap with API calls.

**State:** Local state + React Context (theme only). No external state management.

**Routing:** Single-page (all sections on `/`). Router ready for future pages.

```
src/
  components/
    ui/          — Button, GlassCard, SectionTitle
    layout/      — Navbar, Footer, LoadingScreen, PageTransition
    sections/    — Hero, VehicleShowcase, BookingSection, WhyChooseUs,
                   Reviews, MarrakechExperience, Services, FAQ, Contact
    shared/      — WhatsAppButton, ScrollIndicator, ThemeToggle
  data/          — vehicles.ts, reviews.ts, services.ts, faq.ts
  hooks/         — useScrollAnimation, useAvailability
  context/       — ThemeContext (dark/light)
  pages/         — Home.tsx
  styles/        — globals.css (Tailwind v4 + custom theme)
```

## FEATURES

| Feature | Status | Notes |
|---|---|---|
| Full-screen hero with video | ✅ | Fallback poster image |
| Sticky transparent navbar | ✅ | Scroll-aware |
| Mobile hamburger menu | ✅ | Animated |
| Dark/Light theme toggle | ✅ | Persisted to localStorage |
| Vehicle showcase with filters | ✅ | 6 categories, search |
| 3D card hover effects | ✅ | RotateY + scale |
| Booking date picker | ✅ | Start/end dates, location select |
| Mock availability check | ✅ | 1.5s simulated, random result |
| Why Choose Us + animated stats | ✅ | Scroll-triggered counters |
| Review carousel | ✅ | Animated transitions |
| Marrakech Experience grid | ✅ | Cinematic image cards |
| Services grid | ✅ | 6 service cards |
| FAQ accordion | ✅ | Animated open/close |
| Contact form + info + map | ✅ | Google Maps embed |
| Premium footer | ✅ | Links, social, copyright |
| Floating WhatsApp button | ✅ | Always visible, animated |
| Loading screen | ✅ | 2.5s with spinner |
| Scroll indicator | ✅ | Desktop only |
| PWA support | ✅ | Service worker + manifest |
| Page transitions | ✅ | AnimatePresence |
| Lazy loading images | ✅ | loading="lazy" |
| SEO meta tags | ✅ | react-helmet-async ready |

## ORPHANS_AND_PENDING

| Item | Priority | Notes |
|---|---|---|
| Hero video file | Medium | Placeholder URL used — replace `public/videos/hero-bg.mp4` with real video |
| Actual vehicle photos | Low | Using Unsplash placeholder images |
| Google Maps API key | Low | Using iframe embed (no key) |
| Real availability backend | Future | Mock currently — swap with API |
| Contact form backend | Future | Form submits but no POST endpoint |
| Vehicle detail page | Future | Can add `/car/:id` route |
| Booking payment integration | Future | Currently UI-only |
| i18n (Arabic/French) | Future | Site is English-only for now |
| Image optimization pipeline | Low | Unsplash images are already optimized |

## DECISIONS_LOG

| Date | Decision | Rationale |
|---|---|---|
| M1 | Vite + React over Next.js | Faster iteration, simpler SPA, native page transitions. SEO handled via react-helmet-async |
| M1 | Tailwind CSS v4 | Config-free, faster builds, modern `@theme` directive |
| M1 | Framer Motion over pure CSS | Smoother animations, easier AnimatePresence, page transitions |
| M1 | Static data files | Zero backend complexity. Swap to API later by replacing imports |
| M1 | Glassmorphism via CSS | `backdrop-blur-xl` + `bg-white/5` is simple and performant |
| M1 | react-datepicker over custom | Avoid reinventing date logic — proven, accessible |
| M1 | No external state management | Theme + local state is sufficient for a brochure site |
| M2 | Video fallback poster image | Ensures hero looks good if video fails to load |
| M3 | PopLayout for vehicle grid | Smooth filter/search transitions |

## RISKS

| Risk | Mitigation |
|---|---|
| Video background performance | `poster` fallback, `playsInline` for iOS |
| Large bundle size (602 KB JS) | Code-split with React.lazy if more pages added |
| Datepicker CSS import | Can tree-shake or use custom styles later |
| Google Maps iframe reliability | Fallback: show address text if iframe fails |

## MILESTONES

### M1 — Project Foundation ✅
- Vite + React + TS + Tailwind CSS v4
- Theme context (dark/light)
- Routing (React Router)
- Layout: Navbar, Footer, LoadingScreen, PageTransition
- PROJECT_MAP.md

### M2 — Hero & Global Elements ✅
- Full-screen hero with video + fallback
- Scroll indicator
- WhatsApp floating button

### M3 — Vehicle Showcase ✅
- Vehicle data + cards
- Category filters + search
- 3D hover effects

### M4 — Booking Section ✅
- Date pickers
- Location select
- Mock availability + price estimate

### M5 — Content Sections ✅
- Why Choose Us (stats)
- Reviews (carousel)
- Marrakech Experience
- Services
- FAQ (accordion)
- Contact (form + map)

### M6 — Advanced Features & Polish
- [x] Dark/Light toggle
- [x] PWA support
- [x] Page transitions
- [x] Loading animation
- [x] SEO react-helmet-async per-page
- [ ] Performance audit
