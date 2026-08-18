"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, Sparkles, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Soft color washes */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#eef2ff] blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-[#e0f2fe] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:pb-32 lg:pt-20">
        {/* Left — Copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-2 text-sm font-medium text-[#4f46e5]"
          >
            <ShieldCheck size={14} className="text-[#4f46e5]" />
            Trusted by 40+ growing brands worldwide
          </motion.div>

          <h1 className="hero-copy max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[#0f172a] sm:text-6xl lg:text-[70px]">
            We Turn{" "}
            <span className="text-gradient">Clicks</span>{" "}
            Into Clients.{" "}
            <br className="hidden lg:block" />
            <span className="text-[#64748b] font-semibold">Every Single Time.</span>
          </h1>

          <p className="hero-copy mt-7 max-w-2xl text-lg leading-8 text-[#475569] sm:text-xl">
            Rankvra is a full-service digital marketing agency that builds
            performance-obsessed systems — SEO, paid ads, and web design —
            engineered to turn attention into predictable revenue.
          </p>

          <div className="hero-copy mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#4f46e5]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4338ca] hover:shadow-[#4f46e5]/30 hover:shadow-xl"
            >
              Book a Strategy Call
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#results"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-8 py-4 text-[15px] font-semibold text-[#475569] transition-all duration-300 hover:-translate-y-1 hover:border-[#4f46e5]/30 hover:bg-[#f8fafc] hover:text-[#0f172a] hover:shadow-md"
            >
              <TrendingUp size={16} className="text-[#4f46e5]" />
              See Our Results
            </a>
          </div>

          {/* Mini stats row */}
          <div className="hero-copy mt-12 flex flex-wrap gap-10">
            {[
              { value: "+89%", label: "Avg lead increase" },
              { value: "96%", label: "Client retention" },
              { value: "40+", label: "Brands scaled" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-[#0f172a]">{stat.value}</p>
                <p className="mt-0.5 text-xs text-[#94a3b8] font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Visual card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.15, ease: "easeOut" }}
          className="relative mt-14 flex flex-col justify-center lg:mt-0"
        >
          {/* Outer shadow/glow */}
          <div className="absolute inset-4 rounded-[36px] bg-[#4f46e5]/5 blur-2xl" />

          {/* Main card */}
          <div className="relative z-10 w-full max-w-[480px] mx-auto rounded-[32px] border border-[#e2e8f0] bg-white p-1.5 shadow-[0_32px_80px_rgba(15,23,42,0.08)]">
            <div className="rounded-[28px] border border-[#f1f5f9] bg-[#f8fafc] p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4f46e5]">
                    Growth Engine
                  </p>
                  <p className="mt-2 text-xl font-bold tracking-tight text-[#0f172a]">
                    Your performance, live.
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#0891b2] shadow-md shadow-[#4f46e5]/20">
                  <Zap size={18} className="text-white" />
                </div>
              </div>

              {/* Bento grid */}
              <div className="grid gap-3 sm:grid-cols-2 mb-3">
                {/* Main highlight */}
                <div className="col-span-1 sm:col-span-2 relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#4f46e5] to-[#4338ca] p-6 text-white shadow-lg shadow-[#4f46e5]/20">
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute -left-4 bottom-0 h-20 w-20 rounded-full bg-[#0891b2]/25 blur-xl" />
                  <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest">
                    Monthly Revenue Impact
                  </p>
                  <p className="mt-2 text-5xl font-black tracking-tight">+462%</p>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/20 pt-4 text-xs font-semibold text-indigo-200/80">
                    <BarChart3 size={13} />
                    <span>Zenith Commerce — 6 months</span>
                  </div>
                </div>

                {/* Secondary cards */}
                <div className="rounded-[18px] border border-[#e2e8f0] bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-widest">ROAS</p>
                  <p className="mt-1 text-3xl font-black text-[#0f172a]">6.2×</p>
                  <p className="mt-1 text-xs text-[#4f46e5] font-medium">Luminary Skincare</p>
                </div>

                <div className="rounded-[18px] border border-[#e2e8f0] bg-white p-5 shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[#4f46e5]">
                      <ShieldCheck size={16} />
                    </div>
                    <span className="text-sm font-bold leading-tight text-[#0f172a]">
                      96%<br />
                      <span className="text-xs font-medium text-[#94a3b8]">Retention rate</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 mt-1">
                {[
                  { label: "Performance SEO", icon: <Sparkles size={11} className="text-[#4f46e5]" /> },
                  { label: "Paid Growth", icon: <BarChart3 size={11} className="text-[#0891b2]" /> },
                  { label: "CRO", icon: <TrendingUp size={11} className="text-[#7c3aed]" /> },
                ].map((pill) => (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#475569] shadow-sm"
                  >
                    {pill.icon} {pill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
