# Site Personal Financiar-Contabil Inovator - Specificație Tehnică 2025

## Viziune Generală

Site personal modern și inovator pentru servicii financiar-contabile în Germania, construit cu cele mai noi tehnologii din 2025. Combină eleganța profesională cu inovația tehnologică pentru a demonstra competențele avansate în intersecția dintre tehnologie și finanțe.

## Stack Tehnologic Principal

### Frontend Core
- **Next.js 15.1** cu App Router și Server Components
- **React 19** cu Actions și hook-uri noi (useActionState, useOptimistic)
- **TypeScript 5.3+** pentru type safety complet
- **Tailwind CSS 4.0** cu CSS @property pentru animații avansate

### Backend & Database
- **Serverless Architecture** cu Vercel Functions
- **PostgreSQL** cu Prisma ORM pentru date structurate
- **Redis** pentru caching și sesiuni
- **WebSockets** pentru actualizări real-time

### AI & Advanced Features
- **OpenAI GPT-4** pentru chatbot financiar
- **WebWorkers** pentru calcule complexe
- **WebRTC** pentru consultanță video
- **Progressive Web App** cu offline capability

## Design System - "FinTech Elegance 2025"

### Paleta de Culori
```css
:root {
  /* Culori principale */
  --primary-mocha: #8b7355;        /* Pantone 2025 - stabilitate, lux */
  --secondary-mint: #96F0D1;       /* Neo Mint - prospețime, inovație */
  --accent-lavender: #B6A7E6;      /* Digital Lavender - calm, tehnologie */
  --warning-cyber: #FFEB3B;        /* Cyber Yellow - alerte, CTA-uri */
  
  /* Paleta financiară */
  --profit-green: #10b981;
  --loss-red: #ef4444;
  --neutral-blue: #3b82f6;
  
  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  
  /* Dark mode */
  --dark-bg: #0f0f0f;
  --dark-surface: #1a1a1a;
  --dark-text: #e5e5e5;
}
```

### Tipografie
- **Font Principal**: Inter Variable (performance optimizat)
- **Font Accent**: GT Ultra (autoritate pentru titluri)
- **Font Code**: JetBrains Mono (pentru outputs calculatoare)

### Design Patterns
- **Neo-brutalism rafinat** cu elemente glassmorphic
- **Grid asimetric** pentru layout dinamic
- **Micro-animations** cu Framer Motion
- **Dark/Light mode** cu persistență preferințe

## Arhitectura Site-ului

### Structura Paginilor
```
/
├── / (Homepage - Hero + Overview servicii)
├── /cv (CV interactiv cu animații)
├── /servicii/
│   ├── /design-grafic (Design pentru haine/accesorii)
│   ├── /web-development (Site-uri de prezentare)
│   ├── /mcp-calculatoare (Microcalculatoare personalizate)
│   ├── /finanzbuchhalter (Servicii financiar-contabile)
│   └── /business-planning (Planificare business)
├── /instrumente/
│   ├── /calculator-impozite (Calculator impozite DE)
│   ├── /planificator-buget (Planificator buget personal)
│   ├── /calculator-amortizare (Calculator amortizare)
│   ├── /simulator-investitii (Simulator investiții)
│   └── /convertor-valutar (Convertor cu rate live)
├── /blog/ (Articole financiar-fiscale Germania)
├── /contact (Contact + Consultanță video)
└── /dashboard (Dashboard client - login requis)
```

### Componente Reutilizabile
```
components/
├── ui/
│   ├── Button.tsx (Cu variante glassmorphic)
│   ├── Input.tsx (Cu validare live)
│   ├── Card.tsx (Glassmorphism + brutalist shadow)
│   ├── Modal.tsx (Cu backdrop blur)
│   └── Loading.tsx (Skeleton cu brand colors)
├── layout/
│   ├── Header.tsx (Sticky cu glassmorphism)
│   ├── Footer.tsx (Cu social links)
│   ├── Sidebar.tsx (Pentru dashboard)
│   └── Navigation.tsx (Mobile-first)
├── financial/
│   ├── Calculator.tsx (Bază pentru toate calculatoarele)
│   ├── Chart.tsx (ApexCharts wrapper)
│   ├── CurrencyConverter.tsx
│   └── TaxCalculator.tsx
├── interactive/
│   ├── ChatBot.tsx (AI-powered)
│   ├── VideoCall.tsx (WebRTC)
│   ├── FormWizard.tsx (Multi-step)
│   └── DataExport.tsx (Excel/PDF export)
└── animations/
    ├── GlassCard.tsx
    ├── NumberCounter.tsx
    ├── ChartAnimations.tsx
    └── PageTransitions.tsx
```

## TODO List - Faze de Dezvoltare

### FAZA 1: Fundația (Săptămânile 1-2)
#### Setup & Infrastructure
- [ ] Inițializare proiect Next.js 15.1 cu TypeScript
- [ ] Configurare Tailwind CSS 4.0 cu design tokens
- [ ] Setup Prisma cu PostgreSQL
- [ ] Configurare ESLint, Prettier, Husky
- [ ] Setup deployment pe Vercel cu environment variables

#### Design System Base
- [ ] Creare design tokens CSS cu variabile pentru culori 2025
- [ ] Implementare componente UI de bază (Button, Input, Card)
- [ ] Setup Framer Motion pentru animații
- [ ] Creare layout-uri responsive cu grid asimetric
- [ ] Implementare theme switcher (light/dark mode)

#### Structura de Bază
- [ ] Creare routing și pagini placeholder
- [ ] Implementare layout principal cu Header/Footer
- [ ] Setup metadata și SEO pentru fiecare pagină
- [ ] Configurare font loading optimizat
- [ ] Implementare PWA manifest și service worker

### FAZA 2: Pagini Principale (Săptămânile 3-4)
#### Homepage
- [ ] Hero section cu animații glassmorphic
- [ ] Overview servicii cu cards interactive
- [ ] Secțiune testimoniale/certificări
- [ ] CTA pentru consultanță video
- [ ] Integration cu scroll-triggered animations

#### CV Interactiv
- [ ] Timeline experiență cu animații
- [ ] Skills showcase cu progress bars animate
- [ ] Download CV în format PDF
- [ ] Secțiune portfolio cu previews proiecte
- [ ] Contact form integrat

#### Pagina Servicii
- [ ] Layout grid pentru cele 5 categorii servicii
- [ ] Cards cu hover effects și micro-interactions
- [ ] Modal-uri cu detalii complete pentru fiecare serviciu
- [ ] Pricing tables cu calculatoare estimate
- [ ] Integration form contact pentru fiecare serviciu

### FAZA 3: Instrumente Financiare (Săptămânile 5-6)
#### Calculator Impozite Germania
- [ ] Form wizard multi-step cu validare
- [ ] Calcule conform legislației fiscale germane 2025
- [ ] Afișare rezultate cu breakdown detaliat
- [ ] Export rezultate în PDF/Excel
- [ ] Salvare calcule în localStorage pentru revisitare

#### Planificator Buget Personal
- [ ] Interface pentru adăugare venituri/cheltuieli
- [ ] Categorii predefinite + custom
- [ ] Grafice interactive cu ApexCharts
- [ ] Proiecții pe termen lung
- [ ] Export plan buget și rapoarte

#### Calculator Amortizare
- [ ] Input pentru tipuri diverse active
- [ ] Metode multiple amortizare (linear, degresiv)
- [ ] Tabel amortizare cu vizualizare grafică
- [ ] Comparație metode diferite
- [ ] Simulare scenarii diferite

#### Simulator Investiții
- [ ] Portfolio builder cu drag & drop
- [ ] Date real-time pentru acțiuni/ETF-uri
- [ ] Analiză risc-rentabilitate
- [ ] Proiecții Monte Carlo
- [ ] Backtesting strategii investiții

#### Convertor Valutar
- [ ] Integration API rate de schimb live
- [ ] Istorice rate cu grafice
- [ ] Calculator comisioane bancare
- [ ] Alerte pentru rate specifice
- [ ] Widget pentru embed pe alte site-uri

### FAZA 4: Blog & Content Management (Săptămâna 7)
#### Blog System
- [ ] CMS headless cu Sanity/Contentful
- [ ] Template articole cu syntax highlighting
- [ ] Categorii și tag-uri pentru organizare
- [ ] Search functionality cu full-text
- [ ] Comments system cu moderare

#### Content Creation
- [ ] 5 articole launch despre tendințe fiscale Germania
- [ ] SEO optimization pentru fiecare articol
- [ ] Social sharing buttons
- [ ] Newsletter signup integration
- [ ] Related articles suggestions

### FAZA 5: Features Avansate (Săptămâna 8)
#### AI Chatbot Financiar
- [ ] Integration OpenAI GPT-4 pentru consultanță
- [ ] Training pe legislația fiscală germană
- [ ] Context awareness pentru conversații
- [ ] Fallback la contact human pentru cazuri complexe
- [ ] Analytics pentru îmbunătățire responses

#### WebRTC Video Consultanță
- [ ] Integration SimpleWebRTC/Daily.co
- [ ] Scheduling system cu calendar integration
- [ ] Screen sharing pentru review documente
- [ ] Recording calls (cu consimțământ)
- [ ] Payment integration pentru consultanță paid

#### Dashboard Client
- [ ] Autentificare cu NextAuth.js
- [ ] Istoric calcule și consultări
- [ ] Upload documente pentru analiză
- [ ] Progres tasks și deadlines
- [ ] Facturare și plăți online

### FAZA 6: Optimizare & Securitate (Săptămâna 9)
#### Performance
- [ ] Image optimization cu Next.js Image
- [ ] Code splitting și lazy loading
- [ ] Caching strategy cu Redis
- [ ] Bundle analysis și optimization
- [ ] Core Web Vitals monitoring

#### Securitate & GDPR
- [ ] Cookie consent management
- [ ] Data encryption în tranzit și repos
- [ ] Rate limiting pentru API-uri
- [ ] GDPR compliance audit
- [ ] Security headers implementation

#### SEO & Analytics
- [ ] Sitemap XML dinamic
- [ ] Schema markup pentru toate paginile
- [ ] Google Analytics 4 integration
- [ ] Search Console setup
- [ ] Performance monitoring cu Vercel Analytics

### FAZA 7: Testing & Deployment (Săptămâna 10)
#### Testing
- [ ] Unit tests cu Jest pentru componente
- [ ] Integration tests pentru calculatoare
- [ ] E2E tests cu Playwright
- [ ] Performance testing cu Lighthouse
- [ ] Cross-browser testing

#### Launch Preparation
- [ ] Domain setup și SSL certificate
- [ ] Production environment configuration
- [ ] Backup strategy pentru database
- [ ] Monitoring și error tracking cu Sentry
- [ ] User acceptance testing

## Cerințe Tehnice Specifice

### GDPR & Compliance Germania
- Cookie consent cu granularitate detaliată
- Data retention policies clare
- Right to deletion implementation
- Transparență processing AI
- Audit trail pentru toate acțiunile

### Accessibility (European Accessibility Act)
- WCAG 2.1 Level AA compliance
- Keyboard navigation completă
- Screen reader optimization
- High contrast mode
- Reducere motion pentru utilizatori sensibili

### Performance Targets
- Lighthouse Score: >95 pentru toate categoriile
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3s

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Integrări Externe

### APIs Necesare
- **Exchange Rates API**: Pentru convertor valutar
- **OpenAI API**: Pentru chatbot financiar
- **Stripe API**: Pentru plăți consultanță
- **SendGrid API**: Pentru email notifications
- **Google Calendar API**: Pentru scheduling

### Third-party Services
- **Vercel**: Hosting și serverless functions
- **PlanetScale**: Database MySQL serverless
- **Upstash Redis**: Caching și rate limiting
- **Sanity**: Headless CMS pentru blog
- **Sentry**: Error monitoring și performance

## Securitate & Privacy

### Măsuri Securitate
- Toate input-urile sanitizate și validate
- SQL injection prevention cu Prisma
- XSS protection cu Content Security Policy
- Rate limiting pe toate endpoint-urile
- Encryption pentru date sensibile

### Privacy by Design
- Minimal data collection
- Explicit consent pentru toate cookie-urile
- Data retention automat cleanup
- Anonimizare analytics data
- Transparent privacy policy

## Maintenance & Updates

### Monitoring Continuu
- Uptime monitoring cu alerts
- Performance metrics tracking
- Error rate monitoring
- User behavior analytics
- Security vulnerability scanning

### Update Strategy
- Dependințe actualizate lunar
- Security patches imediat
- Feature releases trimestriale
- Content blog săptămânal
- Backup testing lunar

Această specificație oferă o roadmap completă pentru construirea unui site financiar-contabil modern și inovator, gata pentru implementare cu Claude Code.