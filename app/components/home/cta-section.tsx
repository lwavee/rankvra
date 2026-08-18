import { ArrowRight, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 pb-20 lg:px-8 lg:pb-28">
      <div className="reveal relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#4f46e5] via-[#4338ca] to-[#3730a3] px-8 py-16 text-center sm:px-12 lg:py-24 shadow-2xl shadow-[#4f46e5]/25">
        {/* BG elements */}
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-[#0891b2]/15 blur-[60px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10">
          {/* Urgency chip */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-100 backdrop-blur">
            <Clock size={12} className="text-[#06b6d4]" />
            Limited slots available this month
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to{" "}
            <span className="text-[#a5b4fc]">dominate</span>{" "}
            your market?
          </h2>

          <p className="mt-6 mx-auto max-w-xl text-base leading-8 text-indigo-100">
            We take on a select number of new partnerships each month. Every
            client gets our full focus — no agency handoffs, no watered-down
            strategy.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              id="cta-book-call"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-10 py-4 text-sm font-bold text-[#4f46e5] shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <Sparkles size={15} className="text-[#4f46e5]" />
              Book Your Free Strategy Call
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:info@rankvra.com"
              className="text-sm font-semibold text-indigo-200 hover:text-white transition-colors"
            >
              Or email us → info@rankvra.com
            </a>
          </div>

          {/* Trust pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["No contracts", "Results in 3 weeks", "96% client retention", "Dedicated strategist"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-indigo-100 backdrop-blur"
                >
                  ✓ {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
