"use client";

import { clients } from "@/app/data/home";

const doubled = [...clients, ...clients];

export function SocialProofBar() {
  return (
    <section className="relative overflow-hidden border-y border-[#e2e8f0] bg-[#f8fafc] py-5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <div className="marquee-track flex items-center gap-12 whitespace-nowrap px-6">
          {doubled.map((client, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 text-sm font-semibold text-[#94a3b8]"
            >
              <span className="h-1 w-1 rounded-full bg-[#4f46e5]/30" />
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
