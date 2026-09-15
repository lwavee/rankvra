"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Filter,
  MessageCircle,
  Target,
} from "lucide-react";
import Link from "next/link";

export function GoogleAdsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-[#e2e8f0]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-[#2563eb]/10 via-[#06b6d4]/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
            Google Ads &amp; PPC
          </span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1d4ed8] shadow-2xs mb-5">
              <Target size={13} className="text-[#2563eb]" />
              Precision Paid Search &amp; PPC
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl lg:text-[54px] leading-[1.1]">
              Google Ads That Capture{" "}
              <span className="text-gradient">Ready-To-Buy Leads</span>.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              Stop burning ad budget on useless clicks. We build tightly controlled Google Search campaigns with continuous negative keyword sculpting that maximize your commercial ROAS.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all"
              >
                Audit My Existing Ads
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20run%20Google%20Ads."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-semibold text-[#1e293b] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shadow-2xs"
              >
                <MessageCircle size={16} className="text-[#10b981]" />
                WhatsApp Ad Strategist
              </a>
            </div>

            {/* Quick Proof Counters */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e2e8f0] pt-6 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#10b981]">High</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Commercial Intent</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#0f172a]">Zero</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Wasted Clicks</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#4f46e5]">100%</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Conversion Tracked</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Animated Google Ads Optimization Dashboard Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-[#2563eb]/20 via-[#4f46e5]/20 to-[#10b981]/20 blur-xl opacity-75" />

            <div className="relative rounded-[32px] border border-[#e2e8f0] bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Target size={16} className="text-[#2563eb]" />
                  <span className="text-xs font-bold text-[#0f172a]">Live PPC Quality Console</span>
                </div>
                <span className="rounded-full bg-[#ecfeff] border border-[#a5f3fc] px-2.5 py-0.5 text-[10px] font-bold text-[#0891b2]">
                  Exact Match Active
                </span>
              </div>

              {/* Negative Keyword Shield Box */}
              <div className="rounded-2xl border border-[#e0e7ff] bg-[#f8fafc] p-4 mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Filter size={15} className="text-[#4f46e5]" />
                    <span className="text-xs font-bold text-[#0f172a]">Negative Keyword Sculpting</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#166534] bg-[#dcfce7] px-2 py-0.5 rounded-md">1,240+ Filtered</span>
                </div>
                <p className="text-[11px] text-[#64748b] mt-1.5 leading-relaxed">
                  Automatically blocks job seekers, free seekers, and low-intent clicks to protect ad spend.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="rounded-xl border border-[#e2e8f0] bg-white p-3">
                  <p className="text-[10px] font-bold uppercase text-[#64748b]">Ad Quality Score</p>
                  <p className="text-xl font-black text-[#10b981] mt-0.5">10 / 10</p>
                  <span className="text-[10px] text-[#64748b]">Lowest Cost Per Click</span>
                </div>
                <div className="rounded-xl border border-[#e2e8f0] bg-white p-3">
                  <p className="text-[10px] font-bold uppercase text-[#64748b]">Conversion Tracking</p>
                  <p className="text-xl font-black text-[#0f172a] mt-0.5">Live</p>
                  <span className="text-[10px] text-[#4f46e5]">GA4 + Server Events</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f1f5f9]">
                {["Call-Only Ads", "High-Speed Landing Page", "Transparent Reporting"].map((item) => (
                  <span key={item} className="rounded-md bg-[#f1f5f9] px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
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
