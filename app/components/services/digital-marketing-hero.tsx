"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Megaphone,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function DigitalMarketingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#db2777 1px, transparent 1px), linear-gradient(90deg, #db2777 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-0 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-pink-500/10 via-sky-500/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-[70px]" />
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
            Performance Marketing
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-pink-700 shadow-2xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Full-Funnel Commercial Growth</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-slate-950 leading-[1.15]">
              Digital Marketing Linked Directly to{" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Verified Revenue.
              </span>
            </h1>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Every rupee of marketing spend connected to closed sales: high-speed landing pages, Google search intent, and instant WhatsApp qualification.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-pink-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-pink-600/25 hover:bg-pink-700 hover:-translate-y-0.5 transition-all"
              >
                Get Marketing Audit
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20scale%20my%20marketing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-pink-400 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Growth Desk
              </a>
            </div>

            {/* Proof Counters */}
            <div className="mt-4 flex items-center gap-5 border-t border-slate-200/90 pt-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-emerald-600 text-sm">Direct</span>
                <span className="text-slate-500 text-[11px]">Calls &amp; Chats</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-sm">Multi-Chan</span>
                <span className="text-slate-500 text-[11px]">Google + Meta</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-pink-600 text-sm">100%</span>
                <span className="text-slate-500 text-[11px]">ROAS Attribution</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Compact Full-Funnel Conversion Visual */}
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
                  <span className="text-xs font-bold text-slate-900">Full-Funnel Pipeline Architecture</span>
                </div>
                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  Zero Vanity Waste
                </span>
              </div>

              {/* 3 Connected Funnel Stages */}
              <div className="space-y-2 mb-3">
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-200/60">1</span>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Commercial Search &amp; Ads</p>
                      <p className="text-[9px] text-slate-500">Google Search + Meta Retargeting</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-indigo-600">High Intent</span>
                </div>

                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-sky-50 text-sky-700 text-[10px] font-bold border border-sky-200/60">2</span>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Sub-Second Landing Pages</p>
                      <p className="text-[9px] text-slate-500">&lt; 0.8s mobile LCP load time</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-sky-600">0.8s Speed</span>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-2.5 flex items-center justify-between text-xs shadow-2xs">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500 text-white text-[10px] font-bold">3</span>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">Direct WhatsApp / Calls</p>
                      <p className="text-[9px] text-emerald-700">Sales desk push in &lt; 18 seconds</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Closed Sale</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-200/80">
                {["No Vanity Retainers", "GA4 Tracking", "Call Attribution"].map((pill) => (
                  <span key={pill} className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                    &#10003; {pill}
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
