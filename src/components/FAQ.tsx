'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react'

const faqs = [
  {
    category: 'Chatbots & Automatizari',
    questions: [
      {
        q: 'Cat dureaza implementarea unui chatbot AI?',
        a: 'Starter Pack: 10-14 zile lucratoare. Business Pack: 20-30 zile. Enterprise: 30-45 zile. Timpul include analiza nevoilor, configurare, testare si training-ul echipei tale.',
      },
      {
        q: 'Functioneaza chatbot-ul in limba romana?',
        a: 'Da, AI-ul nostru intelege perfect limba romana, inclusiv expresii locale si regionalisme. Raspunde natural, nu robotic, si poate gestiona conversatii si in engleza simultan.',
      },
      {
        q: 'Ce se intampla daca chatbot-ul nu stie raspunsul?',
        a: 'Chatbot-ul este antrenat sa recunoasca limitele sale. Cand intalneste o intrebare complexa, transfera automat conversatia catre echipa ta sau colecteaza datele clientului pentru follow-up.',
      },
      {
        q: 'Pot vedea conversatiile chatbot-ului?',
        a: 'Absolut! Ai acces la un dashboard complet unde vezi toate conversatiile, statistici, rate de conversie si poti interveni oricand in chat-uri live.',
      },
    ],
  },
  {
    category: 'Website-uri',
    questions: [
      {
        q: 'Ce primesc in pachetul de website?',
        a: 'Design personalizat, pana la 10 pagini optimizate, mobile responsive, SSL, training pentru actualizari, 30 zile suport, integrare WhatsApp/Messenger si Google Analytics.',
      },
      {
        q: 'Pot actualiza singur continutul site-ului?',
        a: 'Da! Oferim training complet si documentatie video. Vei putea modifica texte, imagini, preturi si adauga produse fara cunostinte tehnice.',
      },
      {
        q: 'Site-ul va fi optimizat pentru Google?',
        a: 'Toate site-urile noastre sunt construite cu SEO in minte: viteza optima, structura corecta, meta tags, schema markup si integrare Google Search Console.',
      },
    ],
  },
  {
    category: 'Software la Comanda',
    questions: [
      {
        q: 'Ce inseamna pretul fix de 2500 EUR?',
        a: 'Pretul include: un sistem complet (ERP, CRM sau App Mobile), pana la 20 utilizatori, training, documentatie, 6 luni suport, garantie 12 luni si hosting primul an.',
      },
      {
        q: 'Primesc codul sursa?',
        a: 'Da, 100%! Codul sursa iti apartine integral. Nu esti legat de noi pentru modificari viitoare, desi recomandam sa continuam colaborarea pentru suport.',
      },
      {
        q: 'Cat dureaza dezvoltarea?',
        a: 'In general 4-8 saptamani, in functie de complexitate. Stabilim timeline-ul exact dupa analiza initiala si il respectam - avem penalitati de intarziere in contract.',
      },
    ],
  },
  {
    category: 'Preturi & Garantii',
    questions: [
      {
        q: 'Care este ROI-ul pentru automatizari AI?',
        a: 'Clientii nostri recupereaza investitia in 2-3 luni. Garantam ROI in 90 de zile sau optimizam gratuit pana obtii rezultatele promise.',
      },
      {
        q: 'Exista costuri ascunse?',
        a: 'Nu! Preturile afisate includ tot: implementare, training, suport initial. Singurele costuri aditionale pot fi: hosting lunar (dupa primul an) sau extensii specifice cerute de tine.',
      },
      {
        q: 'Ce garantii oferiti?',
        a: 'Garantie 30-60 zile "Banii Inapoi" daca nu esti multumit. Garantie 12 luni pentru bug-uri la software. ROI garantat in 90 zile pentru automatizari.',
      },
      {
        q: 'Cum functioneaza plata?',
        a: '50% avans la semnarea contractului, 50% la livrare si acceptanta. Pentru proiecte mari, putem stabili transe intermediare.',
      },
    ],
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section id="faq" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
            <HelpCircle className="inline w-4 h-4 mr-2" />
            Intrebari Frecvente
          </span>
          <h2 className="section-title text-white mb-6">
            Ai <span className="gradient-text">Intrebari?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Gaseste raspunsuri la cele mai comune intrebari. Nu ai gasit ce cauti?
            Contacteaza-ne direct!
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
                {category.category}
              </h3>

              {/* Questions */}
              <div className="space-y-3">
                {category.questions.map((item, qIndex) => {
                  const key = `${catIndex}-${qIndex}`
                  const isOpen = openItems[key]

                  return (
                    <motion.div
                      key={key}
                      className={`glass-card rounded-2xl overflow-hidden transition-all ${
                        isOpen ? 'border-cyan-500/50' : ''
                      }`}
                      initial={false}
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full p-5 flex items-center justify-between text-left"
                      >
                        <span className="text-white font-medium pr-4">{item.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            isOpen
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                              : 'bg-white/10'
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4 text-white" />
                          ) : (
                            <Plus className="w-4 h-4 text-white" />
                          )}
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-5 pb-5">
                              <div className="pt-3 border-t border-white/10">
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Nu ai gasit raspunsul?
            </h3>
            <p className="text-gray-400 mb-8">
              Scrie-ne pe WhatsApp si iti raspundem in maxim 2 ore. Sau programeaza o
              consultatie gratuita de 15 minute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/40753933660"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full font-semibold text-white transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Direct
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 glass border border-white/20 hover:border-cyan-500/50 rounded-full font-semibold text-white transition-all"
              >
                Programeaza Consultatie
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
