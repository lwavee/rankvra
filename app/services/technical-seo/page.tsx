import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  FileCode2,
  Gauge,
  Globe2,
  Layers,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO Services & Core Web Vitals Audits | RankVRA",
  description:
    "Comprehensive technical SEO services: crawlability diagnostics, JavaScript rendering, Core Web Vitals optimization, Schema.org entity graphs, and 301 redirect architecture.",
  alternates: { canonical: "https://www.rankvra.com/services/technical-seo" },
  openGraph: {
    title: "Technical SEO Services & Core Web Vitals Audits | RankVRA",
    description:
      "Comprehensive technical SEO services: crawlability diagnostics, JavaScript rendering, Core Web Vitals optimization, Schema.org entity graphs, and 301 redirect architecture.",
    url: "https://www.rankvra.com/services/technical-seo",
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
      "@id": "https://www.rankvra.com/services/technical-seo#service",
      name: "Technical SEO Services",
      serviceType: "Technical SEO",
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
        "Specialized technical search engine optimization: indexing diagnostics, JavaScript SEO, Core Web Vitals remediation, and structured data engineering.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/technical-seo",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/technical-seo#breadcrumb",
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
          name: "Technical SEO",
          item: "https://www.rankvra.com/services/technical-seo",
        },
      ],
    },
  ],
};

export default function TechnicalSeoServicePage() {
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
              <span className="text-[#4f46e5] font-semibold">Technical SEO</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <Cpu size={13} className="text-indigo-600" />
                Infrastructure &amp; Crawlability
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                Technical SEO Built for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Crawling, Indexing &amp; Real Rankings.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Google cannot rank what it cannot understand or render quickly. We diagnose and solve architectural crawl errors, Core Web Vitals bottlenecks, JavaScript rendering blocks, and structured entity graphs.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Request a Technical Audit
                </Link>
                <Link
                  href="/services/web-development"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  Web Development Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The 6 Pillars of Technical SEO */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Complete Technical Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                The 6 Pillars of RankVRA Technical SEO Engineering
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Search size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">1. Crawlability &amp; Indexing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Deep inspection of robots.txt directives, XML sitemaps, canonical URL consistency, trailing slash normalization, and accidental noindex tags.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Gauge size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">2. Core Web Vitals Remediation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct code-level fixes for Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) on real mobile viewports.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <FileCode2 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">3. Schema.org Entity Graphs</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  JSON-LD implementation connecting Organization, Person (Founder), WebSite, Service, BreadcrumbList, and Article entities with verified @id relationships.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Code2 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">4. JavaScript &amp; Rendering SEO</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Optimizing server-side rendering (SSR), static site generation (SSG), and edge caching to ensure Googlebot receives complete HTML without hydration timeouts.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Layers size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">5. Internal Link Architecture</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Elimination of orphan pages, establishing topical clusters, optimizing anchor text distributions, and creating crawlable breadcrumb pathways.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">6. Security &amp; 301 Migration</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  HTTPS enforcement, mixed-content resolution, security header configuration, and bulletproof 301 redirect mapping to prevent 404 dead ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Code Fixes, Not Just PDF Reports */}
        <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-slate-50 p-8 sm:p-12">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                  We Don&apos;t Just Hand You a PDF
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-3">
                  We Implement Technical Fixes Directly in Your Codebase
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Most SEO consultancies run an automated scanner and send you a generic 80-page PDF report. RankVRA operates as a full-stack engineering partner: we identify the root cause in your codebase, write clean pull requests, optimize server headers, and verify fixes in Google Search Console.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#4338ca] transition-all"
                  >
                    Request Technical Code Audit <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/services/international-seo"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-indigo-600"
                  >
                    Explore International SEO &rarr;
                  </Link>
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
                  Audit Your Architecture
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Uncover what is holding your website back on Google
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Send us your domain. We will inspect your crawlability, server latency, Schema.org implementation, and Core Web Vitals.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Claim Free Technical Audit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20a%20technical%20SEO%20audit%20for%20my%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    WhatsApp Technical Lead
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
