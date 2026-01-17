import { NextRequest, NextResponse } from 'next/server'
import { BlogCategory } from '@/types/blog'

// This endpoint is called by Vercel Cron
// Configure in vercel.json:
// {
//   "crons": [{
//     "path": "/api/blog/cron",
//     "schedule": "0 9 * * 1,3,5,0"  // Mon, Wed, Fri, Sun at 9 AM UTC (11 AM Romania)
//   }]
// }

// Topics pool - AI will pick one and create unique content
// The generate endpoint already checks existing posts to avoid duplicates
const TOPIC_TEMPLATES = [
  // Chatbot & AI
  { topic: 'Cum să implementezi un chatbot AI pentru afacerea ta', category: 'chatbot-ai' as BlogCategory, keywords: ['chatbot AI', 'automatizare', 'customer service'] },
  { topic: 'Beneficiile unui chatbot WhatsApp pentru business', category: 'chatbot-ai' as BlogCategory, keywords: ['WhatsApp Business', 'chatbot', 'comunicare clienți'] },
  { topic: 'AI în serviciul clienți: tendințe și implementare', category: 'chatbot-ai' as BlogCategory, keywords: ['AI customer service', 'suport clienți', 'automatizare'] },
  { topic: 'Chatbot vs. Live Chat: care e mai bun pentru afacerea ta', category: 'chatbot-ai' as BlogCategory, keywords: ['chatbot', 'live chat', 'suport clienți'] },
  { topic: 'Cum antrenezi un chatbot pe datele afacerii tale', category: 'chatbot-ai' as BlogCategory, keywords: ['antrenare AI', 'chatbot custom', 'machine learning'] },

  // Automatizări
  { topic: 'Top automatizări care economisesc timp în business', category: 'automatizari' as BlogCategory, keywords: ['automatizare business', 'productivitate', 'eficiență'] },
  { topic: 'Automatizarea email-urilor: ghid complet', category: 'automatizari' as BlogCategory, keywords: ['email automation', 'marketing', 'follow-up'] },
  { topic: 'Cum să automatizezi facturarea și contabilitatea', category: 'automatizari' as BlogCategory, keywords: ['automatizare facturi', 'contabilitate', 'eficiență'] },
  { topic: 'Integrări Zapier și Make pentru afaceri românești', category: 'automatizari' as BlogCategory, keywords: ['Zapier', 'Make', 'integrări', 'automatizare'] },
  { topic: 'Automatizarea proceselor HR cu AI', category: 'automatizari' as BlogCategory, keywords: ['HR automation', 'recrutare', 'onboarding'] },

  // Web Development
  { topic: 'De ce ai nevoie de un website rapid în 2026', category: 'web-development' as BlogCategory, keywords: ['website performant', 'Core Web Vitals', 'SEO'] },
  { topic: 'Next.js vs WordPress: ce să alegi pentru afacerea ta', category: 'web-development' as BlogCategory, keywords: ['Next.js', 'WordPress', 'web development'] },
  { topic: 'Optimizare SEO pentru site-uri românești', category: 'web-development' as BlogCategory, keywords: ['SEO Romania', 'optimizare Google', 'trafic organic'] },
  { topic: 'Landing page care convertește: ghid practic', category: 'web-development' as BlogCategory, keywords: ['landing page', 'conversii', 'web design'] },
  { topic: 'E-commerce în România: platforme și tendințe', category: 'web-development' as BlogCategory, keywords: ['e-commerce', 'magazin online', 'vânzări online'] },

  // Software Custom
  { topic: 'Când ai nevoie de software custom vs. soluții SaaS', category: 'software' as BlogCategory, keywords: ['software custom', 'SaaS', 'dezvoltare software'] },
  { topic: 'CRM personalizat: avantaje pentru afaceri mici', category: 'software' as BlogCategory, keywords: ['CRM', 'management clienți', 'software business'] },
  { topic: 'Aplicații mobile pentru business: ghid de start', category: 'software' as BlogCategory, keywords: ['aplicații mobile', 'app development', 'business'] },
  { topic: 'ERP pentru IMM-uri: ce trebuie să știi', category: 'software' as BlogCategory, keywords: ['ERP', 'management afacere', 'software IMM'] },
  { topic: 'Securitate software: practici esențiale', category: 'software' as BlogCategory, keywords: ['securitate', 'cyber security', 'protecție date'] },

  // Tips & News
  { topic: 'Tendințe AI pentru business în România', category: 'tips' as BlogCategory, keywords: ['tendințe AI', 'business Romania', 'inovație'] },
  { topic: 'Cum să alegi un partener de dezvoltare software', category: 'tips' as BlogCategory, keywords: ['outsourcing', 'dezvoltare software', 'parteneriat IT'] },
  { topic: 'ROI pentru proiecte de digitalizare', category: 'tips' as BlogCategory, keywords: ['ROI', 'digitalizare', 'investiții IT'] },
  { topic: 'Greșeli comune în implementarea AI', category: 'tips' as BlogCategory, keywords: ['implementare AI', 'greșeli', 'best practices'] },
  { topic: 'Fonduri europene pentru digitalizare IMM', category: 'news' as BlogCategory, keywords: ['fonduri europene', 'digitalizare', 'finanțare'] },
]

export async function GET(request: NextRequest) {
  try {
    // Verify this is a legitimate cron request
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET

    // In production, verify the request is from Vercel Cron
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Pick a random topic - the generate endpoint will ensure uniqueness
    const randomIndex = Math.floor(Math.random() * TOPIC_TEMPLATES.length)
    const topicTemplate = TOPIC_TEMPLATES[randomIndex]

    // Generate the blog post
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://aifrontdesk.io'}/api/blog/generate`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.BLOG_ADMIN_SECRET}`,
        },
        body: JSON.stringify({
          topic: topicTemplate.topic,
          category: topicTemplate.category,
          keywords: topicTemplate.keywords,
          tone: 'professional',
          length: 'medium',
          language: 'ro',
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to generate post: ${response.status} - ${errorText}`)
    }

    const result = await response.json()

    return NextResponse.json({
      success: true,
      message: 'Blog post generated successfully',
      post: {
        id: result.post.id,
        title: result.post.title,
        slug: result.post.slug,
        status: result.post.status,
      },
    })
  } catch (error) {
    console.error('Cron job error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Cron job failed' },
      { status: 500 }
    )
  }
}

// Also allow manual trigger via POST
export async function POST(request: NextRequest) {
  // Same logic as GET but allows custom topic
  try {
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.BLOG_ADMIN_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { topic, category, keywords } = body

    if (!topic || !category) {
      return NextResponse.json(
        { error: 'Topic and category are required' },
        { status: 400 }
      )
    }

    // Generate the blog post
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog/generate`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.BLOG_ADMIN_SECRET}`,
        },
        body: JSON.stringify({
          topic,
          category,
          keywords: keywords || [],
          tone: 'professional',
          length: 'medium',
          language: 'ro',
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Failed to generate post: ${error}`)
    }

    const result = await response.json()

    return NextResponse.json({
      success: true,
      post: result.post,
    })
  } catch (error) {
    console.error('Manual trigger error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to trigger generation' },
      { status: 500 }
    )
  }
}
