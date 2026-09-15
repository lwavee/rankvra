import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { WebDevHero } from "@/app/components/services/web-dev-hero";

export const metadata: Metadata = {
  title: "Custom Web Development Company in Udaipur & Rajasthan | RankVRA",
  description:
    "We build custom, lightning-fast Next.js and React websites that load under 1 second, pass Core Web Vitals, and turn Google traffic into paying clients. Led by Naveen Panchal.",
  alternates: { canonical: "https://www.rankvra.com/services/web-development" },
  openGraph: {
    title: "Custom Web Development Company in Udaipur & Rajasthan | RankVRA",
    description:
      "We build custom, lightning-fast Next.js and React websites that load under 1 second, pass Core Web Vitals, and turn Google traffic into paying clients.",
    url: "https://www.rankvra.com/services/web-development",
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
      "@id": "https://www.rankvra.com/services/web-development#service",
      name: "Custom Web Development & Next.js Engineering",
      serviceType: "Web Development",
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
        "High-performance custom web development built with Next.js, React, and TypeScript. Engineered for sub-second speeds, flawless mobile Core Web Vitals, and direct conversion funnels.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/web-development",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/web-development#breadcrumb",
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
          name: "Web Development",
          item: "https://www.rankvra.com/services/web-development",
        },
      ],
    },
  ],
};

export default function WebDevelopmentServicePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WebDevHero />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Why Custom Next.js Beats WordPress */}
          <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
            <div className="p-8 sm:p-10 rounded-[32px] bg-[#f8fafc] border border-[#e2e8f0]">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Why We Never Use Slow WordPress Page Builders
              </h2>
              <p className="text-sm text-[#64748b] leading-7 mb-6">
                Most agencies in Udaipur install a heavy, bloated pre-made WordPress theme with 40 random plugins. The result is a slow site that fails Google Core Web Vitals, gets penalized in search rankings, and frustrates visitors.
              </p>
              <div className="space-y-3">
                {[
                  "Sub-1-Second Load Times: Built with Next.js, React, and modern CSS architecture.",
                  "100% Responsive: Flawless layout on every screen from smartphone to 4K desktop.",
                  "SEO-Engineered DOM: Clean HTML markup structured specifically for Googlebot crawlers.",
                  "Zero Plugin Vulnerabilities: Custom code eliminates security holes and frequent crashes.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-semibold text-[#0f172a]">
                    <CheckCircle2 size={18} className="text-[#4f46e5] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0f172a]">Who We Build For in Rajasthan:</h3>
              <div className="grid gap-3">
                {[
                  {
                    title: "Hotels & Heritage Resorts",
                    desc: "High-resolution photo galleries and direct booking forms that eliminate OTA fees.",
                  },
                  {
                    title: "Marble, Stone & Mineral Exporters",
                    desc: "Digital product catalogs and wholesale RFQ forms for domestic and global buyers.",
                  },
                  {
                    title: "Healthcare Clinics & Doctors",
                    desc: "Fast appointment booking and localized service pages that rank on Google.",
                  },
                  {
                    title: "E-Commerce Brands",
                    desc: "Seamless checkout with Razorpay/UPI integrations and automated WhatsApp order updates.",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[#c7d2fe] transition-all">
                    <p className="text-sm font-bold text-[#0f172a]">{item.title}</p>
                    <p className="text-xs text-[#64748b] mt-1 leading-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connected Case Study & Guide */}
          <div className="mt-16 p-8 rounded-[32px] border border-[#c7d2fe] bg-[#f5f7ff] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">Related Client Case Study</span>
              <h3 className="text-xl font-bold text-[#0f172a] mt-1">
                How Lakeview Heritage Resort Cut Load Time to 0.8s with Custom Next.js
              </h3>
              <p className="text-sm text-[#475569] mt-1 max-w-2xl">
                See the exact technical stack and performance audit behind this hospitality speed overhaul.
              </p>
            </div>
            <Link
              href="/case-studies/lakeview-heritage-resort"
              className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#4338ca] transition-colors shrink-0"
            >
              Read Case Study <ArrowRight size={13} />
            </Link>
          </div>

          {/* CTA Banner */}
          <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#4f46e5] to-[#4338ca] p-8 sm:p-12 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to build a website that actually brings customers?</h2>
            <p className="mt-3 text-sm sm:text-base text-indigo-100 max-w-xl mx-auto">
              Get a transparent quote and direct technical consultation with Founder Naveen Panchal.
            </p>
            <Link
              href="/free-growth-audit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#4f46e5] hover:bg-slate-50 transition-all shadow-md"
            >
              Get Free Consultation &amp; Audit
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
