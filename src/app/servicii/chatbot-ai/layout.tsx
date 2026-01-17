import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chatbot AI Romania | Asistent Virtual 24/7 pentru Afaceri',
  description:
    'Cel mai avansat chatbot AI din Romania. Disponibil 24/7 pe WhatsApp, Facebook, Instagram si website. Raspunde in romana, califica lead-uri si programeaza intalniri automat. ROI garantat.',
  keywords: [
    'chatbot AI Romania',
    'chatbot WhatsApp business',
    'asistent virtual AI',
    'chatbot inteligent',
    'automatizare conversatii',
    'chatbot romana',
    'AI customer service',
    'chatbot pentru afaceri',
    'bot WhatsApp Romania',
    'chatbot Facebook Messenger',
    'asistent AI vanzari',
    'chatbot ecommerce',
    'chatbot restaurant',
    'chatbot clinica medicala',
  ],
  openGraph: {
    title: 'Chatbot AI Romania | Vinde 24/7 fara Angajati Extra',
    description:
      'Transforma vizitatorii in clienti cu chatbot AI. Raspunde instant, califica lead-uri, programeaza intalniri - non-stop.',
    url: 'https://aifrontdesk.io/servicii/chatbot-ai',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatbot AI Romania | Asistent Virtual 24/7',
    description: 'Cel mai avansat chatbot AI pentru afaceri din Romania. ROI garantat in 90 de zile.',
  },
  alternates: {
    canonical: 'https://aifrontdesk.io/servicii/chatbot-ai',
  },
}

// JSON-LD for this specific service
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chatbot AI pentru Afaceri',
  description:
    'Serviciu de implementare chatbot AI pentru afaceri din Romania. Disponibil 24/7 pe WhatsApp, Facebook, Instagram si website.',
  provider: {
    '@type': 'Organization',
    name: 'AI Front Desk',
    url: 'https://aifrontdesk.io',
  },
  serviceType: 'AI Chatbot Implementation',
  areaServed: {
    '@type': 'Country',
    name: 'Romania',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pachete Chatbot AI',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Chatbot Starter',
          description: '2 Chatbots + Training + 1000 conversatii/luna',
        },
        price: '500',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Chatbot Business',
          description: 'Chatbot pe toate platformele + Integrare CRM + Conversatii nelimitate',
        },
        price: '1000',
        priceCurrency: 'EUR',
      },
    ],
  },
}

export default function ChatbotAILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
