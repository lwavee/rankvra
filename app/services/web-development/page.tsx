import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  LayoutDashboard,
  Layers,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { WebDevHero } from "@/app/components/services/web-dev-hero";

export const metadata: Metadata = {
  title: "Web Development Agency for Modern Businesses | RankVRA",
  description:
    "RankVRA engineers high-speed Next.js and React websites, custom web applications, and digital storefronts for growing businesses in India, the US, UK, and Canada.",
  alternates: { canonical: "https://www.rankvra.com/services/web-development" },
  openGraph: {
    title: "Web Development Agency for Modern Businesses | RankVRA",
    description:
      "RankVRA engineers high-speed Next.js and React websites, custom web applications, and digital storefronts for growing businesses in India, the US, UK, and Canada.",
    url: "https://www.rankvra.com/services/web-development",
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
      "@id": "https://www.rankvra.com/services/web-development#service",
      name: "Custom Web Development Services",
      serviceType: "Web Development",
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
        "High-performance custom web development built with Next.js, React, and TypeScript. Engineered for sub-second speeds, flawless Core Web Vitals, and direct inbound client acquisition.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/web-development",
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

          {/* Core Philosophy: Custom Architecture vs Legacy Templates */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="p-8 sm:p-10 rounded-[32px] bg-[#f8fafc] border border-[#e2e8f0]">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 mb-3">
                <Code2 size={13} />
                Software-Grade Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-4">
                Why Custom Next.js Architecture Outperforms Legacy CMS
              </h2>
              <p className="text-sm text-[#64748b] leading-7 mb-6">
                Many agencies install off-the-shelf WordPress themes weighed down with dozens of third-party plugins. The result is a slow, fragile website that fails Google Core Web Vitals and leaks potential customers. At RankVRA, we build custom web platforms from the ground up using React, Next.js, and clean TypeScript.
              </p>
              <div className="space-y-3">
                {[
                  "Sub-Second Mobile Response: Server-side rendering (SSR) and edge-cached static generation.",
                  "Flawless Mobile Viewports: Tested across iOS, Android, tablets, and high-resolution displays.",
                  "SEO-Engineered DOM Structure: Semantic HTML5 hierarchy designed specifically for Googlebot crawlers.",
                  "Zero Plugin Vulnerability: Clean, custom architecture without third-party security vulnerabilities.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-semibold text-[#0f172a]">
                    <CheckCircle2 size={18} className="text-[#4f46e5] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0f172a]">Commercial Solutions We Engineer:</h3>
              <div className="grid gap-3.5">
                {[
                  {
                    title: "Corporate & Business Websites",
                    desc: "High-trust digital storefronts designed to clearly communicate your service value and convert corporate visitors into consultation inquiries.",
                    link: "/services/website-design",
                  },
                  {
                    title: "Website Redesigns & Performance Overhauls",
                    desc: "Modernize sluggish, outdated legacy websites to achieve green Core Web Vitals and eliminate bounce rate friction.",
                    link: "/services/website-redesign",
                  },
                  {
                    title: "Custom Web Applications & Portals",
                    desc: "Interactive dashboards, client areas, wholesale submission engines, and internal workflow management tools.",
                    link: "/services/web-application-development",
                  },
                  {
                    title: "Commercial Insurance Web Platforms",
                    desc: "Specialized retail agency websites and wholesale underwriter portals with structured quote flows.",
                    link: "/industries/insurance",
                  },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    className="block p-5 rounded-2xl border border-[#e2e8f0] bg-white hover:border-indigo-300 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-[#0f172a] hover:text-indigo-600 transition-colors">
                        {item.title}
                      </p>
                      <ArrowRight size={13} className="text-slate-400" />
                    </div>
                    <p className="text-xs text-[#64748b] mt-1 leading-5">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Connected Case Studies */}
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-[32px] border border-[#c7d2fe] bg-[#f5f7ff] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">Verified Case Study</span>
                <h3 className="text-xl font-bold text-[#0f172a] mt-1">
                  Capital &amp; Co Insurance Services
                </h3>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                  Commercial insurance agency web design with custom Next.js architecture, policy-segmented inquiry flows, and InsuranceAgency schema.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-indigo-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">United States Market</span>
                <Link
                  href="/case-studies/capital-co-insurance"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-[32px] border border-[#e2e8f0] bg-white flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Verified Case Study</span>
                <h3 className="text-xl font-bold text-[#0f172a] mt-1">
                  Sterling Wholesale Insurance Portal
                </h3>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                  Custom web application engineering featuring secure broker authentication, structured file intake, and real-time underwriting workflows.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">United States Market</span>
                <Link
                  href="/case-studies/sterling-insurance-portal"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* International Collaboration Process */}
          <div className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50/60 p-8 sm:p-12">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                Seamless Delivery
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                How We Deliver for National &amp; International Businesses
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Based in India, RankVRA provides engineering excellence, rapid sprint cycles, and dedicated overlapping hours for clients across North America, the UK, and India.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="font-bold text-slate-950 mb-1">Direct Technical Communication</h4>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Zero junior middlemen. Collaborate directly with Founder Naveen Panchal via Slack, Google Meet, or WhatsApp with regular demo releases.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="font-bold text-slate-950 mb-1">Clean Git Version Control</h4>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Every commit is tracked in transparent repositories. You maintain 100% intellectual property ownership of all source code, design files, and deployment pipelines.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="font-bold text-slate-950 mb-1">Global Performance Deployment</h4>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Global edge CDN pre-rendering ensures sub-second page delivery whether your users visit from New York, London, Toronto, Mumbai, or Delhi.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 rounded-[32px] bg-gradient-to-r from-[#4f46e5] to-[#4338ca] p-8 sm:p-12 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to build a website engineered for business growth?</h2>
            <p className="mt-3 text-sm sm:text-base text-indigo-100 max-w-xl mx-auto">
              Get an honest review of your website requirements and direct architectural consultation with Founder Naveen Panchal.
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
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
