import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creare Website Profesional Romania | Web Design Modern 2026',
  description:
    'Website-uri profesionale care convertesc vizitatori in clienti. Design modern, viteza maxima, SEO optimizat. Next.js, React, Tailwind. De la 500€. Hosting inclus.',
  keywords: [
    'creare website Romania',
    'web design Romania',
    'website profesional',
    'creare site firma',
    'web development Romania',
    'site prezentare',
    'landing page Romania',
    'magazin online Romania',
    'ecommerce Romania',
    'Next.js Romania',
    'React developer Romania',
    'website responsive',
    'SEO website',
    'site rapid',
  ],
  openGraph: {
    title: 'Creare Website Profesional Romania | Design Modern 2026',
    description:
      'Website-uri care convertesc vizitatori in clienti. Design modern, viteza maxima, SEO optimizat. De la 500€.',
    url: 'https://aifrontdesk.ro/servicii/website-profesional',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creare Website Profesional Romania',
    description: 'Website-uri moderne care vand. Next.js, React, SEO optimizat. De la 500€.',
  },
  alternates: {
    canonical: 'https://aifrontdesk.ro/servicii/website-profesional',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Creare Website Profesional',
  description:
    'Serviciu de web design si dezvoltare website-uri profesionale pentru companii din Romania. Next.js, React, SEO optimizat.',
  provider: {
    '@type': 'Organization',
    name: 'AI Front Desk',
    url: 'https://aifrontdesk.ro',
  },
  serviceType: 'Web Development',
  areaServed: {
    '@type': 'Country',
    name: 'Romania',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pachete Website',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Landing Page',
          description: '1 Pagina profesionala + Design responsive + SEO + Hosting 1 an',
        },
        price: '500',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Complet',
          description: '5-10 Pagini + Design custom + SEO avansat + CMS + Blog',
        },
        price: '1500',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce',
          description: 'Magazin online complet + Plati online + Integrare curierat',
        },
        price: '3000',
        priceCurrency: 'EUR',
      },
    ],
  },
}

export default function WebsiteLayout({
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
