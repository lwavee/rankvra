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
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Full-Stack Web Development Services | End-to-End Solutions | RankVRA",
  description:
    "Complete full-stack engineering: React/Next.js frontends, Node.js/Python backends, PostgreSQL databases, and cloud infrastructure engineered for global businesses.",
  alternates: { canonical: "https://www.rankvra.com/services/full-stack-development" },
  openGraph: {
    title: "Full-Stack Web Development Services | End-to-End Solutions | RankVRA",
    description:
      "End-to-end full-stack web engineering. One cohesive architecture covering frontend UI, backend microservices, database schemas, and automated CI/CD deployments.",
    url: "https://www.rankvra.com/services/full-stack-development",
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
      "@id": "https://www.rankvra.com/services/full-stack-development#service",
      name: "Full-Stack Web Development Services",
      serviceType: "Full Stack Engineering",
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
        "Comprehensive full-stack web application development integrating modern React/Next.js frontends, scalable Node.js/Python backends, relational databases, and automated cloud deployments.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/full-stack-development",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/full-stack-development#breadcrumb",
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
          name: "Full-Stack Development",
          item: "https://www.rankvra.com/services/full-stack-development",
        },
      ],
    },
  ],
};

export default function FullStackDevelopmentPage() {
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
              <span className="text-[#4f46e5] font-semibold">Full-Stack Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 mb-4">
                <Layers size={13} />
                Frontend, Backend & Cloud Architecture
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] leading-[1.15]">
                Full-Stack Web Engineering: Unified Architecture from Database to User Interface
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
                Eliminate friction between separate frontend and backend agencies. RankVRA engineers unified, high-performing full-stack web applications that combine responsive React interfaces with robust Node.js and Python server architectures.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
                >
                  Discuss Your Full-Stack Application
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-bold text-[#0f172a] hover:bg-[#f8fafc] transition-all"
                >
                  Explore Client Portals & Portfolios
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Pillars */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Unified Stack</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                How Our Full-Stack Engineering Approach Operates
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Code2 size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">TypeScript End-to-End</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Shared TypeScript schemas and interfaces between client components and server actions, eliminating serialization errors and accelerating feature shipping.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Database size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Relational Data Integrity</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  PostgreSQL data layers designed with strict relational constraints, automated database migrations, and Redis caching layers for high read/write throughput.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Production Security & CI/CD</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Automated test suites (unit & integration), secure container builds, environment secret isolation, and zero-downtime deployment pipelines across Vercel, AWS, or GCP.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Production Case Study */}
        <section className="bg-white py-16 lg:py-24 border-y border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">Case Study Highlight</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                  Sterling Wholesale Insurance Submission Portal
                </h2>
              </div>
              <a href="https://app.sterlingwholesaleinsurance.com" target="_blank" rel="noopener noreferrer" className="mt-4 sm:mt-0 text-sm font-semibold text-[#4f46e5] hover:underline flex items-center gap-1">
                View Live Application <ExternalLink size={14} />
              </a>
            </div>

            <div className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                    B2B Insurance Workflow & Risk Evaluation Engine
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
                    RankVRA architected the entire full-stack application powering Sterling Wholesale Insurance&apos;s digital submission pipeline. The system provides role-based authentication, ACORD document uploads, automated underwriting notifications, and status tracking for commercial risk placements.
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155] font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#10b981]" />
                      <span>Next.js App Router frontend with real-time submission dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#10b981]" />
                      <span>Role-Based Access Control (Admin, Broker, Underwriter)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#10b981]" />
                      <span>Encrypted cloud storage for proprietary commercial insurance documents</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-4">Full-Stack Architecture</h4>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between pb-2 border-b border-[#f1f5f9]">
                      <span className="text-[#64748b]">Frontend:</span>
                      <span className="font-semibold text-[#0f172a]">Next.js, React, Tailwind CSS</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-[#f1f5f9]">
                      <span className="text-[#64748b]">Backend:</span>
                      <span className="font-semibold text-[#0f172a]">Node.js Server Actions & APIs</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-[#f1f5f9]">
                      <span className="text-[#64748b]">Database:</span>
                      <span className="font-semibold text-[#0f172a]">PostgreSQL Relational Schema</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748b]">Deployment:</span>
                      <span className="font-semibold text-[#0f172a]">Secure Cloud Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">End-to-End Delivery</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Build your full-stack web application with RankVRA
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  From initial schema modeling to production deployment, we deliver clean, performant, and fully documented software with 100% intellectual property ownership transferred to you.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#4338ca] transition-all"
                  >
                    Get a Free Web Development Consultation
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
