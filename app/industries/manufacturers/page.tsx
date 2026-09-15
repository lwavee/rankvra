import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Factory,
  Phone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Lead Generation for Manufacturers in Rajasthan & India | RankVRA",
  description:
    "Generate qualified wholesale inquiries and RFQs for your manufacturing business. We build digital spec catalogs and targeted B2B Google Ads that reach commercial buyers.",
  alternates: { canonical: "https://www.rankvra.com/industries/manufacturers" },
  openGraph: {
    title: "B2B Lead Generation for Manufacturers in Rajasthan & India | RankVRA",
    description:
      "Digital specification catalogs, commercial Google Search funnels, and verified wholesale RFQ capture for industrial manufacturers in Rajasthan and across India.",
    url: "https://www.rankvra.com/industries/manufacturers",
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
      "@id": "https://www.rankvra.com/industries/manufacturers#webpage",
      url: "https://www.rankvra.com/industries/manufacturers",
      name: "B2B Lead Generation for Manufacturers in Rajasthan & India | RankVRA",
      description:
        "Specialized digital acquisition and B2B web engineering for industrial manufacturing units, stone processors, and fabricators across Rajasthan.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
      breadcrumb: {
        "@id": "https://www.rankvra.com/industries/manufacturers#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/industries/manufacturers#breadcrumb",
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
          name: "Manufacturing & B2B",
          item: "https://www.rankvra.com/industries/manufacturers",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/industries/manufacturers#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do industrial buyers find manufacturers on Google?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Industrial procurement managers and project contractors search using highly specific technical keywords, such as 'green marble slab manufacturer Udaipur', 'industrial valve supplier India', or 'custom precision forging Rajasthan'. They require detailed spec sheets, load ratings, and clear minimum order quantities (MOQs).",
          },
        },
        {
          "@type": "Question",
          name: "Why is a custom website better than relying solely on IndiaMART or TradeIndia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Directory platforms sell the same lead to 10 competing manufacturers simultaneously, sparking price-cutting wars. A dedicated, high-authority website establishes brand credibility, captures proprietary RFQs directly, and allows you to negotiate enterprise margins without middleman competition.",
          },
        },
        {
          "@type": "Question",
          name: "Can RankVRA help manufacturers reach international buyers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We build international SEO architectures with hreflang tags, export-compliant spec sheets, and targeted Google search campaigns for high-demand corridors including the USA, UK, UAE, and Europe.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How do industrial buyers find manufacturers on Google?",
    a: "Industrial procurement managers and project contractors search using highly specific technical keywords, such as 'green marble slab manufacturer Udaipur', 'industrial valve supplier India', or 'custom precision forging Rajasthan'. They require detailed spec sheets, load ratings, and clear minimum order quantities (MOQs).",
  },
  {
    q: "Why is a custom website better than relying solely on IndiaMART or TradeIndia?",
    a: "Directory platforms sell the same lead to 10 competing manufacturers simultaneously, sparking price-cutting wars. A dedicated, high-authority website establishes brand credibility, captures proprietary RFQs directly, and allows you to negotiate enterprise margins without middleman competition.",
  },
  {
    q: "Can RankVRA help manufacturers reach international buyers?",
    a: "Yes. We build international SEO architectures with hreflang tags, export-compliant spec sheets, and targeted Google search campaigns for high-demand corridors including the USA, UK, UAE, and Europe.",
  },
];

export default function ManufacturersIndustryPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
              <li>
                <Link href="/" className="hover:text-[#4f46e5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={12} className="text-[#94a3b8]" />
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#4f46e5] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <ChevronRight size={12} className="text-[#94a3b8]" />
              </li>
              <li className="text-[#0f172a]" aria-current="page">
                Manufacturing &amp; Industrial B2B
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Factory size={14} />
              Manufacturing &amp; Industrial B2B
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              B2B Lead Generation for{" "}
              <span className="text-gradient">Industrial Manufacturers</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              Industrial buyers don&apos;t make purchases on impulse. They look for detailed specifications, compliance certificates, and reliable production capacity. At RankVRA, we build modern B2B websites and Google Search campaigns that put your factory in front of commercial distributors, contractors, and procurement managers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get a Manufacturing SEO Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20a%20manufacturer%20and%20need%20more%20wholesale%20leads."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Our B2B Team
              </a>
            </div>
          </div>

          {/* Case Study Cross-Link */}
          <div className="mt-14 rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                  <TrendingUp size={14} />
                  Featured Industrial Case Study
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  Mewar Stone &amp; Marble Exports, Sukher
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                  How a Rajasthan natural stone processor generated 19 verified container-load export inquiries from US and UAE architects within 120 days via targeted technical SEO.
                </p>
              </div>
              <Link
                href="/case-studies/mewar-stone-marble-exports"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-[#cbd5e1] px-6 py-3 text-xs font-bold text-[#0f172a] shadow-xs hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shrink-0 self-start sm:self-center"
              >
                Read Industrial Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Core Pillars for Manufacturers */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              Digital B2B Infrastructure for Factories
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Technical Product Catalogs</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Fast, downloadable specification sheets and technical data tables that procurement officers and architects can quickly evaluate.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Commercial Intent Google Ads</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Target high-ticket search terms such as &lsquo;wholesale stone supplier in Rajasthan&rsquo; or &lsquo;industrial valve manufacturer in India&rsquo;.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Frictionless RFQ Funnels</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Simple Request-For-Quote forms that capture volume requirements, delivery locations, and instant WhatsApp alerts for your sales team.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Deliverables */}
          <div className="mt-16 rounded-3xl border border-[#e2e8f0] bg-white p-8">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f46e5]" />
              Manufacturing Growth Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Digital product catalogs with technical dimension sheets & ASTM/ISO test specs",
                "Dedicated B2B Request for Quote (RFQ) landing pages with minimal friction",
                "Google Search campaigns targeting commercial volume procurement queries",
                "Instant WhatsApp & email lead routing to senior export/sales managers",
                "Full analytics tracking linking website visitors directly to closed quotes",
                "Topical content clusters covering material grades, finishes, and shipping terms",
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
