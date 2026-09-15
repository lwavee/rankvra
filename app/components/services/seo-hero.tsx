"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  MessageCircle,
  Search,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export function SeoHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-[#e2e8f0]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-[#4f46e5]/10 via-[#10b981]/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
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
            SEO &amp; Search Authority
          </span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] shadow-2xs mb-5">
              <Globe size={13} className="text-[#4f46e5]" />
              Technical &amp; Entity SEO
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl lg:text-[54px] leading-[1.1]">
              Rank on Page 1 for{" "}
              <span className="text-gradient">Ready-To-Buy Keywords</span>.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              We don&apos;t chase vanity search volume. We architect technical crawl foundations and entity schemas that rank your business for high-intent queries that generate calls.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all"
              >
                Claim Free SEO Audit
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20rank%20higher%20on%20Google."
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
                <p className="text-xl sm:text-2xl font-black text-[#10b981]">Page 1</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">High-Intent Queries</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#0f172a]">100%</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Schema Verified</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#4f46e5]">Zero</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Black-Hat Risks</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Animated Google Search Snippet Simulation Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-[#4f46e5]/20 via-[#10b981]/20 to-[#06b6d4]/20 blur-xl opacity-75" />

            <div className="relative rounded-[32px] border border-[#e2e8f0] bg-white p-6 shadow-2xl">
              {/* Search Bar Simulation */}
              <div className="flex items-center gap-3 rounded-full border border-[#cbd5e1] bg-[#f8fafc] px-4 py-2.5 mb-5 shadow-inner">
                <Search size={15} className="text-[#4f46e5]" />
                <span className="text-xs font-medium text-[#0f172a]">commercial buyer query</span>
                <span className="ml-auto text-[10px] font-bold text-[#10b981] bg-[#dcfce7] px-2 py-0.5 rounded-full">Position #1</span>
              </div>

              {/* SERP Snippet Box */}
              <div className="rounded-2xl border border-[#e0e7ff] bg-[#f8fafc] p-4 mb-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0f172a] text-[9px] font-bold text-white">R</div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#0f172a] leading-none">RankVRA Partner Entity</p>
                    <p className="text-[10px] text-[#64748b]">https://www.yourdomain.com</p>
                  </div>
                </div>
                <h3 className="text-sm font-bold text-[#1e40af] hover:underline cursor-pointer">
                  Direct Inbound Supplier &bull; Verified Production Capacity
                </h3>
                <p className="mt-1 text-xs text-[#475569] leading-relaxed">
                  Engineered with structured schema, sub-second mobile speeds, and verified technical specifications for high-intent commercial buyers.
                </p>
              </div>

              {/* Crawl Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="rounded-xl border border-[#e2e8f0] bg-white p-3">
                  <p className="text-[10px] font-bold uppercase text-[#64748b]">Click-Through Rate</p>
                  <p className="text-xl font-black text-[#0f172a] mt-0.5">34.2%</p>
                  <span className="text-[10px] font-semibold text-[#10b981] flex items-center gap-0.5">
                    <TrendingUp size={11} /> Top Result Lift
                  </span>
                </div>
                <div className="rounded-xl border border-[#e2e8f0] bg-white p-3">
                  <p className="text-[10px] font-bold uppercase text-[#64748b]">Google Schema</p>
                  <p className="text-xl font-black text-[#10b981] mt-0.5">Valid</p>
                  <span className="text-[10px] font-semibold text-[#4f46e5]">Rich Snippets Enabled</span>
                </div>
              </div>

              {/* Features Pill */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f1f5f9]">
                {["Topical Clusters", "Entity Schema", "Zero Penalty", "Mobile-First"].map((pill) => (
                  <span key={pill} className="rounded-md bg-[#f1f5f9] px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
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
