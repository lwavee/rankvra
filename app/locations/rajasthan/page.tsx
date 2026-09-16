import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { LocationHero } from "@/app/components/location-hero";

export const metadata: Metadata = {
  title: "Web Development & Digital Marketing Agency in Rajasthan | RankVRA",
  description:
    "Serving ambitious businesses across Jaipur, Jodhpur, Udaipur, Kota, and Bhilwara with high-speed custom web development, Google SEO, and paid ad management.",
  alternates: { canonical: "https://www.rankvra.com/locations/rajasthan" },
  openGraph: {
    title: "Web Development & Digital Marketing Agency in Rajasthan | RankVRA",
    description:
      "Enterprise web engineering, local SEO, and B2B growth across Rajasthan: Jaipur, Jodhpur, Udaipur, Kota, and Bhilwara. Led by founder Naveen Panchal.",
    url: "https://www.rankvra.com/locations/rajasthan",
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
      "@id": "https://www.rankvra.com/locations/rajasthan#webpage",
      url: "https://www.rankvra.com/locations/rajasthan",
      name: "Web Development & Digital Marketing Agency in Rajasthan | RankVRA",
      description:
        "RankVRA provides custom Next.js web development, technical SEO, and lead acquisition across the state of Rajasthan.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
      breadcrumb: {
        "@id": "https://www.rankvra.com/locations/rajasthan#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/locations/rajasthan#breadcrumb",
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
          name: "Locations",
          item: "https://www.rankvra.com/locations/india",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rajasthan",
          item: "https://www.rankvra.com/locations/rajasthan",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/locations/rajasthan#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which cities in Rajasthan does RankVRA serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RankVRA is headquartered in Udaipur and serves clients across Jaipur, Jodhpur, Bhilwara, Kota, Ajmer, Bikaner, and Alwar, as well as pan-India and international corridors.",
          },
        },
        {
          "@type": "Question",
          name: "What industries in Rajasthan benefit most from your web engineering and SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our core client base includes luxury heritage resorts, destination wedding venues, marble and granite processors, handicraft and textile exporters, and specialized medical clinics.",
          },
        },
        {
          "@type": "Question",
          name: "Do you meet clients in person in Rajasthan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In-person consultations with founder Naveen Panchal are available at our Udaipur office (313001) or on-site across Rajasthan by prior appointment.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Which cities in Rajasthan does RankVRA serve?",
    a: "RankVRA is headquartered in Udaipur and serves clients across Jaipur, Jodhpur, Bhilwara, Kota, Ajmer, Bikaner, and Alwar, as well as pan-India and international corridors.",
  },
  {
    q: "What industries in Rajasthan benefit most from your web engineering and SEO?",
    a: "Our core client base includes luxury heritage resorts, destination wedding venues, marble and granite processors, handicraft and textile exporters, and specialized medical clinics.",
  },
  {
    q: "Do you meet clients in person in Rajasthan?",
    a: "Yes. In-person consultations with founder Naveen Panchal are available at our Udaipur office (313001) or on-site across Rajasthan by prior appointment.",
  },
];

export default function RajasthanLocationPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <LocationHero
        locationName="Rajasthan, India"
        badgeText="Serving All Across Rajasthan"
        title={<>Web Development &amp; <span className="text-gradient">Digital Marketing in Rajasthan</span>.</>}
        description="From Jaipur's startup ecosystem and Jodhpur's handicrafts to Bhilwara's textile mills and Udaipur's hospitality — we provide enterprise-grade web development and ROI-focused digital growth across the entire state."
        breadcrumbLabel="Rajasthan"
        parentLocationPath="/locations/india"
        parentLocationLabel="Locations"
        coordinatesText="Statewide Network • 26.9124° N, 75.7873° E"
        auditCtaText="Get Rajasthan Business Audit"
        whatsappMessage="Hi Naveen, I am a business in Rajasthan and want to grow our search rankings."
        proofCounters={[
          { value: "< 1.0s", label: "Target Load Speed" },
          { value: "Statewide", label: "Regional Coverage", highlightColor: "text-[#4f46e5]" },
          { value: "100%", label: "Custom Architecture", highlightColor: "text-[#10b981]" },
        ]}
        localHubs={[
          { name: "Jaipur & Jodhpur", sector: "Startups, Retail & Global Handicrafts", tag: "E-Commerce & SEO" },
          { name: "Udaipur HQ", sector: "Luxury Heritage Tourism & Marble Mining", tag: "Direct Bookings & RFQs" },
          { name: "Bhilwara & Kota", sector: "Textiles, Manufacturing & Education", tag: "B2B Lead Funnels" },
        ]}
      />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Udaipur HQ Spotlight */}
          <div className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                  <MapPin size={14} />
                  Operational Headquarters
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  Udaipur Core Hub &amp; Local Dominance
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                  Headquartered at 313001, Udaipur. Explore our hyper-local SEO case studies, local business schema implementations, and client results across Lake City.
                </p>
              </div>
              <Link
                href="/locations/udaipur"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-[#cbd5e1] px-6 py-3 text-xs font-bold text-[#0f172a] shadow-xs hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shrink-0 self-start sm:self-center"
              >
                Explore Udaipur Page <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Regional Hubs */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              Key Rajasthan Commercial Corridors
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-base font-bold text-[#0f172a] mb-1">Jaipur Hub</h3>
                <p className="text-xs text-[#64748b] leading-5">
                  E-commerce jewellery, fashion D2C brands, and modern software startups requiring high-speed Next.js platforms.
                </p>
              </div>

              <div className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-base font-bold text-[#0f172a] mb-1">Udaipur Hub (HQ)</h3>
                <p className="text-xs text-[#64748b] leading-5">
                  Heritage luxury resorts, marble manufacturing, wedding planning, and healthcare local SEO domination.
                </p>
              </div>

              <div className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-base font-bold text-[#0f172a] mb-1">Jodhpur Hub</h3>
                <p className="text-xs text-[#64748b] leading-5">
                  Wooden furniture manufacturers, sandstone exporters, and tourism businesses targeting global buyers.
                </p>
              </div>

              <div className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-base font-bold text-[#0f172a] mb-1">Bhilwara &amp; Kota</h3>
                <p className="text-xs text-[#64748b] leading-5">
                  Textile manufacturing B2B catalogs, educational institutes, and coaching academies seeking qualified student admissions.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Deliverables */}
          <div className="mt-16 rounded-3xl border border-[#e2e8f0] bg-white p-8">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f46e5]" />
              Client Commitments Across Rajasthan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Direct leadership from founder Naveen Panchal on every project",
                "Sub-1-second page loads engineered specifically for regional 4G/5G mobile speeds",
                "Structured JSON-LD schema linking physical Rajasthan entities to Google Knowledge Graph",
                "Transparent lead conversion tracking without vanity metric reports",
                "Full code ownership: clean Next.js/React repositories with zero vendor lock-in",
                "On-site consultation availability across key commercial centers in Rajasthan",
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
