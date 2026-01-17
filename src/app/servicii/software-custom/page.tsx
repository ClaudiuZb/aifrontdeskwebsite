'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  TrendingUp,
  Check,
  ArrowRight,
  Phone,
  Layers,
  GitBranch,
  Server,
  Smartphone,
  Globe,
  Sparkles,
  Cpu,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Layers,
    title: 'Arhitectura Scalabila',
    description: 'Cod modular care creste odata cu afacerea ta. De la 10 la 10.000 utilizatori.',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Deployment pe AWS, Google Cloud sau Azure. 99.99% uptime garantat.',
  },
  {
    icon: Shield,
    title: 'Securitate Enterprise',
    description: 'Autentificare avansata, encriptie date, audit logs, conformitate GDPR.',
  },
  {
    icon: Database,
    title: 'Baze de Date Optimizate',
    description: 'PostgreSQL, MongoDB, Redis - alegem tech stack-ul potrivit pentru tine.',
  },
  {
    icon: Zap,
    title: 'API-uri Performante',
    description: 'REST si GraphQL APIs cu response time sub 100ms. Documentatie completa.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline',
    description: 'Deployment automat, testing integrat, zero downtime updates.',
  },
]

const solutions = [
  {
    icon: Server,
    title: 'Aplicatii Web Enterprise',
    description: 'Dashboards, portale clienti, sisteme interne - orice ai nevoie.',
    examples: ['CRM Custom', 'ERP Modular', 'Portal Clienti', 'Inventory Management'],
  },
  {
    icon: Smartphone,
    title: 'Aplicatii Mobile',
    description: 'iOS si Android din acelasi codebase cu React Native sau Flutter.',
    examples: ['Apps B2B', 'Apps B2C', 'Internal Tools', 'Field Service Apps'],
  },
  {
    icon: Cpu,
    title: 'Integrari AI/ML',
    description: 'Adaugam inteligenta artificiala in procesele tale de business.',
    examples: ['Predictive Analytics', 'NLP Processing', 'Computer Vision', 'Recommendation Engine'],
  },
  {
    icon: Globe,
    title: 'Platforme SaaS',
    description: 'Transformam ideea ta intr-un produs software vandabil.',
    examples: ['Multi-tenant Architecture', 'Subscription Billing', 'White Label', 'API Marketplace'],
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Intelegem in profunzime nevoile tale, procesele existente si obiectivele.',
  },
  {
    step: '02',
    title: 'Arhitectura',
    description: 'Proiectam solutia tehnica optima: tech stack, integrari, securitate.',
  },
  {
    step: '03',
    title: 'Dezvoltare Agile',
    description: 'Sprint-uri de 2 saptamani cu demo-uri. Vezi progresul in timp real.',
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Testare automata + manuala. Unit tests, integration tests, UAT.',
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'Lansare cu zero downtime. Monitoring, alerting, backup-uri.',
  },
  {
    step: '06',
    title: 'Support & Evolutie',
    description: 'Mentenanta continua, feature-uri noi, scalare pe masura ce cresti.',
  },
]

const pricing = [
  {
    name: 'MVP Startup',
    price: '5000',
    period: 'proiect',
    description: 'Pentru startup-uri care vor sa valideze rapid',
    features: [
      'Aplicatie web functionala',
      'Design UI/UX basic',
      'Autentificare utilizatori',
      'Dashboard admin',
      'Deployment cloud',
      'Documentatie tehnica',
      'Suport 1 luna',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: '15000',
    period: 'proiect',
    description: 'Pentru companii cu nevoi specifice',
    features: [
      'Aplicatie complexa custom',
      'Design UI/UX premium',
      'Integrari multiple',
      'API-uri documentate',
      'Mobile responsive',
      'Testing complet',
      'Training echipa',
      'Suport 6 luni',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'negociabil',
    description: 'Pentru corporatii si proiecte mari',
    features: [
      'Solutie full-scale',
      'Arhitectura microservices',
      'High availability',
      'Aplicatii mobile native',
      'AI/ML integrat',
      'Security audit',
      'SLA garantat',
      'Echipa dedicata',
    ],
    popular: false,
  },
]

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-[#030014]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-3xl" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <Code className="w-5 h-5 text-red-400" />
              <span className="text-red-300 text-sm font-medium">Software Development Romania</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Software Custom care{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Rezolva Probleme Reale
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Nu te mai adapta la software-ul altora. Construim exact ce ai nevoie -
              de la aplicatii web la platforme enterprise complete.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Discuta Proiectul
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+40753933660"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 rounded-full text-white font-semibold hover:bg-zinc-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Consultatie Tehnica
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
              Standarde de Dezvoltare 2026
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Folosim cele mai noi practici si tehnologii pentru software robust
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
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tipuri de Solutii Software
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              De la MVP-uri pentru startup-uri la platforme enterprise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                    <p className="text-zinc-400">{solution.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {solution.examples.map((example) => (
                    <span
                      key={example}
                      className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-sm"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Procesul Nostru de Dezvoltare
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Metodologie Agile cu transparenta totala pe tot parcursul proiectului
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 relative"
              >
                <span className="text-5xl font-bold text-red-500/20 absolute top-4 right-4">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
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
              Investitie in Software Custom
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Preturile variaza in functie de complexitate. Iata cateva repere:
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
                    ? 'bg-gradient-to-br from-red-900/50 to-orange-900/50 border-2 border-red-500'
                    : 'bg-zinc-900/50 border border-zinc-800'
                }`}
              >
                {plan.popular && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-500 text-white text-sm font-medium mb-4">
                    <TrendingUp className="w-4 h-4" /> Cel Mai Ales
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-zinc-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  {plan.price === 'Custom' ? (
                    <span className="text-3xl font-bold text-white">Custom</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-white">{plan.price}€+</span>
                      <span className="text-zinc-400">/{plan.period}</span>
                    </>
                  )}
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
                  Solicita Estimare
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
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-red-900/50 to-orange-900/50 border border-red-500/30"
          >
            <Sparkles className="w-12 h-12 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ai o Idee de Software?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Hai sa o discutam. Consultatie tehnica gratuita in care analizam fezabilitatea,
              estimam costurile si planificam dezvoltarea.
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
        <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
          ← Inapoi la AI Front Desk
        </Link>
      </div>
    </main>
  )
}
