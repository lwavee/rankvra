import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
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
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Software-Grade Engineering &amp;{" "}
              <span className="text-gradient">Search Growth Systems</span>.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748b]">
              Every solution is custom-coded for speed, search dominance, and qualified commercial client acquisition.
            </p>
          </div>

          {/* Bento Grid Layout */}
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
                    Next.js &amp; React SSR
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                  Custom Web Development &amp; Modern Applications
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed max-w-xl">
                  We write clean, lightweight TypeScript code engineered for rapid page loading and stable Core Web Vitals. Zero sluggish CMS plugins, no bloated drag-and-drop page builders, and focused inbound conversion funnels.
                </p>

                {/* Micro Feature Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js SSR & SSG", "TypeScript", "Core Web Vitals Pass", "100% Code Ownership"].map(
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
                <span className="text-xs font-semibold text-[#64748b]">Engineered in India for National &amp; Global Clients</span>
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Explore Web Development <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Feature 2: Website Design & Redesign */}
            <div className="rounded-3xl border border-[#e2e8f0] bg-white p-7 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0]">
                    <MonitorSmartphone size={22} />
                  </div>
                  <span className="rounded-full bg-[#eef2ff] border border-[#e0e7ff] px-2.5 py-0.5 text-[11px] font-bold text-[#4f46e5]">
                    Conversion First
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a]">
                  Website Design &amp; Redesign
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Transform slow, outdated corporate websites into clean, modern digital storefronts that command trust and drive qualified consultation requests.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <Link
                  href="/services/website-design"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Explore Website Design <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Feature 3: Custom Web Applications & Portals */}
            <div className="rounded-3xl border border-[#e2e8f0] bg-white p-7 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe]">
                    <LayoutDashboard size={22} />
                  </div>
                  <span className="rounded-full bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-0.5 text-[11px] font-bold text-[#334155]">
                    Portals &amp; Tools
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a]">
                  Custom Web Applications
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Secure broker portals, operational dashboards, client intake engines, and business automation systems tailored to your unique workflows.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <Link
                  href="/services/web-application-development"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Explore Web Apps <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Feature 4: Technical & International SEO */}
            <div className="rounded-3xl border border-[#e2e8f0] bg-white p-7 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#faf5ff] text-[#9333ea] border border-[#e9d5ff]">
                    <Globe size={22} />
                  </div>
                  <span className="rounded-full bg-[#f0fdf4] border border-[#bbf7d0] px-2.5 py-0.5 text-[11px] font-bold text-[#16a34a]">
                    Ethical White-Hat
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a]">
                  Technical &amp; International SEO
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Schema graph implementation, rendering optimizations, crawl budgeting, and multi-market search architecture for national and international organic rankings.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <Link
                  href="/services/technical-seo"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Explore Technical SEO <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Feature 5: Insurance & Vertical Solutions */}
            <div className="rounded-3xl border border-[#e2e8f0] bg-white p-7 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa]">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="rounded-full bg-[#eef2ff] border border-[#e0e7ff] px-2.5 py-0.5 text-[11px] font-bold text-[#4f46e5]">
                    Specialized
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0f172a]">
                  Insurance Technology Solutions
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Proven agency web design, quote funnels, and wholesale broker intake portals built on actual commercial project experience.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <Link
                  href="/industries/insurance"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:underline"
                >
                  Explore Insurance Solutions <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
