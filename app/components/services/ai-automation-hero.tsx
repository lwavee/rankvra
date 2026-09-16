"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ChevronRight,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function AiAutomationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#9333ea 1px, transparent 1px), linear-gradient(90deg, #9333ea 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-0 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/10 via-sky-500/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumbs" className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <Link href="/services" className="hover:text-indigo-600 transition-colors">
            Services
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <span className="text-indigo-600" aria-current="page">
            AI Automation
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 shadow-2xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Official WhatsApp Cloud API &amp; AI</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-slate-950 leading-[1.15]">
              Never Miss A Lead With{" "}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                18-Second WhatsApp AI.
              </span>
            </h1>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Smart WhatsApp AI bots trained on your commercial offerings that instantly qualify prospects and schedule meetings 24/7 with zero human delay.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-purple-600/25 hover:bg-purple-700 hover:-translate-y-0.5 transition-all"
              >
                Request AI Blueprint
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20see%20a%20WhatsApp%20bot%20demo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-purple-400 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Demo
              </a>
            </div>

            {/* Quick Counters */}
            <div className="mt-4 flex items-center gap-5 border-t border-slate-200/90 pt-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-emerald-600 text-sm">&lt; 18s</span>
                <span className="text-slate-500 text-[11px]">Response Speed</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-sm">24/7</span>
                <span className="text-slate-500 text-[11px]">Active Lead Desk</span>
              </div>
              <span className="h-3 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-purple-600 text-sm">Meta</span>
                <span className="text-slate-500 text-[11px]">Cloud API</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Compact Animated WhatsApp Conversation Simulation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
              {/* WhatsApp Chat Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
                    <MessageCircle size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">RankVRA WhatsApp AI Agent</p>
                    <p className="text-[10px] text-emerald-600 flex items-center gap-1 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Live &bull; &lt; 18s Response
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  Meta Verified
                </span>
              </div>

              {/* Chat Bubble Simulation */}
              <div className="space-y-2 mb-3 font-sans text-xs">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="rounded-xl rounded-tr-xs bg-indigo-50 border border-indigo-200/80 p-2.5 text-[11px] text-slate-800 max-w-[85%] shadow-2xs">
                    Hi! I need suite pricing and availability for Lakeview Resort this weekend.
                    <span className="block text-[8px] text-slate-400 text-right mt-0.5">10:42 AM</span>
                  </div>
                </div>

                {/* Bot Reply */}
                <div className="flex justify-start">
                  <div className="rounded-xl rounded-tl-xs bg-slate-50 border border-emerald-200 p-2.5 text-[11px] text-slate-800 max-w-[90%] shadow-2xs">
                    <span className="font-bold text-emerald-700 block text-[10px] mb-0.5">🤖 AI Assistant (&lt; 18s):</span>
                    Heritage Lake-View Suite is available at ₹6,500/night with breakfast. Shall I confirm your direct booking?
                    <span className="block text-[8px] text-emerald-600 text-right mt-0.5">10:42 AM &bull; ✓✓</span>
                  </div>
                </div>
              </div>

              {/* CRM Notification Banner */}
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5 flex items-center justify-between text-xs mb-3">
                <div className="flex items-center gap-1.5">
                  <Zap size={13} className="text-amber-500" />
                  <span className="font-semibold text-slate-800 text-[11px]">Instant Push to Sales Team</span>
                </div>
                <span className="text-[10px] font-extrabold text-emerald-600">₹48K Pipeline Added</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/80">
                {["Zero Number Bans", "Google Calendar Sync", "CRM Webhooks"].map((pill) => (
                  <span key={pill} className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600">
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
