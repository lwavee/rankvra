import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Eye,
  Layers,
  Layout,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Website Design & UI/UX Development | RankVRA",
  description:
    "Custom business website design focused on commercial credibility, intuitive user experience, and conversion. High-performance, responsive designs for modern businesses.",
  alternates: { canonical: "https://www.rankvra.com/services/website-design" },
  openGraph: {
    title: "Business Website Design & UI/UX Development | RankVRA",
    description:
      "Custom business website design focused on commercial credibility, intuitive user experience, and conversion. High-performance, responsive designs for modern businesses.",
    url: "https://www.rankvra.com/services/website-design",
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
      "@id": "https://www.rankvra.com/services/website-design#service",
      name: "Business Website Design Services",
      serviceType: "Website Design",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "India" },
      ],
      description:
        "Bespoke website design and user experience engineering for commercial enterprises, SaaS, insurance brokerages, and professional service firms.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/website-design",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/website-design#breadcrumb",
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
          name: "Website Design",
          item: "https://www.rankvra.com/services/website-design",
        },
      ],
    },
  ],
};

export default function WebsiteDesignServicePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-white via-indigo-50/20 to-[#f8fafc] pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#64748b]">
              <Link href="/" className="hover:text-[#4f46e5]">Home</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <Link href="/services" className="hover:text-[#4f46e5]">Services</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <span className="text-[#4f46e5] font-semibold">Website Design</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <Palette size={13} className="text-indigo-600" />
                Conversion-Focused UI/UX
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                Business Website Design Built to{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Build Trust &amp; Win Clients.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Your website is your primary digital storefront. We design clean, high-trust corporate websites that eliminate visual clutter, communicate your value proposition immediately, and guide qualified buyers toward action.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Get a Free Design Audit
                </Link>
                <Link
                  href="/case-studies"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  Explore Real Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Design Impacts Conversion */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                  Strategic UX Approach
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mt-2 mb-6">
                  Design is Commercial Architecture, Not Just Decoration
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  Within 3 seconds of opening a website, commercial decision-makers judge whether your business is reputable, established, and capable. Generic templates with stock photos and disjointed layouts drive high bounce rates.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  At RankVRA, we design with commercial intent: clear typography hierarchies, prominent proof mechanisms, intuitive navigation, and frictionless contact touchpoints.
                </p>

                <div className="space-y-3">
                  {[
                    "Instant Value Communication: Visitors understand what you do and who you serve in 5 seconds.",
                    "Mobile-First Responsive Layouts: Tailored touch targets and legible typography across all devices.",
                    "Structured Information Architecture: Effortless navigation between services, industries, and case studies.",
                    "Zero Generic Clutter: Purposeful imagery, custom iconography, and clean color systems.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                      <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Pillars Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Layout size={24} className="text-indigo-600 mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">Clean Layouts</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spacious, modern grid systems that guide the reader&apos;s eye naturally toward core commercial proof and calls-to-action.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <ShieldCheck size={24} className="text-indigo-600 mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">Trust Indicators</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thoughtfully positioned client case studies, compliance certifications, licensing, and genuine project outcomes.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Zap size={24} className="text-indigo-600 mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">Micro-Interactions</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Subtle CSS and Framer Motion transitions that make the website feel responsive, polished, and premium without slowing down load speeds.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <MonitorSmartphone size={24} className="text-indigo-600 mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">Multi-Screen Harmony</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pixel-accurate rendering across mobile viewports, tablets, laptops, and ultra-wide desktop monitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Our Process
              </span>
              <h2 className="text-3xl font-extrabold text-[#0f172a] mt-2">
                How We Design Your High-Converting Website
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Commercial Discovery",
                  desc: "We analyze your audience, commercial objectives, service offerings, and competitor positioning.",
                },
                {
                  step: "02",
                  title: "Information Architecture",
                  desc: "We structure the sitemap, URL paths, content hierarchy, and inquiry flow for maximum clarity.",
                },
                {
                  step: "03",
                  title: "UI Design & Prototyping",
                  desc: "We craft custom desktop and mobile layouts with clean typography, tailored palettes, and responsive elements.",
                },
                {
                  step: "04",
                  title: "Front-End Implementation",
                  desc: "We translate approved designs into lightweight Next.js and React code passing 100/100 Core Web Vitals.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs relative">
                  <span className="text-2xl font-black text-indigo-200 mb-2 block">{item.step}</span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                  Start With an Honest Audit
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Does your website represent the true caliber of your business?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Send us your current website URL. Founder Naveen Panchal will review your layout, messaging clarity, mobile responsiveness, and conversion opportunities.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Get a Free Website Audit
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/services/website-redesign"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    Explore Website Redesign
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
