import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automatizari Business Romania | Workflow-uri AI pentru Afaceri',
  description:
    'Elimina munca repetitiva cu automatizari inteligente. Conectam CRM, ERP, email, facturare - toate sistemele tale. Economisesti 20+ ore pe saptamana. ROI garantat.',
  keywords: [
    'automatizari business Romania',
    'workflow automation',
    'automatizare procese',
    'integrari software',
    'automatizare facturare',
    'automatizare email',
    'RPA Romania',
    'automatizare CRM',
    'Zapier Romania',
    'Make.com Romania',
    'n8n Romania',
    'automatizare afaceri',
    'eficientizare procese',
    'digitalizare business',
  ],
  openGraph: {
    title: 'Automatizari Business Romania | 20+ Ore Economisite Saptamanal',
    description:
      'Elimina munca repetitiva cu automatizari inteligente. Conectam toate sistemele tale intr-un workflow fluid.',
    url: 'https://aifrontdesk.ro/servicii/automatizari-business',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatizari Business Romania | Workflow-uri AI',
    description: 'Economisesti 20+ ore pe saptamana cu automatizari inteligente. ROI garantat.',
  },
  alternates: {
    canonical: 'https://aifrontdesk.ro/servicii/automatizari-business',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Automatizari Business',
  description:
    'Serviciu de automatizare procese business pentru companii din Romania. Workflow-uri custom, integrari multiple, AI pentru procesare date.',
  provider: {
    '@type': 'Organization',
    name: 'AI Front Desk',
    url: 'https://aifrontdesk.ro',
  },
  serviceType: 'Business Process Automation',
  areaServed: {
    '@type': 'Country',
    name: 'Romania',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pachete Automatizari',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Automatizari Starter',
          description: '5 Automatizari custom + Integrare 3 platforme',
        },
        price: '1000',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Automatizari Business',
          description: 'Automatizari nelimitate + AI + Dashboard custom',
        },
        price: '2500',
        priceCurrency: 'EUR',
      },
    ],
  },
}

export default function AutomatizariLayout({
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
