import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Globe2,
  Layers,
  MonitorSmartphone,
  RefreshCw,
  Search,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Redesign Services for Growing Businesses | RankVRA",
  description:
    "Modernize outdated, slow business websites. RankVRA engineers custom Next.js website redesigns that achieve sub-second speeds, protect SEO rankings with 301 redirect architecture, and lift inbound inquiries.",
  alternates: { canonical: "https://www.rankvra.com/services/website-redesign" },
  openGraph: {
    title: "Website Redesign Services for Growing Businesses | RankVRA",
    description:
      "Modernize outdated, slow business websites. Sub-second speeds, Core Web Vitals pass scores, complete SEO ranking protection, and higher conversion rates.",
    url: "https://www.rankvra.com/services/website-redesign",
    siteName: "RankVRA",
    locale: "en_US",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.rankvra.com/services/website-redesign#service",
      name: "Website Redesign Services",
      serviceType: "Website Redesign",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "India" },
      ],
      description:
        "Comprehensive website modernization and redesign services. Upgrades legacy WordPress or slow template websites into sub-second Next.js web applications with strict SEO preservation.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/website-redesign",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/website-redesign#breadcrumb",
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
          name: "Services",
          item: "https://www.rankvra.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Website Redesign",
          item: "https://www.rankvra.com/services/website-redesign",
        },
      ],
    },
  ],
};

export default function WebsiteRedesignServicePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-white via-indigo-50/20 to-[#f8fafc] pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#64748b]">
              <Link href="/" className="hover:text-[#4f46e5]">Home</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <Link href="/services" className="hover:text-[#4f46e5]">Services</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <span className="text-[#4f46e5] font-semibold">Website Redesign</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <RefreshCw size={13} className="text-indigo-600" />
                Performance &amp; Modernization
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                Website Redesign Services Built for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Speed, Search &amp; Higher Conversions.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Is an outdated, slow website hurting your business credibility? We migrate sluggish legacy sites to modern Next.js architecture, protecting your existing search rankings while transforming user experience.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Request a Redesign Audit
                </Link>
                <Link
                  href="/case-studies"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  View Proven Outcomes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Signs Your Business Needs a Redesign */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Diagnostic Indicators
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                5 Signs Your Current Website Is Costing You Revenue
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Mobile Load Time Over 3 Seconds",
                  desc: "Google data shows that over 50% of mobile users abandon pages that take longer than 3 seconds to load. Legacy CMS plugins degrade speed significantly.",
                  icon: Gauge,
                },
                {
                  title: "Failing Google Core Web Vitals",
                  desc: "Poor Largest Contentful Paint (LCP) and high Cumulative Layout Shift (CLS) directly damage organic search rank positioning.",
                  icon: Zap,
                },
                {
                  title: "High Bounce Rate on Inquiry Forms",
                  desc: "Cluttered, multi-field generic contact forms cause commercial prospects to exit before submitting their details.",
                  icon: MonitorSmartphone,
                },
                {
                  title: "Outdated Brand Presentation",
                  desc: "Design styles from 2017 make modern buyers question if your company is still active, technically capable, and well-supported.",
                  icon: Layers,
                },
                {
                  title: "Zero Inbound Organic Search Traction",
                  desc: "Missing structured schema graphs, unoptimized heading hierarchies, and disorganized URL structures render the site invisible to Google.",
                  icon: Search,
                },
                {
                  title: "Frequent Plugin & Security Crashes",
                  desc: "Vulnerable WordPress plugins require constant maintenance updates and risk site defacement or data breaches.",
                  icon: ShieldCheck,
                },
              ].map((sign, i) => {
                const Icon = sign.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                    <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{sign.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{sign.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO Preservation Protocol */}
        <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                  Zero Ranking Loss
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mt-2 mb-6">
                  Our Strict SEO Preservation Protocol During Redesigns
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  The biggest fear in website redesigns is losing existing Google rankings and organic search traffic. Inexperienced agencies change URLs, delete indexed content, and destroy years of established authority.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  RankVRA follows a disciplined migration roadmap that protects and elevates your search standing:
                </p>

                <div className="space-y-3">
                  {[
                    "Complete URL Inventory & Crawl Map: Every existing indexed URL is documented before code changes.",
                    "1-to-1 301 Redirect Architecture: Zero broken links or 404 dead ends across the entire domain.",
                    "Metadata & Heading Preservation: Retaining keyword-rich titles, meta descriptions, and semantic headings.",
                    "Schema Graph Enrichment: Upgrading old microdata into modern, connected JSON-LD schemas.",
                    "Post-Launch Search Console Monitoring: Live tracking of Google index status and crawl error resolution.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                      <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transformation Comparison Box */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                  What Happens During a RankVRA Redesign
                </h3>
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100">
                    <p className="font-bold text-rose-800 mb-1">Your Legacy State:</p>
                    <p className="text-slate-600 leading-relaxed">
                      4.5s+ mobile load time, bloated CSS/JS bundles, failing Core Web Vitals, confusing navigation, and generic form submissions.
                    </p>
                  </div>
                  <div className="flex justify-center text-indigo-600 font-bold">
                    &darr; Upgraded to Modern Architecture &darr;
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <p className="font-bold text-emerald-800 mb-1">Your Redesigned RankVRA Platform:</p>
                    <p className="text-slate-600 leading-relaxed">
                      Sub-second mobile speed (&lt;0.8s LCP), clean Next.js 16 SSR, 100/100 Core Web Vitals, authoritative visual trust, and streamlined conversion pathways.
                    </p>
                  </div>
                </div>
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
                  Start With a Technical Audit
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to modernize your website without losing SEO?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Connect directly with Founder Naveen Panchal to audit your current site speed, ranking assets, and redesign potential.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Claim a Free Website Audit
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/services/web-development"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    Explore Web Development
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
