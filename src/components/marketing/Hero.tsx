"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

/**
 * Product-first hero: clear value proposition, restrained motion, and one primary
 * conversion path into the real free-audit flow.
 */
export function Hero() {
  const { session } = useAuth();
  const { language } = useTheme();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isFa = language === "fa";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    // Redirect to auth page with email as query param
    window.location.href = `/${language}/register?email=${encodeURIComponent(email)}`;
  };

  const chips = [
    { icon: TrendingUp, fa: "سنجش حضور برند در پاسخ‌ها", en: "Measure brand presence in answers" },
    { icon: ShieldCheck, fa: "گزارش‌های قابل بررسی", en: "Evidence-backed reporting" },
    { icon: Zap, fa: "از بررسی تا اقدام", en: "From audit to action" },
  ];

  return (
    <section className="aurora-bg fluid-mesh relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* layered grain/noise texture */}
      <div className="grain-overlay" />
      {/* dotted grid layer */}
      <div className="grid-backdrop absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 flex flex-col items-center">
        {/* Copy column */}
        <div className="text-center max-w-4xl mx-auto space-y-7 mb-12">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-full)] border border-[color-mix(in_srgb,var(--color-primary-600)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-primary-600)_10%,transparent)] px-4 py-2 text-xs font-semibold text-[var(--color-primary-600)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-600)] opacity-70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary-600)]" />
            </span>
            {isFa ? "تحلیل حضور برند در جست‌وجوی هوشمند" : "Brand visibility intelligence for AI search"}
          </span>

          <h1 className="hero-title headline-reveal font-black tracking-tight text-balance text-5xl sm:text-6xl md:text-7xl leading-[1.15]">
            <span className="hero-title-line title-accent-blue">
              {isFa ? "هر پرسش = یک فرصت" : "Every question is an opportunity"}
            </span>
          </h1>

          <p className="hero-support hero-support-reveal text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto text-pretty">
            {isFa
              ? "ابزارهای سئو، معرفی برند شما توسط هوش مصنوعی و بررسی شاخص های برند شما در پاسخ های تولید شده توسط هوش مصنوعی"
              : "SEO tools, AI-powered brand discovery, and clear visibility into how your brand appears in generated answers."}
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {chips.map((chip, i) => {
              const Icon = chip.icon;
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-[var(--radius-full)] neu-surface px-4 py-2 text-xs font-semibold text-[var(--text-secondary)] shadow-sm"
                >
                  <Icon size={16} className="text-[var(--color-primary-600)] rtl:-scale-x-100" />
                  {isFa ? chip.fa : chip.en}
                </span>
              );
            })}
          </div>
        </div>

        {/* Dashboard Showcase Video/Slideshow Placeholder */}
        <div className="w-full max-w-5xl mx-auto mb-16 relative perspective-1000 hero-showcase-reveal">
          <div className="relative rounded-2xl overflow-hidden border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-2xl shadow-sky-900/20 aspect-video group">
            {/* Top Bar (Mockup window controls) */}
            <div className="absolute top-0 inset-x-0 h-8 bg-[var(--muted-surface)] border-b border-[var(--glass-border)] flex items-center px-4 gap-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="flex-1 flex justify-center">
                <div className="skeleton-shimmer h-4 w-32 rounded-full opacity-50" />
              </div>
            </div>

            {/* Product dashboard preview built from existing UI language, so the hero
                communicates the product without inventing an external media asset. */}
            <div
              className="absolute inset-0 pt-8 bg-[#0b1220] text-slate-100"
              aria-label={isFa ? "پیش‌نمایش داشبورد اصلی سئورچبل" : "Seorchable main dashboard preview"}
            >
              <div className="h-full grid grid-cols-[84px_1fr] sm:grid-cols-[148px_1fr]">
                <aside className="border-e border-white/10 bg-[#0f172a] p-3 sm:p-4 space-y-5" aria-hidden="true">
                  <div className="h-7 w-7 rounded-lg bg-[#38bdf8]/20 border border-[#38bdf8]/30" />
                  <div className="space-y-3">
                    {["w-full", "w-4/5", "w-full", "w-3/5", "w-4/5"].map((width, index) => (
                      <div key={index} className={`h-2 rounded-full ${index === 0 ? "bg-[#38bdf8]/80" : "bg-slate-700/80"} ${width}`} />
                    ))}
                  </div>
                </aside>
                <div className="min-w-0 p-4 sm:p-7 space-y-5 sm:space-y-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="h-2 w-24 sm:w-32 rounded-full bg-slate-600" />
                      <div className="h-4 w-36 sm:w-56 rounded-full bg-slate-200/90" />
                    </div>
                    <div className="hidden sm:block h-7 w-20 rounded-md border border-white/10 bg-white/5" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                    {["84%", "72%", "91%", "64%"].map((value, index) => (
                      <div key={value} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5 sm:p-4 space-y-2">
                        <div className="h-2 w-3/4 rounded-full bg-slate-600" />
                        <div className="text-sm sm:text-xl font-black text-slate-100">{value}</div>
                        <div className={`h-1.5 w-1/2 rounded-full ${index % 2 ? "bg-[#f97316]/70" : "bg-[#38bdf8]/70"}`} />
                      </div>
                    ))}
                  </div>
                  <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4 min-h-0">
                    <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3 sm:p-5 space-y-4">
                      <div className="flex justify-between"><div className="h-2 w-28 rounded-full bg-slate-500" /><div className="h-2 w-12 rounded-full bg-[#38bdf8]/70" /></div>
                      <svg viewBox="0 0 600 180" className="w-full h-28 sm:h-40" role="img" aria-label={isFa ? "نمودار روند دیده‌شدن برند" : "Brand visibility trend chart"}>
                        <path d="M0 145 C70 132 90 95 150 112 S245 135 300 85 S380 105 435 60 S520 78 600 28" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
                        <path d="M0 145 C70 132 90 95 150 112 S245 135 300 85 S380 105 435 60 S520 78 600 28 V180 H0Z" fill="#38bdf8" fillOpacity=".08" />
                        <line x1="0" y1="170" x2="600" y2="170" stroke="#334155" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="hidden sm:block rounded-xl border border-white/10 bg-white/[0.035] p-5 space-y-4">
                      <div className="h-2 w-28 rounded-full bg-slate-500" />
                      {["AI visibility", "Citations", "Authority"].map((label, index) => (
                        <div key={label} className="space-y-2"><div className="flex justify-between text-[10px] text-slate-400"><span>{label}</span><span>{index + 7}{index}%</span></div><div className="h-2 rounded-full bg-slate-700"><div className="h-full rounded-full bg-[#f97316]/80" style={{ width: `${72 - index * 12}%` }} /></div></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative glows behind the showcase */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--color-primary-600)]/30 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--orange-500)]/20 rounded-full blur-3xl -z-10" />
        </div>

        {/* Email Capture & Access card column */}
        <div className="w-full max-w-md mx-auto relative z-10 mt-8">
          <div className="animated-border-glass p-6 sm:p-7">
            {session.status === "authenticated" ? (
              <div className="space-y-5 text-center">
                <div className="mx-auto grid place-items-center w-14 h-14 rounded-[var(--radius-lg)] neu-surface text-[var(--color-primary-600)] glow-ring">
                  <ShieldCheck size={26} />
                </div>
                <div className="space-y-1">
                  <h2 className="font-display font-bold text-lg text-[var(--text-primary)]">
                    {isFa ? "نشست شما فعال است" : "Your session is active"}
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] break-all">
                    {session.user?.email}
                  </p>
                </div>
                <Link href={`/${language}/dashboard`} className="block">
                  <Button variant="primary" size="lg" className="w-full font-bold gap-2">
                    {isFa ? "ورود به پیشخوان کاربری" : "Enter admin console"}
                    <ArrowRight size={18} className="rtl:-scale-x-100" />
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-start">
                <div className="space-y-1">
                  <h2 className="font-display font-bold text-lg text-[var(--text-primary)]">
                    {isFa ? "ورود سریع به میز کار" : "Access the workspace"}
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {isFa
                      ? "ایمیل کاری خود را وارد کنید تا بررسی رایگان سایتتان را شروع کنید."
                      : "Enter your work email to start a free website audit."}
                  </p>
                </div>
                <Input
                  type="email"
                  placeholder={isFa ? "you@company.com" : "you@company.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label={isFa ? "ایمیل سازمانی" : "Business email"}
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full font-bold gap-2"
                  disabled={isLoading}
                >
                  {isLoading
                    ? isFa
                      ? "در حال انتقال..."
                      : "Opening audit"
                    : isFa
                      ? "شروع بررسی رایگان"
                      : "Start free audit"}
                  {!isLoading && <ArrowRight size={18} className="rtl:-scale-x-100" />}
                </Button>
                <p className="text-[11px] text-[var(--text-muted)] text-center pt-1">
                  {isFa
                    ? "بدون نیاز به کارت بانکی برای شروع"
                    : "No credit card required to get started"}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
