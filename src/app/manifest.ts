import { MetadataRoute } from 'next'

// PWA Manifest - 2026 standards
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AI Front Desk - Automatizari AI & Software',
    short_name: 'AIFrontDesk',
    description:
      'Transformam afacerea ta cu solutii AI inteligente. Website-uri moderne, chatbots 24/7, automatizari business si software personalizat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0f',
    theme_color: '#a855f7',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'ro',
    dir: 'ltr',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshot-desktop.png',
        sizes: '1920x1080',
        type: 'image/png',
        // @ts-expect-error - form_factor is valid but not in types yet
        form_factor: 'wide',
        label: 'AI Front Desk - Desktop',
      },
      {
        src: '/screenshot-mobile.png',
        sizes: '750x1334',
        type: 'image/png',
        // @ts-expect-error - form_factor is valid but not in types yet
        form_factor: 'narrow',
        label: 'AI Front Desk - Mobile',
      },
    ],
    shortcuts: [
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Contacteaza-ne pentru o oferta personalizata',
        url: '/#contact',
        icons: [{ src: '/favicon.svg', sizes: 'any' }],
      },
      {
        name: 'Servicii',
        short_name: 'Servicii',
        description: 'Vezi toate serviciile noastre',
        url: '/#services',
        icons: [{ src: '/favicon.svg', sizes: 'any' }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  }
}
