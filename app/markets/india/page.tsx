import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Globe2,
  Layers,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development & SEO Services for Indian Businesses | RankVRA",
  description:
    "High-speed Next.js web development, B2B manufacturing catalogs, education portals, and national SEO for enterprises across Mumbai, Delhi NCR, Bangalore, Hyderabad, and Pan-India.",
  alternates: { canonical: "https://www.rankvra.com/markets/india" },
  openGraph: {
    title: "Web Development & SEO Services for Indian Businesses | RankVRA",
    description:
      "High-speed Next.js web development, B2B manufacturing catalogs, education portals, and national SEO for Indian enterprises.",
    url: "https://www.rankvra.com/markets/india",
    siteName: "RankVRA",
    locale: "en_IN",
    type: "website",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rankvra.com/markets/india#webpage",
      url: "https://www.rankvra.com/markets/india",
      name: "Web Development & SEO Services for Indian Businesses | RankVRA",
      description:
        "National web development, custom software engineering, and technical search systems for companies across India.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/markets/india#breadcrumb",
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
          name: "Markets",
          item: "https://www.rankvra.com/markets",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "India",
          item: "https://www.rankvra.com/markets/india",
        },
      ],
    },
  ],
};

const metros = [
  "Delhi NCR (Gurgaon, Noida, Delhi)",
  "Mumbai & Pune",
  "Bengaluru & Hyderabad",
  "Ahmedabad & Gujarat Industrial Belts",
  "Jaipur & Rajasthan Commercial Hubs",
  "Chennai & Southern Industrial Corridors",
];

export default function IndiaMarketPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-white via-indigo-50/20 to-[#f8fafc] pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#64748b]">
              <Link href="/" className="hover:text-[#4f46e5]">Home</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <Link href="/markets" className="hover:text-[#4f46e5]">Markets</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <span className="text-[#4f46e5] font-semibold">India</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <span className="text-base">🇮🇳</span>
                <span>National Business Engineering</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                Web Development &amp; SEO Services for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  National Indian Businesses.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                RankVRA engineers high-speed web platforms, B2B specification catalogs, education portals, and commercial SEO systems for companies across India. We eliminate slow WordPress bloat to deliver sub-second performance across mobile cellular networks.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Get a Free Performance Audit
                </Link>
                <Link
                  href="/case-studies/swastik-computer-education"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  View Swastik Education Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Real Indian Deployments */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Proven Deployments in India
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Real Client Work Engineered for the Indian Market
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Swastik Education */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-indigo-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                      Academic Directory &amp; Admissions
                    </span>
                    <span className="text-xs font-semibold text-slate-500">India</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Swastik Computer Education
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Interactive technical course catalog, syllabus directory, and student admission inquiry engine. Tailored for smartphone users with direct WhatsApp admission counseling alerts.
                  </p>
                  <div className="space-y-2 mb-6 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>Sub-second mobile speed on Indian 4G/5G networks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>EducationalOrganization Schema.org integration</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/case-studies/swastik-computer-education"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    Read Technical Deep Dive &rarr;
                  </Link>
                </div>
              </div>

              {/* E-Biozone */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 flex flex-col justify-between hover:border-indigo-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                      Scientific B2B Product Catalog
                    </span>
                    <span className="text-xs font-semibold text-slate-500">India &amp; Global</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    E-Biozone Laboratory Equipment
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Technical product catalog and institutional Request for Quotation (RFQ) engine for laboratory supplies, diagnostic instruments, and research reagents.
                  </p>
                  <div className="space-y-2 mb-6 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>Multi-SKU RFQ builder for university and laboratory buyers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>Downloadable specification and safety data sheets (MSDS)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/case-studies/e-biozone"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    Read Technical Deep Dive &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pan-India Commercial Hubs */}
        <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                National Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Serving Key Commercial Hubs Across India
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {metros.map((metro, i) => (
                <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white flex items-center gap-3">
                  <MapPin size={18} className="text-indigo-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{metro}</span>
                </div>
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
                  National Growth
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to upgrade your web architecture in India?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Discuss your commercial website, catalog, or application with Founder Naveen Panchal.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Claim a Free Website Audit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20discuss%20a%20website%20project%20in%20India."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    WhatsApp Founder Naveen
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
