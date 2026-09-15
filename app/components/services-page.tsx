"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Globe,
  MessageCircle,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: "web-development",
    icon: PanelsTopLeft,
    title: "Custom Next.js & React Web Development",
    tagline: "Sub-second speed. 100% custom code.",
    href: "/services/web-development",
    color: "indigo",
    badge: "<0.8s LCP",
    description:
      "We engineer custom Next.js web applications with clean TypeScript architecture. Zero bloated WordPress templates, zero slow plugins, and 100% Core Web Vitals compliance.",
    deliverables: [
      "Custom Next.js 16 SSR / SSG architecture",
      "Sub-1-second mobile page load guaranteed",
      "Mobile-first responsive UX and conversion funnels",
      "Structured JSON-LD schema integration",
      "100% source code and repository ownership",
    ],
    verifiedOutcome: "Lakeview Heritage Resort shifted 41% of bookings away from OTA commissions",
    caseStudyHref: "/case-studies/lakeview-heritage-resort",
    caseStudyTitle: "Resort Case Study",
  },
  {
    id: "local-seo",
    icon: Globe,
    title: "Local SEO & Google Maps 3-Pack",
    tagline: "Own the local map. Capture phone calls.",
    href: "/services/local-seo",
    color: "emerald",
    badge: "Top 3 Maps",
    description:
      "When local customers search for your business in Udaipur or Rajasthan, top 3 Google Maps placement captures over 70% of calls. We optimize Google Business Profiles and localized signals.",
    deliverables: [
      "Google Business Profile category & service optimization",
      "Consistent NAP citations across 40+ Indian directories",
      "Geo-tagged photography and local schema markup",
      "Compliant 5-star review acceleration workflow",
      "Monthly call and direction request tracking",
    ],
    verifiedOutcome: "Smile Care Dental achieved top 3 placement and scaled phone inquiries by 125%",
    caseStudyHref: "/case-studies/smile-care-dental",
    caseStudyTitle: "Dental Case Study",
  },
  {
    id: "google-ads",
    icon: Target,
    title: "Google Ads (PPC) & Paid Search Funnels",
    tagline: "Ready-to-buy search intent. Zero wasted spend.",
    href: "/services/google-ads",
    color: "cyan",
    badge: "High ROAS",
    description:
      "Tightly controlled search and call-only campaigns. We implement aggressive negative keyword sculpting so your ad budget is never wasted on free-seekers or irrelevant clicks.",
    deliverables: [
      "Exact & phrase match commercial keyword targeting",
      "Continuous negative keyword filtration",
      "Dedicated sub-second landing page optimization",
      "Call-only ads for immediate customer phone connections",
      "GA4 and Google Tag Manager offline conversion tracking",
    ],
    verifiedOutcome: "Precision search campaigns driving qualified high-ticket commercial inquiries",
    caseStudyHref: "/case-studies/mewar-stone-marble-exports",
    caseStudyTitle: "B2B Export Study",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Workflows & WhatsApp Lead Automation",
    tagline: "Instant 30-sec response. 24/7 lead capture.",
    href: "/services/ai-automation",
    color: "violet",
    badge: "<30s Response",
    description:
      "Prospects who receive an instant, intelligent answer on WhatsApp within 30 seconds are 7x more likely to convert. We build official WhatsApp Business API bots that qualify leads and alert your phone.",
    deliverables: [
      "Official WhatsApp Business Cloud API integration",
      "Custom AI knowledge bot trained on your pricing & policies",
      "Automated lead qualification and CRM webhook routing",
      "Instant push notifications to sales reps for high-intent buyers",
      "Automated appointment scheduling synced with Google Calendar",
    ],
    verifiedOutcome: "Zero missed inbound leads during non-business hours and weekends",
    caseStudyHref: "/contact",
    caseStudyTitle: "Request AI Demo",
  },
  {
    id: "b2b-lead-generation",
    icon: Sparkles,
    title: "B2B Manufacturing & Wholesale Lead Gen",
    tagline: "Direct buyer RFQs. Bypass directory middlemen.",
    href: "/b2b-lead-generation",
    color: "amber",
    badge: "Verified RFQs",
    description:
      "Industrial buyers require specifications, certifications, and reliable capacity. We build digital specification catalogs and commercial search funnels that capture wholesale purchase orders.",
    deliverables: [
      "Digital technical product catalogs with spec sheets",
      "Frictionless Request-For-Quote (RFQ) landing pages",
      "Commercial volume search query keyword mapping",
      "ISO/ASTM compliance certification showcase",
      "Direct WhatsApp and email sales routing to senior managers",
    ],
    verifiedOutcome: "Mewar Stone captured 19 verified international container-load export RFQs",
    caseStudyHref: "/case-studies/mewar-stone-marble-exports",
    caseStudyTitle: "Industrial Case Study",
  },
  {
    id: "international-seo",
    icon: Zap,
    title: "International SEO for Exporters",
    tagline: "Rank in the USA, UK, UAE & Europe.",
    href: "/international-seo",
    color: "pink",
    badge: "Global Markets",
    description:
      "Sell directly to foreign procurement officers. We build multi-region technical architectures with hreflang tags, multi-currency display, and global edge CDN caching for foreign search visibility.",
    deliverables: [
      "XML sitemaps with reciprocal hreflang annotations",
      "Sub-1-second global edge CDN caching for North America & Europe",
      "International trade term showcase (FOB, CIF, EXW)",
      "Country-specific keyword mapping for foreign commercial intent",
      "GDPR and international privacy standard compliance",
    ],
    verifiedOutcome: "Top-page organic search rankings in US and Middle Eastern export corridors",
    caseStudyHref: "/case-studies/mewar-stone-marble-exports",
    caseStudyTitle: "Export Case Study",
  },
];

const colorBadgeStyles: Record<string, string> = {
  indigo: "bg-[#eef2ff] text-[#4f46e5] border-[#e0e7ff]",
  emerald: "bg-[#ecfdf5] text-[#059669] border-[#a7f3d0]",
  cyan: "bg-[#ecfeff] text-[#0891b2] border-[#a5f3fc]",
  violet: "bg-[#f5f3ff] text-[#7c3aed] border-[#ddd6fe]",
  amber: "bg-[#fffbeb] text-[#b45309] border-[#fde68a]",
  pink: "bg-[#fdf2f8] text-[#be185d] border-[#fbcfe8]",
};

const iconBgStyles: Record<string, string> = {
  indigo: "from-[#4f46e5] to-[#4338ca] text-white",
  emerald: "from-[#059669] to-[#047857] text-white",
  cyan: "from-[#0891b2] to-[#0e7490] text-white",
  violet: "from-[#7c3aed] to-[#6d28d9] text-white",
  amber: "from-[#d97706] to-[#b45309] text-white",
  pink: "from-[#db2777] to-[#be185d] text-white",
};

export function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="bg-white">
      {/* Hero Section — Balanced 2-Column High-Impact Layout */}
      <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-[#f8fafc] to-white pt-10 pb-16 lg:pt-16 lg:pb-24">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#e0e7ff]/60 to-[#c7d2fe]/30 blur-[100px]" />
          <div className="absolute bottom-0 left-10 h-[300px] w-[300px] rounded-full bg-[#f0fdf4]/80 blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
              <li>
                <Link href="/" className="hover:text-[#4f46e5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={12} className="text-[#94a3b8]" />
              </li>
              <li className="text-[#0f172a]" aria-current="page">
                Services &amp; Growth Infrastructure
              </li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
            {/* Left Column — Crisp, Authoritative Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] shadow-2xs mb-5">
                <Sparkles size={13} className="text-[#4f46e5]" />
                Full-Stack Growth Engineering
              </div>

              <h1 className="text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl lg:text-[52px] leading-[1.1]">
                Digital Capabilities Engineered for{" "}
                <span className="text-gradient">Verified Revenue</span>.
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#475569] max-w-xl">
                We don&apos;t sell superficial retainer packages or post Canva quotes. We build high-speed Next.js platforms, Google Page 1 search authority, and WhatsApp acquisition funnels that convert visitors into paying clients.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-growth-audit"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all"
                >
                  Claim Free Website Growth Audit
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20discuss%20services%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-semibold text-[#1e293b] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shadow-2xs"
                >
                  <MessageCircle size={16} className="text-[#10b981]" />
                  WhatsApp Naveen Direct
                </a>
              </div>

              {/* 3 Quick Benchmarks */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#e2e8f0] pt-6 max-w-lg">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-[#0f172a]">&lt; 0.8s</p>
                  <p className="text-xs font-semibold text-[#64748b] mt-0.5">Mobile Speed</p>
                </div>
                <div className="border-l border-[#e2e8f0] pl-4">
                  <p className="text-xl sm:text-2xl font-black text-[#0f172a]">100%</p>
                  <p className="text-xs font-semibold text-[#64748b] mt-0.5">Custom Code</p>
                </div>
                <div className="border-l border-[#e2e8f0] pl-4">
                  <p className="text-xl sm:text-2xl font-black text-[#10b981]">Founder</p>
                  <p className="text-xs font-semibold text-[#64748b] mt-0.5">Direct Oversight</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column — Interactive Capability Showcase Card (Fills the visual void) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-[#4f46e5]/20 via-[#06b6d4]/20 to-[#10b981]/20 blur-xl opacity-75" />

              <div className="relative rounded-[32px] border border-[#e2e8f0] bg-white p-6 sm:p-7 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-4 mb-4">
                  <div>
                    <p className="text-xs font-bold text-[#0f172a]">Core Growth Stack</p>
                    <p className="text-[11px] text-[#64748b]">Select a discipline to preview</p>
                  </div>
                  <span className="rounded-full bg-[#f0fdf4] border border-[#bbf7d0] px-2.5 py-0.5 text-[10px] font-bold text-[#166534]">
                    6 Core Capabilities
                  </span>
                </div>

                {/* Capability Selector Buttons */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {services.map((s, idx) => {
                    const SIcon = s.icon;
                    const isSelected = activeTab === idx;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setActiveTab(idx)}
                        className={`flex items-center gap-2 rounded-xl p-2.5 text-left text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-[#0f172a] text-white shadow-xs"
                            : "bg-[#f8fafc] text-[#334155] border border-[#e2e8f0] hover:bg-[#f1f5f9]"
                        }`}
                      >
                        <SIcon size={14} className={isSelected ? "text-[#38bdf8]" : "text-[#4f46e5]"} />
                        <span className="truncate">{s.title.split(" ")[0]} {s.title.split(" ")[1]}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Capability Preview Box */}
                <div className="rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-5 text-white shadow-md relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">
                      {services[activeTab].tagline}
                    </span>
                    <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                      {services[activeTab].badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {services[activeTab].description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-400 font-medium">
                      ✓ Verified Deliverables
                    </span>
                    <Link
                      href={services[activeTab].href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-[#38bdf8] transition-colors"
                    >
                      Deep Dive <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

                {/* Quick Trust Footer */}
                <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex items-center justify-between text-[11px] text-[#64748b]">
                  <span className="flex items-center gap-1 text-[#10b981] font-semibold">
                    <ShieldCheck size={14} /> 100% Code Ownership
                  </span>
                  <a href="#services-list" className="text-[#4f46e5] font-bold hover:underline">
                    View All 6 Below ↓
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section id="services-list" className="bg-[#f8fafc] py-16 lg:py-24 border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-3">
              <ShieldCheck size={13} />
              Detailed Specifications
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Six Specialized Growth Engines.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748b]">
              Click into any service to view exact technical specifications, live benchmarks, and case study outcomes.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-3xl border border-[#e2e8f0] bg-white p-7 sm:p-9 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all"
                >
                  <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
                    <div>
                      {/* Icon + Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${iconBgStyles[service.color]} shadow-xs`}
                        >
                          <Icon size={22} />
                        </div>
                        <div>
                          <span
                            className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${colorBadgeStyles[service.color]}`}
                          >
                            {service.tagline}
                          </span>
                          <h2 className="mt-1.5 text-xl sm:text-2xl font-bold text-[#0f172a]">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base leading-relaxed text-[#475569] max-w-2xl">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="text-[#10b981] mt-0.5 shrink-0" />
                            <span className="text-xs sm:text-sm text-[#334155] font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Outcome Box */}
                    <div className="rounded-2xl border border-[#e0e7ff] bg-[#f8fafc] p-5 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">
                          <TrendingUp size={14} /> Verified Outcome
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-[#0f172a] leading-snug">
                          {service.verifiedOutcome}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-[#e2e8f0] flex flex-col gap-2">
                        <Link
                          href={service.href}
                          className="flex items-center justify-center gap-1.5 rounded-xl bg-[#0f172a] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#1e293b] transition-all shadow-xs"
                        >
                          View Full Service <ArrowRight size={12} />
                        </Link>
                        <Link
                          href={service.caseStudyHref}
                          className="text-center text-[11px] font-semibold text-[#4f46e5] hover:underline pt-1"
                        >
                          Read {service.caseStudyTitle} &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="mx-auto max-w-7xl px-6 py-16 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] px-8 py-16 text-center shadow-2xl border border-[#334155] text-white">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-200 mb-4">
              <Sparkles size={13} className="text-[#38bdf8]" /> Custom Growth Blueprint
            </span>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Not Sure Which Service Your Business Needs First?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Founder Naveen Panchal will review your current website, Google rankings, and competitor gaps — delivering a step-by-step roadmap within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all"
              >
                Claim Free Website Audit <ArrowRight size={15} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20consult%20on%20my%20website%20and%20SEO."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all"
              >
                <MessageCircle size={16} className="text-[#10b981]" /> WhatsApp Naveen
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
