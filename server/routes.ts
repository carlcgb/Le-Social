import type { Express, Request, Response } from "express";
import { createServer, type Server } from "node:http";
import { Resend } from "resend";
import { insertReservationSchema, type InsertReservation } from "../shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize Resend email service
  // Get your API key from https://resend.com/api-keys
  // Free tier: 100 emails/day, 3,000 emails/month
  const resend = process.env.RESEND_API_KEY 
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

  // Reservation submission endpoint
  app.post("/api/reservations", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validationResult = insertReservationSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({
          success: false,
          message: "Données invalides",
          errors: validationResult.error.errors,
        });
      }

      const data: InsertReservation = validationResult.data;

      // Format event type for display
      const eventTypeLabels: Record<string, string> = {
        spectacle: "Spectacle",
        prive: "Événement Privé",
        corporatif: "Événement Corporatif",
      };

      const eventTypeLabel = data.eventType 
        ? eventTypeLabels[data.eventType] || data.eventType 
        : "Non spécifié";

      // Create email content
      const emailHtml = `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Prénom:</strong> ${data.firstName}</p>
        <p><strong>Nom:</strong> ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.phone}</p>
        <p><strong>Type d'événement:</strong> ${eventTypeLabel}</p>
        <p><strong>Date souhaitée:</strong> ${data.eventDate}</p>
        <p><strong>Nombre d'invités:</strong> ${data.guestCount}</p>
        ${data.details ? `<p><strong>Détails:</strong><br>${data.details.replace(/\n/g, '<br>')}</p>` : ''}
      `;

      const emailText = `
Nouvelle demande de réservation

Prénom: ${data.firstName}
Nom: ${data.lastName}
Email: ${data.email}
Téléphone: ${data.phone}
Type d'événement: ${eventTypeLabel}
Date souhaitée: ${data.eventDate}
Nombre d'invités: ${data.guestCount}
${data.details ? `Détails: ${data.details}` : ''}
      `.trim();

      // Send email using Resend
      if (!resend) {
        console.warn("RESEND_API_KEY not configured. Email not sent. Please set RESEND_API_KEY environment variable.");
        // Still return success in development to allow testing without email
        if (process.env.NODE_ENV === "development") {
          console.log("Email would be sent to info@socialbar.ca with the following data:", data);
          return res.json({
            success: true,
            message: "Demande de réservation reçue (email non envoyé - RESEND_API_KEY non configuré)",
          });
        }
        return res.status(500).json({
          success: false,
          message: "Service email non configuré",
        });
      }

      try {
        await resend.emails.send({
          from: process.env.EMAIL_FROM || "Le Social <onboarding@resend.dev>",
          to: "info@socialbar.ca",
          subject: `Nouvelle demande de réservation - ${data.firstName} ${data.lastName}`,
          text: emailText,
          html: emailHtml,
        });

        res.json({
          success: true,
          message: "Demande de réservation envoyée avec succès",
        });
      } catch (emailError: any) {
        console.error("Error sending email:", emailError);
        
        res.status(500).json({
          success: false,
          message: "Erreur lors de l'envoi de l'email",
          error: process.env.NODE_ENV === "development" ? emailError.message : undefined,
        });
      }
    } catch (error: any) {
      console.error("Error processing reservation:", error);
      res.status(500).json({
        success: false,
        message: "Erreur lors du traitement de la demande",
        error: process.env.NODE_ENV === "development" ? error.message : undefined,
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

