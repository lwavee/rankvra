"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  ChevronRight,
  FileCheck2,
  Filter,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const liveB2bTransactions = [
  {
    company: "Al-Noor Architectural",
    location: "Dubai, UAE",
    requirement: "4x 20ft Containers White Marble Slabs",
    value: "₹22,50,000",
    status: "GST & Spec Verified",
    time: "2m ago",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    company: "Apex Precision Dynamics",
    location: "Pune, MH",
    requirement: "Annual CNC Machining Subcontract RFQ",
    value: "₹48,00,000",
    status: "Corporate Domain Pass",
    time: "8m ago",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    company: "Nordic Stone Importers",
    location: "Hamburg, Germany",
    requirement: "12 Containers Green Marble Slabs",
    value: "₹65,00,000",
    status: "IEC Verified Exporter",
    time: "14m ago",
    badge: "bg-teal-50 text-teal-700 border-teal-200",
  },
];

export function B2BLeadGenHero() {
  const [activeTx, setActiveTx] = useState(0);

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
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-gradient-to-bl from-teal-500/10 via-indigo-600/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[75px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-teal-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <span className="text-teal-700" aria-current="page">
            B2B Lead Generation
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column — Short High-Impact Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-700 shadow-2xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Live B2B Inbound Acquisition</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-slate-950 leading-[1.16]">
              Predictable B2B Leads.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-emerald-600">
                Qualified High-Ticket RFQs.
              </span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              High-intent search funnels and gated qualification systems that deliver corporate buyers and high-value tender inquiries directly to your sales desk.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-teal-600/25 hover:opacity-95 hover:-translate-y-0.5 transition-all"
              >
                Audit B2B Funnel
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20interested%20in%20B2B%20lead%20generation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:border-teal-500 hover:text-teal-700 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Direct
              </a>
            </div>

            {/* Quick Proof Strip */}
            <div className="mt-5 pt-3.5 border-t border-slate-200/90 grid grid-cols-3 gap-3 max-w-md">
              <div>
                <div className="text-base sm:text-lg font-black text-slate-900">₹15L+</div>
                <div className="text-[10px] font-semibold text-slate-500">Avg Deal Size</div>
              </div>
              <div className="border-l border-slate-200 pl-3">
                <div className="text-base sm:text-lg font-black text-teal-600">94%</div>
                <div className="text-[10px] font-semibold text-slate-500">Decision Makers</div>
              </div>
              <div className="border-l border-slate-200 pl-3">
                <div className="text-base sm:text-lg font-black text-emerald-600">0 Spam</div>
                <div className="text-[10px] font-semibold text-slate-500">GST Gated</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Live Inbound Transactions Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
              {/* Header with Live Status */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-700 border border-teal-200">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      Live Inbound RFQ Engine
                      <Sparkles size={13} className="text-teal-600" />
                    </h2>
                    <p className="text-[10px] text-slate-500">Corporate Qualification Gate Active</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live RFQs
                </span>
              </div>

              {/* Active Transaction Display */}
              <div className="rounded-xl border border-teal-200/90 bg-teal-50/40 p-3 mb-3 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-teal-800 text-[11px] flex items-center gap-1.5">
                    <FileCheck2 size={13} className="text-teal-600" />
                    {liveB2bTransactions[activeTx].status}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">
                    {liveB2bTransactions[activeTx].time}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-950">
                      {liveB2bTransactions[activeTx].company}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {liveB2bTransactions[activeTx].location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs sm:text-sm font-black text-emerald-600">
                      {liveB2bTransactions[activeTx].value}
                    </p>
                    <p className="text-[9px] text-slate-400 font-medium">Est. Contract</p>
                  </div>
                </div>
                <p className="mt-2 text-[11px] text-slate-700 font-mono bg-white p-2 rounded-lg border border-slate-200/80">
                  📦 {liveB2bTransactions[activeTx].requirement}
                </p>
              </div>

              {/* Live Transaction Switcher Tabs */}
              <div className="space-y-1.5 mb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Recent High-Value Inbound Streams
                </p>
                {liveB2bTransactions.map((tx, idx) => (
                  <button
                    key={tx.company}
                    onClick={() => setActiveTx(idx)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all border ${
                      activeTx === idx
                        ? "border-teal-500 bg-teal-50/60 text-slate-950"
                        : "border-slate-200/80 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${activeTx === idx ? "bg-teal-500" : "bg-slate-300"}`} />
                      <span className="font-semibold">{tx.company}</span>
                    </div>
                    <span className="font-mono font-bold text-teal-700 text-[11px]">{tx.value}</span>
                  </button>
                ))}
              </div>

              {/* Qualification Engine Footer */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <ShieldCheck size={13} className="text-teal-600" />
                  Domain &amp; GST Gate Enforced
                </span>
                <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <Zap size={12} />
                  &lt; 30s Sales Push
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
