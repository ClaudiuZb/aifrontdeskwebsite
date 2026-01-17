import { MetadataRoute } from 'next'

// Robots.txt - optimized for 2026 SEO standards
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://aifrontdesk.ro'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
        ],
      },
      {
        // Googlebot specific rules - maximize crawl efficiency
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        // Googlebot Images - allow all images
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        // Bingbot
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        // AI crawlers - block or allow based on preference
        // In 2026, these are important for AI search visibility
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'Anthropic-AI',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
