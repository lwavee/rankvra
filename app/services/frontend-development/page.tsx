import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  Layers,
  Layout,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Frontend Development Services | Next.js, React & TypeScript | RankVRA",
  description:
    "RankVRA engineers high-speed, accessible, and conversion-optimized frontend web applications using React, Next.js, and TypeScript for businesses across the US, UK, Canada, and India.",
  alternates: { canonical: "https://www.rankvra.com/services/frontend-development" },
  openGraph: {
    title: "Frontend Development Services | Next.js, React & TypeScript | RankVRA",
    description:
      "Enterprise-grade frontend development. We engineer sub-second page transitions, responsive user interfaces, and accessible design systems tailored for business growth.",
    url: "https://www.rankvra.com/services/frontend-development",
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
      "@id": "https://www.rankvra.com/services/frontend-development#service",
      name: "Frontend Web Development Services",
      serviceType: "Frontend Engineering",
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
        "Custom frontend web engineering utilizing React 19, Next.js App Router, TypeScript, and modern CSS architecture. Focused on sub-second rendering, 100% Core Web Vitals compliance, and high-conversion UX.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/frontend-development",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/frontend-development#breadcrumb",
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
          name: "Frontend Development",
          item: "https://www.rankvra.com/services/frontend-development",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/services/frontend-development#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why choose React and Next.js for frontend web development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "React combined with Next.js provides hybrid rendering (Server Components, Static Site Generation, and client hydration). This ensures immediate first contentful paint (FCP), flawless Core Web Vitals, and effortless search engine crawling.",
          },
        },
        {
          "@type": "Question",
          name: "How do you ensure frontend applications perform well on mobile devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We adhere strictly to mobile-first CSS architecture, minimize client-side JavaScript execution to protect Interaction to Next Paint (INP), implement responsive image formatting (AVIF/WebP), and audit layouts across genuine mobile viewports.",
          },
        },
        {
          "@type": "Question",
          name: "Can RankVRA integrate with our existing backend or headless CMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We engineer frontends that connect seamlessly via REST or GraphQL APIs to headless CMS systems (Strapi, Sanity, Contentful), custom backend microservices (Node.js, Python, Go), or legacy enterprise databases.",
          },
        },
      ],
    },
  ],
};

export default function FrontendDevelopmentPage() {
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
              <span className="text-[#4f46e5] font-semibold">Frontend Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 mb-4">
                <Code2 size={13} />
                React 19 & Next.js Architecture
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] leading-[1.15]">
                Frontend Web Development Engineered for Speed, Scale & Conversion
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
                We craft responsive, ultra-fast frontend applications with clean TypeScript code. Eliminate client-side bloat, achieve flawless Core Web Vitals, and deliver digital experiences that convert visitors into paying clients.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
                >
                  Discuss Your Frontend Project
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-bold text-[#0f172a] hover:bg-[#f8fafc] transition-all"
                >
                  View Client Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Engineering Standards</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Why Modern Frontend Architecture Demands Custom Engineering
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Zap size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Sub-Second Interactive Speed</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  We leverage Next.js Server Components and selective client-side hydration to keep JavaScript bundles minimal, ensuring immediate Interaction to Next Paint (INP) under 50ms.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <MonitorSmartphone size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Fluid Mobile-First UX</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Over 65% of commercial traffic originates from mobile devices. We architect fluid typography, native-feeling gesture interactions, and zero layout shift (CLS = 0).
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">TypeScript Type Safety</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Every interface, component prop, and API response payload is strictly typed with TypeScript. This prevents runtime errors and guarantees predictable frontend behavior at scale.
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
                Frontend Engineering Deliverables
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "React & Next.js Web Apps", desc: "Interactive dashboards, client portals, and complex SaaS applications built with modern React hooks and state management." },
                { title: "Design System Architecture", desc: "Reusable atomic component libraries using Tailwind CSS and accessible primitives (Radix UI, Headless UI)." },
                { title: "Headless CMS Integration", desc: "Decoupled frontend connected via typed APIs to Sanity, Strapi, Contentful, or custom WordPress REST backends." },
                { title: "Core Web Vitals Optimization", desc: "Complete remediation of Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)." },
                { title: "Progressive Web Apps (PWA)", desc: "Offline caching, service workers, and app-like installation capabilities for mobile browsers." },
                { title: "WCAG Accessibility Compliance", desc: "Semantic HTML5, ARIA landmarks, keyboard navigation, and screen-reader testing ensuring full accessibility." }
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">Verified Outcomes</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                  Real Production Frontends Built by RankVRA
                </h2>
              </div>
              <Link href="/case-studies" className="mt-4 sm:mt-0 text-sm font-semibold text-[#4f46e5] hover:underline flex items-center gap-1">
                View all case studies <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl border border-[#e2e8f0] bg-white shadow-xs">
                <div className="text-xs font-semibold uppercase text-indigo-600 mb-2">US Commercial Insurance Brokerage</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Capital & Co Insurance Services</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  Engineered a modern, responsive web application for commercial policy acquisition with streamlined multi-step quote pathways, sub-second page transitions, and comprehensive InsuranceAgency structured data.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9]">
                  <span className="text-xs font-bold text-[#10b981]">100% Custom React / Next.js</span>
                  <a href="https://capcoinsurance.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#4f46e5] hover:underline flex items-center gap-1">
                    Visit Live Platform <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-3xl border border-[#e2e8f0] bg-white shadow-xs">
                <div className="text-xs font-semibold uppercase text-indigo-600 mb-2">Commercial Wholesale Portal</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Sterling Wholesale Insurance Portal</h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  Designed and developed the frontend submission dashboard enabling independent retail agents to submit complex commercial risk files, upload ACORD forms, and track quote status in real time.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9]">
                  <span className="text-xs font-bold text-[#10b981]">Enterprise Role-Based Frontend</span>
                  <a href="https://app.sterlingwholesaleinsurance.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#4f46e5] hover:underline flex items-center gap-1">
                    Explore Portal <ExternalLink size={12} />
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
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">Custom Engineering Consultation</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to upgrade your web frontend to Next.js?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Speak directly with lead technical architect Naveen Panchal. We audit your current frontend bottlenecks, evaluate component architecture, and provide a clear engineering roadmap.
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
