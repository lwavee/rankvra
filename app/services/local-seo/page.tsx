import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Local SEO & Google Maps Agency in Udaipur | RankVRA",
  description:
    "Rank in the top 3 on Google Maps in Udaipur and across Rajasthan. We optimize your Google Business Profile to drive local customer phone calls and store visits.",
  alternates: { canonical: "https://rankvra.com/services/local-seo" },
};

export default function LocalSeoServicePage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <MapPin size={14} />
              Local Search &amp; Google 3-Pack
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Rank in the Top 3 on{" "}
              <span className="text-gradient">Google Maps in Udaipur</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              When a tourist or local resident searches &ldquo;best hotel near Lake Pichola&rdquo;, &ldquo;dental clinic in Udaipur&rdquo;, or &ldquo;interior designer in Udaipur&rdquo;, the top 3 Google Maps listings get 70% of all phone calls. We optimize your local presence so customers find you first.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get a Free Local SEO Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20rank%20my%20business%20on%20Google%20Maps%20in%20Udaipur."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Our Local Team
              </a>
            </div>
          </div>

          {/* Local SEO Strategy Grid */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Google Profile Optimization",
                desc: "Complete optimization of categories, services, products, geo-tagged photos, and attributes on your Google Business Profile.",
              },
              {
                title: "Local Citations & NAP",
                desc: "Consistent Name, Address, and Phone number citations across reputable Indian and regional business directories.",
              },
              {
                title: "Review Strategy",
                desc: "Ethical review acceleration workflows that encourage genuine customer reviews and boost local map algorithm trust.",
              },
              {
                title: "Geo-Targeted Landing Pages",
                desc: "Localized website pages with schema markup that confirm your physical service area to Google's ranking engine.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc] hover:border-[#c7d2fe] transition-all">
                <p className="text-base font-bold text-[#0f172a] mb-2">{item.title}</p>
                <p className="text-xs text-[#64748b] leading-5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
