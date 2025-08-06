import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const reservations = pgTable("reservations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  eventType: text("event_type").notNull(),
  eventDate: text("event_date").notNull(),
  guestCount: text("guest_count"),
  details: text("details"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertReservationSchema = createInsertSchema(reservations).omit({
  id: true,
  createdAt: true,
}).extend({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  eventType: z.enum(["spectacle", "prive", "corporatif"], {
    required_error: "Veuillez sélectionner un type d'événement"
  }),
  eventDate: z.string().min(1, "La date est requise"),
  guestCount: z.string().optional(),
  details: z.string().optional(),
});

// Facebook API Types
export const facebookPostSchema = z.object({
  id: z.string(),
  message: z.string().optional(),
  story: z.string().optional(),
  created_time: z.string(),
  permalink_url: z.string().optional(),
  full_picture: z.string().optional(),
  attachments: z.object({
    data: z.array(z.object({
      media: z.object({
        image: z.object({
          src: z.string()
        }).optional()
      }).optional(),
      title: z.string().optional(),
      description: z.string().optional()
    }))
  }).optional(),
  likes: z.object({
    summary: z.object({
      total_count: z.number()
    })
  }).optional(),
  comments: z.object({
    summary: z.object({
      total_count: z.number()
    })
  }).optional()
});

export const facebookEventSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  start_time: z.string(),
  end_time: z.string().optional(),
  place: z.object({
    name: z.string().optional(),
    location: z.object({
      street: z.string().optional(),
      city: z.string().optional()
    }).optional()
  }).optional(),
  cover: z.object({
    source: z.string()
  }).optional(),
  attending_count: z.number().optional(),
  interested_count: z.number().optional(),
  event_times: z.array(z.object({
    start_time: z.string(),
    end_time: z.string().optional()
  })).optional()
});

export const facebookFeedSchema = z.object({
  posts: z.array(facebookPostSchema),
  events: z.array(facebookEventSchema),
  error: z.object({
    message: z.string(),
    isTokenExpired: z.boolean()
  }).optional()
});

export type FacebookPost = z.infer<typeof facebookPostSchema>;
export type FacebookEvent = z.infer<typeof facebookEventSchema>;
export type FacebookFeed = z.infer<typeof facebookFeedSchema>;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertReservation = z.infer<typeof insertReservationSchema>;
export type Reservation = typeof reservations.$inferSelect;
