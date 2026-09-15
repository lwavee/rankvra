import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  MapPin,
  MessageSquare,
  PanelsTopLeft,
  Target,
} from "lucide-react";
import { SiteShell } from "@/app/components/site-shell";

export const metadata: Metadata = {
  title: "Web Development & SEO Agency in Udaipur | RankVRA",
  description:
    "RankVRA is an engineering-first web development, SEO, and digital growth agency headquartered in Udaipur, Rajasthan (313001). Led by Founder Naveen Panchal.",
  alternates: { canonical: "https://www.rankvra.com/locations/udaipur" },
  openGraph: {
    title: "Web Development & SEO Agency in Udaipur | RankVRA",
    description:
      "RankVRA is an engineering-first web development, SEO, and digital growth agency headquartered in Udaipur, Rajasthan (313001). Led by Founder Naveen Panchal.",
    url: "https://www.rankvra.com/locations/udaipur",
    siteName: "RankVRA",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development & SEO Agency in Udaipur | RankVRA",
    description:
      "Custom Next.js engineering, Google Maps 3-Pack rankings, and B2B inquiry funnels for businesses in Udaipur, Rajasthan.",
  },
};

const udaipurSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.rankvra.com/locations/udaipur#localbusiness",
      name: "RankVRA - Web Development & SEO Agency Udaipur",
      url: "https://www.rankvra.com/locations/udaipur",
      logo: "https://www.rankvra.com/logo.png",
      image: "https://www.rankvra.com/logo.png",
      telephone: "+917297875798",
      email: "info@rankvra.com",
      founder: {
        "@type": "Person",
        name: "Naveen Panchal",
        url: "https://www.rankvra.com/about",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Udaipur",
        addressRegion: "Rajasthan",
        postalCode: "313001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.5854,
        longitude: 73.7125,
      },
      areaServed: [
        { "@type": "City", name: "Udaipur" },
        { "@type": "AdministrativeArea", name: "Rajasthan" },
      ],
      priceRange: "₹₹ - ₹₹₹",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/locations/udaipur#breadcrumb",
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
          item: "https://www.rankvra.com/locations/rajasthan",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Udaipur HQ",
          item: "https://www.rankvra.com/locations/udaipur",
        },
      ],
    },
  ],
};

const localSectors = [
  {
    title: "Hospitality & Heritage Stays",
    area: "Lake Pichola, Fateh Sagar & Sajjangarh",
    desc: "We engineer direct hotel booking engines with sub-second Next.js speeds, replacing heavy 20% OTA commission dependency for boutique resorts and luxury heritage havelis.",
    link: "/industries/hotels",
  },
  {
    title: "Marble, Mining & Industrial Exports",
    area: "Sukher, Madri Industrial Area & Gudli",
    desc: "We build structured technical product catalogs and international B2B SEO funnels helping marble processors and engineering exporters capture container-load trade inquiries.",
    link: "/industries/manufacturers",
  },
  {
    title: "Healthcare, Clinics & Diagnostic Labs",
    area: "Shastri Circle, Bhopalpura & Chetak Circle",
    desc: "We dominate the Google Maps 3-Pack for high-intent medical queries, driving direct phone calls and WhatsApp consultation bookings for specialized healthcare practitioners.",
    link: "/industries/clinics",
  },
  {
    title: "Handicrafts & D2C E-Commerce",
    area: "City Palace Belt, Hathipole & Mewar Artisans",
    desc: "We launch fast, secure e-commerce web applications with Razorpay/UPI checkout and automated pan-India shipping integrations for traditional craft houses.",
    link: "/services/web-development",
  },
];

const faqs = [
  {
    q: "Where is RankVRA's engineering office located in Udaipur?",
    a: "RankVRA is headquartered in Udaipur, Rajasthan 313001. We maintain direct founder-led operations here in Udaipur while engineering web platforms and organic search architectures for businesses locally, across Rajasthan, and internationally.",
  },
  {
    q: "Why choose RankVRA over traditional low-cost digital marketing agencies in Udaipur?",
    a: "Most local agencies sell slow, pre-made WordPress templates and rely on unverified keyword metrics. RankVRA takes a software engineering approach: we write clean, custom Next.js code that loads in under 1 second, build compliant schema graphs, and focus strictly on phone calls, WhatsApp leads, and verified business inquiries.",
  },
  {
    q: "Can businesses in Udaipur meet directly with Founder Naveen Panchal?",
    a: "Yes. Business owners, hoteliers, and industrial directors can meet directly with Founder Naveen Panchal for technical discovery consultations in Udaipur, or schedule a direct video call or WhatsApp discussion.",
  },
  {
    q: "How does RankVRA help local Udaipur businesses rank on Google Maps?",
    a: "We perform full Google Business Profile optimization, local NAP citation synchronization, geo-tagged clinical/facility photography, local service schema engineering, and review acceleration funnels to capture the local 3-Pack where 60%+ of mobile calls happen.",
  },
];

export default function UdaipurLocationPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(udaipurSchema) }}
      />
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-white pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#64748b]">
              <Link href="/" className="hover:text-[#4f46e5] transition-colors">
                Home
              </Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <Link href="/locations/rajasthan" className="hover:text-[#4f46e5] transition-colors">
                Locations
              </Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <span className="text-[#4f46e5] font-semibold">Udaipur HQ</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c7d2fe] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
                <MapPin size={14} />
                <span>Headquarters • Udaipur, Rajasthan 313001</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.12]">
                Web Development &amp; SEO Agency in{" "}
                <span className="text-gradient">Udaipur, Rajasthan</span>.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed">
                RankVRA provides engineering-first web development, technical Google SEO, and high-ROI digital lead funnels for businesses in the City of Lakes. Led by Founder <strong>Naveen Panchal (lw_avee)</strong>, we build digital assets that convert visitors into paying clients.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-growth-audit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
                >
                  Get Free Website &amp; SEO Audit
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20a%20business%20in%20Udaipur%20and%20want%20to%20discuss%20growth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shadow-sm"
                >
                  <MessageSquare size={15} />
                  WhatsApp Naveen (+91 7297875798)
                </a>
              </div>

              {/* Local Trust Badges */}
              <div className="mt-8 pt-6 border-t border-[#f1f5f9] grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-lg font-bold text-[#0f172a]">&lt; 1.0s</div>
                  <div className="text-[11px] text-[#64748b] font-medium">Target Load Speed</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#4f46e5]">Top 3 Pack</div>
                  <div className="text-[11px] text-[#64748b] font-medium">Google Maps Focus</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#0f172a]">100% Custom</div>
                  <div className="text-[11px] text-[#64748b] font-medium">Next.js Code IP</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#10b981]">Direct</div>
                  <div className="text-[11px] text-[#64748b] font-medium">Founder Led</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Localized Industry Ecosystems */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4f46e5]">
                Udaipur Commercial Hubs
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
                Tailored Solutions for Udaipur&apos;s Core Sectors
              </h2>
              <p className="mt-2 text-sm text-[#64748b]">
                Every industry in Udaipur faces distinct search intent and customer acquisition dynamics. We tailor our engineering and marketing to your exact commercial model.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {localSectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="rounded-[28px] border border-[#e2e8f0] bg-white p-8 shadow-sm hover:border-[#c7d2fe] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-semibold text-[#64748b] mb-4">
                      <MapPin size={12} className="text-[#4f46e5]" />
                      <span>{sector.area}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">{sector.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed mb-6">
                      {sector.desc}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={sector.link}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:text-[#4338ca] hover:underline"
                    >
                      Explore Industry Strategy <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services Breakdown for Udaipur */}
        <section className="py-16 bg-white border-y border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4f46e5]">
                Full-Stack Capabilities
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
                What We Engineer for Businesses in Udaipur
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-8 rounded-[28px] bg-[#f8fafc] border border-[#e2e8f0]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                  <PanelsTopLeft size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Next.js Web Engineering</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-4">
                  Custom responsive websites loading in under 1 second on mobile 4G/5G, complete with source code ownership and Core Web Vitals compliance.
                </p>
                <Link href="/services/web-development" className="text-xs font-bold text-[#4f46e5] hover:underline flex items-center gap-1">
                  Learn More <ArrowRight size={12} />
                </Link>
              </div>

              <div className="p-8 rounded-[28px] bg-[#f8fafc] border border-[#e2e8f0]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                  <Globe size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Google Maps 3-Pack SEO</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-4">
                  Targeted local SEO, NAP citation consistency, review acceleration, and geo-targeted landing pages ensuring your business dominates local search.
                </p>
                <Link href="/services/local-seo" className="text-xs font-bold text-[#4f46e5] hover:underline flex items-center gap-1">
                  Learn More <ArrowRight size={12} />
                </Link>
              </div>

              <div className="p-8 rounded-[28px] bg-[#f8fafc] border border-[#e2e8f0]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                  <Target size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">High-Intent Google Ads</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-4">
                  Laser-focused search and performance marketing funnels designed to deliver immediate phone calls and verified inquiries from ready buyers.
                </p>
                <Link href="/services/google-ads" className="text-xs font-bold text-[#4f46e5] hover:underline flex items-center gap-1">
                  Learn More <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Local FAQs */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4f46e5]">
                Local Knowledge
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
                Frequently Asked Questions About SEO &amp; Web Development in Udaipur
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-xs">
                  <h3 className="text-base font-bold text-[#0f172a] mb-2">{faq.q}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Action CTA */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                  Partner With Local Engineers
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Grow your Udaipur business with genuine search visibility.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Request a Free Growth Audit. We&apos;ll review your current website, identify Core Web Vitals speed bottlenecks, and show you the exact keywords your local competitors are ranking for.
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
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20in%20Udaipur%20and%20want%20to%20discuss%20my%20website%20growth."
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
