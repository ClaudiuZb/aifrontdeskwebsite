import OpenAI from 'openai'
import { supabase } from './supabase'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface ImageGenerationOptions {
  prompt: string
  size?: '1024x1024' | '1024x1536' | '1536x1024'
  quality?: 'low' | 'medium' | 'high' | 'auto'
  format?: 'png' | 'jpeg' | 'webp'
  background?: 'transparent' | 'opaque' | 'auto'
}

export interface GeneratedImage {
  base64: string
  url?: string
  revisedPrompt?: string
}

/**
 * Generate a blog cover image using GPT Image Mini (gpt-image-1-mini)
 * Most cost-effective option for blog images
 * Cost: ~272 tokens for 1024x1024 low quality
 */
export async function generateBlogCoverImage(
  articleTitle: string,
  articleCategory: string,
  customPrompt?: string
): Promise<GeneratedImage | null> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.warn('OPENAI_API_KEY not configured, skipping image generation')
      return null
    }

    // Generate an optimized prompt for the blog cover
    const imagePrompt = customPrompt || generateImagePrompt(articleTitle, articleCategory)

    console.log('Generating image with prompt:', imagePrompt)

    const result = await openai.images.generate({
      model: 'gpt-image-1-mini', // Cost-effective option
      prompt: imagePrompt,
      size: '1536x1024', // Landscape for blog covers
      quality: 'low', // Most cost-effective (~400 tokens)
      background: 'opaque',
      output_format: 'jpeg', // Faster than PNG
    })

    if (!result.data?.[0]?.b64_json) {
      throw new Error('No image data in response')
    }

    return {
      base64: result.data[0].b64_json,
      revisedPrompt: result.data[0].revised_prompt,
    }
  } catch (error) {
    console.error('Error generating image:', error)
    return null
  }
}

/**
 * Generate an optimized prompt for blog cover images
 */
function generateImagePrompt(title: string, category: string): string {
  const categoryStyles: Record<string, string> = {
    'chatbot-ai': 'futuristic AI assistant interface, glowing neural networks, purple and cyan neon colors',
    'automatizari': 'abstract workflow automation, connected gears and data flows, orange and blue tech aesthetic',
    'web-development': 'modern web design elements, code snippets floating, cyan and purple gradient',
    'software': 'software architecture visualization, modular components, red and orange tech style',
    'tutorial': 'educational tech illustration, step-by-step visual guide, green accent colors',
    'case-study': 'business analytics dashboard, charts and growth metrics, blue professional style',
    'news': 'futuristic news broadcast style, tech headlines, purple and white clean design',
    'tips': 'lightbulb moment illustration, productivity and innovation, pink and purple gradient',
  }

  const style = categoryStyles[category] || 'modern tech aesthetic, purple and cyan gradient'

  return `Professional blog cover image for "${title}".
Style: ${style}.
Requirements:
- Dark background (#030014 deep purple/black)
- Vibrant accents (cyan #00f5ff, purple #a855f7)
- Abstract geometric or tech elements
- NO text or letters
- Clean, minimalist composition
- Tech/AI company aesthetic`
}

/**
 * Upload image to Supabase Storage
 */
export async function uploadImageToSupabase(
  base64Image: string,
  fileName: string
): Promise<string | null> {
  try {
    // Convert base64 to buffer
    const imageBuffer = Buffer.from(base64Image, 'base64')

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(`covers/${fileName}`, imageBuffer, {
        contentType: 'image/jpeg',
        cacheControl: '31536000', // 1 year cache
        upsert: true,
      })

    if (error) {
      console.error('Supabase upload error:', error)
      return null
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('blog-images')
      .getPublicUrl(`covers/${fileName}`)

    return urlData.publicUrl
  } catch (error) {
    console.error('Error uploading image:', error)
    return null
  }
}

/**
 * Generate and upload blog cover image
 * Returns the public URL of the uploaded image
 */
export async function generateAndUploadBlogCover(
  articleTitle: string,
  articleCategory: string,
  slug: string
): Promise<string | null> {
  // Generate the image
  const generatedImage = await generateBlogCoverImage(articleTitle, articleCategory)

  if (!generatedImage) {
    console.warn('Failed to generate image, using fallback')
    return getFallbackImage(articleCategory)
  }

  // Upload to Supabase
  const fileName = `${slug}-${Date.now()}.jpg`
  const publicUrl = await uploadImageToSupabase(generatedImage.base64, fileName)

  if (!publicUrl) {
    console.warn('Failed to upload image, using fallback')
    return getFallbackImage(articleCategory)
  }

  return publicUrl
}

/**
 * Get a fallback image from Unsplash based on category
 */
function getFallbackImage(category: string): string {
  const fallbackImages: Record<string, string> = {
    'chatbot-ai': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop',
    'automatizari': 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=630&fit=crop',
    'web-development': 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=630&fit=crop',
    'software': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop',
    'tutorial': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop',
    'case-study': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
    'news': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=630&fit=crop',
    'tips': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop',
  }

  return fallbackImages[category] || fallbackImages['chatbot-ai']
}

/**
 * Token costs for gpt-image-1-mini
 * Lower cost than gpt-image-1
 */
export function estimateImageCost(
  quality: 'low' | 'medium' | 'high',
  size: '1024x1024' | '1024x1536' | '1536x1024'
): { tokens: number; estimatedCost: string } {
  // gpt-image-1-mini uses same token structure but lower cost per token
  const tokenCounts: Record<string, Record<string, number>> = {
    low: { '1024x1024': 272, '1024x1536': 408, '1536x1024': 400 },
    medium: { '1024x1024': 1056, '1024x1536': 1584, '1536x1024': 1568 },
    high: { '1024x1024': 4160, '1024x1536': 6240, '1536x1024': 6208 },
  }

  const tokens = tokenCounts[quality][size]
  // gpt-image-1-mini is cheaper - estimate ~$0.000005 per token
  const cost = tokens * 0.000005

  return {
    tokens,
    estimatedCost: `~$${cost.toFixed(4)}`,
  }
}

// Example: Low quality 1536x1024 = 400 tokens × $0.000005 = ~$0.002 per image!
// 8 images/month = ~$0.016/month for blog images 🎉

/*
===========================================
SUPABASE STORAGE SETUP
===========================================

Run this in Supabase SQL Editor to create the storage bucket:

-- Create a storage bucket for blog images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true);

-- Allow public read access
CREATE POLICY "Public read access for blog images"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- Allow authenticated uploads
CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blog-images');

*/
