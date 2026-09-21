import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Languages,
  Layers,
  MapPin,
  Search,
  Server,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "International SEO Services for Global Business Growth | RankVRA",
  description:
    "Expand organic search visibility across the USA, UK, Canada, and global English-speaking markets. Multi-region URL architecture, edge CDN caching, and geo-targeted search positioning.",
  alternates: { canonical: "https://www.rankvra.com/services/international-seo" },
  openGraph: {
    title: "International SEO Services for Global Business Growth | RankVRA",
    description:
      "Expand organic search visibility across the USA, UK, Canada, and global English-speaking markets. Multi-region URL architecture, edge CDN caching, and geo-targeted search positioning.",
    url: "https://www.rankvra.com/services/international-seo",
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
      "@id": "https://www.rankvra.com/services/international-seo#service",
      name: "International SEO Services",
      serviceType: "International SEO",
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
        "Global search engine optimization: multi-regional search architectures, geo-targeted content clusters, international technical SEO, and cross-border commercial lead generation.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/international-seo",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/international-seo#breadcrumb",
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
          name: "International SEO",
          item: "https://www.rankvra.com/services/international-seo",
        },
      ],
    },
  ],
};

export default function InternationalSeoPage() {
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
              <span className="text-[#4f46e5] font-semibold">International SEO</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <Globe2 size={13} className="text-indigo-600" />
                Cross-Border Organic Growth
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                International SEO Built for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  US, UK, Canadian &amp; Global Markets.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Position your business for international commercial inquiries. We engineer multi-market search architectures, edge CDN delivery, and geo-targeted content clusters that capture corporate buyers overseas.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Request an International SEO Audit
                </Link>
                <Link
                  href="/markets"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  Explore Target Markets
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Global Capabilities */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Global Search Strategy
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Technical Precision Across International Search Markets
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Globe2 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Regional Search Intent</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mapping differences in commercial terminology and search intent between US, UK, Canadian, and Indian decision-makers without duplicate content.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Server size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Global Edge CDN Latency</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Deploying content to global edge servers so users in North America and Europe experience the same sub-second speeds as local visitors.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Languages size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Accurate Hreflang Architecture</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Implementing self-referencing canonicals and multi-region hreflang signals strictly where genuine regional variations exist, avoiding Google indexing conflicts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Market Hubs */}
        <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Markets We Serve
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Dedicated Market Hubs for Cross-Border Collaboration
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  country: "United States",
                  flag: "🇺🇸",
                  desc: "Commercial insurance web design, SaaS portals, and B2B lead generation.",
                  link: "/markets/usa",
                },
                {
                  country: "United Kingdom",
                  flag: "🇬🇧",
                  desc: "Modern business web platforms compliant with UK & European privacy standards.",
                  link: "/markets/uk",
                },
                {
                  country: "Canada",
                  flag: "🇨🇦",
                  desc: "High-speed corporate web design and regional search optimization.",
                  link: "/markets/canada",
                },
                {
                  country: "India & Metros",
                  flag: "🇮🇳",
                  desc: "National B2B manufacturing catalogs, education portals, and clinic funnels.",
                  link: "/markets/india",
                },
              ].map((m, i) => (
                <Link
                  key={i}
                  href={m.link}
                  className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs transition-all block"
                >
                  <span className="text-3xl mb-3 block">{m.flag}</span>
                  <h3 className="text-base font-bold text-slate-950 mb-1">{m.country}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{m.desc}</p>
                  <span className="text-xs font-bold text-indigo-600 inline-flex items-center gap-1">
                    Explore Market &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                  Global SEO Readiness
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to capture international commercial buyers?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Discuss your target international markets and technical requirements with Founder Naveen Panchal.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Get Free International SEO Audit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20discuss%20an%20international%20SEO%20strategy."
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
