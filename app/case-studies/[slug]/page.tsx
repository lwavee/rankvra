import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Layers,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { SiteShell } from "@/app/components/site-shell";
import { CASE_STUDIES, getCaseStudyBySlug } from "../data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | RankVRA",
    };
  }

  return {
    title: `${study.title} | RankVRA Case Study`,
    description: study.tagline,
    alternates: {
      canonical: `https://www.rankvra.com/case-studies/${slug}`,
    },
    openGraph: {
      title: `${study.title} | RankVRA`,
      description: study.tagline,
      url: `https://www.rankvra.com/case-studies/${slug}`,
      siteName: "RankVRA",
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.tagline,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://www.rankvra.com/case-studies/${slug}#article`,
        headline: study.title,
        description: study.tagline,
        url: `https://www.rankvra.com/case-studies/${slug}`,
        datePublished: study.publishedDate,
        dateModified: study.publishedDate,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.rankvra.com/case-studies/${slug}`,
        },
        author: {
          "@type": "Person",
          "@id": "https://www.rankvra.com/#founder",
          name: "Naveen Panchal",
          jobTitle: "Founder & Lead Technical Architect",
          url: "https://www.rankvra.com/about",
        },
        publisher: {
          "@id": "https://www.rankvra.com/#organization",
        },
        about: {
          "@type": "Organization",
          name: study.client,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.rankvra.com/case-studies/${slug}#breadcrumb`,
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
            name: "Case Studies",
            item: "https://www.rankvra.com/case-studies",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: study.client,
            item: `https://www.rankvra.com/case-studies/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#f8fafc] pt-5 pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-[#64748b]">
            <Link href="/" className="hover:text-[#4f46e5] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#94a3b8]" />
            <Link href="/case-studies" className="hover:text-[#4f46e5] transition-colors">
              Case Studies
            </Link>
            <ChevronRight size={12} className="text-[#94a3b8]" />
            <span className="text-[#4f46e5] font-semibold">{study.client}</span>
          </nav>

          {/* Hero Overview Card */}
          <header className="rounded-[22px] border border-[#e2e8f0] bg-white p-5 sm:p-7 shadow-xs mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                <span className="rounded-full bg-[#eef2ff] px-3 py-0.5 text-[#4f46e5] font-bold text-[11px]">
                  {study.industry}
                </span>
                <span className="text-[#94a3b8]">•</span>
                <span className="flex items-center gap-1 text-[#64748b] text-[11px]">
                  <MapPin size={12} className="text-[#4f46e5]" />
                  {study.location}
                </span>
                <span className="text-[#94a3b8]">•</span>
                <span className="flex items-center gap-1 text-[#64748b] text-[11px]">
                  <Clock size={12} className="text-[#4f46e5]" />
                  {study.timeline}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live Audited
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-[#0f172a] leading-tight mb-2.5">
              {study.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal mb-4">
              {study.tagline}
            </p>

            {/* Services Used Tags */}
            <div className="pt-3.5 border-t border-[#f1f5f9]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8] mr-1">
                  Stack:
                </span>
                {study.servicesUsed.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded-lg bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1 text-[11px] font-medium text-[#334155]"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#4f46e5]" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Metrics & Performance Strip */}
          <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {study.metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-[18px] border border-[#e2e8f0] bg-white p-3.5 sm:p-4 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight">{m.value}</div>
                  <div className="text-[10px] font-bold text-[#4f46e5] uppercase tracking-wider mt-0.5">{m.label}</div>
                </div>
                <p className="text-[10px] text-[#64748b] mt-2 leading-relaxed border-t border-[#f1f5f9] pt-1.5">
                  {m.context}
                </p>
              </div>
            ))}
          </div>

          {/* Deep Dive: Challenge vs Strategy Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="rounded-[28px] border border-[#ffe4e6] bg-[#fff5f5] p-8 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                Baseline &amp; Commercial Friction
              </span>
              <h2 className="text-xl font-bold text-[#0f172a] mt-2 mb-4">
                The Starting Point &amp; Challenge
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-[#475569] leading-relaxed">
                <p>{study.startingPoint}</p>
                <p>{study.challenge}</p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#c7d2fe] bg-[#f5f7ff] p-8 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Technical Blueprint
              </span>
              <h2 className="text-xl font-bold text-[#0f172a] mt-2 mb-4">
                The Engineering Strategy
              </h2>
              <ul className="space-y-3">
                {study.strategy.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#4f46e5] shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Work Completed Breakdown */}
          <div className="rounded-[32px] border border-[#e2e8f0] bg-white p-8 sm:p-12 shadow-sm mb-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
              <Layers size={15} />
              <span>Implementation Scope</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-8">
              Technical Work Completed
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {study.workCompleted.map((w, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4f46e5] text-white text-xs font-bold">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-[#0f172a]">{w.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    {w.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Strategic Takeaways & Outcome */}
          <div className="rounded-[32px] border border-[#e2e8f0] bg-white p-8 sm:p-12 shadow-sm mb-12">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#10b981] mb-2">
              <ShieldCheck size={16} />
              <span>Verified Results</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4">
              Commercial Outcome
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mb-8">
              {study.outcomeSummary}
            </p>

            <div className="rounded-2xl border border-[#c7d2fe] bg-[#f5f7ff] p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#4f46e5] mb-4 flex items-center gap-2">
                <Sparkles size={16} />
                Strategic Takeaways for Business Leaders
              </h3>
              <ul className="space-y-3">
                {study.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3">
                    <Zap size={16} className="text-[#4f46e5] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#1e293b]">
                      {takeaway}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTA Banner */}
          <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                Get Measurable Business Results
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ready to engineer your website for verified growth?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                Connect directly with Founder Naveen Panchal to audit your current platform and plan a high-speed search strategy.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/free-growth-audit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                >
                  Claim Free Growth Audit
                  <ArrowRight size={15} />
                </Link>
                <a
                  href={`https://wa.me/917297875798?text=Hi%20Naveen,%20I%20read%20your%20${encodeURIComponent(study.client)}%20case%20study%20and%20want%20to%20discuss%20our%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  <MessageSquare size={15} />
                  WhatsApp Naveen Directly
                </a>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f46e5] hover:text-[#4338ca]"
            >
              <ArrowLeft size={16} />
              View All Client Case Studies
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
