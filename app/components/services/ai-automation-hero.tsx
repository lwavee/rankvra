"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ChevronRight,
  MessageCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function AiAutomationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-[#e2e8f0]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#9333ea 1px, transparent 1px), linear-gradient(90deg, #9333ea 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-[#9333ea]/10 via-[#4f46e5]/10 to-transparent blur-[100px]" />
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
            AI &amp; WhatsApp Automation
          </span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e9d5ff] bg-[#faf5ff] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#7e22ce] shadow-2xs mb-5">
              <Bot size={13} className="text-[#9333ea]" />
              Official WhatsApp Cloud API &amp; AI
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl lg:text-[54px] leading-[1.1]">
              Never Miss A Lead With{" "}
              <span className="text-gradient">30-Second AI Response</span>.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              Prospects who receive an instant reply on WhatsApp convert 7x faster than those who wait hours for an email. We engineer smart WhatsApp bots that qualify leads and book appointments 24/7.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all"
              >
                Request Custom AI Blueprint
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20see%20a%20WhatsApp%20bot%20demo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-semibold text-[#1e293b] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shadow-2xs"
              >
                <MessageCircle size={16} className="text-[#10b981]" />
                WhatsApp Live Demo
              </a>
            </div>

            {/* Quick Counters */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e2e8f0] pt-6 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#10b981]">&lt; 30s</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Response Time</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#0f172a]">24 / 7</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Lead Capture</p>
              </div>
              <div className="border-l border-[#e2e8f0] pl-4">
                <p className="text-xl sm:text-2xl font-black text-[#4f46e5]">Official</p>
                <p className="text-xs font-semibold text-[#64748b] mt-0.5">Meta Cloud API</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Animated WhatsApp Conversation Simulation Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-[#9333ea]/20 via-[#10b981]/20 to-[#4f46e5]/20 blur-xl opacity-75" />

            <div className="relative rounded-[32px] border border-[#e2e8f0] bg-white p-6 shadow-2xl">
              {/* WhatsApp Chat Header */}
              <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#10b981] text-white">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0f172a]">Smart WhatsApp Agent</p>
                    <p className="text-[10px] text-[#10b981] flex items-center gap-1 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" /> Online 24/7
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#f0fdf4] border border-[#bbf7d0] px-2 py-0.5 text-[10px] font-bold text-[#166534]">
                  API Verified
                </span>
              </div>

              {/* Chat Bubble Simulation */}
              <div className="space-y-3 mb-4 font-sans">
                {/* Incoming User Message */}
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-xs bg-[#eef2ff] p-3 text-xs text-[#1e293b] max-w-[80%] shadow-2xs">
                    Hi! I need room rates and availability for this coming weekend.
                    <span className="block text-[9px] text-[#64748b] text-right mt-1">10:42 AM</span>
                  </div>
                </div>

                {/* Instant Bot Reply */}
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-xs bg-[#f0fdf4] border border-[#bbf7d0] p-3 text-xs text-[#0f172a] max-w-[85%] shadow-2xs">
                    <span className="font-bold text-[#166534] block mb-1">🤖 Instant Assistant (18s):</span>
                    Hello! We have Deluxe Lake-View Suites available at ₹6,500/night with complimentary breakfast. Would you like to reserve?
                    <span className="block text-[9px] text-[#64748b] text-right mt-1">10:42 AM &bull; ✓✓</span>
                  </div>
                </div>
              </div>

              {/* CRM Notification Banner */}
              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <Zap size={14} className="text-amber-500" />
                  <span className="font-semibold text-[#0f172a]">Push Alert to Sales Rep</span>
                </div>
                <span className="text-[10px] font-bold text-[#10b981]">Instant Notification</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-[#f1f5f9]">
                {["Zero Number Bans", "Calendar Sync", "CRM Webhooks", "Custom FAQ Training"].map((pill) => (
                  <span key={pill} className="rounded-md bg-[#f1f5f9] px-2 py-0.5 text-[10px] font-semibold text-[#475569]">
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
