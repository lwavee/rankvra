import { BarChart3, Globe, Megaphone, PanelsTopLeft, Sparkles, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  copy: string;
  icon: LucideIcon;
  badge?: string;
};

export const services: Service[] = [
  {
    title: "Search Engine Optimisation",
    copy: "Dominate search rankings with a technical and content strategy engineered for long-term compounding visibility.",
    icon: Globe,
    badge: "Most Popular",
  },
  {
    title: "Paid Advertising",
    copy: "ROI-first Google, Meta, and LinkedIn campaigns built to acquire customers at a cost that actually makes sense.",
    icon: Target,
  },
  {
    title: "Web Design & Development",
    copy: "Conversion-obsessed websites that move fast, look premium, and are built to turn visitors into revenue.",
    icon: PanelsTopLeft,
  },
  {
    title: "Social Media Marketing",
    copy: "Content systems and community management that build brand authority and keep your audience engaged.",
    icon: Megaphone,
  },
  {
    title: "Content Marketing",
    copy: "Strategic content that educates, attracts, and converts — fueling SEO while building lasting trust.",
    icon: Sparkles,
  },
  {
    title: "Conversion Rate Optimisation",
    copy: "Data-driven analysis of your funnel, A/B testing, and UX improvements that squeeze more revenue from existing traffic.",
    icon: BarChart3,
  },
];

export const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    copy: "We audit your brand, competitors, and market — then build a precision growth roadmap tailored to your specific goals and audience.",
  },
  {
    step: "02",
    title: "Design & Build",
    copy: "Our team crafts high-performance digital assets — websites, campaigns, and content — that reflect premium brand authority.",
  },
  {
    step: "03",
    title: "Launch & Optimise",
    copy: "We go live, monitor performance closely, and continuously iterate based on real data to maximize your ROI.",
  },
  {
    step: "04",
    title: "Scale & Grow",
    copy: "With a winning formula proven, we scale aggressively — expanding reach, compounding results, and accelerating revenue.",
  },
];

export const metrics = [
  { label: "Average increase in qualified leads", value: "+89%" },
  { label: "Client retention rate", value: "96%" },
  { label: "Average time to first results", value: "3 wks" },
  { label: "Brands scaled successfully", value: "40+" },
];

export const features = [
  {
    title: "No Vanity Metrics",
    copy: "Every strategy connects to commercial outcomes. We measure what grows your revenue, not what looks good on a dashboard.",
  },
  {
    title: "Built for ROI",
    copy: "We treat your ad spend like our own money — ruthlessly optimizing for the best possible return on every rupee.",
  },
  {
    title: "Premium Execution",
    copy: "From pixel-perfect design to razor-sharp copy — we set a standard that makes your brand feel category-defining.",
  },
  {
    title: "End-to-End Ownership",
    copy: "We handle strategy, execution, and reporting. You stay focused on your business while we build your pipeline.",
  },
];

export const testimonials = [
  {
    quote:
      "Rankvra completely transformed our online presence. Within 90 days our inbound leads tripled and our cost per acquisition dropped by 40%.",
    name: "Arjun Mehta",
    role: "Founder, Zenith Commerce",
    metric: "3× leads in 90 days",
  },
  {
    quote:
      "The team at Rankvra doesn't just run ads — they think like business partners. Our ROAS went from 1.8x to 6.2x in four months.",
    name: "Priya Sharma",
    role: "CMO, Luminary Skincare",
    metric: "6.2× ROAS achieved",
  },
  {
    quote:
      "Our website was ranking for nothing. Now we dominate Page 1 for 60+ keywords. The SEO strategy they built keeps compounding every month.",
    name: "Rohan Gupta",
    role: "CEO, Apex Tech Solutions",
    metric: "60+ Page 1 rankings",
  },
];

export const faqs = [
  {
    q: "How quickly will I see results?",
    a: "Paid campaigns typically show measurable results within 2–3 weeks. SEO begins showing traction in 6–10 weeks, with compounding growth thereafter. We set clear milestones from day one so you always know where you stand.",
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "We work with growth-stage startups and established businesses. Whether you're spending ₹50k/month or ₹10L/month on ads, our strategies are calibrated to your budget and growth ambition.",
  },
  {
    q: "How is Rankvra different from other agencies?",
    a: "Most agencies focus on activity (impressions, clicks, likes). We focus exclusively on commercial outcomes — leads, conversions, and revenue. Everything we build is designed to compound and scale.",
  },
  {
    q: "Will I get a dedicated account manager?",
    a: "Yes. Every client gets a dedicated growth strategist who acts as your single point of contact — no ticket systems, no juniors handling your account.",
  },
  {
    q: "What does the onboarding process look like?",
    a: "After our strategy call, we complete a deep-dive audit within 72 hours, present your growth roadmap, and typically launch within 10–14 business days.",
  },
  {
    q: "Do you offer performance-based pricing?",
    a: "We offer both retainer and performance-linked models depending on the engagement type. We'll recommend the model that aligns our incentives most tightly with your growth goals.",
  },
];

export const caseStudies = [
  {
    name: "Zenith Commerce",
    category: "E-commerce",
    result: "Scaled from ₹8L to ₹45L monthly revenue in 6 months through Google Shopping and Meta retargeting.",
    lift: "+462%",
  },
  {
    name: "Luminary Skincare",
    category: "D2C Beauty",
    result: "Rebuilt brand positioning and launched a performance funnel that took ROAS from 1.8× to 6.2× in 120 days.",
    lift: "6.2× ROAS",
  },
  {
    name: "Apex Tech Solutions",
    category: "B2B SaaS",
    result: "Built an SEO architecture that resulted in 60+ Page 1 rankings and doubled organic demo requests YoY.",
    lift: "2× demos",
  },
];

export const clients = [
  "Zenith Commerce",
  "Luminary Skincare",
  "Apex Tech Solutions",
  "Northfield Capital",
  "OrbitalHR",
  "Veda Wellness",
  "Crestline Group",
  "Primus Realty",
  "CloudStack India",
  "Nova Education",
];
