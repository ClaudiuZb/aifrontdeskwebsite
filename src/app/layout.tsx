import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://aifrontdesk.io'),
  title: {
    default: 'AI Front Desk | Automatizari AI, Website-uri & Software la Comanda',
    template: '%s | AI Front Desk'
  },
  description: 'Transformam afacerea ta cu solutii AI inteligente. Website-uri moderne, chatbots 24/7, automatizari business si software personalizat. ROI garantat in 90 de zile.',
  keywords: [
    'automatizare AI',
    'chatbot Romania',
    'website profesional',
    'software la comanda',
    'ERP personalizat',
    'CRM Romania',
    'transformare digitala',
    'AI business',
    'automatizari WhatsApp',
    'chatbot WhatsApp business',
    'dezvoltare software Romania',
    'agentie web design',
    'aplicatii mobile custom',
    'inteligenta artificiala afaceri'
  ],
  authors: [{ name: 'AI Front Desk', url: 'https://aifrontdesk.io' }],
  creator: 'AI Front Desk',
  publisher: 'AI Front Desk SRL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://aifrontdesk.io',
    siteName: 'AI Front Desk',
    title: 'AI Front Desk | Automatizari AI & Software pentru Afaceri Inteligente',
    description: 'Transformam vizitatorii in clienti cu website-uri moderne, chatbots AI 24/7 si software personalizat. Rezultate garantate.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Front Desk - Automatizari AI pentru Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Front Desk | Automatizari AI & Software pentru Afaceri',
    description: 'Website-uri moderne, chatbots 24/7, automatizari si software la comanda. ROI garantat.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Get from Google Search Console
    yandex: 'your-yandex-verification-code', // Optional: Yandex Webmaster
    // bing: 'your-bing-verification-code', // Optional: Bing Webmaster
  },
  alternates: {
    canonical: 'https://aifrontdesk.io',
    languages: {
      'ro-RO': 'https://aifrontdesk.io',
      'en-US': 'https://aifrontdesk.io/en',
    },
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://aifrontdesk.io/#organization',
      name: 'AI Front Desk',
      url: 'https://aifrontdesk.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aifrontdesk.io/logo.png',
        width: 512,
        height: 512,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+40753933660',
        contactType: 'customer service',
        availableLanguage: ['Romanian', 'English'],
        areaServed: 'RO',
      },
      sameAs: [
        'https://facebook.com/aifrontdesk',
        'https://instagram.com/aifrontdesk',
        'https://linkedin.com/company/aifrontdesk',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://aifrontdesk.io/#website',
      url: 'https://aifrontdesk.io',
      name: 'AI Front Desk',
      publisher: { '@id': 'https://aifrontdesk.io/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://aifrontdesk.io/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://aifrontdesk.io/#localbusiness',
      name: 'AI Front Desk',
      image: 'https://aifrontdesk.io/og-image.jpg',
      telephone: '+40753933660',
      email: 'contact@aifrontdesk.ro',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'RO',
        addressLocality: 'Romania',
      },
      priceRange: '€€',
      openingHours: 'Mo-Fr 09:00-18:00',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '15',
      },
    },
    {
      '@type': 'Service',
      name: 'Automatizari AI pentru Business',
      description: 'Chatbots inteligenti 24/7, procesare documente cu AI, email marketing automatizat',
      provider: { '@id': 'https://aifrontdesk.io/#organization' },
      serviceType: 'AI Automation',
      areaServed: 'Romania',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Pachete Automatizari AI',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Starter Pack',
              description: '2 Chatbots + Training + Suport',
            },
            price: '500',
            priceCurrency: 'EUR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Pack All-Inclusive',
              description: 'Chatbot complet pe toate canalele + 3-5 automatizari',
            },
            price: '1000',
            priceCurrency: 'EUR',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Cat dureaza implementarea unui chatbot AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '10-14 zile pentru Starter Pack, 20-30 zile pentru Business Pack.',
          },
        },
        {
          '@type': 'Question',
          name: 'Functioneaza chatbot-ul in limba romana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, AI-ul nostru intelege perfect limba romana, inclusiv regionalisme. Raspunde natural, nu robotic.',
          },
        },
        {
          '@type': 'Question',
          name: 'Care este ROI-ul pentru automatizari AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Clientii nostri recupereaza investitia in 2-3 luni. Garantam ROI in 90 de zile sau optimizam gratuit.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#0a0a0f" />
        <meta name="geo.region" content="RO" />
        <meta name="geo.placename" content="Romania" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
