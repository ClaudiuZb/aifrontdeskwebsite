'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Zap,
  Search,
  Shield,
  Smartphone,
  TrendingUp,
  Check,
  ArrowRight,
  Phone,
  Palette,
  Code,
  Gauge,
  Lock,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Zap,
    title: 'Ultra-Rapid',
    description: 'Score 95+ pe Google PageSpeed. Site-ul tau se incarca in sub 2 secunde.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Design optimizat pentru telefoane. 70% din trafic vine de pe mobil.',
  },
  {
    icon: Search,
    title: 'SEO Integrat',
    description: 'Optimizare pentru Google din prima zi. Meta tags, schema markup, sitemap.',
  },
  {
    icon: Shield,
    title: 'Securitate SSL',
    description: 'Certificate SSL gratuit, protectie DDoS, backup-uri automate zilnice.',
  },
  {
    icon: Palette,
    title: 'Design Premium',
    description: 'UI/UX modern care converteste vizitatori in clienti. Fara template-uri.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics Integrat',
    description: 'Google Analytics 4, heatmaps, tracking conversii - toate configurate.',
  },
]

const technologies = [
  { name: 'Next.js 15', description: 'Framework React de ultima generatie' },
  { name: 'TypeScript', description: 'Cod robust si usor de mentinut' },
  { name: 'Tailwind CSS', description: 'Styling modern si performant' },
  { name: 'Vercel', description: 'Hosting pe CDN global, 99.99% uptime' },
  { name: 'Framer Motion', description: 'Animatii fluide si profesionale' },
  { name: 'Three.js', description: 'Experienta 3D imersiva' },
]

const portfolio = [
  {
    title: 'E-commerce Premium',
    description: 'Magazin online cu +500 produse, checkout optimizat, integrare curierat',
    results: '+150% conversii',
  },
  {
    title: 'Landing Page SaaS',
    description: 'Pagina de prezentare pentru startup tech, A/B testing integrat',
    results: '+300% sign-ups',
  },
  {
    title: 'Website Restaurant',
    description: 'Prezentare + meniu digital + rezervari online + comenzi takeaway',
    results: '+80% rezervari',
  },
  {
    title: 'Portal Imobiliar',
    description: 'Listari proprietati, filtre avansate, tour virtual 360',
    results: '+200% lead-uri',
  },
]

const pricing = [
  {
    name: 'Landing Page',
    price: '500',
    period: 'proiect',
    features: [
      '1 Pagina profesionala',
      'Design responsive',
      'SEO de baza',
      'Formular contact',
      'Hosting 1 an inclus',
      'Livrare 7 zile',
    ],
    popular: false,
  },
  {
    name: 'Website Complet',
    price: '1500',
    period: 'proiect',
    features: [
      '5-10 Pagini',
      'Design custom premium',
      'SEO avansat',
      'Blog integrat',
      'CMS pentru editare',
      'Analytics setup',
      'Hosting 1 an inclus',
      'Suport 3 luni',
    ],
    popular: true,
  },
  {
    name: 'E-commerce',
    price: '3000',
    period: 'proiect',
    features: [
      'Magazin online complet',
      'Produse nelimitate',
      'Plati online integrate',
      'Integrare curierat',
      'Gestiune stocuri',
      'Dashboard admin',
      'Training echipa',
      'Suport 6 luni',
    ],
    popular: false,
  },
]

export default function WebsitePage() {
  return (
    <main className="min-h-screen bg-[#030014]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
          >
            ← Inapoi la pagina principala
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Web Development Romania</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Website-uri care{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Convertesc Vizitatori in Clienti
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Nu doar un site frumos - un instrument de vanzare. Design modern, viteza maxima,
              optimizat pentru Google. Site-ul tau lucreaza pentru tine 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Vreau un Website
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+40753933660"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 rounded-full text-white font-semibold hover:bg-zinc-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Consultatie Gratuita
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fiecare Website Include
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Standard ridicat pentru fiecare proiect, indiferent de buget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tehnologii de Top - Standard 2026
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Folosim cele mai noi tehnologii pentru performanta maxima
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center hover:border-cyan-500/30 transition-colors"
              >
                <Code className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm">{tech.name}</h3>
                <p className="text-zinc-500 text-xs mt-1">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rezultate Reale pentru Clienti Reali
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Nu doar site-uri frumoase - rezultate masurabile
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                    {project.results}
                  </span>
                </div>
                <p className="text-zinc-400">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Preturi Clare, Fara Costuri Ascunse
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Pretul include tot: design, dezvoltare, hosting 1 an, domeniu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-2 border-cyan-500'
                    : 'bg-zinc-900/50 border border-zinc-800'
                }`}
              >
                {plan.popular && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500 text-white text-sm font-medium mb-4">
                    <TrendingUp className="w-4 h-4" /> Cel Mai Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-white">{plan.price}€</span>
                  <span className="text-zinc-400">/{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-white text-zinc-900 hover:bg-zinc-100'
                      : 'bg-zinc-800 text-white hover:bg-zinc-700'
                  }`}
                >
                  Solicita Oferta
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30"
          >
            <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gata pentru un Website care Vinde?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Hai sa discutam despre proiectul tau. Consultatie gratuita de 30 minute
              in care analizam nevoile tale si propunem solutia perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-100 transition-colors"
              >
                Incepe Proiectul
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+40753933660"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-600 rounded-full text-white font-semibold hover:bg-zinc-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +40 753 933 660
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center pb-12">
        <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
          ← Inapoi la AI Front Desk
        </Link>
      </div>
    </main>
  )
}
