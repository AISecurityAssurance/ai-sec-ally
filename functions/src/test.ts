import {onRequest} from "firebase-functions/v2/https";

// Simple test function
export const testFunction = onRequest({cors: true}, (req, res) => {
  res.json({ 
    message: "Test function is working!",
    timestamp: new Date().toISOString()
  });
});
