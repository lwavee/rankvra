import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Phone,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Ads & PPC Management Agency in Udaipur | RankVRA",
  description:
    "Generate qualified phone calls and direct inquiries with precision Google Ads. We manage search campaigns, call-only ads, and conversion tracking to maximize your ROAS.",
  alternates: { canonical: "https://rankvra.com/services/google-ads" },
};

export default function GoogleAdsServicePage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Target size={14} />
              Paid Search Advertising
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Google Ads That Deliver{" "}
              <span className="text-gradient">Ready-To-Buy Leads</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              When a buyer in your industry types a commercial search into Google, they are looking to take action today. We build tightly controlled Google Search campaigns that place your business in front of high-intent searchers and block irrelevant clicks.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Audit My Existing Google Ads
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20run%20Google%20Ads."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                Discuss Ad Budget
              </a>
            </div>
          </div>

          {/* Ad Features */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Negative Keyword Lists",
                desc: "We rigorously filter out job-seekers, free seekers, and irrelevant queries so your ad budget is never wasted on worthless clicks.",
              },
              {
                title: "Call-Only Ads",
                desc: "For urgent services, we launch ads designed to connect the prospect directly to your phone line with a single tap.",
              },
              {
                title: "Dedicated Landing Pages",
                desc: "Never send ad traffic to a generic homepage. We pair each ad group with a high-speed landing page that converts.",
              },
              {
                title: "Conversion Tracking",
                desc: "Full integration with Google Analytics 4, Google Tag Manager, and offline conversion tracking to track verified revenue.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc]">
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
