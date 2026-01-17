'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Eye,
  Sparkles,
  Bot,
  Filter,
} from 'lucide-react'
import { BLOG_CATEGORIES, type BlogPost, type BlogCategory } from '@/types/blog'
import { getBlogPosts } from '@/lib/blog'

// Demo posts for when Supabase is not configured or empty
const DEMO_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'cum-sa-implementezi-chatbot-ai-2026',
    title: 'Cum să Implementezi un Chatbot AI pentru Afacerea Ta în 2026',
    excerpt: 'Ghid complet pentru implementarea unui chatbot AI modern. De la alegerea platformei până la antrenarea pe datele afacerii tale.',
    content: '',
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
    excerpt: 'Descoperă cele mai eficiente automatizări pe care le poți implementa astăzi pentru a-ți recupera timpul pierdut pe sarcini repetitive.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800',
    author: 'AI Front Desk',
    category: 'automatizari',
    tags: ['automatizare', 'productivitate', 'workflow', 'eficiență'],
    keywords: ['automatizari business', 'workflow automation'],
    meta_description: '5 automatizări care economisesc timp',
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
    title: 'De Ce Next.js 15 Este Alegerea Perfectă pentru Website-ul Tău',
    excerpt: 'Analizăm avantajele Next.js 15 față de alte framework-uri și de ce este standardul pentru web development în 2026.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    author: 'AI Front Desk',
    category: 'web-development',
    tags: ['Next.js', 'React', 'web development', 'framework'],
    keywords: ['Next.js Romania', 'web development 2026'],
    meta_description: 'De ce Next.js 15 pentru website',
    reading_time: 10,
    status: 'published',
    published_at: '2026-01-10T09:00:00Z',
    created_at: '2026-01-10T09:00:00Z',
    updated_at: '2026-01-10T09:00:00Z',
    views: 2100,
    ai_generated: false,
  },
  {
    id: '4',
    slug: 'integrare-whatsapp-business-api-chatbot',
    title: 'Ghid Complet: Integrare WhatsApp Business API cu Chatbot AI',
    excerpt: 'Pas cu pas: cum să integrezi WhatsApp Business API cu un chatbot AI pentru a răspunde automat clienților 24/7.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800',
    author: 'AI Front Desk',
    category: 'tutorial',
    tags: ['WhatsApp', 'API', 'chatbot', 'tutorial'],
    keywords: ['WhatsApp chatbot', 'integrare API'],
    meta_description: 'Ghid integrare WhatsApp Business API',
    reading_time: 12,
    status: 'published',
    published_at: '2026-01-08T11:00:00Z',
    created_at: '2026-01-08T11:00:00Z',
    updated_at: '2026-01-08T11:00:00Z',
    views: 3200,
    ai_generated: true,
  },
  {
    id: '5',
    slug: 'roi-automatizari-studiu-caz-romania',
    title: 'ROI-ul Real al Automatizărilor: Studiu de Caz România',
    excerpt: 'Analizăm rezultatele concrete obținute de 3 companii românești după implementarea automatizărilor AI.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    author: 'AI Front Desk',
    category: 'case-study',
    tags: ['ROI', 'studiu de caz', 'automatizare', 'rezultate'],
    keywords: ['ROI automatizare', 'case study Romania'],
    meta_description: 'Studiu de caz ROI automatizări România',
    reading_time: 15,
    status: 'published',
    published_at: '2026-01-05T16:00:00Z',
    created_at: '2026-01-05T16:00:00Z',
    updated_at: '2026-01-05T16:00:00Z',
    views: 1800,
    ai_generated: true,
  },
  {
    id: '6',
    slug: 'viitorul-muncii-ai-automatizare-2026',
    title: 'Viitorul Muncii: AI și Automatizare în 2026',
    excerpt: 'Ce ne rezervă viitorul? Tendințele în AI și automatizare care vor transforma modul în care lucrăm.',
    content: '',
    cover_image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    author: 'AI Front Desk',
    category: 'news',
    tags: ['AI', 'viitor', 'tendințe', '2026'],
    keywords: ['viitorul muncii', 'AI trends 2026'],
    meta_description: 'Viitorul muncii cu AI în 2026',
    reading_time: 7,
    status: 'published',
    published_at: '2026-01-03T08:00:00Z',
    created_at: '2026-01-03T08:00:00Z',
    updated_at: '2026-01-03T08:00:00Z',
    views: 4500,
    ai_generated: true,
  },
]

function formatDate(dateString: string): string {
  // Use a consistent format that works on both server and client
  const date = new Date(dateString)
  const months = [
    'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
    'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'
  ]
  return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all')
  const [isLoading, setIsLoading] = useState(true)

  // Fetch posts from Supabase on mount
  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true)
      try {
        const dbPosts = await getBlogPosts()
        if (dbPosts && dbPosts.length > 0) {
          setPosts(dbPosts)
          setFilteredPosts(dbPosts)
        } else {
          // Fallback to demo posts if database is empty
          setPosts(DEMO_POSTS)
          setFilteredPosts(DEMO_POSTS)
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
        // Fallback to demo posts on error
        setPosts(DEMO_POSTS)
        setFilteredPosts(DEMO_POSTS)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  // Filter posts when search or category changes
  useEffect(() => {
    let filtered = posts

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    setFilteredPosts(filtered)
  }, [posts, searchQuery, selectedCategory])

  const featuredPost = filteredPosts[0]
  const otherPosts = filteredPosts.slice(1)

  return (
    <main className="min-h-screen bg-[#030014]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors"
          >
            ← Înapoi la AI Front Desk
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Blog AI Front Desk</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Insights despre{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI & Automatizări
              </span>
            </h1>

            <p className="text-xl text-zinc-400 mb-8">
              Articole, tutoriale și studii de caz despre cum să-ți transformi afacerea cu tehnologie modernă.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Caută articole..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 px-4 sm:px-6 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-purple-500 text-white'
                  : 'bg-zinc-800/50 text-zinc-400 hover:text-white'
              }`}
            >
              <Filter className="w-4 h-4" />
              Toate
            </button>
            {Object.entries(BLOG_CATEGORIES).map(([key, { label, color }]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as BlogCategory)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === key
                    ? 'text-white'
                    : 'bg-zinc-800/50 text-zinc-400 hover:text-white'
                }`}
                style={{
                  backgroundColor: selectedCategory === key ? color : undefined,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="text-center py-20">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-zinc-400">Se încarcă articolele...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <Bot className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Niciun articol găsit</h3>
              <p className="text-zinc-400">Încearcă să modifici filtrele sau termenul de căutare.</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <div className="group relative rounded-3xl overflow-hidden bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-colors">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="aspect-video md:aspect-auto md:h-full relative overflow-hidden">
                          {featuredPost.cover_image ? (
                            <img
                              src={featuredPost.cover_image}
                              alt={featuredPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center">
                              <Bot className="w-20 h-20 text-purple-400/50" />
                            </div>
                          )}
                          <div className="absolute top-4 left-4">
                            <span
                              className="px-3 py-1 rounded-full text-white text-sm font-medium"
                              style={{ backgroundColor: BLOG_CATEGORIES[featuredPost.category as BlogCategory]?.color }}
                            >
                              {BLOG_CATEGORIES[featuredPost.category as BlogCategory]?.label}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(featuredPost.published_at!)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {featuredPost.reading_time} min citire
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {featuredPost.views.toLocaleString()}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                            {featuredPost.title}
                          </h2>
                          <p className="text-zinc-400 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                          <div className="flex items-center gap-2 text-purple-400 font-medium">
                            Citește mai mult
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Other Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="group h-full rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-colors">
                        <div className="aspect-video relative overflow-hidden">
                          {post.cover_image ? (
                            <img
                              src={post.cover_image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center">
                              <Bot className="w-12 h-12 text-purple-400/50" />
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <span
                              className="px-2 py-1 rounded-full text-white text-xs font-medium"
                              style={{ backgroundColor: BLOG_CATEGORIES[post.category as BlogCategory]?.color }}
                            >
                              {BLOG_CATEGORIES[post.category as BlogCategory]?.label}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(post.published_at!)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.reading_time} min
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-zinc-400 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-500/30"
          >
            <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">
              Primește articole noi în inbox
            </h2>
            <p className="text-zinc-400 mb-6">
              Abonează-te la newsletter și primești săptămânal cele mai noi articole despre AI și automatizări.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="email@exemplu.ro"
                className="flex-1 px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-full text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
              />
              <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-full transition-colors">
                Abonează-te
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center pb-12">
        <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
          ← Înapoi la AI Front Desk
        </Link>
      </div>
    </main>
  )
}
