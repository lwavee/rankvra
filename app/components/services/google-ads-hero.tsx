"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Filter,
  MessageCircle,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function GoogleAdsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-0 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/10 via-sky-500/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumbs" className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <Link href="/services" className="hover:text-indigo-600 transition-colors">
            Services
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <span className="text-indigo-600" aria-current="page">
            Google Ads &amp; PPC
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-2xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Precision Commercial PPC Engine</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-slate-950 leading-[1.15]">
              Google Ads That Capture{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
                Ready-To-Buy Leads.
              </span>
            </h1>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Tightly controlled search and call-only campaigns with continuous negative keyword sculpting that maximize commercial ROAS and eliminate wasted budget.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-600/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
              >
                Audit My Existing Ads
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20run%20high-ROAS%20Google%20Ads."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-blue-400 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Naveen
              </a>
            </div>

            {/* Quick Proof Counters */}
            <div className="mt-4 flex items-center gap-5 border-t border-slate-200/90 pt-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-emerald-600 text-sm">10/10</span>
                <span className="text-slate-500 text-[11px]">Quality Score</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-sm">0%</span>
                <span className="text-slate-500 text-[11px]">Wasted Clicks</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-indigo-600 text-sm">100%</span>
                <span className="text-slate-500 text-[11px]">GA4 Tracked</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Compact Animated Google Ads Optimization Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-slate-900">Google PPC Quality Radar</span>
                </div>
                <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-[10px] font-bold text-blue-700">
                  Exact Match Active
                </span>
              </div>

              {/* Negative Keyword Shield Box */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Filter size={13} className="text-indigo-600" />
                    <span className="text-xs font-bold text-slate-900">Negative Keyword Shield</span>
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    1,240+ Filtered
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
                  Blocks irrelevant jobs, free seekers, and low-ticket searches to protect your advertising budget.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-center">
                  <p className="text-[10px] font-semibold text-slate-500">Targeting Intent</p>
                  <p className="text-lg font-black text-emerald-600 mt-0.5">High Commercial</p>
                  <span className="text-[10px] text-slate-400">Lowest Waste CPC</span>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-center">
                  <p className="text-[10px] font-semibold text-slate-500">Offline Attribution</p>
                  <p className="text-lg font-black text-slate-900 mt-0.5">Live CRM</p>
                  <span className="text-[10px] text-indigo-600 font-semibold">GA4 + WhatsApp</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-200/80">
                {["Call-Only Ads", "Dedicated Landing Pages", "Transparent ROI"].map((item) => (
                  <span key={item} className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                    &#10003; {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
