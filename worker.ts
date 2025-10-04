import { insertReservationSchema, facebookFeedSchema } from "@shared/schema";
import { z } from "zod";

// Database interface for Cloudflare D1
interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>;
  exec(query: string): Promise<D1ExecResult>;
}

// Environment interface
interface Env {
  DB: D1Database;
  FACEBOOK_ACCESS_TOKEN: string;
  FACEBOOK_PAGE_ID: string;
}

// Database operations
class Database {
  constructor(private db: D1Database) {}

  async createReservation(data: any) {
    const stmt = this.db.prepare(`
      INSERT INTO reservations (name, email, phone, date, time, guests, message, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    const result = await stmt.bind(
      data.name,
      data.email,
      data.phone,
      data.date,
      data.time,
      data.guests,
      data.message || '',
      new Date().toISOString()
    ).run();

    return {
      id: result.meta.last_row_id,
      ...data,
      created_at: new Date().toISOString()
    };
  }

  async getReservations() {
    const stmt = this.db.prepare(`
      SELECT * FROM reservations 
      ORDER BY created_at DESC
    `);
    
    const result = await stmt.all();
    return result.results;
  }

  async getReservation(id: string) {
    const stmt = this.db.prepare(`
      SELECT * FROM reservations WHERE id = ?
    `);
    
    const result = await stmt.bind(id).first();
    return result;
  }
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Helper function to create response
function createResponse(data: any, status: number = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders,
      ...headers,
    },
  });
}

// Helper function to handle CORS preflight
function handleCORS(request: Request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }
  return null;
}

// Facebook API functions
async function fetchFacebookPosts(accessToken: string, pageId: string) {
  const response = await fetch(
    `https://graph.facebook.com/v19.0/${pageId}/posts?fields=id,message,story,created_time,permalink_url,full_picture,attachments{media,title,description},likes.summary(true),comments.summary(true)&limit=10&access_token=${accessToken}`
  );
  
  if (!response.ok) {
    throw new Error(`Facebook API error: ${response.status}`);
  }
  
  return response.json();
}

async function fetchFacebookEvents(accessToken: string, pageId: string) {
  const response = await fetch(
    `https://graph.facebook.com/v19.0/${pageId}/events?fields=id,name,description,start_time,end_time,place,cover,attending_count,interested_count,event_times&time_filter=upcoming&limit=10&access_token=${accessToken}`
  );
  
  if (!response.ok) {
    throw new Error(`Facebook API error: ${response.status}`);
  }
  
  return response.json();
}

// Main worker handler
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // Handle CORS preflight
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    // Initialize database
    const db = new Database(env.DB);

    try {
      // Reservation routes
      if (path === '/api/reservations' && method === 'POST') {
        const body = await request.json();
        const validatedData = insertReservationSchema.parse(body);
        const reservation = await db.createReservation(validatedData);
        return createResponse(reservation, 201);
      }

      if (path === '/api/reservations' && method === 'GET') {
        const reservations = await db.getReservations();
        return createResponse(reservations);
      }

      if (path.startsWith('/api/reservations/') && method === 'GET') {
        const id = path.split('/')[3];
        const reservation = await db.getReservation(id);
        if (!reservation) {
          return createResponse({ message: 'Réservation non trouvée' }, 404);
        }
        return createResponse(reservation);
      }

      // Facebook Feed route
      if (path === '/api/facebook/feed' && method === 'GET') {
        const accessToken = env.FACEBOOK_ACCESS_TOKEN;
        const pageId = env.FACEBOOK_PAGE_ID || 'social.bar.cie';
        
        if (!accessToken) {
          return createResponse({
            posts: [],
            events: [],
            error: {
              message: 'Facebook Access Token non configuré',
              isTokenExpired: false
            }
          });
        }

        try {
          const [postsData, eventsData] = await Promise.all([
            fetchFacebookPosts(accessToken, pageId),
            fetchFacebookEvents(accessToken, pageId)
          ]);

          const feed = {
            posts: postsData.data || [],
            events: eventsData.data || []
          };

          const validatedFeed = facebookFeedSchema.parse(feed);
          return createResponse(validatedFeed);
        } catch (error) {
          console.error('Facebook Feed Error:', error);
          return createResponse({
            posts: [],
            events: [],
            error: {
              message: 'Service Facebook temporairement indisponible',
              isTokenExpired: false
            }
          });
        }
      }

      // Facebook Posts route
      if (path === '/api/facebook/posts' && method === 'GET') {
        const accessToken = env.FACEBOOK_ACCESS_TOKEN;
        const pageId = env.FACEBOOK_PAGE_ID || 'social.bar.cie';
        
        if (!accessToken) {
          return createResponse({ message: 'Facebook Access Token non configuré' }, 500);
        }

        try {
          const postsData = await fetchFacebookPosts(accessToken, pageId);
          return createResponse(postsData.data || []);
        } catch (error) {
          console.error('Facebook Posts Error:', error);
          return createResponse({ message: 'Erreur lors de la récupération des posts Facebook' }, 500);
        }
      }

      // Facebook Events route
      if (path === '/api/facebook/events' && method === 'GET') {
        const accessToken = env.FACEBOOK_ACCESS_TOKEN;
        const pageId = env.FACEBOOK_PAGE_ID || 'social.bar.cie';
        
        if (!accessToken) {
          return createResponse({ message: 'Facebook Access Token non configuré' }, 500);
        }

        try {
          const eventsData = await fetchFacebookEvents(accessToken, pageId);
          return createResponse(eventsData.data || []);
        } catch (error) {
          console.error('Facebook Events Error:', error);
          return createResponse({ message: 'Erreur lors de la récupération des événements Facebook' }, 500);
        }
      }

      // Serve static files for frontend
      if (path === '/' || path.startsWith('/assets/') || path.endsWith('.html') || path.endsWith('.js') || path.endsWith('.css')) {
        // This will be handled by Cloudflare Pages for the frontend
        return new Response('Not Found', { status: 404 });
      }

      // 404 for unknown routes
      return createResponse({ message: 'Route non trouvée' }, 404);

    } catch (error) {
      console.error('Worker Error:', error);
      
      if (error instanceof z.ZodError) {
        return createResponse({
          message: 'Données invalides',
          errors: error.errors
        }, 400);
      }

      return createResponse({
        message: 'Erreur interne du serveur'
      }, 500);
    }
  },
};
