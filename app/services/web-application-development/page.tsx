import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  Layers,
  LayoutDashboard,
  Lock,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Application Development | Portals & Dashboards | RankVRA",
  description:
    "Engineering custom web applications, client portals, wholesale submission systems, and operational dashboards built with Next.js, React, TypeScript, and Node.js.",
  alternates: { canonical: "https://www.rankvra.com/services/web-application-development" },
  openGraph: {
    title: "Custom Web Application Development | Portals & Dashboards | RankVRA",
    description:
      "Engineering custom web applications, client portals, wholesale submission systems, and operational dashboards built with Next.js, React, TypeScript, and Node.js.",
    url: "https://www.rankvra.com/services/web-application-development",
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
      "@id": "https://www.rankvra.com/services/web-application-development#service",
      name: "Custom Web Application Development Services",
      serviceType: "Web Application Development",
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
        "End-to-end custom web application engineering: client portals, wholesale submission tools, operational dashboards, and bespoke SaaS platforms.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/web-application-development",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/web-application-development#breadcrumb",
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
          name: "Web Application Development",
          item: "https://www.rankvra.com/services/web-application-development",
        },
      ],
    },
  ],
};

export default function WebApplicationDevelopmentPage() {
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
              <span className="text-[#4f46e5] font-semibold">Web Application Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <LayoutDashboard size={13} className="text-indigo-600" />
                Custom Software Engineering
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                Custom Web Applications &amp;{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Business Portals Built to Scale.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                When off-the-shelf software and generic templates cannot support your operational complexity, RankVRA engineers secure, bespoke web applications: broker intake portals, custom dashboards, client platforms, and SaaS workflow tools.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Consult on Your Web App
                </Link>
                <Link
                  href="/case-studies/sterling-insurance-portal"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  Inspect Sterling Broker Portal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Engineer */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Custom Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Tailored Applications Engineered for Real Workflows
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Lock size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Broker &amp; Partner Portals</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Secure intake platforms with role-based access control (RBAC), multi-file document upload, validation, and real-time status tracking. (Proven in wholesale insurance).
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <LayoutDashboard size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Operational Dashboards</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Single-page applications (SPAs) providing live telemetry, business analytics, order pipelines, and administrative review consoles.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Database size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">B2B Quotation &amp; RFQ Engines</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dynamic multi-SKU quotation engines allowing institutional buyers to configure specifications and submit volume purchase orders without consumer cart friction.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Server size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Custom CRM &amp; Lead Systems</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Lightweight internal customer relationship tools with webhook integrations, WhatsApp notification engines, and inquiry lifecycle management.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Zap size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">SaaS MVPs &amp; Platforms</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rapid development of scalable software-as-a-service MVPs with authentication, database architecture, subscription billing, and responsive interfaces.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">API &amp; Third-Party Integrations</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Reliable integrations with payment processors (Stripe, Razorpay), cloud storage, email providers, and legacy business databases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Feature: Sterling Wholesale Portal */}
        <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-slate-50 p-8 sm:p-12">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                  Real Web Application Case Study
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-3">
                  Sterling Wholesale Insurance Broker Portal
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Engineered a proprietary web application enabling appointed retail brokers to submit and track commercial underwriting risk files in real time. The platform replaced cumbersome email exchanges with automated document validation and real-time underwriter review pipelines.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/case-studies/sterling-insurance-portal"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#4338ca] transition-all"
                  >
                    Read Technical Architecture <ArrowRight size={13} />
                  </Link>
                  <a
                    href="https://app.sterlingwholesaleinsurance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-indigo-600"
                  >
                    <span>View Production Portal</span>
                    <ExternalLink size={13} />
                  </a>
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
                  Architectural Discovery
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Need a custom web application built right the first time?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Discuss your business requirements, authentication needs, and database workflows directly with Founder Naveen Panchal.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Request Architectural Consultation
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20have%20a%20custom%20web%20application%20project%20to%20discuss."
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
