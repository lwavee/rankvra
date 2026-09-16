import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { InternationalSeoHero } from "@/app/components/international-seo-hero";

export const metadata: Metadata = {
  title: "International SEO Agency for Global Markets | RankVRA",
  description:
    "Expand your search visibility across the USA, UK, UAE, and Europe. RankVRA engineers multi-country international SEO architectures that capture overseas buyers.",
  alternates: { canonical: "https://www.rankvra.com/international-seo" },
  openGraph: {
    title: "International SEO Agency for Global Markets | RankVRA",
    description:
      "Global technical SEO architecture: hreflang tags, multi-country CDN routing, geo-targeted content clusters, and international lead generation.",
    url: "https://www.rankvra.com/international-seo",
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
      "@id": "https://www.rankvra.com/international-seo#webpage",
      url: "https://www.rankvra.com/international-seo",
      name: "International SEO Agency for Global Markets | RankVRA",
      description:
        "Global search engine optimization and technical multi-regional website architecture engineered for Indian exporters and cross-border businesses.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
      breadcrumb: {
        "@id": "https://www.rankvra.com/international-seo#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/international-seo#breadcrumb",
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
          name: "International SEO",
          item: "https://www.rankvra.com/international-seo",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/international-seo#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between domestic SEO and international SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Domestic SEO targets local search engines and geographical ranking signals within a single country. International SEO implements hreflang annotations, country code top-level domains (ccTLDs) or subdirectories (/us/, /ae/), multi-currency schemas, and global CDN edge routing so Google serves the appropriate regional content to foreign searchers.",
          },
        },
        {
          "@type": "Question",
          name: "Which countries can RankVRA optimize for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We specialize in optimizing Indian export houses for North American (USA, Canada), United Kingdom, European (Germany, France, Italy), and Middle Eastern (UAE, Saudi Arabia) search engines.",
          },
        },
        {
          "@type": "Question",
          name: "How does site speed affect international rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google evaluates Core Web Vitals based on the real-world experience of users in the target country. If an overseas buyer in London or New York experiences latency above 2.5 seconds because the server is in India without global edge CDN caching, rankings will suffer.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "What is the difference between domestic SEO and international SEO?",
    a: "Domestic SEO targets local search engines and geographical ranking signals within a single country. International SEO implements hreflang annotations, country code top-level domains (ccTLDs) or subdirectories (/us/, /ae/), multi-currency schemas, and global CDN edge routing so Google serves the appropriate regional content to foreign searchers.",
  },
  {
    q: "Which countries can RankVRA optimize for?",
    a: "We specialize in optimizing Indian export houses for North American (USA, Canada), United Kingdom, European (Germany, France, Italy), and Middle Eastern (UAE, Saudi Arabia) search engines.",
  },
  {
    q: "How does site speed affect international rankings?",
    a: "Google evaluates Core Web Vitals based on the real-world experience of users in the target country. If an overseas buyer in London or New York experiences latency above 2.5 seconds because the server is in India without global edge CDN caching, rankings will suffer.",
  },
];

export default function InternationalSeoPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <InternationalSeoHero />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Case Study Cross Link */}
          <div className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                  <TrendingUp size={14} />
                  International SEO Case Study
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  Mewar Stone &amp; Marble Exports
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                  How an Indian natural stone supplier achieved top-page organic visibility in the US and UAE for commercial architectural keywords.
                </p>
              </div>
              <Link
                href="/case-studies/mewar-stone-marble-exports"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-[#cbd5e1] px-6 py-3 text-xs font-bold text-[#0f172a] shadow-xs hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shrink-0 self-start sm:self-center"
              >
                Read Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Core Technical Strategy */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              Technical International Strategy
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Hreflang &amp; Geo-Targeting</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Accurate hreflang implementation and language tagging to signal to Google which regional audience each page is crafted for.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Global CDN &amp; Latency</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Edge caching and high-speed multi-region server distribution ensuring under-1-second delivery for users in North America, Europe, or the Gulf.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Currency &amp; Compliance</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Transparent international shipping guidelines, GDPR/privacy compliance, and multi-currency pricing displays that remove buyer friction.
                </p>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="mt-16 rounded-3xl border border-[#e2e8f0] bg-white p-8">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f46e5]" />
              International Technical Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "XML sitemaps with reciprocal hreflang annotations for target countries",
                "Sub-1-second global TTFB and LCP scores via edge caching",
                "Geo-specific keyword intent mapping for US, UK, and UAE audiences",
                "Multi-currency structured data with ItemAvailability and PriceCurrency",
                "Compliance with international data protection standards (GDPR / CCPA)",
                "Full analytics segmentation by visitor country, language, and conversion source",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#10b981] mt-1 shrink-0" />
                  <span className="text-sm font-medium text-[#334155]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-6">
                  <h3 className="text-base font-bold text-[#0f172a] mb-2">{faq.q}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
