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
          <div className="relative z-10 w-full max-w-[500px] mx-auto">
            
            {/* Overlapping floating elements for a human-crafted feel */}
            <div className="absolute -top-10 -right-8 z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4338ca] shadow-[0_10px_40px_rgba(79,70,229,0.3)] border-4 border-white transform rotate-6">
              <span className="text-white font-black text-2xl tracking-tighter">#1</span>
              <span className="text-[9px] font-bold text-indigo-100 uppercase tracking-widest text-center leading-tight">Growth<br/>Partner</span>
            </div>

            <div className="rounded-[36px] border border-[#e2e8f0] bg-white p-2 shadow-[0_40px_100px_rgba(15,23,42,0.06)] relative">
              <div className="rounded-[30px] border border-[#f1f5f9] bg-gradient-to-b from-[#f8fafc] to-white p-7 sm:p-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-white shadow-sm border border-[#f1f5f9]">
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#0891b2] flex items-center justify-center">
                      <Zap size={14} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#4f46e5]">
                      Performance Hub
                    </p>
                    <p className="mt-1 text-lg font-bold tracking-tight text-[#0f172a]">
                      Your Growth, Visualized.
                    </p>
                  </div>
                </div>

                {/* Main highlight */}
                <div className="relative overflow-hidden rounded-[24px] bg-[#0f172a] p-8 text-white shadow-2xl shadow-[#0f172a]/10 mb-5">
                  {/* Subtle noise/gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#4f46e5]/40 blur-3xl" />
                  
                  <div className="relative z-10 flex justify-between items-end">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                        Monthly Revenue Lift
                      </p>
                      <p className="text-5xl sm:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">+462%</p>
                    </div>
                    <div className="flex items-center gap-1.5 pb-2 text-emerald-400">
                      <TrendingUp size={20} strokeWidth={3} />
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-medium">
                    <span className="text-slate-300">Zenith Commerce</span>
                    <span className="text-white font-semibold rounded-full bg-white/10 px-3 py-1 text-xs">6 months</span>
                  </div>
                </div>

                {/* Secondary row */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 rounded-[20px] bg-white p-5 shadow-sm border border-[#f1f5f9] flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10 text-[#4f46e5]">
                       <BarChart3 size={40} />
                    </div>
                    <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest">Target ROAS</p>
                    <p className="mt-1.5 text-3xl font-black text-[#0f172a] tracking-tight">6.2<span className="text-lg text-[#64748b]">x</span></p>
                  </div>
                  
                  <div className="flex-1 rounded-[20px] bg-gradient-to-b from-[#eef2ff] to-[#f8fafc] p-5 border border-[#e0e7ff] flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1.5">
                      <ShieldCheck size={14} className="text-[#4f46e5]" />
                      <span className="text-[10px] font-bold text-[#4f46e5] uppercase tracking-widest">Retention</span>
                    </div>
                    <p className="text-3xl font-black text-[#0f172a] tracking-tight">96<span className="text-lg text-[#64748b]">%</span></p>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="pt-2">
                  <p className="text-[11px] font-semibold text-[#94a3b8] mb-3 text-center uppercase tracking-widest">Proven Capabilities</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "Technical SEO",
                      "Conversion Ads",
                      "Revenue Ops",
                      "Web Strategy"
                    ].map((label) => (
                      <span
                        key={label}
                        className="inline-flex items-center rounded-full bg-[#f8fafc] border border-[#e2e8f0] px-3.5 py-1.5 text-xs font-semibold text-[#475569] shadow-sm hover:shadow hover:bg-white hover:text-[#0f172a] transition-all cursor-default"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
