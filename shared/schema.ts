import { z } from "zod";

// Reservation form schema (for client-side validation only)
export const insertReservationSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  eventType: z.string().optional(),
  eventDate: z.string().min(1, "La date est requise"),
  guestCount: z.string().min(1, "Le nombre d'invités est requis"),
  details: z.string().optional(),
});

export type InsertReservation = z.infer<typeof insertReservationSchema>;

