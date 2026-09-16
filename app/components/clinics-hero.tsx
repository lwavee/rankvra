"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const livePatientTransactions = [
  {
    clinic: "Smile Care Dental Implant Center",
    location: "Shobhagpura, Udaipur",
    procedure: "Full Mouth Dental Implants & Zirconia Crown",
    action: "Direct WhatsApp Booking",
    source: "Google Maps 3-Pack (#1)",
    time: "3m ago",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    clinic: "Mewar Joint & Spine Hospital",
    location: "Panchwati, Udaipur",
    procedure: "Robotic Knee Arthroscopy Consultation",
    action: "Direct Patient Phone Call",
    source: "Google Local Search (#2)",
    time: "12m ago",
    badge: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    clinic: "Apex Laser & Skin Clinic",
    location: "Fatehpura, Udaipur",
    procedure: "Laser Dermatology Consultation Slot",
    action: "Online Form Appointment",
    source: "Google Maps Profile",
    time: "28m ago",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
];

export function ClinicsHero() {
  const [activePatient, setActivePatient] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
      {/* Background Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-gradient-to-bl from-cyan-500/10 via-sky-600/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[75px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-cyan-600 transition-colors">
            Home
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <Link href="/services" className="hover:text-cyan-600 transition-colors">
            Industries
          </Link>
          <ChevronRight size={11} className="text-slate-400" />
          <span className="text-cyan-700" aria-current="page">
            Clinics &amp; Healthcare
          </span>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
          {/* Left Column — Short High-Conversion Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700 shadow-2xs mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Healthcare Patient Acquisition</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-slate-950 leading-[1.16]">
              Dominate Google Maps.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600">
                Book Verified Patient Visits.
              </span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Rank in the Google Maps 3-Pack, outrank local competing clinics, and automate instant consultation bookings on WhatsApp for dental, orthopedic, and specialty clinics.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-cyan-600/25 hover:opacity-95 hover:-translate-y-0.5 transition-all"
              >
                Get Clinic SEO Audit
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20run%20a%20clinic%20and%20want%20to%20rank%20higher%20on%20Google%20Maps."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:border-cyan-400 hover:text-cyan-700 transition-all shadow-2xs"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WhatsApp Direct
              </a>
            </div>

            {/* Quick Proof Counters */}
            <div className="mt-5 pt-3.5 border-t border-slate-200/90 grid grid-cols-3 gap-3 max-w-md">
              <div>
                <div className="text-base sm:text-lg font-black text-slate-900">Top 3</div>
                <div className="text-[10px] font-semibold text-slate-500">Google Maps 3-Pack</div>
              </div>
              <div className="border-l border-slate-200 pl-3">
                <div className="text-base sm:text-lg font-black text-cyan-600">+125%</div>
                <div className="text-[10px] font-semibold text-slate-500">Patient Phone Calls</div>
              </div>
              <div className="border-l border-slate-200 pl-3">
                <div className="text-base sm:text-lg font-black text-emerald-600">4.9★</div>
                <div className="text-[10px] font-semibold text-slate-500">Review Generation</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Live Clinic Transactions HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-200">
                    <Stethoscope size={16} />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      Live Patient Inflow Engine
                      <Sparkles size={13} className="text-cyan-600" />
                    </h2>
                    <p className="text-[10px] text-slate-500">Google Maps 3-Pack Telemetry</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Desk
                </span>
              </div>

              {/* Active Patient Transaction Card */}
              <div className="rounded-xl border border-cyan-200/90 bg-cyan-50/40 p-3 mb-3">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-cyan-800 text-[11px] flex items-center gap-1.5">
                    <PhoneCall size={13} className="text-emerald-600" />
                    {livePatientTransactions[activePatient].action}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">
                    {livePatientTransactions[activePatient].time}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-950">
                      {livePatientTransactions[activePatient].clinic}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {livePatientTransactions[activePatient].location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-black text-emerald-600">
                      {livePatientTransactions[activePatient].source}
                    </p>
                    <p className="text-[9px] text-slate-400 font-medium">Acquisition Channel</p>
                  </div>
                </div>
                <p className="mt-2 text-[11px] text-slate-700 font-mono bg-white p-2 rounded-lg border border-slate-200/80">
                  🩺 {livePatientTransactions[activePatient].procedure}
                </p>
              </div>

              {/* Patient Feed Selector Tabs */}
              <div className="space-y-1.5 mb-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Recent Verified Inbound Consultations
                </p>
                {livePatientTransactions.map((pt, idx) => (
                  <button
                    key={pt.clinic}
                    onClick={() => setActivePatient(idx)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all border ${
                      activePatient === idx
                        ? "border-cyan-500 bg-cyan-50/60 text-slate-950"
                        : "border-slate-200/80 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${activePatient === idx ? "bg-cyan-500" : "bg-slate-300"}`} />
                      <span className="font-semibold">{pt.clinic}</span>
                    </div>
                    <span className="font-mono font-bold text-cyan-700 text-[11px]">{pt.action.split(" ")[0]}</span>
                  </button>
                ))}
              </div>

              {/* Healthcare Bar Footer */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-1 text-amber-500 font-medium">
                  <Star size={12} className="fill-amber-400" />
                  Automated 5-Star Review Funnels
                </span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <Zap size={12} />
                  Instant WhatsApp Booking
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
