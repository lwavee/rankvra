"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Gauge,
  MessageCircle,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function WebDevHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-0 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
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
            Web Development
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column — Short, Punchy, High-Converting */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-2xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Full-Stack Next.js 16 Engineering</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-slate-950 leading-[1.15]">
              Custom Next.js Websites That Load in{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                &lt; 1 Second &amp; Convert.
              </span>
            </h1>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Zero slow WordPress plugins. We architect custom Next.js web applications with clean TypeScript, passing 100/100 Core Web Vitals to convert visitors into direct inquiries.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/25 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
              >
                Claim Free Website Audit
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20build%20a%20high-speed%20custom%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-indigo-400 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Naveen
              </a>
            </div>

            {/* Quick Proof Counters */}
            <div className="mt-4 flex items-center gap-5 border-t border-slate-200/90 pt-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-sm">&lt; 0.8s</span>
                <span className="text-slate-500 text-[11px]">Mobile LCP</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-indigo-600 text-sm">100%</span>
                <span className="text-slate-500 text-[11px]">Custom Code</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-emerald-600 text-sm">100/100</span>
                <span className="text-slate-500 text-[11px]">Core Vitals</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Compact Animated Terminal & Vitals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-1.5 font-mono text-[10px] text-slate-500">rankvra-engine v16.3</span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  SSR Edge Live
                </span>
              </div>

              {/* Terminal Output */}
              <div className="rounded-xl bg-slate-50 p-3 font-mono text-[11px] border border-slate-200 mb-3 space-y-1.5">
                <p className="text-slate-800 flex items-center justify-between">
                  <span className="text-emerald-700 font-bold">&#10003; Next.js 16 Edge Build</span>
                  <span className="text-emerald-600 font-black">280ms</span>
                </p>
                <p className="text-slate-500 text-[10px]">
                  Lakeview Heritage Resort: mobile load reduced 5.2s &rarr; 0.6s
                </p>
                <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[94%]" />
                </div>
              </div>

              {/* Speed & Paint Bar */}
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3">
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 mb-0.5">
                    <Gauge size={12} className="text-emerald-600" /> Performance
                  </div>
                  <p className="text-lg font-black text-slate-900">100 / 100</p>
                  <span className="text-[10px] text-emerald-600 font-semibold">Verified Lighthouse</span>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3">
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 mb-0.5">
                    <Zap size={12} className="text-amber-500" /> Visual Paint
                  </div>
                  <p className="text-lg font-black text-emerald-600">0.4s FCP</p>
                  <span className="text-[10px] text-slate-500 font-semibold">Sub-Second Render</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
