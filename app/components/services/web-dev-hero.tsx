"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Gauge,
  MessageCircle,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function WebDevHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-[#e2e8f0]">
      {/* Subtle tech background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-[#4f46e5]/10 via-[#06b6d4]/10 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#10b981]/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-semibold text-[#64748b]">
          <Link href="/" className="hover:text-[#4f46e5] transition-colors">
            Home
          </Link>
          <ChevronRight size={12} className="text-[#94a3b8]" />
          <Link href="/services" className="hover:text-[#4f46e5] transition-colors">
            Services
          </Link>
          <ChevronRight size={12} className="text-[#94a3b8]" />
          <span className="text-[#0f172a]" aria-current="page">
            Web Development
          </span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          {/* Left Column — Short, Punchy, High-Converting */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] shadow-2xs mb-5">
              <Code2 size={13} className="text-[#4f46e5]" />
              Full-Stack Next.js 16 Engineering
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl lg:text-[54px] leading-[1.1]">
              Custom Websites That Load in{" "}
              <span className="text-gradient">&lt; 1 Second</span> &amp; Convert.
            </h1>

            {/* Short concise micro-copy */}
            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              Zero slow WordPress plugins. Zero bloated templates. We build custom, lightweight Next.js websites that pass Core Web Vitals and turn visitors into paying clients.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all"
              >
                Claim Free Website Audit
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20build%20a%20high-speed%20custom%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-semibold text-[#1e293b] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shadow-2xs"
              >
                <MessageCircle size={16} className="text-[#10b981]" />
                WhatsApp Naveen Direct
              </a>
            </div>

            {/* Quick Proof Counters */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e2e8f0] pt-6 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#0f172a]">&lt; 0.8s</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Mobile LCP</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#10b981]">100%</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Custom Code</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#4f46e5]">100 / 100</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Google Vitals</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Animated Code & Speed Telemetry Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Ambient glow behind card */}
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-[#4f46e5]/25 via-[#06b6d4]/20 to-[#10b981]/25 blur-xl opacity-75" />

            {/* Main Interactive Telemetry Frame */}
            <div className="relative rounded-[32px] border border-[#334155] bg-[#0f172a] p-6 text-white shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-400">rankvra-engine v16.3</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  SSR Production Ready
                </span>
              </div>

              {/* Terminal Code Snippet */}
              <div className="rounded-xl bg-[#020617] p-4 font-mono text-xs border border-white/5 mb-4">
                <div className="text-slate-400 flex items-center gap-2 mb-2">
                  <Terminal size={13} className="text-[#38bdf8]" />
                  <span>turbo build &amp;&amp; vitals-audit</span>
                </div>
                <div className="space-y-1 text-slate-300">
                  <p><span className="text-emerald-400">&#10003;</span> Compiled Next.js App Router in <span className="text-white font-bold">280ms</span></p>
                  <p><span className="text-emerald-400">&#10003;</span> Zero client hydration lag &bull; Edge cached</p>
                  <p className="text-indigo-300">&#9656; Mobile LCP Target: <span className="text-emerald-400 font-bold">0.74s</span> (99th percentile)</p>
                </div>
              </div>

              {/* Speed Benchmark Display */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1">
                    <Gauge size={14} className="text-emerald-400" /> Performance
                  </div>
                  <p className="text-2xl font-black text-white">100<span className="text-xs text-slate-400 font-normal"> / 100</span></p>
                  <span className="text-[10px] text-emerald-400 font-medium">Google Lighthouse</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1">
                    <Zap size={14} className="text-amber-400" /> First Contentful Paint
                  </div>
                  <p className="text-2xl font-black text-emerald-400">0.4s</p>
                  <span className="text-[10px] text-slate-400 font-medium">Instant Visual Paint</span>
                </div>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {[
                  "Next.js 16 App Router",
                  "TypeScript",
                  "Tailwind CSS",
                  "Edge SSR",
                  "Zero WP Bloat",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-slate-200"
                  >
                    <CheckCircle2 size={11} className="text-emerald-400" />
                    {pill}
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
