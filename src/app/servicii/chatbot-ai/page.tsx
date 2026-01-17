'use client'

import { motion } from 'framer-motion'
import {
  Bot,
  MessageSquare,
  Clock,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Star,
  Users,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Clock,
    title: 'Disponibil 24/7',
    description: 'Chatbot-ul tau raspunde instant, non-stop, chiar si in weekend sau sarbatori.',
  },
  {
    icon: Globe,
    title: 'Multi-Platform',
    description: 'WhatsApp, Facebook Messenger, Instagram, Website - toate intr-un singur loc.',
  },
  {
    icon: Zap,
    title: 'Raspunsuri Instant',
    description: 'Timp de raspuns sub 1 secunda. Clientii tai nu mai asteapta niciodata.',
  },
  {
    icon: Shield,
    title: 'Antrenat pe Datele Tale',
    description: 'AI-ul invata din documentele, FAQ-urile si istoricul afacerii tale.',
  },
  {
    icon: MessageSquare,
    title: 'Limba Romana Nativa',
    description: 'Intelege perfect romana, inclusiv regionalisme si expresii locale.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics Detaliate',
    description: 'Dashboard cu toate conversatiile, intrebarile frecvente si oportunitati de vanzare.',
  },
]

const useCases = [
  {
    industry: 'E-commerce',
    description: 'Raspunde la intrebari despre produse, status comenzi, retururi',
    savings: '70% reducere timpul suport',
  },
  {
    industry: 'Restaurant/Cafe',
    description: 'Rezervari automate, meniu, program, locatie',
    savings: '50+ ore/luna economisite',
  },
  {
    industry: 'Clinici Medicale',
    description: 'Programari, informatii servicii, preturi, directii',
    savings: '80% mai putine apeluri',
  },
  {
    industry: 'Imobiliare',
    description: 'Calificare lead-uri, informatii proprietati, programare vizionari',
    savings: '3x mai multi clienti calificati',
  },
]

const pricing = [
  {
    name: 'Starter',
    price: '500',
    period: 'implementare',
    features: [
      '2 Chatbots (Website + WhatsApp)',
      'Antrenare pe datele tale',
      '1000 conversatii/luna',
      'Dashboard analytics',
      'Suport email',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: '1000',
    period: 'implementare',
    features: [
      'Chatbot pe toate platformele',
      'Integrare CRM/ERP',
      'Conversatii nelimitate',
      'AI avansat cu memoria contextului',
      'Suport prioritar 24/7',
      'Training echipa',
    ],
    popular: true,
  },
]

export default function ChatbotAIPage() {
  return (
    <main className="min-h-screen bg-[#030014]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Bot className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Chatbot AI Romania</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Chatbot AI care{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Vinde pentru Tine 24/7
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Transforma vizitatorii in clienti cu un asistent virtual inteligent.
              Raspunde instant la orice intrebare, califica lead-uri si programeaza intalniri - non-stop.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Vreau un Chatbot AI
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+40753933660"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 rounded-full text-white font-semibold hover:bg-zinc-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Suna Acum
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
              De Ce sa Alegi Chatbot-ul Nostru AI?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Tehnologie de ultima generatie, antrenat specific pentru afacerea ta
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
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Chatbot AI pentru Orice Industrie
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Rezultate dovedite in diverse domenii de activitate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                    {useCase.savings}
                  </span>
                </div>
                <p className="text-zinc-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Preturi Transparente, Fara Surprize
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Investitie unica + mentenanta optionala. ROI garantat in 90 de zile.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pricing.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-2 border-purple-500'
                    : 'bg-zinc-900/50 border border-zinc-800'
                }`}
              >
                {plan.popular && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500 text-white text-sm font-medium mb-4">
                    <Star className="w-4 h-4" /> Cel Mai Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}€</span>
                  <span className="text-zinc-400">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-zinc-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
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
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-500/30"
          >
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gata sa Automatizezi Vanzarile?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Programeaza o consultatie gratuita de 30 minute si iti aratam exact cum poate
              chatbot-ul AI sa creasca veniturile afacerii tale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-100 transition-colors"
              >
                Consultatie Gratuita
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
        <Link
          href="/"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          ← Inapoi la AI Front Desk
        </Link>
      </div>
    </main>
  )
}
