import {onRequest} from "firebase-functions/v2/https";
import {setGlobalOptions} from "firebase-functions/v2";
import {defineSecret} from "firebase-functions/params";
import * as admin from "firebase-admin";
import sgMail from "@sendgrid/mail";
import {Request, Response} from "express";

// Initialize Firebase Admin
admin.initializeApp();

// Set global options
setGlobalOptions({maxInstances: 10});

// Define secrets
// const sendGridApiKey = defineSecret("SENDGRID_API_KEY"); # Not working
// const contactEmail = defineSecret("CONTACT_EMAIL"); # Not working


// CORS helper function
const corsHandler = (req: Request, res: Response) => {
  // Set CORS headers
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return true;
  }
  return false;
};

// Email validation helper
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Main contact form handler
export const contactForm = onRequest({
  region: "us-east1",
  maxInstances: 10,
  timeoutSeconds: 60,
  memory: "256MiB",
  cors: true,
  secrets: [],
  // secrets: [sendGridApiKey, contactEmail], // Not working with v2
  invoker: "public"
}, async (req: Request, res: Response) => {
  // Handle CORS
  if (corsHandler(req, res)) return;

  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    // Get form data
    const { firstName, lastName, email, company, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
      res.status(400).json({ error: "Invalid email format" });
      return;
    }

    // Get configuration from secrets
    // const sendGridApiKeyValue = sendGridApiKey.value();
    const sendGridApiKeyValue = process.env.SENDGRID_API_KEY;
    const contactEmailValue = contactEmail.value() || "contact@aisecurityassurance.com";

    if (!sendGridApiKeyValue) {
      console.error("Missing SendGrid API Key");
      res.status(500).json({ error: "Server configuration error" });
      return;
    }

    // Set SendGrid API Key
    sgMail.setApiKey(sendGridApiKeyValue);

    // Email content
    const msg = {
      to: contactEmailValue,
      from: "contact@aisecurityassurance.com", // This must be a verified sender
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toISOString()}</small></p>
      `,
    };

    // Send email
    await sgMail.send(msg);

    // Optional: Store in Firestore for backup/analytics
    await admin.firestore().collection("contact-submissions").add({
      firstName,
      lastName,
      email,
      company: company || null,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      userAgent: req.get("User-Agent") || null,
      ip: req.ip || null,
    });

    // Success response
    res.status(200).json({
      success: true,
      message: "Thank you! Your message has been sent successfully."
    });

  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      error: "Failed to send message. Please try again later."
    });
  }
});

// Health check endpoint
export const healthCheck = onRequest({
  region: "us-east1",
  cors: true
}, (req: Request, res: Response) => {
  if (corsHandler(req, res)) return;

  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});