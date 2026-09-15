"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import Link from "next/link";

export function LocalSeoHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-[#e2e8f0]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-[#10b981]/10 via-[#4f46e5]/10 to-transparent blur-[100px]" />
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
            Local SEO &amp; Google Maps
          </span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#166534] shadow-2xs mb-5">
              <MapPin size={13} className="text-[#16a34a]" />
              Google Maps 3-Pack Optimization
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl lg:text-[54px] leading-[1.1]">
              Rank in the <span className="text-gradient">Top 3 on Google Maps</span> in Udaipur.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              Over 70% of local customer phone calls go to the top 3 Google Map listings. We optimize your Google Business Profile and local citations so customers find you first.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all"
              >
                Claim Free Local SEO Audit
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20rank%20on%20Google%20Maps."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-semibold text-[#1e293b] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shadow-2xs"
              >
                <MessageCircle size={16} className="text-[#10b981]" />
                WhatsApp Naveen Direct
              </a>
            </div>

            {/* Counters */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e2e8f0] pt-6 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#10b981]">Top 3</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Google 3-Pack</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#0f172a]">70%</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Direct Call Capture</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#4f46e5]">Udaipur</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">HQ Verified 313001</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Google 3-Pack Map Simulation Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-[#10b981]/25 via-[#4f46e5]/20 to-[#06b6d4]/20 blur-xl opacity-75" />

            <div className="relative rounded-[32px] border border-[#e2e8f0] bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-rose-500" />
                  <span className="text-xs font-bold text-[#0f172a]">Google Maps Local Pack</span>
                </div>
                <span className="rounded-full bg-[#f0fdf4] border border-[#bbf7d0] px-2 py-0.5 text-[10px] font-bold text-[#166534]">
                  3-Pack Winner
                </span>
              </div>

              {/* Simulated Top Listing */}
              <div className="rounded-2xl border-2 border-[#4f46e5] bg-[#f8fafc] p-4 mb-3 shadow-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#0f172a]">RankVRA Client Business</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs font-bold text-amber-600">4.9</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#64748b]">(120+ verified reviews)</span>
                    </div>
                    <p className="text-[11px] text-[#64748b] mt-1">Udaipur, Rajasthan &bull; Open 24 Hours</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4f46e5] text-white shadow-xs">
                      <Phone size={13} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Metrics */}
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                <div className="rounded-xl border border-[#e2e8f0] bg-white p-3">
                  <p className="text-[10px] font-bold text-[#64748b] uppercase">Monthly Phone Calls</p>
                  <p className="text-lg font-black text-[#10b981]">+125%</p>
                  <span className="text-[10px] text-[#64748b]">Verified Smile Care Data</span>
                </div>
                <div className="rounded-xl border border-[#e2e8f0] bg-white p-3">
                  <p className="text-[10px] font-bold text-[#64748b] uppercase">NAP Citations</p>
                  <p className="text-lg font-black text-[#0f172a]">40+ Sites</p>
                  <span className="text-[10px] text-[#4f46e5]">100% Consistent</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f1f5f9]">
                {["Category Fix", "Geo-Tagged Photos", "Review Funnel", "Local Schema"].map((item) => (
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
