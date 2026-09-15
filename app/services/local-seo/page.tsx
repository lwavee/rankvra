import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { LocalSeoHero } from "@/app/components/services/local-seo-hero";

export const metadata: Metadata = {
  title: "Local SEO & Google Maps Agency in Udaipur | RankVRA",
  description:
    "Rank in the top 3 on Google Maps in Udaipur and across Rajasthan. We optimize your Google Business Profile to drive verified customer phone calls and local store visits.",
  alternates: { canonical: "https://www.rankvra.com/services/local-seo" },
  openGraph: {
    title: "Local SEO & Google Maps Agency in Udaipur | RankVRA",
    description:
      "Dominate the Google Maps 3-pack in Udaipur. Strategic Google Business Profile optimization, local citations, and geo-targeted landing pages for Rajasthan businesses.",
    url: "https://www.rankvra.com/services/local-seo",
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
      "@id": "https://www.rankvra.com/services/local-seo#service",
      name: "Local SEO & Google Business Profile Optimization",
      serviceType: "Local Search Engine Optimization",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "City", name: "Udaipur" },
        { "@type": "AdministrativeArea", name: "Rajasthan" },
        { "@type": "Country", name: "India" },
      ],
      description:
        "Comprehensive local SEO and Google Maps 3-Pack ranking strategy. We optimize Google Business Profiles, build local geo-citations, structure localized schemas, and capture high-intent local customer queries.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/local-seo",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/local-seo#breadcrumb",
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
          name: "Local SEO",
          item: "https://www.rankvra.com/services/local-seo",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/services/local-seo#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Google 3-Pack and why is it crucial for local businesses in Udaipur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Google 3-Pack is the top block of three Google Map listings displayed for localized commercial searches (e.g. 'best dental clinic in Udaipur' or 'heritage resort near Lake Pichola'). Over 70% of phone calls and direction requests on mobile devices go to these three businesses.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to see results from Local SEO in Udaipur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Initial Google Business Profile improvements (category fixes, photo geo-tagging, NAP consistency) often produce measurable call increases within 30 to 60 days. Competitive keywords in high-density areas like Panchwati or Sukher typically mature over 90 to 120 days.",
          },
        },
        {
          "@type": "Question",
          name: "Do you help generate verified customer reviews?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We set up compliant, automated post-service review workflows via WhatsApp and SMS that make it effortless for genuine happy clients to leave 5-star feedback on Google.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "What is the Google 3-Pack and why is it crucial for local businesses in Udaipur?",
    a: "The Google 3-Pack is the top block of three Google Map listings displayed for localized commercial searches (e.g. 'best dental clinic in Udaipur' or 'heritage resort near Lake Pichola'). Over 70% of phone calls and direction requests on mobile devices go to these three businesses.",
  },
  {
    q: "How long does it take to see results from Local SEO in Udaipur?",
    a: "Initial Google Business Profile improvements (category fixes, photo geo-tagging, NAP consistency) often produce measurable call increases within 30 to 60 days. Competitive keywords in high-density areas like Panchwati or Sukher typically mature over 90 to 120 days.",
  },
  {
    q: "Do you help generate verified customer reviews?",
    a: "Yes. We set up compliant, automated post-service review workflows via WhatsApp and SMS that make it effortless for genuine happy clients to leave 5-star feedback on Google.",
  },
];

export default function LocalSeoServicePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <LocalSeoHero />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Cross Links to Case Study & Location Hub */}
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                <TrendingUp size={14} />
                Local SEO Case Study
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">
                Smile Care Dental Clinic
              </h3>
              <p className="mt-2 text-xs text-[#64748b] leading-relaxed">
                See how a Udaipur clinic reached top 3 rankings across 5 major neighborhoods and increased verified patient phone calls by 125%.
              </p>
              <Link
                href="/case-studies/smile-care-dental"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:underline"
              >
                View Case Study <ArrowRight size={12} />
              </Link>
            </div>

            <div className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                <MapPin size={14} />
                Local Headquarters
              </div>
              <h3 className="text-lg font-bold text-[#0f172a]">
                Udaipur Digital Growth Hub
              </h3>
              <p className="mt-2 text-xs text-[#64748b] leading-relaxed">
                Explore our full spectrum of local SEO, web development, and digital marketing services specifically tailored for Udaipur businesses.
              </p>
              <Link
                href="/locations/udaipur"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:underline"
              >
                Visit Udaipur Hub <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Local SEO Strategy Grid */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              The Google Maps 3-Pack Methodology
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Google Profile Optimization",
                  desc: "Complete optimization of categories, sub-services, geo-tagged photography, attributes, and operating hours on your Google Business Profile.",
                },
                {
                  title: "Local Citations & NAP",
                  desc: "Consistent Name, Address, and Phone number listings across authoritative Indian and regional business directories.",
                },
                {
                  title: "Review Acceleration",
                  desc: "Automated, compliant customer review workflows that earn authentic 5-star reviews to strengthen local ranking authority.",
                },
                {
                  title: "Geo-Targeted Landing Pages",
                  desc: "Localized website pages with LocalBusiness schema markup that confirm your physical service boundary to Google.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#c7d2fe] transition-all">
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
              Included in Every Local SEO Engagement
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Full Google Business Profile audit and competitor grid analysis",
                "Primary and secondary business category optimization",
                "High-resolution geo-tagged photo uploads and weekly updates",
                "NAP consistency verification across 40+ Indian business directories",
                "LocalBusiness and PostalAddress schema markup on website",
                "Monthly call and direction request reporting with transparent data",
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
