import type { Express } from "express";
import { createServer, type Server } from "node:http";
import { storage } from "./storage";
import { insertReservationSchema, facebookFeedSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Reservation routes
  app.post("/api/reservations", async (req, res) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      res.status(201).json(reservation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Données invalides", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Erreur lors de la création de la réservation" 
        });
      }
    }
  });

  app.get("/api/reservations", async (req, res) => {
    try {
      const reservations = await storage.getReservations();
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ 
        message: "Erreur lors de la récupération des réservations" 
      });
    }
  });

  app.get("/api/reservations/:id", async (req, res) => {
    try {
      const reservation = await storage.getReservation(req.params.id);
      if (!reservation) {
        res.status(404).json({ message: "Réservation non trouvée" });
        return;
      }
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ 
        message: "Erreur lors de la récupération de la réservation" 
      });
    }
  });

  // Facebook Feed routes
  app.get("/api/facebook/feed", async (req, res) => {
    try {
      const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
      const pageId = process.env.FACEBOOK_PAGE_ID || "social.bar.cie";
      
      if (!accessToken) {
        res.status(500).json({ 
          message: "Facebook Access Token non configuré. Veuillez configurer FACEBOOK_ACCESS_TOKEN dans les variables d'environnement." 
        });
        return;
      }

      // Fetch posts from Facebook Graph API
      const postsResponse = await fetch(
        `https://graph.facebook.com/v19.0/${pageId}/posts?fields=id,message,story,created_time,permalink_url,full_picture,attachments{media,title,description},likes.summary(true),comments.summary(true)&limit=10&access_token=${accessToken}`
      );

      // Fetch events from Facebook Graph API
      const eventsResponse = await fetch(
        `https://graph.facebook.com/v19.0/${pageId}/events?fields=id,name,description,start_time,end_time,place,cover,attending_count,interested_count,event_times&time_filter=upcoming&limit=10&access_token=${accessToken}`
      );

      if (!postsResponse.ok || !eventsResponse.ok) {
        let error = "Erreur de connexion";
        let isTokenExpired = false;
        
        try {
          const errorText = await postsResponse.text();
          const errorData = JSON.parse(errorText);
          
          if (errorData?.error?.code === 190) {
            isTokenExpired = true;
            error = "Token Facebook expiré";
          } else {
            error = errorData?.error?.message || errorText;
          }
          console.error("Facebook API Error:", errorText);
        } catch (e) {
          console.error("Error parsing Facebook API response");
        }

        // Return empty arrays instead of error for graceful fallback
        res.json({
          posts: [],
          events: [],
          error: {
            message: isTokenExpired ? "Token Facebook expiré - veuillez le renouveler" : "Erreur API Facebook",
            isTokenExpired
          }
        });
        return;
      }

      const postsData = await postsResponse.json();
      const eventsData = await eventsResponse.json();

      const feed = {
        posts: postsData.data || [],
        events: eventsData.data || []
      };

      // Validate the response with Zod
      const validatedFeed = facebookFeedSchema.parse(feed);
      
      res.json(validatedFeed);
    } catch (error) {
      console.error("Facebook Feed Error:", error);
      // Return empty arrays for graceful fallback
      res.json({
        posts: [],
        events: [],
        error: {
          message: "Service Facebook temporairement indisponible",
          isTokenExpired: false
        }
      });
    }
  });

  app.get("/api/facebook/posts", async (req, res) => {
    try {
      const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
      const pageId = process.env.FACEBOOK_PAGE_ID || "social.bar.cie";
      
      if (!accessToken) {
        res.status(500).json({ 
          message: "Facebook Access Token non configuré" 
        });
        return;
      }

      const response = await fetch(
        `https://graph.facebook.com/v19.0/${pageId}/posts?fields=id,message,story,created_time,permalink_url,full_picture,attachments{media,title,description},likes.summary(true),comments.summary(true)&limit=20&access_token=${accessToken}`
      );

      if (!response.ok) {
        const error = await response.text();
        console.error("Facebook Posts API Error:", error);
        res.status(502).json({ 
          message: "Erreur lors de la récupération des posts Facebook" 
        });
        return;
      }

      const data = await response.json();
      res.json(data.data || []);
    } catch (error) {
      console.error("Facebook Posts Error:", error);
      res.status(500).json({ 
        message: "Erreur lors de la récupération des posts Facebook" 
      });
    }
  });

  app.get("/api/facebook/events", async (req, res) => {
    try {
      const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
      const pageId = process.env.FACEBOOK_PAGE_ID || "social.bar.cie";
      
      if (!accessToken) {
        res.status(500).json({ 
          message: "Facebook Access Token non configuré" 
        });
        return;
      }

      const response = await fetch(
        `https://graph.facebook.com/v19.0/${pageId}/events?fields=id,name,description,start_time,end_time,place,cover,attending_count,interested_count,event_times&time_filter=upcoming&limit=20&access_token=${accessToken}`
      );

      if (!response.ok) {
        const error = await response.text();
        console.error("Facebook Events API Error:", error);
        res.status(502).json({ 
          message: "Erreur lors de la récupération des événements Facebook" 
        });
        return;
      }

      const data = await response.json();
      res.json(data.data || []);
    } catch (error) {
      console.error("Facebook Events Error:", error);
      res.status(500).json({ 
        message: "Erreur lors de la récupération des événements Facebook" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
