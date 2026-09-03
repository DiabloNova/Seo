// Auto-generated full-text content lookup for the documentation API.
// Regenerate via `npx tsx scripts/generate-docs-data.ts` (also run automatically
// as part of `pnpm run build`). Do not edit by hand.

/** Regular docs, keyed by filename without the `.md` extension. */
export const DOCS_CONTENT_BY_SLUG: Record<string, string> = {
  "HOMEPAGE-AUDIT": `# Homepage Audit: UI and Content Risks

This document contains a read-only forensic audit of the homepage's actual UI, content, links, claims, interactive controls, and responsive-layout risks based on repository evidence.

## Phase 1 — Full Homepage Inventory

| Order | Section/Component Name | Source File | Purpose | Primary CTA | Secondary CTA | Content Classification |
|---|---|---|---|---|---|---|
| 1 | \`Header\` | \`src/components/marketing/Header.tsx\` | Global navigation and configuration (locale, theme). | "Free Audit" / "آنالیز رایگان" | "Login" / "ورود" | Real product data (links/toggles) |
| 2 | \`AppSidebar\` (Drawer) | \`src/components/marketing/Header.tsx\` (imported) | Mobile/Slide-out navigation menu. | None (Navigation) | None | Real product data |
| 3 | \`Hero\` | \`src/components/marketing/Hero.tsx\` | Value proposition and entry to the free audit funnel or dashboard access. | "Start free audit" / "شروع بررسی رایگان" (if unauthenticated) or "Enter admin console" (if authenticated) | None | Mixed (Marketing claims & illustrative UI video placeholder) |
| 4 | \`FreeAuditPanel\` | \`src/app/[locale]/page.tsx\` -> \`src/components/features/audit/FreeAuditPanel.tsx\` | Interactive tool to submit a domain for a simulated/real audit. | "Analyze Brand Visibility" | Inline Tab "Sign In" or "Register" if auth required | Real product data (Interactive forms, logs, data panels) |
| 5 | High-Fidelity Mock Dashboards | \`src/app/[locale]/page.tsx\` | Previews the product's workspace across 6 modules. | "Start Technical Scan" | None | Illustrative UI ("Illustrative data" badge present) |
| 6 | \`LiveKnowledgeGraph\` | \`src/app/[locale]/page.tsx\` -> \`src/components/features/graph/LiveKnowledgeGraph.tsx\` | Visualizes semantic discoverability and tracking. | None | None | Illustrative UI (Values fluctuate randomly via \`Math.random()\`) |
| 7 | Product Lifecycle Story | \`src/app/[locale]/page.tsx\` | Explains the step-by-step workflow (8 steps). | None | None | Static marketing claim |
| 8 | Enterprise Trust Layer | \`src/app/[locale]/page.tsx\` | Highlights security, privacy, and payment infrastructure. | None | None | Static marketing claim |
| 9 | Platform Overview (12 Modules) | \`src/app/[locale]/page.tsx\` | Grid describing 12 distinct capabilities. | "Explore module" (implied via UI, no actual link wrapper) | None | Static marketing claim |
| 10 | Product Ecosystem | \`src/app/[locale]/page.tsx\` | Explains how the pipeline stages connect. | None | None | Static marketing claim |
| 11 | Traditional SEO vs. GEO (Table) | \`src/app/[locale]/page.tsx\` | Compares classic SEO features against GEO features. | None | None | Static marketing claim |
| 12 | Documentation Hub Preview | \`src/app/[locale]/page.tsx\` | Grid of links to technical documentation. | "Read docs" for each card | None | Mixed (Real links, Marketing descriptions) |
| 13 | Enterprise Resource Center | \`src/app/[locale]/page.tsx\` | Grid of links to blog, case studies, roadmap. | "Read resource" | None | Mixed (Real links, Marketing descriptions) |
| 14 | Flexible Enterprise Pricing | \`src/app/[locale]/page.tsx\` | Displays three pricing tiers. | "Choose Growth Plan" | "Select Starter Plan", "Contact Sales" | Static marketing claim |
| 15 | Enterprise CTA Area | \`src/app/[locale]/page.tsx\` | Final bottom page call to action. | "Start Free Audit Scanner" | "Contact Sales Unit" | Static marketing claim |
| 16 | \`LandingFooter\` | \`src/components/marketing/LandingFooter.tsx\` | Standard enterprise footer with 6 groups of links and social channels. | None | None | Real product data (Navigation) |

## Phase 2 — Complete Link Inventory

| Visible Label | Source File | Destination | Internal/External | Locale-Aware | Actual Route Existence | Status |
|---|---|---|---|---|---|---|
| Platform Items (Dropdown) | \`src/components/marketing/Header.tsx\` | \`/{language}/features\`, \`/{language}/industries\`, \`/{language}/#ecosystem\`, \`/{language}/#overview\`, \`/{language}/#story\` | Internal | Yes | \`features\`, \`industries\` exist. Anchors exist on \`page.tsx\`. | Valid |
| Solutions Items (Dropdown) | \`src/components/marketing/Header.tsx\` | \`/{language}/solutions/geo\`, \`/{language}/solutions/aeo\`, \`/{language}/solutions/protection\`, \`/{language}/solutions/radar\`, \`/{language}/solutions\` | Internal | Yes | All routes exist under \`solutions/\`. | Valid |
| Why Us | \`src/components/marketing/Header.tsx\` | \`/{language}/#why-different\` | Internal | Yes | Anchor exists. | Valid |
| Pricing | \`src/components/marketing/Header.tsx\` | \`/{language}/#pricing\` | Internal | Yes | Anchor exists. | Valid |
| Documentation | \`src/components/marketing/Header.tsx\` | \`/{language}/docs\` | Internal | Yes | Route exists. | Valid |
| Resources | \`src/components/marketing/Header.tsx\` | \`/{language}/resources\` | Internal | Yes | Route exists. | Valid |
| About | \`src/components/marketing/Header.tsx\` | \`/{language}/about\` | Internal | Yes | Route exists. | Valid |
| Contact | \`src/components/marketing/Header.tsx\` | \`/{language}/contact\` | Internal | Yes | Route exists. | Valid |
| Invoice Payment | \`src/components/marketing/Header.tsx\` | \`/{language}/invoice\` | Internal | Yes | Route exists. | Valid |
| Login | \`src/components/marketing/Header.tsx\` | \`/{language}/login\` | Internal | Yes | Route exists. | Valid |
| Free Audit | \`src/components/marketing/Header.tsx\` | \`/{language}/#free-audit\` | Internal | Yes | Anchor exists. | Valid |
| Enter admin console | \`src/components/marketing/Hero.tsx\` | \`/{language}/dashboard\` | Internal | Yes | Route exists. | Valid |
| Start free audit | \`src/components/marketing/Hero.tsx\` | Triggers function to redirect to \`/{language}/register?email=...\` | Internal | Yes | Route exists. | Valid |
| Start Technical Scan | \`src/app/[locale]/page.tsx\` | Triggers scroll to \`#free-audit\` | Internal | N/A | Anchor exists. | Valid |
| Read docs (8x cards) | \`src/app/[locale]/page.tsx\` | \`/{locale}/docs/[slug]\` (e.g. \`introduction-to-brandgraph\`, \`infrastructure-architecture\`, \`ai-pipeline-architecture\`, \`multi-tenant-isolation\`, \`knowledge-graph-design\`) | Internal (target="_blank") | Yes | \`docs/[slug]\` route structure exists. | Valid (Though multiple cards link to the same duplicated slugs like \`ai-pipeline-architecture\`) |
| Blog / Case Studies | \`src/app/[locale]/page.tsx\` | \`/{locale}/blog\` | Internal | Yes | Route exists. | Valid |
| Changelog & Roadmap | \`src/app/[locale]/page.tsx\` | \`/{locale}/dashboard\` | Internal | Yes | Route exists. | Misleading (Dashboard is not a public roadmap) |
| Starter/Growth Plans | \`src/app/[locale]/page.tsx\` | Triggers scroll to \`#free-audit\` | Internal | N/A | Anchor exists. | Misleading (Pricing CTAs lead to the free audit funnel instead of checkout/registration). |
| Contact Sales | \`src/app/[locale]/page.tsx\` | \`/{locale}/contact\` | Internal | Yes | Route exists. | Valid |
| Start Free Audit Scanner | \`src/app/[locale]/page.tsx\` | Triggers scroll to \`#free-audit\` | Internal | N/A | Anchor exists. | Valid |
| Footer Products (6 items) | \`src/components/marketing/LandingFooter.tsx\` | \`/{language}/dashboard\`, \`/{language}/dashboard/audits\`, \`/{language}/dashboard/entities\`, \`/{language}/dashboard/query\` | Internal | Yes | Dashboard routes exist. | Valid |
| Footer Services (5 items) | \`src/components/marketing/LandingFooter.tsx\` | \`/{language}/solutions/geo\`, \`aeo\`, \`protection\`, \`radar\`, \`contact\` | Internal | Yes | Routes exist. | Valid |
| Footer Docs (5 items) | \`src/components/marketing/LandingFooter.tsx\` | \`/{language}/docs/[slug]\` | Internal (target="_blank") | Yes | Routes exist. | Valid |
| Footer Resources (7 items)| \`src/components/marketing/LandingFooter.tsx\` | \`resources\`, \`#free-audit\`, \`blog\`, \`docs/[slug]\` | Internal | Yes | Routes exist. | Valid |
| Footer Company (7 items) | \`src/components/marketing/LandingFooter.tsx\` | \`features\`, \`industries\`, \`solutions\`, \`about\`, \`contact\`, \`dashboard\` | Internal | Yes | Routes exist. | Valid (Roadmap links to dashboard again, misleading) |
| Footer Legal (3 items) | \`src/components/marketing/LandingFooter.tsx\` | \`/{language}/privacy\` | Internal | Yes | Route exists. | Valid |
| Social channels | \`src/components/marketing/LandingFooter.tsx\` | \`/{language}\`, \`mailto:info@seorchable.ir\` | Mixed | Yes | Route exists. | Valid |

## Phase 3 — Complete Claim Inventory

| Claim | Source File | Category | Repository Evidence | Verification Status |
|---|---|---|---|---|
| "SSO & MFA Ready" / "Access is scoped to the authenticated workspace" | \`src/app/[locale]/page.tsx\` | Compliance/Security | Uses session authentication via \`src/components/AuthProvider.tsx\`. Evidence of workspaces exists. | Verified by repository evidence |
| "Audit-ready workflows" | \`src/app/[locale]/page.tsx\` | Compliance/Security | Dashboard routes exist, but detailed audit logs cannot be verified from the homepage context. | Requires product evidence |
| "Workspace privacy" / "Privacy controls are designed around workspace-level data boundaries." | \`src/app/[locale]/page.tsx\` | Compliance/Security | Mentioned in context (TenantContextManager), but cannot be fully verified from UI alone. | Requires product evidence |
| "Iran Payment Support" / "پشتیبانی کامل از درگاه‌های پرداخت عضو شبکه شتاب" | \`src/app/[locale]/page.tsx\` | Integrations/Payments | \`src/app/[locale]/invoice\` route exists, webhooks referenced in system instructions. | Verified by repository evidence |
| "Twelve Specialized AI Modules" | \`src/app/[locale]/page.tsx\` | Product Capabilities | Lists 12 modules in UI. The dashboard has some corresponding routes (audits, competitors, entities, query), but 12 fully distinct modules cannot be verified from static code. | Requires product evidence |
| "Traditional SEO vs. Generative Engine Optimization" Comparison | \`src/app/[locale]/page.tsx\` | Competitive Superiority | Marketing table. | Not verifiable from repository |
| Pricing: Starter ($49), Growth ($149), Enterprise (Custom) | \`src/app/[locale]/page.tsx\` | Quantified/Pricing | Static marketing claims. Clicking buy loops back to the free audit funnel. | Not verifiable from repository |
| Pricing Features: "Track up to 50 brand keywords", "Crawl up to 3,000 pages/mo" | \`src/app/[locale]/page.tsx\` | Quantified/Capabilities | Static marketing text in pricing cards. | Requires product evidence |
| "LIVE TELEMETRY STREAM" / "60 FPS rendering | Real-time continuous analysis synced" | \`src/components/features/graph/LiveKnowledgeGraph.tsx\` | "Live"/Performance | The graph renders at 60 FPS using RequestAnimationFrame, but data is simulated via \`Math.random()\` and \`setInterval\`, not actual live telemetry. | Not verifiable from repository (Actually false based on source) |
| Free Audit: "This multi-stage process takes approximately 4 seconds." | \`src/components/features/audit/FreeAuditPanel.tsx\` | Performance | Hardcoded marketing string during the processing state. | Requires product evidence |

## Phase 4 — Interactive Control Inventory

| Control | Source File | Accessible Name / Label | Focus Behavior | States |
|---|---|---|---|---|
| Header Mobile Menu | \`src/components/marketing/Header.tsx\` | \`aria-label="Open navigation menu"\` | Observable standard focus ring. | Implemented: Focus. Not applicable: Loading, Error, Disabled, Success. |
| Header Dropdowns | \`src/components/marketing/Header.tsx\` | Uses visible text "Platform", "Solutions" | Custom dropdown component logic (requires runtime check). | Implemented: Hover. Not verifiable from static code: Keyboard nav inside dropdowns. |
| Language Toggle | \`src/components/marketing/Header.tsx\` | \`aria-label\` provided (e.g. "Switch to English") | Focusable \`<button>\`. | Implemented: Focus. Not applicable: Loading, Error, Disabled. |
| Theme Toggle | \`src/components/marketing/Header.tsx\` | \`aria-label\` provided | Focusable \`<button>\`. | Implemented: Focus. Not applicable: Loading, Error, Disabled. |
| Hero Email Input | \`src/components/marketing/Hero.tsx\` | \`aria-label="Business email"\` | Standard input focus. | Implemented: Focus. Not implemented: Disabled state when loading is true (only button disables). |
| Hero Submit Button | \`src/components/marketing/Hero.tsx\` | "Start free audit" | Standard button focus. | Implemented: Loading (text changes to "Opening audit"), Disabled (when \`isLoading\` is true). |
| Dashboard Tabs | \`src/app/[locale]/page.tsx\` | Visible text (e.g., "Visibility Score Dashboard") | Focusable \`<button>\`. Active state handled via custom classes. | Implemented: Focus, Active (Success/Selected). Not applicable: Loading, Error, Disabled. |
| Free Audit Input | \`src/components/features/audit/FreeAuditPanel.tsx\` | No \`aria-label\`, relies on \`placeholder\`. | Standard input focus. | Implemented: Focus, Error (displays banner). |
| Free Audit Submit | \`src/components/features/audit/FreeAuditPanel.tsx\` | "Analyze Brand Visibility" | Standard button focus. | Implemented: Disabled (when url is empty). |
| Free Audit Auth Tabs | \`src/components/features/audit/FreeAuditPanel.tsx\` | "Sign In", "Register Workspace" | Focusable \`<button>\`. | Implemented: Active state. |
| Free Audit Auth Inputs | \`src/components/features/audit/FreeAuditPanel.tsx\` | Labels provided via \`<Input label="..." />\`. | Handled by \`Input\` component. | Implemented: Disabled (during loading). |
| Free Audit Auth Submit | \`src/components/features/audit/FreeAuditPanel.tsx\` | "Authenticate & Run Audit" / "Create Account..." | Standard button focus. | Implemented: Loading (spinner, text change), Disabled, Error (banner above form). |
| Live Graph Legend Items| \`src/components/features/graph/LiveKnowledgeGraph.tsx\` | Visible metric names | \`<div onClick=...>\` Used for hover. Lacks \`tabIndex\`, \`role="button"\`, and keyboard handlers. | Not implemented: Keyboard focus, accessibility roles. |

## Phase 5 — Responsive and Layout Risk Inventory

### Desktop Risks

*   **Free Audit Auth Gate (\`src/components/features/audit/FreeAuditPanel.tsx\`)**: Modal-like card has \`max-w-lg mx-auto\`. Safe on desktop.
*   **Live Knowledge Graph Tooltip (\`src/components/features/graph/LiveKnowledgeGraph.tsx\`)**: Absolute positioning based on mouse coordinates. Risk of clipping on the right or bottom edges if the cursor is near the edge of the canvas, as there is no boundary-checking logic implemented in \`handleMouseMove\`.
*   **Module Overview Grid (\`src/app/[locale]/page.tsx\`)**: \`grid sm:grid-cols-2 lg:grid-cols-4\`. Safe wrapping.
*   **Comparison Table (\`src/app/[locale]/page.tsx\`)**: Contains \`<div className="overflow-x-auto">\`. Safe, prevents desktop overflow.
*   **Product Ecosystem Grid (\`src/app/[locale]/page.tsx\`)**: \`grid md:grid-cols-7 gap-4\`. Extremely dense 7-column layout on medium/large screens. High risk of text truncation or overlap inside cards, especially in Persian where words can be longer.

### Mobile Risks

*   **Header Navigation (\`src/components/marketing/Header.tsx\`)**: Floating nav container has limited space. It relies on the \`AppSidebar\` drawer, which handles overflow gracefully. Toggles are hidden/shown using \`sm:inline\` and \`hidden sm:inline-block\`. Safe.
*   **Hero Dashboard Showcase (\`src/components/marketing/Hero.tsx\`)**: Uses \`aspect-video\`, scales down safely.
*   **High-Fidelity Mock Dashboards (\`src/app/[locale]/page.tsx\`)**: \`grid lg:grid-cols-[280px_1fr]\`. On mobile, it stacks. The mock dashboard viewport has a fixed minimum height (\`min-h-[460px]\`) and contains complex inner grids (\`grid grid-cols-1 sm:grid-cols-3\`). Safe stacking.
*   **Product Lifecycle Timeline (\`src/app/[locale]/page.tsx\`)**: \`grid md:grid-cols-4 lg:grid-cols-8 gap-6\`. On mobile, it stacks in 1 column. Safe, though very tall.
*   **Product Ecosystem Grid (\`src/app/[locale]/page.tsx\`)**: \`grid md:grid-cols-7\`. Stacks into a single column on mobile. Arrows between steps are hidden on mobile (\`hidden md:block\`). Safe.
*   **Comparison Table (\`src/app/[locale]/page.tsx\`)**: Uses \`overflow-x-auto\`. Requires horizontal scrolling on mobile, which is standard, but the container relies on user discovery of scrollability.
*   **Live Knowledge Graph Canvas (\`src/components/features/graph/LiveKnowledgeGraph.tsx\`)**: Uses \`w-full h-[280px] sm:h-[400px]\`. Scales safely. Tooltips on mobile touch devices may trigger erratically due to relying solely on \`onMouseMove\` rather than explicit touch events (\`onTouchStart\`, \`onTouchMove\`).

## Keep

*   **Form States**: The \`FreeAuditPanel\` effectively handles complex state transitions (idle, auth-required, processing, completed, error) and properly disables forms/buttons during loading states. (Evidence: \`src/components/features/audit/FreeAuditPanel.tsx\`).
*   **Desktop/Mobile Layout Strategies**: The usage of \`overflow-x-auto\` for the large comparison table and the stacking grids for 12-module features prevents catastrophic page-level horizontal scrolling. (Evidence: \`src/app/[locale]/page.tsx\`).
*   **Theme and Locale Integrations**: The \`Header\` implements immediate toggles that are accessible and functional. (Evidence: \`src/components/marketing/Header.tsx\`).

## Change

*   **Trust/Product-vs-Marketing Clarity (High Priority)**: The "Live Knowledge Graph" claims to be a "REAL-TIME SEMANTIC VISIBILITY ENGINE" with "60 FPS rendering | Real-time continuous analysis synced", but the data is explicitly driven by \`Math.random()\` simulation. This is highly misleading. It must be clearly labeled as an illustrative simulation, similar to the mock dashboards section. (Evidence: \`src/components/features/graph/LiveKnowledgeGraph.tsx\`).
*   **Conversion Clarity (High Priority)**: The "Changelog & Roadmap" link points back to the \`/dashboard\`. Pricing plan "Purchase/Select" buttons (Starter, Growth) scroll the user back to the \`#free-audit\` funnel instead of taking them to a checkout or registration flow. This breaks the conversion path. (Evidence: \`src/app/[locale]/page.tsx\`).
*   **Accessibility (Medium Priority)**: The \`LiveKnowledgeGraph\` legend items are \`<div>\` elements with \`onMouseEnter\` handlers. They lack \`tabIndex={0}\`, \`role="button"\`, and keyboard event handlers (\`onKeyDown\`), making them inaccessible to keyboard users. (Evidence: \`src/components/features/graph/LiveKnowledgeGraph.tsx\`).
*   **Accessibility (Medium Priority)**: The main \`FreeAuditPanel\` input field lacks an explicit \`aria-label\` or associated \`<label>\`, relying solely on the visual placeholder. (Evidence: \`src/components/features/audit/FreeAuditPanel.tsx\`).

## Remove

*   **Misleading Navigation Destinations**: Remove or correct the duplicated/placeholder documentation slugs (e.g., \`ai-pipeline-architecture\` is used twice for different cards). (Evidence: \`src/app/[locale]/page.tsx\` Documentation Grid).
*   **7-Column Grid Layout**: The \`md:grid-cols-7\` layout in the Product Ecosystem section should be removed or restructured for medium screens, as it poses a severe risk of text truncation and layout breakage on tablet-sized displays. (Evidence: \`src/app/[locale]/page.tsx\`).
`,
  "JULES-FRONTEND-ROADMAP": `# SEOrchable Frontend Productization Roadmap

## Mission

Move the current frontend from a visually ambitious prototype to a dependable, accessible, fast product surface without changing product scope or inventing backend behaviour.

**Point A:** 49 locale page files, 46 client components, a 947-line client homepage, client-side auth bootstrap with a visible loading flash, locale-breaking protected redirects, artificial auth delays, alert-based OAuth placeholders, inconsistent loading/error/empty states, weak keyboard affordances, and no systematic frontend quality gates.

**Point B:** public marketing pages server-rendered with page-specific metadata, authenticated surfaces protected without flashes or redirect loops, every async screen has loading/error/empty/success states, all forms are accessible and localized, mobile layouts work at 320px, visual regressions are tested, and bundle/interaction budgets are enforced in CI.

## Jules rules

\`AGENTS.md\` is loaded automatically. Keep prompts single-purpose. One prompt changes one concern. One session produces one reviewable PR. Never approve a plan that touches files outside the prompt scope. Never let Jules add fake API data, fake loading delays, placeholder success messages, or unimplemented OAuth behaviour.

Run tasks strictly in order. Merge each PR before the next task. When a task exposes a dependency, stop and add the dependency as a new micro-task instead of letting Jules widen scope.

## Verified frontend baseline

From the uploaded repository:

- 49 \`page.tsx\` files exist under \`src/app/[locale]\`.
- 46 start with \`"use client"\`.
- The homepage is 947 lines and client-rendered.
- \`AuthProvider\` starts in \`loading\`, fetches the session in \`useEffect\`, and introduces a hard-navigation flash.
- \`ProtectedRoute\` redirects to \`/\` and \`/dashboard\`, dropping \`fa\` or \`en\` from the URL.
- \`AuthProvider\` contains artificial 800ms login/register and 400ms logout delays.
- The login and register screens use \`alert()\` for OAuth placeholders.
- Global CSS has a reduced-motion allowlist but no universal focus-visible rule or 44px target baseline.
- The dashboard shell reads \`localStorage\` after mount, so sidebar state is intentionally hydration-sensitive.

---

## Phase 0: stabilize the shared shell

### F0.1, already applied: server session hydration

\`\`\`text
TASK
Pass the authoritative session from the locale layout into AuthProvider and remove the hard-navigation auth flash.

CONTEXT
src/app/[locale]/layout.tsx is an async server component and can call getServerSessionAction().
src/components/AuthProvider.tsx currently starts every browser session with status "loading" and
calls getServerSessionAction() in useEffect. This flashes unauthenticated/loading UI on every hard
navigation and performs a duplicate request.

REQUIREMENTS
1. Add an optional initialSession prop to AuthProvider.
2. Resolve the session in the locale layout and pass it to AuthProvider.
3. Initialise state from initialSession and skip the mount fetch when initialSession exists.
4. Preserve the fetch fallback when AuthProvider is rendered without initialSession in tests.
5. Do not pass cookies, tokens, hashes or secrets to the client. Only the existing User/Session fields
   may cross the boundary.
6. Do not change the Session or User types.

SCOPE
src/app/[locale]/layout.tsx, src/components/AuthProvider.tsx only.

DONE WHEN
pnpm typecheck and pnpm lint pass. A hard reload of an authenticated dashboard shows no loading or
unauthenticated flash. Report the exact fields crossing the server/client boundary.
\`\`\`

### F0.2, already applied: locale-safe protected redirects

\`\`\`text
TASK
Make ProtectedRoute redirects locale-aware and history-safe.

CONTEXT
src/components/ProtectedRoute.tsx redirects unauthenticated users to "/" and users without a
required role to "/dashboard". The app is routed under /fa and /en, so both destinations can 404
or lose the user's language.

REQUIREMENTS
1. Read language from useTheme().
2. Redirect unauthenticated users to /{language}/login using router.replace.
3. Redirect insufficient-role users to /{language}/dashboard using router.replace.
4. Preserve null rendering while navigation is pending and preserve requiredRole checks.
5. Do not add a new redirect loop or use window.location.

SCOPE
src/components/ProtectedRoute.tsx only.

DONE WHEN
The three cases are tested manually in both locales. No protected redirect points to an unlocalized path.
\`\`\`

### F0.3, already applied: remove fake auth latency

\`\`\`text
TASK
Remove artificial authentication delays from AuthProvider.

CONTEXT
src/components/AuthProvider.tsx waits 800ms before login/register and 400ms before logout. These
delays do not represent network work and make the product feel broken on fast connections.

REQUIREMENTS
1. Delete only the artificial setTimeout-based delays.
2. Keep status="loading" while the real server action is pending.
3. Preserve all success and failure state transitions.
4. Do not replace the delay with a spinner or fake progress percentage.

SCOPE
src/components/AuthProvider.tsx only.

DONE WHEN
Login, registration and logout wait only for their real server action. Typecheck and lint pass.
\`\`\`

### F0.4: baseline interaction accessibility

\`\`\`text
TASK
Add the shared keyboard-focus and touch-target baseline without changing the visual theme.

CONTEXT
src/app/globals.css has no universal focus-visible rule. Several controls rely on hover-only
feedback. The app serves keyboard users and touch users in both RTL and LTR locales.

REQUIREMENTS
1. Add a visible :focus-visible rule for links, buttons, form controls, summary and role=button.
2. Use the existing sky-blue design token. Do not use outline:none.
3. Give interactive controls a 44px minimum target without forcing text inputs to become visually
   oversized. Use padding/min-height where appropriate.
4. Add html/body max-width:100% and overflow-x:hidden to stop page-level horizontal drift.
5. Add a reusable .mobile-scroll-x class for intentional horizontal tables/panels.
6. Add a universal prefers-reduced-motion rule that disables animation and transition durations and
   restores scroll-behaviour. Preserve existing specific rules.
7. Do not alter colors, typography, spacing or component markup in this task.

SCOPE
src/app/globals.css only.

DONE WHEN
Keyboard focus is visible on every interactive control, tab navigation remains usable, and reduced
motion removes non-essential motion. Test at 320px, 768px and 1440px widths.
\`\`\`

### F0.5: OAuth placeholders must be honest

\`\`\`text
TASK
Replace alert()-based OAuth placeholder buttons with an inline unavailable state.

CONTEXT
src/app/[locale]/login/page.tsx and register/page.tsx call alert() when Google or Microsoft buttons
are clicked. The integrations do not exist in the repository. Browser alerts are inaccessible,
block the UI thread and look like a broken product.

REQUIREMENTS
1. Remove alert() and console.log() from both pages.
2. Keep the buttons available but render a localized inline status message in the form after click:
   "This sign-in method is not available yet" in English and the equivalent native Persian copy.
3. Add role=status and aria-live=polite to the message.
4. Do not claim that a provider connection occurred. Do not add a fake OAuth endpoint.
5. Preserve both themes, RTL/LTR, and button layout.

SCOPE
src/app/[locale]/login/page.tsx, src/app/[locale]/register/page.tsx only.

DONE WHEN
Clicking either provider produces no alert and gives an accessible inline message. No fake network
request is made.
\`\`\`

---

## Phase 1: forms that behave like a product

### F1.1: password policy alignment

\`\`\`text
TASK
Align login and registration client validation with the server password policy.

CONTEXT
The server password policy is 12 to 200 characters with at least one lowercase, one uppercase and
one digit. The login and register pages still advertise a six-character minimum. Registration has
no confirm-password field.

REQUIREMENTS
1. Update localized validation copy to match the actual policy.
2. Add confirmPassword state and a confirm-password input to register.
3. Validate confirmation before any server action call.
4. Render each server violation code as localized copy without exposing credential details.
5. Add autocomplete="current-password" to login and autocomplete="new-password" to registration
   fields. Email fields use autocomplete="email".
6. Preserve existing visual structure and do not log passwords.

SCOPE
src/app/[locale]/login/page.tsx, src/app/[locale]/register/page.tsx, existing locale message files only.

DONE WHEN
A policy-invalid password never calls the server. A mismatch never calls the server. Both locales
show correct localized errors and typecheck passes.
\`\`\`

### F1.2: form semantics and error association

\`\`\`text
TASK
Make login and registration errors accessible and correctly associated with their controls.

CONTEXT
The forms already track field errors but the frontend audit shows inconsistent aria wiring and
error announcements. Screen-reader users must know which field failed and whether submission failed.

REQUIREMENTS
1. Every Input has a stable id, matching label htmlFor and autocomplete.
2. Each field error uses an id and the input references it via aria-describedby only when present.
3. Invalid fields receive aria-invalid=true.
4. Submission errors use role=alert and aria-live=assertive.
5. The submit button exposes aria-busy while the real action is pending.
6. Do not change server contracts or error wording.

SCOPE
src/app/[locale]/login/page.tsx, src/app/[locale]/register/page.tsx, src/components/Input.tsx,
src/components/Button.tsx only if needed for aria-busy support.

DONE WHEN
Keyboard-only and screen-reader review can identify every field error and the pending state.
\`\`\`

### F1.3: password visibility control

\`\`\`text
TASK
Add an accessible show/hide password control to login and registration.

CONTEXT
Long passwords are error-prone, especially in Persian RTL layouts, but the current fields cannot
reveal the value for review.

REQUIREMENTS
1. Add a button inside each password field that toggles type=password/text.
2. Give it a 44px target, localized aria-label and aria-pressed state.
3. Ensure it does not submit the form.
4. Preserve password autocomplete, no-store behaviour and RTL alignment.
5. Do not create a reusable component in this task; keep the diff local and reviewable.

SCOPE
src/app/[locale]/login/page.tsx, src/app/[locale]/register/page.tsx only.

DONE WHEN
The control works with mouse and keyboard in both locales and does not lose the current input.
\`\`\`

---

## Phase 2: public rendering and SEO without visual regressions

### F2.1: metadata helper

\`\`\`text
TASK
Create a server-only metadata helper for localized public pages.

CONTEXT
Only services/[slug]/page.tsx exports metadata. The other public pages are client components and
inherit generic metadata. siteConfig is in src/config/site.ts.

REQUIREMENTS
1. Create src/lib/seo/metadata.ts with buildPageMetadata({locale,path,title,description,...}).
2. Return localized title/description, absolute canonical, fa/en hreflang alternates, Open Graph,
   Twitter summary_large_image and optional noIndex.
3. Read the domain from siteConfig. Never hardcode it.
4. Keep the helper free of client imports.
5. Refactor services/[slug]/page.tsx to use it without changing rendered UI.

SCOPE
src/lib/seo/metadata.ts, src/app/[locale]/services/[slug]/page.tsx only.

DONE WHEN
Built English and Persian service pages contain distinct title, description, canonical and both
hreflang links.
\`\`\`

### F2.2: robots and sitemap

\`\`\`text
TASK
Add robots.txt and sitemap.xml route handlers for public localized pages.

CONTEXT
The repository has neither. Public routes are under src/app/[locale]/. Service slugs come from
servicesData and docs slugs from DOCS_INDEX.

REQUIREMENTS
1. Create src/app/robots.ts using MetadataRoute.Robots.
2. Disallow all preview/non-production environments. In production disallow /api and all
   authenticated/transactional routes in both locales.
3. Create src/app/sitemap.ts using MetadataRoute.Sitemap.
4. Enumerate both locales, public static routes, Object.keys(servicesData) and DOCS_INDEX slugs.
5. Add fa/en alternates to every entry. Exclude dashboard, settings, profile, invoice, login,
   register, forgot-password and verify-email.
6. Read siteConfig.url. Do not invent routes.

SCOPE
src/app/robots.ts, src/app/sitemap.ts only.

DONE WHEN
Build emits both route files. The report states exact URL count and confirms excluded paths are absent.
\`\`\`

### F2.3: server-render the homepage

\`\`\`text
TASK
Convert src/app/[locale]/page.tsx into a server page while preserving the current UI exactly.

CONTEXT
The homepage is 947 lines, starts with "use client", and owns state, refs, tab switching, charts,
animations and marketing markup. This blocks page metadata and ships too much hydration.

REQUIREMENTS
1. Remove "use client" from the page.
2. Extract each hook/event/chart region into small client islands under
   src/components/marketing/home/.
3. Keep DOM structure, copy, class names, animations, themes and RTL/LTR output unchanged.
4. Add generateMetadata using the metadata helper with distinct fa/en homepage copy.
5. Pass static data from the server page into islands instead of duplicating it.
6. Do not refactor unrelated components or change product copy.

SCOPE
src/app/[locale]/page.tsx and new files under src/components/marketing/home/ only.

DONE WHEN
Build passes, homepage HTML contains localized metadata, and First Load JS is lower than the
pre-change baseline. Report every extracted island and before/after build figures.
\`\`\`

### F2.4 to F2.8: remaining public page groups

Run each row as a separate Jules session. Use the same single-task prompt, replacing \`<PAGES>\`.

| Task | Pages |
|---|---|
| F2.4 | pricing |
| F2.5 | features, about, contact, privacy |
| F2.6 | solutions and solutions/* |
| F2.7 | industries, resources, blog |
| F2.8 | docs and docs/[slug] |

\`\`\`text
TASK
Convert only <PAGES> into server-rendered public pages with page-specific localized metadata.

CONTEXT
The listed pages are client components, so they cannot export metadata. The homepage conversion
is the reference. Use the existing metadata helper and preserve the rendered UI exactly.

REQUIREMENTS
1. Remove "use client" from listed page files only.
2. Extract only required hooks, browser APIs and event handlers into colocated client islands.
3. Add page-specific fa/en metadata, canonical and hreflang.
4. For dynamic pages use resolved params and valid slugs from repository data.
5. Preserve copy, themes, RTL/LTR and visual output.
6. Do not convert dashboard, auth or transactional pages in this task.

SCOPE
Only <PAGES> and new colocated client-island files.

DONE WHEN
Every listed route builds with distinct metadata and no public route in the group remains a client
page unless the report proves it requires a client boundary.
\`\`\`

---

## Phase 3: dashboard state quality

### F3.1: shared loading skeletons

\`\`\`text
TASK
Add route-level loading.tsx skeletons for the authenticated dashboard groups.

CONTEXT
Dashboard pages perform client fetches and currently show inconsistent spinners, blank gaps or
nothing while data loads. The repository uses Tailwind and has existing card/table primitives.

REQUIREMENTS
1. Inspect the actual dashboard route groups and add loading.tsx only where a loading boundary is
   missing.
2. Skeleton structure must match the page shape: title block, KPI/table/chart regions.
3. Use aria-busy=true and an accessible localized status label.
4. Respect light/dark themes and RTL/LTR direction.
5. Do not add fake metrics or real-looking data.
6. Do not alter page success states.

SCOPE
Only new loading.tsx files under src/app/[locale]/dashboard/ and the minimum shared skeleton
component if reuse is proven.

DONE WHEN
Navigating between dashboard routes shows stable skeletons, not blank screens or misleading values.
\`\`\`

### F3.2: route-level error boundaries

\`\`\`text
TASK
Add localized error.tsx boundaries to the dashboard and public data-fetching route groups.

CONTEXT
A failed fetch currently often becomes console.error plus an empty panel. Users need an actionable
retry state, and errors must not look like zero data.

REQUIREMENTS
1. Add error boundaries only to groups that perform client/server data fetching.
2. Use the Next.js error boundary contract for the installed version. Read its local docs first.
3. Show localized title, explanation and retry button using reset().
4. Never include raw exception messages, stack traces or credentials.
5. Preserve a link back to the localized dashboard/home where appropriate.
6. Cover light/dark themes and RTL/LTR.

SCOPE
New error.tsx files under the affected route groups only.

DONE WHEN
A forced fetch failure shows a clear localized error and retry action, not a false empty state.
\`\`\`

### F3.3: honest empty states

\`\`\`text
TASK
Replace ambiguous empty dashboard panels with actionable empty states.

CONTEXT
Several dashboard panels render zero values or empty containers when the user has no audits,
competitors, citations or content. Empty data is not an error and should teach the next action.

REQUIREMENTS
1. Inventory panels that can legitimately have zero records.
2. Add a localized empty title, one-sentence explanation and one next-step CTA per panel.
3. Keep zero as zero. Do not insert sample data.
4. Use existing Button/Link components and preserve theme/direction.
5. Do not touch error or loading state logic in this task.

SCOPE
Only the identified dashboard panel components and existing localization files.

DONE WHEN
Every zero-record panel has a distinct empty state that takes the user to a real existing action.
Report the panel-to-CTA mapping.
\`\`\`

### F3.4: mobile dashboard navigation

\`\`\`text
TASK
Make the dashboard sidebar and topbar usable at 320px through 767px.

CONTEXT
src/app/[locale]/dashboard/layout.tsx uses a fixed sidebar/topbar composition, localStorage state
and a help drawer. Dashboard pages also contain wide tables and chart panels.

REQUIREMENTS
1. Test at 320, 375, 414, 768 and 1024 CSS pixels.
2. On mobile, the sidebar must not permanently consume content width; use the existing mobileOpen
   state as a drawer with a visible close path.
3. Lock background interaction while the drawer is open and close it on Escape.
4. Preserve focus visibility and return focus to the menu trigger on close.
5. Intentional wide content gets an accessible horizontal scroll wrapper; the document itself must
   not overflow horizontally.
6. Do not redesign desktop layout or change navigation destinations.

SCOPE
src/app/[locale]/dashboard/layout.tsx, src/components/navigation/DashboardSidebar.tsx,
src/components/navigation/DashboardTopbar.tsx and only directly necessary CSS.

DONE WHEN
At 320px there is no page-level horizontal scroll, the drawer is keyboard usable, and all links remain reachable.
\`\`\`

### F3.5: localStorage-safe sidebar persistence

\`\`\`text
TASK
Harden sidebar collapse persistence against malformed localStorage and cross-tab updates.

CONTEXT
src/app/[locale]/dashboard/layout.tsx calls JSON.parse(localStorage.getItem(...)) without a
try/catch. A corrupted value can crash the dashboard shell. State is not synchronised across tabs.

REQUIREMENTS
1. Parse the stored value defensively and accept only boolean true/false.
2. On malformed data, remove the key and use the default expanded state.
3. Listen for the storage event and update collapse state when another tab changes it.
4. Remove the listener on unmount.
5. Keep the current key and desktop behaviour.

SCOPE
src/app/[locale]/dashboard/layout.tsx only.

DONE WHEN
Malformed storage cannot crash the shell, and two tabs converge after a sidebar toggle.
\`\`\`

---

## Phase 4: performance and quality gates

### F4.1: memoize high-cost client islands

\`\`\`text
TASK
Memoize only measured high-cost client islands.

CONTEXT
The homepage and dashboard contain Recharts, Framer Motion, graph visualisations and derived data
arrays. Memoization must follow profiling, not superstition.

REQUIREMENTS
1. Use React DevTools or a repeatable render counter to identify components rerendering without
   relevant prop changes.
2. Memoize derived arrays/objects passed to chart and graph children with correct dependencies.
3. Use useCallback for handlers passed into memoized children.
4. Wrap pure presentational children in React.memo only when prop stability is demonstrated.
5. Do not change output, animation timing or state semantics.
6. Report candidates rejected and why.

SCOPE
Only measured files under src/components/marketing/home/, src/components/visualization/ and
src/components/features/dashboard-home/.

DONE WHEN
Typecheck/lint pass, render counts improve in the recorded scenario, and the report includes the
measurement before and after.
\`\`\`

### F4.2: image and alt audit

\`\`\`text
TASK
Complete the frontend image and alternative-text audit.

CONTEXT
The repository has minimal next/image usage and inconsistent alt coverage. Images must reserve
layout space and be understandable to assistive technology.

REQUIREMENTS
1. Inventory raster images referenced by src/ and public/.
2. Use next/image for raster content with explicit dimensions or fill inside a sized parent.
3. Decorative images use alt="" and aria-hidden=true. Informative images get meaningful localized
   alt text where the localization system supports it.
4. Do not convert SVG icons that are already components.
5. Do not add remote hosts or dependencies.
6. Fix only image/alt violations in this task.

SCOPE
Image-referencing component files and existing localization files only.

DONE WHEN
No raster image causes a layout shift through missing dimensions, and every image has deliberate
alt semantics. Report the inventory.
\`\`\`

### F4.3: frontend lint gate

\`\`\`text
TASK
Enable the repository's existing accessibility lint rules and fix only frontend violations.

CONTEXT
eslint.config.mjs currently does not enforce a complete JSX accessibility baseline. The project
already depends on eslint-config-next, so do not add a new linter package.

REQUIREMENTS
1. Inspect the installed eslint-config-next version and its available jsx-a11y rules.
2. Enable alt-text, anchor-is-valid, aria-props and role-has-required-aria-props as errors if
   supported by the installed config.
3. Run lint and fix violations in touched frontend files only.
4. Do not weaken rules or add eslint-disable comments except for a verified third-party limitation.
5. Do not mix in unrelated formatting refactors.

SCOPE
eslint.config.mjs and the frontend files required to clear the new violations.

DONE WHEN
pnpm lint exits 0 with the rules active. Report every rule enabled and violation class fixed.
\`\`\`

### F4.4: visual regression harness

\`\`\`text
TASK
Add a deterministic frontend smoke-test harness using only tooling already installed.

CONTEXT
The repository has no browser test configuration visible in package.json. Before adding a browser
framework, inspect package.json, lockfiles and existing tests. The goal is to catch route 404s,
console errors, auth redirects, mobile overflow and form regressions.

REQUIREMENTS
1. Inventory installed test/browser tooling before choosing an approach.
2. If no browser runner exists, create a documented manual smoke script using existing Node tools
   rather than silently adding a dependency.
3. Cover /fa, /en, /fa/login, /en/register, /fa/dashboard and /en/dashboard with an authenticated
   test seam if one already exists.
4. Record console errors, HTTP status, redirect destination, and horizontal overflow checks.
5. Do not use fake backend data in production code.
6. Document how the check runs locally and in CI.

SCOPE
tests/frontend/**, package.json script if required, docs/FRONTEND-SMOKE-TESTS.md.

DONE WHEN
A repeatable command checks the critical routes and reports failures with route-level detail.
\`\`\`

### F4.5: performance budget

\`\`\`text
TASK
Record and enforce the frontend performance budget from the real production build.

CONTEXT
The current homepage is a large client component and dashboard charts add heavy client bundles.
No budget exists. The budget must come from measured output, not guesses.

REQUIREMENTS
1. Run pnpm build after all preceding frontend tasks.
2. Record First Load JS for every public route and the shared chunk size in docs/PERFORMANCE_BUDGET.md.
3. Set each route budget to measured value plus 10 percent, with a hard review flag above 250KB.
4. Add a CI check that fails when a measured public route exceeds its recorded budget.
5. Do not hide a regression by raising the budget in the same task.

SCOPE
docs/PERFORMANCE_BUDGET.md, scripts/frontend/check-budget.* and CI file only.

DONE WHEN
The build produces measured numbers, CI rejects a deliberate over-budget fixture, and the report
contains the baseline and budget table.
\`\`\`

---

## Phase 5: final frontend acceptance

### F5.1: frontend coverage audit

\`\`\`text
TASK
Create docs/FRONTEND_COVERAGE.md with a verified route-by-route acceptance audit.

CONTEXT
This roadmap changes rendering, auth hydration, forms, mobile navigation, async states, SEO and
performance. There is no single source showing which route has which guarantee.

REQUIREMENTS
1. Enumerate every page.tsx under src/app/[locale].
2. Record for each route: public/authenticated, server/client, metadata, canonical, hreflang,
   loading boundary, error boundary, empty state where data can be empty, RTL/LTR check, mobile
   check and smoke-test coverage.
3. Mark PASS, FAIL or UNVERIFIED from code or executed tests only.
4. Add a Blocking before release section ordered by severity.
5. Change no source file.

SCOPE
docs/FRONTEND_COVERAGE.md only.

DONE WHEN
Every route appears and every PASS has a file citation or test output.
\`\`\`

### F5.2: final frontend release gate

\`\`\`text
TASK
Run the final frontend release gate and create docs/FRONTEND_RELEASE_GATE.md.

CONTEXT
All frontend implementation tasks and the route coverage audit are complete. This task changes no
application code.

REQUIREMENTS
1. Run pnpm typecheck, pnpm lint, pnpm build and every frontend smoke command documented by the repo.
2. Verify 320px, 768px and 1440px screenshots or equivalent layout measurements for /fa, /en,
   login, register and dashboard shell.
3. Verify keyboard navigation, visible focus, reduced motion, localized redirects, no browser
   alert(), no artificial auth delays, and no page-level horizontal overflow.
4. Verify all public metadata and sitemap/robots outputs.
5. Mark every criterion PASS, FAIL or UNVERIFIED. Never upgrade UNVERIFIED to PASS.
6. Include blockers only. Do not fix code in this task.

SCOPE
docs/FRONTEND_RELEASE_GATE.md only.

DONE WHEN
The document is an evidence-backed go/no-go decision for the frontend release.
\`\`\`

## Dependency ledger

| Task | Depends on | Status |
|---|---|---|
| F0.1 | existing server action | applied in current patch |
| F0.2 | existing ThemeProvider | applied in current patch |
| F0.3 | F0.1 | applied in current patch |
| F0.4 | none | applied in current patch |
| F0.5 | none | next |
| F1.1 | backend password policy | next |
| F1.2 | F1.1 | next |
| F1.3 | F1.1 | next |
| F2.1 | none | next |
| F2.2 | F2.1 | next |
| F2.3 | F2.1 | next |
| F2.4-F2.8 | F2.3 | next, one session each |
| F3.1-F3.5 | F0.1 | next, one session each |
| F4.1-F4.5 | F2 and F3 complete | next, one session each |
| F5.1 | all implementation tasks | next |
| F5.2 | F5.1 | final |

## Definition of done

Frontend is release-ready only when \`FRONTEND_RELEASE_GATE.md\` has no FAIL, no critical UNVERIFIED item, and the real CI checks pass. A page that looks polished but has fake success, an inaccessible form, a redirect loop or a false empty state is not done.
`,
  "PHASE0-AI-PERSISTENCE-HARDENING": `# Phase 0.2: AI services and in-memory persistence hardening

## Implemented

- Production \`PostgresClient\` now requires \`DATABASE_URL\`; the localhost fallback was removed.
- Connection leasing no longer activates \`ALLOW_OFFLINE_DB_SIMULATION\` or \`MockPoolClient\`.
- The unified AI repository's seeded \`InMemoryDatabase\` is now test-only. Its Map and array stores are disabled outside \`NODE_ENV=test\`, so a production request cannot read or write process-local persistence.
- Legacy static Map stores in the admin PostgreSQL adapter now use disabled stores outside tests.
- Admin mock database construction is blocked outside tests.
- Google Generative AI is the only production LLM/embedding path. Deterministic LLM and embedding doubles remain available only for automated tests.
- Graph extraction fails closed when a real provider is not configured.
- Sentiment analysis no longer converts invalid provider output into a fabricated neutral result.
- AI visibility provider selection no longer defaults to a mock engine and rejects explicit mock selection outside tests.
- AEO content analysis now requires a real configured brand and real page content, and no longer injects synthetic website content or fake provider provenance.
- Observation processing no longer hardcodes Acme/Rasha entities or creates synthetic brand mentions. Citations are derived only from URLs present in the provider response.
- Generated IDs in observation processing use \`crypto.randomUUID()\` rather than pseudo-random strings.

## Intentionally retained

Maps used for request-local algorithms, graph traversal, deduplication, host locks, event handlers and cache coordination are not persistence stores. They remain bounded/transient and must not be used as a substitute for PostgreSQL.

Test doubles remain in AI modules so unit tests can run deterministically. They are selected only when \`NODE_ENV=test\` or through an explicit test-only injection path.

## Verification

- Removed database offline driver path and localhost database default.
- Verified unified AI repository Map/array fields use test-only persistence guards.
- Verified modified files have balanced braces.
- Full lint, typecheck, tests and production build were not executable in this environment because dependencies are not installed.

## Remaining product work

The repository still contains several AI feature services with hardcoded baseline assumptions and some action-level synthetic seed data. Those should be migrated feature-by-feature to PostgreSQL queries and provider-backed evidence before their routes are enabled for paid customers.
`,
  "ROADMAP": `# SEOrchable: Consolidated Jules Roadmap

## Purpose

This is the replacement for the earlier backend and frontend roadmaps. It removes prompts whose work has already been completed in the remediation passes and keeps only work that still needs Jules. Every prompt is intentionally single-purpose: one session, one focused diff, one PR.

## Work already completed and therefore removed

The following items are done and must not be scheduled again:

- Password hashing and password-aware \`loginAction\` / \`registerAction\` contract.
- \`SESSION_SECRET\` production enforcement.
- Server-side session hydration wiring in \`AuthProvider\` and the locale layout.
- Locale-safe protected redirects.
- Removal of artificial authentication delays.
- The missing \`src/app/actions/audit.ts\` file restoration.
- Firecrawl response normalization for the \`Document[]\` type mismatch.
- Removal of the fabricated premium-audit \`competitorComparison\` UI.
- Initial keyboard-focus, touch-target, reduced-motion and page-overflow CSS baseline.
- Homepage copy cleanup, product naming cleanup, removal of unsupported compliance claims, honest static-preview labelling, corrected login CTA, and removal of placeholder social destinations.

The homepage is still a large client component, and that is intentionally retained for the dedicated extraction tasks below. Do not re-add removed mock data or unsupported claims while refactoring it.

## Jules operating rules

\`AGENTS.md\` is loaded automatically. Prompts below only contain task scope and acceptance criteria. Reject any Jules plan that touches files outside \`SCOPE\`. Merge each PR before the next task. Never let Jules invent API responses, demo metrics, compliance certifications, customer results, SDKs, integrations or media assets.

Before every task: select the repository and \`main\`, paste exactly one prompt, review the plan, approve only an in-scope plan, review the diff, run the stated checks, then merge.

---

## Phase 1: Homepage architecture and conversion quality

### H1.1: Homepage evidence inventory, read-only

\`\`\`text
TASK
Create a read-only inventory of the homepage's actual UI and content risks.

CONTEXT
The homepage is src/app/[locale]/page.tsx, 947 lines, and currently owns state, refs, mock product
panels, a free-audit funnel, a product lifecycle section, trust content, module overview, ecosystem
flow, comparison table, documentation preview, resource center, pricing and final CTA. Header is
src/components/marketing/Header.tsx. Footer is src/components/marketing/LandingFooter.tsx. Hero is
src/components/marketing/Hero.tsx.

REQUIREMENTS
1. Create docs/HOMEPAGE-AUDIT.md only. Change no source code.
2. Inventory every section in DOM order and record its purpose, primary CTA, secondary CTA, and
   whether its content is real product data, illustrative UI, or a static marketing claim.
3. Record every link destination and flag broken, duplicate, unlocalized, placeholder or
   misleading destinations. Verify every destination against the actual route tree.
4. Record every heading, paragraph and badge that makes a quantified, compliance, integration,
   "live", "real", "guaranteed", customer-result or capability claim. Mark each as verified or
   requiring product evidence. Do not guess.
5. Record every interactive control: keyboard focus, accessible name, loading, error, disabled and
   success state as observed in code.
6. Record desktop and mobile layout risks from the actual class names: overflow, fixed elements,
   dense grids, tiny text, nested buttons/links and touch targets.
7. End with exactly three sections: Keep, Change, Remove. Prioritise conversion clarity, trust and
   accessibility.

SCOPE
docs/HOMEPAGE-AUDIT.md only.

DONE WHEN
Every homepage section, link, claim and interactive control is accounted for with a file citation.
No source file changes.
\`\`\`

### H1.2: Extract the homepage stateful product preview

\`\`\`text
TASK
Extract the homepage product-preview tab state into a dedicated client island without changing the visual output.

CONTEXT
src/app/[locale]/page.tsx owns activeDashboardTab, scroll refs and six large conditional preview
panels: visibility, authority, citation, competitor, graph and timeline. The page is 947 lines and
starts with "use client". The section is a visual product preview, not a live customer dashboard;
its values must remain explicitly illustrative.

REQUIREMENTS
1. Create src/components/marketing/home/ProductPreview.tsx with "use client".
2. Move only the activeDashboardTab state and the six conditional preview panels into it.
3. Preserve the exact visible copy, layout, direction, theme and tab behaviour, including the
   existing illustrative-data notice.
4. Keep one stable accessible tablist/tab pattern: each tab has an accessible name, selected state,
   keyboard activation and controls the correct panel.
5. Keep tab identifiers typed as a union. Do not use \`any\` for the tab id.
6. The server page passes locale and any static data needed by props; do not duplicate data in the
   island if it can be passed down.
7. Do not add a chart library, fetch, fake loading state or new visual system.

SCOPE
src/app/[locale]/page.tsx, new src/components/marketing/home/ProductPreview.tsx only.

DONE WHEN
Typecheck and lint pass. Product preview behaviour is unchanged. Report the before/after line count
of the page and the exact state moved.
\`\`\`

### H1.3: Extract homepage scroll CTAs and refs

\`\`\`text
TASK
Move homepage scroll refs and scroll handlers into a small client island boundary.

CONTEXT
src/app/[locale]/page.tsx owns freeAuditRef, platformOverviewRef, dashboardsRef and scrollToRef.
The page should become a server component, but scrollIntoView and useRef are browser-only. Product
Preview state was extracted in H1.2.

REQUIREMENTS
1. Identify every useRef, useState, useEffect, browser API and event handler still remaining in
   src/app/[locale]/page.tsx.
2. Create the smallest possible client island under src/components/marketing/home/ that owns only
   the remaining scroll interactions.
3. Preserve section ids, anchor destinations, smooth scrolling and RTL behaviour.
4. Do not move static markup merely for convenience.
5. Do not change styling or copy.

SCOPE
src/app/[locale]/page.tsx and new client-island files under src/components/marketing/home/ only.

DONE WHEN
The report lists every browser-only dependency removed from the server page. Typecheck/lint/build
pass and every existing homepage CTA still lands on the same section.
\`\`\`

### H1.4: Convert homepage to a server page

\`\`\`text
TASK
Convert src/app/[locale]/page.tsx to a Server Component and add localized metadata.

CONTEXT
After H1.2 and H1.3, the homepage should contain only server-safe markup plus imported client
islands. It currently cannot export metadata because of "use client". The app uses fa RTL and en
LTR. Use the existing metadata pattern from src/app/[locale]/services/[slug]/page.tsx. Do not
reintroduce gradient text, unsupported claims or fake live-data language removed in the homepage
polish pass.

REQUIREMENTS
1. Remove "use client" from the page.
2. Await locale params in the server page.
3. Add generateMetadata with genuinely different fa/en title and description for the homepage,
   canonical URL, both locale alternates and Open Graph data.
4. Pass locale to client islands; do not read locale from localStorage in page markup.
5. Preserve section order, ids, links, content, themes and RTL/LTR output.
6. Do not convert Header, Hero, Footer or dashboard pages in this task.
7. Do not change any backend contract.

SCOPE
src/app/[locale]/page.tsx only, plus imports of islands already created in H1.2/H1.3.

DONE WHEN
The homepage builds as a server page, has unique fa/en metadata and no hooks. The visible output
is unchanged except for metadata and the already-approved copy polish.
\`\`\`

### H1.5: Honest Hero preview and conversion path

\`\`\`text
TASK
Finish the Hero conversion surface so it clearly distinguishes a static product preview from a live result.

CONTEXT
src/components/marketing/Hero.tsx contains the homepage hero, an email capture form, and a static
workspace preview. It must not imply a live sandbox, guaranteed uplift, real-time data or a video
when no video asset/player is wired. The form redirects to the localized registration route.

REQUIREMENTS
1. Preserve the current product-first visual composition and both themes.
2. Ensure the headline says what the product measures and who it helps, not a vague promise of
   becoming the first choice.
3. Keep one primary CTA: start the free audit or registration path. Remove competing equal-weight
   actions from the hero.
4. Label the static preview as illustrative/static in both locales.
5. Remove unsupported quantified chips, "live", "guarantee", "military-grade", certification or
   integration claims from this component. Do not replace them with new unsupported claims.
6. The email input has a label or accessible name, email autocomplete, invalid state and pending
   state. It must not expose the email in logs.
7. Do not add a video or external media asset in this task.

SCOPE
src/components/marketing/Hero.tsx only.

DONE WHEN
A first-time visitor can answer what SEOrchable does, who it is for and what the next click does
within five seconds. Typecheck/lint/build pass.
\`\`\`

### H1.6: Navigation and footer integrity

\`\`\`text
TASK
Make the homepage Header and LandingFooter accurate, compact and route-safe.

CONTEXT
Header is src/components/marketing/Header.tsx and Footer is src/components/marketing/LandingFooter.tsx.
The current surfaces contain deeply nested navigation, a login button that must not point to a
protected dashboard, internal docs opened in a new tab, and social links that may be placeholders.
The footer also contains claims that must match implemented features.

REQUIREMENTS
1. Verify every internal destination against src/app/[locale] and preserve locale prefixes.
2. Login points to /{locale}/login. Protected dashboard links remain clearly labelled as workspace
   links.
3. Internal documentation opens in the same tab. External links use target/rel only when the
   destination is verified and real in repository configuration.
4. Keep the header within a single 44px+ touch-friendly navigation system at mobile widths.
5. Preserve the existing menu drawer but ensure Escape closes it, background interaction is blocked
   while open, and focus returns to the menu trigger.
6. Remove unsupported claims, duplicate nav paths and placeholder external destinations. Do not
   invent social profiles.
7. Keep light/dark, fa/en and RTL/LTR behaviour.

SCOPE
src/components/marketing/Header.tsx, src/components/marketing/LandingFooter.tsx and only the
minimum directly-required CSS.

DONE WHEN
Every internal link resolves, mobile drawer keyboard behaviour is verified, and the report lists
removed or corrected links and claims.
\`\`\`

### H1.7: Homepage visual QA and responsive fixes

\`\`\`text
TASK
Fix only the responsive layout defects found in the homepage audit at 320px, 375px, 768px and 1440px.

CONTEXT
The homepage has dense tab panels, tables, eight-step timelines, twelve module tiles, pricing
columns, decorative absolute layers and a fixed header. It must not create page-level horizontal
scroll or unreadable controls. Intentional tables may scroll inside their own wrapper.

REQUIREMENTS
1. Use the actual browser or available local visual check to inspect the four widths.
2. Fix overflow, clipped text, controls below 44px, unreadable contrast, fixed-header overlap and
   broken RTL ordering only where observed.
3. Do not redesign sections or change copy, route structure, data or component architecture.
4. Use intrinsic grids and an intentional horizontal wrapper for wide comparison tables.
5. Verify light and dark themes and both locales after each layout fix.
6. Respect prefers-reduced-motion.

SCOPE
Homepage-related files only: src/app/[locale]/page.tsx, src/components/marketing/Hero.tsx,
src/components/marketing/Header.tsx, src/components/marketing/LandingFooter.tsx, extracted home
islands and directly-required CSS.

DONE WHEN
No page-level horizontal scroll at all four widths. Report each defect, file and fix, with screenshots
or measured evidence for fa/en and light/dark.
\`\`\`

---

## Phase 2: Public page rendering and discoverability

### P2.1: Metadata helper

\`\`\`text
TASK
Create one server-only helper for localized public-page metadata.

CONTEXT
The service detail page contains the only complete metadata pattern. Public pages under
src/app/[locale] mostly start with "use client" and inherit generic metadata. siteConfig is in
src/config/site.ts.

REQUIREMENTS
1. Create src/lib/seo/metadata.ts with buildPageMetadata({locale,path,title,description,ogImage?,noIndex?}).
2. Return localized title/description, absolute canonical, fa/en hreflang, Open Graph and Twitter
   summary_large_image.
3. Read the domain from siteConfig. Do not hardcode it.
4. Keep imports server-safe.
5. Refactor only src/app/[locale]/services/[slug]/page.tsx to use the helper as proof.

SCOPE
src/lib/seo/metadata.ts and src/app/[locale]/services/[slug]/page.tsx only.

DONE WHEN
Both locale service pages build with distinct title, description, canonical and alternates.
\`\`\`

### P2.2: Robots and sitemap

\`\`\`text
TASK
Add production-safe robots.txt and a complete public sitemap.

CONTEXT
The repository has no src/app/robots.ts or src/app/sitemap.ts. Public routes are under
src/app/[locale]. Service slugs come from servicesData; docs slugs come from DOCS_INDEX.

REQUIREMENTS
1. Add MetadataRoute.Robots and MetadataRoute.Sitemap handlers using the installed Next.js version.
2. Disallow all non-production deployments.
3. In production exclude /api/, dashboard, settings, profile, invoice, login, register,
   forgot-password and verify-email for both locales.
4. Include both locales, all public static routes, servicesData keys and DOCS_INDEX slugs.
5. Add fa/en alternates to every sitemap entry and read the domain from siteConfig.

SCOPE
src/app/robots.ts, src/app/sitemap.ts only.

DONE WHEN
Build emits both routes, exact URL count is reported, and no excluded route appears.
\`\`\`

### P2.3 to P2.6: Public page conversion batches

Run each row as a separate Jules session.

| Task | Pages |
|---|---|
| P2.3 | pricing, features |
| P2.4 | solutions, solutions/aeo, solutions/geo, solutions/protection, solutions/radar |
| P2.5 | about, contact, privacy, industries, resources |
| P2.6 | blog, docs, docs/[slug] |

\`\`\`text
TASK
Convert only <PAGES> to server-rendered public pages with page-specific localized metadata.

CONTEXT
The listed pages are client components even where their content is static. Use the metadata helper
from P2.1 and the homepage conversion as the reference. Extract only browser-dependent behaviour.

REQUIREMENTS
1. Remove "use client" from listed pages where possible and export generateMetadata.
2. Extract hooks, browser APIs and event handlers into small colocated client islands.
3. Add distinct fa/en title and description, canonical and hreflang for every listed route.
4. Use real repository content only. Do not invent FAQs, prices, certifications, case studies,
   customers, integrations or metrics.
5. Preserve copy, section order, themes, responsive layout and RTL/LTR output.
6. Do not touch dashboard/auth/transactional pages or pages outside <PAGES>.

SCOPE
Only <PAGES> and their new colocated client islands.

DONE WHEN
Every listed public route builds with unique metadata. Report routes that remain client components
and the actual browser dependency requiring it.
\`\`\`

---

## Phase 3: Dashboard reliability and accessibility

### D3.1: Loading boundaries

\`\`\`text
TASK
Add route-level loading skeletons only where dashboard data currently has no loading state.

CONTEXT
Dashboard routes under src/app/[locale]/dashboard and src/app/[locale]/(dashboard) mix client
fetching with blank gaps and spinners. Inspect every target before editing.

REQUIREMENTS
1. Inventory the target routes and their actual loading behaviour.
2. Add loading.tsx only to groups that need a boundary.
3. Skeleton shape must match the real page structure without real-looking metrics.
4. Add localized accessible status and aria-busy.
5. Respect light/dark and RTL/LTR.

SCOPE
Only new loading.tsx files and a shared skeleton component if reuse is demonstrated.

DONE WHEN
No target route shows a blank or misleading zero state while loading. Report each boundary.
\`\`\`

### D3.2: Error boundaries

\`\`\`text
TASK
Add localized error boundaries for dashboard data failures.

CONTEXT
Several data-fetching components catch errors and render empty or partial content. Errors must be
distinguishable from a legitimate empty dataset.

REQUIREMENTS
1. Add error.tsx only to affected route groups.
2. Use the installed Next.js error boundary contract.
3. Render localized retry via reset(), a safe explanation and a route-appropriate navigation link.
4. Never render raw exception text, stack traces or secrets.
5. Preserve existing success states.

SCOPE
New error.tsx files under affected dashboard route groups only.

DONE WHEN
A forced data failure shows a retryable localized error instead of false empty content.
\`\`\`

### D3.3: Empty-state audit

\`\`\`text
TASK
Give every legitimate zero-record dashboard panel a useful localized empty state.

CONTEXT
Panels for audits, citations, competitors, entities and content may have no records. A zero is not
an error and should explain the next action without inserting sample data.

REQUIREMENTS
1. Inventory only panels that can legitimately be empty.
2. Add one localized title, one concise explanation and one real next-step CTA per panel.
3. Keep zero as zero and do not add demo metrics.
4. Use existing design primitives and preserve themes/direction.
5. Do not change loading/error state logic.

SCOPE
Only identified panel components and existing localization files.

DONE WHEN
Every inventoried empty panel teaches a next action. Report panel-to-CTA mapping.
\`\`\`

### D3.4: Mobile dashboard shell

\`\`\`text
TASK
Make the dashboard shell usable at 320px through 1024px without changing desktop information architecture.

CONTEXT
src/app/[locale]/dashboard/layout.tsx contains a sidebar, topbar, help overlay, fixed ambient layers
and a scrollable main viewport. Dashboard pages contain wide tables and charts.

REQUIREMENTS
1. Test 320, 375, 414, 768 and 1024px.
2. Mobile sidebar is a drawer, does not consume permanent content width, closes via close button and
   Escape, blocks background interaction and returns focus to its trigger.
3. Use intentional inner overflow for wide tables. No document-level horizontal scroll.
4. Preserve navigation destinations, themes, locale and RTL/LTR ordering.

SCOPE
src/app/[locale]/dashboard/layout.tsx, DashboardSidebar.tsx, DashboardTopbar.tsx and required CSS only.

DONE WHEN
Keyboard and touch review passes at all widths. Report measured overflow and focus behaviour.
\`\`\`

### D3.5: Form accessibility audit

\`\`\`text
TASK
Make login, registration, forgot-password and free-audit forms fully accessible without changing their server contracts.

CONTEXT
Forms exist under src/app/[locale]/login, register and forgot-password, plus
src/components/features/audit/FreeAuditPanel.tsx. They use shared Input and Button primitives but
error association and pending announcements are inconsistent.

REQUIREMENTS
1. Every input has a stable id, associated label or accessible name, autocomplete and invalid state.
2. Field errors have stable ids and aria-describedby only when present.
3. Submission errors use role=alert; pending submitters expose aria-busy.
4. Password controls use correct autocomplete and never log or persist plaintext values.
5. Render Persian and English validation copy through the existing localization pattern.
6. Preserve the current visual design and server action/API contracts.

SCOPE
The four form surfaces, shared Input/Button only if required, and existing localization files.

DONE WHEN
Keyboard and screen-reader review identifies every field, error and pending state in both locales.
\`\`\`

---

## Phase 4: Performance and release gates

### Q4.1: Measured memoization

\`\`\`text
TASK
Memoize only the homepage/dashboard components proven to rerender unnecessarily.

CONTEXT
The product preview, graph visualisations, Recharts panels and dashboard home contain derived arrays,
objects and handlers. Memoization should follow a measured scenario, not blanket wrapping.

REQUIREMENTS
1. Measure render counts before editing with React DevTools or an equivalent repeatable counter.
2. Memoize derived chart/graph props and stable handlers with correct dependencies.
3. Use React.memo only where props are stable and the child is presentational.
4. Do not change output, animation timing or state semantics.
5. Report rejected candidates and the before/after render counts.

SCOPE
Only measured files under src/components/marketing/home, src/components/visualization and
src/components/features/dashboard-home.

DONE WHEN
Typecheck/lint pass and the report contains reproducible measurements.
\`\`\`

### Q4.2: Image and alt semantics

\`\`\`text
TASK
Audit and fix raster image layout stability and alt semantics on public surfaces.

CONTEXT
next/image usage is sparse and the public directory contains raster assets. SVG icon components do
not need conversion. The goal is no layout shift from unknown dimensions and deliberate assistive
semantics.

REQUIREMENTS
1. Inventory raster references from src/ and public/.
2. Use next/image with explicit dimensions or fill inside a sized parent.
3. Informative images have meaningful localized alt; decorative images have alt="" and aria-hidden.
4. Do not add remote hosts or dependencies.
5. Fix only image/alt issues in this task.

SCOPE
Image-referencing components and existing localization files only.

DONE WHEN
Inventory is complete and every raster asset has deliberate dimension and alt behaviour.
\`\`\`

### Q4.3: Frontend lint gate

\`\`\`text
TASK
Enable supported JSX accessibility rules as build-blocking errors and clear the resulting frontend violations.

CONTEXT
eslint.config.mjs uses eslint-config-next. The frontend needs enforced alt-text, anchor validity,
ARIA property validity and required role properties.

REQUIREMENTS
1. Verify rule names supported by the installed eslint-config-next.
2. Enable alt-text, anchor-is-valid, aria-props and role-has-required-aria-props as errors when supported.
3. Fix violations in frontend files without unrelated formatting refactors.
4. Do not add broad eslint-disable comments or weaken the rules.

SCOPE
eslint.config.mjs and frontend files required to clear these rules.

DONE WHEN
pnpm lint exits 0 with the rules active. Report rules and violations fixed.
\`\`\`

### Q4.4: Smoke and visual regression checks

\`\`\`text
TASK
Add a repeatable frontend smoke check for critical localized routes.

CONTEXT
The repo has no verified browser test setup in package.json. Inspect installed tooling before adding
anything. Critical routes: /fa, /en, /fa/login, /en/register, /fa/dashboard and /en/dashboard.

REQUIREMENTS
1. Inventory current test/browser tooling first.
2. If no browser runner exists, use existing tooling or add a documented manual check; do not add a
   dependency without explicit evidence it is needed.
3. Check HTTP status, redirect destination, console errors, page-level horizontal overflow and the
   presence of a visible focus ring on critical controls.
4. Use a safe authenticated test seam only if one already exists. Do not add production bypasses.
5. Document the command and expected output.

SCOPE
tests/frontend/**, package.json script only if required, docs/FRONTEND-SMOKE-TESTS.md.

DONE WHEN
The check is repeatable and reports failures by route and criterion.
\`\`\`

### Q4.5: Performance budget

\`\`\`text
TASK
Record and enforce measured First Load JS budgets for public routes.

CONTEXT
Homepage server rendering, client-island extraction and dashboard boundaries are complete. No budget
currently blocks bundle regressions.

REQUIREMENTS
1. Run pnpm build and record real First Load JS and shared chunk sizes.
2. Create docs/PERFORMANCE_BUDGET.md with measured baseline and per-route budget equal to baseline
   plus 10 percent.
3. Flag routes above 250KB for review.
4. Add a CI check that fails when measured output exceeds the recorded budget.
5. Do not raise budgets to hide a regression in the same task.

SCOPE
docs/PERFORMANCE_BUDGET.md, scripts/frontend/check-budget.* and CI file only.

DONE WHEN
The report contains measured values and CI rejects a deliberate over-budget fixture.
\`\`\`

### Q4.6: Final frontend release gate

\`\`\`text
TASK
Create an evidence-backed frontend go/no-go release gate.

CONTEXT
All preceding frontend tasks are merged. This task changes no application code.

REQUIREMENTS
1. Run typecheck, lint, build and every frontend smoke command documented by the repository.
2. Verify 320, 768 and 1440px for fa/en and light/dark on homepage, login, register and dashboard shell.
3. Verify no alert(), no artificial authentication delay, no page-level horizontal overflow, visible
   focus, reduced motion, localized redirects and honest static-preview labels.
4. Verify public metadata, robots and sitemap output.
5. Mark every item PASS, FAIL or UNVERIFIED. Never upgrade UNVERIFIED to PASS.
6. Create docs/FRONTEND-RELEASE-GATE.md with blockers ordered by severity.

SCOPE
docs/FRONTEND-RELEASE-GATE.md only.

DONE WHEN
The document makes a defensible go/no-go decision. No source file changes.
\`\`\`

## Execution ledger

| Task | Depends on | Status |
|---|---|---|
| H1.1 | current repo | next |
| H1.2 | H1.1 | next |
| H1.3 | H1.2 | next |
| H1.4 | H1.3 | next |
| H1.5 | H1.1 | completed in current homepage pass, verify in H1.1 |
| H1.6 | H1.1 | next |
| H1.7 | H1.2-H1.6 | next |
| P2.1 | H1.4 | next |
| P2.2 | P2.1 | next |
| P2.3-P2.6 | P2.2 | next, one batch per session |
| D3.1-D3.5 | H1.4 | next, one task per session |
| Q4.1-Q4.5 | P2 and D3 complete | next, one task per session |
| Q4.6 | all previous | final |

## Definition of done

The frontend is product-ready only when the final gate has no FAIL, no critical UNVERIFIED item, all public routes have truthful content and metadata, every async surface distinguishes loading/error/empty/success, and the real CI checks pass.
`,
  "VISUAL-QA": `# Visual QA coverage

The Playwright suite covers the homepage, authentication entry point, pricing, and feature overview in both \`/fa\` and \`/en\`. Each route runs at 375x812, 430x932, 768x1024, and 1440x900, with full-page screenshots, a 1.5% pixel-difference tolerance, console/page-error checks, main-content visibility, and horizontal-overflow checks.

The homepage already had a product workspace preview and the rest of the landing page uses diagrams, data visualizations, and structured UI previews. The hero preview remains an intentional local-media slot rather than a fabricated image or external URL. No new media asset was invented. Future product screenshots or a local poster can be dropped into that reserved aspect-ratio frame without layout shift.

Hero changes use the existing sky-blue/orange brand roles, real DOM text, a restrained one-time reveal, and a reduced-motion override. The bilingual routes remain separate through the existing locale provider and document direction.
`,
  "CACHING_AND_COST_CONTROL": `# Caching & AI Cost Governance Architecture

This document specifies the technical design, contracts, and security boundaries implemented for application-level caching, request deduplication, and AI cost/budget governance on the **seorchable** platform.

---

## 1. Caching Layer Architecture

The platform employs a provider-independent caching hierarchy that isolates business layers from future backend storage adapters (such as Redis or Upstash).

\`\`\`
Application / Domain Services
          │
          ▼
     CacheService
          │
          ▼
      ICacheStore
          │
     ┌────┴─────┐
     ▼          ▼
InMemory     Future Redis
 Adapter      Adapter (Deferred)
\`\`\`

### 1.1 Tenant-Aware Deterministic Cache Keys

To enforce zero-trust isolation and prevent any potential cross-tenant cache pollution or data leakage, all cache keys generated by \`CacheService\` are strictly prefixed by the active \`tenantId\`:

\`\`\`
tenant:{tenantId}:{category}:{inputsHash}:{version}
\`\`\`

- **tenantId:** Strictly retrieved from the verified server-side session.
- **category:** Explicit cache namespaces (\`llm\`, \`crawl\`, \`query\`).
- **inputsHash:** Deterministic SHA-256 hash of all ordered parameters that materially affect the response.
- **version:** Key schema version string allowing controlled schema migrations.

### 1.2 Centralized TTL Policies

Default Time-To-Live (TTL) values are centralized and overridable per category:
- **llmResponse:** 24 hours
- **crawlResult:** 12 hours
- **queryResult:** 2 hours

Expired cache entries are systematically discarded on retrieval (Fail-Closed).

---

## 2. Request Deduplication

To prevent race conditions and excessive duplicate computations for concurrent identical operations, \`InMemoryDeduplicationStore\` tracks active in-flight promises.
- **Mechanism:** Multiple concurrent incoming requests with the same cache key resolve through the same in-flight execution promise.
- **Fail-Closed on Failure:** If an active computation fails, the deduplication record is cleaned up instantly, allowing subsequent requests to retry gracefully.

---

## 3. AI Cost & Budget Governance

To control LLM operational costs and enforce corporate usage limits, the cost governance layer provides structured token accounting and tenant-level quota enforcement.

### 3.1 Model Pricing & Classification

To support a diverse provider landscape, AI models are explicitly classified into four access/pricing modes:
1. **Paid:** External API models charged based on token inputs and outputs (e.g., \`gemini-2.5-flash\`, \`gpt-4o\`).
2. **Free Tier:** Public models offered with zero monetary cost under documented rate/token restrictions (e.g., \`gemini-3.5-flash\`, \`llama-3.3-70b-versatile\`).
3. **Self-Hosted:** Local or open-weight models executed on private infrastructure (e.g., \`glm-4.6\`, \`deepseek-v3-0324\`).
4. **Unknown:** Unconfigured models requiring a fail-closed status.

### 3.2 Handling Unknown Models & Budgets

- **Fail-Closed Pricing:** If a model pricing structure is unknown, \`CostCalculator.calculateCost\` returns \`undefined\` (Unknown Pricing), preventing silent fallback to a zero cost value.
- **Monetary Budgets vs Quotas:** The system distinguishes monetary limits (e.g. monthly spending budgets) from usage quotas (e.g., requests per minute (RPM), requests per day (RPD), or Cloudflare neurons per day).
- **Session Identity Enforcement:** Tenant identities for budget checks originate strictly from the server-validated security context (\`requireSession()\`) rather than client-controlled requests.

---

## 4. Concurrency & Production Integration Boundary

The caching and budget components are designed behind clean TypeScript interfaces. This ensures that the in-memory adapters used during local development and testing can be swapped with real Redis/PostgreSQL providers in the future without changing any commercial domain services.

- **No external AI provider is connected by this task.**
- **No production Redis is connected by this task.**
`,
  "DASHBOARD_SHELL_ARCHITECTURE": `# Seorchable — Dashboard Shell Architecture & Specification

This document details the production-grade architectural design of the unified authenticated Dashboard Shell implemented in **Task 3.0**. The shell serves as the layout foundation for all authenticated sub-modules, establishing strict client-server component boundaries, unified configuration-driven navigation, multi-tenant workspace context integration, and comprehensive LTR/RTL bidirectional layout controls.

---

## 1. Directory Structure & Layout Flow

To prevent layout duplication and ensure standard performance practices, Next.js nested layouts are utilized. The global workspace shell resides at:
\`src/app/[locale]/dashboard/layout.tsx\`

This layout wraps all authenticated sub-routes conceptually as follows:

\`\`\`
<DashboardShell>
  <DashboardSidebar />
  <div className="flex flex-col flex-1 min-h-screen overflow-x-hidden">
    <DashboardTopbar />
    <main className="flex-1 p-6">
      {children}
    </main>
  </div>
</DashboardShell>
\`\`\`

### Files Created & Key Locations:
1. **Shell Configuration:** \`src/config/dashboardNavigation.ts\`
   - Defines a single authoritative source of truth for all dashboard navigation menu blocks (Overview, SEO, AI Visibility, Content, Competitors, Citations, Entities, Analytics, Administration, Support) mapping to their respective icons, keys, and relative links.
2. **Sidebar Navigation Menu:** \`src/components/navigation/DashboardSidebar.tsx\`
   - Interactive, theme-aware navigation panel displaying nested options, supporting persistent expand/collapse states, transition durations, keyboard tab-indices, and RTL mirroring.
3. **Topbar Header:** \`src/components/navigation/DashboardTopbar.tsx\`
   - Holds the current Workspace Select dropdown, command search modal hook, unread notification counts, and profile dropdown menu.
4. **Interactive Overlays:**
   - Command palette modal, notification popover drawer, help guide sliding drawer, and theme toggles.

---

## 2. Configuration-Driven Navigation Tree

To support role-based visibility, permission gates, and route-matching validation, navigation items are driven by a typed schema in \`src/config/dashboardNavigation.ts\`:

\`\`\`typescript
export interface NavigationItem {
  id: string;
  labelEn: string;
  labelFa: string;
  href: string;
  icon: string; // Lucide icon lookup string
  requiredPermission?: string;
  children?: NavigationItem[];
}
\`\`\`

This prevents hardcoding navigation lists inside visual templates. Every sidebar, breadcrumb locator, and mobile drawer derives active indicators from this single object.

---

## 3. Client vs. Server Component Boundaries

* **Server Components (Default):**
  - All page endpoints under \`/[locale]/dashboard/\` are server components.
  - Server actions resolve user identity and transacted tenant context.
  - Dynamic parameters are pre-fetched server-side, reducing layout shifts and first-contentful-paint (FCP) duration.
* **Client Components (Interactive Islands):**
  - Interactive elements (collapsible toggles, workspace dropdown state, popovers, and dialog overlays) are isolated inside client wrapper scopes.
  - Sidebar state handles responsive transitions using small state flags, with client-side indicators safely loading to prevent hydration mismatches during static site generation (SSG).

---

## 4. Multi-Tenant Workspace & Identity Integration

Unauthenticated sessions are strictly isolated via the system's \`<ProtectedRoute>\` controls. When active:
* **Workspace Context:** The \`DashboardTopbar\` mounts a type-safe \`WorkspaceSelector\` displaying active workspace metadata (e.g., *Tehran HQ Workspace*).
* **Identity Context:** The \`UserMenu\` resolves real user data (e.g., *Faramarz Yazdani - faramarz@brandgraph.ai*) instead of utilizing static mocked entities.
* **Sign-Out Operations:** Sign-out controls integrate directly with the canonical authentication provider \`invalidateSession\` API to clear active secure HTTPOnly cookies and reset state parameters.

---

## 5. Bidirectional (RTL/LTR) & Responsive Design

### Direction-Aware Design Primitives:
* Directionality is determined by the Next.js locale: \`fa\` maps to \`rtl\`, and \`en\` maps to \`ltr\`.
* Layout margins, padding, absolute borders, and slide-in offsets utilize CSS logical properties (such as \`ms-*\`, \`me-*\`, \`border-inline-start\`, \`text-start\`) instead of absolute horizontal parameters.
* Directional UI icons (e.g., expansion chevrons) mirror dynamically according to the active locale.

### Responsive Breakpoints:
* **Desktop ($> 1024px$):** Persistence sidebar is pinned to the side.
* **Tablet ($768px \\le \\text{width} \\le 1024px$):** Sidebar can be collapsed into a compact icon-only representation.
* **Mobile ($< 768px$):** The sidebar transitions into an absolute, slide-in overlay drawer with an explicit close trigger, focus trap management, and backdrop overlay click-handlers.

---

## 6. Verification & Automated Test Suites

Three dedicated test suites exist under \`tests/services/\` to verify continuous structural integrity:
1. \`dashboard-shell.test.ts\` — Validates sitemap paths, active state resolution, and localizations.
2. \`dashboard-home.test.ts\` — Asserts transacted RLS database aggregations, preventing unauthorized or unauthenticated queries.
3. \`dashboard-services.test.ts\` — Asserts that plan features (Free, Pro, Enterprise) map correctly to marketplace items without permission leakage.

Developers mounting future dashboard modules need only add their corresponding page path under \`src/app/[locale]/dashboard/\` to automatically inherit the global workspace layout and responsive telemetry bounds.
`,
  "OBSERVABILITY_AND_GOVERNANCE": `# Observability & Cost Governance Architecture Reference

This document defines the architectural specification, environment configurations, and security/isolation properties established for request-scoped context propagation, trace sampling, decoupled latency metrics, and AI cost warning thresholds on the **seorchable** platform.

---

## 1. Request Context & Async Context Propagation

For advanced request-scoped context tracing without manually prop-drilling identifiers through business services, the system introduces \`ObservabilityContextManager\`.

### 1.1 Multi-Runtime Compatibility

Runtimes like Edge and serverless isolates do not natively support or allow Node's \`node:async_hooks\` module. To prevent compile-time import leaks and support Edge functions, the context propagation layer detects and wraps runtimes behind a unified abstraction:

\`\`\`
                  ObservabilityContextManager
                              │
            ┌─────────────────┴─────────────────┐
            ▼                                   ▼
      Node.js Runtime                    Edge / Browser fallback
    (AsyncLocalStorage)                       (In-Memory Map)
\`\`\`

- **Node.js Environment:** Utilizes \`AsyncLocalStorage\` to securely carry \`requestId\`, \`traceId\`, \`spanId\`, \`jobId\`, \`tenantId\`, and \`operation\` across asynchronous scopes.
- **Edge/V8 Isolate Environment:** Falls back gracefully to structured request tracking, ensuring no compile/execution failure occurs in browser or isolate-based runtimes.

---

## 2. Trace Sampling & Metric Decoupling

Trace storage is highly expensive. To optimize database resources, the platform supports configurable probabilistic trace sampling while ensuring critical telemetry remains statistically meaningful and completely preserved.

### 2.1 Configurable Trace Sampling Rate

Traces are sampled dynamically based on the environment variable:

\`\`\`
OBSERVABILITY_TRACE_SAMPLE_RATE=0.1
\`\`\`

- **Format:** Float values between \`0.0\` (0%) and \`1.0\` (100%).
- **Development/Test defaults:** Defaults to \`1.0\` (100%) to facilitate local debugging and integration validation.
- **Production defaults:** Defaults to \`0.1\` (10%) to minimize infrastructure costs.

### 2.2 Error Preservation Invariant

Probabilistic sampling **must never** result in the loss of critical error logs or crash reports.
- **Rule:** If an operation terminates with an error or failure, the \`ObservabilityTracker\` ALWAYS bypasses sampling rules and retains the trace, guaranteeing 100% visibility for troubleshooting.

### 2.3 Decoupled Metrics

Distributed traces are separate from latency measurements. Latitude metric aggregations (e.g. histographic latency observations) are recorded **independently** of trace sampling rates. Even if a successful trace is not sampled, its execution duration is registered in the metrics catalog, safeguarding the statistical accuracy of performance dashboards.

---

## 3. High-Cost AI Operation Thresholds

To identify unusually expensive operations easily, the observability system tracks LLM usage records and evaluates them against configurable token warning thresholds.

\`\`\`
OBSERVABILITY_LLM_TOKEN_WARNING_THRESHOLD=5000
\`\`\`

- **Default:** 5000 total tokens (Input + Output).
- **Behavior:** When an LLM operation exceeds this limit, the tracker produces a distinguishable structured warning event (\`llm.cost.threshold_exceeded\`).
- **Security Check:** To protect user privacy and proprietary IP, **the prompt content and completion responses are never logged** or stored in telemetry metadata.
- **Warning-Only Boundary:** The threshold operates strictly as a warning trigger; it **MUST NOT** terminate or reject the LLM request.

---

## 4. Runtime Capabilities Matrix

The supported capabilities vary dynamically across application environments:

| Capability | Node.js Server | Edge Runtime / V8 Isolates | Browser / Client |
| :--- | :--- | :--- | :--- |
| **AsyncLocalStorage** | Yes (Native) | No (Map Fallback) | No (Map Fallback) |
| **Request Correlation** | Yes (Automatic) | Yes (Manual Map) | Yes (Manual Map) |
| **Structured Logging** | Yes | Yes | Yes |
| **Latency Metrics** | Yes | Yes | Yes |
| **Trace Sampling** | Yes (Configurable) | Yes (Configurable) | Yes (Configurable) |
| **Error Preservation**| Yes (100% kept) | Yes (100% kept) | Yes (100% kept) |
| **Cost Threshold Warning**| Yes | Yes | Yes |
`,
  "SITEMAP_AND_ROUTE_SPECIFICATION": `# Seorchable — Sitemap, Route Architecture & Legacy Redirect Specification

**Execution Phase:** Phase 1 — Target Product Architecture
**Task ID:** 1.1
**Execution Agent:** Jules
**Document Version:** 1.0.0
**Date:** August 2026
**Status:** Authoritative Specification (Read-Only Planning Blueprint)

---

## 1. Executive Summary

This document establishes the canonical sitemap, route architecture, and redirect policy for the **Seorchable** SaaS platform. It acts as the single source of truth for the transition of our application from a series of semi-independent features into a highly cohesive, secure, multi-tenant workspace.

By categorizing every public and authenticated path, we safeguard authentication boundaries (Public vs. Dashboard), define localization expectations (\`/[locale]/en\` and \`/[locale]/fa\`), map out service relationships, and specify exactly which legacy or duplicate paths require Next.js-level permanent redirects.

**This is a planning and specification blueprint.** No application code is changed during this task. Future implementation phases will execute against this specification.

---

## 2. Source-of-Truth Declaration

This specification is aligned strictly and exclusively with the approved project roadmaps present in the repository:
1. \`docs/roadmap/TASKS.md\`
2. \`docs/roadmap/EXECUTION_ROADMAP.md\`
3. \`docs/roadmap/PRODUCT_EVOLUTION_ROADMAP.md\`

Any discrepancy between historical audit files, previous AI-generated reports, or local assumptions is resolved by treating the above three files as the supreme authority. This document consolidates their directives into an actionable architectural structure.

---

## 3. Route Classification Methodology

To ensure absolute precision, every route in this specification is classified under one of the following state classifications:

*   **EXISTING:** The route physically exists in the repository directories as verified by the current structure under \`src/app/[locale]/\`.
*   **TARGET:** The route is part of the approved future canonical architecture, but might not yet have a physical implementation or requires directory refactoring.
*   **LEGACY:** The route exists or is historically referenced, but is considered obsolete, redundant, or a duplicate. It is not part of the long-term canonical architecture.
*   **REDIRECT:** A legacy/obsolete route that must permanently redirect to a canonical TARGET route.
*   **DEFERRED:** A route or feature set explicitly postponed according to the roadmap phases (e.g., Tier 3/4 expansion features or Phase 13+ modules).

---

## 4. Public Sitemap

The public sitemap represents the unauthenticated, search-engine-indexable marketing and acquisition funnel. It is designed to capture organic search traffic across SEO and AI Visibility (GEO/AEO) keywords, demonstrate capabilities, and drive registrations.

The public surface must support the bilingual model: \`/[locale]/\` with \`/en/\` (LTR, English) and \`/fa/\` (RTL, Persian).

### Canonical Public Routes

1.  **Homepage (\`/[locale]/\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Primary portal. Features product-first interactive mock dashboards, B2B comparison table, Enterprise Trust Layer, and entry points for the free tool funnel.
    *   *Indexable:* Yes.
    *   *Localization:* Fully translated, supporting LTR (English) and RTL (Persian).
    *   *Relationship to Dashboard:* Houses the unauthenticated \`#free-audit\` and \`#pricing\` CTA sections.
2.  **Solutions Overview & Segments (\`/[locale]/solutions\`)**
    *   *Status:* EXISTING / TARGET
    *   *Sub-routes:*
        *   \`/[locale]/solutions/aeo\` (EXISTING / TARGET) - Generative Engine Optimization / AI Search Visibility marketing.
        *   \`/[locale]/solutions/geo\` (EXISTING / TARGET) - AI Search Optimization landing page.
        *   \`/[locale]/solutions/protection\` (EXISTING / TARGET) - AI Advertising & Brand Protection.
        *   \`/[locale]/solutions/radar\` (EXISTING / TARGET) - Competitive Intelligence Radar landing page.
    *   *Purpose:* Industry-specific and segment-specific landing pages detailing how Seorchable solves specific enterprise visibility needs.
    *   *Indexable:* Yes.
3.  **Pricing (\`/[locale]/pricing\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Showcases the Free, Professional, Business, and Enterprise plans, usage limits, and triggers registration.
    *   *Indexable:* Yes.
4.  **About Us (\`/[locale]/about\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Describes company vision, team, and careers.
    *   *Indexable:* Yes.
5.  **Contact Us (\`/[locale]/contact\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Direct lead capture form, B2B enterprise custom request form, and support entry point.
    *   *Indexable:* Yes.
6.  **Privacy & Terms (\`/[locale]/privacy\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Legally required privacy policy, terms of service, and cookie disclosures.
    *   *Indexable:* Yes (with nofollow options on certain legal variations if needed).
7.  **Blog (\`/[locale]/blog\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Content marketing hub containing SEO, GEO, AEO, and AI Search Visibility educational articles.
    *   *Indexable:* Yes.

---

## 5. Authentication Routes

Authentication routes are unauthenticated but must be strictly isolated from the dashboard workspace shell. They manage user access, registration, and email verification.

*   **Login (\`/[locale]/login\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Authenticate returning users. Once logged in, redirects to \`/[locale]/dashboard\`.
    *   *Indexable:* No (blocked via \`robots.txt\` / meta robots tag).
*   **Register (\`/[locale]/register\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* SaaS workspace registration form with onboarding prompts. Once completed, redirects to registration verification.
    *   *Indexable:* No.
*   **Forgot Password (\`/[locale]/forgot-password\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Allows users to request password reset links.
    *   *Indexable:* No.
*   **Verify Email (\`/[locale]/verify-email\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Landing page for email verification tokens.
    *   *Indexable:* No.

---

## 6. Dashboard Architecture

The Authenticated Dashboard Layer is protected via \`<ProtectedRoute>\` boundaries. These routes manage tenant workspace operations and product tools.

### Canonical Workspace Structure

1.  **Dashboard Overview (\`/[locale]/dashboard\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Executive landing dashboard showing consolidated health indicators (Visibility Score, SEO Health, AI Visibility, Brand Authority, Citation Coverage, Competitor Position).
2.  **AI Visibility Audits (\`/[locale]/dashboard/audits\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Historical crawls list and start point for new on-demand crawls.
3.  **Audit Detail Scorecard (\`/[locale]/dashboard/audits/[id]\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Granular analysis for a single crawl ID, displaying AI Visibility scores, technical recommendations, and citations.
4.  **AI Query Lab / Prompt Monitor (\`/[locale]/dashboard/query\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Playground for running simulated prompts across LLM models and tracking sentiment scores.
5.  **Advanced Document Ingest (\`/[locale]/dashboard/ingestion\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Upload portal for proprietary documents (.txt, .md, .json) to train tenant-isolated RAG vector engines.
6.  **Competitive Intelligence (\`/[locale]/dashboard/competitive\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Interactive spider charts and tables comparing metrics across 5 domains.
7.  **Brand & Citation Monitoring (\`/[locale]/dashboard/brand-monitoring\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Real-time tracking of brand mentions and citation citations found in LLM answers.
8.  **Knowledge & Entity Explorer (\`/[locale]/dashboard/entities\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Visualization of the company’s semantic knowledge graph, entity authority, and connections.
9.  **Content Studio (\`/[locale]/dashboard/content\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Semantic editor, topic cluster analyser, and content optimization scoring system.
10. **Technical SEO Analyzer (\`/[locale]/dashboard/optimization/technical\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Details canonical mismatch, robots.txt, sitemaps, structured schema data, and crawl logs.
11. **LLM & Semantic Analytics (\`/[locale]/dashboard/analytics/llm\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Analytics dashboard tracking AI model response shares and prompt historical trends.
12. **Automated Reports (\`/[locale]/dashboard/reports\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Schedule automated PDF / CSV visibility report delivery.
13. **Billing & Subscriptions (\`/[locale]/dashboard/billing\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Upgrades, payment history, invoices, and quota details.
14. **Workspace & Profile Settings (\`/[locale]/dashboard/settings\`)**
    *   *Status:* EXISTING / TARGET
    *   *Purpose:* Team management, API tokens, workspace-level preferences.

---

## 7. Service Route Inventory

Each core Seorchable intelligence domain maps directly through three essential layers:
$$\\text{Public Marketing Landing Page} \\longrightarrow \\text{Authenticated Workspace Tool} \\longrightarrow \\text{Technical Documentation Guide}$$

This maps the acquisition surface to the application workspace and the user education layer.

\`\`\`
       [ Public Landing Page ]                [ Authenticated Tool ]               [ User Documentation ]
  /[locale]/solutions/aeo           -->  /[locale]/dashboard/audits         -->  /[locale]/docs/architecture
  /[locale]/solutions/geo           -->  /[locale]/dashboard/analytics/llm  -->  /[locale]/docs/ai-pipeline-architecture
  /[locale]/solutions/radar         -->  /[locale]/dashboard/competitive    -->  /[locale]/docs/domain-model
  /[locale]/solutions/protection    -->  /[locale]/dashboard/brand-monitoring-->  /[locale]/docs/rbac-model
\`\`\`

### Strategic Mappings

*   **AI Visibility & Audits:**
    *   *Marketing Page:* \`/[locale]/solutions/aeo\`
    *   *Application Path:* \`/[locale]/dashboard/audits\` (And details at \`/[locale]/dashboard/audits/[id]\`)
    *   *Documentation:* \`/[locale]/docs/architecture\`
*   **AI Analytics & Prompting:**
    *   *Marketing Page:* \`/[locale]/solutions/geo\`
    *   *Application Path:* \`/[locale]/dashboard/query\`
    *   *Documentation:* \`/[locale]/docs/ai-pipeline-architecture\`
*   **Competitive Intelligence:**
    *   *Marketing Page:* \`/[locale]/solutions/radar\`
    *   *Application Path:* \`/[locale]/dashboard/competitive\`
    *   *Documentation:* \`/[locale]/docs/domain-model\`
*   **Content Intelligence & Studio:**
    *   *Marketing Page:* \`/[locale]/solutions/geo\` (To be expanded in future phases)
    *   *Application Path:* \`/[locale]/dashboard/content\`
    *   *Documentation:* \`/[locale]/docs/data-flow\`
*   **Knowledge Graph & Entities:**
    *   *Marketing Page:* \`/[locale]/solutions/aeo\`
    *   *Application Path:* \`/[locale]/dashboard/entities\`
    *   *Documentation:* \`/[locale]/docs/knowledge-graph-design\`

---

## 8. SEO Landing Page Architecture

To capture high-intent search volumes, Seorchable defines specialized SEO-focused public acquisition landing pages. These are structured as lightweight informational paths rather than authenticated routes.

Since individual sub-routes are planned for future programmatic rollout under Phase 13, they are currently marked as **TARGET / DEFERRED** to prevent indexing empty or low-fidelity stubs:

1.  **Technical SEO Marketing Page (\`/[locale]/solutions/technical-seo\`)**
    *   *Classification:* TARGET / DEFERRED
    *   *Purpose:* Landing page explaining crawlability, indexing limits, status codes, and why technical health affects AI crawler indexation.
2.  **Structured Data & Schema Marketing Page (\`/[locale]/solutions/schema-structured-data\`)**
    *   *Classification:* TARGET / DEFERRED
    *   *Purpose:* Guides users on how microdata formats and JSON-LD schema help LLM networks extract facts accurately.
3.  **SEO Auditing Landing Page (\`/[locale]/solutions/seo-auditing\`)**
    *   *Classification:* TARGET / DEFERRED
    *   *Purpose:* Landing page targeting commercial keywords like "SEO Audit Tool" or "Farsi SEO Crawler".

---

## 9. Service Landing Page Architecture

The platform maps acquisition surfaces targeting enterprise decision-makers across primary service sectors. These reside under \`/[locale]/solutions/\` and exist as high-fidelity interactive templates:

1.  **AI Visibility & Generative Optimization (\`/[locale]/solutions/aeo\`)**
    *   *Classification:* EXISTING / TARGET
    *   *Fidelity:* High-fidelity interactive mockups mapping brand citation rate.
2.  **AI Search Optimization (\`/[locale]/solutions/geo\`)**
    *   *Classification:* EXISTING / TARGET
    *   *Fidelity:* Showcases how modern search networks rank content based on brand association factors.
3.  **Competitive Intelligence (\`/[locale]/solutions/radar\`)**
    *   *Classification:* EXISTING / TARGET
    *   *Fidelity:* Interactive Spider charts comparing simulated client values with a benchmark.
4.  **AI Brand Protection & Compliance (\`/[locale]/solutions/protection\`)**
    *   *Classification:* EXISTING / TARGET
    *   *Fidelity:* Focuses on detecting LLM negative sentiment, hallucinated claims, and incorrect pricing.

---

## 10. Documentation Routes

The Documentation Portal is a static, bilingually-rendered system using standard Next.js routing patterns.

*   **Documentation Core Root (\`/[locale]/docs\`)**
    *   *Classification:* EXISTING / TARGET
    *   *Public Access:* Yes (Fully accessible without login to improve authority).
    *   *Indexability:* Yes (highly indexable).
    *   *Localization:* Fully translated into English and Persian.
    *   *Fidelity:* Powered by a static data array (\`DOCS_TOPICS\` in \`src/lib/docsData.ts\`) to ensure extremely high performance and avoid server-side filesystem dependencies.
*   **Documentation Slug (\`/[locale]/docs/[slug]\`)**
    *   *Classification:* EXISTING / TARGET
    *   *Purpose:* Renders detailed markdown files (e.g., \`rbac-model\`, \`ai-pipeline-architecture\`, \`knowledge-graph-design\`).

---

## 11. Account Routes

Account and profile settings are separated based on organizational workspace boundaries:

1.  **User Profile Settings (\`/[locale]/profile\`)**
    *   *Classification:* EXISTING / TARGET
    *   *Purpose:* Manage personal user parameters (password change, user avatar, display name, bilingual preferences).
    *   *Authentication:* Required.
2.  **Legacy Global Settings (\`/[locale]/settings\`)**
    *   *Classification:* REDIRECT
    *   *Redirect Target:* \`/[locale]/profile\`
    *   *Reason:* Clean directory hierarchy. General account settings must redirect to \`/profile\` to differentiate from \`/dashboard/settings\` (which houses workspace/tenant parameters).

---

## 12. Billing Routes

Billing represents a critical enterprise conversion point and is isolated from basic profile settings:

1.  **Workspace Billing (\`/[locale]/dashboard/billing\`)**
    *   *Classification:* EXISTING / TARGET
    *   *Purpose:* Manage the organization's plan, upgrade/downgrade flows, historical invoice list, and current API/crawl quota balances.
    *   *Authentication:* Required.
2.  **Standalone Invoice Payment Flow (\`/[locale]/invoice\`)**
    *   *Classification:* EXISTING / TARGET
    *   *Purpose:* Dedicated page hosted under the root locale to process outstanding payments securely. Linked globally via invoice receipt icons.

---

## 13. Canonical URL Policy

To prevent search ranking penalties, duplicate index entries, or crawl budget waste, the platform enforces a strict canonical URL policy.

1.  **Locale Subdirectory:**
    *   All public indexable URLs must explicitly include the localized subdirectory: \`https://seorchable.ir/fa/...\` or \`https://seorchable.ir/en/...\`.
2.  **No Trailing Slashes:**
    *   Next.js defaults must be configured to trim trailing slashes. All canonical meta tags must point to the non-trailing-slash URL:
        \`https://seorchable.ir/en/solutions/aeo\` is canonical; \`https://seorchable.ir/en/solutions/aeo/\` is invalid and must redirect.
3.  **Canonical Meta Tags \`<link rel="canonical">\`:**
    *   Every public page must render a canonical link pointing to its absolute URL (including locale directory).
4.  **Bilingual Alternate Tags \`hreflang\`:**
    *   Cross-localized pages must render alternate meta tags to notify search spiders of matching translations:
        \`\`\`html
        <link rel="alternate" hreflang="en" href="https://seorchable.ir/en/pricing" />
        <link rel="alternate" hreflang="fa" href="https://seorchable.ir/fa/pricing" />
        <link rel="alternate" hreflang="x-default" href="https://seorchable.ir/en/pricing" />
        \`\`\`
5.  **Dashboard Route Canonicalization:**
    *   Dashboard routes nested under \`/dashboard\` are protected behind authentication and are served with \`<meta name="robots" content="noindex, nofollow">\` to block indexation. Canonical URLs inside the dashboard are specified for routing reference only.
6.  **Query Parameter Strategy:**
    *   Marketing tracking UTM tags, pagination indices, or search queries (\`?q=\`, \`?utm_source=\`) must not generate unique indexable pages. The canonical meta tag must point to the bare path (e.g. \`/[locale]/solutions/aeo\`).

---

## 14. Legacy Redirect Matrix

Multiple duplicates and transitional routes exist in the repository to maintain historical compatibility. These must be permanently redirected (\`301 Moved Permanently\`) to their canonical target routes to clean up the product taxonomy:

| Legacy Route (Source) | Canonical Route (Destination) | Redirect Type | Reason / Justification |
| :--- | :--- | :--- | :--- |
| \`/[locale]/settings\` | \`/[locale]/profile\` | \`301\` Permanent | Grouping separation. Global settings represent user profile info, whereas \`/dashboard/settings\` manages enterprise-level workspace variables. |
| \`/[locale]/dashboard/rag\` | \`/[locale]/dashboard/query\` | \`301\` Permanent | Consolidation. Both directories render the RAG playground. The roadmap canonicalized this under Prompt Intelligence (\`/query\`). |
| \`/[locale]/dashboard/ingest\` | \`/[locale]/dashboard/ingestion\` | \`301\` Permanent | Consolidation. Both handle document ingestion. \`/ingestion\` is the fully client-side unified page. |
| \`/[locale]/dashboard/competitors\`| \`/[locale]/dashboard/competitive\` | \`301\` Permanent | Consolidation. Avoids duplicate routing for Competitive Intelligence Spider Charts. |
| \`/[locale]/dashboard/graph\` | \`/[locale]/dashboard/entities\` | \`301\` Permanent | Consolidation. Avoids duplicate routes for the Interactive Live Knowledge Graph. |
| \`/[locale]/dashboard/audit\` | \`/[locale]/dashboard/audits\` | \`301\` Permanent | Redirects legacy single-action audits folder to the historical audits list dashboard. |
| \`/[locale]/dashboard/audit/free\` | \`/[locale]/dashboard/audits\` | \`301\` Permanent | Consolidation. Free audit panel logic is being integrated into the core audits dashboard. |
| \`/[locale]/dashboard/audit/premium\`| \`/[locale]/dashboard/audits\` | \`301\` Permanent | Consolidation. Premium audits are processed via the unified \`/audits\` engine. |

---

## 15. Next.js Redirect Specification

To configure the redirect matrix outlined in Section 14, the following \`next.config.ts\` configuration snippet is proposed.

*(Note: In accordance with Strict Change Control rules, this snippet is illustrative and must not be written to \`next.config.ts\` during this task).*

\`\`\`typescript
// Proposed redirect configuration for next.config.ts in future execution tasks
const nextConfig = {
  async redirects() {
    return [
      // 1. Legacy Global Settings to User Profile
      {
        source: '/:locale/settings',
        destination: '/:locale/profile',
        permanent: true,
      },
      // 2. Legacy RAG page to Prompt Query Intelligence
      {
        source: '/:locale/dashboard/rag',
        destination: '/:locale/dashboard/query',
        permanent: true,
      },
      // 3. Legacy Ingest to Advanced Ingestion Page
      {
        source: '/:locale/dashboard/ingest',
        destination: '/:locale/dashboard/ingestion',
        permanent: true,
      },
      // 4. Legacy Competitors page to Competitive Panel
      {
        source: '/:locale/dashboard/competitors',
        destination: '/:locale/dashboard/competitive',
        permanent: true,
      },
      // 5. Legacy Graph page to Entity Explorer
      {
        source: '/:locale/dashboard/graph',
        destination: '/:locale/dashboard/entities',
        permanent: true,
      },
      // 6. Legacy Audit paths to Audits list
      {
        source: '/:locale/dashboard/audit',
        destination: '/:locale/dashboard/audits',
        permanent: true,
      },
      {
        source: '/:locale/dashboard/audit/free',
        destination: '/:locale/dashboard/audits',
        permanent: true,
      },
      {
        source: '/:locale/dashboard/audit/premium',
        destination: '/:locale/dashboard/audits',
        permanent: true,
      }
    ];
  }
};
\`\`\`

---

## 16. Route Migration & Dependency Notes

Transitioning from legacy paths to our canonical dashboard workspace introduces specific sequence-sensitive dependencies:

1.  **Authentication Guard Setup:**
    Ensure middleware is updated to protect \`/[locale]/dashboard/settings\`, \`/[locale]/dashboard/billing\`, \`/[locale]/dashboard/audits\`, and other dashboard sub-routes, while leaving \`/[locale]/profile\` and global navigation accessible.
2.  **Static Documentation Sync:**
    Since the dynamic route \`/[locale]/docs/[slug]\` depends on the \`DOCS_TOPICS\` array in \`src/lib/docsData.ts\`, any changes to slugs must be updated there simultaneously to avoid broken client-side hydration or 404s.
3.  **UI Navigation Component Updates:**
    Before applying the permanent redirects in \`next.config.ts\`, the navigation drawers (\`AppSidebar.tsx\` and bottom horizontal menus like \`FloatingSidebar.tsx\`) must have their reference links changed to point exclusively to the new canonical routes. Doing this out of order can trigger double-rendering cycles and degrade performance.

---

## 17. Explicit Deferred Items

According to the EXECUTION_ROADMAP timeline, the following items are deferred:

*   **Programmatic SEO Pages (\`/[locale]/solutions/technical-seo\`, \`schema-structured-data\`, \`seo-auditing\`):** Deferred to Phase 13. These routes do not exist physically in the repository.
*   **Third-Party API Integrations (WordPress/Shopify plugins under \`/integrations\`):** Deferred to Phase 15.
*   **Public API Developer Sandbox (\`/[locale]/api-explorer\`):** Deferred to Phase 16.
*   **Custom Enterprise SSO and SAML Login (\`/[locale]/sso-login\`):** Deferred to Phase 17.

---

## 18. Explicit Out-of-Scope Items

The following architectural topics are explicitly excluded from this specification to preserve the boundaries of Task 1.1:

*   **Authentication Logic Rewrite:** Modifying password hashing, session tokens, cookie middleware, or server actions is out of scope.
*   **Drizzle ORM Setup:** Setting up or migrating to a third-party ORM is out of scope (Postgres operations continue using standard TypeScript wrappers and pool clients).
*   **Payment Gateway APIs:** Writing actual payment processing gateways or integrating Stripe/Zarinpal webhooks is out of scope.
*   **UI Reskinning:** Redesigning color patterns or layout configurations is out of scope.

---

## 19. Authoritative Route Matrix

Every important route in Seorchable is cataloged below, displaying its classification, authentication boundary, indexing options, and localization details.

| Route (Template) | Type | Status | Canonical URL | Auth Required | Locale Directory | Indexable | Redirect Target | Notes / Context |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| \`/[locale]\` | EXISTING | TARGET | \`/[locale]\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | Primary marketing portal. |
| \`/[locale]/solutions/aeo\` | EXISTING | TARGET | \`/[locale]/solutions/aeo\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | High-fidelity interactive mockup. |
| \`/[locale]/solutions/geo\` | EXISTING | TARGET | \`/[locale]/solutions/geo\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | Search engine brand factors page. |
| \`/[locale]/solutions/protection\` | EXISTING | TARGET | \`/[locale]/solutions/protection\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | AI brand monitoring showcase. |
| \`/[locale]/solutions/radar\` | EXISTING | TARGET | \`/[locale]/solutions/radar\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | Competitive radar showcase. |
| \`/[locale]/solutions/technical-seo\` | TARGET | DEFERRED | \`/[locale]/solutions/technical-seo\` | No | Yes (\`/en\`, \`/fa\`) | No | None | Planned public acquisition page (Phase 13). |
| \`/[locale]/solutions/schema-structured-data\` | TARGET | DEFERRED | \`/[locale]/solutions/schema-structured-data\` | No | Yes (\`/en\`, \`/fa\`) | No | None | Planned public acquisition page (Phase 13). |
| \`/[locale]/solutions/seo-auditing\` | TARGET | DEFERRED | \`/[locale]/solutions/seo-auditing\` | No | Yes (\`/en\`, \`/fa\`) | No | None | Planned public acquisition page (Phase 13). |
| \`/[locale]/pricing\` | EXISTING | TARGET | \`/[locale]/pricing\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | Explains SaaS plans & quotas. |
| \`/[locale]/about\` | EXISTING | TARGET | \`/[locale]/about\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | About Us / Career hub. |
| \`/[locale]/contact\` | EXISTING | TARGET | \`/[locale]/contact\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | B2B enterprise leads intake. |
| \`/[locale]/privacy\` | EXISTING | TARGET | \`/[locale]/privacy\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | Standard terms & policies page. |
| \`/[locale]/blog\` | EXISTING | TARGET | \`/[locale]/blog\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | Content marketing repository. |
| \`/[locale]/docs\` | EXISTING | TARGET | \`/[locale]/docs\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | Documentation landing page. |
| \`/[locale]/docs/[slug]\` | EXISTING | TARGET | \`/[locale]/docs/[slug]\` | No | Yes (\`/en\`, \`/fa\`) | Yes | None | Renders individual topic markdowns. |
| \`/[locale]/login\` | EXISTING | TARGET | \`/[locale]/login\` | No | Yes (\`/en\`, \`/fa\`) | No | None | Handles secure workspace access. |
| \`/[locale]/register\` | EXISTING | TARGET | \`/[locale]/register\` | No | Yes (\`/en\`, \`/fa\`) | No | None | Handles new workspace registrations. |
| \`/[locale]/forgot-password\` | EXISTING | TARGET | \`/[locale]/forgot-password\` | No | Yes (\`/en\`, \`/fa\`) | No | None | Password resetting. |
| \`/[locale]/verify-email\` | EXISTING | TARGET | \`/[locale]/verify-email\` | No | Yes (\`/en\`, \`/fa\`) | No | None | Verification portal landing. |
| \`/[locale]/dashboard\` | EXISTING | TARGET | \`/[locale]/dashboard\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Main authenticated executive overview. |
| \`/[locale]/dashboard/audits\` | EXISTING | TARGET | \`/[locale]/dashboard/audits\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Lists historical crawler logs & audits. |
| \`/[locale]/dashboard/audits/[id]\` | EXISTING | TARGET | \`/[locale]/dashboard/audits/[id]\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Scores AI footprints for crawl ID. |
| \`/[locale]/dashboard/query\` | EXISTING | TARGET | \`/[locale]/dashboard/query\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Playground to run models & test prompts. |
| \`/[locale]/dashboard/ingestion\` | EXISTING | TARGET | \`/[locale]/dashboard/ingestion\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Portal to upload files to vector DB. |
| \`/[locale]/dashboard/competitive\` | EXISTING | TARGET | \`/[locale]/dashboard/competitive\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Compare up to 5 domains. |
| \`/[locale]/dashboard/brand-monitoring\` | EXISTING | TARGET | \`/[locale]/dashboard/brand-monitoring\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Track brand mentions in AI outputs. |
| \`/[locale]/dashboard/entities\` | EXISTING | TARGET | \`/[locale]/dashboard/entities\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Renders Live Knowledge Graph canvas. |
| \`/[locale]/dashboard/content\` | EXISTING | TARGET | \`/[locale]/dashboard/content\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Content Studio editor & scoring. |
| \`/[locale]/dashboard/optimization/technical\` | EXISTING | TARGET | \`/[locale]/dashboard/optimization/technical\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Canonical tags, robots, sitemaps. |
| \`/[locale]/dashboard/analytics/llm\` | EXISTING | TARGET | \`/[locale]/dashboard/analytics/llm\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | LLM responses and share rate charts. |
| \`/[locale]/dashboard/reports\` | EXISTING | TARGET | \`/[locale]/dashboard/reports\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Schedules automated PDF reports. |
| \`/[locale]/dashboard/billing\` | EXISTING | TARGET | \`/[locale]/dashboard/billing\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Workspace subscription settings. |
| \`/[locale]/dashboard/settings\` | EXISTING | TARGET | \`/[locale]/dashboard/settings\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Workspace parameters and team invites. |
| \`/[locale]/profile\` | EXISTING | TARGET | \`/[locale]/profile\` | Yes | Yes (\`/en\`, \`/fa\`) | No | None | Personal user account preferences. |
| \`/[locale]/invoice\` | EXISTING | TARGET | \`/[locale]/invoice\` | No | Yes (\`/en\`, \`/fa\`) | No | None | Direct payment gateway portal. |
| \`/[locale]/settings\` | EXISTING | LEGACY | None | Yes | Yes (\`/en\`, \`/fa\`) | No | \`/[locale]/profile\` | Legacy global settings (needs redirect). |
| \`/[locale]/dashboard/rag\` | EXISTING | LEGACY | None | Yes | Yes (\`/en\`, \`/fa\`) | No | \`/[locale]/dashboard/query\` | Duplicate RAG index page (needs redirect). |
| \`/[locale]/dashboard/ingest\` | EXISTING | LEGACY | None | Yes | Yes (\`/en\`, \`/fa\`) | No | \`/[locale]/dashboard/ingestion\` | Duplicate Ingest index page (needs redirect). |
| \`/[locale]/dashboard/competitors\`| EXISTING | LEGACY | None | Yes | Yes (\`/en\`, \`/fa\`) | No | \`/[locale]/dashboard/competitive\`| Duplicate Competitors index page (redirect). |
| \`/[locale]/dashboard/graph\` | EXISTING | LEGACY | None | Yes | Yes (\`/en\`, \`/fa\`) | No | \`/[locale]/dashboard/entities\` | Duplicate Knowledge Graph page (redirect). |
| \`/[locale]/dashboard/audit\` | EXISTING | LEGACY | None | Yes | Yes (\`/en\`, \`/fa\`) | No | \`/[locale]/dashboard/audits\` | Single-audit legacy page (needs redirect). |
| \`/[locale]/dashboard/audit/free\` | EXISTING | LEGACY | None | Yes | Yes (\`/en\`, \`/fa\`) | No | \`/[locale]/dashboard/audits\` | Legacy Free Audit panel (needs redirect). |
| \`/[locale]/dashboard/audit/premium\`| EXISTING | LEGACY | None | Yes | Yes (\`/en\`, \`/fa\`) | No | \`/[locale]/dashboard/audits\` | Legacy Premium Audit panel (redirect). |

---

## 20. Conclusion

This blueprint provides an absolute route and redirect plan for subsequent SaaS platform development. All verified duplicate paths discovered in the repository have been assigned permanent \`301\` redirect mappings to optimize user experiences and avoid indexing duplicate routes.

Developers executing Task 1.3 (Dashboard Navigation Architecture) or subsequent routing implementations must refer strictly to this guide to maintain architectural integrity.
`,
  "migration-strategy": `# Relational Database Migration Strategy

This specification details the canonical schema modeling, migration execution, and deployment strategy for the AI Visibility Intelligence relational schema.

---

## 1. Migration Tech Stack

We utilize **Drizzle ORM** paired with **Drizzle Kit** for schema modeling, SQL generation, schema diffing, and programmatic migration execution.

\`\`\`
 [Canonical Drizzle Schema] (database/schema/index.ts)
         │
         ▼  (pnpm run db:generate / drizzle-kit generate)
 [SQL Migration Artifacts] (database/drizzle/*.sql)
         │
         ▼  (pnpm run db:migrate / src/core/database/migrator.ts)
 [Target PostgreSQL / Neon Cluster]
\`\`\`

- **ORM Client**: Drizzle ORM (\`drizzle-orm\`)
- **Migration CLI & Diff Engine**: Drizzle Kit (\`drizzle-kit\`)
- **Programmatic Runner**: \`src/core/database/migrator.ts\`
- **Target database**: PostgreSQL (v16+) / Neon Serverless PostgreSQL

---

## 2. Directory Hierarchy

All database definitions and generated migration scripts are version-controlled within the repository:

\`\`\`
database/
  schema/
    index.ts             # Unified canonical Drizzle ORM pgTable schema definitions (57 tables)
    organization.ts      # Legacy TableDefinition metadata file (retained for reference)
    ...                  # Domain schema metadata files
  drizzle/
    meta/                # Drizzle Kit snapshot and migration metadata records
    0000_*.sql           # Auto-generated Drizzle migration scripts
  migrations/
    0001-0014_*.sql      # Historical hand-rolled SQL migrations (archived artifacts)
\`\`\`

---

## 3. Operations & Package Scripts

The repository enforces a single migration mechanism with standard \`package.json\` scripts:

### Step 3.1: Schema Generation
When modifying TypeScript table definitions in \`database/schema/index.ts\`, generate incremental SQL migration scripts:
\`\`\`bash
pnpm run db:generate
\`\`\`

### Step 3.2: Database Migration Execution
Apply pending migration scripts programmatically against the configured \`DATABASE_URL\`:
\`\`\`bash
pnpm run db:migrate
\`\`\`

### Step 3.3: Local Sandbox Schema Push (Dev Only)
Directly push schema changes to a local disposable development database without generating migration files:
\`\`\`bash
pnpm run db:push
\`\`\`

---

## 4. Architectural Rules & Guardrails

1. **Single Source of Truth**: All database tables, indexes, constraints, and relations must be defined in \`database/schema/index.ts\`.
2. **Deterministic Execution**: Foreign key creation and table references are strictly dependency-ordered. Core tables (\`organizations\`, \`brands\`, \`entities\`) are bootstrapped before dependent foreign keys.
3. **Multi-Tenant Isolation**: Tenant-scoped tables enforce PostgreSQL Row Level Security (RLS) policies tied to \`app.current_tenant_id\` transaction settings via \`TenantContextManager\`.
4. **Disposable Verification**: Schema migrations are validated against empty disposable PostgreSQL instances prior to production deployments.
`,
  "reconciliation-report": `# Database Reconciliation Report & Implementation Plan

**Date:** August 2024
**Scope:** Reconstruct Database Source of Truth, Drizzle ORM Canonical Schema, and Migration Pipeline

---

## 1. Inventory & Reconciliation Summary

A comprehensive reconciliation was performed across:
1. Legacy hand-written SQL migrations (\`0001-0014\`)
2. TypeScript schema metadata (\`database/schema/*.ts\`)
3. Codebase repository/service usage patterns (\`src/\`, \`tests/\`)

### Table Count & Verification
- **Total Unique Tables across Codebase:** 57 tables.
- **Tables previously missing from SQL migrations (21 tables):** \`organizations\`, \`admin_users\`, \`roles\`, \`permissions\`, \`audit_records\`, \`feature_flags\`, \`system_configurations\`, \`tenant_quotas\`, \`tenant_subscriptions\`, \`ai_provider_configs\`, \`brands\`, \`entities\`, \`entity_relationships\`, \`citations\`, \`ai_observations\`, \`brand_mentions\`, \`visibility_scores\`, \`recommendations\`, \`premium_audits\`, \`ai_engines\`, \`prompts\`.
- **Tables present in SQL migrations but missing from custom TS definitions (5 tables):** \`technical_audits\`, \`competitive_analyses\`, \`crawl_jobs\`, \`crawl_results\`, \`crawl_cache\`.
- **Final Canonical Schema:** All 57 tables are defined in the unified Drizzle ORM schema at \`database/schema/index.ts\`.

---

## 2. Field Mismatches & Canonical Resolutions

| Table | Field | Conflict | Canonical Resolution | Justification |
| :--- | :--- | :--- | :--- | :--- |
| \`websites\` | \`cms_type\` | \`VARCHAR(50)\` vs \`TEXT\` | \`TEXT\` | Unbounded string allows flexible CMS identification across crawlers. |
| \`pages\` | \`http_status\` | Default \`200\` vs No default | \`INTEGER NOT NULL DEFAULT 200\` | Standard default prevents NULL status on successful crawl ingestion. |
| \`prompt_executions\` | \`status\` | \`'succeeded'\`/\`'timed_out'\` vs \`'completed'\` | Enum with \`'queued'\`, \`'running'\`, \`'succeeded'\`, \`'failed'\`, \`'timed_out'\`, \`'cancelled'\` | Supports precise state-machine retry tracking in background workers. |
| \`competitive_seo_findings\` | \`finding_type\` | Multi-step ALTER TABLE CHECK | Single unified CHECK constraint with 11 types | Combines finding types from migrations 0013 and 0014 into a single constraint. |

---

## 3. Row-Level Security (RLS) & Tenant Isolation Audit

### RLS Enabled Tables (37 Tables)
All 37 tenant-scoped tables feature \`ENABLE ROW LEVEL SECURITY\`, \`FORCE ROW LEVEL SECURITY\`, and policy expressions checking \`app.current_tenant_id\`:
- \`organizations\`
- \`brands\`
- \`entities\`
- \`entity_relationships\`
- \`prompts\`
- \`prompt_definitions\`
- \`prompt_schedules\`
- \`prompt_executions\`
- \`position_observations\`
- \`ai_observations\`
- \`brand_mentions\`
- \`citations\`
- \`citation_sources\`
- \`citation_occurrences\`
- \`visibility_scores\`
- \`recommendations\`
- \`brand_associations\`
- \`recommendation_observations\`
- \`tenant_quotas\`
- \`tenant_subscriptions\`
- \`document_embeddings\`
- \`kg_entities\`
- \`kg_relationships\`
- \`premium_audits\`
- \`technical_audits\`
- \`competitive_analyses\`
- \`websites\`
- \`pages\`
- \`keywords\`
- \`topics\`
- \`competitors\`
- \`historical_metrics\`
- \`diagnostic_findings\`
- \`diagnostic_finding_relationships\`
- \`aeo_analyses\`
- \`faq_opportunities\`
- \`kg_alignments\`
- \`competitor_changes\`
- \`competitive_seo_findings\`
- \`crawl_jobs\`
- \`crawl_results\`
- \`crawl_cache\`

### Non-RLS Tables (Global/System Context - 16 Tables)
1. \`roles\` (System RBAC)
2. \`permissions\` (System RBAC)
3. \`admin_users\` (Platform Admins)
4. \`audit_records\` (System Audit Logging)
5. \`feature_flags\` (Global Feature Toggles)
6. \`system_configurations\` (Global Engine Settings)
7. \`ai_provider_configs\` (LLM Provider Gateways)
8. \`ai_engines\` (AI Engine Master Catalog)
9. \`pages_keywords\` (Join Table)
10. \`pages_topics\` (Join Table)
11. \`pages_entities\` (Join Table)
12. \`keywords_topics\` (Join Table)
13. \`topics_entities\` (Join Table)
14. \`ai_visibility_audits\` (Aggregated Audit Master)
15. \`audit_prompts\` (Audit Prompt Map)

---

## 4. Architectural Notes & Observations

- **Worker Context Bypass:** As audited, \`scripts/crawl-worker.ts\` maintains its own ad-hoc database pool and bypasses \`TenantContextManager\`. This behavior is retained as designed and noted in accordance with constraints.
- **Migration Artifacts:** Legacy SQL scripts (\`0001-0014\`) are preserved under \`database/migrations/\` as historical audit logs. All current Drizzle ORM migrations are managed under \`database/drizzle/\`.
`,
  "tenant-context-spec": `# PostgreSQL Row Level Security (RLS) & Tenant Context Specification

This document details the architecture, configuration, and security guarantees achieved by implementing PostgreSQL Row Level Security (RLS) for tenant isolation across the application database schema.

---

## 1. Architectural Overview

To ensure zero-trust tenant isolation, the database layer implements real PostgreSQL Row Level Security. Every database table owned by a tenant contains a tenant partition identifier (\`organization_id\` or \`tenant_id\`). The system enforces isolation dynamically via runtime database-level policies rather than relying purely on application-level filtering.

\`\`\`
                   ┌────────────────────────────────────────┐
                   │       Application Layer Session        │
                   │ (Active tenant identity: tenant_uuid)  │
                   └───────────────────┬────────────────────┘
                                       │
                                       ▼ (Execute SQL inside Transaction)
                    SET LOCAL app.current_tenant_id = 'tenant_uuid';
                                       │
                                       ▼
                   ┌────────────────────────────────────────┐
                   │    PostgreSQL Engine RLS Evaluation    │
                   ├────────────────────────────────────────┤
                   │  SELECT / UPDATE / DELETE checks:      │
                   │    USING (organization_id = tenant_id) │
                   │  INSERT / UPDATE checks:               │
                   │    WITH CHECK (organization_id = ...)  │
                   └────────────────────────────────────────┘
\`\`\`

---

## 2. Session Context Injection Assumptions

PostgreSQL maps session state to RLS policies using the \`current_setting(setting_name, true)\` utility. The application and persistence layer make the following technical assumptions:

1. **Transaction-Scoped Settings**: Prior to issuing any query or mutation against a tenant-scoped table within a leased database client or transaction, the application must execute the following session variable configuration statement:
   \`\`\`sql
   SET LOCAL app.current_tenant_id = 'your-tenant-uuid-here';
   \`\`\`
   - Using \`SET LOCAL\` guarantees that the tenant parameter is strictly bound to the active transaction block and automatically discarded upon transaction commit, rollback, or connection return to the pool (preventing cross-connection contamination).
2. **Strict Session Matching**: If a query is executed without first configuring the session setting, \`NULLIF(current_setting('app.current_tenant_id', true), '')\` evaluates to \`NULL\`, and all operations will fail to retrieve or modify any records, complying with a secure-by-default standard.
3. **No Ownership Changes / Hijacking**:
   - \`INSERT\`: Policies enforce that any newly created row has a tenant partition ID matching the active \`app.current_tenant_id\`. Any attempt to insert records belonging to another tenant is blocked with a security violation.
   - \`UPDATE\`: Policies enforce a dual-check:
     - The \`USING\` clause ensures the administrator is updating a row that currently belongs to their tenant session.
     - The \`WITH CHECK\` clause ensures that the resulting updated row *remains* under their tenant partition. This prevents any ownership hijacking or changing the partition column of existing records.

---

## 3. Secured Tenant-Scoped Tables & Columns

The following 12 tables are strictly isolated via Row Level Security:

| Table Name | Partition Column | RLS Scope & Policies implemented |
| :--- | :--- | :--- |
| \`organizations\` | \`id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`brands\` | \`organization_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`entities\` | \`organization_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`entity_relationships\` | \`organization_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`prompts\` | \`organization_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`ai_observations\` | \`organization_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`brand_mentions\` | \`organization_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`citations\` | \`organization_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`visibility_scores\` | \`organization_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`recommendations\` | \`organization_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`tenant_quotas\` | \`tenant_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |
| \`tenant_subscriptions\` | \`tenant_id\` | Explicit \`SELECT\`, \`INSERT\`, \`UPDATE\`, \`DELETE\` matching \`app.current_tenant_id\` |

---

## 4. Reversibility and Zero-Downtime Migration Pattern

Migrations that enable or modify RLS are designed to be safe and reversible:
- To revert RLS policies, a migration can simply run:
  \`\`\`sql
  ALTER TABLE tableName DISABLE ROW LEVEL SECURITY;
  DROP POLICY IF EXISTS select_tenant_isolation_policy ON tableName;
  DROP POLICY IF EXISTS insert_tenant_isolation_policy ON tableName;
  DROP POLICY IF EXISTS update_tenant_isolation_policy ON tableName;
  DROP POLICY IF EXISTS delete_tenant_isolation_policy ON tableName;
  \`\`\`
- Because RLS policies are executed dynamically on every database query, zero-downtime deployment is ensured by deploying transaction-scoped settings in application repositories *before* applying policy definitions to the target PostgreSQL cluster.
`,
  "ADMIN_ARCHITECTURE": `# Admin Module Architectural Blueprint

This document details the software architecture of the **Enterprise Administrative Bounded Context** of the AI Visibility Intelligence Platform SaaS.

## Bounded Context & Isolation Invariant

The Admin module is designed as a completely independent bounded context under \`src/features/admin/\`. It maintains 100% decoupling from customer-facing tenant workspaces, except through explicitly published domain interfaces and shared schemas.

\`\`\`
┌─────────────────────────────────┐        ┌─────────────────────────────────┐
│     Customer SaaS Workspace     │        │     Enterprise Admin Context    │
│  (src/features/ai-intelligence) │        │      (src/features/admin)       │
└────────────────┬────────────────┘        └────────────────┬────────────────┘
                 │                                          │
                 │              Publish Event               │
                 └─────────────────────────────────────────►│
\`\`\`

- **SaaS Tenant Isolation Invariant**: Standard customers can NEVER bypass authorization guards to invoke administrative CQRS handlers or view internal configuration values.
- **Administrative Portability**: The Admin module runs in its own bounded namespace, ensuring SaaS admins can easily manage and audit system workloads without cross-tenant performance interference.

## Submodule Layout

- \`domain/\`: Contains immutable state types, rich value objects, aggregate root actions (\`TenantAggregate\`, \`AdminUserAggregate\`, \`FeatureFlagAggregate\`), and domain event contracts.
- \`application/\`: Standardized CQRS use-case layer defining command handlers, queries, DTO structures, and mapping transformations.
- \`api/v1/admin/\`: Declares strict versioned REST routing contracts, API request objects, and standard JSON envelope response models.
- \`security/\`: Coordinates strict administrative authorization guards, permission checks, role-hierarchy evaluators, and API key token masks.
- \`analytics/\`: Houses platform growth engines, operational statistics consolidators, and estimated cost calculators.
- \`infrastructure/\`: Hosts mock transactional database stores and persistent record-keeping abstractions.
`,
  "AI_CITATION_INTELLIGENCE_ARCHITECTURE": `# AI Citation Intelligence Architecture

This document specifies the technical design, entity-relationship structures, classification rules, quality evaluation algorithms, and trend telemetry metrics implemented by the **AI Citation Intelligence Layer** (Task 5.2).

---

## 1. Citation Occurrence vs. Citation Source

To prevent historical overwrites and compile precise temporal metrics, the architecture maintains a strict separation between individual occurrences and their unique normalized source domain profiles:

- **\`citation_sources\`:** Tracks normalized domain identities (e.g. \`wikipedia.org\`). Maintains aggregate statistics including \`occurrence_count\`, \`first_seen_at\`, \`last_seen_at\`, and independently evaluated \`quality_score\` and \`authority_score\`.
- **\`citation_occurrences\`:** Tracks specific appearances of a citation source within an AI observation run. Captures precise metadata: exact matching \`url\`, surrounding \`snippet\` excerpt as evidence, \`position\` index index, and \`confidence\`.

---

## 2. Extensible Classification & Attribution

The \`CitationIntelligenceService\` contains an explainable rule-based classifier that maps domains to standard categories:
- **\`owned\`:** Mapped dynamically when domain matches the active monitored brand's domain.
- **\`competitor\`:** Mapped dynamically when domain matches any of the tenant's active competitors.
- **\`government\` / \`academic_research\`:** Mapped for \`.gov\`, \`.mil\`, \`.edu\`, and region-specific equivalents (e.g. \`.ac.ir\`).
- **\`reference_encyclopedia\`:** Mapped for \`wikipedia.org\`, \`britannica.com\`, etc.
- **\`social\` / \`forum_community\` / \`publisher_media\` / \`documentation\`:** Categorizes popular communities and publishers.

---

## 3. Quality vs. Authority Evaluation

The domain models treat quality and authority as separate independent factors to avoid false precision and provide transparent diagnostics:

### Citation Quality
Quality represents the completeness and relevance of the matched citation. Evaluated deterministically out of 100 points:
- Protocol is secure HTTPS: +35 points
- Response text explicitly mentions target brand: +35 points
- URL has deep path (more complete than home page): +30 points

### Domain Authority
Authority represents the established trust level of the publisher. Evaluated separately:
- Government / Academic domains: 95
- Encyclopedia/Wikipedia: 88
- Owned domain baseline: 75
- Other known communities: 50-70
- Unknown domains: 40

---

## 4. Idempotency & Tenant Safety

- **Discovery Idempotency:** A pre-save check is run before saving occurrences. If the exact \`(source_id, observation_id, url)\` combination already exists, the discovery pipeline gracefully continues without duplicate insertions.
- **Tenant Isolation:** All operations are partitioned on \`organization_id\`, and fully enforced via database RLS policies.
`,
  "AI_PIPELINE_ARCHITECTURE": `# AI processing Pipeline Architecture

This document describes the design and abstract contracts created to coordinate multi-model scraping, sanitization, and metric calculation.

---

## 1. Pipeline Stages

Ingesting and evaluating Generative engine search results operates in six decoupled abstract stages:

\`\`\`
  [Stage 1: IAIEngineAdapter]
            │ Dispatches queries to ChatGPT / Claude / Gemini / Perplexity
            ▼
  [Stage 2: IPromptExecutionPipeline]
            │ Schedules cron tracks & priority levels
            ▼
  [Stage 3: IObservationProcessingPipeline]
            │ Sanitizes raw body text, masking credentials
            ▼
  [Stage 4: ICitationExtractionPipeline]
            │ Resolves reference link lists, calculating Domain Authority
            ▼
  [Stage 5: IEntityResolutionPipeline]
            │ Links entity mentions with Wikidata items (Q-codes)
            ▼
  [Stage 6: IConfidenceScoringPipeline]
            │ Rates accuracy probability of parsed blocks
\`\`\`

---

## 2. Pluggable Adapters Strategy

By creating strict interfaces under \`src/features/ai-intelligence/pipeline/\`, the platform can support any future models (OpenAI, Anthropic, Google Gemini, or local Llama LLMs) simply by writing a concrete wrapper adapter. Handlers do not depend on the specific API schemas, but purely on these pipeline contracts.
`,
  "AI_PROMPT_INTELLIGENCE_ARCHITECTURE": `# AI Prompt Intelligence Architecture

This document specifies the technical design, state transitions, variable rendering, and competitor position analysis implemented by the **AI Prompt Intelligence Layer** (Task 5.1).

---

## 1. Core Architecture & Alignment

The Prompt Intelligence Layer extends Task 5.0 (AI Visibility Core) to provide persistent, multi-tenant isolated prompt parameterization, execution, cron-scheduling, and side-by-side model comparison.

The data pipeline operates as follows:
\`\`\`
Prompt Library -> Parameterized Template -> Resolved Prompt -> Prompt Execution -> Model Execution -> Position & Citation Extractor -> Evidence Snapshot
\`\`\`

---

## 2. Variables and Templating Contract

Prompts support curly brace parameters: \`Who are the best {service} providers in {location}?\`.
- **Resolution Safety:** If any variable value is missing or left empty, and no default value exists, the system throws a strict \`Validation Error\` at runtime.
- **Historical Immutability:** Resolved prompt texts used during execution are persisted as **immutable snapshots** inside \`prompt_executions\`. This guarantees that future template edits do not corrupt historical execution records.

---

## 3. Scheduled Auditing Invariants

- **Scheduler Mapping:** Scheduled audits map onto the system's underlying transactional queue, executing under active \`TenantContextManager\` bounds.
- **Unique Execution Identity:** Scheduled executions are enforced with a unique deterministic database constraint on \`(prompt_id, prompt_version, scheduled_for)\` to guarantee zero duplicate scheduled runs under distributed workers.

---

## 4. Execution State Machine

A prompt execution transitions through defined states:
\`\`\`
[queued] -> [running] -> [succeeded] / [failed] / [timed_out] / [cancelled]
\`\`\`

- **Transitions Enforcement:** Illegal state transitions (e.g., trying to run an execution that is already marked \`succeeded\`) are rejected with \`Illegal State Transition\` errors.

---

## 5. Brand & Competitor Position Observations

The system extracts conversational positioning and layouts semantically without guessing:
- **\`ranked\`:** Position parsed when numerical ranking (1-based index) is identified in lists.
- **\`recommended\`:** Position parsed when recommendation, prose preference, or table highlights are detected.
- **\`mentioned\`:** Position parsed when a prose/paragraph mention is found.
- **\`not_present\`:** Mapped when the brand/competitor is entirely absent.
- **\`unknown\`:** Mapped when analysis is aborted or cannot determine presence.

Every position observation persists its exact matching quote as evidence, preserving full auditable tracebacks.
`,
  "AI_VISIBILITY_ENGINE_ARCHITECTURE": `# AI Visibility Engine Architecture

This document specifies the technical architecture, domain models, and scoring equations of the production-grade **AI Visibility Audit Engine** (Task 5.0).

---

## 1. Core Distinctions

A key architectural design principle is the strict separation of conversational retrieval indicators. We explicitly differentiate between these five concepts:

1. **Mention:** The simple lexical presence of a brand's name, localized spellings, or aliases within the text block.
2. **Entity Recognition:** Mapped confidence that the conversational AI recognizes the brand as the intended entity in its semantic graph, as opposed to an ambiguous similar-named company or competitor.
3. **Citation:** Structured links, anchors, or URLs referencing the brand's domain or authoritative third-party source publications validating the response claim.
4. **Answer Inclusion:** Mapped indicator determining whether the brand is presented as a meaningful candidate solution answering the user's buyer intent, rather than a passive or passing reference.
5. **Visibility:** The overall composite weight representing how prominent, preferred, or recommended the brand appears within the generative interface.

---

## 2. AI Visibility Domain Model

The domain models are defined in \`src/features/ai-intelligence/domain/types/index.ts\` and mapped to PostgreSQL tables via \`database/schema/ai-visibility-audit.ts\`.

### AI Visibility Audit (\`AIVisibilityAudit\`)
- Represents a single historical run assessing a specific brand.
- Statuses: \`PENDING\`, \`RUNNING\`, \`ANALYZING\`, \`COMPLETED\`, \`FAILED\`.
- Tracks overall score, granular dimension metrics, and prompt coverage.

### Audit Prompt (\`AuditPrompt\`)
- Represents an explicit prompt submitted to the provider.
- Tracks prompt text, buying intent/category, response text, execution latency, and granular parsed analysis results with context evidence.

---

## 3. Provider Abstraction

The domain layer depends on the \`IAIVisibilityProvider\` interface rather than a direct concrete SDK:
- **\`MockAIVisibilityProvider\`:** Implements high-fidelity, deterministic lexical and citation simulation in both Persian and English.
- **\`GeminiAIVisibilityProvider\`:** Integrates with the existing Google Gemini LLM client.

---

## 4. Scoring Formula and Weights

The composite AI Visibility Score is calculated deterministically across 6 core weighted factors:

$$S = (V \\times 0.20) + (M \\times 0.15) + (E \\times 0.15) + (C \\times 0.15) + (A \\times 0.15) + (I \\times 0.20)$$

Where:
- $V$: **Answer Visibility Score** (20% weight) - maps levels: \`recommended_preferred\` = 100, \`prominently_included\` = 85, \`directly_mentioned\` = 65, \`indirectly_referenced\` = 35, \`not_mentioned\` = 0.
- $M$: **Brand Mention Score** (15% weight) - maps occurrences: 0 count = 0, 1 count = 60, 2+ count = 100.
- $E$: **Entity Recognition Score** (15% weight) - maps statuses: \`strongly_associated\` = 100, \`correctly_recognized\` = 85, \`ambiguously_recognized\` = 45, \`not_recognized\` = 0.
- $C$: **Citation Presence Score** (15% weight) - maps occurrences: 0 count = 0, 1 count = 70, 2+ count = 100.
- $A$: **Source Authority Score** (15% weight) - average of resolved citation authority scores. If all citations are \`"unknown"\`, we redistribute this weight to Citation Presence to prevent unfair penalty.
- $I$: **Answer Inclusion Score** (20% weight) - maps levels: \`recommended_preferred\` = 100, \`prominently_included\` = 85, \`included\` = 65, \`mentioned_but_not_included\` = 30, \`absent\` = 0.

### Unknown and Insufficient Data Semantics
If citation authority is missing, it is stored strictly as \`"unknown"\` (separate from 0 authority), indicating insufficient third-party data rather than low authority.

---

## 5. Audit Lifecycle

\`\`\`
[PENDING] -> [RUNNING] -> [ANALYZING] -> [COMPLETED] / [FAILED]
\`\`\`

- **Partial Failure Support:** One failed prompt does not destroy the entire audit. If some prompts fail, their errors are persisted, while the successful prompts are scored, providing a partial audit score.
`,
  "APPLICATION_LAYER": `# Application Layer Design Specification

This document outlines the design and responsibilities of the Application Layer inside the AI Visibility Intelligence Engine.

---

## 1. Architectural Role

The Application Layer is the orchestrator of use-cases. It sits directly between the API entry boundary and the Domain Layer, enforcing:
- **No Domain Leakage**: Raw Domain Entities never cross the API threshold. They are mapped into strongly-typed Data Transfer Objects (DTOs) prior to leaving the boundary.
- **Transactional Safety**: Handles the loading of Aggregate Roots, coordinating calculations, and updating states.
- **Side Effect Dispatching**: Broadcasts Domain Events to log analytical shifts or trigger autonomous recommendations.

\`\`\`
 [API Controller] ──► [Command/Query] ──► [Handlers] ──► [Service/Repo] ──► [DTOs]
\`\`\`

---

## 2. Directory Structure

Located under \`src/features/ai-intelligence/application/\`:
- **\`dto/\`**: Holds type-safe structures representing the only data sent out of the boundary.
- **\`mappers/\`**: Encapsulates transformation routines from Domain Entities to DTOs.
- **\`commands/\`**: Represents structural intents to modify state.
- **\`queries/\`**: Represents structural intents to read data.
- **\`handlers/\`**: Houses class orchestration implementing the execution of commands and queries.
`,
  "ARCHITECTURE": `# Clean & Multi-Tenant Architecture Specification

This document details the modular layout and patterns implemented under **Phase 7C.1** to support infinite horizontal scaling and future-proof enterprise security.

---

## 1. Enterprise Layered Architecture

The module is structured into distinct, decoupled boundaries following the Clean Architecture pattern:

\`\`\`
  ┌────────────────────────────────────────────────────────┐
  │                   Application / UI Layer               │
  │               (React Components & Page Routes)         │
  └───────────────────────────┬────────────────────────────┘
                              │ Uses Services
  ┌───────────────────────────▼────────────────────────────┐
  │                       Service Layer                    │
  │                  (Use Case Orchestration)              │
  └───────────────────────────┬────────────────────────────┘
                              │ Uses Interfaces
  ┌───────────────────────────▼────────────────────────────┐
  │                     Repository Contracts               │
  │                 (Persistence Abstraction)              │
  └───────────────────────────┬────────────────────────────┘
                              │ Implemented By
  ┌───────────────────────────▼────────────────────────────┐
  │                 InMemory database / SQL Drizzle        │
  │                   (Concrete Data Adapters)             │
  └────────────────────────────────────────────────────────┘
\`\`\`

---

## 2. Multi-Tenant Partitioning (RLS Preparedness)

To guarantee SaaS boundary safety, we implement a **Silo/Pooled Partitioning Model** at the application level:

1. **Explicit Organization Partition Key**: Every database schema table and TypeScript domain model contains a mandatory \`organizationId\` parameter.
2. **Tenant Filter Scoping**: All query finders inside repository interfaces (\`interfaces.ts\`) enforce \`organizationId\` as a leading parameter. It is impossible to invoke a fetch without providing tenant context.
3. **RLS Policy Compatibility**: The SQL scripts defined inside \`database/schema/\` are structured to directly leverage PostgreSQL Row-Level Security (RLS) policies:
   \`\`\`sql
   ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
   CREATE POLICY tenant_brand_isolation_policy ON brands
     FOR ALL TO authenticated
     USING (organization_id = CURRENT_SETTING('app.current_organization_id'));
   \`\`\`

---

## 3. Separation of Concerns & Dependency Inversion

- **Dependency Inversion**: Core Services depend strictly on abstract repository interfaces (\`src/features/ai-intelligence/repositories/interfaces.ts\`), not on concrete classes.
- **Pluggable Adapters**: The In-Memory Repository represents a pluggable test adapter. In future phases, SQL/PostgreSQL or Document database adapters can be written and injected seamlessly into Services without modifying any business logic.
`,
  "AUDIT_DESIGN": `# Immutable Administrative Audit Trail

This document details the system design of the immutable audit logging module within the administrative context.

## Audit Record Schema

Each record captured by the audit tracker contains:

- \`id\`: Globally unique UUID trace identifier.
- \`timestamp\`: ISO-8601 server timestamp.
- \`actorId\` & \`actorEmail\`: Unambiguous identity of the acting administrator.
- \`actorRole\`: Role context of the administrator.
- \`action\`: Specific state change string (e.g., \`TENANT_SUSPEND\`, \`FEATURE_FLAG_ENABLE\`).
- \`resourceType\` & \`resourceId\`: Path targeting the affected database entity.
- \`ipAddress\` & \`userAgent\`: Network tracking data.
- \`payloadBefore\`: Stringified JSON representation of the entity state prior to mutation.
- \`payloadAfter\`: Stringified JSON representation of the entity state after mutation.
- \`status\`: Outcome code (\`success\`, \`denied\`, \`error\`).
- \`errorDetails\`: Stack trace messages if the mutation encountered problems.

## Immutability Guarantee

The audit record structure is designed for append-only storage. Handlers append logs on every single Command invocation. No API route allows modifying or deleting audit rows, ensuring strict compliance with Sox and SOC-2 guidelines.
`,
  "CQRS_DESIGN": `# Command Query Responsibility Segregation (CQRS) Design

This document details the CQRS design pattern used to separate writes (State Mutation) from reads (State Materialization).

---

## 1. Segregation Concept

To scale search visibility ingestion separately from rich analytics dashboards, we divide use-cases into:

1. **Commands (Write Store)**:
   - Optimized for safety, constraints, and relational consistency.
   - Triggers state shifts and emits events.
   - Executed via \`ApplicationCommandHandler\`.

2. **Queries (Read / Analytics View)**:
   - Optimized for dashboard rendering speed, aggregation, and analytical throughput.
   - Bypasses rich state locks.
   - Executed via \`ApplicationQueryHandler\`.

---

## 2. Command Index

* **CreateBrandCommand**: Registers a brand profile.
* **DiscoverEntityCommand**: Claims a semantic knowledge graph node.
* **CaptureAIObservationCommand**: Ingests an LLM search run run and triggers alerts.
* **CalculateVisibilityScoreCommand**: Updates engine visibility indices.
* **GenerateRecommendationCommand**: Proposes optimization tasks.
* **RegisterPromptCommand**: Adds trackable queries.
* **LinkSemanticEntitiesCommand**: Connects entity nodes with semantic edges.

---

## 3. Query Index

* **GetBrandIntelligenceQuery**: Materializes the Brand Command Center dashboard.
* **GetVisibilityReportQuery**: Gathers historical score coordinates for timeline charts.
* **GetEntityGraphQuery**: Resolves knowledge graph nodes and edges.
* **GetCitationAnalysisQuery**: Inspects citations and computes Domain Authority details.
`,
  "CRAWL_ACQUISITION": `# Crawl acquisition

The acquisition feature separates request validation, durable scheduling, and
provider execution. A request is normalized, policy-checked, and SSRF
validated before a job is created or a provider is selected. The internal
provider uses the pinned-DNS \`safeFetch\` client and performs bounded,
non-browser HTML traversal. The Firecrawl adapter is isolated under
\`infrastructure/providers/firecrawl/\`; Firecrawl SDK types do not cross into
the domain.

## Domain and providers

\`CrawlRequest\`, \`CrawlResult\`, \`CrawledDocument\`, and \`CrawlProvider\` are
provider-neutral contracts. A provider declares capabilities and executes a
normalized request with an \`AbortSignal\`. \`ProviderRouter\` only falls back
when the \`CrawlError\` classification explicitly permits it. No Firecrawl key
is required: without one, the internal provider is used.

## Security model

URLs are normalized, policy-validated, and resolved through the SSRF guard
before provider selection. Internal HTTP requests pin the validated addresses
in the socket lookup callback and revalidate every redirect hop. They do not
send cookies or authorization headers, execute JavaScript, or retain sessions.
The Firecrawl service fetches from its own infrastructure, so the local pinned
DNS guarantee does not extend to it. The application boundary is that a URL
that failed local validation is never handed to any provider.

The new \`/api/v1/crawl\` route requires an actual signed session and derives
tenant identity from that session. It does not accept \`x-tenant-id\` or
\`x-user-id\` as identity.

The legacy \`POST /api/v1/crawler/start\` route remains vulnerable and is
deliberately untouched because it is outside Task 4.0. It accepts tenant
identity from an unauthenticated \`x-tenant-id\` header, accepts user-provided
seed URLs, and passes them to \`CrawlerOrchestrator\` without SSRF validation.
Follow-up remediation should require a real session, route all URLs through
the acquisition SSRF boundary, and retire the legacy path.

## Deduplication, cache, and lifecycle

Deduplication keys include tenant, canonical URL, and material policy fields.
The active-job partial unique index covers only \`PENDING\`, \`QUEUED\`, and
\`RUNNING\`, so terminal jobs can be recrawled. Cache entries are tenant-scoped
only; global sharing is deferred until a result is proven globally shareable.
The cache stores normalized results, not provider payloads.

Jobs move through the domain state machine with optimistic versions. Dispatcher
claim and expired-lease recovery are narrow \`SECURITY DEFINER\` functions that
return only job and tenant identities. The application role must not own crawl
tables and must not have \`BYPASSRLS\`. The function owner must be a superuser or
have \`BYPASSRLS\`. Every subsequent job operation establishes tenant context.

Submission explicitly transitions a newly inserted \`PENDING\` job to \`QUEUED\`;
the dispatcher claims queued jobs only. Provider execution happens outside
tenant transactions. Heartbeats and terminal writes use independent short
transactions, and terminal completion is lease-owner guarded. Cancellation
observed by the worker aborts the provider signal; shutdown aborts active work
and fails it through the same lease-owner guard.

Terminal completion facts are written atomically with the conditional status
transition: provider identifiers, duration, counts, cache outcome, result
reference, and structured error.

The internal provider uses a bounded worker pool and serializes requests per
host to enforce \`perHostRequestsPerSecond\`. Firecrawl provider job IDs are
persisted when supplied by the adapter, and abort signals are passed through
the adapter boundary. Firecrawl SDK polling cancellation remains dependent on
the SDK/client honoring that signal.

## Observability and future providers

Crawl lifecycle events use the existing \`coreEventBus\` and carry tenant,
request, trace, correlation, job, and provider-job identifiers. Secrets,
cookies, tokens, and raw page content are never event payloads.

To add a provider, implement \`CrawlProvider\` in infrastructure, map all
external failures to \`CrawlError\`, declare capabilities, add adapter tests at
the external boundary, and place it in the ordered router only after its SSRF
and fallback behavior are reviewed.
`,
  "DATA_FLOW": `# Data Flow & Pipelines

This document maps the sequential lifecycles and pipelines of the AI Visibility Intelligence Engine.

---

## 1. AI Observation Ingestion Lifecycle

This pipeline details how incoming LLM query captures flow into calculated analytics and triggers autonomous recovery actions.

\`\`\`
 [AI Agent Engine]
        │ Executes Search Query
        ▼
 [Raw JSON Payload]
        │
        ▼
 [ObservationService.processObservation()]
        │
        ├─► 1. Save Raw Observation
        │
        ├─► 2. Extract Brand Mentions (Create BrandMention Entities)
        │
        ├─► 3. Extract Cite URLs (Create Citation Entities)
        │
        ▼
 [ObservationAggregate Constructed]
        │
        ├─► calculateDynamicVisibility()
        │
        ▼
 [Score Metric Logged to VisibilityScoreRepository]
        │
        ├─► Dynamic Threshold Evaluation (< 70%?)
        │         │
        │         └─► YES ──► [Auto Recommendation Raised]
        ▼
 [Dispatch ObservationCapturedEvent]
\`\`\`

---

## 2. Ingestion Pipeline Details

1. **Query Execution**: An automated runner executes a trackable \`Prompt\` against a designated \`AIEngine\` (e.g. Claude).
2. **Payload Receipt**: Raw content is sent to \`ObservationService.processObservation(...)\` under strict organization scoping.
3. **Extraction & Linking**:
   - Mentions: Identifies brand context snippets and matches them to Wikidata \`Entity\` profiles, computing sentiment and location positions.
   - Citations: Extracts reference hyperlinks, parsing domains to resolve Domain Authority ratings using the \`CitationService\`.
4. **Metric Logging**: Compiles an \`ObservationAggregate\` that computes a weighted overall score. This score is persisted as a \`VisibilityScore\` series entry.
5. **Threshold Evaluators**: If the computed visibility falls below \`70%\`, the platform generates a high-priority \`Recommendation\` task warning of a potential search decline, preparing corrective indexing actions.
`,
  "DEPENDENCY_INJECTION": `# Dependency Injection and IoC Container

This document outlines the design of our lightweight Inversion of Control (IoC) dependency container.

## Container Design

The \`DependencyContainer\` class acts as the centralized registry for all infrastructure and application services.

\`\`\`typescript
import { container } from "@/core/container";

// Resolve Postgres Repository
const tenantRepo = container.resolve<ITenantRepository>("TenantRepository");

// Resolve Client gateway
const apiClient = container.resolve<AdminAPIClient>("AdminAPIClient");
\`\`\`

## central Registrations

- **Database**: Accesses the global mocked persistent store.
- **UnitOfWork**: Manages transactional boundaries and commitments.
- **EventPublisher**: Interacts with the event bus routing keys.
- **Repositories**: Injects \`PostgresTenantRepository\`, \`PostgresAdminUserRepository\`, \`PostgresFeatureFlagRepository\`, \`PostgresAuditRecordRepository\`, and \`PostgresAIProviderConfigurationRepository\`.
`,
  "DOMAIN_MODEL": `# Domain Model Design Specification

This document details the Domain-Driven Design (DDD) model established for the **AI Visibility Intelligence Engine (Phase 7C.1)**.

---

## 1. Domain Architectural Paradigms

This domain operates on strict **Domain-Driven Design (DDD)** principles to separate technical details (database, controllers, API) from the underlying core business rules of Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).

\`\`\`
   ┌────────────────────────────────────────────────────────┐
   │                  ObservationAggregate                  │
   │                    (Aggregate Root)                    │
   │                                                        │
   │  ┌───────────────┐   ┌────────────────┐   ┌─────────┐  │
   │  │ AIObservation │   │  BrandMention  │   │Citation │  │
   │  │   (Entity)    │   │    (Entity)    │   │(Entity) │  │
   │  └───────┬───────┘   └───────┬────────┘   └───┬─────┘  │
   └──────────┼───────────────────┼────────────────┼────────┘
              │                   │                │
              ▼                   ▼                ▼
       ┌─────────────┐     ┌─────────────┐  ┌─────────────┐
       │Sentiment VO │     │TextContextVO│  │Confidence VO│
       │(Value Object)     │(Value Object)  │(Value Object)
       └─────────────┘     └─────────────┘  └─────────────┘
\`\`\`

---

## 2. Core Domain Entities & Aggregates

### 2.1 Aggregates and Roots
* **Organization**: The primary tenant aggregate root representing the subscription tier holding monitored brands.
* **ObservationAggregate**: A composite aggregate combining an **AIObservation**, its extracted **BrandMention** list, and reference **Citation** links.
  - **Aggregate Root**: \`AIObservation\`
  - **Invariants**: All brand mentions and citations inside this aggregate must share the same \`organizationId\` and \`observationId\` as the parent observation.

### 2.2 Entities (With Lifecycle Identity)
1. **Organization**: Defined by its slug, plan, and ID. Holds subscription configuration.
2. **Brand**: Represents a corporate brand or product namespace being optimized.
3. **Entity**: Semantic knowledge graph node matching real-world Wikidata properties.
4. **Prompt**: The exact question executed on generative engine platform models.
5. **AIObservation**: Response body metadata including raw metrics and execution time.
6. **BrandMention**: The explicit presence and layout position of a brand inside a response text.
7. **Citation**: References or URLs extracted from a response.
8. **VisibilityScore**: Log of historical scores tracked per engine for trend visualization.
9. **Recommendation**: Targeted actions suggested to recover/boost search visibility.

### 2.3 Value Objects (Immutable, Attribute-Defined)
1. **AuditMetadata**: Captures tracking headers (\`createdBy\`, \`updatedBy\`, \`createdAt\`, \`updatedAt\`), soft deletion state, and version sequence for auditing.
2. **SentimentVO**: Encapsulates decimal sentiment scores (\`-100\` to \`100\`), semantic labels (\`positive\`, \`negative\`, \`neutral\`), and evaluation confidence.
3. **ConfidenceVO**: Standardizes classification probability score (\`0.0\` to \`1.0\`) and qualitative ranks (\`high\`, \`medium\`, \`low\`).
4. **TextContextVO**: Pinpoints exact coordinates of mentions, enclosing context snippets, character offset starts, and character ends.

---

## 3. Core Domain Invariants & Rules

The domain enforces the following business logic invariants:
1. **Dynamic Visibility Ranges**: All calculated visibility ratings must fall between \`0\` and \`100\` inclusive.
2. **Confidence Normalization**: All confidence level scores must range between \`0.0\` and \`1.0\`.
3. **Domain Authority Range**: Domain Authority metrics for citations must fall strictly within \`0\` and \`100\` index intervals.
4. **Tenant Isolation Invariant**: Tenant-owned data elements cannot link with objects owned by other organization IDs.
`,
  "EVENT_ARCHITECTURE": `# Event-Driven Architecture (EDA) Blueprint

This specification details our distributed, asynchronous messaging design built on eventual consistency and correlation trace headers.

---

## 1. Tracing & Context Propagation

Every Domain Event published contains a mandatory, structured \`metadata\` block carrying trace properties:

- **eventId**: A unique identifier for auditability and deduplication.
- **organizationId**: Strict tenant partition key, ensuring events are routed to proper tenant streams.
- **actorId**: Tracks the user or cron job that initiated the transaction.
- **correlationId**: A shared transaction trace ID maintained across all asynchronous workflows (e.g. from Prompt Execution down to Recommendation Generation).
- **causationId**: Tracks the immediate parent event ID that caused this event, establishing clear transaction causality.

---

## 2. Event Dispatching Pipeline

We implement an abstract **\`EventDispatcher\`** supporting:
- Multi-handler routing.
- Eventual consistency.
- Decoupled, asynchronous dispatching.

This is prepared to link with message queues (e.g. RabbitMQ, Kafka, BullMQ) by writing a concrete adapter that implements the \`IEventBus\` contract:

\`\`\`typescript
export class KafkaEventBus implements IEventBus {
  public async publish(event: DomainEvent): Promise<void> {
    await this.kafkaProducer.send({
      topic: event.eventType,
      messages: [{ key: event.metadata.organizationId, value: JSON.stringify(event) }]
    });
  }
}
\`\`\`
This enables zero-code changes in application handlers when scaling to multi-service setups!
`,
  "EVENT_PIPELINE": `# Domain and Audit Event Pipelines

This document details the system design of the asynchronous Event pipeline and immutable Audit trail.

## Dual Event Dispatch

Every administrative action triggers two distinct pipeline streams:

1. **Domain Events**: Dispatched asynchronously to eventual-consistency consumers (e.g., triggering crawler processes or email schedules).
   - \`TenantCreatedEvent\`
   - \`TenantSuspendedEvent\`
   - \`AdminUserCreatedEvent\`
   - \`FeatureFlagChangedEvent\`
   - \`AIProviderConfiguredEvent\`
2. **Immutable Audit Events**: Logged directly into the \`audit_records\` table with detailed network metadata, actor credentials, and state snapshots.

## State Snapshots

Audit logs maintain deep traceability by serializing both:

- \`payload_before\`: The exact stringified JSON representation of the entity state prior to mutation.
- \`payload_after\`: The exact stringified JSON representation of the entity state after mutation.
`,
  "FUTURE_EVOLUTION": `# Future Platform Evolution Guidelines

This document outlines the clear technical roadmap for integrating Drizzle ORM, orchestrating background processing agents, and scaling to billions of daily tracked queries.

---

## 1. Drizzle ORM Schema Integration

To implement production SQL persistence, follow these steps to link the database schemas:

1. **Schema Translation**: Map the schemas defined in \`database/schema/*.ts\` into Drizzle syntax.
   Example \`database/schema/brand.ts\`:
   \`\`\`typescript
   import { pgTable, uuid, text, timestamp, integer } from "drizzle-orm/pg-core";
   import { organizationsTable } from "./organization";

   export const brandsTable = pgTable("brands", {
     id: uuid("id").primaryKey().defaultRandom(),
     organizationId: uuid("organization_id").notNull().references(() => organizationsTable.id),
     name: text("name").notNull(),
     description: text("description"),
     website: text("website").notNull(),
     industry: text("industry"),
     country: text("country"),
     createdAt: timestamp("created_at").notNull().defaultNow(),
     updatedAt: timestamp("updated_at").notNull().defaultNow(),
     createdBy: text("created_by").notNull(),
     updatedBy: text("updated_by").notNull(),
     deletedAt: timestamp("deleted_at"),
     version: integer("version").notNull().default(1)
   });
   \`\`\`
2. **Repository Adapter**: Create a concrete \`DrizzleBrandRepository\` implementing the \`IBrandRepository\` interface defined in \`src/features/ai-intelligence/repositories/interfaces.ts\`.
3. **Dependency Injection**: Bind the Drizzle repositories in your application shell. The Services will require zero code changes since they depend strictly on the interface signatures!

---

## 2. Background Processing AI Agents

1. **Scheduled Triggers**: Use Cron jobs, BullMQ, or AWS EventBridge scheduler to trigger a scheduled worker at periodic intervals.
2. **Execution Runner**:
   - Query prompts from \`IPromptRepository\` with high priority.
   - Dispatch queries to LLM model providers (e.g. OpenAI SDK, Anthropic SDK).
   - Capture response text and pipe it directly to \`ObservationService.processObservation(...)\`.
3. **Event Dispatching**:
   - The process publishes an \`AIObservationCapturedEvent\`.
   - Dedicated micro-listeners pick up this event to update competitive analytics, rebuild citation networks, and feed marketing dashboards.

---

## 3. High Volume Analytics & Partitioning

1. **PostgreSQL Table Partitioning**: Implement monthly range partitioning on the \`visibility_scores\` and \`ai_observations\` tables based on the \`executed_at\`/\`date\` columns to ensure rapid query execution as datasets scale.
2. **Index Optimization**: Maintain compound index coverage on \`(organization_id, brand_id, executed_at DESC)\` to feed historical trend charts efficiently.
3. **NoSQL / Vector Storage Strategy**: For large semantic semantic graphs, sync Wikidata entity maps with specialized Graph/NoSQL databases (like Neo4j or Pinecone), while keeping relational metadata in PostgreSQL for transactional consistency.
`,
  "INFRASTRUCTURE_ARCHITECTURE": `# Infrastructure and Services Architecture

This document describes the **SaaS Platform Operations Infrastructure Architecture**, connecting domain entities to PostgreSQL repositories, in-memory caching, and event-driven backbones.

## Architectural Layout

\`\`\`
                        ┌──────────────────────────────────┐
                        │       CQRS Handlers / API        │
                        └────────────────┬─────────────────┘
                                         │
                         ┌───────────────▼───────────────┐
                         │   Unit of Work / Transaction  │
                         └───────────────┬───────────────┘
                                         │
                 ┌───────────────────────┼───────────────────────┐
                 │                       │                       │
      ┌──────────▼──────────┐ ┌──────────▼──────────┐ ┌──────────▼──────────┐
      │  Postgres Repos     │ │   InMemory Cache    │ │   Core Event Bus    │
      │  (Optimistic Lock)  │ │   (TTL Evictions)   │ │   (Post-Commit)     │
      └─────────────────────┘ └─────────────────────┘ └─────────────────────┘
\`\`\`

## System Integration Invariants

- **Atomic Transactions**: Modifying any tenant or administrative credential runs within a single Unit of Work boundary.
- **Transactional Consistency**: Domain events are queued and only dispatched AFTER the underlying database transaction successfully commits. If a rollback is triggered, all registered events are discarded.
- **Resource Protection**: API key strings, credentials, and tokens are securely masked at rest and before audit serialization to guarantee zero-leak logs.
`,
  "KNOWLEDGE_GRAPH_DESIGN": `# Semantic Knowledge Graph Architecture Design

This document details the abstract contracts and models designed to map, claimed, and travers brand concept networks inside external AI platforms.

---

## 1. Graph Model Definitions

- **GraphNode**: Mapped concept representing brands, competitors, key executives, or products. Anchored by a unique name and optional Wikidata \`wikidataId\`.
- **GraphEdge**: Mapped semantic relationship containing predicates like \`owns\`, \`creates\`, \`competes_with\`, \`related_to\`, or \`mentioned_with\`, paired with confidence weights.

---

## 2. Relational vs. Graph Database Strategy

To handle high-volume transactional updates alongside complex graph queries:

1. **Transactional Metadata (Relational PostgreSQL)**:
   - Stored in PostgreSQL \`entities\` and \`entity_relationships\` tables for strict foreign key integrity, ACID transactions, and tenant Row-Level Security.
2. **Analytical Traversals (Graph Neo4j / AWS Neptune)**:
   - Syncs entity states to Neo4j.
   - Leverages cypher queries through the abstract \`IGraphQueryInterface\` to find competitive paths, map citation circles, and compute semantic overlaps.

\`\`\`typescript
// Future Neo4j Query Implementation Example:
export class Neo4jGraphQuery implements IGraphQueryInterface {
  public async findCompetitivePaths(organizationId: string, brandId: string): Promise<EntityGraph> {
    const result = await this.neo4jSession.run(
      \`MATCH (b:Brand {id: $brandId, organizationId: $orgId})-[r:competes_with*1..2]-(c:Brand)
       RETURN b, r, c\`,
      { brandId, orgId: organizationId }
    );
    // Parse cypher records into GraphNode & GraphEdge entities
  }
}
\`\`\`
This dual-database approach ensures absolute transaction reliability alongside rapid Graph queries!
`,
  "PERSISTENCE_MODEL": `# Relational Database Persistence Model

This document details the PostgreSQL table structures, query optimizations, soft deletion strategy, and optimistic concurrency locks.

## UUID Entity Persistence

Every record persisted across the administrative subsystem uses globally unique UUID primary keys.

## Optimistic Concurrency Control

Optimistic Locking is enforced on all state updates to prevent concurrency conflicts or racing administrative commands:

- Each table (e.g., \`brands\`, \`feature_flags\`, \`tenant_quotas\`) contains a \`version\` column.
- During mutation, the repository compares the expected entity version against the version in the database.
- If they do not match, the query is aborted and an \`OptimisticLockingException\` is raised.
- If they match, the query succeeds, and the version is incremented by 1.

\`\`\`typescript
if (entity.audit.version !== existing.audit.version) {
  throw new OptimisticLockingError("Tenant", entity.audit.version, existing.audit.version);
}
\`\`\`

## Soft Delete Invariant

For security auditing and compliance, entities like \`Tenant\` and \`AdminUser\` are never permanently deleted from tables.

Instead, a soft delete strategy sets a \`deleted_at\` timestamp. All select operations filter out soft-deleted entities automatically unless explicit overrides are requested.
`,
  "PLATFORM_MONITORING": `# Platform Monitoring and Telemetry Design

This document describes how our system tracks operational health, background worker status, and external AI adapters.

## Health Probes

The \`SystemOperationsConsole\` runs real-time diagnostic checks across four core infrastructural vectors:

1. **Transactional DB Latency**: Check connection pool response times.
2. **Redis Message Queue**: Evaluate backlog and processing queue sizes.
3. **ElasticSearch Indexes**: Check hybrid and full-text search availability.
4. **S3 Storage Tiering**: Check object bucket reachability.

## Worker & Queue Telemetry

The monitor tracks:

- Active processing rates (observations processed per second).
- Monotonic worker-failed job counts.
- Backlog length across the \`ai-observation-pipeline\` and \`crawler-target-jobs\` queues.

## Integration with Existing Observability

Diagnostics integrate seamlessly with the existing Core Observability module (\`src/features/ai-intelligence/observability/\`):

- **Structured Logging**: Outputs system logs in JSON formats with trace correlation headers.
- **Metrics Tracking**: Increments monotonic counters and records latency metrics.
- **Distributed Tracing**: Envelops diagnostic runs inside OpenTelemetry trace spans.
`,
  "SERVICE_BOUNDARIES": `# Service Boundaries & Use Cases

This document describes the clear responsibilities, inputs, and outputs of the service layer interfaces.

---

## 1. Boundary Matrix

Every Service has a singular, unified domain of responsibility. Cross-domain actions are handled through composition or event-driven listeners.

| Service Name | Primary Boundary | Dependencies | Key Use Cases |
| :--- | :--- | :--- | :--- |
| **ObservationService** | AI response ingestion & prompt tracking | \`IObservationRepository\`, \`IPromptRepository\`, \`IRecommendationRepository\` | Process search runs, register tracking prompts, trigger low-visibility mitigation actions. |
| **VisibilityService** | Analytical telemetry compilation | \`IVisibilityScoreRepository\`, \`IAIEngineRepository\` | Prepares charts, aggregates metrics per platform, generates grade ratings for the command center. |
| **EntityService** | Concept index & knowledge graph | \`IEntityRepository\` |CLAIM wikidata profiles, establish relationships (e.g. competes_with), manage confidence scores. |
| **CitationService** | Citation parsing & authority scoring | \`IObservationRepository\` | Parse reference links, evaluate publisher trust levels, assess link topical relevance. |

---

## 2. Core Service Methods

### 2.1 EntityService
* \`getEntityById(orgId, id)\`: Fetches an entity inside organization boundaries.
* \`createEntity(orgId, brandId, name, type, ...)\`: Claims a semantic footprint node.
* \`addRelationship(orgId, sourceId, targetId, relationType)\`: Links concepts together.

### 2.2 CitationService
* \`analyzeCitations(orgId, observationId)\`: Evaluates citations reference links.
* \`calculateAuthorityScore(url)\`: Applies heuristics to score a publisher domain from 0 to 100.

### 2.3 VisibilityService
* \`prepareDashboardData(orgId, brandId)\`: Pulls and compiles all metric categories to feed the Command Center UI.
* \`aggregateEnginePerformance(orgId, brandId)\`: Breaks down performance ratings (A, B, C, D, F) across ChatGPT, Claude, Gemini, and Perplexity.

### 2.4 ObservationService
* \`registerPrompt(orgId, brandId, text, category, intent, ...)\`: Subscribes query tracks.
* \`processObservation(orgId, promptId, engineId, responseText, ...)\`: Coordinates the ingestion pipeline.
`,
  "TENANT_OPERATIONS": `# Tenant Operations Guide

This document describes the administrative operations supporting multi-tenant lifecycle states, limits, and quotas.

## Lifecycle States

- **Active**: The tenant runs normal crawl jobs, executes prompts, and accesses standard features.
- **Suspended**: The tenant cannot process new crawl jobs or access features, but their database schemas and configurations are kept intact.
- **Archived**: The tenant is soft-deleted, removing active schedules and preparing records for long-term cold-storage retention.

## Managing Tenant Limits and Quotas

Administrative users can modify quotas via the \`UpdateTenantQuotaCommand\` to manage resource budgets:

- \`maxUsers\`: Number of allowed team seats.
- \`maxBrands\`: Number of customer brands monitored.
- \`maxPrompts\`: Number of generative search queries tracked.
- \`maxObservationsPerMonth\`: Ingestion crawler limit.
- \`maxCrawlJobsPerDay\`: Maximum spider crawl queue rate.
- \`monthlyTokenLimit\`: Cost tracking LLM token ceiling.
- \`monthlyCostLimitUsd\`: Dollar spending maximum threshold.

## Localisation (Strategic Phase 1)

SaaS admins can toggle the localized flags inside \`TenantConfiguration\` (\`isIranMarketLocalised\`) to enable special crawling rates and Toman/Rial translation optimizations designed specifically for Iran-market LLM challenges under Phase 1 of our product roadmap.
`,
  "RBAC_MODEL": `# Hierarchical RBAC Security Model

This document specifies the administrative privilege levels and authorization structures
for the platform, and is explicit about what is **enforced today** versus **designed but
not yet wired to any route**. The two previous versions of this document described only
the aspirational 7-tier model below as if it were live; it is not, and no request in the
application currently resolves against it. Treat this distinction as load-bearing before
building anything against either model.

## Currently enforced (production): 3-role model

\`src/types/auth.ts\` defines the only \`UserRole\` type that the running application's
session, \`requireRole()\`, and \`authorizeApiRequest()\` (\`src/services/auth/authorization.ts\`)
actually check:

| Role | Rank | Scope |
|---|---|---|
| \`super_admin\` | 3 | Bypasses workspace-membership checks; access to any tenant. |
| \`workspace_admin\` | 2 | Full read/write inside their own organization. |
| \`viewer\` | 1 | Read-only inside their own organization. |

Every session cookie, API route, and Server Action in this codebase authorizes against
this model and nothing else.

## Designed, not yet wired: 7-tier admin console model

\`src/features/admin/domain/types.ts\` defines a separate, more granular \`UserRole\` union
(\`Super Admin\`, \`Platform Admin\`, \`Security Auditor\`, \`Operations\`, \`Finance\`, \`Support\`,
\`Read-Only Observer\`) with an associated permission matrix, intended for a future
dedicated admin console (tenant lifecycle management, billing overrides, AI adapter
failover config, prompt version management). The domain, application, and
persistence-adapter layers for this exist under \`src/features/admin/\`, but:

- No API route or page currently imports or enforces it.
- It has its own \`UserRole\` type, entirely distinct from (and not interchangeable with)
  \`src/types/auth.ts\`'s \`UserRole\`. Do not assume a \`session.user.role\` value can ever be
  one of these seven strings; it cannot.

Treat this module as a domain-layer scaffold for future work, not as an active security
boundary. If it is picked up, the two role models need to be explicitly reconciled (either
by extending the real session's role type, or by giving the admin console its own,
separately-authenticated identity) before any admin route is built on top of it.

## Permissions Matrix (7-tier model, not yet enforced)

- \`tenant:create\`, \`tenant:write\`, \`tenant:read\`, \`tenant:suspend\`, \`tenant:activate\`, \`tenant:archive\`
- \`admin:write\`, \`admin:read\`
- \`config:write\`, \`config:read\`
- \`ai:manage\`, \`ai:read\`
- \`audit:read\`
- \`billing:write\`, \`billing:read\`
- \`prompt:manage\`
- \`crawler:manage\`
- \`system:monitor\`

## SSO Preparedness

The schema and domain entities under \`src/features/admin/\` are pre-configured to link
federated external identities (\`saml\`, \`oidc\`, \`google\`, \`azure\`) onto administrative user
accounts for a future Enterprise SSO integration. This is scaffold-only, in the same
"designed, not yet wired" category as the rest of the admin console domain layer above.
`,
  "SECURITY_MODEL": `# Security Architecture Model

This document outlines the security, tenant authorization, Role-Based Access Control
(RBAC), and compliance guidelines implemented for the platform. See
[\`RBAC_MODEL.md\`](./RBAC_MODEL.md) for the full role breakdown and, importantly, which
role model is actually enforced versus designed-but-unwired.

---

## 1. Zero-Trust Tenant Isolation

The platform enforces zero-trust tenant isolation through multiple decoupled security
layers:

1. **PostgreSQL Row-Level Security (RLS)**: every tenant-scoped table carries
   \`organization_id\`/\`tenant_id\` RLS policies keyed off \`current_setting('app.current_tenant_id')\`,
   set exclusively inside \`TenantContextManager.runWithTenantContext()\`
   (\`src/core/database/tenant-context/index.ts\`). This is the authoritative isolation
   boundary; application-layer filtering is defense in depth on top of it, not a
   substitute for it.
2. **\`TenantContextManager.isQueryTenantScoped()\` guard**: the wrapped Postgres client
   (\`PostgresClient.connectClient()\`) refuses to run a query against any table in
   \`TENANT_SCOPED_TABLES\` unless a tenant transaction is active.
3. **\`authorizeApiRequest()\`**: the sole entry point for resolving caller identity on
   internal \`/api/v1/*\` routes. Accepts a signed session cookie or a hashed
   \`Authorization: Bearer <API_KEY>\` token; never trusts client-supplied identity headers.

## 2. Role-Based Access Control (RBAC)

The application enforces a three-role hierarchy (\`super_admin\` > \`workspace_admin\` >
\`viewer\`), checked by \`requireRole()\` and \`requireWorkspaceMembership()\`
(\`src/services/auth/authorization.ts\`). A separate, more granular 7-tier model exists as
an unwired domain-layer scaffold for a future dedicated admin console; see
[\`RBAC_MODEL.md\`](./RBAC_MODEL.md) for the distinction. Do not treat the 7-tier model as
an active control until it is explicitly wired to real routes.

## 3. Session Security

Sessions are signed, integrity-protected cookies (\`src/services/auth/session.ts\`):
HMAC-SHA256 over the payload with \`crypto.timingSafeEqual\` verification,
\`httpOnly\` + \`secure\` (in production) + \`SameSite=Strict\` cookie flags, and a mandatory,
length-checked \`SESSION_SECRET\` in production (the process fails to serve traffic rather
than fall back to a per-process ephemeral secret, which would cause random cross-instance
logouts in any horizontally scaled deployment).

## 4. API Key Authentication

Public/developer API access (\`src/features/public-api/\`) uses hashed API keys
(\`sha256\`, never stored or compared in plaintext) verified with
\`crypto.timingSafeEqual\`. Internal \`/api/v1/*\` routes accept the same key format via
\`authorizeApiRequest()\`.

## 5. Rate Limiting & Spend Protection

Metered endpoints (premium audits, crawler campaigns, RAG queries) are rate-limited
per-tenant on Upstash Redis (\`src/lib/rate-limit.ts\`) and **fail closed**: if the limiter
backend is unreachable or unconfigured in production, the request is rejected with 503
rather than allowed through unmetered.

## 6. Webhook Integrity

Inbound webhooks (\`src/app/api/webhooks/payment/route.ts\`) are authenticated with a
timing-safe shared-secret comparison and processed idempotently via an
insert-before-process ledger (\`processed_webhook_events\`), so an at-least-once delivery
can never be applied twice.

## 7. Sensitive Data & PII Protection

To remain compliant with GDPR, CCPA, and data privacy policies, the platform implements a
**\`SensitiveDataProtector\`** utility that automatically redacts high-risk secrets (Bearer
tokens, AWS credentials, custom API keys) scraped or captured within LLM response logs,
and masks sensitive consumer data prior to logging observations.
`,
};

/** README.md files, keyed by their parent directory name ("root" for docs/README.md). */
export const DOCS_README_BY_DOMAIN: Record<string, string> = {
  "root": `# Seorchable Documentation Architecture

Welcome to the Seorchable documentation. This documentation accurately reflects the implemented state of the repository, separating currently available capabilities from future plans.

## Documentation Domains

To find what you are looking for, navigate to one of our six documentation domains:

### 1. [Product Documentation](./product/README.md)
Explains what Seorchable is and what capabilities it provides. Useful for understanding core features like AI Visibility, Content Intelligence, and Competitive Intelligence.

### 2. [User Guides](./user-guides/README.md)
Documentation intended for end-users. Covers getting started, workspaces, workflows, running analyses, and interpreting results.

### 3. [Service Documentation](./services/README.md)
Documentation for internal/application services and their boundaries. Details background processing, service dependencies, processing flows, caching, and integrations.

### 4. [API Documentation](./api/README.md)
Documents the application's API surface. Details entry points, request/response contracts, authentication requirements, and rate limiting where implemented.

### 5. [Architecture Documentation](./architecture/README.md)
Technical architecture documentation. Covers system overview, domain boundaries, database architecture (migrations, tenant isolation, RLS), and major design patterns.

### 6. [Security Documentation](./security/README.md)
Documents the security model. Covers authentication, authorization (server-side, PostgreSQL RLS), data access boundaries, and API security.

---
*Note: Any project management documents such as task files, execution roadmaps, and audits are stored under [\`docs/project\`](./project/).*
`,
  "api": `# API Documentation

This section describes the application's API surface.

## Status Dictionary
- **Implemented**: API endpoint is verified and functional.
- **Partial**: API endpoint is in development or missing edge case handling.
- **Planned**: Endpoint is not currently implemented.

## Overview

Developer API endpoints under \`src/app/api/v1/\` utilize the \`authorizeApiRequest\` function to securely resolve user and tenant contexts, prioritizing validated server sessions over client-provided request headers.

### Knowledge Graph API
- **Endpoint**: \`/api/v1/knowledge-graph/query\`
- **Behavior**: Secured via server sessions, \`TenantContextManager\`, and \`EntityService\` lookups. Evaluates entities and relationships.
- **Status**: *Implemented*

### Dashboard Analytics API
- **Endpoint**: \`/api/v1/dashboard/summary/\`
- **Behavior**: Standardised refreshes for aggregated metrics via a transaction-safe tenant pipeline.
- **Status**: *Implemented*

### Competitive API
- **Endpoint**: \`/api/v1/analysis/competitive\`
- **Behavior**: Aggregates and benchmarks competitive SEO and AI visibility intelligence across dimensions.
- **Status**: *Implemented*

### LLM Analytics API
- **Endpoint**: \`/api/v1/analytics/llm/route.ts\`
- **Behavior**: Retrieves LLM output analytics. Fails closed with an explicit 500 error response when JSON parsing fails or response structure is invalid, rather than returning mock data.
- **Status**: *Implemented*

## Server Actions
In Next.js, many interactions are handled securely via Server Actions (e.g., \`ingestDocumentAction\`, \`queryKnowledgeGraphAction\`, \`loginAction\`, \`registerAction\`) rather than traditional REST APIs. These resolve user identity and tenant context strictly from the server-validated session, completely bypassing unsigned/client-provided cookies.
`,
  "architecture": `# Architecture Documentation

This section describes the technical architecture of Seorchable.

## Status Dictionary
- **Implemented**: Documented architecture accurately reflects the codebase.
- **Planned**: Architectural changes that are proposed but not implemented.

## System Overview

Seorchable is a Next.js application built on a PostgreSQL database utilizing Drizzle ORM. The architecture enforces strict multi-tenant isolation, structured service boundaries, and deterministic background processing.

## Core Architectural Domains

### [Database Architecture](./database/README.md)
The relational database schema and migration layer is powered by Drizzle ORM and Drizzle Kit. The canonical schema models 57 tables across the system with explicit \`pgPolicy\` Row-Level Security (RLS) definitions.
- Tenant scoping enforces transaction-local \`SET LOCAL app.current_tenant_id = $1\` inside active transactions.
- Migrations executed programmatically via \`src/core/database/migrator.ts\`.

### [Feature Architectures](./features/README.md)
Detailed architectural breakdown of individual system components and domains, migrated from their respective source code locations. Includes AI visibility engines, background event pipelines, CQRS design, and domain models.

### [Caching and Cost Control](./CACHING_AND_COST_CONTROL.md)
Defines caching mechanisms and AI provider cost governance logic.

### [Dashboard Shell](./DASHBOARD_SHELL_ARCHITECTURE.md)
Information architecture, layout configurations, and component logic for the unified authenticated dashboard.

### [Observability and Governance](./OBSERVABILITY_AND_GOVERNANCE.md)
Monitoring, logging, and operational governance mechanisms.
`,
  "database": `# Database Architecture

This directory contains technical specifications and decisions regarding the PostgreSQL persistence layer.

## Available Documents
- [Migration Strategy](./migration-strategy.md)
- [Reconciliation Report](./reconciliation-report.md)
- [Tenant Context Spec](./tenant-context-spec.md)
`,
  "features": `# Feature Architectures

This directory contains architectural documentation specific to feature domains and services, originally co-located with the source code.

These documents outline domain models, service boundaries, event pipelines, and AI intelligence pipeline structures.
`,
  "product": `# Product Documentation

This section describes the implemented product capabilities of Seorchable.

## Status Dictionary
- **Implemented**: Fully operational in the current codebase.
- **Partial**: Feature exists but may be incomplete or experimental.
- **Planned**: Not currently implemented.

## Implemented Capabilities

### AI Visibility Audit Engine
Measures brand representation across large language models, evaluates metrics for 8 visibility dimensions, and calculates a deterministic weighted score.
*Status: Implemented*

### Competitor Discovery and Monitoring
Identifies potential competitors from existing crawls/citations, applies deterministic classification rules, maintains normalized competitor profiles, and logs historical change detection observations under strict zero-trust tenant isolation.
*Status: Implemented*

### Knowledge Graph Foundation
Establishes the canonical semantic entities and entity relationships as the backend for the Knowledge Intelligence layer. Includes deterministic scoring for Entity Authority and Entity Completeness.
*Status: Implemented*

### Document Intelligence
Implements file parsing, SHA-256 content hashing, normalization, deterministic chunking, and 768-dimensional vector validation for tenant-safe semantic retrieval.
*Status: Implemented*

### Content Brief Engine
Transforms canonical intelligence into a pure, deterministic, structured Content Brief without generating article prose or making network/LLM calls.
*Status: Implemented*

### Content Gap Engine
Deterministically identifies competitor, topic, entity, keyword, AI answer, and citation gaps.
*Status: Implemented*

### Keyword Intelligence Engine
Provides pure, deterministic keyword discovery, intent classification, opportunity scoring, and gap detection considering semantic equivalence.
*Status: Implemented*

### Selective Technical SEO Toolkit
Provides deterministic analyzers for Structured Data, Crawlability, Indexability, Internal Linking, Sitemap, Canonical, Robots, Core Web Vitals.
*Status: Implemented*

### Site Architecture Intelligence
Provides deterministic site structure analysis, BFS-based crawl depth calculation, internal link distribution analysis, and safe orphan page detection.
*Status: Implemented*

### Content Studio
Workspace for unified AI-assisted content editing, deterministic SEO and AEO analysis, entity/semantic recommendations, and transparent content scoring.
*Status: Implemented*

### AI Prompt Intelligence
Manages prompt libraries, template variable resolutions, state machine executions, and multi-model side-by-side comparison.
*Status: Implemented*

### Competitive Radar
Aggregates, benchmarks, and trends competitive SEO and AI visibility intelligence across 10 deterministic dimensions.
*Status: Implemented*

### AI Citation Intelligence
Analyzes citation presence, occurrences, and normalization, performs publisher categorization, and exposes a gap analysis model.
*Status: Implemented*

### AI Brand Intelligence
Monitors brand mentions, analyzes context-aware sentiment, tracks recommendation presence, and calculates Brand Authority and Visibility Indexes.
*Status: Implemented*

### AEO Content Intelligence
Analyzes Answerability, Entity Coverage, Semantic Coverage, Question Coverage, Citation Readiness, and Structured Answer Quality.
*Status: Implemented*

### RAG Intelligence
Orchestrates grounded Q&A over canonical document search results with hallucination risk assessment and explicit insufficient evidence handling.
*Status: Implemented*
`,
  "security": `# Security Documentation

This section describes the security model and critical mechanisms in Seorchable.

## Status Dictionary
- **Implemented**: Security mechanism is enforced in the current codebase.

## Core Security Mechanisms

### Server-Side Identity Boundary
The server-side identity boundary is fully hardened. Plain-text \`user_id\` and \`tenant_id\` cookies are strictly non-authoritative on the server. The comprehensive security suite validates resilience against user/tenant cookie tampering, spoofing, and session forgery.
*Status: Implemented*

### Authentication and Authorization
The \`AuthProvider\` stores user session credentials client-side for UI mocking purposes, but the client synchronizes this state from the server session (\`getServerSessionAction\`) on mount. Server-side Role-Based Access Control (RBAC) hierarchy and workspace membership validation rules are managed in \`src/services/auth/authorization.ts\` through \`requireWorkspaceMembership(userId, workspaceId)\` and \`requireRole(requiredRole)\`.
*Status: Implemented*

### Multi-Tenant Isolation & Row-Level Security (RLS)
The canonical schema defined in \`database/schema/index.ts\` models 57 tables with explicit \`pgPolicy\` Row-Level Security (RLS) definitions on 37 tenant-scoped tables. Tenant scoping enforces transaction-local \`SET LOCAL app.current_tenant_id = $1\` inside active transactions, guaranteeing leased PostgreSQL clients are released securely. Fallbacks explicitly fail closed when database connections or queries fail.
*Status: Implemented*

### Cache Security
The cache layer is secured against client-side tenantId spoofing by validating that any requested key's tenant ID strictly matches the server-verified active session user's workspace ID, throwing a security violation on mismatch.
*Status: Implemented*

### Server Actions Validation
The server-side authentication system prevents client-side identity fabrication or signing oracle vulnerabilities by resolving user objects, roles, and workspace IDs strictly on the server inside \`loginAction\` and \`registerAction\`, accepting only simple inputs from the client.
*Status: Implemented*

## Detailed Security Specifications
- [Security Model Overview](./SECURITY_MODEL.md)
- [RBAC Model Specification](./RBAC_MODEL.md)
`,
  "services": `# Service Documentation

This section describes the internal application services, their boundaries, and responsibilities.

## Status Dictionary
- **Implemented**: Verified existing service.
- **Partial**: Service exists but is missing functionality.
- **Planned**: Not currently implemented.

## Core Services

### Asynchronous Job Processing (\`src/services/jobs/\`)
Defines a canonical, infrastructure-agnostic background processing boundary via \`IJobQueue\`, \`IJobExecutor\`, and \`IJobRepository\` interfaces, backed by a state-machine driven \`JobService\` enforcing tenant-scoped idempotency, exponential backoff retries, and strict lifecycle transitions.
*Status: Implemented*

### Cache Service (\`src/services/cache/\`)
Implements \`InMemoryCacheStore\`, \`CacheService\`, and promise deduplication, secured against client-side tenantId spoofing by validating that any requested key's tenant ID strictly matches the server-verified active session user's workspace ID.
*Status: Implemented*

### Cost Governance (\`src/services/cost-control/\`)
Models real AI-provider capabilities by explicitly classifying models into pricing modes ("paid", "free_tier", "self_hosted", "unknown") and enforcing geographic availability restrictions.
*Status: Implemented*

### Diagnostic Engine (\`src/services/diagnostic-engine/\`)
Evaluates evidence-backed diagnostics across 7 domains (Technical, Content, SEO, AEO, Entity, Citation, Competitive). Segregates severity and confidence, performs dynamic Root-Cause Analysis (RCA) dependencies, and handles historical regressions.
*Status: Implemented*

### AI Intelligence Services (\`src/features/ai-intelligence/services/\`)
A collection of engines including:
- \`ai-visibility-audit-engine.ts\`
- \`competitor-discovery-service.ts\`
- \`content-brief-engine.ts\`
- \`content-gap-engine.ts\`
- \`keyword-intelligence-service.ts\`
- \`site-architecture-analyzer-service.ts\`
- \`aeo-content-intelligence-service.ts\`
*Status: Implemented*
`,
  "user-guides": `# User Guides

This section provides user-facing documentation for navigating and operating Seorchable.

## Status Dictionary
- **Implemented**: Verified user workflows supported by the UI/backend.
- **Partial**: Workflow is accessible but missing edge cases or polished UI.
- **Planned**: Not currently implemented.

## Core Concepts & Workflows

### Dashboard Navigation
The platform offers an authenticated unified Dashboard Shell with collapsible responsive sidebars, directional support (RTL/LTR), dark/light styling, workspace selector, notification panels, and a Command Palette global search modal (Ctrl+K).
*Status: Implemented*

### Executive KPIs
The authenticated Dashboard Home page displays the 7 Executive KPIs, prioritized critical issues, and a Visibility Trend Chart.
*Status: Implemented*

### Running Analyses
Users can trigger technical SEO, AI visibility, keyword, and content audits via the respective intelligence engines. Results are calculated deterministically and persisted securely in workspaces.
*Status: Implemented*

### Managing Workspaces
Users log in and navigate workspaces. Workspace membership validation rules manage server-side Role-Based Access Control (RBAC).
*Status: Implemented*

### Invoice & Payment Flow
The platform hosts an Invoice Payment flow as a dedicated page under \`invoice\` and linked across headers and sidebars.
*Status: Implemented*
`,
};
