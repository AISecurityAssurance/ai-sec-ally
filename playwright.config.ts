import { defineConfig, devices } from "@playwright/test";

// The gate runs against a live Firebase preview channel, whose URL is injected as
// PLAYWRIGHT_BASE_URL by the workflow. Falling back to the local Vite preview
// (`npm run preview`) lets the same tests run on a dev machine with no Firebase.
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:4173";

export default defineConfig({
  testDir: "./tests",
  // Fail the build if someone leaves a test.only in — this gate decides prod merges.
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL,
    trace: "on-first-retry", // keep artifacts cheap; capture only when a retry happens
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  // Only spin up a local server when no preview URL was supplied (i.e. running locally).
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : { command: "npm run preview", url: "http://localhost:4173", reuseExistingServer: true },
});
