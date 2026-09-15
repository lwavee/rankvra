import { comparison } from "@/app/data/home";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  X,
} from "lucide-react";
import Link from "next/link";

export function WhyRankvraSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="reveal grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:items-center">
        {/* Left — Crisp Value Proposition */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-4">
            <ShieldCheck size={14} />
            The RankVRA Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
            Stop Paying for Vanity Metrics.{" "}
            <span className="text-gradient">We Deliver Verified Inquiries</span>.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#475569]">
            Most digital agencies charge monthly retainers to post generic social graphics and report vague &ldquo;impressions&rdquo;. RankVRA engineers software-grade web platforms and search campaigns that deliver actual customer calls, booked appointments, and wholesale purchase orders.
          </p>

          <div className="mt-6 space-y-2.5">
            {[
              "Direct collaboration with Founder Naveen Panchal — no junior runarounds",
              "Sub-1-second mobile page loads guaranteed across 4G & 5G networks",
              "100% Source code, domain, and ad account ownership with zero lock-in",
            ].map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#10b981] mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-[#334155] font-medium">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/free-growth-audit"
              className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#1e293b] transition-all"
            >
              Get Free Performance Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right — Comparison Matrix */}
        <div className="rounded-3xl border border-[#e2e8f0] bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-4 mb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Capability</span>
            <div className="flex items-center gap-6 sm:gap-10 text-xs font-bold">
              <span className="text-[#94a3b8]">Legacy Agencies</span>
              <span className="text-[#4f46e5]">RankVRA Engine</span>
            </div>
          </div>

          <div className="space-y-4">
            {comparison.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#f1f5f9] bg-[#f8fafc] p-4 transition-all hover:border-[#c7d2fe] hover:bg-white"
              >
                <p className="text-xs font-bold text-[#0f172a] mb-2">{item.feature}</p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {/* Legacy side */}
                  <div className="flex items-start gap-2 rounded-xl bg-white sm:bg-transparent p-2.5 sm:p-0 border border-slate-200 sm:border-0 text-[#64748b]">
                    <X size={14} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{item.legacy}</span>
                  </div>
                  {/* RankVRA side */}
                  <div className="flex items-start gap-2 rounded-xl bg-[#f0fdf4] sm:bg-transparent p-2.5 sm:p-0 border border-[#bbf7d0] sm:border-0 text-[#0f172a] font-semibold">
                    <Check size={14} className="text-[#10b981] shrink-0 mt-0.5" />
                    <span>{item.rankvra}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
