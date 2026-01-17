import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createBlogPost, generateSlug, getBlogPosts } from '@/lib/blog'
import { generateAndUploadBlogCover } from '@/lib/openai-image'
import type { AIContentRequest, BlogPostCreate } from '@/types/blog'

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Get current date info for the AI
function getCurrentDateInfo() {
  const now = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Bucharest'
  }
  return {
    formatted: now.toLocaleDateString('ro-RO', options),
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    iso: now.toISOString().split('T')[0]
  }
}

// System prompt for blog generation - with current date context
function getSystemPrompt(dateInfo: ReturnType<typeof getCurrentDateInfo>) {
  return `Ești un expert în content marketing și SEO pentru piața din România.
Scrii articole de blog profesionale, informative și optimizate SEO pentru AI Front Desk,
o companie care oferă servicii de automatizări AI, chatboți, web development și software custom.

DATA CURENTĂ: ${dateInfo.formatted}
AN CURENT: ${dateInfo.year}

IMPORTANT: Toate referințele la timp trebuie să fie actuale!
- Când spui "în ${dateInfo.year}" sau "anul acesta", te referi la anul ${dateInfo.year}
- NU folosi anii 2023, 2024 sau 2025 - suntem în ${dateInfo.year}!
- Menționează tendințe și tehnologii actuale din ${dateInfo.year}

Regulile tale:
1. Scrie DOAR în limba română corectă, fără greșeli gramaticale
2. Folosește un ton profesional dar accesibil
3. Include exemple practice și relevante pentru piața din România
4. Structurează articolele cu headere clare (##, ###)
5. Include liste, tabele și code snippets unde e relevant
6. Optimizează pentru SEO: include keyword-urile natural în text
7. Lungimea articolului trebuie să fie adecvată subiectului
8. Include un call-to-action subtil la final
9. Evită jargonul excesiv - explică termenii tehnici
10. Fii factual și evită superlativele nefondate
11. Toate datele și statisticile trebuie să fie pentru anul ${dateInfo.year}`
}

export async function POST(request: NextRequest) {
  try {
    // Check for API key
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'ANTHROPIC_API_KEY not configured' },
        { status: 500 }
      )
    }

    // Check for admin secret (simple auth)
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.BLOG_ADMIN_SECRET}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body: AIContentRequest = await request.json()
    const { topic, category, keywords, tone, length, language } = body

    // Determine word count based on length
    const wordCounts = {
      short: '500-800',
      medium: '1000-1500',
      long: '2000-3000',
    }

    const toneDescriptions = {
      professional: 'profesional și formal',
      casual: 'casual și prietenos',
      educational: 'educativ și detaliat',
    }

    // Get current date for context
    const dateInfo = getCurrentDateInfo()

    // Get existing posts to avoid duplicates
    let existingPostsContext = ''
    try {
      const existingPosts = await getBlogPosts(20) // Get last 20 posts
      if (existingPosts.length > 0) {
        const postTitles = existingPosts.map(p => `- "${p.title}" (${p.category})`).join('\n')
        existingPostsContext = `

ARTICOLE DEJA PUBLICATE (NU REPETA ACESTE SUBIECTE):
${postTitles}

IMPORTANT: Creează un articol COMPLET DIFERIT de cele de mai sus. Nu repeta titluri, subiecte sau idei similare.`
      }
    } catch (e) {
      console.warn('Could not fetch existing posts:', e)
    }

    // First, do a web search for recent information on the topic
    console.log('Searching for recent information on:', topic)
    let webContext = ''
    try {
      const searchResponse = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        tools: [
          {
            type: 'web_search_20250305',
            name: 'web_search',
            max_uses: 3,
          },
        ],
        messages: [
          {
            role: 'user',
            content: `Caută informații recente (din ${dateInfo.year}) despre: "${topic}"
            Focus pe: tendințe actuale, statistici noi, știri relevante din România și global.
            Rezumă cele mai importante informații găsite.`,
          },
        ],
      })

      // Extract web search results
      for (const block of searchResponse.content) {
        if (block.type === 'text') {
          webContext = block.text
        }
      }
      console.log('Web search completed, found context:', webContext.slice(0, 200) + '...')
    } catch (searchError) {
      console.warn('Web search failed, continuing without:', searchError)
    }

    // Generate the article using Claude with web context
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      system: getSystemPrompt(dateInfo),
      messages: [
        {
          role: 'user',
          content: `Scrie un articol de blog pe tema: "${topic}"

DATA PUBLICĂRII: ${dateInfo.formatted} (${dateInfo.year})
Categorie: ${category}
Keywords de inclus (natural, nu forțat): ${keywords.join(', ')}
Ton: ${toneDescriptions[tone]}
Lungime: ${wordCounts[length]} cuvinte
Limba: ${language === 'ro' ? 'Română' : 'Engleză'}

${webContext ? `CONTEXT DIN CĂUTARE WEB (informații recente din ${dateInfo.year}):
${webContext}

Folosește aceste informații actuale în articol!` : ''}

FOARTE IMPORTANT: Articolul trebuie să fie actual pentru anul ${dateInfo.year}! Nu folosi date din 2024 sau 2025.
${existingPostsContext}

Returnează răspunsul în următorul format JSON (fără markdown code blocks):
{
  "title": "Titlul articolului (captivant, max 70 caractere)",
  "excerpt": "Descriere scurtă pentru preview (max 160 caractere)",
  "content": "Conținutul complet al articolului în HTML simplu",
  "meta_description": "Meta description SEO (max 160 caractere)",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "suggested_keywords": ["keyword1", "keyword2", "keyword3"]
}

REGULI STRICTE PENTRU CONTENT:
1. Folosește DOAR HTML simplu: <h2>, <h3>, <p>, <ul>, <li>, <strong>, <em>
2. NU folosi Markdown (###, **, -, etc.)
3. NU folosi ### pentru titluri - folosește <h2> și <h3>
4. NU folosi ** pentru bold - folosește <strong>
5. NU folosi - pentru liste - folosește <ul><li>
6. Verifică gramatica română - "Anul 2026" nu "Ana 2026"
7. Scrie conținut curat și profesional

IMPORTANT: Returnează DOAR JSON valid, fără alte texte.`,
        },
      ],
    })

    // Extract the text content
    const textContent = message.content.find((block) => block.type === 'text')
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text content in response')
    }

    // Parse the JSON response
    let articleData
    try {
      // Clean the response - remove any markdown code blocks if present
      let cleanedResponse = textContent.text.trim()
      if (cleanedResponse.startsWith('```json')) {
        cleanedResponse = cleanedResponse.slice(7)
      }
      if (cleanedResponse.startsWith('```')) {
        cleanedResponse = cleanedResponse.slice(3)
      }
      if (cleanedResponse.endsWith('```')) {
        cleanedResponse = cleanedResponse.slice(0, -3)
      }
      articleData = JSON.parse(cleanedResponse.trim())
    } catch {
      console.error('Failed to parse AI response:', textContent.text)
      throw new Error('Failed to parse AI response as JSON')
    }

    // Calculate reading time
    const wordCount = articleData.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    // Generate slug for the article
    const slug = generateSlug(articleData.title)

    // Generate cover image using GPT Image Mini (cost-effective)
    let coverImageUrl: string | null = null
    try {
      console.log('Generating cover image...')
      coverImageUrl = await generateAndUploadBlogCover(
        articleData.title,
        category,
        slug
      )
      console.log('Cover image generated:', coverImageUrl)
    } catch (imageError) {
      console.warn('Failed to generate cover image:', imageError)
      // Continue without image - will use fallback
    }

    // Prepare blog post data
    const blogPost: BlogPostCreate = {
      title: articleData.title,
      excerpt: articleData.excerpt,
      content: articleData.content,
      cover_image: coverImageUrl || undefined,
      category,
      tags: articleData.tags,
      keywords: [...keywords, ...articleData.suggested_keywords],
      meta_description: articleData.meta_description,
      status: 'published', // Auto-publish articles
      ai_generated: true,
    }

    // Save to database (if Supabase is configured)
    let savedPost = null
    try {
      savedPost = await createBlogPost(blogPost)
    } catch (dbError) {
      console.warn('Database not configured, returning generated content only')
    }

    return NextResponse.json({
      success: true,
      post: savedPost || {
        ...blogPost,
        reading_time: readingTime,
        id: 'preview-' + Date.now(),
        slug: articleData.title
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-'),
      },
      tokens_used: message.usage,
    })
  } catch (error) {
    console.error('Error generating blog post:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate content' },
      { status: 500 }
    )
  }
}

// GET endpoint to check API status
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    configured: {
      anthropic: !!process.env.ANTHROPIC_API_KEY,
      openai: !!process.env.OPENAI_API_KEY,
      supabase: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      adminSecret: !!process.env.BLOG_ADMIN_SECRET,
    },
  })
}
