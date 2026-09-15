import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Globe,
  PanelsTopLeft,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#f8fafc] py-16 lg:py-24 border-y border-[#e2e8f0]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal">
          {/* Header with clear scannability */}
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-3">
              <Sparkles size={13} />
              Growth Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Software-Grade Engineering &amp;{" "}
              <span className="text-gradient">High-Intent Lead Funnels</span>.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748b]">
              Every solution is custom-coded for speed, search dominance, and direct business inquiries.
            </p>
          </div>

          {/* Bento Grid Layout for Ultra-Unique Visual Hierarchy */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 — Large Bento Card: Web Development */}
            <div className="sm:col-span-2 rounded-3xl border border-[#e2e8f0] bg-white p-7 sm:p-9 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#e0e7ff]/40 to-transparent rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] border border-[#e0e7ff]">
                    <PanelsTopLeft size={22} />
                  </div>
                  <span className="rounded-full bg-[#f0fdf4] border border-[#bbf7d0] px-3 py-1 text-xs font-bold text-[#166534]">
                    &lt; 0.8s Mobile LCP
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                  Custom Next.js &amp; React Web Development
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed max-w-xl">
                  We write clean, lightweight TypeScript code that passes Google Core Web Vitals with 100/100 scores. No slow WordPress plugins, zero bloated page builders, and direct conversion funnels.
                </p>

                {/* Micro Feature Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js 16 SSR", "TypeScript", "Core Web Vitals Pass", "100% Code Ownership"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1 text-xs font-medium text-[#475569]"
                      >
                        <CheckCircle2 size={13} className="text-[#10b981]" />
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#f1f5f9] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#64748b]">Engineered in Udaipur for Ambitious Brands</span>
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Explore Web Dev <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Feature 2: Local SEO & Google Maps */}
            <div className="rounded-3xl border border-[#e2e8f0] bg-white p-7 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0]">
                    <Globe size={22} />
                  </div>
                  <span className="rounded-full bg-[#eef2ff] border border-[#e0e7ff] px-2.5 py-0.5 text-[11px] font-bold text-[#4f46e5]">
                    Top 3 3-Pack
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a]">
                  Local SEO &amp; Google Maps 3-Pack
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Capture 70% of localized customer calls. We optimize Google Business Profiles, citations, and geo-targeted landing pages across Udaipur and Rajasthan.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <Link
                  href="/services/local-seo"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Explore Local SEO <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Feature 3: Google Ads (PPC) */}
            <div className="rounded-3xl border border-[#e2e8f0] bg-white p-7 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe]">
                    <Target size={22} />
                  </div>
                  <span className="rounded-full bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-0.5 text-[11px] font-bold text-[#334155]">
                    High ROAS
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a]">
                  Google Ads &amp; Paid Search Funnels
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Eliminate wasted ad spend with aggressive negative keyword filtering, call-only ads, and high-speed dedicated landing pages that convert clicks into leads.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <Link
                  href="/services/google-ads"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Explore Google Ads <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Feature 4: AI & WhatsApp Automation */}
            <div className="rounded-3xl border border-[#e2e8f0] bg-white p-7 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#faf5ff] text-[#9333ea] border border-[#e9d5ff]">
                    <Bot size={22} />
                  </div>
                  <span className="rounded-full bg-[#f0fdf4] border border-[#bbf7d0] px-2.5 py-0.5 text-[11px] font-bold text-[#16a34a]">
                    &lt; 30s Response
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a]">
                  AI &amp; WhatsApp Lead Automations
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Never miss an inquiry while sleeping. Custom WhatsApp Business bots that answer FAQs, qualify requirements, and push instant alerts to your phone.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <Link
                  href="/services/ai-automation"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Explore AI Bots <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Feature 5: B2B & Export Inbound */}
            <div className="rounded-3xl border border-[#e2e8f0] bg-white p-7 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa]">
                    <Zap size={22} />
                  </div>
                  <span className="rounded-full bg-[#eef2ff] border border-[#e0e7ff] px-2.5 py-0.5 text-[11px] font-bold text-[#4f46e5]">
                    Global RFQs
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a]">
                  B2B &amp; International Export SEO
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Rank on Google in the USA, UK, and UAE. Multi-language hreflang structures and digital specification catalogs for marble, stone, and manufacturing exporters.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <Link
                  href="/b2b-lead-generation"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Explore B2B Funnels <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
