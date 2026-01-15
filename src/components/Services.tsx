'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Globe,
  Bot,
  Code2,
  Sparkles,
  ArrowRight,
  Zap,
  MessageSquare,
  FileText,
  Mail,
  Bell,
  TrendingUp,
} from 'lucide-react'

const services = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Website-uri Profesionale',
    subtitle: 'Design Modern 2026',
    description:
      'Website-uri care convertesc vizitatorii in clienti. Design premium, mobile-first, SEO optimizat si rapid ca glontul.',
    features: [
      'Design premium personalizat',
      'Responsive pe toate device-urile',
      'SEO integrat pentru Google',
      'Sub 2 secunde loading',
    ],
    price: 'de la 500€',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'automation',
    icon: Bot,
    title: 'Automatizari AI',
    subtitle: 'Chatbots & Workflows',
    description:
      'Asistenti virtuali 24/7 care raspund instant la intrebari, iau programari si califica clientii automat.',
    features: [
      'Chatbot pe Website + WhatsApp',
      'Procesare documente cu AI',
      'Email marketing inteligent',
      'Notificari automate',
    ],
    price: 'de la 500€',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'software',
    icon: Code2,
    title: 'Software la Comanda',
    subtitle: 'ERP, CRM & Apps',
    description:
      'Sisteme personalizate care rezolva exact problemele afacerii tale. De la Excel la control total.',
    features: [
      'ERP complet personalizat',
      'CRM cu pipeline vizual',
      'Aplicatii Mobile iOS/Android',
      'Platforme Web complexe',
    ],
    price: '2500€ pret fix',
    color: 'pink',
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    id: 'combo',
    icon: Sparkles,
    title: 'Website + AI Chatbots',
    subtitle: 'Pachet Complet',
    description:
      'Solutia completa pentru transformare digitala. Website modern + asistent virtual care nu doarme niciodata.',
    features: [
      'Website Premium inclus',
      'Chatbot Website + WhatsApp',
      'Facebook & Instagram automation',
      'ROI garantat in 45 zile',
    ],
    price: 'de la 1000€',
    color: 'green',
    gradient: 'from-green-500 to-cyan-500',
    popular: true,
  },
]

const automationFeatures = [
  {
    icon: MessageSquare,
    title: 'Chatbot 24/7',
    description: 'Raspunde instant pe Website, WhatsApp, Messenger, Instagram',
  },
  {
    icon: FileText,
    title: 'Procesare Documente',
    description: 'Extrage automat date din facturi, CV-uri, contracte',
  },
  {
    icon: Mail,
    title: 'Email Marketing AI',
    description: 'Follow-up automat, campanii personalizate, A/B testing',
  },
  {
    icon: Bell,
    title: 'Notificari Inteligente',
    description: 'Alerte pentru review-uri, lead-uri fierbinti, urgente',
  },
  {
    icon: TrendingUp,
    title: 'Lead Management',
    description: 'Captura, calificare si nurturing automat al lead-urilor',
  },
  {
    icon: Zap,
    title: 'Integrari 1000+ Apps',
    description: 'Conectare cu CRM, ERP, Google, contabilitate si altele',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicii" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            Serviciile Noastre
          </span>
          <h2 className="section-title text-white mb-6">
            Solutii Complete pentru{' '}
            <span className="gradient-text">Transformare Digitala</span>
          </h2>
          <p className="section-subtitle mx-auto">
            De la website-uri moderne la automatizari AI complexe - tot ce ai nevoie
            pentru a-ti creste afacerea in era digitala.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${service.popular ? 'md:col-span-2' : ''}`}
            >
              <div
                className={`glass-card rounded-3xl p-8 h-full ${
                  service.popular ? 'animated-border' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-green-500/25">
                    Cel Mai Popular
                  </div>
                )}

                <div className={`${service.popular ? 'md:flex md:items-start md:gap-12' : ''}`}>
                  <div className={`${service.popular ? 'md:flex-1' : ''}`}>
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className={`text-${service.color}-400 font-medium`}>
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                          <div
                            className={`w-5 h-5 rounded-full bg-${service.color}-500/20 flex items-center justify-center`}
                          >
                            <div className={`w-2 h-2 rounded-full bg-${service.color}-400`} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${service.popular ? 'md:w-72 md:text-center md:pt-10' : ''}`}>
                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-3xl font-bold gradient-text">
                        {service.price}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="#contact"
                      className={`group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-${service.color}-500/25 transition-all`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Solicita Oferta
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Automation Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Ce poti automatiza cu <span className="gradient-text">AI</span>?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:border-cyan-500/50"
              >
                <feature.icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Nu stii ce serviciu ti se potriveste?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Solicita o consultatie gratuita
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
