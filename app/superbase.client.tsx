import { createClient } from '@supabase/supabase-js';

/**
 * Supabase Client Konfiguration
 * 
 * Die Zugangsdaten werden aus Umgebungsvariablen geladen (NICHT hardcoded!)
 * Diese müssen in .env.local definiert werden (lokal)
 * und in deinem Hosting-Provider (z.B. Vercel, Netlify) für Production
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);