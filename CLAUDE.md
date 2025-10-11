# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Security Ally (branded as AI Security Assurance) is a cybersecurity consulting company website built with React, TypeScript, and Vite. The application uses Firebase for hosting and serverless functions, with SendGrid for email delivery.

## Development Commands

```bash
# Development server (runs on port 8080, not default 5173)
npm run dev

# Production build
npm run build

# Development build
npm run build:dev

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

**Note**: Firebase deployment commands (`deploy`, `deploy:all`) are not configured in package.json and must be run via Firebase CLI directly:
```bash
firebase deploy              # Deploy hosting only
firebase deploy --only functions  # Deploy functions only
```

## Architecture

### Frontend Structure
The application uses a component-based architecture with React Router for navigation:

- **Pages** (`src/pages/`): Each route has a dedicated page component
  - Index.tsx - Homepage
  - About.tsx - Company information
  - Products.tsx - Services/products page
  - Contact.tsx - Contact form
  - Insights.tsx - Blog/insights section
  - ResearchLibrary.tsx - Research papers and resources
  - StpaSecStride.tsx - Methodology explanation page
  - NotFound.tsx - 404 page
- **Components** (`src/components/`): Reusable UI components, primarily from shadcn/ui
- **UI Components** (`src/components/ui/`): 50+ shadcn/ui components copied into the project
- **Styles**: Tailwind CSS with custom theme variables in `src/index.css`
- **Assets**: Images stored in `public/` with direct path references
- **Path Aliases**: `@/*` maps to `./src/*` for cleaner imports

### Key Architectural Patterns

1. **Component Library Pattern**: Uses shadcn/ui components (`Button`, `Card`, `Form`, etc.) for consistent UI. These are not npm packages but copied components in `src/components/ui/`.

2. **Contact Form Flow**:
   - Form submission → POST to `/api/contact`
   - Firebase Function `contactForm` processes request
   - SendGrid API sends email to configured recipient
   - Note: Firestore storage is currently commented out due to security policy issues

3. **Environment Configuration**:
   - Frontend uses Vite's environment variables
   - Firebase Functions require `SENDGRID_API_KEY` and `CONTACT_EMAIL` as environment variables (not secrets due to v2 function limitations)

4. **State Management**:
   - TanStack Query (React Query) for server state management
   - React Hook Form with Zod validation for forms

### Important Implementation Details

- **TypeScript Configuration**: Relaxed strict mode (`noImplicitAny: false`, `strictNullChecks: false`) - be cautious about type safety
- **Firebase Rewrites**:
  - `/api/contact` → `contactForm` Cloud Function
  - All other routes → `/index.html` (SPA fallback)
- **Custom Animations**: Tailwind config includes custom `fade-in` and `pulse-glow` animations used throughout the site
- **Dev Server**: Configured to run on IPv6 (`host: "::"`) and port 8080
- **Tailwind Plugins**: Uses `tailwindcss-animate` and `@tailwindcss/typography`

## Firebase Functions

Located in `functions/src/index.ts`. Two Cloud Functions are defined:

1. **contactForm** (main API endpoint):
   - Handles POST requests to `/api/contact`
   - Validates form data (firstName, lastName, email, company, message)
   - Sends email via SendGrid
   - CORS enabled for all origins (`*`)
   - Region: us-east1
   - Commented-out Firestore storage (lines 113-122)

2. **healthCheck**:
   - Simple health check endpoint
   - Returns status and timestamp

**Configuration Notes**:
- Functions use v2 API (`firebase-functions/v2`)
- Secrets configuration is commented out; uses environment variables instead
- CORS is handled manually with a helper function
- From address must be a verified SendGrid sender

## Testing Approach

Currently no test suite is configured. When adding tests:
1. Install testing dependencies (Vitest recommended for Vite projects)
2. Add test scripts to package.json
3. Follow React Testing Library patterns for component tests
4. Consider Playwright or Cypress for E2E tests

## Known Issues & Workarounds

1. **Firestore Security**: Database storage for contact submissions is disabled due to unresolved security policy issues (functions/src/index.ts:113-122)
2. **Dual Package Managers**: Both npm and Bun lockfiles exist - use npm for consistency
3. **Port Configuration**: Dev server configured for port 8080 (not the default 5173)
4. **Firebase Function Secrets**: v2 function secrets not working; using environment variables instead (functions/src/index.ts:14-17)
5. **Missing Deploy Scripts**: Firebase deployment must be done via CLI, not npm scripts

## Additional Resources

- `why-stpa-sec-stride.md` - Methodology documentation
- `wicked-problems-summary.md` - Research summary
- `firestore.rules` - Firestore security rules (currently unused)
- Shell scripts for Firebase setup in root directory
