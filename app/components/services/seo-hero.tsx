"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Flame,
  Globe,
  MessageCircle,
  Search,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const liveTransactions = [
  {
    type: "SERP Win",
    title: "Position #1 Achieved",
    query: '"luxury lake view resort udaipur"',
    metric: "+215% Bookings",
    time: "4s ago",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    type: "Export RFQ",
    title: "19 Container Inquiry",
    query: '"green marble exporter usa"',
    metric: "₹38.5L Pipeline",
    time: "1m ago",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    type: "Local 3-Pack",
    title: "Call Connected via Maps",
    query: '"implant dentist near me"',
    metric: "Direct Booking",
    time: "3m ago",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
];

export function SeoHero() {
  const [activeTx, setActiveTx] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-11 border-b border-slate-200/80">
      {/* Light Mesh Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-60 w-60 rounded-full bg-emerald-500/10 blur-[70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
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
            SEO Engineering
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column — Short, Punchy, High-Traction */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-2xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Live Search Engine Traction</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-slate-950 leading-[1.15]">
              Rank Page 1 on Google.{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Capture Verified Inquiries.
              </span>
            </h1>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Technical crawl architecture, semantic entity schema, and zero-spam topical authority that turn commercial search clicks into paying clients.
            </p>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/25 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
              >
                Claim Free SEO Audit
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20dominate%20Google%20Page%201."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-indigo-400 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Naveen
              </a>
            </div>

            {/* Live Metrics Ticker Bar */}
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-200/90 pt-3 max-w-md">
              <div>
                <div className="text-base sm:text-lg font-black text-emerald-600">#1 Organic</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">High-Intent SERP</div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-black text-indigo-600">&lt; 0.8s</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">Mobile Crawl LCP</div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-black text-slate-900">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">Google Schema Valid</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Light Live Transaction & SERP Graph Deck */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
              {/* Header: Console Status */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200/60">
                    <Zap size={13} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-none">RankVRA SERP Telemetry</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Live Inquiries Stream</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Feeds
                </span>
              </div>

              {/* Animated Live Climb SVG Graph */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 mb-3 relative overflow-hidden">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="font-semibold text-slate-700">Commercial Keyword Climb (30-Day Arc)</span>
                  <span className="font-black text-emerald-600 flex items-center gap-0.5">
                    <TrendingUp size={11} /> +340% Traffic
                  </span>
                </div>

                {/* SVG Curve Graphic */}
                <div className="h-14 w-full relative flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60" fill="none">
                    <path
                      d="M0 50 Q 60 45, 110 32 T 200 18 T 300 6"
                      stroke="#4f46e5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 50 Q 60 45, 110 32 T 200 18 T 300 6 L 300 60 L 0 60 Z"
                      fill="url(#gradient-area-light)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="gradient-area-light" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <circle cx="300" cy="6" r="4" fill="#10b981" />
                  </svg>
                  <span className="absolute right-0 top-0 rounded-md bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 text-[9px] font-extrabold text-emerald-700">
                    Pos #1
                  </span>
                </div>
              </div>

              {/* Live Transactions List */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500 font-bold px-1">
                  <span>Verified Conversion Events</span>
                  <span>Impact Value</span>
                </div>
                {liveTransactions.map((tx, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTx(idx)}
                    className={`cursor-pointer rounded-xl border p-2.5 transition-all flex items-center justify-between ${
                      activeTx === idx
                        ? "border-indigo-400 bg-indigo-50/40 shadow-xs"
                        : "border-slate-200/70 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`rounded-md border px-1.5 py-0.5 text-[9px] font-bold ${tx.badge}`}>
                        {tx.type}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{tx.title}</p>
                        <p className="text-[10px] text-slate-500 font-mono truncate max-w-[170px] sm:max-w-[210px]">{tx.query}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black text-emerald-600">{tx.metric}</p>
                      <p className="text-[9px] text-slate-400">{tx.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
