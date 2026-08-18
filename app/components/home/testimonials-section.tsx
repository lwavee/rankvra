"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/app/data/home";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const t = testimonials[index];

  return (
    <section className="bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div
          className="reveal relative overflow-hidden rounded-[32px] border border-[#e2e8f0] bg-white p-8 text-center shadow-sm sm:p-12 lg:p-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/4 h-60 w-60 rounded-full bg-[#eef2ff] blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-[#e0f2fe] blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4f46e5]">
              What clients say
            </p>

            <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center min-h-[200px] justify-center">
              <div className="mb-6 text-[#4f46e5]/20">
                <Quote size={44} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  {/* Metric chip */}
                  <span className="mb-5 inline-block rounded-full bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4f46e5] border border-[#e0e7ff]">
                    {t.metric}
                  </span>

                  <blockquote className="text-xl font-semibold tracking-tight text-[#0f172a] sm:text-2xl lg:text-3xl leading-[1.4]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 flex flex-col items-center gap-1">
                    <div className="text-base font-bold text-[#0f172a]">{t.name}</div>
                    <div className="text-sm text-[#64748b]">{t.role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot navigation */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-[#4f46e5]"
                      : "w-2 bg-[#e2e8f0] hover:bg-[#c7d2fe]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
