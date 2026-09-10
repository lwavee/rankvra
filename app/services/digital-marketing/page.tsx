import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  Phone,
  Target,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Udaipur & Rajasthan | RankVRA",
  description:
    "We build performance-driven digital marketing campaigns across Google, Meta, and SEO that turn traffic into verified customer calls and WhatsApp inquiries.",
  alternates: { canonical: "https://rankvra.com/services/digital-marketing" },
};

export default function DigitalMarketingServicePage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Megaphone size={14} />
              Performance Marketing &amp; Growth
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Digital Marketing Engineered for{" "}
              <span className="text-gradient">Verified Inquiries</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              Tired of social media agencies that charge a monthly retainer just to post generic Canva quotes and report &ldquo;impressions&rdquo;? At RankVRA, every marketing campaign is linked directly to your commercial pipeline: phone inquiries, WhatsApp leads, and paying clients.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get a Marketing Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20grow%20my%20business%20through%20digital%20marketing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Naveen
              </a>
            </div>
          </div>

          {/* Strategy Blocks */}
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                <Target size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">High-Intent Google Ads</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Capture buyers actively searching for your service. We build search campaigns with aggressive negative keyword filters to eliminate wasted clicks.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                <BarChart3 size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Meta Ads &amp; Retargeting</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Run targeted Instagram and Facebook campaigns that guide prospects from initial awareness straight into a WhatsApp conversation with your sales team.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                <TrendingUp size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Conversion Funnels</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                We build dedicated, fast-loading landing pages designed exclusively for your ad traffic to ensure maximum conversion rates and lowest cost per lead.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
