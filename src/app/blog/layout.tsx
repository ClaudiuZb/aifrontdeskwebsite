import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Articole despre AI, Automatizări și Web Development',
  description:
    'Descoperă cele mai noi tendințe în AI, automatizări business și web development. Tutoriale, studii de caz și tips pentru a-ți crește afacerea cu tehnologie modernă.',
  keywords: [
    'blog AI Romania',
    'articole automatizari',
    'tutoriale chatbot',
    'web development blog',
    'AI business Romania',
    'automatizare afaceri',
    'tendinte tehnologie',
    'studii de caz AI',
  ],
  openGraph: {
    title: 'Blog AI Front Desk | Insights despre AI & Automatizări',
    description:
      'Articole, tutoriale și studii de caz despre cum să-ți transformi afacerea cu AI și automatizări.',
    url: 'https://aifrontdesk.ro/blog',
    type: 'website',
    locale: 'ro_RO',
  },
  alternates: {
    canonical: 'https://aifrontdesk.ro/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
