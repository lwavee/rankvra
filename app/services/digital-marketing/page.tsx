import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { DigitalMarketingHero } from "@/app/components/services/digital-marketing-hero";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Udaipur & Rajasthan | RankVRA",
  description:
    "We build performance-driven digital marketing campaigns across Google, Meta, and SEO that turn traffic into verified customer calls and WhatsApp inquiries.",
  alternates: { canonical: "https://www.rankvra.com/services/digital-marketing" },
  openGraph: {
    title: "Digital Marketing Agency in Udaipur & Rajasthan | RankVRA",
    description:
      "Full-funnel digital growth engineering: SEO, Google Ads, Meta Ads, and WhatsApp conversion funnels for ambitious businesses in Rajasthan and across India.",
    url: "https://www.rankvra.com/services/digital-marketing",
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
      "@id": "https://www.rankvra.com/services/digital-marketing#service",
      name: "Performance Digital Marketing & Growth Engineering",
      serviceType: "Digital Marketing",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "City", name: "Udaipur" },
        { "@type": "AdministrativeArea", name: "Rajasthan" },
        { "@type": "Country", name: "India" },
      ],
      description:
        "Full-funnel digital marketing services combining Google Search Ads, Meta performance campaigns, technical search engine optimization, and automated WhatsApp lead qualification.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/digital-marketing",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/digital-marketing#breadcrumb",
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
          name: "Digital Marketing",
          item: "https://www.rankvra.com/services/digital-marketing",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/services/digital-marketing#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does RankVRA differ from traditional social media marketing agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional agencies charge monthly fees to post generic social media graphics with zero commercial return. RankVRA engineers full-funnel systems connecting high-intent Google search traffic and Meta ads directly to verified phone calls, booked appointments, and WhatsApp inquiries.",
          },
        },
        {
          "@type": "Question",
          name: "What digital marketing channels work best for businesses in Rajasthan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For local healthcare and resorts, Google Maps SEO paired with WhatsApp reservation desks delivers the highest ROI. For manufacturing and exporters, international technical SEO and commercial Google Ads capture enterprise buyers.",
          },
        },
        {
          "@type": "Question",
          name: "How do you track return on ad spend (ROAS)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We configure server-side conversion tracking via Google Tag Manager and GA4, logging every phone call, WhatsApp conversation start, and contact form completion back to the specific campaign and keyword that generated it.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How does RankVRA differ from traditional social media marketing agencies?",
    a: "Traditional agencies charge monthly fees to post generic social media graphics with zero commercial return. RankVRA engineers full-funnel systems connecting high-intent Google search traffic and Meta ads directly to verified phone calls, booked appointments, and WhatsApp inquiries.",
  },
  {
    q: "What digital marketing channels work best for businesses in Rajasthan?",
    a: "For local healthcare and resorts, Google Maps SEO paired with WhatsApp reservation desks delivers the highest ROI. For manufacturing and exporters, international technical SEO and commercial Google Ads capture enterprise buyers.",
  },
  {
    q: "How do you track return on ad spend (ROAS)?",
    a: "We configure server-side conversion tracking via Google Tag Manager and GA4, logging every phone call, WhatsApp conversation start, and contact form completion back to the specific campaign and keyword that generated it.",
  },
];

export default function DigitalMarketingServicePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DigitalMarketingHero />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Case Studies Link */}
          <div className="mt-14 rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                  <TrendingUp size={14} />
                  Documented Results
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  Explore Real Case Studies with Measurable Outcomes
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                  Review real implementations across Udaipur resorts, industrial exporters, and multi-specialty healthcare clinics.
                </p>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-[#cbd5e1] px-6 py-3 text-xs font-bold text-[#0f172a] shadow-xs hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shrink-0 self-start sm:self-center"
              >
                View All Case Studies <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Strategy Blocks */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              Full-Funnel Acquisition Pillars
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                  <Target size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">High-Intent Google Ads</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Capture buyers actively searching for your service. We build search campaigns with aggressive negative keyword filters to eliminate wasted clicks.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                  <BarChart3 size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Meta Ads &amp; Retargeting</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Run targeted Instagram and Facebook campaigns that guide prospects from initial awareness straight into a WhatsApp conversation with your sales team.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                  <TrendingUp size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Conversion Funnels</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  We build dedicated, fast-loading landing pages designed exclusively for your ad traffic to ensure maximum conversion rates and lowest cost per lead.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Deliverables */}
          <div className="mt-16 rounded-3xl border border-[#e2e8f0] bg-white p-8">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f46e5]" />
              Digital Marketing Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Targeted Google Search & Call-Only Ads management",
                "Meta (Facebook & Instagram) retargeting and lead ad campaigns",
                "Custom conversion landing page design with sub-second speeds",
                "Official WhatsApp Business automated lead qualification funnels",
                "GA4 & Google Tag Manager server-side event setup",
                "Direct communication with founder Naveen Panchal without account managers",
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
