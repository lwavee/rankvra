"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Languages,
  MessageCircle,
  Network,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const liveGlobalRankings = [
  {
    country: "United States",
    code: "🇺🇸 US",
    query: '"green marble supplier usa"',
    rank: "Rank #1",
    delta: "+240% Traffic",
    engine: "Google.com",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    country: "United Arab Emirates",
    code: "🇦🇪 UAE",
    query: '"custom villa marble slabs dubai"',
    rank: "Rank #1",
    delta: "₹42L RFQ Inbound",
    engine: "Google.ae",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    country: "United Kingdom",
    code: "🇬🇧 UK",
    query: '"natural stone exporter uk"',
    rank: "Rank #2",
    delta: "+185% Overseas Leads",
    engine: "Google.co.uk",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

export function InternationalSeoHero() {
  const [activeMarket, setActiveMarket] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      {/* Background Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(90deg, #0284c7 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-gradient-to-bl from-sky-500/10 via-indigo-600/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[75px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-sky-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <span className="text-sky-700" aria-current="page">
            International SEO
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column — Concise High-Conversion Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700 shadow-2xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Global Organic SERP Architecture</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-slate-950 leading-[1.16]">
              International SEO.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-teal-600">
                Dominate Overseas Search.
              </span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Rank in the US, UAE, UK, and European markets with technical multi-region hreflang architecture, geo-targeted content, and sub-second edge routing.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-sky-600/25 hover:opacity-95 hover:-translate-y-0.5 transition-all"
              >
                Get Global SEO Audit
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20interested%20in%20international%20SEO."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:border-sky-500 hover:text-sky-700 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Global Desk
              </a>
            </div>

            {/* Quick Proof Counters */}
            <div className="mt-5 pt-3.5 border-t border-slate-200/90 grid grid-cols-3 gap-3 max-w-md">
              <div>
                <div className="text-base sm:text-lg font-black text-slate-900">US &amp; UAE</div>
                <div className="text-[10px] font-semibold text-slate-500">Core Market Hubs</div>
              </div>
              <div className="border-l border-slate-200 pl-3">
                <div className="text-base sm:text-lg font-black text-sky-600">100%</div>
                <div className="text-[10px] font-semibold text-slate-500">Hreflang Valid</div>
              </div>
              <div className="border-l border-slate-200 pl-3">
                <div className="text-base sm:text-lg font-black text-emerald-600">&lt; 320ms</div>
                <div className="text-[10px] font-semibold text-slate-500">Global Edge TTFB</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Global Multi-Region Live Telemetry Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-700 border border-sky-200">
                    <Globe size={16} className="animate-spin" style={{ animationDuration: "16s" }} />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      Global SERP Telemetry
                      <Sparkles size={13} className="text-sky-600" />
                    </h2>
                    <p className="text-[10px] text-slate-500">Multi-Region Edge Node Sync Active</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Sync
                </span>
              </div>

              {/* Active Market Focus Card */}
              <div className="rounded-xl border border-sky-200/90 bg-sky-50/40 p-3 mb-3">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-sky-800 text-[11px] flex items-center gap-1.5">
                    <Network size={13} className="text-sky-600" />
                    {liveGlobalRankings[activeMarket].engine}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${liveGlobalRankings[activeMarket].badge}`}>
                    {liveGlobalRankings[activeMarket].rank}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-950">
                      {liveGlobalRankings[activeMarket].code} • {liveGlobalRankings[activeMarket].country}
                    </p>
                    <p className="text-[11px] text-slate-600 font-mono mt-0.5">
                      {liveGlobalRankings[activeMarket].query}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs sm:text-sm font-black text-emerald-600">
                      {liveGlobalRankings[activeMarket].delta}
                    </p>
                    <p className="text-[9px] text-slate-400 font-medium">Overseas Inbound</p>
                  </div>
                </div>
              </div>

              {/* Regional Market Selector */}
              <div className="space-y-1.5 mb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Verified International Search Hubs
                </p>
                {liveGlobalRankings.map((market, idx) => (
                  <button
                    key={market.country}
                    onClick={() => setActiveMarket(idx)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all border ${
                      activeMarket === idx
                        ? "border-sky-500 bg-sky-50/60 text-slate-950"
                        : "border-slate-200/80 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{market.code}</span>
                      <span className="text-slate-500 text-[11px]">{market.engine}</span>
                    </div>
                    <span className="font-mono font-bold text-emerald-600 text-[11px]">{market.rank}</span>
                  </button>
                ))}
              </div>

              {/* Technical Architecture Strip */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <Languages size={13} className="text-sky-600" />
                  Hreflang en-us | en-ae | en-gb
                </span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <Zap size={12} />
                  100% Passed
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
