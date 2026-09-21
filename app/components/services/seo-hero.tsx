"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Globe,
  Layers,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";

const seoPillars = [
  {
    type: "Architecture",
    title: "Schema Graph Engineering",
    detail: "Organization, Person, Service & BreadcrumbList JSON-LD",
    metric: "100% Validated",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    type: "Crawlability",
    title: "Crawl Budget & Rendering",
    detail: "Server-side rendering, sitemap architecture & canonicals",
    metric: "Zero Leaks",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    type: "Content",
    title: "Topical Intent Clusters",
    detail: "Comprehensive commercial query mapping without keyword stuffing",
    metric: "Intent Mapped",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

export function SeoHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-slate-200/80">
      {/* Light Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-60 w-60 rounded-full bg-emerald-500/10 blur-[70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumbs" className="mb-4 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <Link href="/services" className="hover:text-indigo-600 transition-colors">
            Services
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <span className="text-indigo-600" aria-current="page">
            SEO Services
          </span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-2xs mb-3.5">
              <ShieldCheck size={13} className="text-indigo-600" />
              <span>Ethical White-Hat Search Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-slate-950 leading-[1.14]">
              SEO Services Built for{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Sustainable Organic Inquiries.
              </span>
            </h1>

            <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              RankVRA delivers technical search optimization, semantic entity schemas, and commercial topical authority that help businesses in India and internationally win qualified client inquiries from Google.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/free-website-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/25 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
              >
                Claim Free SEO Audit
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20discuss%20an%20SEO%20strategy%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-indigo-400 transition-all shadow-2xs"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                WhatsApp Naveen
              </a>
            </div>

            {/* Principles Bar */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200/90 pt-4 max-w-md">
              <div>
                <div className="text-sm sm:text-base font-black text-emerald-600">Zero Black-Hat</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">Google Spam Compliant</div>
              </div>
              <div>
                <div className="text-sm sm:text-base font-black text-indigo-600">JSON-LD</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">Schema Graph @id</div>
              </div>
              <div>
                <div className="text-sm sm:text-base font-black text-slate-900">Commercial</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500">High-Intent Keywords</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[24px] border border-slate-200 bg-white/95 backdrop-blur-md p-5 sm:p-6 shadow-xl shadow-slate-900/5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200/60">
                    <Search size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-none">Search Architecture Console</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Googlebot Optimization Standards</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  White-Hat
                </span>
              </div>

              {/* Pillars List */}
              <div className="space-y-3">
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold px-1">
                  Core Search Deliverables
                </div>
                {seoPillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-3 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`rounded-md border px-1.5 py-0.5 text-[9px] font-bold ${item.badge}`}>
                          {item.type}
                        </span>
                        <p className="text-xs font-bold text-slate-900">{item.title}</p>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">{item.detail}</p>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <span className="text-xs font-black text-emerald-700">{item.metric}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Need specific technical SEO fixes?</span>
                <Link
                  href="/services/technical-seo"
                  className="font-bold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  Technical SEO &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
