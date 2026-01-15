'use client'

import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Heart
} from 'lucide-react'

const footerLinks = {
  servicii: [
    { name: 'Website Profesional', href: '#preturi' },
    { name: 'Magazin Online', href: '#preturi' },
    { name: 'Chatbot AI', href: '#preturi' },
    { name: 'Automatizari Business', href: '#preturi' },
    { name: 'Software la Comanda', href: '#preturi' },
  ],
  companie: [
    { name: 'Despre Noi', href: '#hero' },
    { name: 'Portofoliu', href: '#portofoliu' },
    { name: 'Preturi', href: '#preturi' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Termeni si Conditii', href: '/termeni' },
    { name: 'Politica de Confidentialitate', href: '/confidentialitate' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Cookies', href: '/cookies' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/aifrontdesk' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/aifrontdesk' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/aifrontdesk' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-900 pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 blur-lg opacity-50" />
              </div>
              <div>
                <span className="text-white font-bold text-xl">AI Front Desk</span>
                <p className="text-xs text-gray-400">Automatizare Inteligenta</p>
              </div>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformam afacerile din Romania cu website-uri moderne, chatbots AI
              inteligenti si software personalizat. ROI garantat in 90 de zile.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+40753933660"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>0753 933 660</span>
              </a>
              <a
                href="mailto:contact@aifrontdesk.ro"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@aifrontdesk.ro</span>
              </a>
              <a
                href="https://wa.me/40753933660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>

          {/* Servicii */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicii</h4>
            <ul className="space-y-3">
              {footerLinks.servicii.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Companie */}
          <div>
            <h4 className="text-white font-semibold mb-4">Companie</h4>
            <ul className="space-y-3">
              {footerLinks.companie.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Primeste sfaturi despre AI si automatizare
              </h4>
              <p className="text-gray-400">
                Aboneaza-te la newsletter-ul nostru. Fara spam, doar valoare.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Email-ul tau"
                className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold text-white whitespace-nowrap hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Aboneaza-te
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© 2024 AI Front Desk. Toate drepturile rezervate.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">
              Facut cu <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> in Romania
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Social Links */}
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
