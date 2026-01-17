import { createClient } from '@supabase/supabase-js'

// Supabase Configuration
// You need to create a Supabase project at https://supabase.com
// Then add these environment variables to your .env.local file

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types (generated from Supabase)
export type Database = {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string
          slug: string
          title: string
          excerpt: string
          content: string
          cover_image: string | null
          author: string
          category: string
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
        Insert: Omit<Database['public']['Tables']['blog_posts']['Row'], 'id' | 'created_at' | 'updated_at' | 'views'>
        Update: Partial<Database['public']['Tables']['blog_posts']['Insert']>
      }
      content_topics: {
        Row: {
          id: string
          topic: string
          category: string
          keywords: string[]
          used: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['content_topics']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['content_topics']['Insert']>
      }
    }
  }
}

/*
===========================================
SUPABASE SQL SCHEMA - Run this in Supabase SQL Editor:
===========================================

-- Blog Posts Table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  author TEXT DEFAULT 'AI Front Desk',
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  keywords TEXT[] DEFAULT '{}',
  meta_description TEXT NOT NULL,
  reading_time INTEGER DEFAULT 5,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  views INTEGER DEFAULT 0,
  ai_generated BOOLEAN DEFAULT false
);

-- Content Topics Table (for AI to track what's been written)
CREATE TABLE content_topics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  topic TEXT NOT NULL,
  category TEXT NOT NULL,
  keywords TEXT[] DEFAULT '{}',
  used BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_topics ENABLE ROW LEVEL SECURITY;

-- Public read access for published posts
CREATE POLICY "Public can read published posts" ON blog_posts
  FOR SELECT USING (status = 'published');

-- Authenticated users can do everything
CREATE POLICY "Authenticated users full access" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users full access topics" ON content_topics
  FOR ALL USING (auth.role() = 'authenticated');

-- Update trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Insert some initial topics for AI to write about
INSERT INTO content_topics (topic, category, keywords) VALUES
('Cum să implementezi un chatbot AI pentru afacerea ta în 2026', 'chatbot-ai', ARRAY['chatbot', 'AI', 'implementare', 'business']),
('5 Automatizări care economisesc 20 ore pe săptămână', 'automatizari', ARRAY['automatizare', 'productivitate', 'workflow']),
('De ce Next.js 15 este alegerea perfectă pentru website-ul tău', 'web-development', ARRAY['Next.js', 'React', 'web development']),
('Ghid complet: Integrare WhatsApp Business API cu chatbot AI', 'chatbot-ai', ARRAY['WhatsApp', 'chatbot', 'API', 'integrare']),
('ROI-ul real al automatizărilor: Studiu de caz România', 'case-study', ARRAY['ROI', 'automatizare', 'case study']),
('Top 10 greșeli la crearea unui website de prezentare', 'tips', ARRAY['website', 'greșeli', 'tips']),
('Cum să alegi între chatbot rule-based și AI conversațional', 'tutorial', ARRAY['chatbot', 'AI', 'comparație']),
('Viitorul muncii: AI și automatizare în 2026', 'news', ARRAY['AI', 'viitor', 'automatizare', 'tendințe']);

*/
