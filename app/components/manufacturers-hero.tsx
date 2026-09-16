"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const liveManufacturerTransactions = [
  {
    factory: "Mewar Industrial Minerals",
    location: "Sukher Industrial Area, Udaipur",
    product: "250 MT Micronized Calcite Powder (Grade A)",
    value: "₹18,50,000 PO",
    buyer: "Polymer Chem Corp (Gujarat)",
    time: "6m ago",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  {
    factory: "Rajsamand Precision Granite",
    location: "Rajsamand Industrial Zone",
    product: "8 Gangsaw Black Galaxy Granite Slabs (18mm)",
    value: "₹34,00,000 RFQ",
    buyer: "Commercial EPC Infra (Hyderabad)",
    time: "17m ago",
    badge: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  },
  {
    factory: "Rajasthan Heavy Engineering",
    location: "Gudli Industrial Area, Udaipur",
    product: "Fabricated Ball Mill Gears & Spares",
    value: "₹52,00,000 Tender",
    buyer: "Cement Plant Procurement (MP)",
    time: "29m ago",
    badge: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  },
];

export function ManufacturersHero() {
  const [activeMfg, setActiveMfg] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      {/* Background Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f766e 1px, transparent 1px), linear-gradient(90deg, #0f766e 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-gradient-to-bl from-teal-500/10 via-indigo-500/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[75px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-teal-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <Link href="/services" className="hover:text-teal-600 transition-colors">
            Industries
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <span className="text-teal-700 font-bold" aria-current="page">
            Manufacturing &amp; Industrial
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column — Short Punchy Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-800 shadow-xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Industrial B2B Growth Engine</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-slate-950 leading-[1.16]">
              Manufacturing SEO.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-emerald-600">
                Capture High-Ticket RFQs.
              </span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl font-normal">
              Attract corporate procurement heads, EPC contractors, and bulk distributors with structured product spec sheets, B2B search authority, and gated quote funnels.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-teal-600/25 hover:bg-teal-700 hover:-translate-y-0.5 transition-all"
              >
                Audit Manufacturing Funnel
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20a%20manufacturer%20and%20want%20to%20generate%20B2B%20inquiries."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-teal-500 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Direct
              </a>
            </div>

            {/* Quick Proof Counters */}
            <div className="mt-5 pt-3.5 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-md">
              <div>
                <div className="text-base sm:text-lg font-black text-slate-950">₹20L+</div>
                <div className="text-[10px] font-semibold text-slate-500">Avg B2B Order</div>
              </div>
              <div className="border-l border-slate-200/80 pl-3">
                <div className="text-base sm:text-lg font-black text-teal-700">100%</div>
                <div className="text-[10px] font-semibold text-slate-500">Commercial Intent</div>
              </div>
              <div className="border-l border-slate-200/80 pl-3">
                <div className="text-base sm:text-lg font-black text-emerald-700">0 Junk</div>
                <div className="text-[10px] font-semibold text-slate-500">Gated Leads</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Live Manufacturing Transactions HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-[22px] border border-slate-200/80 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-600 border border-teal-200">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      Live Procurement Telemetry
                      <Sparkles size={13} className="text-teal-600" />
                    </h2>
                    <p className="text-[10px] text-slate-500">Commercial Tender &amp; RFQ Stream</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live RFQs
                </span>
              </div>

              {/* Active Transaction Detail */}
              <div className="rounded-xl border border-teal-200/80 bg-teal-50/40 p-3 mb-3">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-teal-800 text-[11px] flex items-center gap-1.5">
                    <FileCheck2 size={13} className="text-teal-600" />
                    {liveManufacturerTransactions[activeMfg].buyer}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">
                    {liveManufacturerTransactions[activeMfg].time}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-950">
                      {liveManufacturerTransactions[activeMfg].factory}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {liveManufacturerTransactions[activeMfg].location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs sm:text-sm font-black text-emerald-700">
                      {liveManufacturerTransactions[activeMfg].value}
                    </p>
                    <p className="text-[9px] text-slate-500 font-medium">Verified Contract</p>
                  </div>
                </div>
                <p className="mt-2 text-[11px] text-teal-900 font-mono bg-white p-2 rounded-lg border border-teal-100">
                  ⚙️ {liveManufacturerTransactions[activeMfg].product}
                </p>
              </div>

              {/* Transaction Selector */}
              <div className="space-y-1.5 mb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Recent Verified Wholesale Orders
                </p>
                {liveManufacturerTransactions.map((mfg, idx) => (
                  <button
                    key={mfg.factory}
                    onClick={() => setActiveMfg(idx)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all border ${
                      activeMfg === idx
                        ? "border-teal-300 bg-teal-50/80 text-teal-950 shadow-2xs"
                        : "border-slate-100 bg-slate-50/60 text-slate-600 hover:border-slate-200 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${activeMfg === idx ? "bg-teal-600" : "bg-slate-400"}`} />
                      <span className="font-semibold">{mfg.factory}</span>
                    </div>
                    <span className="font-mono font-bold text-teal-700 text-[11px]">{mfg.value.split(" ")[0]}</span>
                  </button>
                ))}
              </div>

              {/* Manufacturing Bar Footer */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <ShieldCheck size={13} className="text-teal-600" />
                  Corporate GST &amp; IEC Gate Active
                </span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <Zap size={12} />
                  Instant WhatsApp Push
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
