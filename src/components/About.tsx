'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Rocket,
  Target,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

const values = [
  {
    icon: Rocket,
    title: 'Inovatie Continua',
    description:
      'Utilizam cele mai noi tehnologii AI si framework-uri pentru solutii de ultima generatie.',
  },
  {
    icon: Target,
    title: 'Rezultate Masurabile',
    description:
      'Fiecare proiect vine cu metrici clare si ROI demonstrabil in primele 90 de zile.',
  },
  {
    icon: Users,
    title: 'Parteneriat Real',
    description:
      'Nu suntem doar furnizori, ci parteneri dedicati succesului tau pe termen lung.',
  },
  {
    icon: Award,
    title: 'Excelenta Garantata',
    description:
      'Garantie completa pentru toate proiectele. Fara compromisuri la calitate.',
  },
]

const achievements = [
  { number: '50+', label: 'Proiecte Livrate', icon: CheckCircle },
  { number: '98%', label: 'Clienti Multumiti', icon: TrendingUp },
  { number: '150%', label: 'Crestere Medie', icon: Lightbulb },
  { number: '24/7', label: 'Suport AI Activ', icon: Users },
]

const process = [
  {
    step: '01',
    title: 'Consultatie',
    description: 'Analizam nevoile si obiectivele afacerii tale in detaliu.',
  },
  {
    step: '02',
    title: 'Strategie',
    description: 'Cream un plan personalizat cu timeline si buget clar.',
  },
  {
    step: '03',
    title: 'Dezvoltare',
    description: 'Construim solutia cu feedback iterativ si transparenta totala.',
  },
  {
    step: '04',
    title: 'Lansare',
    description: 'Livram, testam si oferim training complet pentru echipa ta.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            Despre Noi
          </span>
          <h2 className="section-title text-white mb-6">
            De Ce <span className="gradient-text">AI Front Desk?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Suntem o echipa de experti in AI si dezvoltare software dedicata
            transformarii digitale a afacerilor din Romania si Europa.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Transformam <span className="gradient-text">Idei in Realitate</span>
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                AI Front Desk s-a nascut din dorinta de a face tehnologia AI accesibila
                pentru orice afacere, indiferent de marime. Am observat ca multe companii
                pierd oportunitati valoroase din lipsa instrumentelor digitale potrivite.
              </p>
              <p>
                Combinam expertiza tehnica cu o intelegere profunda a nevoilor de business
                pentru a livra solutii care chiar functioneaza. Fiecare proiect este tratat
                ca un parteneriat pe termen lung.
              </p>
              <p>
                De la website-uri moderne la chatbots AI care raspund 24/7, ne asiguram ca
                afacerea ta are toate instrumentele necesare pentru a prospera in era digitala.
              </p>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hai sa Vorbim
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{item.number}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Valorile Noastre
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-4">
            Procesul Nostru
          </h3>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            4 pasi simpli de la idee la implementare
          </p>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 -translate-y-1/2" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.15 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-purple-600 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
