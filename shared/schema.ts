import { z } from "zod";

// Reservation schema for D1 database
export const insertReservationSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  date: z.string().min(1, "La date est requise"),
  time: z.string().min(1, "L'heure est requise"),
  guests: z.number().min(1, "Le nombre d'invités doit être d'au moins 1"),
  message: z.string().optional(),
});

export type InsertReservation = z.infer<typeof insertReservationSchema>;

export type Reservation = InsertReservation & {
  id: number;
  created_at: string;
};

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
