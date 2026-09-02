"use client";

import React, { useState, useEffect, useId, useCallback, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/Card";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { useTheme } from "@/components/ThemeProvider";
import { Sparkles, TrendingUp, HelpCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

interface TrendData {
  date: string;
  seo: number;
  ai: number;
}

interface VisibilityTrendChartProps {
  data: TrendData[];
  loading?: boolean;
}

interface CustomTooltipPayloadItem {
  value: number | string;
  name: string;
  stroke?: string;
  fill?: string;
  payload?: TrendData;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: CustomTooltipPayloadItem[];
  label?: string;
  isRtl?: boolean;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label, isRtl }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[var(--card)] backdrop-blur-md border border-[var(--glass-border)] p-3 rounded-xl shadow-lg text-xs space-y-1.5 text-start">
        <p className="font-bold text-[var(--text-primary)]">{label}</p>
        {payload.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.stroke }} />
            <span className="text-[var(--text-secondary)] font-semibold">
              {item.name}:
            </span>
            <span className="font-display font-bold text-[var(--text-primary)]">
              {typeof item.value === "number" ? `${item.value}%` : item.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const VisibilityTrendChartView: React.FC<VisibilityTrendChartProps> = ({
  data = [],
  loading = false,
}) => {
  const { language } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRtl = language === "fa";

  // Series labels are shared between the visual legend/tooltip and the
  // screen-reader announcement below, so they only need to be defined once.
  const seoSeriesName = isRtl ? "سلامت سئو فنی" : "Technical SEO Health";
  const aiSeriesName = isRtl ? "سهم دیده‌شدن هوش مصنوعی" : "AI Visibility Index";

  // --- Accessible keyboard navigation state -------------------------------
  // Recharts' own built-in keyboard layer only supports ArrowLeft/ArrowRight
  // and does not support Home/End, so we manage a single deterministic
  // "active point" index ourselves and drive a visually-hidden live region
  // from it. This does not touch the existing mouse-driven Tooltip/Legend,
  // so hover behavior and the visual output are unchanged.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const descriptionId = useId();
  const instructionsId = useId();

  // Keep the active index in range if the dataset changes size/shape.
  const safeActiveIndex = useMemo(() => {
    if (activeIndex === null || data.length === 0) return null;
    return Math.min(Math.max(activeIndex, 0), data.length - 1);
  }, [activeIndex, data.length]);

  const activePoint = safeActiveIndex !== null ? data[safeActiveIndex] : null;

  const announcement = useMemo(() => {
    if (!activePoint) return "";
    return isRtl
      ? `${activePoint.date}. ${seoSeriesName}: ${activePoint.seo} درصد. ${aiSeriesName}: ${activePoint.ai} درصد.`
      : `${activePoint.date}. ${seoSeriesName}: ${activePoint.seo} percent. ${aiSeriesName}: ${activePoint.ai} percent.`;
  }, [activePoint, isRtl, seoSeriesName, aiSeriesName]);

  const handleChartFocus = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? 0 : prev));
  }, []);

  const handleChartKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (data.length === 0) return;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          setActiveIndex((prev) => Math.min((prev ?? 0) + 1, data.length - 1));
          break;
        case "ArrowLeft":
          event.preventDefault();
          setActiveIndex((prev) => Math.max((prev ?? 0) - 1, 0));
          break;
        case "Home":
          event.preventDefault();
          setActiveIndex(0);
          break;
        case "End":
          event.preventDefault();
          setActiveIndex(data.length - 1);
          break;
        default:
          // Let every other key (including Tab) fall through to native behavior.
          break;
      }
    },
    [data.length]
  );

  if (loading || !mounted) {
    return (
      <Card className="min-h-[350px] flex flex-col justify-between border border-[var(--border)]">
        <CardHeader>
          <div className="h-4 w-48 bg-[var(--muted-surface)] rounded animate-pulse mb-2" />
          <div className="h-3 w-80 bg-[var(--muted-surface)] rounded animate-pulse" />
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center">
          <div className="h-full w-full bg-[var(--muted-surface)]/40 rounded-xl animate-pulse" />
        </CardContent>
      </Card>
    );
  }

  // Handle empty state beautifully
  if (data.length === 0) {
    return (
      <Card className="min-h-[350px] flex flex-col justify-center items-center p-8 border border-[var(--border)] bg-[var(--card)] text-center space-y-4">
        <div className="p-4 bg-[var(--color-info-bg)] border border-[var(--border)] text-[var(--color-primary-600)] rounded-full">
          <TrendingUp size={36} className="rtl:-scale-x-100" />
        </div>
        <div className="max-w-md space-y-2">
          <h3 className="text-base font-black text-[var(--text-primary)] font-display tracking-normal">
            {isRtl ? "نمودار هوشمندی روند حضور و سئو وب‌سایت" : "Search & AI Visibility Historical Trends"}
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {isRtl
              ? "هنوز هیچ گزارش بررسی یا اسکن دامنه‌ای ثبت نشده است. برای ترسیم نمودارهای تحلیلی و مقایسه‌ای بین سئو فنی و سهم دیده‌شدن هوش مصنوعی، اولین پایش را همین امروز اجرا کنید."
              : "No historical audit metrics found for your workspace. Initiate a technical crawl on your website to begin tracking multi-model search trends."}
          </p>
        </div>
        <Button
          variant="primary"
          onClick={() => router.push(`/${language}/dashboard/audits`)}
          className="flex items-center gap-2"
        >
          <Sparkles size={14} />
          <span>{isRtl ? "شروع اولین پایش برند" : "Initiate First Brand Audit"}</span>
        </Button>
      </Card>
    );
  }

  return (
    <Card className="min-h-[380px] flex flex-col justify-between border border-[var(--border)] bg-[var(--card)]">
      <CardHeader className="text-start">
        <CardTitle className="text-base font-black flex items-center gap-2 text-[var(--text-primary)] font-display">
          <TrendingUp size={18} className="text-[var(--sky-blue-500)]" />
          <span>{isRtl ? "روند تغییرات حضور معنایی و سئو" : "Search & AI Visibility Trends"}</span>
        </CardTitle>
        <CardDescription id={descriptionId} className="text-xs text-[var(--text-secondary)]">
          {isRtl
            ? "مقایسه تاریخی رتبه بهینه‌سازی فنی موتورهای جستجو با سهم توصیه‌های هوش مصنوعی (AEO)"
            : "Chronological benchmark comparing technical SEO health against multi-model conversational prominence."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 mt-2">
        {/* Visually hidden keyboard instructions, referenced alongside the
            existing chart description via aria-describedby. */}
        <p id={instructionsId} className="sr-only">
          {isRtl
            ? "نمودار تعاملی. برای پیمایش بین نقاط داده از کلیدهای جهت‌دار راست و چپ استفاده کنید، برای رفتن به اولین نقطه کلید Home و برای آخرین نقطه کلید End را فشار دهید."
            : "Interactive chart. Use the right and left arrow keys to move between data points, Home to jump to the first point, and End to jump to the last point."}
        </p>
        <div
          className="h-[260px] w-full outline-none rounded-xl focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[3px]"
          tabIndex={0}
          role="group"
          aria-label={
            isRtl
              ? "روند دیده‌شدن سئو و هوش مصنوعی، نمودار تعاملی"
              : "Search and AI visibility trend, interactive chart"
          }
          aria-describedby={`${descriptionId} ${instructionsId}`}
          onFocus={handleChartFocus}
          onKeyDown={handleChartKeyDown}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: isRtl ? 10 : 20, left: isRtl ? 20 : 10, bottom: 0 }}
              // The custom keyboard layer above (with Home/End support) replaces
              // Recharts' built-in accessibilityLayer, which only handles
              // ArrowLeft/ArrowRight and would otherwise add a second,
              // competing tab stop inside the same chart.
              accessibilityLayer={false}
            >
              <defs>
                <linearGradient id="colorSeo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1F76F9" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#1F76F9" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                stroke="var(--text-muted)"
                fontSize={10}
                tickLine={false}
                axisLine={false}
                reversed={isRtl}
              />
              <YAxis
                stroke="var(--text-muted)"
                fontSize={10}
                tickLine={false}
                axisLine={false}
                domain={[0, 100]}
                tickFormatter={(val) => `${val}%`}
                orientation={isRtl ? "right" : "left"}
              />
              <Tooltip content={<CustomTooltip isRtl={isRtl} />} cursor={{ stroke: "var(--border-strong)" }} />
              <Legend
                verticalAlign="top"
                height={36}
                iconType="circle"
                wrapperStyle={{ fontSize: 11 }}
                align={isRtl ? "right" : "left"}
              />
              <Area
                type="monotone"
                dataKey="seo"
                name={seoSeriesName}
                stroke="#1F76F9"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#colorSeo)"
              />
              <Area
                type="monotone"
                dataKey="ai"
                name={aiSeriesName}
                stroke="#F59E0B"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#colorAi)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* Screen-reader-only live region announcing the keyboard-selected
            data point. Kept permanently mounted so content updates (not
            remounts) trigger the announcement, avoiding duplicate reads. */}
        <div aria-live="polite" role="status" className="sr-only">
          {announcement}
        </div>
      </CardContent>
    </Card>
  );
};

export const VisibilityTrendChart = React.memo(VisibilityTrendChartView);
