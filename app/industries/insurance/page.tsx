import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FileCheck2,
  Globe2,
  Lock,
  MessageCircle,
  PanelsTopLeft,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Web Development & Wholesale Broker Portals | RankVRA",
  description:
    "Custom web development, high-trust agency websites, and wholesale broker intake portals for commercial insurance brokerages, wholesale agencies, and underwriting teams.",
  alternates: { canonical: "https://www.rankvra.com/industries/insurance" },
  openGraph: {
    title: "Insurance Web Development & Wholesale Broker Portals | RankVRA",
    description:
      "Specialized web engineering for the insurance industry: retail agency storefronts, wholesale submission portals, policy quote funnels, and technical SEO.",
    url: "https://www.rankvra.com/industries/insurance",
    siteName: "RankVRA",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rankvra.com/industries/insurance#webpage",
      url: "https://www.rankvra.com/industries/insurance",
      name: "Insurance Web Development & Wholesale Broker Portals | RankVRA",
      description:
        "Specialized web engineering and digital acquisition for commercial insurance brokerages and wholesale underwriting platforms.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/industries/insurance#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.rankvra.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          item: "https://www.rankvra.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Insurance",
          item: "https://www.rankvra.com/industries/insurance",
        },
      ],
    },
  ],
};

export default function InsuranceIndustryPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-white via-indigo-50/20 to-[#f8fafc] pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#64748b]">
              <Link href="/" className="hover:text-[#4f46e5]">Home</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <Link href="/services" className="hover:text-[#4f46e5]">Industries</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <span className="text-[#4f46e5] font-semibold">Insurance</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <ShieldCheck size={13} className="text-indigo-600" />
                Specialized Vertical Engineering
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                Insurance Web Development &amp;{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Wholesale Broker Portals.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                RankVRA engineers high-trust digital storefronts for retail insurance agencies and secure submission portals for wholesale brokers. Built on actual project experience with modern US insurance platforms.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Request an Insurance Audit
                </Link>
                <Link
                  href="/case-studies/capital-co-insurance"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  View Capital &amp; Co Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Real Insurance Projects Showcase */}
        <section className="py-16 lg:py-24 border-b border-[#e2e8f0] bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Proven Insurance Deployments
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Real Project Experience in Commercial &amp; Wholesale Insurance
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                We don&apos;t just design generic layouts — we build actual insurance applications and client-acquisition platforms.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Project 1: Capital & Co */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-indigo-200 hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                      Commercial Agency Web Design
                    </span>
                    <span className="text-xs font-semibold text-slate-500">United States</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-2">
                    Capital &amp; Co Insurance Services
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    A comprehensive modern digital presence designed for commercial general liability, commercial property, workers&apos; compensation, and personal lines. Engineered with Next.js for sub-second speeds and streamlined policy inquiry funnels.
                  </p>

                  <div className="space-y-2 mb-6">
                    {[
                      "Multi-step commercial quote intake flow",
                      "Carrier network & trust indicators",
                      "InsuranceAgency Schema.org graph for search engines",
                      "Mobile-first responsive architecture",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href="https://capcoinsurance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={13} />
                  </a>
                  <Link
                    href="/case-studies/capital-co-insurance"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-indigo-600"
                  >
                    Read Technical Deep Dive &rarr;
                  </Link>
                </div>
              </div>

              {/* Project 2: Sterling Wholesale Insurance Portal */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-indigo-200 hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                      Custom Wholesale Web App
                    </span>
                    <span className="text-xs font-semibold text-slate-500">United States</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-2">
                    Sterling Wholesale Insurance Portal
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    A proprietary web application built for appointed retail brokers to submit and track high-volume commercial risks. Replaced manual email back-and-forth with structured data intake, document management, and underwriter status pipelines.
                  </p>

                  <div className="space-y-2 mb-6">
                    {[
                      "Broker authentication & role-based access control (RBAC)",
                      "Automated file submission & underwriting checklist validation",
                      "Real-time quote review & bind status tracking",
                      "Modern React dashboard with single-page application speed",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href="https://app.sterlingwholesaleinsurance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Visit Live Portal</span>
                    <ExternalLink size={13} />
                  </a>
                  <Link
                    href="/case-studies/sterling-insurance-portal"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-indigo-600"
                  >
                    Read Technical Deep Dive &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Breakdown */}
        <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                What We Build
              </span>
              <h2 className="text-3xl font-extrabold text-[#0f172a] mt-2">
                Insurance Web Solutions Engineered for Trust &amp; Throughput
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <PanelsTopLeft size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">Agency Web Design</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-converting digital storefronts for independent brokers and agencies. Designed to articulate commercial policy offerings, build immediate trust, and capture high-intent inbound inquiries.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <FileCheck2 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">Wholesale Broker Portals</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Custom submission portals allowing appointed producers to upload ACORD forms, loss runs, and supplementals directly into structured underwriter review workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Zap size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">Quote Flow Optimization</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Multi-step quote request pathways tailored to specific commercial coverage types (General Liability, Cyber, E&amp;O, Property) that qualify buyers without overwhelming them.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Globe2 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">Commercial Insurance SEO</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Comprehensive entity optimization, InsuranceAgency schema, and topical clusters targeting high-premium commercial policy searches across regional and national markets.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Lock size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">Secure Document Workflows</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Secure intake pipelines, encrypted credential handling, and webhook integrations with insurance CRMs, applied systems, or underwriting management platforms.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Users size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">Direct Founder Collaboration</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Work directly with Founder Naveen Panchal from initial architecture through deployment. Fast turnaround, transparent technical guidance, and zero account manager layers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                  Insurance Web Engineering
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to upgrade your insurance website or broker portal?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Whether you are an independent agency seeking commercial policyholders or a wholesale broker modernizing submission intake, let&apos;s discuss your technical roadmap.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Claim a Free Website Audit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20discuss%20an%20insurance%20web%20project%20with%20RankVRA."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    <MessageCircle size={15} />
                    WhatsApp Naveen Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
