/**
 * Fixed Window Rate Limiter
 * 
 * Teilt die Zeit in feste Fenster (z.B. 60 Sekunden) und zählt Anfragen pro Fenster.
 * Wenn das Limit erreicht ist, werden weitere Anfragen abgelehnt (HTTP 429).
 * 
 * Hinweis: In-Memory-Speicher wird bei jedem Serverless Cold Start zurückgesetzt.
 * Für Production mit Vercel empfiehlt sich Redis (z.B. Upstash) als Backing Store.
 */

const WINDOW_MS = 60 * 1000; // 1 Minute Fenster
const MAX_REQUESTS = 5;      // Max 5 Anfragen pro Fenster pro IP

interface ClientRecord {
  count: number;
  windowStart: number;
}

const clients = new Map<string, ClientRecord>();

// Alte Einträge regelmäßig aufräumen, damit der Speicher nicht wächst
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000; // alle 5 Minuten
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  const currentWindow = Math.floor(now / WINDOW_MS);
  for (const [ip, record] of clients) {
    if (record.windowStart < currentWindow) {
      clients.delete(ip);
    }
  }
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

export function rateLimit(ip: string): RateLimitResult {
  cleanup();

  const now = Date.now();
  const currentWindow = Math.floor(now / WINDOW_MS);
  const resetAt = (currentWindow + 1) * WINDOW_MS;

  const client = clients.get(ip);

  // Neues Fenster oder neuer Client → zurücksetzen
  if (!client || client.windowStart !== currentWindow) {
    clients.set(ip, { count: 1, windowStart: currentWindow });
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetAt };
  }

  // Gleiches Fenster → Limit prüfen
  if (client.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt };
  }

  // Zähler erhöhen
  client.count++;
  return { allowed: true, remaining: MAX_REQUESTS - client.count, resetAt };
}
