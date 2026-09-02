"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { useAuth } from "@/components/AuthProvider";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";
import { Check, Shield, Award, Sparkles, Building, ChevronRight, AlertCircle } from "lucide-react";

export default function PricingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language, direction } = useTheme();
  const { session } = useAuth();
  const isRtl = language === "fa";

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Check if there was a pre-selected plan in the query params (e.g. from landing page)
  useEffect(() => {
    const planParam = searchParams?.get("plan");
    if (planParam && ["free", "professional", "business", "enterprise"].includes(planParam)) {
      setSelectedPlan(planParam);
    }
  }, [searchParams]);

  const handlePlanSelection = (planName: string) => {
    const validPlans = ["free", "professional", "business", "enterprise"];
    if (!validPlans.includes(planName)) return;
    setSelectedPlan(planName);
    const next = `/${language}/dashboard/billing?plan=${encodeURIComponent(planName)}`;
    const destination = session.status === "authenticated"
      ? next
      : `/${language}/register?plan=${encodeURIComponent(planName)}&next=${encodeURIComponent(next)}`;
    router.push(destination);
  };

  const strings = {
    title: isRtl ? "طرح‌های اشتراک و تعرفه‌ها" : "Enterprise Grade Pricing",
    subtitle: isRtl
      ? "پیکربندی هوشمند و بررسی دیده‌شدن برند خود در مدل‌های زبانی با پلن‌های متناسب با مقیاس کسب‌وکار شما."
      : "Start measuring and optimizing your LLM footprint. Choose the subscription matching your scale.",

    // Plans Copy
    freeTitle: isRtl ? "پلن رایگان (Free)" : "Free",
    freePrice: "0",
    freeDesc: isRtl ? "برای آزمایش اولیه ساختار و خزش فرضی" : "Perfect for initial audit evaluations",
    freeFeatures: isRtl
      ? ["بررسی دامنه‌های محدود", "شاخص دیده‌شدن پایه", "خلاصه گزارش‌های آماری"]
      : ["Limited brand audits", "Basic visibility scoring", "Historical overview summaries"],

    proTitle: isRtl ? "پلن حرفه‌ای (Professional)" : "Professional",
    proPrice: isRtl ? "۱,۵۰۰,۰۰۰" : "49",
    proDesc: isRtl ? "برای رشد مستمر و پایش دائم دیده‌شدن" : "For growing startups & active brands",
    proFeatures: isRtl
      ? ["پایش مداوم و خودکار", "گزارش‌های پیشرفته PDF", "تحلیل عمیق بر مبنای جمنی", "دسترسی به ۲ فضای کاری مجزا"]
      : ["Continuous brand monitoring", "Advanced PDF export reports", "Google Gemini insights access", "Up to 2 active brand workspaces"],

    entTitle: isRtl ? "پلن سازمانی (Enterprise)" : "Enterprise",
    entPrice: isRtl ? "تماس بگیرید" : "Custom",
    entDesc: isRtl ? "برای برندهای بزرگ سازمانی و هلدینگ‌ها" : "For large scale holding groups & agencies",
    entFeatures: isRtl
      ? ["تعداد نامحدود فضاهای کاری", "دسترسی کامل اعضای تیم", "دسترسی تام به REST API و MCP", "پشتیبانی ۲۴ ساعته اختصاصی"]
      : ["Unlimited active brands", "Multi-seat team workspace access", "Full REST API & MCP Server access", "Dedicated priority support agent"],

    currency: isRtl ? "تومان / ماه" : "$ / mo",
    ctaFree: isRtl ? "شروع رایگان" : "Start Free Trial",
    ctaPro: isRtl ? "ارتقا به حرفه‌ای" : "Upgrade to Pro",
    ctaEnt: isRtl ? "ارتباط با پشتیبانی" : "Contact Sales",

  };

  return (
    <div className="min-h-screen relative overflow-hidden text-[var(--foreground)] py-12 px-4 sm:px-6 lg:px-8" dir={direction}>
      {/* Ambient background spheres */}
      <div className="ambient-bg fixed inset-0 -z-10">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
      </div>

      <div className="max-w-5xl mx-auto space-y-12 animate-fade-in text-center">
        {/* Header Title */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[var(--sky-blue-500)] border border-[var(--sky-blue-500)]/20 bg-[var(--sky-blue-500)]/5 inline-block">
            {isRtl ? "تعرفه‌ها" : "PRICING PLANS"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-gradient-brand leading-none font-display">
            {strings.title}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {strings.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* FREE PLAN */}
          <Card className="border border-[var(--border)] bg-[var(--card)] backdrop-blur-md hover:border-sky-500/20 transition-all duration-300 flex flex-col justify-between text-start">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-black text-[var(--text-primary)]">{strings.freeTitle}</CardTitle>
              <CardDescription className="text-xs">{strings.freeDesc}</CardDescription>
              <div className="pt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black text-[var(--text-primary)] font-display">{strings.freePrice}</span>
                <span className="text-xs text-[var(--text-muted)] font-bold">{strings.currency}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-0 flex-1 flex flex-col justify-between">
              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-semibold border-t border-[var(--border)] pt-4">
                {strings.freeFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                onClick={() => handlePlanSelection("Free")}
                className="w-full mt-6 py-3 rounded-xl text-xs font-black gap-2 flex items-center justify-center cursor-pointer hover:bg-white/5"
              >
                <span>{strings.ctaFree}</span>
                <ChevronRight size={13} className={isRtl ? "rotate-180" : ""} />
              </Button>
            </CardContent>
          </Card>

          {/* PROFESSIONAL PLAN (Popular Gradient Border) */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-[var(--sky-blue-500)] to-[var(--orange-500)] shadow-xl transform md:-translate-y-2">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[var(--sky-blue-500)] to-[var(--orange-500)] text-white text-[9px] font-black rounded-full uppercase tracking-widest shadow-md">
              {isRtl ? "محبوب‌ترین پلن" : "MOST POPULAR"}
            </span>
            <Card className="h-full border-none bg-slate-950/95 backdrop-blur-md rounded-[22px] flex flex-col justify-between text-start">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-black text-white">{strings.proTitle}</CardTitle>
                <CardDescription className="text-xs text-slate-300">{strings.proDesc}</CardDescription>
                <div className="pt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white font-display">{strings.proPrice}</span>
                  <span className="text-xs text-slate-400 font-bold">{strings.currency}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-0 flex-1 flex flex-col justify-between">
                <ul className="space-y-2.5 text-xs text-slate-200 font-semibold border-t border-white/10 pt-4">
                  {strings.proFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check size={14} className="text-[var(--sky-blue-500)] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="primary"
                  onClick={() => handlePlanSelection("Professional")}
                  className="w-full mt-6 py-3.5 rounded-xl text-xs font-black gap-2 flex items-center justify-center cursor-pointer bg-gradient-to-r from-[var(--sky-blue-500)] to-[var(--orange-500)] border-none text-white shadow-lg"
                >
                  <Sparkles size={14} className="animate-pulse" />
                  <span>{strings.ctaPro}</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* ENTERPRISE PLAN */}
          <Card className="border border-[var(--border)] bg-[var(--card)] backdrop-blur-md hover:border-orange-500/20 transition-all duration-300 flex flex-col justify-between text-start">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-black text-[var(--text-primary)]">{strings.entTitle}</CardTitle>
              <CardDescription className="text-xs">{strings.entDesc}</CardDescription>
              <div className="pt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black text-[var(--text-primary)] font-display">{strings.entPrice}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-0 flex-1 flex flex-col justify-between">
              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-semibold border-t border-[var(--border)] pt-4">
                {strings.entFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check size={14} className="text-orange-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                onClick={() => handlePlanSelection("Enterprise")}
                className="w-full mt-6 py-3 rounded-xl text-xs font-black gap-2 flex items-center justify-center cursor-pointer hover:bg-white/5"
              >
                <span>{strings.ctaEnt}</span>
                <ChevronRight size={13} className={isRtl ? "rotate-180" : ""} />
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>

    </div>
  );
}
