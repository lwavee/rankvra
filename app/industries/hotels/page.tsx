import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { HotelsHero } from "@/app/components/hotels-hero";

export const metadata: Metadata = {
  title: "Hotel & Resort Marketing Agency in Udaipur & Rajasthan | RankVRA",
  description:
    "We help hotels, heritage resorts, and luxury stays in Udaipur and Rajasthan increase direct website bookings, cut OTA commissions, and secure top 3 Google Maps and Page 1 search visibility.",
  alternates: { canonical: "https://www.rankvra.com/industries/hotels" },
  openGraph: {
    title: "Hotel & Resort Marketing Agency in Udaipur & Rajasthan | RankVRA",
    description:
      "Increase direct bookings and eliminate 20%+ OTA commissions. Custom web engineering, local SEO, and Google Hotel Ads for hospitality brands in Rajasthan.",
    url: "https://www.rankvra.com/industries/hotels",
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
      "@id": "https://www.rankvra.com/industries/hotels#webpage",
      url: "https://www.rankvra.com/industries/hotels",
      name: "Hotel & Resort Marketing Agency in Udaipur & Rajasthan | RankVRA",
      description:
        "Specialized digital marketing, custom website development, and local SEO for boutique hotels, heritage havelis, and luxury resorts across Rajasthan.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
      breadcrumb: {
        "@id": "https://www.rankvra.com/industries/hotels#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/industries/hotels#breadcrumb",
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
          name: "Hotels & Hospitality",
          item: "https://www.rankvra.com/industries/hotels",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/industries/hotels#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can hotels in Udaipur reduce their dependency on OTAs like MakeMyTrip and Booking.com?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hotels reduce OTA dependency by building lightning-fast custom websites, dominating Google Maps for local queries like 'luxury resort near Lake Pichola', offering direct-booking perks (such as complimentary breakfast or flexible check-out), and implementing frictionless WhatsApp reservation desks.",
          },
        },
        {
          "@type": "Question",
          name: "Why is website speed critical for hotel bookings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travelers browse luxury stays on mobile devices with visual photo galleries. If an image gallery takes longer than 2 seconds to load, over 50% of visitors bounce back to Google or book via an OTA where the hotel loses 18% to 25% commission.",
          },
        },
        {
          "@type": "Question",
          name: "Does RankVRA manage Google Hotel Ads and Meta campaigns for resorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We manage targeted Google Search, Google Hotel Ads, and Meta retargeting campaigns optimized for wedding inquiries, weekend staycations, and high-ticket suite bookings.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How can hotels in Udaipur reduce their dependency on OTAs like MakeMyTrip and Booking.com?",
    a: "Hotels reduce OTA dependency by building lightning-fast custom websites, dominating Google Maps for local queries like 'luxury resort near Lake Pichola', offering direct-booking perks (such as complimentary breakfast or flexible check-out), and implementing frictionless WhatsApp reservation desks.",
  },
  {
    q: "Why is website speed critical for hotel bookings?",
    a: "Travelers browse luxury stays on mobile devices with visual photo galleries. If an image gallery takes longer than 2 seconds to load, over 50% of visitors bounce back to Google or book via an OTA where the hotel loses 18% to 25% commission.",
  },
  {
    q: "Does RankVRA manage Google Hotel Ads and Meta campaigns for resorts?",
    a: "Yes. We manage targeted Google Search, Google Hotel Ads, and Meta retargeting campaigns optimized for wedding inquiries, weekend staycations, and high-ticket suite bookings.",
  },
];

export default function HotelsIndustryPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <HotelsHero />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Featured Case Study Cross-Link */}
          <div className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                  <TrendingUp size={14} />
                  Featured Hospitality Case Study
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  Lakeview Heritage Resort &amp; Spa, Udaipur
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                  How an independent boutique luxury resort shifted 41% of room inventory from third-party booking commissions to direct WhatsApp &amp; website reservations within 90 days.
                </p>
              </div>
              <Link
                href="/case-studies/lakeview-heritage-resort"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-[#cbd5e1] px-6 py-3 text-xs font-bold text-[#0f172a] shadow-xs hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shrink-0 self-start sm:self-center"
              >
                Read Resort Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Core Hotel Strategy */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              The Hospitality Growth Blueprint
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">High-Speed Photo Galleries</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Travelers book with their eyes. We build sub-second loading photo galleries that showcase your property, panoramic lake views, and royal suites without freezing on mobile connections.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Google Hotel SEO &amp; Maps</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Optimize your Google Business Profile and local landing pages for high-intent queries like &lsquo;heritage resort near Lake Pichola&rsquo; and &lsquo;destination wedding venue in Udaipur&rsquo;.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">WhatsApp Direct Reservations</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Indian and NRI guests favor direct WhatsApp conversations. We build automated booking funnels that handle room inquiries and date availability instantly with zero OTA fees.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Deliverables */}
          <div className="mt-16 rounded-3xl border border-[#e2e8f0] bg-white p-8">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f46e5]" />
              Hospitality Marketing Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Custom Next.js resort website with instant room showcase",
                "Google Hotel Center & Google Maps 3-pack profile optimization",
                "Direct WhatsApp booking widget with automated room inquiry flow",
                "Local wedding venue SEO for high-ticket destination weddings",
                "Targeted Google Search campaigns for peak tourist seasons",
                "Complete Core Web Vitals optimization under 0.8s LCP",
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
