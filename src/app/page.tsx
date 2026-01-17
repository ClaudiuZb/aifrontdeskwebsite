'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  Zap,
  Bot,
  Code,
  Globe,
  Cpu,
  MessageSquare,
  Check,
  Phone,
  Mail,
  ChevronDown,
  Play,
  Star,
  Quote,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Headphones,
  Rocket,
  Target,
  Award,
  Menu,
  X,
  ArrowDown,
  ExternalLink,
} from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamic import for 3D Experience - no loading screen for faster perceived load
const Experience3D = dynamic(() => import('@/components/Experience3D'), {
  ssr: false,
})

// ============================================
// ANIMATED SVG LINES
// ============================================
function AnimatedLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
      <defs>
        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#724CE8" />
          <stop offset="50%" stopColor="#26F4D0" />
          <stop offset="100%" stopColor="#F8CF3E" />
        </linearGradient>
      </defs>

      {/* Horizontal lines */}
      <motion.line
        x1="0" y1="20%" x2="100%" y2="20%"
        stroke="url(#gradient-line)"
        strokeWidth="1"
        strokeOpacity="0.1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.line
        x1="0" y1="80%" x2="100%" y2="80%"
        stroke="url(#gradient-line)"
        strokeWidth="1"
        strokeOpacity="0.1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
      />

      {/* Vertical lines */}
      <motion.line
        x1="10%" y1="0" x2="10%" y2="100%"
        stroke="url(#gradient-line)"
        strokeWidth="1"
        strokeOpacity="0.05"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      />
      <motion.line
        x1="90%" y1="0" x2="90%" y2="100%"
        stroke="url(#gradient-line)"
        strokeWidth="1"
        strokeOpacity="0.05"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
      />
    </svg>
  )
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================
function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

// ============================================
// NAVIGATION - ChainGPT Style
// ============================================
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Servicii' },
    { href: '#pricing', label: 'Prețuri' },
    { href: '/blog', label: 'Blog' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.nav
        className={`nav-container ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-2xl font-bold font-display relative z-10 flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span>
              <span className="text-white">AI</span>
              <span className="gradient-text">FrontDesk</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+40753933660"
              className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0753 933 660</span>
            </a>
            <a href="#contact" className="btn-launch">
              <span className="dot-indicator" />
              Consultatie Gratuita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-lg"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 glass-card p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg text-white hover:text-cyan-400 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="border-purple-500/20 my-2" />
                <a
                  href="tel:+40753933660"
                  className="flex items-center gap-2 text-zinc-400 py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>0753 933 660</span>
                </a>
                <a href="#contact" className="btn-primary text-center py-3 mt-2">
                  Consultatie Gratuita
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ============================================
// HERO SECTION - ChainGPT Style with Gradient Stroke Text
// ============================================
function HeroSection() {
  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden">
      <AnimatedLines />

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-label">
            Viitorul este aici
          </span>
        </motion.div>

        {/* Main Hero Title - ChainGPT Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="hero-title-large text-white mb-2">
            AUTOMATIZARE
          </h1>
          <h1 className="hero-title-large filled-gradient-text">
            AI
          </h1>
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Transformam afaceri din Romania cu tehnologie AI de ultima generatie.
          Website-uri care convertesc, chatbots disponibili 24/7, automatizari
          si software personalizat.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#contact" className="btn-primary">
            Incepe Proiectul
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services" className="btn-secondary">
            <Play className="w-5 h-5" />
            Exploreaza Serviciile
          </a>
        </motion.div>
      </div>

      {/* Side navigation dots */}
      <div className="menu-button">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={`menu-dot ${i === 0 ? 'active' : ''}`} />
        ))}
      </div>
    </section>
  )
}

// ============================================
// STATS SECTION - ChainGPT Style
// ============================================
function StatsSection() {
  const stats = [
    { value: '50+', label: 'Proiecte Finalizate' },
    { value: '24/7', label: 'Suport AI Activ' },
    { value: '90%', label: 'ROI Mediu Clienti' },
    { value: '100%', label: 'Satisfactie Garantata' },
  ]

  return (
    <section className="section py-20 border-y border-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// AWARDS / TRUSTED BY SECTION
// ============================================
function AwardsSection() {
  const awards = [
    'Top AI Agency Romania 2026',
    'Best Chatbot Implementation',
    'Innovation Excellence Award',
    'Customer Choice 2025',
  ]

  return (
    <section className="py-16 overflow-hidden border-b border-purple-500/10">
      <div className="marquee">
        <div className="marquee-content">
          {[...awards, ...awards].map((award, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-medium text-zinc-400 whitespace-nowrap">{award}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SERVICES SECTION - ChainGPT Style Cards
// ============================================
function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Website-uri Moderne',
      description: 'Site-uri ultra-rapide, responsive si optimizate SEO. Design personalizat care converteste vizitatori in clienti.',
      price: 'de la 500€',
      features: ['Design Custom', 'SEO Optimizat', 'Mobile First', 'Hosting 1 An'],
      color: '#26F4D0',
      link: '/servicii/website-profesional',
    },
    {
      icon: Bot,
      title: 'Chatbots AI',
      description: 'Asistenti virtuali inteligenti disponibili 24/7. Antrenati pe datele afacerii tale pentru raspunsuri personalizate.',
      price: 'de la 500€',
      features: ['Disponibil 24/7', 'Integrare WhatsApp', 'Antrenare Custom', 'Analytics'],
      color: '#724CE8',
      link: '/servicii/chatbot-ai',
    },
    {
      icon: Cpu,
      title: 'Automatizari',
      description: 'Eliminam munca repetitiva prin automatizari inteligente. Economisesti timp si reduci erorile umane.',
      price: 'de la 1000€',
      features: ['Workflow Custom', 'Integrari API', 'Rapoarte Automate', 'Support'],
      color: '#F8CF3E',
      link: '/servicii/automatizari-business',
    },
    {
      icon: Code,
      title: 'Software Custom',
      description: 'Aplicatii web si mobile create special pentru nevoile unice ale afacerii tale. Scalabile si performante.',
      price: 'de la 2500€',
      features: ['Arhitectura Scalabila', 'API REST', 'Dashboard Admin', 'Documentatie'],
      color: '#FC6756',
      link: '/servicii/software-custom',
    },
  ]

  return (
    <section id="services" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">
            Ce Oferim
          </span>
          <h2 className="section-title">
            Solutii <span className="gradient-text">Complete</span>
          </h2>
          <p className="section-subtitle mb-16">
            Tot ce ai nevoie pentru a-ti digitaliza afacerea si a creste vanzarile cu tehnologie AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="feature-card group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Corner decorations */}
              <div className="corner-bracket top-left" />
              <div className="corner-bracket top-right" />
              <div className="corner-bracket bottom-left" />
              <div className="corner-bracket bottom-right" />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <service.icon className="w-8 h-8" style={{ color: service.color }} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-display">{service.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-purple-500/20">
                <span className="text-2xl font-bold gradient-text font-display">{service.price}</span>
                <a
                  href={service.link}
                  className="flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                  style={{ color: service.color }}
                >
                  Află mai mult
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Alexandru Popescu',
      role: 'CEO, TechStart SRL',
      content: 'Website-ul realizat de AI Front Desk ne-a crescut conversiile cu 150% in primele 3 luni. Investitia s-a amortizat in mai putin de 60 de zile!',
      rating: 5,
    },
    {
      name: 'Maria Ionescu',
      role: 'Fondator, BeautyPlus',
      content: 'Chatbot-ul AI raspunde la 80% din intrebari automat. Echipa mea se poate concentra acum pe vanzari, nu pe raspunsuri repetitive.',
      rating: 5,
    },
    {
      name: 'Andrei Dumitrescu',
      role: 'Manager, LogiTrans',
      content: 'Automatizarile implementate ne-au economisit 40 ore pe saptamana. ROI-ul a fost vizibil din prima luna de functionare.',
      rating: 5,
    },
    {
      name: 'Elena Vasilescu',
      role: 'Director, FinanceHub',
      content: 'Profesionalism exceptional si rezultate concrete. Software-ul custom ne-a permis sa scalem de la 10 la 100 de clienti fara probleme.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">
            Testimoniale
          </span>
          <h2 className="section-title">
            Ce Spun <span className="gradient-text">Clientii</span>
          </h2>
          <p className="section-subtitle mb-16">
            Rezultate reale de la afaceri reale din Romania.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Quote className="w-10 h-10 text-purple-500/30 mb-4" />
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// PRICING SECTION - ChainGPT Style
// ============================================
function PricingSection() {
  const packages = [
    {
      name: 'Starter',
      price: '500',
      description: 'Perfect pentru afaceri mici',
      features: [
        'Website profesional (5 pagini)',
        'Design responsive modern',
        'Optimizare SEO de baza',
        'Hosting premium 1 an',
        'Certificat SSL inclus',
        'Suport tehnic 30 zile',
      ],
      featured: false,
    },
    {
      name: 'Business',
      price: '1500',
      description: 'Pachet complet pentru crestere',
      features: [
        'Website premium (10+ pagini)',
        'Chatbot AI personalizat',
        'Integrare WhatsApp Business',
        'SEO avansat + Google Ads',
        'Dashboard analytics',
        'Training echipa (2 ore)',
        'Suport prioritar 90 zile',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '3500+',
      description: 'Solutii complete pentru scale',
      features: [
        'Tot din pachetul Business',
        'Software custom dezvoltat',
        'Automatizari complete',
        'Integrari API avansate',
        'Account manager dedicat',
        'Suport prioritar 12 luni',
        'SLA garantat 99.9%',
      ],
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label justify-center">
            Preturi
          </span>
          <h2 className="section-title text-center">
            Investeste in <span className="gradient-text">Viitor</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Preturi transparente, fara surprize. Garantie ROI 90 de zile.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`pricing-card ${pkg.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-semibold whitespace-nowrap">
                  Recomandat
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-display">{pkg.name}</h3>
                <p className="text-zinc-500 text-sm mb-6">{pkg.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="price-value">{pkg.price}</span>
                  <span className="text-zinc-400 text-xl">€</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-4 rounded-xl font-semibold text-center transition-all ${
                  pkg.featured ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {pkg.featured ? 'Alege Business' : 'Contacteaza-ne'}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-zinc-500 mt-12 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          * Preturile nu includ TVA. Plata in rate disponibila. Garantie satisfactie 100%.
        </motion.p>
      </div>
    </section>
  )
}

// ============================================
// FAQ SECTION
// ============================================
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Cat dureaza crearea unui website?',
      answer: 'Un website standard se livreaza in 2-3 saptamani, unul complex cu functionalitati custom in 4-6 saptamani. Oferim si servicii express pentru proiecte urgente.',
    },
    {
      question: 'Ce este inclus in pretul unui chatbot AI?',
      answer: 'Pretul include: configurarea chatbot-ului, antrenarea pe datele afacerii tale, integrarea pe website sau WhatsApp, dashboard de analytics, si 30 de zile de suport tehnic.',
    },
    {
      question: 'Oferiti garantie pentru serviciile voastre?',
      answer: 'Da! Oferim garantie ROI de 90 de zile pentru toate pachetele Business si Enterprise. Daca nu vezi o crestere masurabila, lucram gratuit pana obtii rezultatele promise.',
    },
    {
      question: 'Pot sa platesc in rate?',
      answer: 'Absolut! Oferim planuri de plata in rate fara dobanda pentru proiecte de peste 1000€. De obicei: 50% avans, 25% la jumatatea proiectului, 25% la finalizare.',
    },
    {
      question: 'Ce tehnologii folositi?',
      answer: 'Folosim cele mai moderne tehnologii: React/Next.js pentru frontend, Node.js/Python pentru backend, si modele AI de la OpenAI si Anthropic pentru chatbots.',
    },
    {
      question: 'Oferiti suport dupa finalizarea proiectului?',
      answer: 'Da, oferim pachete de suport si mentenanta lunare incepand de la 100€/luna. Include: actualizari de securitate, backup-uri zilnice, monitorizare 24/7.',
    },
  ]

  return (
    <section id="faq" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label justify-center">
            FAQ
          </span>
          <h2 className="section-title text-center">
            Intrebari <span className="gradient-text">Frecvente</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                className="faq-question w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="faq-answer">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">
              Contact
            </span>
            <h2 className="section-title">
              Hai sa <span className="gradient-text">Vorbim</span>
            </h2>
            <p className="section-subtitle mb-10">
              Programeaza o consultatie gratuita de 30 de minute.
              Analizam afacerea ta si propunem solutii concrete.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+40753933660"
                className="flex items-center gap-4 p-5 glass-card"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center border border-cyan-500/20">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-1">Telefon</div>
                  <div className="text-xl font-semibold text-white">0753 933 660</div>
                </div>
              </a>

              <a
                href="mailto:contact@aifrontdesk.ro"
                className="flex items-center gap-4 p-5 glass-card"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center border border-purple-500/20">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-1">Email</div>
                  <div className="text-xl font-semibold text-white">contact@aifrontdesk.ro</div>
                </div>
              </a>

              <a
                href="https://wa.me/40753933660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 glass-card border-green-500/20"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center border border-green-500/20">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-green-400 mb-1">WhatsApp - Raspuns in 5 min</div>
                  <div className="text-xl font-semibold text-white">Scrie-ne Direct</div>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-zinc-500 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>L-V: 9:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Confidential</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="glass-card p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">Consultatie Gratuita</h3>
              <p className="text-zinc-400 text-sm mb-6">Te contactam in mai putin de 24 de ore.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Nume *</label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Ion Popescu"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Telefon *</label>
                  <input
                    type="tel"
                    className="input-field"
                    placeholder="07XX XXX XXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Email *</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="email@exemplu.ro"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Serviciu dorit</label>
                <select className="input-field">
                  <option value="">Selecteaza...</option>
                  <option value="website">Website Modern</option>
                  <option value="chatbot">Chatbot AI</option>
                  <option value="automation">Automatizari</option>
                  <option value="software">Software Custom</option>
                  <option value="other">Alt proiect</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Mesaj</label>
                <textarea
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Spune-ne pe scurt despre proiectul tau..."
                />
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-lg">
                Trimite Cererea
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-zinc-500 text-xs text-center">
                Prin trimitere, esti de acord cu politica de confidentialitate.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER - SEO OPTIMIZED
// ============================================
function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto">
        {/* SEO Content */}
        <div className="mb-16 pb-16 border-b border-purple-500/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-display">
              Agentie de <span className="gradient-text">Automatizare AI</span> din Romania
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-4xl">
              AI Front Desk este agentia lider in automatizare AI din Romania, specializata in
              crearea de website-uri moderne, chatbots inteligenti, automatizari business si
              software personalizat. Ajutam afaceri din Bucuresti, Cluj, Timisoara, Iasi si
              din toata tara sa se digitalizeze si sa creasca cu tehnologie de ultima generatie.
              Serviciile noastre includ: dezvoltare web profesionala, implementare chatbot AI
              pentru customer service, automatizare procese business, integrari API, si consultanta
              digitalizare. Cu peste 50 de proiecte finalizate si garantie ROI de 90 de zile,
              suntem partenerul ideal pentru transformarea digitala a afacerii tale.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold font-display">
                <span className="text-white">AI</span>
                <span className="gradient-text">FrontDesk</span>
              </div>
            </div>
            <p className="text-zinc-500 mb-6 leading-relaxed">
              Transformam afaceri din Romania cu tehnologie AI. Website-uri moderne,
              chatbots inteligenti, automatizari si software personalizat pentru succesul tau.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/40753933660"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@aifrontdesk.ro"
                className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-400 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+40753933660"
                className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                aria-label="Telefon"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Servicii</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="footer-link">Website-uri Moderne</a></li>
              <li><a href="#services" className="footer-link">Chatbots AI</a></li>
              <li><a href="#services" className="footer-link">Automatizari Business</a></li>
              <li><a href="#services" className="footer-link">Software Custom</a></li>
              <li><a href="#services" className="footer-link">Consultanta AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-zinc-500 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+40753933660" className="hover:text-cyan-400 transition-colors">0753 933 660</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href="mailto:contact@aifrontdesk.ro" className="hover:text-purple-400 transition-colors">contact@aifrontdesk.ro</a>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <Clock className="w-4 h-4 text-zinc-500 mt-0.5" />
                <span>Luni - Vineri<br />09:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-purple-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © 2026 AI Front Desk. Toate drepturile rezervate. CUI: RO12345678
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="footer-link">Termeni si Conditii</a>
            <a href="#" className="footer-link">Politica de Confidentialitate</a>
            <a href="#" className="footer-link">GDPR</a>
          </div>
        </div>

        {/* Schema.org SEO markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI Front Desk",
              "url": "https://aifrontdesk.ro",
              "logo": "https://aifrontdesk.ro/logo.png",
              "description": "Agentie de automatizare AI din Romania - website-uri moderne, chatbots AI, automatizari business si software personalizat",
              "telephone": "+40753933660",
              "email": "contact@aifrontdesk.ro",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "RO"
              },
              "sameAs": [
                "https://wa.me/40753933660"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Romania"
              },
              "serviceType": [
                "Web Development",
                "AI Chatbot Development",
                "Business Process Automation",
                "Custom Software Development"
              ]
            })
          }}
        />
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE
// ============================================
export default function Home() {
  return (
    <>
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* 3D Experience Background */}
      <Experience3D />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="main-content">
        <HeroSection />
        <StatsSection />
        <AwardsSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/40753933660"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Contact pe WhatsApp"
      >
        <MessageSquare className="w-7 h-7 text-white" />
      </a>
    </>
  )
}
