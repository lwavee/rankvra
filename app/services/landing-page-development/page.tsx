import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Focus,
  Gauge,
  Layers,
  MessageCircle,
  MousePointerClick,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Landing Page Development for High-ROAS Campaigns | RankVRA",
  description:
    "Custom, ultra-fast landing pages engineered for Google Ads, paid campaigns, and commercial B2B lead generation. Sub-second mobile speeds and high conversion architecture.",
  alternates: { canonical: "https://www.rankvra.com/services/landing-page-development" },
  openGraph: {
    title: "Landing Page Development for High-ROAS Campaigns | RankVRA",
    description:
      "Custom, ultra-fast landing pages engineered for Google Ads, paid campaigns, and commercial B2B lead generation. Sub-second mobile speeds and high conversion architecture.",
    url: "https://www.rankvra.com/services/landing-page-development",
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
      "@id": "https://www.rankvra.com/services/landing-page-development#service",
      name: "Landing Page Development Services",
      serviceType: "Landing Page Development",
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
        "High-performance campaign landing page engineering: focused message match, sub-second mobile page loads, frictionless inquiry forms, and direct webhook lead routing.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/landing-page-development",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/landing-page-development#breadcrumb",
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
          name: "Landing Page Development",
          item: "https://www.rankvra.com/services/landing-page-development",
        },
      ],
    },
  ],
};

export default function LandingPageDevelopmentPage() {
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
              <span className="text-[#4f46e5] font-semibold">Landing Page Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <Target size={13} className="text-indigo-600" />
                High-ROAS Campaign Engineering
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                High-Converting Landing Pages Engineered for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Paid Search &amp; Ads.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Sending expensive Google Ads or paid campaign traffic to a generic homepage burns marketing budget. We engineer ultra-fast, dedicated landing pages with strict message match, zero navigation distractions, and high conversion throughput.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Audit Your Landing Page
                </Link>
                <Link
                  href="/services/google-ads"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  Google Ads Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Conversion Anatomy
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Why Our Landing Pages Convert Paid Clicks into Real Clients
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Focus size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">1:1 Message Match</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The headline, value proposition, and offer directly mirror the exact search query and ad copy, confirming the user is in the right place.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Gauge size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Sub-Second Mobile Paint</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No slow template plugins. Custom Next.js code ensures the page renders instantly when a smartphone user clicks your paid advertisement.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <MousePointerClick size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Zero Leaks</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We eliminate header navigation menus and external distraction links. Visitors have one clear choice: engage with the offer or exit.
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
                  Stop Burning Ad Spend
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Get high-converting landing pages built for your active campaigns
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Send us your campaign goals or ad concepts. Founder Naveen Panchal will review your funnel and propose high-converting architecture.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Request Landing Page Audit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20build%20a%20high-converting%20landing%20page."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
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
