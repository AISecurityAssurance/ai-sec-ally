import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Minimal but meaningful gate: a dependency bump can't merge unless the deployed
// site still (1) loads without crashing, (2) renders real content, and (3) has no
// critical/serious accessibility regressions on the landing page.
//
// This is deliberately small — it's a pilot. Expand coverage (key routes, the
// contact form happy path) once the gate is proven and trusted.

test("landing page boots and renders", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  const response = await page.goto("/");
  expect(response?.ok(), "landing page should return a 2xx").toBeTruthy();

  // A blank-but-200 SPA shell is a silent failure mode for dependency bumps, so
  // assert actual rendered content, not just a successful response.
  await expect(page.locator("body")).not.toBeEmpty();
  await expect(page.getByRole("heading").first()).toBeVisible();

  expect(errors, `uncaught page errors: ${errors.join("; ")}`).toHaveLength(0);
});

test("landing page has no critical accessibility violations", async ({ page }) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();

  // Gate on critical/serious only — minor/moderate findings are tracked but don't
  // block a dependency merge. Tighten this threshold as the site's a11y improves.
  const blocking = results.violations.filter(
    (v) => v.impact === "critical" || v.impact === "serious",
  );
  expect(
    blocking,
    blocking.map((v) => `${v.id} (${v.impact}): ${v.help}`).join("\n"),
  ).toHaveLength(0);
});
