"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/app/data/home";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="reveal rounded-[32px] border border-[#e2e8f0] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Left */}
          <div className="lg:max-w-xs lg:shrink-0">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4f46e5]">
              Common questions
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Everything you need to know.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#64748b]">
              Still have questions? Drop us a line at{" "}
              <a
                href="mailto:info@rankvra.com"
                className="text-[#4f46e5] hover:text-[#4338ca] transition-colors font-medium"
              >
                info@rankvra.com
              </a>{" "}
              and we&apos;ll reply within 24 hours.
            </p>
          </div>

          {/* Right — Accordion */}
          <div className="w-full space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.q}
                  className={`rounded-[18px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#c7d2fe] bg-[#eef2ff] shadow-sm"
                      : "border-[#e2e8f0] bg-white hover:border-[#c7d2fe]"
                  }`}
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isOpen ? "text-[#4f46e5]" : "text-[#0f172a]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#4f46e5] text-white"
                          : "bg-[#f1f5f9] text-[#4f46e5] border border-[#e2e8f0]"
                      }`}
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-0 text-sm leading-7 text-[#475569]">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
