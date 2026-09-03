# گزارش بررسی جامع پروژه Seorchable
**دامنه بررسی:** ۶۹۶ فایل (۴۸۴ فایل TS/TSX) · Next.js 16.2.11 · React 19.2.4 · Drizzle + PostgreSQL · Inngest · Tailwind v4
**روش:** تحلیل استاتیک کامل — resolve کردن تمام import‌ها، بررسی تطابق export/import، ترسیم گراف وابستگی client/server، انطباق با API‌های Next 16، ردیابی داده‌های جعلی، بررسی مرزهای احراز هویت.

---

## ⚠️ محدودیت مهم درباره «شبیه‌سازی دیپلوی»

محیط اجرای من دسترسی شبکه ندارد و `node_modules` هم در فایل آپلودی نیست. بنابراین **نتوانستم** این‌ها را اجرا کنم:

| فرمان | وضعیت | دلیل |
|---|---|---|
| `pnpm install` | اجرا نشد | بدون دسترسی شبکه، امکان نصب پکیج نیست |
| `pnpm exec tsc --noEmit` | اجرا نشد | typescript نصب نشده |
| `pnpm lint` | اجرا نشد | eslint نصب نشده |
| `pnpm build` / `next build` | اجرا نشد | next نصب نشده |

طبق قانون خودِ `AGENTS.md` («If a command cannot run, say so explicitly... Never claim a check passed without executing it») هیچ‌کدام از این چک‌ها را «پاس‌شده» اعلام نمی‌کنم. تمام یافته‌های زیر از تحلیل استاتیک کد به‌دست آمده، نه از خروجی کامپایلر.

**نتیجه:** خطاهای *نوعی* (type errors) که فقط `tsc` کشفشان می‌کند، در این گزارش نیستند. اینها بخش قابل‌توجهی از ارورهای دیپلوی ورسل را می‌سازند، چون `next build` تایپ‌چک می‌کند.

---

## P0 — بلاکرهای بحرانی (باید قبل از هر چیز حل شوند)

### P0-1 · داده‌ی جعلی در مسیرهای production
نقض مستقیم قانون ۱ در `AGENTS.md`. این باقی‌مانده‌ی دوران پروتوتایپ است و همچنان زنده:

- `src/app/api/v1/optimization/technical/route.ts:268-272` — Core Web Vitals با `Math.random()` ساخته می‌شود: `avgLoadTime`, `largestContentfulPaint`, `cumulativeLayoutShift`, `totalPageSize`, `imageOptimizationScore`. یعنی API تحلیل سئوی فنی، عدد بی‌معنی به کاربر پول‌داده تحویل می‌دهد.
- `src/services/auditService.ts:85` — `const score = Math.floor(Math.random() * 26) + 65; // realistic score` — امتیاز ادیت جعل می‌شود.
- `src/services/crawler/web-crawler.ts:37-43` و `src/services/crawler/link-discovery.ts:12-17` — هر URL که رشته‌ی `mock.com` در آن باشد (یا `USE_MOCK_CRAWLER=true`) محتوای ثابت mock برمی‌گرداند. **این مسیر با `NODE_ENV` گیت نشده** و در production فعال است.
- `Math.random()` در ۲۰ فایل src استفاده شده. بخشی از آنها تولید ID است (`evt-${Math.random()...}`) که باید `crypto.randomUUID()` باشد — هم برای یکتایی، هم چون `.substr()` منسوخ است.

**راه‌حل اصولی:** اندازه‌گیری واقعی (برای CWV یا از منبع واقعی مثل PageSpeed/lab data، یا حذف فیلد از contract و برگرداندن `422/503`)، جعل هرگز. کرالر mock پشت گیت صریح `NODE_ENV !== "production"` یا انتقال کامل به `tests/`. ID‌ها با `crypto.randomUUID()`.

### P0-2 · ۱۴ روت API بدون احراز هویت
هیچ‌کدام از این‌ها `authorizeApiRequest` / `secureRouteHandler` / `requireSession` ندارند:

`v1/ai/chunk` · `v1/ai/sentiment` · `v1/analysis/competitive` · `v1/analytics/llm` · `v1/analytics/summary` · `v1/audit/aeo-insight` · `v1/audit/engine` · `v1/content/studio` · `v1/crawl` · `v1/optimization/technical`

از این‌ها، این موارد **هزینه‌ی واقعی خرج می‌کنند** (توکن LLM یا کرال Firecrawl) و هم بدون auth‌اند و هم بدون rate limit: `ai/chunk`, `ai/sentiment`, `analysis/competitive`, `audit/engine`, `audit/aeo-insight`, `content/studio`, `crawl`, `optimization/technical`.
این یعنی هر کسی با `curl` می‌تواند بودجه‌ی AI و Firecrawl شما را خالی کند.

(روت‌های `inngest`، `webhooks/payment` و `v1/docs` عمداً بدون auth هستند — اولی امضای Inngest دارد، دومی `PAYMENT_WEBHOOK_SECRET` با `timingSafeEqual`، سومی عمومی است. این سه مشکل نیستند.)

**راه‌حل اصولی:** `authorizeApiRequest(req)` روی همه‌ی روت‌های tenant-scoped + `src/lib/rate-limit.ts` روی هر روت خرج‌کننده، *قبل از* خرج شدن.

### P0-3 · وجود همزمان `package-lock.json` و `pnpm-lock.yaml`
`package-lock.json` (۴۵۸KB) در ریپو هست و خودِ `AGENTS.md` می‌گوید stale است و نباید استفاده شود. وجودش در ریپو باعث می‌شود تشخیص package manager در ورسل غیرقطعی شود و نصب با lockfile اشتباه انجام گیرد — یکی از شایع‌ترین دلایل «روی لوکال کار می‌کند، روی ورسل نه».

**راه‌حل اصولی:** `package-lock.json` از ریپو حذف و به `.gitignore` اضافه شود؛ `packageManager: pnpm@10.12.3` تنها منبع حقیقت بماند. (این حذف یک فایل lock تکراری است، نه حذف ابزار.)

---

## P1 — نقص‌های معماری که رفتار محصول را خراب می‌کنند

### P1-1 · باقی‌مانده‌ی route group که لایوت داشبورد را دور می‌زند
`src/app/[locale]/(dashboard)/dashboard/prompts/page.tsx`

این فایل به URL `/[locale]/dashboard/prompts` می‌رسد، ولی چون در شاخه‌ی `(dashboard)` است و نه داخل `src/app/[locale]/dashboard/`، **زیر `src/app/[locale]/dashboard/layout.tsx` قرار نمی‌گیرد**. یعنی صفحه‌ی prompts بدون shell داشبورد، بدون سایدبار و بدون مرز محافظتی لایوت رندر می‌شود. این دقیقاً الگوی قدیمی جامانده از refactor است.

**راه‌حل اصولی:** انتقال به `src/app/[locale]/dashboard/prompts/page.tsx` و حذف پوشه‌ی خالی `(dashboard)`.

### P1-2 · دو ثبت‌کننده‌ی موازی Inngest، و job‌های ثبت‌نشده
- `src/app/api/inngest/route.ts` فقط `runAudit` را ثبت می‌کند.
- `src/inngest/functions/ai-visibility.ts` و `src/lib/inngest/functions.ts` وجود دارند ولی **هرگز در `serve()` ثبت نشده‌اند** → این job‌ها بی‌صدا اجرا نمی‌شوند.
- دو دایرکتوری موازی `src/inngest/` و `src/lib/inngest/` وجود دارد.

**راه‌حل اصولی:** یک دایرکتوری canonical، یک registry مرکزی که همه‌ی functions را export کند، و `serve({ functions: allFunctions })`.

### P1-3 · import کردن ماژول route handler داخل client component
پنج کامپوننت `"use client"` تایپ پاسخ را مستقیماً از فایل `route.ts` می‌کشند:

| کامپوننت | import از |
|---|---|
| `features/analysis/CompetitiveAnalysisPanel.tsx` | `@/app/api/v1/analysis/competitive/route` |
| `features/audit/PremiumAuditPanel.tsx` | `@/app/api/v1/audit/premium/route` |
| `features/content/ContentStudio.tsx` | `@/app/api/v1/content/studio/route` |
| `features/analytics/LlmAnalyticsPanel.tsx` | `@/app/api/v1/analytics/llm/route` |
| `features/dashboard-home/DashboardHomeClient.tsx` | `@/services/dashboard-home` |

فعلاً چون فقط در type position استفاده می‌شوند، SWC آنها را elide می‌کند و build نمی‌شکند. ولی گراف وابستگی این مسیرها به `pg`، `next/headers`، `node:async_hooks`، `@upstash/redis` و `@mendable/firecrawl-js` می‌رسد — کافی است یک نفر یک مقدار (نه تایپ) از همان ماژول import کند تا build ورسل با `Module not found` بشکند. بمب ساعتی.

**راه‌حل اصولی:** انتقال contract‌های پاسخ به ماژول تایپ مستقل (`src/types/api/*.ts` یا `*.contract.ts`) و استفاده از `import type`.

### P1-4 · دو سیستم طراحی موازی
`src/components/Card.tsx` و `src/components/ui/card.tsx` هر دو وجود دارند. کل پوشه‌ی `src/components/ui/*` (`alert`, `badge`, `card`, `empty-state`, `input`, `label`, `select`, `tabs`, `textarea`) از هیچ‌جای اپ import نمی‌شود — یعنی shadcn نصب شده ولی هرگز به‌کار گرفته نشده، در حالی که یک ست کامپوننت دستی موازی در `src/components/` فعال است. `AGENTS.md` صریحاً «سیستم بصری موازی» را منع می‌کند.
همچنین `components.json` به `app/globals.css` اشاره می‌کند در حالی که فایل واقعی `src/app/globals.css` است.

### P1-5 · دو `lib/utils.ts` با محتوای صددرصد یکسان
`lib/utils.ts` (ریشه) و `src/lib/utils.ts` بایت‌به‌بایت یکی هستند. فقط `src/` استفاده می‌شود.
بدتر: `src/app/[locale]/layout.tsx:9` با مسیر نسبی `../../../components/navigation/FloatingSidebar` از `src/` بیرون می‌زند و به پوشه‌ی `components/` ریشه وصل می‌شود — الگوی پیش از مهاجرت به `src/`.

---

## P2 — کد مرده و باقی‌مانده‌های پروتوتایپ

**۵۶ ماژول در پروژه هستند که هیچ‌جا import نمی‌شوند.** برجسته‌ترین‌ها:

- `src/lib/docsData.ts` — **۱۲۱ کیلوبایت** محتوای تولیدشده که کاملاً مرده است. جایگزینش (`docsIndex.ts` + `docsContent.generated.ts`) استفاده می‌شود. این حجم بی‌دلیل وارد trace بیلد می‌شود.
- `test_db.ts` در ریشه — دو خط دیباگ (`console.log(typeof drizzle)`) که چون در `include` تی‌اس‌کانفیگ است، وارد تایپ‌چک بیلد می‌شود.
- `verify_aeo_content.py` در ریشه — اسکریپت پایتون بی‌ربط.
- `src/components/features/audit/PremiumAuditPanel.tsx` — پنل ادیت پریمیوم ساخته شده ولی به هیچ صفحه‌ای وصل نیست.
- `src/components/features/graph/KnowledgeGraphExplorer.tsx`, `IngestionForm.tsx`, `TechnicalOptimizationPanel.tsx`, `BrandIntelligenceChat.tsx`, `AeoAuditPanel.tsx` — همه بدون مصرف‌کننده.
- `src/components/marketing/{CTASection,FeaturesSection,MetricsSection,PlatformsSection,ProcessSection}.tsx` — نسخه‌ی قدیمی لندینگ، جایگزین شده با `[locale]/page.tsx` یکجا.
- `src/app/actions/{keyword-intelligence,site-architecture,workspace}.ts` — server action بدون فراخوان.
- `src/core/{cache,config}/index.ts`, `src/core/security/cors.ts`, `src/services/{analytics,auth,intelligence,storage}/index.ts`, `src/services/api/client.ts` — لایه‌های سرویس بدون مصرف‌کننده.
- `components/live-analytics/LiveAnalyticsGraph.tsx` — گراف زنده‌ای که رندر نمی‌شود.

**راه‌حل اصولی:** این‌ها را نمی‌شود کورکورانه حذف کرد چون بعضی‌شان feature‌های ساخته‌شده‌ی «وصل‌نشده» هستند نه کد زائد. تفکیک لازم است: هر ماژول یا به محصول وصل شود، یا بعد از تأیید صریح شما حذف شود.

**صفحات مشکوک به تکرار مسیر** (نیاز به تصمیم محصولی، نه فنی): `[locale]/settings` در برابر `[locale]/dashboard/settings` · `[locale]/dashboard/audits` در برابر `[locale]/dashboard/aeo/audits` · `[locale]/dashboard/content` در برابر `[locale]/dashboard/content/studio` و `dashboard/aeo/content` · `[locale]/profile` و `[locale]/invoice` بدون لینک ورودی.

---

## P3 — بهداشت پیکربندی

### P3-1 · انحراف متغیرهای محیطی از `.env.example`
این‌ها در کد خوانده می‌شوند ولی در `.env.example` نیستند:
`GOOGLE_AI_API_KEY` (کد هم این و هم `GOOGLE_GENERATIVE_AI_API_KEY` را می‌خواند — دوگانگی) · `NEXT_PUBLIC_API_URL` · `NEXT_PUBLIC_APP_URL` · `NEXT_PUBLIC_IRAN_MARKET_LOCALISED` · `PUBLIC_API_ALLOWED_ORIGINS` · `ADMIN_MFA_REQUIRED` · `ADMIN_SSO_ENABLED` · `AI_DEFAULT_MAX_TOKENS` · `OBSERVABILITY_TRACE_SAMPLE_RATE` · `OBSERVABILITY_LLM_TOKEN_WARNING_THRESHOLD` · `USE_MOCK_CRAWLER` · `RUN_INTEGRATION_TESTS`

متغیرهای `NEXT_PUBLIC_*` در **زمان بیلد** درون باندل کلاینت inline می‌شوند؛ اگر روی ورسل تنظیم نشده باشند، باندل با مقدار `undefined` ساخته می‌شود و خطا در runtime بروز می‌کند نه در بیلد.

### P3-2 · نبود `engines` در `package.json`
Next 16 حداقل Node 20.9 و TypeScript 5.1 می‌خواهد. فیلد `engines` تعریف نشده، پس نسخه‌ی Node در ورسل به دیفالت پروژه واگذار شده. باید صریح شود.

### P3-3 · `generateStaticParams` در هیچ روتی وجود ندارد
هیچ‌کدام از `[locale]` و `[slug]` prerender نمی‌شوند؛ همه dynamic هستند. بیلد نمی‌شکند، ولی TTFB و هزینه‌ی اجرا بی‌دلیل بالا می‌رود و مزیت SEO رندر استاتیک از دست می‌رود — برای محصولی که خودش ابزار سئو است، طنز تلخی است.

---

## ✅ چیزهایی که درست مهاجرت کرده‌اند (نیاز به دست‌کاری ندارند)

بررسی انطباق با تغییرات شکننده‌ی Next 16، همه پاس:

- `src/proxy.ts` با تابع `proxy` — مهاجرت از `middleware.ts` درست انجام شده، هیچ `middleware.ts` جامانده‌ای نیست (که در Next 16 بی‌صدا نادیده گرفته می‌شد)، و `export const runtime` هم که در proxy خطا می‌دهد وجود ندارد.
- تمام `params` و `searchParams` به‌صورت `Promise<...>` تایپ شده‌اند و با `await` یا `use()` مصرف می‌شوند. هیچ دسترسی همگام (که در Next 16 کاملاً حذف شده) پیدا نشد.
- `cookies()` همه‌جا await می‌شود.
- `next lint` در اسکریپت بیلد نیست (در Next 16 حذف شده) — `"lint": "eslint"` درست است.
- در `next.config.ts` نه `experimental.turbopack` هست، نه `images.domains`، نه `serverRuntimeConfig`، نه `experimental.ppr`، نه هیچ کانفیگ webpack (که باعث شکست بیلد Turbopack می‌شد). کانفیگ تمیز است.
- `revalidateTag` استفاده نشده، پس مشکل امضای تک‌آرگومانی Next 16 وجود ندارد.
- هیچ فایل `"use client"` ای `metadata` یا `generateMetadata` export نمی‌کند.
- تمام import‌ها resolve می‌شوند و هیچ export گمشده‌ای پیدا نشد (۴۸۷ فایل چک شد).
- `tsconfig` پوشه‌ی `tests` را exclude کرده، پس فایل‌های تست بیلد را نمی‌شکنند.
- `.circleci/config.yml` کاملاً درست است: نصب با pnpm، سپس lint و `tsc --noEmit` و تست و بیلد. اگر این pipeline اجرا می‌شد، ارورهای دیپلوی قبل از ورسل گرفته می‌شدند.

---

## ترتیب پیشنهادی اجرای اصلاحات

۱. **P0-3** — حذف `package-lock.json` (تک‌خطی، ولی می‌تواند علت اصلی ارورهای نصب در ورسل باشد).
۲. **P0-2** — بستن مرز auth و rate limit روی ۱۰ روت API.
۳. **P0-1** — حذف داده‌ی جعلی از مسیرهای production و گیت کردن کرالر mock.
۴. **P1-1** — انتقال صفحه‌ی prompts زیر لایوت داشبورد.
۵. **P1-3** — استخراج contract‌های API به ماژول تایپ مستقل.
۶. **P1-2** — یکپارچه‌سازی Inngest و ثبت job‌های جامانده.
۷. **P1-4 / P1-5** — یکی کردن سیستم طراحی و حذف `lib/` تکراری ریشه.
۸. **P3** — همگام‌سازی `.env.example`، افزودن `engines`، افزودن `generateStaticParams`.
۹. **P2** — تفکیک ۵۶ ماژول مرده (وصل کردن یا حذف، با تأیید).

**اما گام صفر:** یک بار `pnpm install && pnpm exec tsc --noEmit` در محیطی با دسترسی شبکه. تا خروجی واقعی تایپ‌چکر را نداشته باشیم، فهرست ارورهای دیپلوی ورسل کامل نیست — و اصلاح کورکورانه‌ی کد بدون تایپ‌چکر، ریسک ساختن ارورهای جدید را دارد.
