import { Metadata } from "next";
import { ArrowRight, Code2, ExternalLink, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";

export const metadata: Metadata = {
  title: "Case Studies & Work Portfolio | RankVRA",
  description:
    "Explore outcome-driven case studies, client websites, search ranking systems, and technical open-source builds engineered by RankVRA.",
  alternates: { canonical: "https://www.rankvra.com/portfolio" },
};

export const revalidate = 3600;

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

const outcomeCaseStudies = [
  {
    slug: "lakeview-heritage-resort",
    category: "Websites & Direct Bookings",
    client: "Lakeview Heritage Resort",
    location: "Udaipur, Rajasthan",
    challenge: "High reliance on OTA booking portals charging 20% commission on every room night, paired with an old, slow WordPress website that took 5.2 seconds to load on mobile phones.",
    solution: "Architected a custom Next.js web application with sub-second mobile page loads, integrated high-resolution suite galleries, and built a 1-tap WhatsApp direct booking funnel.",
    outcome: "Reduced average mobile load time to 0.8 seconds and drove a massive lift in direct, commission-free reservations from domestic and NRI travelers.",
    tags: ["Custom Next.js", "Core Web Vitals", "WhatsApp Booking", "Hospitality SEO"],
  },
  {
    slug: "mewar-stone-marble-exports",
    category: "B2B Lead Generation & Local SEO",
    client: "Mewar Stone & Marble Exports",
    location: "Rajasthan & Global Export",
    challenge: "Website had zero ranking for wholesale commercial search terms, forcing the business to rely exclusively on costly third-party B2B trade directories.",
    solution: "Rebuilt technical product catalogs with detailed stone spec sheets and launched high-intent Google Search campaigns targeting architectural firms and wholesale stone importers.",
    outcome: "Generated steady monthly B2B container-load export inquiries directly to the sales team's WhatsApp and email without middleman commissions.",
    tags: ["B2B Search Ads", "Export SEO", "Technical Catalogs", "Lead Generation"],
  },
  {
    slug: "smile-care-dental",
    category: "Local SEO & Google Maps 3-Pack",
    client: "Smile Care Dental & Healthcare",
    location: "Udaipur, Rajasthan",
    challenge: "Clinic was invisible on Google Maps beyond a 500-meter radius, losing patient appointments to competitors located further away.",
    solution: "Executed comprehensive Google Business Profile optimization, local citations, geo-tagged clinical imagery, and patient appointment landing pages.",
    outcome: "Captured top 3 position on Google Maps across Udaipur neighborhoods for high-value treatments (dental implants and cosmetic dentistry).",
    tags: ["Google Maps SEO", "Healthcare Marketing", "Local Citations", "Review Funnels"],
  },
];

export default async function PortfolioPage() {
  let repos: Repo[] = [];
  try {
    const res = await fetch("https://api.github.com/users/lwavee/repos?sort=updated&per_page=9", {
      headers: { "User-Agent": "Rankvra-Portfolio-App" },
    });
    if (res.ok) {
      repos = await res.json();
    }
  } catch (error) {
    console.warn("GitHub fetch note:", error);
  }

  return (
    <SiteShell>
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Editorial & Performance Hero Section */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-[#f8fafc] via-white to-white pt-10 pb-14 sm:pt-14 sm:pb-16">
          {/* Subtle engineering grid background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {/* Soft ambient glow accents */}
          <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-[#4f46e5]/5 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-[#06b6d4]/5 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Narrative & Action */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c7d2fe] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold tracking-wide text-[#4f46e5] shadow-sm">
                  <Sparkles size={14} className="text-[#4f46e5]" />
                  <span>Verified Client Outcomes &amp; Engineering</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.12]">
                  Work Engineered for <span className="text-gradient">Measurable Growth</span>.
                </h1>

                <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                  We don&apos;t build generic brochure websites. We engineer high-speed Next.js web platforms, Google Maps 3-Pack rankings, and B2B inquiry funnels that generate verified revenue pipeline for ambitious brands.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/free-growth-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
                  >
                    Claim Free Growth Audit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20reviewed%20your%20case%20studies%20and%20would%20like%20to%20discuss%20our%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-7 py-3.5 text-sm font-bold text-[#334155] hover:bg-[#f8fafc] hover:border-[#c7d2fe] transition-all shadow-sm"
                  >
                    WhatsApp Founder (+91 7297875798)
                  </a>
                </div>

                {/* Proof Metrics Strip */}
                <div className="pt-5 border-t border-[#f1f5f9] grid grid-cols-3 gap-4 max-w-lg">
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-[#0f172a]">&lt; 0.8s</div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">Mobile LCP Speed</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-[#4f46e5]">Next.js</div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">Custom Architecture</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-[#0f172a]">100%</div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">Modern Code IP</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Telemetry / Result Benchmark Card */}
              <div className="lg:col-span-5">
                <div className="rounded-[28px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-7 text-white shadow-2xl border border-[#334155] relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-40 w-40 bg-[#4f46e5]/20 rounded-full blur-3xl pointer-events-none" />

                  {/* Header with live status badge */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/10">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[#818cf8]">
                        Production Benchmark
                      </div>
                      <div className="text-sm font-extrabold text-white mt-0.5">
                        Lakeview Heritage Resort
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-[11px] font-bold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Case Study
                    </span>
                  </div>

                  {/* Before vs After Metric Bars */}
                  <div className="my-5 space-y-3.5">
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1.5">
                        <span className="text-slate-400">Legacy WordPress Mobile LCP:</span>
                        <span className="text-rose-400 font-bold">5.2s (Failed Core Web Vitals)</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-rose-500 rounded-full w-[85%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1.5">
                        <span className="text-slate-300">RankVRA Next.js Engine:</span>
                        <span className="text-emerald-400 font-bold">0.8s (-84% Load Time)</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full w-[16%]" />
                      </div>
                    </div>
                  </div>

                  {/* Result Highlight Box */}
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4f46e5] text-white font-black text-xs flex-shrink-0">
                        ROI
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed">
                        <strong className="text-white">Commercial Result:</strong> Direct guest WhatsApp booking engine replaced 20% OTA commission dependency across peak tourist season.
                      </div>
                    </div>
                  </div>

                  {/* Footer Tag */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Target: Direct Inquiries &amp; Speed</span>
                    <span className="text-indigo-300 font-semibold">Udaipur, Rajasthan</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Client Case Studies Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#4f46e5]">
                  Client Case Studies
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
                  Real Challenges, Engineered Solutions
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:text-[#4338ca] hover:underline"
              >
                View Dedicated Case Studies Hub <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-8">
              {outcomeCaseStudies.map((study, idx) => (
                <div
                  key={idx}
                  className="rounded-[32px] border border-[#e2e8f0] bg-white p-8 sm:p-10 shadow-xs hover:border-[#c7d2fe] transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-[#f1f5f9]">
                    <div>
                      <span className="rounded-full bg-[#eef2ff] px-3.5 py-1 text-xs font-bold text-[#4f46e5]">
                        {study.category}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0f172a] mt-2">
                        {study.client}
                      </h3>
                      <p className="text-xs text-[#64748b] mt-0.5">📍 {study.location}</p>
                    </div>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:text-[#4338ca]"
                    >
                      Read Full Deep Dive
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-2xl bg-[#fff1f2] border border-[#ffe4e6]">
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
                        The Challenge
                      </p>
                      <p className="text-xs sm:text-sm text-[#475569] leading-6">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#eff6ff] border border-[#dbeafe]">
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                        The Strategy &amp; Solution
                      </p>
                      <p className="text-xs sm:text-sm text-[#475569] leading-6">
                        {study.solution}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#f0fdf4] border border-[#dcfce7]">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                        The Outcome
                      </p>
                      <p className="text-xs sm:text-sm text-[#475569] leading-6">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#f1f5f9]">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-[#f8fafc] border border-[#e2e8f0] px-3 py-1 text-[11px] font-semibold text-[#64748b]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiments & Technical Projects Section */}
        <section className="py-16 bg-white border-t border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-1 text-xs font-bold text-[#64748b] mb-3">
                <Code2 size={13} />
                Open Source &amp; R&amp;D
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
                Experiments &amp; Technical Builds
              </h2>
              <p className="mt-2 text-sm text-[#64748b] max-w-2xl">
                Open-source software, full-stack developer tools, and experimental prototypes developed by founder Naveen Panchal (lw_avee).
              </p>
            </div>

            {repos.length === 0 ? (
              <div className="text-center py-12 text-sm text-[#64748b]">
                Repositories available on GitHub:{" "}
                <a
                  href="https://github.com/lwavee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4f46e5] underline font-semibold"
                >
                  github.com/lwavee
                </a>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="flex flex-col justify-between rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-6 hover:border-[#c7d2fe] hover:bg-white transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-[#4f46e5] uppercase">
                          {repo.language || "Code Repository"}
                        </span>
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                            <Star size={13} className="fill-amber-400" />
                            <span>{repo.stargazers_count}</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-[#0f172a] mb-2">{repo.name}</h4>
                      <p className="text-xs text-[#64748b] line-clamp-3 leading-5">
                        {repo.description || "Experimental technical project by Naveen Panchal."}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                      <Link
                        href={`/portfolio/${repo.name}`}
                        className="text-xs font-bold text-[#4f46e5] hover:text-[#4338ca] inline-flex items-center gap-1"
                      >
                        Project Details <ArrowRight size={13} />
                      </Link>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#94a3b8] hover:text-[#0f172a] inline-flex items-center gap-1"
                      >
                        GitHub <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-16 text-center">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Discuss Your Custom Project With Naveen
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
