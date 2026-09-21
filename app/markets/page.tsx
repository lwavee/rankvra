import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { ArrowRight, ChevronRight, Clock, Globe2, ShieldCheck, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Markets We Serve | USA, UK, Canada & India | RankVRA",
  description:
    "Based in India, RankVRA engineers custom websites, web applications, and search growth systems for businesses across the USA, UK, Canada, India, and global markets.",
  alternates: { canonical: "https://www.rankvra.com/markets" },
  openGraph: {
    title: "Markets We Serve | USA, UK, Canada & India | RankVRA",
    description:
      "Global web development, custom software engineering, and technical SEO delivered from India with dedicated overlapping hours and international standards.",
    url: "https://www.rankvra.com/markets",
    siteName: "RankVRA",
    locale: "en_US",
    type: "website",
  },
};

const markets = [
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    tagline: "Commercial Insurance, SaaS, and Business Web Engineering",
    description:
      "Proven project experience with US commercial insurance brokerages, wholesale underwriting portals, and high-growth B2B firms. Overlapping EST/PST communication hours.",
    keyWork: "Capital & Co Insurance Services & Sterling Wholesale Insurance Portal",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "High-Speed Business Websites & Technical SEO",
    description:
      "Engineering modern, accessible web platforms compliant with UK and European privacy requirements (GDPR/PECR), focused on corporate trust and sub-second performance.",
    keyWork: "Modern corporate storefronts, performance redesigns, and technical SEO",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Enterprise Web Architecture & Multi-Region Search",
    description:
      "Custom web platforms for Canadian service firms, consultancies, and commercial businesses requiring clean bilingual architectural support and robust mobile performance.",
    keyWork: "High-trust business websites and responsive web applications",
  },
  {
    slug: "india",
    name: "India (National Focus)",
    flag: "🇮🇳",
    tagline: "B2B Manufacturing, Higher Education & Enterprise Portals",
    description:
      "Engineering digital infrastructure for manufacturers, exporters, educational institutions, and healthcare organizations across Mumbai, Bangalore, Hyderabad, and Pan-India.",
    keyWork: "Swastik Computer Education & E-Biozone Scientific Catalog",
  },
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    flag: "🏛️",
    tagline: "Corporate, SaaS & Industrial Growth Systems",
    description:
      "Fast-track web engineering and commercial SEO for enterprise headquarters in Gurgaon, Noida, and Delhi seeking direct inbound buyer pipelines.",
    keyWork: "Enterprise B2B lead funnels and custom web application dashboards",
  },
];

export default function MarketsPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-white via-indigo-50/20 to-[#f8fafc] pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#64748b]">
              <Link href="/" className="hover:text-[#4f46e5]">Home</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <span className="text-[#4f46e5] font-semibold">Markets</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <Globe2 size={13} className="text-indigo-600" />
                Global Delivery Model
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                Engineering Modern Websites for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  National &amp; International Businesses.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                RankVRA operates from India, combining software-grade engineering with cost-efficient delivery to build high-performance web platforms for companies across the US, UK, Canada, India, and global markets.
              </p>
            </div>
          </div>
        </section>

        {/* Markets Grid */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Commercial Footprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Explore Our Key Market Operations
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {markets.map((m) => (
                <article
                  key={m.slug}
                  className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <div>
                    <span className="text-4xl mb-4 block">{m.flag}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{m.name}</h3>
                    <p className="text-xs font-bold text-indigo-600 mb-3">{m.tagline}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {m.description}
                    </p>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700">
                      <span className="font-bold text-slate-900 block mb-0.5">Relevant Experience:</span>
                      {m.keyWork}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200">
                    <Link
                      href={`/markets/${m.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:text-[#4338ca]"
                    >
                      <span>Explore {m.name} Market Standards</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Global Operational Model */}
        <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Operational Reliability
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Why International Businesses Partner with RankVRA
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <Clock size={24} className="text-indigo-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-1">Timezone Overlap</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We schedule daily overlap hours with North American (EST/PST) and European/UK (GMT) business hours for real-time collaboration.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <ShieldCheck size={24} className="text-indigo-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-1">Full IP &amp; Source Ownership</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You own 100% of your source code, design files, domains, and cloud deployment accounts with zero proprietary platform locks.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <Users size={24} className="text-indigo-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-1">Direct Founder Oversight</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every international engagement is led directly by Founder Naveen Panchal, ensuring technical precision and rapid issue resolution.
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
                  Global Partnership
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Discuss your project with an experienced global partner
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Whether you are in the United States, United Kingdom, Canada, or India, let&apos;s evaluate your digital roadmap.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Claim a Free Website Audit
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    View All Case Studies
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
