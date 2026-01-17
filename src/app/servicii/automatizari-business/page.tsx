'use client'

import { motion } from 'framer-motion'
import {
  Cpu,
  Workflow,
  Clock,
  Zap,
  Database,
  Shield,
  TrendingUp,
  Check,
  ArrowRight,
  Phone,
  Settings,
  RefreshCcw,
  FileSpreadsheet,
  Mail,
  Calendar,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Workflow,
    title: 'Workflow-uri Automate',
    description: 'Automatizam procesele repetitive: facturare, rapoarte, notificari, email-uri.',
  },
  {
    icon: Database,
    title: 'Integrari Multiple',
    description: 'Conectam toate tool-urile tale: CRM, ERP, email, calendar, contabilitate.',
  },
  {
    icon: Zap,
    title: 'Executie Instant',
    description: 'Zero intarzieri. Automatizarile ruleaza in milisecunde, 24/7.',
  },
  {
    icon: Shield,
    title: 'Securitate Enterprise',
    description: 'Date criptate, backup automat, conformitate GDPR garantata.',
  },
  {
    icon: RefreshCcw,
    title: 'Sincronizare Real-Time',
    description: 'Datele se actualizeaza instant intre toate sistemele conectate.',
  },
  {
    icon: TrendingUp,
    title: 'Rapoarte Automate',
    description: 'Primesti rapoarte zilnice/saptamanale fara sa misti un deget.',
  },
]

const automations = [
  {
    icon: FileSpreadsheet,
    title: 'Facturare Automata',
    description: 'Genereaza si trimite facturi automat dupa fiecare vanzare sau serviciu prestat.',
    savings: '10+ ore/saptamana',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Secvente de email-uri personalizate bazate pe comportamentul clientilor.',
    savings: '5x mai multe conversii',
  },
  {
    icon: Calendar,
    title: 'Programari Automate',
    description: 'Clientii isi fac singuri programari, primesc reminder-uri, reprogrameaza.',
    savings: '90% mai putine no-show',
  },
  {
    icon: Database,
    title: 'Sincronizare Date',
    description: 'Clientii din website ajung automat in CRM, newsletter, si contabilitate.',
    savings: 'Zero erori manuale',
  },
  {
    icon: Settings,
    title: 'Onboarding Clienti',
    description: 'Flux automat pentru clienti noi: documente, acces, training, follow-up.',
    savings: '80% timp economisit',
  },
  {
    icon: TrendingUp,
    title: 'Lead Scoring AI',
    description: 'AI-ul califica automat lead-urile si le prioritizeaza pentru echipa de vanzari.',
    savings: '3x mai multe vanzari',
  },
]

const pricing = [
  {
    name: 'Starter',
    price: '1000',
    period: 'implementare',
    features: [
      '5 Automatizari custom',
      'Integrare 3 platforme',
      'Training echipa',
      'Documentatie completa',
      'Suport 30 zile',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: '2500',
    period: 'implementare',
    features: [
      'Automatizari nelimitate',
      'Integrari nelimitate',
      'AI pentru procesare date',
      'Dashboard custom',
      'Suport prioritar 6 luni',
      'Optimizari continue',
    ],
    popular: true,
  },
]

export default function AutomatizariPage() {
  return (
    <main className="min-h-screen bg-[#030014]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-3xl" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <Cpu className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">Automatizari Business Romania</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Elimina Munca Repetitiva cu{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Automatizari Inteligente
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Conectam toate sistemele tale si automatizam procesele care iti consuma timpul.
              Tu te concentrezi pe cresterea afacerii, noi ne ocupam de restul.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Vreau Automatizari
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
              De Ce Automatizari cu AI Front Desk?
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Experienta in sute de implementari, tehnologie de ultima generatie
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
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations Examples */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Exemple de Automatizari Populare
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Iata ce poti automatiza in afacerea ta incepand de azi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((automation, index) => (
              <motion.div
                key={automation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 hover:border-yellow-500/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <automation.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                    {automation.savings}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{automation.title}</h3>
                <p className="text-zinc-400">{automation.description}</p>
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
              Investitie cu Return Garantat
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Majoritatea clientilor recupereaza investitia in primele 2-3 luni
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
                    ? 'bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-2 border-yellow-500'
                    : 'bg-zinc-900/50 border border-zinc-800'
                }`}
              >
                {plan.popular && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500 text-black text-sm font-medium mb-4">
                    <Zap className="w-4 h-4" /> Recomandat
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
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border border-yellow-500/30"
          >
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gata sa Economisesti 20+ Ore pe Saptamana?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Hai sa analizam impreuna procesele tale si sa vedem ce putem automatiza.
              Consultatie gratuita, fara obligatii.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-100 transition-colors"
              >
                Analiza Gratuita
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
