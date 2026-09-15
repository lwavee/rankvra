"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  MessageCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle modern background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-[#e0e7ff]/60 to-[#c7d2fe]/30 blur-[120px]" />
        <div className="absolute bottom-10 left-10 h-[320px] w-[320px] rounded-full bg-[#f0fdf4]/80 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          {/* Left Column — High-Impact Concise Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* Live Status Pill */}
            <div className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#e0e7ff] bg-[#f8fafc] px-3.5 py-1.5 text-xs font-semibold text-[#4f46e5] shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Next.js Web Engineering &bull; Google Page 1 SEO &bull; Udaipur HQ</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl lg:text-[56px] leading-[1.12]">
              High-Speed Websites &amp;{" "}
              <span className="text-gradient">Google SEO That Generate Inquiries</span>.
            </h1>

            {/* Scannable 2-sentence micro-copy */}
            <p className="mt-5 max-w-xl text-base text-[#475569] sm:text-lg leading-relaxed">
              We build custom Next.js web applications that load in under 1 second, dominate Google search results, and convert visitors into verified customer phone calls and WhatsApp leads.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4338ca] hover:shadow-xl"
              >
                Claim Free Growth Audit
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20discuss%20growing%20my%20business%20with%20RankVRA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-7 py-3.5 text-sm font-semibold text-[#1e293b] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4f46e5] hover:text-[#4f46e5]"
              >
                <MessageCircle size={16} className="text-[#10b981]" />
                WhatsApp Naveen Direct
              </a>
            </div>

            {/* 3 Micro-Proof Badges */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e2e8f0] pt-6 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#0f172a]">&lt;0.8s</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Mobile LCP</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#0f172a]">100%</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Custom Code</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#10b981]">Top 3</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Google Maps</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Sleek Interactive-Style Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1.5 rounded-[36px] bg-gradient-to-r from-[#4f46e5]/20 via-[#06b6d4]/20 to-[#10b981]/20 blur-xl opacity-70" />

            <div className="relative rounded-[32px] border border-[#e2e8f0] bg-white p-6 sm:p-7 shadow-2xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f172a] p-1.5 shadow-sm">
                    <Image
                      src="/logo-icon.png"
                      alt="RankVRA"
                      width={28}
                      height={28}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0f172a]">RankVRA Telemetry Hub</p>
                    <p className="text-[10px] text-[#64748b]">Founder-Led Engineering</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] px-2.5 py-1 text-[10px] font-bold text-[#166534]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" /> Live Audit
                </span>
              </div>

              {/* Speed & Vitals Box */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] p-5 text-white shadow-md relative overflow-hidden mb-4">
                <div className="absolute top-0 right-0 h-32 w-32 bg-[#4f46e5]/30 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                      Core Web Vitals Benchmark
                    </span>
                    <p className="text-3xl sm:text-4xl font-black mt-1 tracking-tight text-white">
                      100<span className="text-sm font-semibold text-emerald-400 ml-1">/ 100 Score</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-300 font-medium">LCP Latency</span>
                    <p className="text-xl font-bold text-[#10b981]">0.74s</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <span>Zero Bloated WP Plugins</span>
                  <span className="font-semibold text-white">Clean Next.js 16 SSR</span>
                </div>
              </div>

              {/* Grid with 2 Mini Feature Tiles */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f172a] mb-1">
                    <Globe size={14} className="text-[#4f46e5]" /> Google 3-Pack
                  </div>
                  <p className="text-[11px] text-[#64748b]">Top 3 map placement for commercial buyer intent.</p>
                </div>
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f172a] mb-1">
                    <Zap size={14} className="text-[#10b981]" /> WhatsApp Bot
                  </div>
                  <p className="text-[11px] text-[#64748b]">Under 30-sec instant lead qualification &amp; CRM push.</p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                {[
                  "Next.js 16",
                  "TypeScript",
                  "Local SEO",
                  "Schema JSON-LD",
                  "Direct Ownership",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="inline-block rounded-md bg-[#f1f5f9] px-2.5 py-1 text-[10px] font-semibold text-[#475569]"
                  >
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
