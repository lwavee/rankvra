import { Bot, Code2, Globe, LayoutDashboard, MonitorSmartphone, PanelsTopLeft, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  copy: string;
  icon: LucideIcon;
  badge?: string;
  href: string;
};

export const services: Service[] = [
  {
    title: "Custom Web Development",
    copy: "Clean TypeScript, React, and Next.js architecture built for lightning speed, clean rendering, and zero template bloat.",
    icon: PanelsTopLeft,
    badge: "Next.js SSR",
    href: "/services/web-development",
  },
  {
    title: "Website Design & Redesign",
    copy: "Modern, high-trust digital storefronts that replace outdated websites and turn digital visitors into qualified inbound inquiries.",
    icon: MonitorSmartphone,
    badge: "High-Trust UX",
    href: "/services/website-design",
  },
  {
    title: "Custom Web Applications",
    copy: "Secure broker portals, operational dashboards, client areas, and internal workflow tools tailored to your exact business operations.",
    icon: LayoutDashboard,
    badge: "Portals & SaaS",
    href: "/services/web-application-development",
  },
  {
    title: "Technical & International SEO",
    copy: "Comprehensive crawlability, structured schema graphs, Core Web Vitals optimization, and multi-region search architecture.",
    icon: Globe,
    badge: "Global Organic",
    href: "/services/technical-seo",
  },
  {
    title: "Insurance Web Solutions",
    copy: "Specialized agency web design and wholesale underwriting portals engineered for commercial brokerages and risk managers.",
    icon: ShieldCheck,
    badge: "Industry Proven",
    href: "/industries/insurance",
  },
  {
    title: "Conversion Optimization & Funnels",
    copy: "Frictionless multi-step inquiry pathways, quote forms, and direct messaging workflows that maximize buyer conversions.",
    icon: Zap,
    badge: "Inbound Pipeline",
    href: "/services/conversion-optimization",
  },
];

export const steps = [
  {
    step: "01",
    title: "Discovery & Technical Audit",
    copy: "We inspect your digital architecture, page speeds, user experience friction, and commercial search positioning.",
  },
  {
    step: "02",
    title: "Custom Engineering & Schema",
    copy: "We engineer a lightweight web platform with structured JSON-LD schemas, accessible UX, and frictionless conversion pathways.",
  },
  {
    step: "03",
    title: "Launch & Commercial Growth",
    copy: "We deploy on modern global edge networks, activate search indexing, and stream qualified inbound inquiries to your sales desk.",
  },
];

export const metrics = [
  { label: "Engineering Stack", value: "Next.js & React" },
  { label: "Performance Focus", value: "Mobile-First" },
  { label: "Delivery Model", value: "Founder-Led" },
  { label: "Client Footprint", value: "Global Markets" },
];

export const comparison = [
  {
    feature: "Technology Stack",
    legacy: "Bloated WordPress & plugin-heavy templates prone to security issues and 4-6s load times",
    rankvra: "Modern Next.js, React, and clean TypeScript engineered for sub-second performance",
  },
  {
    feature: "Commercial Focus",
    legacy: "Superficial vanity impressions and generic social media graphics with zero ROI",
    rankvra: "Verified inbound phone inquiries, booked consultations, and commercial RFQs",
  },
  {
    feature: "Engineering Accountability",
    legacy: "Junior account runners and multiple outsourced layers causing communication gaps",
    rankvra: "Direct architectural collaboration with Founder Naveen Panchal and technical team",
  },
  {
    feature: "Code & Asset Ownership",
    legacy: "Proprietary page-builder lock-ins and ongoing hostage recurring platform fees",
    rankvra: "100% Client ownership of clean, maintainable source code and intellectual property",
  },
];

export const testimonials = [
  {
    quote:
      "Every web platform we build is engineered on modern Next.js architecture with clean typography, verified schema graphs, and inquiry pathways mapped to real buyer intent.",
    name: "Engineering Standard",
    role: "Technical Architecture Protocol",
    metric: "Sub-Second UX",
  },
  {
    quote:
      "We believe in complete transparency. Clients receive direct architectural communication, regular sprint progress, and 100% ownership of their codebase.",
    name: "Accountability",
    role: "Led by Naveen Panchal",
    metric: "Direct Collaboration",
  },
  {
    quote:
      "Our search and design work concentrates on real commercial results: corporate inquiries, appointment bookings, and institutional RFQs across target markets.",
    name: "Commercial Focus",
    role: "Inbound Pipeline Growth",
    metric: "Outcome-Driven",
  },
];

export const faqs = [
  {
    q: "Who is RankVRA and where are you based?",
    a: "RankVRA is an India-based web development, custom software, and digital growth company founded by Naveen Panchal. Headquartered in Udaipur, Rajasthan, we serve businesses nationally across India and internationally across the United States, United Kingdom, Canada, and other global markets.",
  },
  {
    q: "Do you work with international clients in the US, UK, and Canada?",
    a: "Yes. A substantial portion of our work involves international businesses. We maintain overlapping communication hours, structured project management in Slack and Notion, transparent GitHub version control, and seamless international payment processing.",
  },
  {
    q: "What makes RankVRA different from traditional agencies?",
    a: "Traditional agencies often rely on slow WordPress themes and report vanity metrics. RankVRA approaches digital growth from a software engineering perspective: custom Next.js web applications, sub-second mobile speeds, comprehensive technical SEO, and conversion funnels mapped to commercial intent.",
  },
  {
    q: "Can you redesign an existing website without losing SEO rankings?",
    a: "Absolutely. Website redesigns at RankVRA include comprehensive URL mapping, 301 redirect architecture, metadata preservation, and Core Web Vitals remediation to protect and improve organic search visibility.",
  },
  {
    q: "What industries do you have proven experience in?",
    a: "We have proven project experience in Commercial Insurance (agency websites & wholesale broker portals), B2B Industrial & Scientific Manufacturing, Professional Education, Healthcare Clinics, and SaaS/Web Applications.",
  },
  {
    q: "How can we get started on a project?",
    a: "You can request a Free Website Audit through our online form, schedule an architectural discovery call, or connect directly with Founder Naveen Panchal via WhatsApp at +91 7297875798.",
  },
];

export const caseStudies = [
  {
    name: "Capital & Co Insurance Services",
    category: "Commercial Insurance & Web Design",
    result: "High-trust digital storefront with specialized policy quote funnels and technical SEO for a forward-thinking insurance brokerage.",
    lift: "Modern Architecture",
    slug: "capital-co-insurance",
    tags: ["Next.js", "Insurance Web Design", "Lead Funnels", "USA Market"],
  },
  {
    name: "Sterling Wholesale Insurance Portal",
    category: "Wholesale Underwriting & Custom Web App",
    result: "High-volume broker submission portal featuring secure authentication, document management, and real-time underwriting workflows.",
    lift: "Broker Portal",
    slug: "sterling-insurance-portal",
    tags: ["Custom Web App", "Broker Auth", "Workflow Engine", "USA Market"],
  },
  {
    name: "Swastik Computer Education",
    category: "Education & Enrollment Engine",
    result: "Interactive course catalog, curriculum directory, and student admission inquiry pathways for a technical training institute.",
    lift: "Direct Admissions",
    slug: "swastik-computer-education",
    tags: ["Course Catalog", "Admissions Funnel", "Education Schema", "India Market"],
  },
  {
    name: "E-Biozone",
    category: "Biotechnology & Scientific B2B",
    result: "Technical laboratory equipment catalog with digital specification sheets and institutional Request for Quotation (RFQ) workflows.",
    lift: "Institutional RFQ",
    slug: "e-biozone",
    tags: ["B2B Catalog", "RFQ Engine", "Product Schema", "Global Trade"],
  },
];

export const clients = [
  "Next.js 16",
  "TypeScript",
  "React",
  "Technical SEO",
  "Tailwind CSS",
  "Core Web Vitals",
  "Custom Portals",
  "REST & Webhooks",
];
