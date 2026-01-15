'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, Sparkles, ArrowRight, Info } from 'lucide-react'

const pricingTabs = [
  { id: 'websites', label: 'Website-uri' },
  { id: 'automation', label: 'Automatizari AI' },
  { id: 'software', label: 'Software' },
  { id: 'combo', label: 'Pachete Complete' },
]

const pricingData = {
  websites: [
    {
      name: 'Website Profesional',
      price: '500',
      description: 'Perfect pentru afaceri care vor prezenta online impecabila',
      features: [
        'Design premium personalizat',
        'Pana la 10 pagini optimizate',
        'Mobile responsive garantat',
        'SSL & Securitate',
        'Training pentru actualizari',
        '30 zile suport gratuit',
        'Integrare WhatsApp/Messenger',
        'Google Analytics instalat',
      ],
      cta: 'Incepe Acum',
    },
    {
      name: 'Magazin Online',
      price: '700',
      description: 'Solutia completa pentru vanzari online',
      popular: true,
      features: [
        'Toate beneficiile Website +',
        'Sistem complet e-commerce',
        'Plati online integrate',
        'Gestiune stoc si comenzi',
        'Automatizari pentru vanzari',
        'Email-uri automate clienti',
        'Sistem cupoane si reduceri',
        'Rapoarte vanzari',
      ],
      cta: 'Incepe Acum',
    },
  ],
  automation: [
    {
      name: 'Starter Pack',
      price: '500',
      description: 'Testati puterea automatizarii fara riscuri',
      features: [
        '2 Chatbots la alegere',
        'Website + WhatsApp SAU',
        'Messenger + Instagram',
        'Raspunde 15-20 intrebari',
        'Programari simple',
        'Trimite documente/preturi',
        'Setup in 10-14 zile',
        '1 luna suport inclus',
      ],
      cta: 'Incepe Acum',
    },
    {
      name: 'Business Pack',
      price: '1000',
      description: 'Tot ce ai nevoie pentru automatizare completa',
      popular: true,
      badge: '90% aleg asta',
      features: [
        'Chatbot pe TOATE canalele',
        '3-5 automatizari la alegere',
        'Procesare documente AI',
        'Email marketing inteligent',
        'Lead management complet',
        'Conversatii RO + EN',
        'Training echipa 4 ore',
        '2 luni suport premium',
      ],
      cta: 'Cel Mai Popular',
    },
    {
      name: 'Enterprise',
      price: '1500',
      priceNote: 'de la',
      description: 'Pentru nevoi complexe si integrari speciale',
      features: [
        'Peste 5 automatizari complexe',
        'Integrari ERP/CRM enterprise',
        'Dezvoltari custom specifice',
        'SLA garantat',
        'Suport dedicat',
        'Consultanta continua',
        'Setup 30-45 zile',
        'Account manager dedicat',
      ],
      cta: 'Cere Oferta',
    },
  ],
  software: [
    {
      name: 'Software la Comanda',
      price: '2500',
      description: 'Un sistem. Un pret. Problema rezolvata.',
      popular: true,
      badge: 'Pret Fix Garantat',
      features: [
        'ERP SAU CRM SAU App Mobile',
        'Pana la 20 utilizatori',
        'Training complet echipa',
        'Documentatie in romana',
        'Suport 6 luni inclus',
        'Garantie 12 luni bug-uri',
        'Codul sursa 100% al tau',
        'Hosting primul an inclus',
      ],
      cta: 'Discuta Proiectul',
    },
  ],
  combo: [
    {
      name: 'Essential Pack',
      price: '1000',
      description: 'Website Premium + Chatbot Inteligent',
      features: [
        'Website Design 2025',
        'Pana la 10 pagini',
        'Chatbot Website',
        'Chatbot WhatsApp',
        'Programari automate',
        'Training 2 ore',
        '30 zile suport',
        'Garantie 30 zile',
      ],
      cta: 'Alege Essential',
    },
    {
      name: 'Complete Pack',
      price: '1200',
      description: 'Tot din Essential + Social Media Automation',
      popular: true,
      badge: 'Best Value',
      features: [
        'Tot din Essential +',
        'Messenger automation',
        'Instagram DM automation',
        'Raspuns la comentarii',
        'Chatbot multilingv',
        'A/B testing mesaje',
        'Lead scoring automat',
        '60 zile suport premium',
      ],
      cta: 'Cel Mai Popular',
    },
  ],
}

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState('automation')

  return (
    <section id="preturi" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
            Preturi Transparente
          </span>
          <h2 className="section-title text-white mb-6">
            Pachete Clare, <span className="gradient-text">Fara Surprize</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Alege pachetul potrivit pentru nevoile tale. Toate preturile includ
            implementare, training si suport.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {pricingTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'glass text-gray-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`grid gap-6 ${
              pricingData[activeTab as keyof typeof pricingData].length === 1
                ? 'max-w-lg mx-auto'
                : pricingData[activeTab as keyof typeof pricingData].length === 2
                ? 'md:grid-cols-2 max-w-4xl mx-auto'
                : 'md:grid-cols-3'
            }`}
          >
            {pricingData[activeTab as keyof typeof pricingData].map(
              (plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                >
                  {/* Popular Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-sm font-semibold shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div
                    className={`h-full glass-card rounded-3xl p-8 ${
                      plan.popular
                        ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-purple-500/5'
                        : ''
                    }`}
                  >
                    {/* Plan Name */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-8">
                      {plan.priceNote && (
                        <span className="text-gray-400 text-sm">{plan.priceNote}</span>
                      )}
                      <span className="text-4xl font-bold gradient-text">
                        {plan.price}
                      </span>
                      <span className="text-gray-400">EUR</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-cyan-400" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.a
                      href="#contact"
                      className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                          : 'glass border border-white/10 text-white hover:border-cyan-500/50 hover:bg-white/5'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.cta}
                    </motion.a>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </AnimatePresence>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: 'Garantie 30-60 zile', icon: '🛡️' },
              { label: 'ROI in 90 zile', icon: '📈' },
              { label: 'Suport Real', icon: '💬' },
              { label: 'Fara costuri ascunse', icon: '✅' },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-gray-400"
              >
                <span className="text-xl">{badge.icon}</span>
                <span className="text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <Info className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ai nevoie de un pachet personalizat?
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Discutam si cream o solutie exact pe nevoile afacerii tale. Consultatie
              gratuita, fara obligatii.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Solicita Oferta Personalizata
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
