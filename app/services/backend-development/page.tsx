import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Database,
  ExternalLink,
  Layers,
  Lock,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Backend Development Services | Node.js, Python & Cloud APIs | RankVRA",
  description:
    "Engineering high-throughput, secure backend systems, REST/GraphQL APIs, and database architectures using Node.js, Python, PostgreSQL, and Redis for growing enterprises.",
  alternates: { canonical: "https://www.rankvra.com/services/backend-development" },
  openGraph: {
    title: "Backend Development Services | Node.js, Python & Cloud APIs | RankVRA",
    description:
      "Enterprise backend development: database architecture, microservices, asynchronous message queues, and bulletproof security protocols for high-traffic web applications.",
    url: "https://www.rankvra.com/services/backend-development",
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
      "@id": "https://www.rankvra.com/services/backend-development#service",
      name: "Backend Web Development Services",
      serviceType: "Backend Engineering",
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
        "High-performance backend engineering utilizing Node.js, Python (FastAPI), PostgreSQL, Redis caching, and Docker containerization. Focused on sub-100ms API response times, multi-tenant database isolation, and OWASP Top 10 security compliance.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/backend-development",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/backend-development#breadcrumb",
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
          name: "Backend Development",
          item: "https://www.rankvra.com/services/backend-development",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/services/backend-development#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which backend languages and frameworks do you specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We specialize in TypeScript/Node.js (Express, NestJS, Next.js Server Actions) and Python (FastAPI, Django). We choose the stack based on concurrency needs, compute intensity, and ecosystem integration.",
          },
        },
        {
          "@type": "Question",
          name: "How do you protect backend databases and APIs against security threats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We implement strict parameterized SQL queries via modern ORMs (Prisma, SQLAlchemy) to eliminate SQL injection, enforce bcrypt/Argon2 password hashing, employ JWT with secure HTTP-only cookie storage, and set up Redis-based API rate limiting.",
          },
        },
        {
          "@type": "Question",
          name: "Can you scale an existing legacy backend that suffers from bottlenecks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We perform database query profiling, add composite indexing, implement Redis caching layers for read-heavy workloads, and decouple blocking tasks using background worker queues (Celery, BullMQ).",
          },
        },
      ],
    },
  ],
};

export default function BackendDevelopmentPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-white via-indigo-50/20 to-[#f8fafc] pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#64748b]">
              <Link href="/" className="hover:text-[#4f46e5]">Home</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <Link href="/services" className="hover:text-[#4f46e5]">Services</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <span className="text-[#4f46e5] font-semibold">Backend Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 mb-4">
                <Server size={13} />
                Node.js, Python & Relational Databases
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] leading-[1.15]">
                Backend Engineering Built for High Concurrency, Data Integrity & Security
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
                We design and build reliable backend architectures: high-throughput REST and GraphQL APIs, relational database schemas, asynchronous task queues, and zero-trust authentication protocols.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
                >
                  Discuss Your Backend Architecture
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

        {/* Core Pillars */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Backend Foundations</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                The Non-Negotiable Pillars of Modern Backend Systems
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Database size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Normalized Database Design</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  PostgreSQL and MySQL database schemas structured with clean foreign-key constraints, index optimization, and transaction ACID guarantees to prevent data corruption.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Lock size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">OWASP-Compliant Security</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Granular Role-Based Access Control (RBAC), multi-factor authentication (MFA), cryptographic secret isolation, and sanitization defending against OWASP Top 10 vulnerabilities.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Zap size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Sub-100ms API Response</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  In-memory Redis caching, asynchronous job workers (BullMQ, Celery), connection pooling, and payload compression to guarantee rapid server response times even under heavy traffic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Grid */}
        <section className="bg-white py-16 lg:py-24 border-y border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Capabilities</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Backend Services We Deliver
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Custom REST & GraphQL APIs", desc: "Clean, documented OpenAPI/Swagger endpoints built with Node.js Express, NestJS, or Python FastAPI." },
                { title: "Database Migration & Tuning", desc: "Zero-downtime schema migrations, query plan analysis (EXPLAIN ANALYZE), and read-replica configurations." },
                { title: "Microservices & Message Queues", desc: "Decoupled system architecture using RabbitMQ, Redis, or Apache Kafka for asynchronous order processing and data pipelines." },
                { title: "Third-Party Webhooks & Sync", desc: "Bidirectional data synchronization with CRMs (HubSpot, Salesforce), ERPs, payment processors, and accounting tools." },
                { title: "Cloud Deployment & Docker", desc: "Containerized application packaging, AWS/GCP infrastructure provisioning, automated CI/CD pipelines, and health monitoring." },
                { title: "Enterprise Identity & Auth", desc: "OAuth2, OpenID Connect, SAML single sign-on (SSO), and session management compliant with enterprise security standards." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-[#f1f5f9] bg-[#f8fafc] hover:border-[#cbd5e1] transition-all">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#0f172a] mb-2">
                    <CheckCircle2 size={16} className="text-[#10b981]" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Case Studies Verification */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">Verified Case Study</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                  High-Security Commercial Backend Infrastructure
                </h2>
              </div>
              <Link href="/case-studies" className="mt-4 sm:mt-0 text-sm font-semibold text-[#4f46e5] hover:underline flex items-center gap-1">
                View all case studies <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl border border-[#e2e8f0] bg-white shadow-xs">
                <div className="text-xs font-semibold uppercase text-indigo-600 mb-2">Commercial Wholesale Portal</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Sterling Wholesale Insurance Portal</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  Built a secure multi-tenant backend handling encrypted document uploads, ACORD insurance form data parsing, underwriter workflow assignment, and real-time status tracking for high-volume brokerage submissions.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9]">
                  <span className="text-xs font-bold text-[#10b981]">Encrypted Multi-Tenant DB</span>
                  <a href="https://app.sterlingwholesaleinsurance.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#4f46e5] hover:underline flex items-center gap-1">
                    View Wholesale Portal <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-3xl border border-[#e2e8f0] bg-white shadow-xs">
                <div className="text-xs font-semibold uppercase text-indigo-600 mb-2">Scientific & Research Platform</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">E-Biozone Platform</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  Engineered backend catalog search and structured data models for specialized scientific equipment and laboratory solutions, ensuring high indexing velocity and fast product inquiries.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9]">
                  <span className="text-xs font-bold text-[#10b981]">Structured Catalog Backend</span>
                  <a href="https://www.e-biozone.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#4f46e5] hover:underline flex items-center gap-1">
                    Visit E-Biozone <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Card */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">Backend Engineering Consultation</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Need a secure, scalable backend for your web application?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Connect with RankVRA to architect your database, audit API performance, and deploy scalable cloud microservices tailored to your business roadmap.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#4338ca] transition-all"
                  >
                    Discuss Your Backend Architecture
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/services/web-application-development"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    Explore Web Application Development
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
