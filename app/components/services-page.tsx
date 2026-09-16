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
      {/* Hero Section — Ultra-Modern, Light Tech & Animated Live Traction */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
        {/* Ambient mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="absolute top-0 right-10 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-transparent blur-[80px]" />
          <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[70px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <li>
                <Link href="/" className="hover:text-indigo-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={11} className="text-slate-400" />
              </li>
              <li className="text-indigo-600" aria-current="page">
                Services
              </li>
            </ol>
          </nav>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
            {/* Left Column — Concise Copy */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-2xs mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Full-Stack Growth Engineering</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-slate-950 leading-[1.15]">
                Digital Capabilities.{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Verified Commercial Revenue.
                </span>
              </h1>

              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 max-w-lg">
                Custom Next.js platforms, Google Page-1 search authority, and WhatsApp acquisition funnels built for verifiable, commission-free growth.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <Link
                  href="/free-growth-audit"
                  className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-indigo-600/25 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
                >
                  Free Growth Audit
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20discuss%20services%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-indigo-400 transition-all shadow-2xs"
                >
                  <MessageCircle size={14} className="text-emerald-600" />
                  WhatsApp Naveen
                </a>
              </div>

              {/* Compact Inline Proof Counters */}
              <div className="mt-4 flex items-center gap-5 border-t border-slate-200/90 pt-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-slate-900">&lt; 0.8s</span>
                  <span className="text-slate-500 text-[11px]">Mobile LCP</span>
                </div>
                <span className="h-3 w-px bg-slate-200" />
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-indigo-600">Top 3</span>
                  <span className="text-slate-500 text-[11px]">Maps Rank</span>
                </div>
                <span className="h-3 w-px bg-slate-200" />
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-emerald-600">100%</span>
                  <span className="text-slate-500 text-[11px]">Custom Code</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column — Compact Interactive Live Growth Deck */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-[22px] border border-slate-200 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    <p className="text-xs font-bold text-slate-900">Production Capabilities Console</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                    6 Active Stacks
                  </span>
                </div>

                {/* Compact Capability Selector Buttons */}
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  {services.slice(0, 6).map((s, idx) => {
                    const isSelected = activeTab === idx;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setActiveTab(idx)}
                        className={`rounded-lg py-1.5 px-2 text-center text-[10px] font-bold transition-all truncate ${
                          isSelected
                            ? "bg-indigo-600 text-white shadow-xs border border-indigo-600"
                            : "bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/20"
                        }`}
                      >
                        {s.title.split(" ")[0]} {s.title.split(" ")[1] || ""}
                      </button>
                    );
                  })}
                </div>

                {/* Animated Active Capability Card */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 text-slate-900 shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 truncate max-w-[200px]">
                      {services[activeTab].tagline}
                    </span>
                    <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      {services[activeTab].badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-slate-950 mb-1 truncate">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-snug line-clamp-2 mb-2.5">
                    {services[activeTab].description}
                  </p>

                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={12} className="text-emerald-600" /> {services[activeTab].verifiedOutcome.slice(0, 36)}...
                    </span>
                    <Link
                      href={services[activeTab].href}
                      className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-1"
                    >
                      Deep Dive <ArrowRight size={11} />
                    </Link>
                  </div>
                </motion.div>
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
