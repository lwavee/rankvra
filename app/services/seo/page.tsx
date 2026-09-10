import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Phone,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Agency in Udaipur & Rajasthan | Search Engine Optimization | RankVRA",
  description:
    "Dominate Google Page 1 for high-intent search terms. RankVRA delivers technical SEO, topical authority, and organic conversion strategies for businesses in Rajasthan and India.",
  alternates: { canonical: "https://rankvra.com/services/seo" },
};

export default function SeoServicePage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Search size={14} />
              Organic Growth &amp; Search Authority
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              SEO That Puts You On{" "}
              <span className="text-gradient">Google Page 1</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              Ranking for vanity keywords that nobody searches for is pointless. At RankVRA, we identify the exact high-intent search queries your buyers type when they are ready to purchase — and engineer your website to rank at the very top.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get Free SEO Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20rank%20my%20website%20on%20Google."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                Discuss Your Keywords
              </a>
            </div>
          </div>

          {/* Pillars of SEO */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "1. Technical SEO Foundation",
                desc: "We fix crawl errors, canonical tags, schema markup, mobile indexing, and server response times so Google crawls your site without friction.",
              },
              {
                title: "2. Commercial Keyword Research",
                desc: "We focus on search terms with real buying intent — like 'marble exporter in Rajasthan' or 'luxury resort in Udaipur' — rather than broad, low-converting volume.",
              },
              {
                title: "3. Information Architecture & Content",
                desc: "We structure your website into topical clusters that demonstrate undeniable subject-matter authority to Google's ranking algorithms.",
              },
              {
                title: "4. On-Page & Schema Markup",
                desc: "Every heading, title tag, image alt text, and JSON-LD structured data block is optimized for maximum click-through rates.",
              },
              {
                title: "5. White-Hat Authority Building",
                desc: "We build genuine industry mentions and digital PR assets without using toxic link farms or dangerous private blog networks (PBNs).",
              },
              {
                title: "6. Conversion Rate Optimization",
                desc: "Ranking #1 is meaningless if visitors bounce. We optimize your forms and WhatsApp call-to-actions to turn search traffic into paid clients.",
              },
            ].map((item, i) => (
              <div key={i} className="p-7 rounded-[28px] border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#c7d2fe] hover:bg-white transition-all">
                <h3 className="text-base font-bold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Local vs Regional Context */}
          <div className="mt-20 rounded-[32px] border border-[#e2e8f0] bg-white p-8 sm:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
              Transparent SEO Timelines &amp; Expectations
            </h2>
            <p className="text-sm text-[#64748b] leading-7 max-w-3xl">
              Anyone promising &ldquo;#1 rank in 7 days&rdquo; is running spam tactics that will get your domain permanently blacklisted by Google. Real, sustainable SEO compounds over 60 to 90 days. We provide complete monthly tracking reports showing your exact ranking movements, organic clicks, and verified lead submissions.
            </p>
            <div className="mt-8">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#4338ca] transition-all"
              >
                Analyze Your Competitor Gaps
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
