// Blog Types - 2026 Standard

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  cover_image?: string
  author: string
  category: BlogCategory
  tags: string[]
  keywords: string[]
  meta_description: string
  reading_time: number
  status: 'draft' | 'published' | 'scheduled'
  published_at: string | null
  created_at: string
  updated_at: string
  views: number
  ai_generated: boolean
}

export type BlogCategory =
  | 'chatbot-ai'
  | 'automatizari'
  | 'web-development'
  | 'software'
  | 'tutorial'
  | 'case-study'
  | 'news'
  | 'tips'

export interface BlogPostCreate {
  title: string
  excerpt: string
  content: string
  cover_image?: string
  category: BlogCategory
  tags: string[]
  keywords: string[]
  meta_description: string
  status: 'draft' | 'published' | 'scheduled'
  published_at?: string
  ai_generated?: boolean
}

export interface AIContentRequest {
  topic: string
  category: BlogCategory
  keywords: string[]
  tone: 'professional' | 'casual' | 'educational'
  length: 'short' | 'medium' | 'long'
  language: 'ro' | 'en'
}

export interface AIContentResponse {
  title: string
  excerpt: string
  content: string
  meta_description: string
  tags: string[]
  suggested_keywords: string[]
  reading_time: number
}

export const BLOG_CATEGORIES: Record<BlogCategory, { label: string; color: string }> = {
  'chatbot-ai': { label: 'Chatbot AI', color: '#a855f7' },
  'automatizari': { label: 'Automatizări', color: '#f59e0b' },
  'web-development': { label: 'Web Development', color: '#06b6d4' },
  'software': { label: 'Software', color: '#ef4444' },
  'tutorial': { label: 'Tutorial', color: '#22c55e' },
  'case-study': { label: 'Studiu de Caz', color: '#3b82f6' },
  'news': { label: 'Știri', color: '#8b5cf6' },
  'tips': { label: 'Tips & Tricks', color: '#ec4899' },
}
