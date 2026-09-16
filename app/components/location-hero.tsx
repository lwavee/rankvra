"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export interface LocationHeroProps {
  locationName: string;
  badgeText: string;
  title: React.ReactNode;
  description: string;
  breadcrumbLabel: string;
  parentLocationPath?: string;
  parentLocationLabel?: string;
  coordinatesText: string;
  auditCtaText?: string;
  whatsappMessage: string;
  proofCounters: Array<{ value: string; label: string; highlightColor?: string }>;
  localHubs: Array<{ name: string; sector: string; tag: string }>;
}

export function LocationHero({
  locationName,
  badgeText,
  title,
  description,
  breadcrumbLabel,
  parentLocationPath,
  parentLocationLabel,
  coordinatesText,
  auditCtaText = "Get Free Local SEO Audit",
  whatsappMessage,
  proofCounters,
  localHubs,
}: LocationHeroProps) {
  const [selectedHub, setSelectedHub] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      {/* Background Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-gradient-to-bl from-indigo-500/10 via-sky-500/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[75px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          {parentLocationPath && parentLocationLabel && (
            <>
              <Link href={parentLocationPath} className="hover:text-indigo-600 transition-colors">
                {parentLocationLabel}
              </Link>
              <ChevronRight size={11} className="text-slate-400" />
            </>
          )}
          <span className="text-indigo-700 font-bold" aria-current="page">
            {breadcrumbLabel}
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column — High-Impact Geo Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 shadow-xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{badgeText}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-slate-950 leading-[1.16]">
              {title}
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl font-normal">
              {description}
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/25 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
              >
                {auditCtaText}
                <ArrowRight size={14} />
              </Link>
              <a
                href={`https://wa.me/917297875798?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-indigo-500 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Naveen
              </a>
            </div>

            {/* Proof Counters */}
            <div className="mt-5 pt-3.5 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-md">
              {proofCounters.map((item, idx) => (
                <div key={idx} className={idx > 0 ? "border-l border-slate-200/80 pl-3" : ""}>
                  <div className="text-base sm:text-lg font-black text-slate-950">
                    {item.value}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Live Geo Entity & Real-Time Local Transactions HUD */}
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200">
                    <Navigation size={16} />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      Geo Entity Node Active
                      <Sparkles size={13} className="text-indigo-600" />
                    </h2>
                    <p className="text-[10px] text-slate-500">{locationName} • {coordinatesText}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Node
                </span>
              </div>

              {/* Founder Desk Live Card */}
              <div className="rounded-xl border border-indigo-200/80 bg-indigo-50/40 p-3 mb-3">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-indigo-800 text-[11px] flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-emerald-600" />
                    Direct Founder Led Engineering
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 rounded">
                    Active Desk
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-950">Naveen Panchal (lw_avee)</p>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Direct Next.js architecture, technical SEO blueprints, and conversion engineering for {locationName}.
                </p>
              </div>

              {/* Commercial Corridor Activity */}
              <div className="space-y-1.5 mb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Active Commercial Hubs &amp; Direct Sectors
                </p>
                {localHubs.map((hub, hIdx) => (
                  <button
                    key={hIdx}
                    onClick={() => setSelectedHub(hIdx)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all border ${
                      selectedHub === hIdx
                        ? "border-indigo-300 bg-indigo-50/80 text-indigo-950 shadow-2xs"
                        : "border-slate-100 bg-slate-50/60 text-slate-600 hover:border-slate-200 hover:text-slate-900"
                    }`}
                  >
                    <div>
                      <span className="font-semibold text-slate-900 block">{hub.name}</span>
                      <span className="text-[10px] text-slate-500">{hub.sector}</span>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {hub.tag}
                    </span>
                  </button>
                ))}
              </div>

              {/* Location Bar Footer */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <MapPin size={13} className="text-indigo-600" />
                  Local Google 3-Pack Schema Ready
                </span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <Zap size={12} />
                  &lt; 1s Local Speed
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
