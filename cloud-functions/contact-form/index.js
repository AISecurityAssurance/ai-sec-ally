const sgMail = require('@sendgrid/mail');

// Initialize SendGrid with API key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// CORS configuration
const corsHeaders = {
  'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '3600'
};

exports.contactForm = async (req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.set(corsHeaders);
    res.status(204).send('');
    return;
  }

  // Set CORS headers for all responses
  res.set(corsHeaders);

  // Only allow POST method
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    // Extract form data
    const { firstName, lastName, email, company, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      res.status(400).json({ error: 'Please fill in all required fields' });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: 'Please provide a valid email address' });
      return;
    }

    // Prepare email content
    const msg = {
      to: 'contact@aisecurityassurance.com',
      from: 'noreply@aisecurityassurance.com', // You'll need to verify this sender in SendGrid
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email
    };

    // Send email
    await sgMail.send(msg);

    // Send success response
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message. We\'ll get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Send error response
    res.status(500).json({ 
      error: 'We encountered an error sending your message. Please try again later.' 
    });
  }
};
