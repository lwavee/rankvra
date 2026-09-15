import { steps } from "@/app/data/home";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

export function ProcessSection() {
  return (
    <section id="approach" className="bg-[#f8fafc] py-16 lg:py-24 border-y border-[#e2e8f0]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-3">
              <Sparkles size={13} />
              The 3-Step Execution System
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              A Clear Blueprint from{" "}
              <span className="text-gradient">Audit to Inbound Revenue</span>.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748b]">
              No guessing, no endless delays. Transparent engineering milestones delivered directly by Founder Naveen Panchal.
            </p>
          </div>

          {/* 3 Connected Steps Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="relative rounded-3xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f172a] text-xs font-black text-white shadow-xs">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#94a3b8]">
                      Phase {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    {step.copy}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex items-center gap-2 text-xs font-semibold text-[#10b981]">
                  <CheckCircle2 size={14} />
                  <span>Verified Deliverable</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-12 text-center">
            <Link
              href="/free-growth-audit"
              className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
            >
              Start Step 01: Claim Free Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
