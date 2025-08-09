# AI Security Assurance

## Project Overview

AI Security Assurance is a cybersecurity consulting company specializing in AI-powered security solutions and expert cybersecurity services. This web application serves as our company's digital presence, showcasing our services and providing a contact portal for potential clients.

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Firebase (Hosting & Cloud Functions)
- SendGrid (Email Service)

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Firebase CLI for deployment

### Local Development

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd ai-sec-ally

# Step 3: Install dependencies
npm install

# Step 4: Start the development server (runs on port 8080)
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Firebase Hosting
- `npm run deploy:all` - Deploy both hosting and functions

## Project Structure

- `/src` - React application source code
  - `/components` - Reusable UI components (primarily shadcn/ui)
  - `/pages` - Page components for each route
- `/functions` - Firebase Cloud Functions
- `/public` - Static assets

## Deployment

The application is deployed using Firebase Hosting with Cloud Functions for backend API endpoints.

### Environment Variables

For production deployment, ensure the following environment variables are configured in Firebase Functions:
- `SENDGRID_API_KEY` - Your SendGrid API key
- `CONTACT_EMAIL` - Email address to receive contact form submissions

## Contact

For more information about AI Security Assurance and our services, please visit our website or contact us through the contact form.