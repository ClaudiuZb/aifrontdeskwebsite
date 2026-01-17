import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Custom Romania | Dezvoltare Aplicatii Web & Mobile',
  description:
    'Dezvoltam software personalizat pentru afacerea ta. Aplicatii web, mobile, platforme SaaS, integrari AI. Arhitectura scalabila, securitate enterprise. De la 5000€.',
  keywords: [
    'software custom Romania',
    'dezvoltare software',
    'aplicatii web Romania',
    'aplicatii mobile Romania',
    'software development Romania',
    'React developer',
    'Node.js Romania',
    'aplicatii enterprise',
    'platforme SaaS',
    'CRM custom',
    'ERP custom',
    'API development',
    'cloud applications',
    'software la comanda',
  ],
  openGraph: {
    title: 'Software Custom Romania | Aplicatii care Rezolva Probleme Reale',
    description:
      'Dezvoltam software personalizat pentru afacerea ta. Aplicatii web, mobile, platforme SaaS. De la 5000€.',
    url: 'https://aifrontdesk.io/servicii/software-custom',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Custom Romania | Dezvoltare Profesionala',
    description: 'Aplicatii web, mobile, SaaS. Arhitectura scalabila, echipa senior. De la 5000€.',
  },
  alternates: {
    canonical: 'https://aifrontdesk.io/servicii/software-custom',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dezvoltare Software Custom',
  description:
    'Serviciu de dezvoltare software personalizat pentru companii din Romania. Aplicatii web, mobile, platforme SaaS, integrari AI/ML.',
  provider: {
    '@type': 'Organization',
    name: 'AI Front Desk',
    url: 'https://aifrontdesk.io',
  },
  serviceType: 'Custom Software Development',
  areaServed: {
    '@type': 'Country',
    name: 'Romania',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pachete Software',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'MVP Startup',
          description: 'Aplicatie web functionala pentru validare rapida',
        },
        price: '5000',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Software Business',
          description: 'Aplicatie complexa custom cu integrari multiple',
        },
        price: '15000',
        priceCurrency: 'EUR',
      },
    ],
  },
}

export default function SoftwareLayout({
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
