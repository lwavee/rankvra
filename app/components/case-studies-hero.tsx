"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  ChevronRight,
  FolderKanban,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const studies = [
  {
    id: "lakeview",
    name: "Lakeview Heritage Resort",
    metric: "+215% Direct Bookings",
    metricColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    desc: "Cut mobile load time to 0.6s near Lake Pichola, routing guests directly to WhatsApp reservations.",
    slug: "lakeview-heritage-resort",
  },
  {
    id: "mewar",
    name: "Mewar Stone & Marble",
    metric: "19 Container RFQs",
    metricColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
    desc: "B2B natural stone technical specs ranking #1 in US & UAE architectural export queries.",
    slug: "mewar-stone-marble-exports",
  },
  {
    id: "smile",
    name: "Smile Care Dental",
    metric: "Top 3 Maps Rank",
    metricColor: "text-sky-700 bg-sky-50 border-sky-200",
    desc: "Local 3-Pack placement driving a 125% increase in verified patient call inquiries.",
    slug: "smile-care-dental",
  },
];

export function CaseStudiesHero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStudy = studies[activeIdx];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-0 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <span className="text-indigo-600" aria-current="page">
            Case Studies
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column — Concise Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-2xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Verified Client Commercial Work</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-slate-950 leading-[1.15]">
              Case Studies:{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Proven Revenue Outcomes.
              </span>
            </h1>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Proof over promotional hype. Inspect how RankVRA architects custom Next.js web applications, Google Maps 3-Pack rankings, and B2B inquiry funnels with verified commercial impact.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/25 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
              >
                Claim Free Growth Audit
                <ArrowRight size={13} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20reviewed%20your%20case%20studies%20and%20would%20like%20to%20discuss%20our%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-indigo-400 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Naveen
              </a>
            </div>

            {/* Compact Proof Counters */}
            <div className="mt-4 flex items-center gap-5 border-t border-slate-200/90 pt-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-sm">3 Full</span>
                <span className="text-slate-500 text-[11px]">Audited Studies</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-indigo-600 text-sm">100%</span>
                <span className="text-slate-500 text-[11px]">Real Analytics</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-emerald-600 text-sm">0</span>
                <span className="text-slate-500 text-[11px]">Fake Metrics</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Compact Interactive Case Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                    <FolderKanban size={15} />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-900">Client Performance Index</h2>
                    <p className="text-[10px] text-slate-500">Select verified deployment</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Audited
                </span>
              </div>

              {/* Interactive Client Switcher Pills */}
              <div className="grid grid-cols-3 gap-1.5 mb-3">
                {studies.map((s, idx) => {
                  const isSelected = activeIdx === idx;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`rounded-lg py-1.5 px-2 text-center text-[10px] font-bold transition-all truncate ${
                        isSelected
                          ? "bg-indigo-600 text-white shadow-xs border border-indigo-600"
                          : "bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/20"
                      }`}
                    >
                      {s.name.split(" ")[0]}
                    </button>
                  );
                })}
              </div>

              {/* Active Client Outcome Card */}
              <motion.div
                key={activeStudy.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 shadow-2xs text-slate-900"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-xs font-bold text-slate-950 truncate max-w-[180px]">
                    {activeStudy.name}
                  </h3>
                  <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${activeStudy.metricColor}`}>
                    {activeStudy.metric}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug line-clamp-2 mb-2.5">
                  {activeStudy.desc}
                </p>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <TrendingUp size={12} className="text-emerald-600" /> Verified GA4 Outcome
                  </span>
                  <Link
                    href={`/case-studies/${activeStudy.slug}`}
                    className="text-indigo-600 font-bold hover:text-indigo-700 inline-flex items-center gap-1"
                  >
                    Deep Dive <ArrowRight size={11} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
