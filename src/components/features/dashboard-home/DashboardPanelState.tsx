"use client";

import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/Card";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardPanelSkeleton({ rows = 3 }: { rows?: number }) {
  return <Card className="min-h-[260px] border border-[var(--border)] bg-[var(--card)]"><CardContent className="space-y-3 p-6" aria-busy="true" aria-label="Loading panel"><Skeleton className="h-4 w-48" /><Skeleton className="h-3 w-80 max-w-full" />{Array.from({ length: rows }).map((_, i) => <Skeleton key={i} className="h-14 w-full rounded-xl" />)}</CardContent></Card>;
}

export function DashboardPanelError({ onRetry, isRtl = false }: { onRetry?: () => void; isRtl?: boolean }) {
  return <Card className="min-h-[260px] border border-rose-500/20 bg-[var(--card)]"><CardContent className="flex min-h-[260px] flex-col items-center justify-center gap-3 p-6 text-center" role="alert"><div className="rounded-full border border-rose-500/20 bg-rose-500/10 p-3 text-rose-500"><AlertCircle size={24} /></div><div><p className="text-sm font-bold text-[var(--text-primary)]">{isRtl ? "بارگذاری این بخش ناموفق بود" : "This panel couldn’t load"}</p><p className="mt-1 text-xs text-[var(--text-secondary)]">{isRtl ? "بدون اختلال در سایر بخش‌ها دوباره تلاش کنید." : "Try again without interrupting the rest of your dashboard."}</p></div>{onRetry && <Button type="button" variant="outline" onClick={onRetry} className="flex items-center gap-2"><RefreshCw size={14} />{isRtl ? "تلاش دوباره" : "Retry"}</Button>}</CardContent></Card>;
}
