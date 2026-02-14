import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { rateLimit } from '@/lib/rateLimiter';

/**
 * Server-seitige Supabase-Instanz
 * 
 * Verwendet server-only Umgebungsvariablen (ohne NEXT_PUBLIC_ Prefix).
 * Falls SUPABASE_SERVICE_KEY nicht gesetzt ist, fällt es auf den Anon Key zurück.
 */
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budgetMin: number;
  budgetMax: number;
  timeline?: string;
  description: string;
}

/**
 * Einfache Server-seitige Validierung der Formulardaten
 */
function validateBody(body: unknown): { valid: true; data: ContactFormData } | { valid: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Ungültige Anfrage.' };
  }

  const b = body as Record<string, unknown>;

  if (typeof b.name !== 'string' || b.name.trim().length === 0) {
    return { valid: false, error: 'Name ist erforderlich.' };
  }

  if (typeof b.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) {
    return { valid: false, error: 'Gültige E-Mail-Adresse ist erforderlich.' };
  }

  if (typeof b.projectType !== 'string' || b.projectType.trim().length === 0) {
    return { valid: false, error: 'Projektart ist erforderlich.' };
  }

  if (typeof b.description !== 'string' || b.description.trim().length === 0) {
    return { valid: false, error: 'Projektbeschreibung ist erforderlich.' };
  }

  // Längen-Limits als Schutz gegen übergroße Payloads
  if (b.name.length > 200) return { valid: false, error: 'Name ist zu lang.' };
  if (b.email.length > 200) return { valid: false, error: 'E-Mail ist zu lang.' };
  if (b.description.length > 5000) return { valid: false, error: 'Beschreibung ist zu lang.' };
  if (typeof b.company === 'string' && b.company.length > 200) return { valid: false, error: 'Firmenname ist zu lang.' };
  if (typeof b.phone === 'string' && b.phone.length > 50) return { valid: false, error: 'Telefonnummer ist zu lang.' };

  return {
    valid: true,
    data: {
      name: b.name.trim(),
      email: b.email.trim(),
      company: typeof b.company === 'string' ? b.company.trim() : undefined,
      phone: typeof b.phone === 'string' ? b.phone.trim() : undefined,
      projectType: b.projectType.trim(),
      budgetMin: typeof b.budgetMin === 'number' ? b.budgetMin : 5000,
      budgetMax: typeof b.budgetMax === 'number' ? b.budgetMax : 40000,
      timeline: typeof b.timeline === 'string' ? b.timeline.trim() : undefined,
      description: b.description.trim(),
    },
  };
}

export async function POST(req: NextRequest) {
  // IP-Adresse aus dem Request-Header lesen
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  // Rate Limit prüfen
  const { allowed, remaining, resetAt } = rateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut.' },
      {
        status: 429,
        headers: {
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(resetAt),
          'Retry-After': String(Math.ceil((resetAt - Date.now()) / 1000)),
        },
      }
    );
  }

  // Body parsen
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ungültiger Request Body.' }, { status: 400 });
  }

  // Validierung
  const result = validateBody(body);
  if (!result.valid) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const { data } = result;

  // In Supabase einfügen
  const { error } = await supabase.from('customer').insert({
    name: data.name,
    email: data.email,
    company: data.company || '',
    phone: data.phone || '',
    project_type: data.projectType,
    budget_min: data.budgetMin,
    budget_max: data.budgetMax,
    timeline: data.timeline || '',
    description: data.description,
  });

  if (error) {
    console.error('Supabase Fehler:', error);
    return NextResponse.json(
      { error: 'Fehler beim Speichern. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { success: true },
    {
      status: 200,
      headers: {
        'X-RateLimit-Remaining': String(remaining),
        'X-RateLimit-Reset': String(resetAt),
      },
    }
  );
}
