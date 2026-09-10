import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Growth & Website Audit for Businesses | RankVRA",
  description:
    "Claim your free website and digital marketing audit from RankVRA. We review your speed, search rankings, and conversion leaks within 48 hours.",
};

export default function GrowthAuditLandingPage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Sparkles size={14} />
              Bespoke Business Review
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Why Most Websites Get Traffic{" "}
              <span className="text-gradient">Without Getting Inquiries</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              If someone sent you this link, it&apos;s because we looked at your website and noticed immediate, untapped opportunities to increase your direct customer calls, WhatsApp inquiries, and Google search visibility.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
              >
                Claim Your Free Growth Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20saw%20your%20message%20and%20would%20like%20to%20review%20my%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                Message Naveen on WhatsApp
              </a>
            </div>
          </div>

          {/* Value Breakdown */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl border border-[#e2e8f0] bg-[#f8fafc]">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#eef2ff] text-[#4f46e5] mb-4">
                <FileSearch size={20} />
              </div>
              <h3 className="text-base font-bold text-[#0f172a]">1. The Technical Audit</h3>
              <p className="mt-2 text-xs text-[#64748b] leading-5">
                We inspect your mobile load speed, indexing errors, and code architecture that might be suppressing your Google rank.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-[#e2e8f0] bg-[#f8fafc]">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#eef2ff] text-[#4f46e5] mb-4">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-base font-bold text-[#0f172a]">2. The Competitor Gap</h3>
              <p className="mt-2 text-xs text-[#64748b] leading-5">
                We identify the exact search terms your prospective buyers are searching that your competitors currently dominate.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-[#e2e8f0] bg-[#f8fafc]">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#eef2ff] text-[#4f46e5] mb-4">
                <Zap size={20} />
              </div>
              <h3 className="text-base font-bold text-[#0f172a]">3. The Conversion Fix</h3>
              <p className="mt-2 text-xs text-[#64748b] leading-5">
                We review your headline, value proposition, and CTA placement to remove friction that causes visitors to leave.
              </p>
            </div>
          </div>

          {/* Who We Help */}
          <div className="mt-16 rounded-[32px] border border-[#e2e8f0] bg-white p-8 sm:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0f172a] text-center mb-8">
              Who We Help Scale
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Hotels & Luxury Resorts",
                  desc: "Generate direct booking inquiries to bypass massive 18–25% OTA commission fees.",
                },
                {
                  title: "Manufacturers & B2B Exporters",
                  desc: "Capture high-value wholesale quotation requests across India, the US, UK, and Europe.",
                },
                {
                  title: "Clinics & Healthcare Specialists",
                  desc: "Dominate Google Maps local pack and attract qualified patient inquiries daily.",
                },
                {
                  title: "Professional Service Providers",
                  desc: "Turn passive search traffic into booked phone calls and direct WhatsApp consultations.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#f8fafc]">
                  <CheckCircle2 size={18} className="text-[#4f46e5] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">{item.title}</p>
                    <p className="text-xs text-[#64748b] mt-1 leading-5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-md shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Send Us Your Website For Review
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
