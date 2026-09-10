import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development & Digital Marketing Agency in India | RankVRA",
  description:
    "RankVRA is a premier web development and digital growth agency in India. We engineer ultra-fast Next.js websites, technical SEO architectures, and B2B lead generation funnels for enterprises and SMEs nationwide.",
  alternates: {
    canonical: "https://rankvra.com/locations/india",
  },
};

const metros = [
  { city: "Mumbai", focus: "Fintech, Corporate & Luxury Hospitality" },
  { city: "Delhi NCR", focus: "B2B Enterprises, Healthcare & Legal" },
  { city: "Bengaluru", focus: "Tech Startups, SaaS & AI Innovations" },
  { city: "Hyderabad", focus: "Pharma, Biotech & IT Services" },
  { city: "Pune", focus: "Automotive, Engineering & Manufacturing" },
  { city: "Ahmedabad", focus: "Chemicals, Textiles & Global Exporters" },
  { city: "Jaipur & Udaipur", focus: "Heritage Tourism, Stone/Marble & Handicrafts" },
  { city: "Chennai", focus: "Industrial Manufacturing & Supply Chain" },
];

export default function IndiaLocationPage() {
  return (
    <SiteShell>
      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
                <Globe2 size={13} className="text-[#4f46e5]" />
                Pan-India Digital Engineering Hub
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1]">
                Web Development &amp; SEO Agency in <span className="text-gradient">India</span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#475569] leading-relaxed">
                RankVRA delivers enterprise-grade Next.js web applications, national technical SEO dominance, and high-converting B2B pipeline growth for businesses operating across India and international corridors.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-growth-audit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
                >
                  Request Nationwide Growth Audit <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20discuss%20our%20pan-India%20digital%20strategy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
                >
                  <Phone size={15} className="text-[#16a34a]" /> WhatsApp Direct Connect
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Indian Brands Choose RankVRA */}
        <section className="py-20 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#4f46e5]">Engineered for Modern Commerce</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
                  Why Indian Companies Are Moving Away from Legacy WordPress Agencies.
                </h2>
                <p className="mt-4 text-base text-[#64748b] leading-relaxed">
                  Most agencies in India rely on bloated, plugin-heavy WordPress templates that fail Google Core Web Vitals, take 4+ seconds to load on mobile networks, and generate zero verified buyer inquiries.
                </p>
                <p className="mt-3 text-base text-[#64748b] leading-relaxed">
                  RankVRA engineers custom Next.js web applications with sub-second performance, structured JSON-LD schemas, and programmatic technical SEO built specifically to capture high-intent commercial keywords.
                </p>

                <div className="mt-8 space-y-3.5">
                  {[
                    "Sub-1-second mobile page loads guaranteed across 4G and 5G networks",
                    "Topical cluster architecture to win high-volume national Google search queries",
                    "Full-funnel Google Ads & Meta Ads management with verified ROAS tracking",
                    "Direct consultation with founder Naveen Panchal (lw_avee) — no junior account managers",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#4f46e5] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-[#334155]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metro Hubs Grid */}
              <div className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 size={18} className="text-[#4f46e5]" />
                  <h3 className="text-lg font-bold text-[#0f172a]">Key Industrial &amp; Metro Hubs We Serve</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {metros.map((metro) => (
                    <div key={metro.city} className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-2xs">
                      <p className="font-bold text-sm text-[#0f172a]">{metro.city}</p>
                      <p className="text-xs text-[#64748b] mt-1">{metro.focus}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                  <span>Headquartered in Udaipur, Rajasthan</span>
                  <span className="text-emerald-600 font-semibold">Active Clients Across India &amp; Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Services */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl font-extrabold text-[#0f172a]">Comprehensive Growth Stack</h2>
              <p className="mt-3 text-sm text-[#64748b]">
                Tailored solutions for Indian brands scaling nationally and internationally.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Custom Web Development",
                  desc: "React & Next.js web applications engineered for high performance, custom database integrations, and optimal conversion rates.",
                  href: "/services/web-development",
                },
                {
                  title: "National & Enterprise SEO",
                  desc: "Technical site architecture, entity optimization, and content authority strategies to rank for high-value commercial queries across India.",
                  href: "/services/seo",
                },
                {
                  title: "B2B Lead Generation",
                  desc: "Inbound search funnels and high-intent paid campaigns designed specifically for manufacturers, exporters, and industrial suppliers.",
                  href: "/b2b-lead-generation",
                },
                {
                  title: "International SEO",
                  desc: "Multi-language, multi-currency web architectures and hreflang tag implementation for Indian businesses selling to the US, UK, and UAE.",
                  href: "/international-seo",
                },
                {
                  title: "Google Ads Management",
                  desc: "Precision search and call-only campaigns with negative keyword sculpting and direct revenue tracking.",
                  href: "/services/google-ads",
                },
                {
                  title: "AI & WhatsApp Automations",
                  desc: "Automate inbound lead capture, CRM qualification, and instant quote delivery through official WhatsApp Business APIs.",
                  href: "/services/ai-automation",
                },
              ].map((service) => (
                <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#c7d2fe] transition-all flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0f172a] mb-2">{service.title}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  <Link href={service.href} className="text-xs font-bold text-[#4f46e5] inline-flex items-center gap-1 hover:underline">
                    Explore Capability <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-[#e2e8f0]">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a]">
              Ready to Expand Your Inbound Pipeline Across India?
            </h2>
            <p className="mt-4 text-base text-[#64748b] max-w-xl mx-auto">
              Get a manual, technical audit of your website speed, Google ranking opportunities, and conversion bottlenecks from founder Naveen Panchal.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Claim Free Growth Audit <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
