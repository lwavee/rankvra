import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 pb-20 lg:px-8 lg:pb-28">
      <div className="reveal relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] px-8 py-16 text-center sm:px-14 lg:py-20 text-white shadow-2xl border border-[#334155]">
        {/* Glow accents */}
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#4f46e5]/30 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-[#10b981]/20 blur-[80px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-200 backdrop-blur-xs">
            <Sparkles size={13} className="text-[#38bdf8]" />
            Free Manual Technical Audit
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Scale Your Inbound Pipeline with{" "}
            <span className="text-[#a5b4fc]">RankVRA</span>?
          </h2>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl mx-auto">
            Get a comprehensive speed, search ranking, and conversion audit from founder Naveen Panchal within 24 hours. Zero sales pitch, 100% actionable engineering value.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/free-growth-audit"
              className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all"
            >
              Get Free Growth Audit
              <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20request%20a%20website%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all"
            >
              <MessageCircle size={16} className="text-[#10b981]" />
              WhatsApp Naveen Direct
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              "100% Code Ownership",
              "Sub-1-Second Speed",
              "Direct Founder Led",
              "Zero Bloated Templates",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-medium text-slate-300 backdrop-blur-xs"
              >
                &bull; {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
