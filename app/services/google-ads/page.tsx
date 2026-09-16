import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { GoogleAdsHero } from "@/app/components/services/google-ads-hero";

export const metadata: Metadata = {
  title: "Google Ads & PPC Management Agency in Udaipur | RankVRA",
  description:
    "Generate qualified phone calls and direct inquiries with precision Google Ads. We manage search campaigns, call-only ads, and conversion tracking to maximize your ROAS.",
  alternates: { canonical: "https://www.rankvra.com/services/google-ads" },
  openGraph: {
    title: "Google Ads & PPC Management Agency in Udaipur | RankVRA",
    description:
      "Precision Google Search campaigns, call-only ads, negative keyword sculpting, and transparent ROAS tracking for businesses in Rajasthan and across India.",
    url: "https://www.rankvra.com/services/google-ads",
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
      "@id": "https://www.rankvra.com/services/google-ads#service",
      name: "Google Ads & PPC Campaign Management",
      serviceType: "Paid Search Advertising",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "City", name: "Udaipur" },
        { "@type": "AdministrativeArea", name: "Rajasthan" },
        { "@type": "Country", name: "India" },
      ],
      description:
        "High-intent Google Ads management designed to capture active buyers. Includes granular negative keyword filtering, single-keyword ad groups (SKAG), high-speed landing page optimization, and offline conversion tracking.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/google-ads",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/google-ads#breadcrumb",
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
          name: "Google Ads Management",
          item: "https://www.rankvra.com/services/google-ads",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/services/google-ads#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do most businesses waste money on Google Ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most businesses waste ad spend by using broad match keywords without aggressive negative keyword lists, sending clicks to slow or generic homepages, and failing to configure conversion tracking to measure verified phone calls or leads.",
          },
        },
        {
          "@type": "Question",
          name: "What is the recommended minimum monthly ad budget for Google Ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For local service businesses in Udaipur (clinics, resorts, local services), ₹15,000 to ₹30,000 per month is sufficient to gather statistical conversion data. For B2B manufacturing and international export targeting, budgets typically scale based on target geographies.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly do Google Ads campaigns generate leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike organic SEO which takes weeks to build authority, Google Ads begin generating impressions and clicks within hours of launching. With dedicated landing pages, inbound inquiries often start on day one.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Why do most businesses waste money on Google Ads?",
    a: "Most businesses waste ad spend by using broad match keywords without aggressive negative keyword lists, sending clicks to slow or generic homepages, and failing to configure conversion tracking to measure verified phone calls or leads.",
  },
  {
    q: "What is the recommended minimum monthly ad budget for Google Ads?",
    a: "For local service businesses in Udaipur (clinics, resorts, local services), ₹15,000 to ₹30,000 per month is sufficient to gather statistical conversion data. For B2B manufacturing and international export targeting, budgets typically scale based on target geographies.",
  },
  {
    q: "How quickly do Google Ads campaigns generate leads?",
    a: "Unlike organic SEO which takes weeks to build authority, Google Ads begin generating impressions and clicks within hours of launching. With dedicated landing pages, inbound inquiries often start on day one.",
  },
];

export default function GoogleAdsServicePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <GoogleAdsHero />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Case Study Cross Link */}
          <div className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                  <TrendingUp size={14} />
                  B2B Paid &amp; Organic Funnel Case Study
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  Mewar Stone &amp; Marble Exports
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                  How high-intent search advertising combined with sub-second landing pages captured high-ticket architectural buyer inquiries from international markets.
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

          {/* Ad Features */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              PPC Management Framework
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Negative Keyword Lists",
                  desc: "We rigorously filter out job-seekers, free seekers, and irrelevant queries so your ad budget is never wasted on worthless clicks.",
                },
                {
                  title: "Call-Only Ads",
                  desc: "For urgent services, we launch ads designed to connect the prospect directly to your phone line with a single tap.",
                },
                {
                  title: "Dedicated Landing Pages",
                  desc: "Never send ad traffic to a generic homepage. We pair each ad group with a high-speed landing page that converts.",
                },
                {
                  title: "Conversion Tracking",
                  desc: "Full integration with Google Analytics 4, Google Tag Manager, and offline conversion tracking to track verified revenue.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc]">
                  <p className="text-base font-bold text-[#0f172a] mb-2">{item.title}</p>
                  <p className="text-xs text-[#64748b] leading-5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Deliverables */}
          <div className="mt-16 rounded-3xl border border-[#e2e8f0] bg-white p-8">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f46e5]" />
              What We Manage In Your Google Ads Account
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Search keyword research focusing on exact and phrase match commercial intent",
                "Continuous negative keyword scrubbing to eliminate irrelevant ad spend",
                "High-converting responsive search ad copy testing and optimization",
                "Google Tag Manager server-side event and phone call conversion setup",
                "Mobile landing page speed verification (<1 second load time)",
                "Transparent weekly performance reports with cost per verified lead metrics",
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
