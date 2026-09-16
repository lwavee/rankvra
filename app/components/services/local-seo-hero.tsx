"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export function LocalSeoHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-0 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-transparent blur-[80px]" />
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
            Local SEO
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 shadow-2xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Google Maps 3-Pack Authority</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-slate-950 leading-[1.15]">
              Rank in the{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
                Top 3 on Google Maps.
              </span>
            </h1>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Over 70% of local customer calls go to the top 3 Google Map listings. We optimize your business profile and local citations so high-value clients call you first.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all"
              >
                Claim Free Local Audit
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20rank%20on%20Google%20Maps."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-emerald-400 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Naveen
              </a>
            </div>

            {/* Counters */}
            <div className="mt-4 flex items-center gap-5 border-t border-slate-200/90 pt-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-emerald-600 text-sm">Top 3</span>
                <span className="text-slate-500 text-[11px]">Map Position</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-sm">70%</span>
                <span className="text-slate-500 text-[11px]">Call Capture</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-indigo-600 text-sm">40+</span>
                <span className="text-slate-500 text-[11px]">Citations Synced</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Compact Google 3-Pack Map Simulation Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-emerald-600 animate-bounce" />
                  <span className="text-xs font-bold text-slate-900">Google Maps Local Radar</span>
                </div>
                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping inline-block mr-1" />
                  3-Pack Winner
                </span>
              </div>

              {/* Simulated Top Listing */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-3 mb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-950">RankVRA Local Business Partner</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-xs font-bold text-amber-500">4.9</span>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={10} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-500">(140+ verified reviews)</span>
                    </div>
                    <p className="text-[10px] text-slate-600 mt-0.5">Udaipur, Rajasthan &bull; Open Now &bull; WhatsApp Desk</p>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold shadow-xs">
                    <Phone size={12} />
                  </span>
                </div>
              </div>

              {/* Verified Metrics */}
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-center">
                  <span className="text-[10px] text-slate-500 font-semibold">Monthly Phone Calls</span>
                  <p className="text-lg font-black text-emerald-600 mt-0.5">+125% Lift</p>
                  <span className="text-[10px] text-slate-400">Smile Care Dental</span>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-center">
                  <span className="text-[10px] text-slate-500 font-semibold">NAP Citations</span>
                  <p className="text-lg font-black text-slate-900 mt-0.5">40+ Hubs</p>
                  <span className="text-[10px] text-indigo-600 font-semibold">100% Synced</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
