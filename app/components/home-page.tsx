"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

import { HeroSection } from "./home/hero-section";
import { SocialProofBar } from "./home/social-proof-bar";
import { ServicesSection } from "./home/services-section";
import { WhyRankvraSection } from "./home/why-rankvra-section";
import { ResultsSection } from "./home/results-section";
import { ProcessSection } from "./home/process-section";
import { TestimonialsSection } from "./home/testimonials-section";
import { LatestBlogsSection } from "./home/latest-blogs-section";
import { FAQSection } from "./home/faq-section";
import { CTASection } from "./home/cta-section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HomePage() {
  useEffect(() => {
    // Smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Hero copy animation
    gsap.fromTo(
      ".hero-copy",
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.1,
      }
    );

    // Scroll reveal animations
    const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
    reveals.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main id="top">
      <HeroSection />
      <SocialProofBar />
      <ServicesSection />
      <WhyRankvraSection />
      <ResultsSection />
      <ProcessSection />
      <TestimonialsSection />
      <LatestBlogsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
