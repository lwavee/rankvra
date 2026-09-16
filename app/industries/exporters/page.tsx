import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { ExportersHero } from "@/app/components/exporters-hero";

export const metadata: Metadata = {
  title: "International SEO & Digital Marketing for Exporters | RankVRA",
  description:
    "Help your stone, marble, handicraft, or textile export business rank on Google in the USA, UK, UAE, and Europe to attract high-value international buyers.",
  alternates: { canonical: "https://www.rankvra.com/industries/exporters" },
  openGraph: {
    title: "International SEO & Digital Marketing for Exporters | RankVRA",
    description:
      "Global organic visibility, multi-country technical SEO, and direct buyer inquiry pipelines for Indian export houses in Rajasthan.",
    url: "https://www.rankvra.com/industries/exporters",
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
      "@id": "https://www.rankvra.com/industries/exporters#webpage",
      url: "https://www.rankvra.com/industries/exporters",
      name: "International SEO & Digital Marketing for Exporters | RankVRA",
      description:
        "Technical global search optimization, multi-currency catalogs, and international RFQ generation for Rajasthan export firms.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
      breadcrumb: {
        "@id": "https://www.rankvra.com/industries/exporters#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/industries/exporters#breadcrumb",
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
          name: "Industries",
          item: "https://www.rankvra.com/industries",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Global Trade & Exporters",
          item: "https://www.rankvra.com/industries/exporters",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/industries/exporters#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do international buyers verify Indian exporters online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Foreign commercial buyers in the US, UK, and UAE inspect technical specifications, port handling terms (FOB Mundra/Nhava Sheva, CIF), factory inspection videos, quality test reports, and website loading speeds before submitting an RFP.",
          },
        },
        {
          "@type": "Question",
          name: "What is international technical SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "International SEO involves structuring your website with accurate hreflang annotations, country-specific URL routing, CDN edge caching in Western and Middle Eastern data centers, and multi-currency specification tables that rank in foreign search engines.",
          },
        },
        {
          "@type": "Question",
          name: "How does RankVRA help exporters cut middleman commission fees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By establishing your company as a verified direct manufacturer on Google Search, international importers reach out directly to your commercial trade desk rather than dealing through third-party sourcing agents or commission directories.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How do international buyers verify Indian exporters online?",
    a: "Foreign commercial buyers in the US, UK, and UAE inspect technical specifications, port handling terms (FOB Mundra/Nhava Sheva, CIF), factory inspection videos, quality test reports, and website loading speeds before submitting an RFP.",
  },
  {
    q: "What is international technical SEO?",
    a: "International SEO involves structuring your website with accurate hreflang annotations, country-specific URL routing, CDN edge caching in Western and Middle Eastern data centers, and multi-currency specification tables that rank in foreign search engines.",
  },
  {
    q: "How does RankVRA help exporters cut middleman commission fees?",
    a: "By establishing your company as a verified direct manufacturer on Google Search, international importers reach out directly to your commercial trade desk rather than dealing through third-party sourcing agents or commission directories.",
  },
];

export default function ExportersIndustryPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ExportersHero />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Case Study Cross-Link */}
          <div className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                  <TrendingUp size={14} />
                  Featured International Case Study
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  Mewar Stone &amp; Marble Exports, Udaipur
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                  Exporting natural stone from Sukher to high-ticket architectural firms in North America and Dubai with targeted international search visibility.
                </p>
              </div>
              <Link
                href="/case-studies/mewar-stone-marble-exports"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-[#cbd5e1] px-6 py-3 text-xs font-bold text-[#0f172a] shadow-xs hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shrink-0 self-start sm:self-center"
              >
                Read Export Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Export Pillars */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              International Search &amp; Trust Blueprint
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Targeted International SEO</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Structure your website with international hreflang tags, high-speed CDN delivery, and country-specific keyword optimization for the US, Europe, and Middle East.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Global Trust Architecture</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Showcase factory certifications (ISO, CE), international port shipping terms (FOB, CIF, EXW), and verified export container packing procedures.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Direct Buyer RFQs</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Capture commercial inquiries directly without middleman B2B directory commissions, allowing you to build direct long-term buyer relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Deliverables */}
          <div className="mt-16 rounded-3xl border border-[#e2e8f0] bg-white p-8">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f46e5]" />
              Export Growth Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Multi-country technical SEO architecture with hreflang validation",
                "Sub-1-second global page loads via worldwide edge CDN caching",
                "Commercial inquiry forms tailored for international procurement teams",
                "Product catalogs with clear container loading specs & incoterms",
                "Dedicated landing pages targeting US, UK, and UAE search queries",
                "Integration with WhatsApp Business and international direct email",
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
