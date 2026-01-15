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
} from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamic import for 3D Experience
const Experience3D = dynamic(() => import('@/components/Experience3D'), {
  ssr: false,
  loading: () => (
    <div className="loading-screen">
      <div className="loading-logo">
        <span className="text-white">AI</span>
        <span className="gradient-text">FrontDesk</span>
      </div>
      <div className="loading-bar">
        <div className="loading-bar-fill" />
      </div>
    </div>
  ),
})

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
// NAVIGATION
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
    { href: '#pricing', label: 'Preturi' },
    { href: '#testimonials', label: 'Testimoniale' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'nav-glass py-4' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold font-display relative z-10">
            <span className="text-white">AI</span>
            <span className="gradient-text">FrontDesk</span>
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
            <a href="#contact" className="btn-primary btn-glow text-sm px-6 py-3">
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
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
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
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative pt-20">
      <div className="section-content text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="section-badge mb-8 inline-flex">
            <Sparkles className="w-4 h-4" />
            Tehnologie AI de Ultima Generatie
          </span>
        </motion.div>

        <motion.h1
          className="hero-title mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Transformam{' '}
          <span className="gradient-text-animated">Afacerea Ta</span>
          <br />
          cu <span className="glow-text">AI</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle mx-auto mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Website-uri care convertesc. Chatbots AI disponibili 24/7.
          Automatizari care economisesc timp. Software personalizat pentru succesul tau.
          <span className="text-cyan-400 font-semibold"> ROI garantat in 90 de zile.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#contact" className="btn-primary btn-glow text-lg px-8 py-4">
            Incepe Acum
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services" className="btn-secondary text-lg px-8 py-4">
            <Play className="w-5 h-5" />
            Vezi Serviciile
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: '50+', label: 'Proiecte', icon: Rocket },
            { value: '24/7', label: 'Suport AI', icon: Bot },
            { value: '90%', label: 'ROI Mediu', icon: TrendingUp },
            { value: '100%', label: 'Satisfactie', icon: Star },
          ].map((stat, i) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
              <div className="stat-number text-3xl md:text-4xl">{stat.value}</div>
              <div className="text-zinc-500 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <div className="scroll-indicator mt-20">
          <span>Scroll</span>
          <div className="scroll-indicator-mouse">
            <div className="scroll-indicator-wheel" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SERVICES SECTION
// ============================================
function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Website-uri Moderne',
      description: 'Site-uri ultra-rapide, responsive si optimizate SEO. Design personalizat care reflecta brandul tau si converteste vizitatorii in clienti fideli.',
      price: 'de la 500€',
      features: ['Design Custom', 'SEO Optimizat', 'Mobile First', 'Hosting 1 An'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Bot,
      title: 'Chatbots AI',
      description: 'Asistenti virtuali inteligenti care raspund instant clientilor 24/7. Antrenati pe datele afacerii tale pentru conversatii naturale.',
      price: 'de la 500€',
      features: ['Disponibil 24/7', 'Integrare WhatsApp', 'Antrenare Custom', 'Analytics'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cpu,
      title: 'Automatizari',
      description: 'Eliminam munca repetitiva si manuala. Automatizam procesele pentru a economisi timp si a reduce erorile umane.',
      price: 'de la 1000€',
      features: ['Workflow Custom', 'Integrari API', 'Rapoarte Automate', 'Support'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Code,
      title: 'Software Custom',
      description: 'Aplicatii web si mobile create special pentru nevoile unice ale afacerii tale. Scalabile si performante.',
      price: 'de la 2500€',
      features: ['Arhitectura Scalabila', 'API REST', 'Dashboard Admin', 'Documentatie'],
      color: 'from-blue-500 to-indigo-500',
    },
  ]

  return (
    <section id="services" className="section py-32">
      <div className="section-content px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge mb-6 inline-flex">
            <Zap className="w-4 h-4" />
            Serviciile Noastre
          </span>
          <h2 className="section-title">
            Solutii <span className="gradient-text">Complete</span> pentru Afacerea Ta
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Tot ce ai nevoie pentru a-ti digitaliza afacerea si a creste vanzarile cu tehnologie AI de ultima generatie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`service-icon bg-gradient-to-br ${service.color}`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                <span className="text-2xl font-bold gradient-text">{service.price}</span>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                >
                  Afla mai mult
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
      image: '/testimonials/alex.jpg',
    },
    {
      name: 'Maria Ionescu',
      role: 'Fondator, BeautyPlus',
      content: 'Chatbot-ul AI raspunde la 80% din intrebari automat. Echipa mea se poate concentra acum pe vanzari, nu pe raspunsuri repetitive.',
      rating: 5,
      image: '/testimonials/maria.jpg',
    },
    {
      name: 'Andrei Dumitrescu',
      role: 'Manager, LogiTrans',
      content: 'Automatizarile implementate ne-au economisit 40 ore pe saptamana. ROI-ul a fost vizibil din prima luna de functionare.',
      rating: 5,
      image: '/testimonials/andrei.jpg',
    },
    {
      name: 'Elena Vasilescu',
      role: 'Director, FinanceHub',
      content: 'Profesionalism exceptional si rezultate concrete. Software-ul custom ne-a permis sa scalem de la 10 la 100 de clienti fara probleme.',
      rating: 5,
      image: '/testimonials/elena.jpg',
    },
  ]

  return (
    <section id="testimonials" className="section py-32">
      <div className="section-content px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge mb-6 inline-flex">
            <Star className="w-4 h-4" />
            Testimoniale
          </span>
          <h2 className="section-title">
            Ce Spun <span className="gradient-text">Clientii</span> Nostri
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Rezultate reale de la afaceri reale. Citeste experientele clientilor nostri multumiti.
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
// PRICING SECTION
// ============================================
function PricingSection() {
  const packages = [
    {
      name: 'Starter',
      price: '500',
      description: 'Perfect pentru afaceri mici care vor sa inceapa online',
      features: [
        'Website profesional (5 pagini)',
        'Design responsive modern',
        'Optimizare SEO de baza',
        'Hosting premium 1 an',
        'Certificat SSL inclus',
        'Suport tehnic 30 zile',
      ],
      popular: false,
      cta: 'Incepe Acum',
    },
    {
      name: 'Business',
      price: '1500',
      description: 'Pachetul complet pentru crestere accelerata',
      features: [
        'Website premium (10+ pagini)',
        'Chatbot AI personalizat',
        'Integrare WhatsApp Business',
        'SEO avansat + Google Ads setup',
        'Dashboard analytics',
        'Training echipa (2 ore)',
        'Suport prioritar 90 zile',
      ],
      popular: true,
      cta: 'Cel Mai Popular',
    },
    {
      name: 'Enterprise',
      price: '3500+',
      description: 'Solutii complete pentru afaceri serioase',
      features: [
        'Tot din pachetul Business',
        'Software custom dezvoltat',
        'Automatizari complete',
        'Integrari API avansate',
        'Migrare date existente',
        'Account manager dedicat',
        'Suport prioritar 12 luni',
        'SLA garantat 99.9%',
      ],
      popular: false,
      cta: 'Contacteaza-ne',
    },
  ]

  return (
    <section id="pricing" className="section py-32">
      <div className="section-content px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge mb-6 inline-flex">
            <Target className="w-4 h-4" />
            Preturi Transparente
          </span>
          <h2 className="section-title">
            Investeste in <span className="gradient-text">Viitorul</span> Afacerii Tale
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Preturi clare, fara surprize. Alege pachetul potrivit sau cere o oferta personalizata.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`pricing-card ${pkg.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-sm font-semibold whitespace-nowrap">
                  Recomandat
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-zinc-500 text-sm mb-6">{pkg.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="price">{pkg.price}</span>
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
                className={`block w-full py-4 rounded-full font-semibold text-center transition-all ${
                  pkg.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-zinc-500 mt-12"
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
      answer: 'Timpul de livrare depinde de complexitatea proiectului. Un website standard se livreaza in 2-3 saptamani, unul complex cu functionalitati custom in 4-6 saptamani. Oferim si servicii express pentru proiecte urgente.',
    },
    {
      question: 'Ce este inclus in pretul unui chatbot AI?',
      answer: 'Pretul include: configurarea chatbot-ului, antrenarea pe datele afacerii tale, integrarea pe website sau WhatsApp, dashboard de analytics, si 30 de zile de suport tehnic. Actualizarile sunt incluse in primul an.',
    },
    {
      question: 'Oferiti garantie pentru serviciile voastre?',
      answer: 'Da! Oferim garantie ROI de 90 de zile pentru toate pachetele Business si Enterprise. Daca nu vezi o crestere masurabila in conversii sau eficienta, lucram gratuit pana cand obtii rezultatele promise.',
    },
    {
      question: 'Pot sa platesc in rate?',
      answer: 'Absolut! Oferim planuri de plata in rate fara dobanda pentru proiecte de peste 1000€. De obicei: 50% avans, 25% la jumatatea proiectului, si 25% la finalizare.',
    },
    {
      question: 'Ce tehnologii folositi?',
      answer: 'Folosim cele mai moderne tehnologii: React/Next.js pentru frontend, Node.js/Python pentru backend, si modele AI de la OpenAI si Anthropic pentru chatbots. Toate solutiile sunt scalabile si securizate.',
    },
    {
      question: 'Oferiti suport dupa finalizarea proiectului?',
      answer: 'Da, oferim pachete de suport si mentenanta lunare incepand de la 100€/luna. Include: actualizari de securitate, backup-uri zilnice, monitorizare 24/7, si suport tehnic prioritar.',
    },
  ]

  return (
    <section id="faq" className="section py-32">
      <div className="section-content px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge mb-6 inline-flex">
            <MessageSquare className="w-4 h-4" />
            Intrebari Frecvente
          </span>
          <h2 className="section-title">
            Ai <span className="gradient-text">Intrebari</span>?
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Gaseste raspunsuri la cele mai frecvente intrebari sau contacteaza-ne direct.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
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
    <section id="contact" className="section py-32">
      <div className="section-content px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-badge mb-6 inline-flex">
              <Headphones className="w-4 h-4" />
              Contact
            </span>
            <h2 className="section-title mb-4">
              Hai sa <span className="gradient-text">Vorbim</span>
            </h2>
            <p className="section-subtitle mb-10">
              Programeaza o consultatie gratuita de 30 de minute. Analizam afacerea ta si
              propunem solutii concrete cu ROI masurabil.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+40753933660"
                className="flex items-center gap-4 p-5 glass-card hover:scale-[1.02] transition-transform"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Telefon</div>
                  <div className="text-xl font-semibold text-white">0753 933 660</div>
                </div>
              </a>

              <a
                href="mailto:contact@aifrontdesk.ro"
                className="flex items-center gap-4 p-5 glass-card hover:scale-[1.02] transition-transform"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Email</div>
                  <div className="text-xl font-semibold text-white">contact@aifrontdesk.ro</div>
                </div>
              </a>

              <a
                href="https://wa.me/40753933660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 glass-card border-green-500/30 hover:border-green-500/50 hover:scale-[1.02] transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-green-400">WhatsApp - Raspuns in 5 minute</div>
                  <div className="text-xl font-semibold text-white">Scrie-ne Direct</div>
                </div>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-zinc-500 text-sm">
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
            <form className="glass-card-intense p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-white mb-2">Consultatie Gratuita</h3>
              <p className="text-zinc-400 text-sm mb-6">Completeaza formularul si te contactam in mai putin de 24 de ore.</p>

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
                <label className="block text-sm font-medium text-zinc-300 mb-2">Ce te intereseaza?</label>
                <select className="input-field">
                  <option value="">Selecteaza serviciul...</option>
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
                Prin trimiterea formularului, esti de acord cu politica noastra de confidentialitate.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="py-16 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold font-display mb-4">
              <span className="text-white">AI</span>
              <span className="gradient-text">FrontDesk</span>
            </div>
            <p className="text-zinc-500 max-w-md leading-relaxed">
              Agentie de automatizare AI din Romania. Transformam afaceri cu website-uri moderne,
              chatbots inteligenti si software personalizat.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://wa.me/40753933660" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-green-500 hover:text-white transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="mailto:contact@aifrontdesk.ro" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-purple-500 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+40753933660" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-cyan-500 hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicii</h4>
            <ul className="space-y-3 text-zinc-500">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Website-uri Moderne</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Chatbots AI</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Automatizari</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Software Custom</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-zinc-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Termeni si Conditii</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Politica de Confidentialitate</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GDPR</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © 2026 AI Front Desk. Toate drepturile rezervate.
          </p>
          <p className="text-zinc-600 text-sm flex items-center gap-2">
            Facut cu <span className="text-pink-500">♥</span> in Romania
          </p>
        </div>
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
      >
        <MessageSquare className="w-7 h-7 text-white" />
      </a>
    </>
  )
}
