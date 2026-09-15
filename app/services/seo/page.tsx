import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { ArrowRight } from "lucide-react";
import { SeoHero } from "@/app/components/services/seo-hero";

export const metadata: Metadata = {
  title: "SEO Agency in Udaipur & Rajasthan | Search Engine Optimization | RankVRA",
  description:
    "Dominate Google Page 1 for high-intent search terms. RankVRA delivers technical SEO, topical authority, and organic conversion strategies for businesses in Rajasthan and India.",
  alternates: { canonical: "https://www.rankvra.com/services/seo" },
  openGraph: {
    title: "SEO Agency in Udaipur & Rajasthan | Search Engine Optimization | RankVRA",
    description:
      "Dominate Google Page 1 for high-intent search terms. RankVRA delivers technical SEO, topical authority, and organic conversion strategies for businesses in Rajasthan and India.",
    url: "https://www.rankvra.com/services/seo",
    siteName: "RankVRA",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.rankvra.com/services/seo#service",
      name: "Search Engine Optimization & Technical SEO",
      serviceType: "SEO Service",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "City", name: "Udaipur" },
        { "@type": "AdministrativeArea", name: "Rajasthan" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      description:
        "Technical SEO, semantic topical authority, Google Maps 3-Pack optimization, and high-intent keyword ranking engineered for sustainable organic customer inquiries.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/seo",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/seo#breadcrumb",
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
          name: "SEO Services",
          item: "https://www.rankvra.com/services/seo",
        },
      ],
    },
  ],
};

const pillars = [
  {
    title: "Technical SEO & Core Web Vitals",
    desc: "We resolve crawl bottlenecks, canonical conflicts, schema graphs, mobile indexability, and server response times so search engines crawl your site without friction.",
  },
  {
    title: "Semantic Topical Authority",
    desc: "We build structured content hubs answering every high-intent query your buyers type, establishing your domain as an authoritative industry reference.",
  },
  {
    title: "Google Maps 3-Pack Optimization",
    desc: "For regional storefronts and service providers, we dominate the Google Maps 3-Pack across high-density target neighborhoods.",
  },
  {
    title: "High-Intent Commercial Keyword Targeting",
    desc: "We eliminate zero-intent vanity queries, focusing your budget exclusively on commercial search terms that drive phone calls and sales inquiries.",
  },
  {
    title: "Digital PR & Earned Brand Citations",
    desc: "We reject toxic PBNs and automated directory spam. We acquire legitimate industry mentions, local press, and verified partner links.",
  },
  {
    title: "Conversion Tracking & Revenue Attribution",
    desc: "Transparent reporting tracking organic phone calls, form fills, and WhatsApp chats back to specific landing pages and search queries.",
  },
];

export default function SeoServicePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SeoHero />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Pillars of SEO */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, i) => (
              <div key={i} className="p-8 rounded-[28px] border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#c7d2fe] transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef2ff] text-[#4f46e5] font-bold text-sm mb-5">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Cross Link Box to Case Studies & Guides */}
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-[28px] border border-[#c7d2fe] bg-[#f5f7ff]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">Healthcare Local SEO Case Study</span>
              <h3 className="text-xl font-bold text-[#0f172a] mt-1">
                Dominating the Google Maps 3-Pack for Smile Care Dental
              </h3>
              <p className="text-sm text-[#475569] mt-2 mb-4">
                See how citation cleansing and mobile booking pages drove verified patient consultations.
              </p>
              <Link
                href="/case-studies/smile-care-dental"
                className="text-xs font-bold text-[#4f46e5] hover:underline inline-flex items-center gap-1"
              >
                Read Dental Clinic Case Study <ArrowRight size={13} />
              </Link>
            </div>

            <div className="p-8 rounded-[28px] border border-[#e2e8f0] bg-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Strategic In-Depth Guide</span>
              <h3 className="text-xl font-bold text-[#0f172a] mt-1">
                SEO Agency in Udaipur: How to Choose for Real Growth
              </h3>
              <p className="text-sm text-[#475569] mt-2 mb-4">
                Explore the technical criteria, pricing benchmarks, and red flags to avoid when hiring.
              </p>
              <Link
                href="/blogs/seo-agency-udaipur"
                className="text-xs font-bold text-[#4f46e5] hover:underline inline-flex items-center gap-1"
              >
                Read Founder Guide <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#4f46e5] to-[#4338ca] p-8 sm:p-12 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to see where your website stands on Google?</h2>
            <p className="mt-3 text-sm sm:text-base text-indigo-100 max-w-xl mx-auto">
              Request a free growth audit. We will review your search crawlability, Core Web Vitals, and competitor ranking gaps.
            </p>
            <Link
              href="/free-growth-audit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#4f46e5] hover:bg-slate-50 transition-all shadow-md"
            >
              Get Free SEO Audit
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
