'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Building2, User } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Alexandru Popescu',
    role: 'CEO',
    company: 'TechStart Romania',
    image: null,
    rating: 5,
    text: 'Chatbot-ul AI ne-a revolutionat customer service-ul. Raspundem instant la 80% din intrebari, iar echipa se concentreaza pe cazurile complexe. ROI-ul a fost vizibil in prima luna.',
    results: '+80% eficienta suport',
  },
  {
    id: 2,
    name: 'Maria Ionescu',
    role: 'Founder',
    company: 'Beauty Studio Premium',
    image: null,
    rating: 5,
    text: 'Website-ul nou si sistemul de programari automate ne-au crescut rezervarile cu 150%. Clientele apreciaza ca pot programa vizite 24/7 direct pe WhatsApp.',
    results: '+150% rezervari',
  },
  {
    id: 3,
    name: 'Andrei Dumitrescu',
    role: 'Director Operatiuni',
    company: 'LogiTrans SRL',
    image: null,
    rating: 5,
    text: 'Software-ul ERP personalizat ne-a eliminat 90% din munca manuala. Acum gestionam 3x mai multe comenzi cu aceeasi echipa. Investitia s-a amortizat in 2 luni.',
    results: '3x productivitate',
  },
  {
    id: 4,
    name: 'Elena Stancu',
    role: 'Marketing Manager',
    company: 'FashionHub',
    image: null,
    rating: 5,
    text: 'Automatizarile pentru Instagram si Messenger ne-au adus 200+ lead-uri noi lunar. Chatbot-ul raspunde perfect in romana si converteste vizitatorii in clienti.',
    results: '+200 leads/luna',
  },
  {
    id: 5,
    name: 'Mihai Radu',
    role: 'Owner',
    company: 'Clinica Dentara SmilePro',
    image: null,
    rating: 5,
    text: 'De cand avem chatbot-ul, nu mai pierdem nicio programare. Pacientii primesc reminder-uri automate si pot reprograma singuri. Echipa e mult mai relaxata.',
    results: '-95% programari pierdute',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1
    })
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <section id="portofoliu" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            Rezultate Reale
          </span>
          <h2 className="section-title text-white mb-6">
            Ce Spun <span className="gradient-text">Clientii Nostri</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Peste 50 de afaceri din Romania au ales sa creasca cu ajutorul nostru.
            Iata povestile lor de succes.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-cyan-500/50 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-cyan-500/50 transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="glass-card rounded-3xl p-8 md:p-12 h-full">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 flex-grow">
                      "{testimonials[currentIndex].text}"
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                          <User className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">
                            {testimonials[currentIndex].name}
                          </h4>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>{testimonials[currentIndex].role}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Building2 className="w-3 h-3" />
                              {testimonials[currentIndex].company}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Results Badge */}
                      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        <span className="text-cyan-400 font-semibold">
                          {testimonials[currentIndex].results}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-cyan-500 to-purple-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '50+', label: 'Proiecte Livrate' },
            { value: '100%', label: 'Clienti Multumiti' },
            { value: '90', label: 'Zile ROI Garantat' },
            { value: '24/7', label: 'Suport Disponibil' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center p-6 glass-card rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
