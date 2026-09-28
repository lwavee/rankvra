import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Gauge,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Performance Optimization & Core Web Vitals Audit | RankVRA",
  description:
    "Speed up your slow website or web app. We eliminate main-thread blocking, optimize Largest Contentful Paint (LCP < 1.2s), resolve INP latency, and achieve 95+ PageSpeed scores.",
  alternates: { canonical: "https://www.rankvra.com/services/web-performance-optimization" },
  openGraph: {
    title: "Website Performance Optimization & Core Web Vitals Audit | RankVRA",
    description:
      "Sub-second website speed engineering. We diagnose JavaScript bloat, optimize database queries, implement edge caching, and guarantee flawless Google Core Web Vitals.",
    url: "https://www.rankvra.com/services/web-performance-optimization",
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
      "@id": "https://www.rankvra.com/services/web-performance-optimization#service",
      name: "Web Performance Optimization Services",
      serviceType: "Technical Web Optimization",
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
        "Comprehensive website speed engineering: Core Web Vitals remediation (LCP, INP, CLS), JavaScript bundle reduction, image compression (AVIF/WebP), CDN edge caching, and server response optimization.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/web-performance-optimization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/web-performance-optimization#breadcrumb",
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
          name: "Web Performance Optimization",
          item: "https://www.rankvra.com/services/web-performance-optimization",
        },
      ],
    },
  ],
};

export default function WebPerformanceOptimizationPage() {
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
              <span className="text-[#4f46e5] font-semibold">Web Performance</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 mb-4">
                <Gauge size={13} />
                Sub-Second Speed &amp; 95+ PageSpeed Scores
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] leading-[1.15]">
                Website Performance Optimization: Turn Speed Bottlenecks into Revenue
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
                Slow page loads hurt conversions and drag down Google rankings. We perform deep architectural audits to eliminate render-blocking JavaScript, slash Time to First Byte (TTFB), optimize Core Web Vitals, and deliver blistering sub-second user experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/free-website-audit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
                >
                  Request a Website Performance Audit
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-bold text-[#0f172a] hover:bg-[#f8fafc] transition-all"
                >
                  Explore Next.js Development
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Metrics That Matter</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Mastering Google&apos;s Core Web Vitals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Zap size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Largest Contentful Paint (LCP &lt; 1.2s)</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Optimizing hero resource delivery through next-gen AVIF images, critical inline CSS, preconnect headers, and Server-Side Rendering (SSR).
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Activity size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Interaction to Next Paint (INP &lt; 50ms)</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Eliminating main-thread locking by deferring non-critical scripts, breaking up long tasks, and optimizing React component re-rendering cycles.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Cpu size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Cumulative Layout Shift (CLS = 0)</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Explicit aspect-ratio image bounding boxes, webfont preload display swap, and dynamic container sizing preventing jarring visual content shifts.
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
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">Speed Audit</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Stop losing leads to a sluggish website
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Get a comprehensive technical performance audit of your website or web application. We identify exact script bloat, slow server queries, and provide a verified remediation plan.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#4338ca] transition-all"
                  >
                    Request a Website Performance Audit
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
