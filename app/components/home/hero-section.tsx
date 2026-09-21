"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  LayoutDashboard,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const featuredDeployments = [
  {
    client: "Capital & Co Insurance Services",
    type: "Commercial Insurance Web Design & Lead Funnel",
    market: "United States",
    status: "Production Live",
    slug: "capital-co-insurance",
  },
  {
    client: "Sterling Wholesale Insurance Portal",
    type: "Custom Web Application & Underwriting Engine",
    market: "United States",
    status: "Active Portal",
    slug: "sterling-insurance-portal",
  },
  {
    client: "Swastik Computer Education",
    type: "Academic Portal & Course Enrollment Engine",
    market: "India",
    status: "Production Live",
    slug: "swastik-computer-education",
  },
  {
    client: "E-Biozone",
    type: "Technical Laboratory Equipment Catalog & RFQ",
    market: "India & Global",
    status: "Active Catalog",
    slug: "e-biozone",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-8 pb-12 lg:pt-12 lg:pb-16 border-b border-slate-200/80">
      {/* Subtle high-tech mesh background */}
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
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 items-center">
          
          {/* Left Column — Commercial Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            {/* Global Reach Badge */}
            <div className="mb-3.5 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-2xs">
              <Globe2 size={13} className="text-indigo-600" />
              <span>India-Based Engineering &bull; Serving US, UK, Canada &amp; India</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-slate-950 leading-[1.12]">
              Web Development, SEO &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Digital Growth for Modern Businesses.
              </span>
            </h1>

            {/* Clear Value Proposition */}
            <p className="mt-3.5 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              RankVRA engineers custom business websites, high-converting redesigns, specialized web applications, and technical SEO architectures focused on qualified inbound client acquisition.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/free-website-audit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Get a Free Website Audit
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 transition-all duration-200 hover:bg-slate-50 hover:border-indigo-400 shadow-2xs"
              >
                View Case Studies
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20discuss%20a%20project%20with%20RankVRA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors px-2 py-1"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                <span>Talk to Naveen</span>
              </a>
            </div>

            {/* Engineering Pillars Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-200/90 pt-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span className="font-semibold text-slate-800">Next.js &amp; React</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span className="font-semibold text-slate-800">100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span className="font-semibold text-slate-800">Zero Black-Hat SEO</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span className="font-semibold text-slate-800">Direct Founder Access</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Architectural Deployment Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[24px] border border-slate-200 bg-white/95 backdrop-blur-md p-5 sm:p-6 shadow-xl shadow-slate-900/5 overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-slate-500">rankvra.com/deployments</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Verified Work
                </span>
              </div>

              {/* Technical Overview Banner */}
              <div className="rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50/60 to-slate-50/60 p-3.5 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                      Engineering Architecture
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      Modern Full-Stack &amp; Search Infrastructure
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="rounded-md bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                      TypeScript
                    </span>
                    <span className="rounded-md bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Project Deployments List */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-slate-500 font-bold px-1">
                  <span>Featured Client Platforms</span>
                  <span>Market</span>
                </div>

                {featuredDeployments.map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/case-studies/${item.slug}`}
                    className="group block rounded-xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:bg-slate-50/70 p-3 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {item.client}
                          </h2>
                          <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                            {item.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                          {item.type}
                        </p>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <span className="text-[11px] font-semibold text-slate-700">
                          {item.market}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Commercial target: US &bull; UK &bull; Canada &bull; India</span>
                <Link
                  href="/case-studies"
                  className="font-bold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                >
                  Deep Dives <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
