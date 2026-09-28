import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Database,
  ExternalLink,
  Layers,
  LayoutDashboard,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom CRM Development Services | Tailored Business Solutions | RankVRA",
  description:
    "Custom CRM software engineering: bespoke sales pipelines, automated lead routing, communication history, and zero recurring per-user licensing fees.",
  alternates: { canonical: "https://www.rankvra.com/services/custom-crm-development" },
  openGraph: {
    title: "Custom CRM Development Services | Tailored Business Solutions | RankVRA",
    description:
      "Replace rigid generic CRMs with software built specifically for your exact operations. 100% custom data models, automated follow-ups, and full source code ownership.",
    url: "https://www.rankvra.com/services/custom-crm-development",
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
      "@id": "https://www.rankvra.com/services/custom-crm-development#service",
      name: "Custom CRM Development Services",
      serviceType: "Enterprise CRM Software Engineering",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "India" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
      ],
      description:
        "Bespoke Customer Relationship Management (CRM) development engineered to match exact company workflows, featuring automated lead scoring, communication logging, and complete proprietary ownership.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/custom-crm-development",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/custom-crm-development#breadcrumb",
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
          name: "Custom CRM Development",
          item: "https://www.rankvra.com/services/custom-crm-development",
        },
      ],
    },
  ],
};

export default function CustomCrmDevelopmentPage() {
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
              <span className="text-[#4f46e5] font-semibold">Custom CRM Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 mb-4">
                <Users size={13} />
                Tailored Operations &amp; Zero Per-Seat Licensing
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] leading-[1.15]">
                Custom CRM Development Engineered Around Your Exact Business Workflow
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
                Break free from expensive, bloated off-the-shelf CRMs that charge thousands in monthly per-seat fees. We build bespoke CRM software tailored to your specific sales stages, quotation workflows, client communication channels, and internal team roles.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
                >
                  Discuss Your CRM Requirements
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services/web-application-development"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-bold text-[#0f172a] hover:bg-[#f8fafc] transition-all"
                >
                  Explore Web Application Portals
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Bespoke Advantage</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Why Growing Companies Build Custom CRM Platforms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Database size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Zero Per-User Licensing</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  As your sales, operations, and support teams scale from 10 to 200 users, your software costs do not increase. You own 100% of the platform and database.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <BarChart3 size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Exact Workflow Alignment</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  No awkward workarounds or forced generic stages. Every data field, pipeline column, and approval button matches your real business process.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Proprietary Data Security</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Your customer contacts, pricing matrices, and sales figures reside on your dedicated private cloud servers, protected by strict encryption and role-based permissions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">Custom Software Assessment</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to evaluate custom CRM development for your company?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Let&apos;s analyze your current CRM spend, operational friction, and feature requirements to determine if custom software engineering delivers superior long-term ROI.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#4338ca] transition-all"
                  >
                    Discuss Your CRM Requirements
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/services/web-development"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    Explore Web Development Services
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
