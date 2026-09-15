import { testimonials } from "@/app/data/home";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-3">
              <ShieldCheck size={13} />
              Our Guarantees
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Engineering Standards &amp;{" "}
              <span className="text-gradient">Client Commitments</span>.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748b]">
              We hold ourselves to transparent, verifiable benchmarks on every engagement.
            </p>
          </div>

          {/* 3-Column Commitment Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 shadow-xs hover:border-[#c7d2fe] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-[#eef2ff] border border-[#e0e7ff] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                      {t.metric}
                    </span>
                    <CheckCircle2 size={16} className="text-[#10b981]" />
                  </div>
                  <blockquote className="text-sm sm:text-base font-semibold text-[#0f172a] leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
                  <p className="text-xs font-bold text-[#0f172a]">{t.name}</p>
                  <p className="text-[11px] text-[#64748b]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
