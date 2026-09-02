# Visual QA coverage

The Playwright suite covers the homepage, authentication entry point, pricing, and feature overview in both `/fa` and `/en`. Each route runs at 375x812, 430x932, 768x1024, and 1440x900, with full-page screenshots, a 1.5% pixel-difference tolerance, console/page-error checks, main-content visibility, and horizontal-overflow checks.

The homepage already had a product workspace preview and the rest of the landing page uses diagrams, data visualizations, and structured UI previews. The hero preview remains an intentional local-media slot rather than a fabricated image or external URL. No new media asset was invented. Future product screenshots or a local poster can be dropped into that reserved aspect-ratio frame without layout shift.

Hero changes use the existing sky-blue/orange brand roles, real DOM text, a restrained one-time reveal, and a reduced-motion override. The bilingual routes remain separate through the existing locale provider and document direction.
