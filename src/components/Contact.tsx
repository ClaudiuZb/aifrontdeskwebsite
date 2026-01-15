'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle,
  Loader2,
} from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, replace with actual form submission
    setFormState('success')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })

    // Reset after 3 seconds
    setTimeout(() => setFormState('idle'), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefon',
      value: '0753 933 660',
      href: 'tel:+40753933660',
      color: 'cyan',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Scrie-ne direct',
      href: 'https://wa.me/40753933660',
      color: 'green',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@aifrontdesk.ro',
      href: 'mailto:contact@aifrontdesk.ro',
      color: 'purple',
    },
    {
      icon: Clock,
      label: 'Program',
      value: 'L-V: 09:00 - 18:00',
      href: null,
      color: 'pink',
    },
  ]

  const services = [
    { value: '', label: 'Selecteaza serviciul...' },
    { value: 'website', label: 'Website Profesional (500€)' },
    { value: 'ecommerce', label: 'Magazin Online (700€)' },
    { value: 'chatbot-starter', label: 'Chatbot Starter Pack (500€)' },
    { value: 'chatbot-business', label: 'Chatbot Business Pack (1000€)' },
    { value: 'chatbot-enterprise', label: 'Chatbot Enterprise (1500€+)' },
    { value: 'software', label: 'Software la Comanda (2500€)' },
    { value: 'combo-essential', label: 'Essential Pack (1000€)' },
    { value: 'combo-complete', label: 'Complete Pack (1200€)' },
    { value: 'custom', label: 'Altceva / Nu stiu exact' },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
            Hai sa Vorbim
          </span>
          <h2 className="section-title text-white mb-6">
            Gata sa <span className="gradient-text">Automatizam Impreuna?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Completeaza formularul sau contacteaza-ne direct. Raspundem in maxim 2 ore
            in timpul programului.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Trimite-ne un mesaj
              </h3>

              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Mesaj trimis cu succes!
                  </h4>
                  <p className="text-gray-400">
                    Te contactam in maxim 2 ore. Multumim!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Nume complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                        placeholder="Ion Popescu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                        placeholder="07XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                      placeholder="email@exemplu.ro"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Ce serviciu te intereseaza?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {services.map((service) => (
                        <option
                          key={service.value}
                          value={service.value}
                          className="bg-dark-800"
                        >
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Mesajul tau
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                      placeholder="Spune-ne mai multe despre afacerea ta si ce ai nevoie..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: formState === 'loading' ? 1 : 0.98 }}
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Trimite Mesajul
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block glass-card rounded-2xl p-5 hover:border-cyan-500/50 transition-all group"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl bg-${item.color}-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                      >
                        <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                      </div>
                      <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </a>
                  ) : (
                    <div className="glass-card rounded-2xl p-5">
                      <div
                        className={`w-10 h-10 rounded-xl bg-${item.color}-500/20 flex items-center justify-center mb-3`}
                      >
                        <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                      </div>
                      <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card rounded-3xl p-8 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Preferi WhatsApp?
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Raspundem in maxim 30 minute. Scrie-ne direct si hai sa discutam
                    despre proiectul tau!
                  </p>
                  <a
                    href="https://wa.me/40753933660?text=Buna! Ma intereseaza serviciile AI Front Desk."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full font-semibold text-white transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Deschide WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Locatie</span>
              </div>
              <p className="text-gray-400">
                Lucram 100% remote cu clienti din toata Romania si Europa. Indiferent
                unde esti, putem colabora eficient.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
