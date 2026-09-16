"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Flame,
  Lock,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const liveHomeTransactions = [
  {
    client: "Lakeview Heritage Resort",
    action: "Direct Suite Booking Confirmed",
    value: "₹48,000 Direct",
    time: "8s ago",
    badge: "Booking Engine",
  },
  {
    client: "Mewar Stone & Marble",
    action: "19 FCL Container Inquiry Dispatched",
    value: "USA Export RFQ",
    time: "1m ago",
    badge: "B2B Funnel",
  },
  {
    client: "Smile Care Dental",
    action: "Implant Patient Consultation Booked",
    value: "1-Tap WhatsApp",
    time: "4m ago",
    badge: "Google 3-Pack",
  },
];

export function HeroSection() {
  const [activeTx, setActiveTx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTx((prev) => (prev + 1) % liveHomeTransactions.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      {/* Light high-tech mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-transparent blur-[90px]" />
        <div className="absolute top-1/2 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 items-center">
          
          {/* Left Column — Short, Sharp & High Conversion */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* Live Status Badge */}
            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Full-Stack Next.js &bull; Google Page 1 &bull; Live Telemetry</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-950 leading-[1.14]">
              Sub-Second Next.js &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Google SEO That Generates Revenue.
              </span>
            </h1>

            {/* Micro-copy */}
            <p className="mt-2.5 max-w-lg text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              We engineer custom web platforms with 100/100 Core Web Vitals, dominate Page 1 commercial queries, and stream qualified inbound buyers straight to WhatsApp.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Claim Free Growth Audit
                <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20grow%20my%20business%20with%20RankVRA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 transition-all duration-200 hover:bg-slate-50 hover:border-indigo-400 shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Naveen Direct
              </a>
            </div>

            {/* Proof Bar */}
            <div className="mt-4 flex items-center gap-5 border-t border-slate-200/90 pt-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-sm">&lt;0.8s</span>
                <span className="text-slate-500 text-[11px]">Mobile LCP</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-indigo-600 text-sm">Top 3</span>
                <span className="text-slate-500 text-[11px]">Maps Rank</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-emerald-600 text-sm">100%</span>
                <span className="text-slate-500 text-[11px]">Clean IP</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Light High-Tech Live Transaction & Telemetry Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5 overflow-hidden">
              
              {/* Window Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400">rankvra.com/engine</span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Stream
                </span>
              </div>

              {/* Realtime Core Web Vitals 100/100 Bar */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 mb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                      Production Core Web Vitals
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-slate-950">100/100</span>
                      <span className="text-[10px] font-semibold text-emerald-600">&bull; 0.6s LCP</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-700">
                      Grade A+
                    </span>
                  </div>
                </div>
                <div className="mt-2.5 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "98%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 rounded-full"
                  />
                </div>
              </div>

              {/* Live Transactions Stream */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500 font-bold px-1">
                  <span>Live Client Transactions</span>
                  <span>Auto-Updated</span>
                </div>

                {liveHomeTransactions.map((tx, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTx(idx)}
                    className={`cursor-pointer rounded-xl border p-2.5 transition-all flex items-center justify-between ${
                      activeTx === idx
                        ? "border-indigo-400 bg-indigo-50/40 shadow-xs"
                        : "border-slate-200/70 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-md border border-indigo-200 bg-indigo-50 px-1.5 py-0.5 text-[9px] font-bold text-indigo-700">
                        {tx.badge}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{tx.client}</p>
                        <p className="text-[10px] text-slate-500 truncate max-w-[170px] sm:max-w-[210px]">{tx.action}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black text-emerald-600">{tx.value}</p>
                      <p className="text-[9px] text-slate-400">{tx.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
