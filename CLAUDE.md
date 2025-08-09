# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Security Ally is a cybersecurity consulting company website built with React, TypeScript, and Vite. The application uses Firebase for hosting and serverless functions, with SendGrid for email delivery.

## Development Commands

```bash
# Development server (runs on port 8080)
npm run dev

# Production build
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview

# Firebase deployment
npm run deploy        # Deploy hosting only
npm run deploy:all    # Deploy hosting and functions
```

## Architecture

### Frontend Structure
The application uses a component-based architecture with React Router for navigation:

- **Pages** (`src/pages/`): Each route has a dedicated page component
- **Components** (`src/components/`): Reusable UI components, primarily from shadcn/ui
- **Styles**: Tailwind CSS with custom theme variables in `src/index.css`
- **Assets**: Images stored in `public/` with direct path references

### Key Architectural Patterns

1. **Component Library Pattern**: Uses shadcn/ui components (`Button`, `Card`, `Form`, etc.) for consistent UI. These are not npm packages but copied components in `src/components/ui/`.

2. **Contact Form Flow**:
   - Form submission → POST to `/api/contact`
   - Firebase Function processes request
   - SendGrid API sends email to configured recipient
   - Note: Firestore storage is currently commented out due to security policy issues

3. **Environment Configuration**:
   - Frontend uses Vite's environment variables
   - Firebase Functions require `SENDGRID_API_KEY` and `CONTACT_EMAIL` in function config

### Important Implementation Details

- **TypeScript Configuration**: Relaxed strict mode (`noImplicitAny: false`, `strictNullChecks: false`) - be cautious about type safety
- **Firebase Rewrites**: All `/api/*` routes are handled by the `api` Cloud Function
- **Custom Animations**: Tailwind config includes custom `fade-in` and `pulse-glow` animations used throughout the site

## Firebase Functions

The backend API is a single Express-based Cloud Function (`functions/src/index.ts`) that handles:
- Contact form submissions at `/api/contact`
- Email sending via SendGrid
- CORS is configured for production domain

## Testing Approach

Currently no test suite is configured. When adding tests:
1. Install testing dependencies (Jest/Vitest recommended for Vite projects)
2. Add test scripts to package.json
3. Follow React Testing Library patterns for component tests

## Known Issues & Workarounds

1. **Firestore Security**: Database storage for contact submissions is disabled due to unresolved security policy issues
2. **Dual Package Managers**: Both npm and Bun lockfiles exist - use npm for consistency
3. **Port Configuration**: Dev server configured for port 8080 (not the default 5173)