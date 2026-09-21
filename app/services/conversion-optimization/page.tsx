import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Filter,
  Layers,
  MessageSquare,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization & Funnel Engineering | RankVRA",
  description:
    "Turn website traffic into qualified phone calls, booked consultations, and commercial RFQs. Frictionless inquiry pathways and UX conversion engineering.",
  alternates: { canonical: "https://www.rankvra.com/services/conversion-optimization" },
  openGraph: {
    title: "Conversion Rate Optimization & Funnel Engineering | RankVRA",
    description:
      "Turn website traffic into qualified phone calls, booked consultations, and commercial RFQs. Frictionless inquiry pathways and UX conversion engineering.",
    url: "https://www.rankvra.com/services/conversion-optimization",
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
      "@id": "https://www.rankvra.com/services/conversion-optimization#service",
      name: "Conversion Rate Optimization Services",
      serviceType: "Conversion Optimization",
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
        "Commercial conversion rate optimization: user flow analysis, quote funnel architecture, mobile checkout optimization, and lead capture engineering.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/conversion-optimization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/conversion-optimization#breadcrumb",
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
          name: "Conversion Optimization",
          item: "https://www.rankvra.com/services/conversion-optimization",
        },
      ],
    },
  ],
};

export default function ConversionOptimizationPage() {
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
              <span className="text-[#4f46e5] font-semibold">Conversion Optimization</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <TrendingUp size={13} className="text-indigo-600" />
                Inbound Pipeline Growth
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                Conversion Rate Optimization Built for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Qualified Client Inquiries.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Website traffic is useless if visitors leave without taking action. We engineer high-converting user journeys, eliminate form friction, and structure clear inquiry pathways that convert clicks into business revenue.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Get a Conversion Audit
                </Link>
                <Link
                  href="/case-studies"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  View Client Outcomes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Levers */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Engineering Frictionless Funnels
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                How We Turn Passive Visitors into Inbound Leads
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Filter size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Segmented Inquiry Funnels</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Replacing generic &quot;contact us&quot; boxes with multi-step inquiry pathways tailored to specific services (e.g., policy type, company size, project scope).
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Zap size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Sub-Second Mobile Speeds</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Page load delay is the single largest cause of mobile bounce. Every 100ms improvement directly reduces bounce rates and lifts form submission rates.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Authority &amp; Proof Engineering</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Positioning verifiable client case studies, live links, licensing badges, and security seals right at the point of decision.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <MousePointerClick size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Actionable CTA Architecture</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structuring primary CTAs (&quot;Get a Free Website Audit&quot;) and secondary CTAs (&quot;View Case Studies&quot;) to give buyers comfortable entry points.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Instant Channel Workflows</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct WhatsApp Business routing and instant webhook alerts to sales desks, reducing response times from days to minutes.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Layers size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Copywriting Clarity</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rewriting vague marketing fluff into concrete explanations of deliverables, processes, technical capabilities, and business benefits.
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
                  Stop Wasting Traffic
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Let&apos;s audit your user journey and conversion bottlenecks
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Send us your URL and tell us what you sell. We will review your headline clarity, CTA placement, mobile forms, and speed.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Request Free Conversion Audit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20improve%20conversions%20on%20my%20website."
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
