import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'

// Dynamic sitemap generation - Next.js 15 standard
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aifrontdesk.ro'
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]

  // Service pages - critical for long-tail keywords
  const services = [
    { slug: 'chatbot-ai', priority: 0.9 },
    { slug: 'automatizari-business', priority: 0.9 },
    { slug: 'website-profesional', priority: 0.9 },
    { slug: 'software-custom', priority: 0.9 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/servicii/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: service.priority,
  }))

  // Blog pages - fetch all published posts
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = await getBlogPosts()
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updated_at || post.published_at || currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.warn('Could not fetch blog posts for sitemap:', error)
  }

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  return [...mainPages, ...servicePages, ...staticPages, ...blogPages]
}
