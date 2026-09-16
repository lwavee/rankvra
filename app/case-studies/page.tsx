import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { CaseStudiesHero } from "@/app/components/case-studies-hero";
import { SiteShell } from "@/app/components/site-shell";
import { CASE_STUDIES } from "./data";

export const metadata: Metadata = {
  title: "Client Case Studies & Verified Outcomes | RankVRA",
  description:
    "Explore real client case studies detailing how RankVRA engineers custom Next.js web platforms, Google Maps 3-Pack rankings, and B2B lead generation funnels.",
  alternates: {
    canonical: "https://www.rankvra.com/case-studies",
  },
  openGraph: {
    title: "Client Case Studies & Verified Outcomes | RankVRA",
    description:
      "Explore real client case studies detailing how RankVRA engineers custom Next.js web platforms, Google Maps 3-Pack rankings, and B2B lead generation funnels.",
    url: "https://www.rankvra.com/case-studies",
    siteName: "RankVRA",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Verified Outcomes | RankVRA",
    description:
      "Explore real client case studies detailing how RankVRA engineers custom Next.js web platforms, Google Maps 3-Pack rankings, and B2B lead generation funnels.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.rankvra.com/case-studies#webpage",
      url: "https://www.rankvra.com/case-studies",
      name: "RankVRA Client Case Studies",
      description: "Real-world engineering, SEO, and digital acquisition case studies for businesses in Udaipur, Rajasthan, and globally.",
      publisher: {
        "@id": "https://www.rankvra.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/case-studies#breadcrumb",
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
          name: "Case Studies",
          item: "https://www.rankvra.com/case-studies",
        },
      ],
    },
  ],
};

export default function CaseStudiesHubPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#f8fafc]">
        <CaseStudiesHero />

        {/* Case Studies List */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-10">
              {CASE_STUDIES.map((study) => (
                <article
                  key={study.id}
                  className="rounded-[32px] border border-[#e2e8f0] bg-white p-8 sm:p-12 shadow-sm hover:border-[#c7d2fe] transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#f1f5f9]">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-full bg-[#eef2ff] px-3.5 py-1 text-xs font-bold text-[#4f46e5]">
                          {study.industry}
                        </span>
                        <span className="text-xs text-[#94a3b8]">•</span>
                        <span className="text-xs font-semibold text-[#64748b]">
                          📍 {study.location}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                        {study.client}
                      </h2>
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#4338ca] transition-colors"
                    >
                      Read Full Deep Dive
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                  <p className="mt-4 text-base text-[#475569] leading-relaxed">
                    {study.tagline}
                  </p>

                  {/* 3-Column Diagnostic Breakdown */}
                  <div className="mt-8 grid md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-[#fff1f2] border border-[#ffe4e6]">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
                        1. The Challenge
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-6">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#eff6ff] border border-[#dbeafe]">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                        2. Engineering Strategy
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-6">
                        {study.strategy[0]}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#f0fdf4] border border-[#dcfce7]">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                        3. Verified Outcome
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-6">
                        {study.outcomeSummary}
                      </p>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="text-center sm:text-left">
                        <div className="text-xl sm:text-2xl font-black text-[#0f172a]">{m.value}</div>
                        <div className="text-[11px] font-bold text-[#4f46e5] uppercase tracking-wider mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#f1f5f9]">
                    <div className="flex flex-wrap gap-2">
                      {study.servicesUsed.map((service, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-full bg-[#f1f5f9] px-3 py-1 text-[11px] font-medium text-[#475569]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:text-[#4338ca]"
                    >
                      Inspect Full Technical Specifications
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                  Start With Verifiable Data
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Want us to analyze your website like this?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Send us your URL and commercial objective. Founder Naveen Panchal and our technical team will inspect your server response speed, Core Web Vitals, and search competitors.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-growth-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Claim Free Growth Audit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20would%20like%20to%20discuss%20a%20case-study%20approach%20for%20our%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    <MessageSquare size={15} />
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
