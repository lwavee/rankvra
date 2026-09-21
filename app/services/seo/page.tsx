import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { ArrowRight, CheckCircle2, ChevronRight, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { SeoHero } from "@/app/components/services/seo-hero";

export const metadata: Metadata = {
  title: "SEO Services for Growing Businesses | RankVRA",
  description:
    "RankVRA delivers comprehensive search engine optimization: technical crawlability, structured schema graphs, topical authority, and organic commercial client acquisition for businesses in India and internationally.",
  alternates: { canonical: "https://www.rankvra.com/services/seo" },
  openGraph: {
    title: "SEO Services for Growing Businesses | RankVRA",
    description:
      "Technical search engine optimization, semantic entity schemas, and topical authority built to win high-intent commercial buyers.",
    url: "https://www.rankvra.com/services/seo",
    siteName: "RankVRA",
    locale: "en_US",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.rankvra.com/services/seo#service",
      name: "Search Engine Optimization Services",
      serviceType: "SEO Service",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "India" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
      ],
      description:
        "Technical SEO, semantic topical authority, entity schema graph optimization, and commercial intent keyword ranking engineered for sustainable inbound inquiries.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/seo",
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
    title: "Technical SEO & Architecture",
    desc: "We resolve crawl bottlenecks, canonical conflicts, trailing slash inconsistencies, and server latency to ensure search engine spiders index your pages cleanly.",
    link: "/services/technical-seo",
  },
  {
    title: "Semantic Topical Authority",
    desc: "We engineer structured content clusters addressing real buyer queries and commercial problems without repetitive keyword stuffing.",
    link: "/blogs",
  },
  {
    title: "International & Multi-Market SEO",
    desc: "Targeting commercial buyers in the USA, Canada, UK, and India with clean URL structures and technical search signals.",
    link: "/services/international-seo",
  },
  {
    title: "High-Intent Commercial Targeting",
    desc: "We target commercial queries where buyers have genuine purchasing intent rather than burning resources on low-value informational traffic.",
    link: "/services/seo",
  },
  {
    title: "Entity & Schema Graph Engineering",
    desc: "Deploying Organization, Service, WebSite, and BreadcrumbList schemas with connected @id relationships for rich Google understanding.",
    link: "/services/technical-seo",
  },
  {
    title: "Conversion-Focused Search Funnels",
    desc: "Ensuring organic landing pages guide prospects into friction-free quote requests, consultations, and verified phone inquiries.",
    link: "/services/conversion-optimization",
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, i) => (
              <div key={i} className="p-8 rounded-[28px] border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#c7d2fe] transition-all flex flex-col justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef2ff] text-[#4f46e5] font-bold text-sm mb-5">
                    0{i + 1}
                  </div>
                  <h2 className="text-lg font-bold text-[#0f172a] mb-2">{item.title}</h2>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/70">
                  <Link href={item.link} className="text-xs font-bold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1">
                    Explore Capability &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Cross Link Box to Real Case Studies */}
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-[28px] border border-[#c7d2fe] bg-[#f5f7ff]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">Commercial Case Study</span>
              <h3 className="text-xl font-bold text-[#0f172a] mt-1">
                Capital &amp; Co Insurance Services
              </h3>
              <p className="text-sm text-[#475569] mt-2 mb-4">
                Structured Schema.org markup, multi-line policy architecture, and technical SEO designed for commercial client acquisition in the United States.
              </p>
              <Link
                href="/case-studies/capital-co-insurance"
                className="text-xs font-bold text-[#4f46e5] hover:underline inline-flex items-center gap-1"
              >
                Read Technical Case Study <ArrowRight size={13} />
              </Link>
            </div>

            <div className="p-8 rounded-[28px] border border-[#e2e8f0] bg-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Technical SEO Guide</span>
              <h3 className="text-xl font-bold text-[#0f172a] mt-1">
                Technical SEO Audit Checklist: 25 Core Items
              </h3>
              <p className="text-sm text-[#475569] mt-2 mb-4">
                In-depth technical breakdown covering crawlability, indexation, Core Web Vitals, and structured entity graphs.
              </p>
              <Link
                href="/blogs/technical-seo-audit-checklist-india"
                className="text-xs font-bold text-[#4f46e5] hover:underline inline-flex items-center gap-1"
              >
                Read Technical Guide <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#4f46e5] to-[#4338ca] p-8 sm:p-12 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to see where your website stands on Google?</h2>
            <p className="mt-3 text-sm sm:text-base text-indigo-100 max-w-xl mx-auto">
              Request a free website audit. We will inspect your crawlability, server response speed, Core Web Vitals, and search architecture.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/free-website-audit"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#4f46e5] hover:bg-slate-50 transition-all shadow-md"
              >
                Get a Free Website Audit
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/services/technical-seo"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
              >
                Inspect Technical SEO
              </Link>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
