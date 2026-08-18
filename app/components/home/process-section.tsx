import { steps } from "@/app/data/home";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProcessSection() {
  return (
    <section id="approach" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        {/* Left — Why it works */}
        <div className="reveal relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#4f46e5] via-[#4338ca] to-[#3730a3] p-8 text-white shadow-xl shadow-[#4f46e5]/20 sm:p-10">
          {/* BG decoration */}
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-[#0891b2]/20 blur-2xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">
              Our process
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl leading-[1.2]">
              A growth engine, not a guessing game.
            </h2>
            <p className="mt-5 text-base leading-8 text-indigo-100">
              We don&apos;t improvise your growth. Every engagement follows a
              battle-tested system designed to reduce your risk and maximize
              your returns — from day one.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-indigo-100 backdrop-blur">
              <ArrowRight size={14} />
              Average results visible within 3 weeks
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#4f46e5] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Start Your Journey
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right — Steps */}
        <div className="reveal space-y-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="group flex gap-5 rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#c7d2fe] hover:shadow-md hover:shadow-[#4f46e5]/5"
            >
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef2ff] border border-[#e0e7ff] text-xs font-black text-[#4f46e5] group-hover:bg-[#4f46e5] group-hover:text-white group-hover:border-[#4f46e5] transition-all">
                  {step.step}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#64748b]">{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
