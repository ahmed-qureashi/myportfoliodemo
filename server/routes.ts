import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body using Zod schema
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const savedMessage = await storage.createContactMessage(contactData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Your message has been received. We'll get back to you soon!",
        data: { id: savedMessage.id },
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      // Handle validation errors
      if (error instanceof Error) {
        return res.status(400).json({
          success: false,
          message: `Error processing your request: ${error.message}`,
        });
      }
      
      // Handle unknown errors
      res.status(500).json({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.status(200).json({
        success: true,
        data: messages,
      });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contact messages",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
