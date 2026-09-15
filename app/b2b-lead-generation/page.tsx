import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Phone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Lead Generation Agency for High-Value Services | RankVRA",
  description:
    "We build reliable B2B customer acquisition funnels for service providers, industrial manufacturers, and tech firms using Google Search and intent data.",
  alternates: { canonical: "https://www.rankvra.com/b2b-lead-generation" },
  openGraph: {
    title: "B2B Lead Generation Agency for High-Value Services | RankVRA",
    description:
      "Enterprise B2B inbound acquisition: technical SEO, commercial Google Ads, and high-conversion specification funnels for high-ticket contract values.",
    url: "https://www.rankvra.com/b2b-lead-generation",
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
      "@id": "https://www.rankvra.com/b2b-lead-generation#webpage",
      url: "https://www.rankvra.com/b2b-lead-generation",
      name: "B2B Lead Generation Agency for High-Value Services | RankVRA",
      description:
        "Specialized inbound B2B lead generation funnels engineered for industrial suppliers, corporate consultants, and tech providers.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
      breadcrumb: {
        "@id": "https://www.rankvra.com/b2b-lead-generation#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/b2b-lead-generation#breadcrumb",
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
          name: "B2B Lead Generation",
          item: "https://www.rankvra.com/b2b-lead-generation",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/b2b-lead-generation#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does B2B lead generation differ from B2C lead generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "B2B transactions feature longer sales cycles, multiple corporate decision-makers, and high average contract values. Instead of emotional impulse triggers, B2B funnels require technical specifications, compliance verification, case studies, and transparent RFQ processes.",
          },
        },
        {
          "@type": "Question",
          name: "What channels generate the highest quality B2B leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "High-intent Google Search and technical SEO consistently generate the highest quality B2B inquiries because corporate procurement officers and project managers actively search for solutions when ready to evaluate suppliers.",
          },
        },
        {
          "@type": "Question",
          name: "How do you prevent unqualified inquiries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We implement qualification gates on RFQ forms (such as project budget ranges, company domain email validation, and minimum order quantity indicators) along with aggressive negative keywords on paid campaigns.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How does B2B lead generation differ from B2C lead generation?",
    a: "B2B transactions feature longer sales cycles, multiple corporate decision-makers, and high average contract values. Instead of emotional impulse triggers, B2B funnels require technical specifications, compliance verification, case studies, and transparent RFQ processes.",
  },
  {
    q: "What channels generate the highest quality B2B leads?",
    a: "High-intent Google Search and technical SEO consistently generate the highest quality B2B inquiries because corporate procurement officers and project managers actively search for solutions when ready to evaluate suppliers.",
  },
  {
    q: "How do you prevent unqualified inquiries?",
    a: "We implement qualification gates on RFQ forms (such as project budget ranges, company domain email validation, and minimum order quantity indicators) along with aggressive negative keywords on paid campaigns.",
  },
];

export default function B2bLeadGenerationPage() {
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
              <li className="text-[#0f172a]" aria-current="page">
                B2B Lead Generation
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Briefcase size={14} />
              High-Ticket B2B Acquisition
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Predictable B2B Leads for{" "}
              <span className="text-gradient">High-Value Services</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              B2B transactions require deep trust, technical authority, and clear business justification. We design focused organic search architectures and intent-driven paid search funnels that attract corporate decision-makers actively seeking qualified vendors.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Audit Your B2B Funnel
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20interested%20in%20B2B%20lead%20generation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                Discuss Your B2B Model
              </a>
            </div>
          </div>

          {/* Case Study Link */}
          <div className="mt-14 rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                  <TrendingUp size={14} />
                  B2B Wholesale Case Study
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  Mewar Stone &amp; Marble Exports
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                  Generated 19 verified container-load export inquiries from US and UAE architects within 120 days through technical SEO and B2B specifications.
                </p>
              </div>
              <Link
                href="/case-studies/mewar-stone-marble-exports"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-[#cbd5e1] px-6 py-3 text-xs font-bold text-[#0f172a] shadow-xs hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shrink-0 self-start sm:self-center"
              >
                Read B2B Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Strategy Blocks */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              B2B Acquisition Engine
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Intent-Driven Keywords</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Target high-value, solution-specific queries that only genuine decision-makers type into Google when preparing an RFP or purchasing proposal.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">White-Paper &amp; Audit Funnels</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Convert cold visitors into qualified prospects by offering valuable technical audits, calculators, or transparent specification sheets.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Rapid CRM Qualification</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Filter out unqualified inquiries automatically, routing genuine high-value opportunities straight to your senior sales team.
                </p>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="mt-16 rounded-3xl border border-[#e2e8f0] bg-white p-8">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f46e5]" />
              B2B Growth Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Commercial search query research focused on buyers, not general researchers",
                "Technical landing pages highlighting ISO/CE certifications and capacity",
                "Frictionless Request for Quote (RFQ) forms with automated lead qualification",
                "Google Tag Manager server-side event tracking and CRM webhook integration",
                "Topical authority blog articles that answer commercial buyer evaluation questions",
                "Direct guidance from founder Naveen Panchal on sales pipeline velocity",
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
