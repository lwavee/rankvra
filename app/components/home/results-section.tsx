import { caseStudies } from "@/app/data/home";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export function ResultsSection() {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="reveal">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-3">
              <TrendingUp size={13} />
              Documented Client Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
              Real Businesses. Real Systems.{" "}
              <span className="text-gradient">Measurable Outcomes</span>.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4f46e5] hover:underline shrink-0"
          >
            Explore All Case Studies <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4 Client Case Study Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((cs) => (
            <div
              key={cs.name}
              className="group relative flex flex-col justify-between rounded-3xl border border-[#e2e8f0] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d2fe] hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                    {cs.category}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] text-[#16a34a]">
                    <TrendingUp size={15} />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors line-clamp-2">
                  {cs.name}
                </h3>

                {/* Metric Badge */}
                <div className="mt-3 inline-block rounded-xl bg-gradient-to-r from-[#eef2ff] to-[#f8fafc] border border-[#e0e7ff] px-3 py-1">
                  <span className="text-xs font-black text-[#4f46e5] tracking-tight">{cs.lift}</span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-[#64748b] line-clamp-3">
                  {cs.result}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[#f1f5f9] px-2 py-0.5 text-[10px] font-medium text-[#475569]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f1f5f9]">
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors"
                >
                  Read Case Study <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
