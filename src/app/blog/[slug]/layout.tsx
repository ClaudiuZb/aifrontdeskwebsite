import { Metadata } from 'next'
import { getBlogPostBySlug } from '@/lib/blog'
import { BLOG_CATEGORIES } from '@/types/blog'

interface Props {
  params: Promise<{ slug: string }>
  children: React.ReactNode
}

// Generate dynamic metadata for each blog post - critical for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Articol Negăsit',
      description: 'Acest articol nu a fost găsit.',
    }
  }

  const categoryLabel = BLOG_CATEGORIES[post.category]?.label || post.category
  const baseUrl = 'https://aifrontdesk.io'

  return {
    title: post.title,
    description: post.meta_description || post.excerpt,
    keywords: post.keywords || post.tags,
    authors: [{ name: post.author || 'AI Front Desk' }],
    openGraph: {
      type: 'article',
      locale: 'ro_RO',
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: 'AI Front Desk',
      title: post.title,
      description: post.meta_description || post.excerpt,
      publishedTime: post.published_at || undefined,
      modifiedTime: post.updated_at || undefined,
      authors: [post.author || 'AI Front Desk'],
      section: categoryLabel,
      tags: post.tags,
      images: post.cover_image
        ? [
            {
              url: post.cover_image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [
            {
              url: `${baseUrl}/og-image.jpg`,
              width: 1200,
              height: 630,
              alt: 'AI Front Desk Blog',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.meta_description || post.excerpt,
      images: post.cover_image ? [post.cover_image] : [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

// JSON-LD structured data for blog articles - helps Google understand content
function generateArticleJsonLd(post: {
  title: string
  excerpt: string
  content: string
  slug: string
  author: string
  published_at: string | null
  updated_at: string | null
  cover_image: string | null
  category: string
  tags: string[]
  reading_time: number
}) {
  const baseUrl = 'https://aifrontdesk.io'
  const categoryLabel = BLOG_CATEGORIES[post.category]?.label || post.category

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.cover_image || `${baseUrl}/og-image.jpg`,
    author: {
      '@type': 'Organization',
      name: post.author || 'AI Front Desk',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Front Desk',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
    url: `${baseUrl}/blog/${post.slug}`,
    articleSection: categoryLabel,
    keywords: post.tags.join(', '),
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.reading_time}M`,
    inLanguage: 'ro-RO',
    isAccessibleForFree: true,
    // Breadcrumb for better navigation in search results
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Acasă',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${baseUrl}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: categoryLabel,
          item: `${baseUrl}/blog?category=${post.category}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: post.title,
          item: `${baseUrl}/blog/${post.slug}`,
        },
      ],
    },
  }
}

export default async function BlogPostLayout({ params, children }: Props) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  return (
    <>
      {post && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateArticleJsonLd(post)),
          }}
        />
      )}
      {children}
    </>
  )
}
