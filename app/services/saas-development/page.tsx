import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Database,
  ExternalLink,
  Layers,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Application Development Services | Multi-Tenant Architecture | RankVRA",
  description:
    "Engineering scalable B2B SaaS web applications: multi-tenant database isolation, subscription billing (Stripe), role-based permissions, and automated onboarding.",
  alternates: { canonical: "https://www.rankvra.com/services/saas-development" },
  openGraph: {
    title: "SaaS Application Development Services | Multi-Tenant Architecture | RankVRA",
    description:
      "From MVP to scalable software-as-a-service. We build high-performance multi-tenant SaaS platforms with automated billing, RBAC, and SOC-2-ready security controls.",
    url: "https://www.rankvra.com/services/saas-development",
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
      "@id": "https://www.rankvra.com/services/saas-development#service",
      name: "SaaS Web Application Development",
      serviceType: "SaaS Product Engineering",
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
        "Full-cycle Software-as-a-Service (SaaS) web application development: multi-tenant architecture, Stripe Billing integration, role-based access control, and customer analytics dashboards.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/saas-development",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/saas-development#breadcrumb",
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
          name: "SaaS Development",
          item: "https://www.rankvra.com/services/saas-development",
        },
      ],
    },
  ],
};

export default function SaasDevelopmentPage() {
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
              <span className="text-[#4f46e5] font-semibold">SaaS Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 mb-4">
                <Sparkles size={13} />
                Multi-Tenant Architecture &amp; Billing
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] leading-[1.15]">
                Custom SaaS Web Application Development for B2B &amp; Modern Startups
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
                Transform your software vision into a production-ready, subscription-generating SaaS platform. We architect resilient multi-tenant databases, frictionless Stripe billing engines, granular role-based permissions, and responsive user portals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
                >
                  Discuss Your SaaS Product
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services/web-application-development"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-bold text-[#0f172a] hover:bg-[#f8fafc] transition-all"
                >
                  View Web Application Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Core Foundations</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                What Powers a High-Growth SaaS Application
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Database size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Multi-Tenant Isolation</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Rigorous tenant data isolation with Row-Level Security (RLS) in PostgreSQL or dedicated schema partitions, ensuring zero cross-tenant data leakage.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <CreditCard size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Automated Subscription Billing</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Seamless Stripe Billing integration with prorated upgrades, self-service customer portals, trial periods, and automated failed payment recovery (dunning).
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Users size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Role-Based Access (RBAC)</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Granular permission matrices enabling team member invitations, audit logs, admin overrides, and single sign-on (SSO) for enterprise customers.
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
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">Software Engineering Partnership</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to architect your SaaS product?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Avoid costly architectural rewrites. Partner with RankVRA to build a secure, scalable SaaS foundation that can support thousands of concurrent tenants.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#4338ca] transition-all"
                  >
                    Discuss Your SaaS Product
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
