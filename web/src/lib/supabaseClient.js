import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export async function fetchProjects() {
  if (!supabase) {
    console.warn('Supabase not configured. Returning demo projects.')
    return [
      {
        id: 'demo-1',
        title: 'Modern Portfolio',
        description: 'A sleek personal site built with React + Tailwind.',
        tags: ['React', 'Tailwind'],
        url: 'https://example.com',
        image: ''
      },
      {
        id: 'demo-2',
        title: 'Realtime Chat',
        description: 'Supabase Realtime chat application with auth.',
        tags: ['Supabase', 'Auth', 'Realtime'],
        url: 'https://example.com',
        image: ''
      }
    ]
  }

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
  return data ?? []
}

export async function submitContact({ name, email, message }) {
  if (!name || !email || !message) {
    return { error: new Error('All fields are required') }
  }

  if (!supabase) {
    console.warn('Supabase not configured. Skipping contact submission.')
    return { data: { id: 'demo', name, email, message } }
  }

  const { data, error } = await supabase
    .from('contacts')
    .insert([{ name, email, message }])
    .select()
    .single()

  return { data, error }
}



