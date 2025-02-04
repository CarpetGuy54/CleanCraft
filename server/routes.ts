import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  service: z.string(),
  message: z.string().optional(),
});

export function registerRoutes(app: Express): Server {
  // Booking endpoint
  app.post("/api/bookings", async (req, res) => {
    try {
      const booking = bookingSchema.parse(req.body);
      
      // Here we would typically:
      // 1. Save the booking to database
      // 2. Send confirmation emails
      // 3. Create Google Calendar event
      
      // For now, we'll just return success
      res.json({ success: true, message: "Booking received" });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid booking data" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
