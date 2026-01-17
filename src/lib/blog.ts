import { supabase } from './supabase'
import type { BlogPost, BlogPostCreate, BlogCategory } from '@/types/blog'

// Fetch all published blog posts
export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return data as BlogPost[]
}

// Fetch posts by category
export async function getBlogPostsByCategory(category: BlogCategory, limit?: number): Promise<BlogPost[]> {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('category', category)
    .order('published_at', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching blog posts by category:', error)
    return []
  }

  return data as BlogPost[]
}

// Fetch single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error) {
    console.error('Error fetching blog post:', error)
    return null
  }

  // Increment view count
  await supabase
    .from('blog_posts')
    .update({ views: (data.views || 0) + 1 })
    .eq('id', data.id)

  return data as BlogPost
}

// Get all slugs for static generation
export async function getAllBlogSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published')

  if (error) {
    console.error('Error fetching slugs:', error)
    return []
  }

  return data.map((post) => post.slug)
}

// Create a new blog post
export async function createBlogPost(post: BlogPostCreate): Promise<BlogPost | null> {
  const slug = generateSlug(post.title)

  const { data, error } = await supabase
    .from('blog_posts')
    .insert({
      ...post,
      slug,
      author: 'AI Front Desk',
      reading_time: calculateReadingTime(post.content),
      published_at: post.status === 'published' ? new Date().toISOString() : null,
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating blog post:', error)
    return null
  }

  return data as BlogPost
}

// Update a blog post
export async function updateBlogPost(id: string, updates: Partial<BlogPostCreate>): Promise<BlogPost | null> {
  const updateData: Record<string, unknown> = { ...updates }

  if (updates.content) {
    updateData.reading_time = calculateReadingTime(updates.content)
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .update(updateData)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating blog post:', error)
    return null
  }

  return data as BlogPost
}

// Delete a blog post
export async function deleteBlogPost(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting blog post:', error)
    return false
  }

  return true
}

// Get unused topics for AI content generation
export async function getUnusedTopics(limit = 5) {
  const { data, error } = await supabase
    .from('content_topics')
    .select('*')
    .eq('used', false)
    .limit(limit)

  if (error) {
    console.error('Error fetching unused topics:', error)
    return []
  }

  return data
}

// Mark topic as used
export async function markTopicAsUsed(id: string) {
  const { error } = await supabase
    .from('content_topics')
    .update({ used: true })
    .eq('id', id)

  if (error) {
    console.error('Error marking topic as used:', error)
  }
}

// Search blog posts
export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .or(`title.ilike.%${query}%,content.ilike.%${query}%,excerpt.ilike.%${query}%`)
    .order('published_at', { ascending: false })
    .limit(10)

  if (error) {
    console.error('Error searching blog posts:', error)
    return []
  }

  return data as BlogPost[]
}

// Get related posts
export async function getRelatedPosts(post: BlogPost, limit = 3): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('category', post.category)
    .neq('id', post.id)
    .order('published_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching related posts:', error)
    return []
  }

  return data as BlogPost[]
}

// Helper: Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove duplicate hyphens
    .trim()
}

// Helper: Calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Helper: Format date for display
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
