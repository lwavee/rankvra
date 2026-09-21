import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  DollarSign,
  ExternalLink,
  Globe2,
  Lock,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development & SEO Services for US Businesses | RankVRA",
  description:
    "Custom Next.js web development, commercial insurance portals, and technical SEO engineered for US businesses. Delivered from India with direct founder communication and EST/PST overlap.",
  alternates: { canonical: "https://www.rankvra.com/markets/usa" },
  openGraph: {
    title: "Web Development & SEO Services for US Businesses | RankVRA",
    description:
      "Custom Next.js web development, commercial insurance portals, and technical SEO engineered for US businesses.",
    url: "https://www.rankvra.com/markets/usa",
    siteName: "RankVRA",
    locale: "en_US",
    type: "website",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rankvra.com/markets/usa#webpage",
      url: "https://www.rankvra.com/markets/usa",
      name: "Web Development & SEO Services for US Businesses | RankVRA",
      description:
        "High-performance custom web development, insurance portals, and technical search growth systems for companies in the United States.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/markets/usa#breadcrumb",
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
          name: "Markets",
          item: "https://www.rankvra.com/markets",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "United States",
          item: "https://www.rankvra.com/markets/usa",
        },
      ],
    },
  ],
};

export default function UsaMarketPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-white via-indigo-50/20 to-[#f8fafc] pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#64748b]">
              <Link href="/" className="hover:text-[#4f46e5]">Home</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <Link href="/markets" className="hover:text-[#4f46e5]">Markets</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <span className="text-[#4f46e5] font-semibold">United States</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <span className="text-base">🇺🇸</span>
                <span>US Market Engineering</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                Web Development &amp; SEO Services for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  US Businesses &amp; Agencies.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                RankVRA provides engineering-first web development, custom portal architecture, and technical SEO for American companies. We combine software-grade Next.js development with cost-effective cross-border delivery and reliable timezone communication.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Request a Free US Website Audit
                </Link>
                <Link
                  href="/case-studies/capital-co-insurance"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  Inspect US Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Real US Projects Showcase */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Proven US Deployments
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Real Project Experience Serving US Commercial Clients
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Capital & Co */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-indigo-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                      Commercial Insurance Web Design
                    </span>
                    <span className="text-xs font-semibold text-slate-500">United States</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Capital &amp; Co Insurance Services
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Full-cycle Next.js web application engineered for a modern US insurance brokerage. Features multi-step quote request pathways, carrier trust signals, and structured InsuranceAgency schema.
                  </p>
                  <div className="space-y-2 mb-6 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>Sub-second mobile speed on US cellular networks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>Commercial General Liability &amp; Property quote flows</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href="https://capcoinsurance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Visit capcoinsurance.com</span>
                    <ExternalLink size={12} />
                  </a>
                  <Link
                    href="/case-studies/capital-co-insurance"
                    className="text-xs font-bold text-slate-900 hover:text-indigo-600"
                  >
                    Read Technical Study &rarr;
                  </Link>
                </div>
              </div>

              {/* Sterling Wholesale */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-indigo-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                      Custom Wholesale Portal
                    </span>
                    <span className="text-xs font-semibold text-slate-500">United States</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Sterling Wholesale Insurance Portal
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    A proprietary web application built for US retail insurance brokers to submit high-volume commercial risks directly to underwriters with validation and live status tracking.
                  </p>
                  <div className="space-y-2 mb-6 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>Broker authentication and secure RBAC sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>Automated document validation and underwriting pipeline</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href="https://app.sterlingwholesaleinsurance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Visit app.sterlingwholesaleinsurance.com</span>
                    <ExternalLink size={12} />
                  </a>
                  <Link
                    href="/case-studies/sterling-insurance-portal"
                    className="text-xs font-bold text-slate-900 hover:text-indigo-600"
                  >
                    Read Technical Study &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work with US Clients */}
        <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Cross-Border Collaboration
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Seamless Communication, Process &amp; Standards
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <Clock size={22} className="text-indigo-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-2">Timezone Overlap</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We schedule overlapping work hours with Eastern (EST) and Pacific (PST) time zones for daily standups, sprint reviews, and live Slack coordination.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <Code2 size={22} className="text-indigo-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-2">Modern Engineering</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zero outdated PHP templates. We build strictly with React, Next.js, TypeScript, and modern CSS architecture hosted on US edge nodes (Vercel, AWS).
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <DollarSign size={22} className="text-indigo-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-2">Simple US Invoicing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transparent fixed-scope or milestone pricing billed in USD. Seamless international wire transfer or card payment processing without administrative friction.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <ShieldCheck size={22} className="text-indigo-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-2">100% IP Ownership</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All repositories, design assets, and cloud deployment pipelines belong entirely to you under straightforward international IP assignment agreements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                  US Business Web Engineering
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Looking for a capable engineering partner for your US business?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Connect directly with Founder Naveen Panchal. We will review your current platform and walk you through real US project case studies.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Get a Free Website Audit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'm%20based%20in%20the%20US%20and%20would%20like%20to%20discuss%20a%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    WhatsApp Founder Naveen
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
