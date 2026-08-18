import { caseStudies } from "@/app/data/home";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export function ResultsSection() {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="reveal rounded-[32px] border border-[#e2e8f0] bg-[#f8fafc] p-6 sm:p-8 lg:p-10 shadow-sm">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4f46e5]">
              Selected outcomes
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl leading-[1.15]">
              The work compounds because{" "}
              <br className="hidden sm:block" />
              <span className="text-[#64748b] font-medium">
                the strategy is built to scale.
              </span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f46e5] hover:text-[#4338ca] transition-colors"
          >
            Start your chapter <ArrowRight size={14} />
          </Link>
        </div>

        {/* Case study cards */}
        <div className="grid gap-4 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <div
              key={cs.name}
              className="reveal group relative overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#c7d2fe] hover:-translate-y-1 hover:shadow-md"
            >
              <div className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#4338ca] shadow-md shadow-[#4f46e5]/20">
                <TrendingUp size={17} className="text-white" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
                {cs.category}
              </p>
              <p className="mt-2 text-xl font-bold text-[#0f172a]">{cs.name}</p>
              <p className="mt-1 text-3xl font-black text-gradient">{cs.lift}</p>
              <p className="mt-4 text-sm leading-7 text-[#64748b]">{cs.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
