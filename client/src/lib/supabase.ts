import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Type for the brochure download form data
export interface BrochureFormData {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  project_name: string;
  created_at?: string;
} 