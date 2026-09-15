"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Megaphone,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export function DigitalMarketingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-[#e2e8f0]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#db2777 1px, transparent 1px), linear-gradient(90deg, #db2777 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-[#db2777]/10 via-[#4f46e5]/10 to-transparent blur-[100px]" />
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
            Performance Digital Marketing
          </span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#fbcfe8] bg-[#fdf2f8] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#be185d] shadow-2xs mb-5">
              <Megaphone size={13} className="text-[#db2777]" />
              Full-Funnel Performance Marketing
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl lg:text-[54px] leading-[1.1]">
              Digital Marketing Linked Directly to{" "}
              <span className="text-gradient">Verified Pipeline</span>.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              Tired of agencies reporting meaningless impressions? We link every rupee of marketing spend directly to your sales desk: verified phone calls, WhatsApp leads, and paying clients.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all"
              >
                Get Free Marketing Audit
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20scale%20my%20marketing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-semibold text-[#1e293b] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shadow-2xs"
              >
                <MessageCircle size={16} className="text-[#10b981]" />
                WhatsApp Growth Desk
              </a>
            </div>

            {/* Proof Counters */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e2e8f0] pt-6 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#10b981]">Direct</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Phone Inquiries</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#0f172a]">Multi-Chan</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Google + Meta Funnels</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#4f46e5]">100%</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">ROAS Attribution</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Full-Funnel Conversion Visual Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-[#db2777]/20 via-[#4f46e5]/20 to-[#10b981]/20 blur-xl opacity-75" />

            <div className="relative rounded-[32px] border border-[#e2e8f0] bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3 mb-4">
                <span className="text-xs font-bold text-[#0f172a]">Full-Funnel Pipeline Architecture</span>
                <span className="rounded-full bg-[#f0fdf4] border border-[#bbf7d0] px-2 py-0.5 text-[10px] font-bold text-[#166534]">
                  Zero Vanity Waste
                </span>
              </div>

              {/* 3 Connected Funnel Stages */}
              <div className="space-y-3 mb-4">
                <div className="rounded-xl border border-[#e0e7ff] bg-[#f8fafc] p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eef2ff] text-[#4f46e5] text-xs font-bold">1</span>
                    <div>
                      <p className="text-xs font-bold text-[#0f172a]">Commercial Search &amp; Ads</p>
                      <p className="text-[10px] text-[#64748b]">Google Search + Meta Retargeting</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#4f46e5]">High-Intent</span>
                </div>

                <div className="rounded-xl border border-[#e0e7ff] bg-[#f8fafc] p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ecfeff] text-[#0891b2] text-xs font-bold">2</span>
                    <div>
                      <p className="text-xs font-bold text-[#0f172a]">Sub-Second Dedicated Landing Page</p>
                      <p className="text-[10px] text-[#64748b]">&lt; 0.8s mobile LCP load time</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#0891b2]">Core Web Vitals</span>
                </div>

                <div className="rounded-xl border-2 border-[#10b981] bg-[#f0fdf4] p-3 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#10b981] text-white text-xs font-bold">3</span>
                    <div>
                      <p className="text-xs font-bold text-[#0f172a]">Direct WhatsApp / Call Routing</p>
                      <p className="text-[10px] text-[#166534]">Inquiry hits sales desk in &lt; 30 seconds</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#166534] bg-[#dcfce7] px-2 py-0.5 rounded-md">Closed Sale</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f1f5f9]">
                {["No Vanity Retainers", "GA4 Tracking", "Call Attribution", "Founder-Led"].map((pill) => (
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
