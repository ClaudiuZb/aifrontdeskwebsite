'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  Calendar,
  Clock,
  Eye,
  ArrowLeft,
  User,
  Bot,
  Copy,
  Check,
  ChevronRight,
  Tag,
} from 'lucide-react'
import { BLOG_CATEGORIES, type BlogPost, type BlogCategory } from '@/types/blog'
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blog'

// Demo post content
const DEMO_POST_CONTENT = `
## Introducere

În era digitală a anului 2026, chatboții AI au devenit instrumentul esențial pentru orice afacere care vrea să ofere suport clienților 24/7. Dar cum implementezi un chatbot AI eficient? În acest ghid complet, îți vom arăta tot ce trebuie să știi.

## De ce ai nevoie de un Chatbot AI?

### 1. Disponibilitate Non-Stop

Clienții tăi nu așteaptă. 73% dintre ei preferă să interacționeze cu un chatbot decât să aștepte un operator uman. Un chatbot AI răspunde instant, indiferent de oră.

### 2. Reducerea Costurilor

Un chatbot poate gestiona simultan sute de conversații, reducând nevoia de personal suplimentar în departamentul de suport cu până la 60%.

### 3. Consistență în Răspunsuri

Spre deosebire de operatorii umani, chatboții oferă răspunsuri consistente și precise, eliminând erorile umane și variabilitatea în calitatea serviciului.

## Pașii pentru Implementare

### Pasul 1: Definește Scopul

Înainte de a implementa un chatbot, trebuie să răspunzi la câteva întrebări cheie:

- Ce probleme vrei să rezolve chatbotul?
- Ce întrebări primești cel mai frecvent de la clienți?
- Care sunt scenariile în care chatbotul trebuie să transfere conversația către un om?

### Pasul 2: Alege Platforma Potrivită

Există mai multe opțiuni pe piață:

| Platformă | Avantaje | Dezavantaje |
|-----------|----------|-------------|
| Dialogflow | Integrare Google, NLP puternic | Curba de învățare |
| OpenAI GPT | Conversații naturale | Cost per token |
| Custom Build | Control total | Timp de dezvoltare |

### Pasul 3: Antrenează pe Datele Tale

Secretul unui chatbot eficient este antrenarea pe datele specifice afacerii tale:

\`\`\`javascript
// Exemplu de structură pentru date de antrenare
const trainingData = {
  intents: [
    {
      tag: "pret",
      patterns: ["cat costa", "ce pret are", "tarife"],
      responses: ["Preturile noastre incep de la 500€"]
    }
  ]
}
\`\`\`

### Pasul 4: Integrează cu Platformele Tale

Un chatbot trebuie să fie acolo unde sunt clienții tăi:

- **Website** - Widget de chat integrat
- **WhatsApp Business** - Cel mai folosit canal în România
- **Facebook Messenger** - Pentru audiența de pe social media
- **Instagram DM** - Pentru business-uri B2C

### Pasul 5: Monitorizează și Optimizează

După lansare, urmărește:

- Rata de rezolvare a întrebărilor
- Timpul mediu de conversație
- Feedback-ul utilizatorilor
- Punctele unde utilizatorii abandonează

## Greșeli de Evitat

1. **Nu promite ce nu poate livra** - Fii clar despre limitările chatbotului
2. **Nu ignora opțiunea de a vorbi cu un om** - Unele situații necesită intervenție umană
3. **Nu uita de personalizare** - Chatbotul trebuie să reflecte vocea brandului tău

## Concluzie

Implementarea unui chatbot AI nu este complicată dacă urmezi pașii corecți. În 2026, este practic o necesitate pentru orice afacere care vrea să rămână competitivă.

**Vrei să implementăm un chatbot AI pentru afacerea ta?** [Contactează-ne](/contact) pentru o consultație gratuită.

---

*Acest articol a fost generat cu ajutorul AI și verificat de echipa AI Front Desk.*
`

// Demo posts for related articles
const DEMO_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'cum-sa-implementezi-chatbot-ai-2026',
    title: 'Cum să Implementezi un Chatbot AI pentru Afacerea Ta în 2026',
    excerpt: 'Ghid complet pentru implementarea unui chatbot AI modern.',
    content: DEMO_POST_CONTENT,
    cover_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    author: 'AI Front Desk',
    category: 'chatbot-ai',
    tags: ['chatbot', 'AI', 'implementare', 'ghid'],
    keywords: ['chatbot AI Romania', 'implementare chatbot'],
    meta_description: 'Ghid complet pentru implementarea unui chatbot AI',
    reading_time: 8,
    status: 'published',
    published_at: '2026-01-15T10:00:00Z',
    created_at: '2026-01-15T10:00:00Z',
    updated_at: '2026-01-15T10:00:00Z',
    views: 1250,
    ai_generated: true,
  },
  {
    id: '2',
    slug: '5-automatizari-economisesc-20-ore',
    title: '5 Automatizări Care Economisesc 20+ Ore pe Săptămână',
    excerpt: 'Descoperă cele mai eficiente automatizări.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800',
    author: 'AI Front Desk',
    category: 'automatizari',
    tags: ['automatizare', 'productivitate'],
    keywords: [],
    meta_description: '',
    reading_time: 6,
    status: 'published',
    published_at: '2026-01-12T14:00:00Z',
    created_at: '2026-01-12T14:00:00Z',
    updated_at: '2026-01-12T14:00:00Z',
    views: 890,
    ai_generated: true,
  },
  {
    id: '3',
    slug: 'nextjs-15-alegerea-perfecta-website',
    title: 'De Ce Next.js 15 Este Alegerea Perfectă',
    excerpt: 'Analizăm avantajele Next.js 15.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    author: 'AI Front Desk',
    category: 'web-development',
    tags: ['Next.js', 'React'],
    keywords: [],
    meta_description: '',
    reading_time: 10,
    status: 'published',
    published_at: '2026-01-10T09:00:00Z',
    created_at: '2026-01-10T09:00:00Z',
    updated_at: '2026-01-10T09:00:00Z',
    views: 2100,
    ai_generated: false,
  },
]

function formatDate(dateString: string): string {
  // Use UTC to avoid hydration mismatch between server and client
  const date = new Date(dateString)
  const months = [
    'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
    'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'
  ]
  return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}

// Content renderer - supports both HTML and Markdown
function ContentRenderer({ content }: { content: string }) {
  // Check if content is HTML (contains HTML tags)
  const isHTML = /<[a-z][\s\S]*>/i.test(content)

  if (isHTML) {
    // Render HTML content with proper styling
    return (
      <div
        className="blog-content text-zinc-300 leading-relaxed
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4
          [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-white [&>h3]:mt-6 [&>h3]:mb-3
          [&>p]:mb-4 [&>p]:leading-relaxed
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>ul>li]:mb-2
          [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-4 [&>ol>li]:mb-2
          [&>strong]:text-white [&>strong]:font-semibold
          [&_strong]:text-white [&_strong]:font-semibold
          [&>em]:italic [&_em]:italic
          [&>blockquote]:border-l-4 [&>blockquote]:border-purple-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-zinc-400
          [&>pre]:bg-zinc-900 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:my-4 [&>pre]:border [&>pre]:border-zinc-800
          [&>code]:bg-zinc-800 [&>code]:px-1 [&>code]:rounded [&>code]:text-sm
          [&>hr]:border-zinc-800 [&>hr]:my-8
          [&>a]:text-purple-400 [&>a]:underline [&_a]:text-purple-400 [&_a]:underline"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  }

  // Fallback: render as plain text with basic formatting
  const lines = content.split('\n')
  return (
    <div className="blog-content">
      {lines.map((line, index) => {
        if (!line.trim()) return null

        // Headers
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{line.slice(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">{line.slice(4)}</h3>
        }
        if (line.startsWith('#### ')) {
          return <h4 key={index} className="text-lg font-semibold text-white mt-4 mb-2">{line.slice(5)}</h4>
        }

        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} className="text-zinc-300 ml-6 mb-2 list-disc">{line.slice(2)}</li>
        }

        // Bold text (convert **text** to proper rendering)
        if (line.includes('**')) {
          const parts = line.split(/\*\*(.*?)\*\*/)
          return (
            <p key={index} className="text-zinc-300 mb-4 leading-relaxed">
              {parts.map((part, i) =>
                i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
              )}
            </p>
          )
        }

        // Regular paragraph
        return <p key={index} className="text-zinc-300 mb-4 leading-relaxed">{line}</p>
      })}
    </div>
  )
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    async function fetchPost() {
      // Try to fetch from Supabase first
      const dbPost = await getBlogPostBySlug(slug)
      if (dbPost) {
        setPost(dbPost)
        // Get related posts
        const related = await getRelatedPosts(dbPost, 3)
        setRelatedPosts(related.length > 0 ? related : DEMO_POSTS.filter((p) => p.id !== dbPost.id).slice(0, 3))
      } else {
        // Fallback to demo data
        const foundPost = DEMO_POSTS.find((p) => p.slug === slug)
        if (foundPost) {
          setPost({ ...foundPost, content: DEMO_POST_CONTENT })
          setRelatedPosts(DEMO_POSTS.filter((p) => p.id !== foundPost.id).slice(0, 3))
        }
      }
    }
    fetchPost()
  }, [slug])

  const handleShare = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
    }
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center">
          <Bot className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Articol negăsit</h1>
          <p className="text-zinc-400 mb-6">Acest articol nu există sau a fost șters.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la Blog
          </Link>
        </div>
      </main>
    )
  }

  const categoryInfo = BLOG_CATEGORIES[post.category as BlogCategory]

  return (
    <main className="min-h-screen bg-[#030014]">
      {/* Hero */}
      <section className="relative pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Acasă
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-zinc-400">{post.title.slice(0, 30)}...</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Category & AI badge */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: categoryInfo?.color }}
              >
                {categoryInfo?.label}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-6">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.published_at!)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.reading_time} min citire
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {post.views.toLocaleString()} vizualizări
              </span>
            </div>

            {/* Share buttons */}
            <div className="flex items-center gap-3">
              <span className="text-zinc-500 text-sm">Distribuie:</span>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                title="Copiază link"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-800 hover:bg-blue-600 text-zinc-400 hover:text-white transition-colors"
                title="Distribuie pe Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-800 hover:bg-blue-700 text-zinc-400 hover:text-white transition-colors"
                title="Distribuie pe LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      {post.cover_image && (
        <section className="px-4 sm:px-6 mb-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <ContentRenderer content={post.content} />
          </motion.article>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-zinc-500" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-sm hover:bg-zinc-700 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 px-4 sm:px-6 bg-zinc-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Articole Similare</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="group rounded-xl overflow-hidden bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-colors">
                    <div className="aspect-video relative overflow-hidden">
                      {relatedPost.cover_image ? (
                        <img
                          src={relatedPost.cover_image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50" />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-zinc-500 text-sm mt-2">
                        {relatedPost.reading_time} min citire
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-500/30">
            <h2 className="text-xl font-bold text-white mb-3">
              Vrei să implementezi soluții AI pentru afacerea ta?
            </h2>
            <p className="text-zinc-400 mb-6">
              Programează o consultație gratuită și descoperă cum te putem ajuta.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-full font-semibold hover:bg-zinc-100 transition-colors"
            >
              Contactează-ne
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <div className="text-center pb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi la Blog
        </Link>
      </div>
    </main>
  )
}
