import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  Globe2,
  Lock,
  MessageCircle,
  PoundSterling,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development & SEO Services for UK Businesses | RankVRA",
  description:
    "Custom Next.js web development, corporate websites, and technical SEO for UK businesses. Compliant with UK GDPR, delivered with convenient London/GMT timezone overlap.",
  alternates: { canonical: "https://www.rankvra.com/markets/uk" },
  openGraph: {
    title: "Web Development & SEO Services for UK Businesses | RankVRA",
    description:
      "Custom Next.js web development, corporate websites, and technical SEO for UK businesses. Compliant with UK GDPR and built for speed.",
    url: "https://www.rankvra.com/markets/uk",
    siteName: "RankVRA",
    locale: "en_GB",
    type: "website",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rankvra.com/markets/uk#webpage",
      url: "https://www.rankvra.com/markets/uk",
      name: "Web Development & SEO Services for UK Businesses | RankVRA",
      description:
        "High-performance custom web development, corporate websites, and technical SEO for companies in the United Kingdom.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/markets/uk#breadcrumb",
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
          name: "United Kingdom",
          item: "https://www.rankvra.com/markets/uk",
        },
      ],
    },
  ],
};

export default function UkMarketPage() {
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
              <span className="text-[#4f46e5] font-semibold">United Kingdom</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <span className="text-base">🇬🇧</span>
                <span>UK Market Engineering</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                Web Development &amp; SEO Services for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  UK Companies &amp; Enterprises.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                RankVRA provides engineering-first web development and technical search optimization for British businesses. Combining sub-second Next.js speed, strict UK GDPR compliance, and extensive daily timezone overlap between India and the UK.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Request a Free UK Website Audit
                </Link>
                <Link
                  href="/services/web-development"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* UK-Specific Standards */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                UK Compliance &amp; Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Engineered to UK Regulatory &amp; Performance Expectations
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <Lock size={22} className="text-indigo-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-2">UK GDPR &amp; PECR Compliance</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We integrate lightweight, compliant consent mechanisms that protect user privacy without triggering Cumulative Layout Shift (CLS) or slowing down page load speeds.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <Clock size={22} className="text-indigo-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-2">Convenient GMT Overlap</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  With only 4.5 to 5.5 hours difference between India (IST) and London (GMT/BST), our working days share 4+ hours of active overlap for live coordination and sprint reviews.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <Zap size={22} className="text-indigo-600 mb-3" />
                <h3 className="text-base font-bold text-slate-900 mb-2">European Edge Performance</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Websites are deployed to European edge networks (London, Frankfurt) ensuring sub-second response times across England, Scotland, Wales, and Northern Ireland.
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
                  UK Business Web Development
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to upgrade your web architecture for the UK market?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Connect with Founder Naveen Panchal to discuss your technical specifications, GDPR requirements, and redesign goals.
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
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'm%20based%20in%20the%20UK%20and%20would%20like%20to%20discuss%20a%20website%20project."
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
