import {onRequest} from "firebase-functions/v2/https";
import {setGlobalOptions} from "firebase-functions/v2";
// import {defineSecret} from "firebase-functions/params";
import * as admin from "firebase-admin";
import sgMail from "@sendgrid/mail";
import {Request, Response} from "express";
import Busboy from "busboy";

// Extend Express Request type to include Firebase's rawBody property
interface FirebaseRequest extends Request {
  rawBody?: Buffer;
}

// Initialize Firebase Admin
admin.initializeApp();

// Set global options
setGlobalOptions({maxInstances: 10});

// Define secrets
// const sendGridApiKey = defineSecret("SENDGRID_API_KEY"); # Not working
// const contactEmail = defineSecret("CONTACT_EMAIL"); # Not working
const contactEmailValue = process.env.CONTACT_EMAIL || "contact@aisecurityassurance.com";



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
    // const contactEmailValue = contactEmail.value() || "contact@aisecurityassurance.com";

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
    //     await admin.firestore().collection("contact-submissions").add({
    //       firstName,
    //       lastName,
    //       email,
    //       company: company || null,
    //       message,
    //       timestamp: admin.firestore.FieldValue.serverTimestamp(),
    //       userAgent: req.get("User-Agent") || null,
    //       ip: req.ip || null,
    //     });

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

// Career application form handler
export const careerApplication = onRequest({
  region: "us-east1",
  maxInstances: 10,
  timeoutSeconds: 120,
  memory: "512MiB",
  cors: true,
  secrets: [],
  invoker: "public"
}, async (req: FirebaseRequest, res: Response) => {
  // Handle CORS
  if (corsHandler(req, res)) return;

  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    // Get configuration
    const sendGridApiKeyValue = process.env.CAREERS_FORM_API || process.env.SENDGRID_API_KEY;
    const careersEmail = process.env.CAREERS_EMAIL || "careers@aisecurityassurance.com";

    if (!sendGridApiKeyValue) {
      console.error("Missing SendGrid API Key (CAREERS_FORM_API or SENDGRID_API_KEY)");
      res.status(500).json({ error: "Server configuration error" });
      return;
    }

    // Set SendGrid API Key
    sgMail.setApiKey(sendGridApiKeyValue);

    // Parse multipart form data
    const busboy = Busboy({
      headers: req.headers,
      limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
        files: 2 // Maximum 2 files (resume + cover letter)
      }
    });
    const fields: Record<string, string> = {};
    const uploads: { filename: string; buffer: Buffer; mimetype: string }[] = [];

    // Process form fields
    busboy.on("field", (fieldname: string, val: string) => {
      console.log(`Received field: ${fieldname}`);
      fields[fieldname] = val;
    });

    // Process file uploads
    busboy.on("file", (fieldname: string, file: NodeJS.ReadableStream, info: { filename: string; encoding: string; mimeType: string }) => {
      const { filename, mimeType } = info;
      console.log(`Receiving file: ${filename}, type: ${mimeType}`);
      const chunks: Buffer[] = [];

      file.on("data", (data: Buffer) => {
        chunks.push(data);
      });

      file.on("end", () => {
        const buffer = Buffer.concat(chunks);
        console.log(`File received: ${filename}, size: ${buffer.length} bytes`);
        uploads.push({
          filename,
          buffer,
          mimetype: mimeType
        });
      });

      file.on("error", (err) => {
        console.error(`File stream error for ${filename}:`, err);
      });
    });

    // Wait for all parsing to complete
    await new Promise<void>((resolve, reject) => {
      busboy.on("finish", () => {
        console.log("Busboy parsing finished");
        resolve();
      });
      busboy.on("error", (err) => {
        console.error("Busboy error:", err);
        reject(err);
      });

      // Firebase Functions v2 pre-buffers the request body into req.rawBody
      // We must use busboy.end(rawBody) instead of req.pipe(busboy)
      // because the request stream has already been consumed
      if (req.rawBody) {
        busboy.end(req.rawBody);
      } else {
        // Fallback for emulator or edge cases
        req.pipe(busboy);
      }
    });

    // Validate required fields
    const { firstName, lastName, email, jobTitle } = fields;
    if (!firstName || !lastName || !email || !jobTitle) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
      res.status(400).json({ error: "Invalid email format" });
      return;
    }

    // Validate resume upload
    if (uploads.length === 0) {
      res.status(400).json({ error: "Resume upload is required" });
      return;
    }

    // Build email content
    let htmlContent = `
      <h2>New Career Application</h2>
      <p><strong>Position:</strong> ${jobTitle}</p>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;

    if (fields.phone) {
      htmlContent += `<p><strong>Phone:</strong> ${fields.phone}</p>`;
    }
    if (fields.linkedin) {
      htmlContent += `<p><strong>LinkedIn:</strong> <a href="${fields.linkedin}">${fields.linkedin}</a></p>`;
    }
    if (fields.github) {
      htmlContent += `<p><strong>GitHub:</strong> <a href="${fields.github}">${fields.github}</a></p>`;
    }
    if (fields.website) {
      htmlContent += `<p><strong>Website:</strong> <a href="${fields.website}">${fields.website}</a></p>`;
    }

    htmlContent += `
      <hr>
      <p><small>Submitted at: ${new Date().toISOString()}</small></p>
    `;

    if (uploads.length > 1) {
      htmlContent += "<p><small>Note: Cover letter attached as separate file</small></p>";
    }

    // Prepare attachments for SendGrid
    const attachments = uploads.map((upload) => ({
      content: upload.buffer.toString("base64"),
      filename: upload.filename,
      type: upload.mimetype,
      disposition: "attachment"
    }));

    // Email message
    const msg = {
      to: careersEmail,
      from: "careers@aisecurityassurance.com", // Must be a verified sender
      subject: `New Application: ${jobTitle} - ${firstName} ${lastName}`,
      html: htmlContent,
      attachments
    };

    // Send email
    await sgMail.send(msg);

    // Success response
    res.status(200).json({
      success: true,
      message: "Thank you! Your application has been submitted successfully."
    });

  } catch (error) {
    console.error("Career application error:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    res.status(500).json({
      error: "Failed to submit application. Please try again later or email your resume to careers@aisecurityassurance.com"
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
