import { Bot, Globe, PanelsTopLeft, Sparkles, Target, Zap } from "lucide-react";
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
    title: "Custom Next.js Web Development",
    copy: "Sub-second page speeds, 100% custom code, and zero bloated templates. Engineered to convert traffic into clients.",
    icon: PanelsTopLeft,
    badge: "<0.8s LCP",
    href: "/services/web-development",
  },
  {
    title: "Google Maps & Local SEO",
    copy: "Secure top 3 Google 3-Pack rankings and Page 1 visibility. Drive direct phone calls and local walk-ins.",
    icon: Globe,
    badge: "Top 3 Maps",
    href: "/services/local-seo",
  },
  {
    title: "High-Intent Google Ads (PPC)",
    copy: "Tightly filtered search and call-only ads. Rigorous negative keywords eliminate wasted spend and maximize ROAS.",
    icon: Target,
    badge: "Ready-To-Buy",
    href: "/services/google-ads",
  },
  {
    title: "AI & WhatsApp Lead Automation",
    copy: "Instant 30-second inquiry response. Intelligent qualification bots and WhatsApp CRM alerts that capture leads 24/7.",
    icon: Bot,
    badge: "Instant 24/7",
    href: "/services/ai-automation",
  },
  {
    title: "B2B Manufacturing Lead Gen",
    copy: "Digital product catalogs, specification sheets, and verified wholesale RFQ funnels for industrial suppliers.",
    icon: Sparkles,
    badge: "Verified RFQs",
    href: "/b2b-lead-generation",
  },
  {
    title: "International SEO for Exporters",
    copy: "Multi-country hreflang architecture and CDN edge caching to rank in the USA, UK, UAE, and European markets.",
    icon: Zap,
    badge: "Global Trade",
    href: "/international-seo",
  },
];

export const steps = [
  {
    step: "01",
    title: "Technical Audit & Search Map",
    copy: "We audit your site speed, Google rankings, and the high-intent keywords your actual buyers search for.",
  },
  {
    step: "02",
    title: "Custom Build & Schema Engine",
    copy: "We build a lightning-fast web app with structured JSON-LD schemas and clear WhatsApp conversion funnels.",
  },
  {
    step: "03",
    title: "Launch, Scale & Capture Inquiries",
    copy: "We activate Google indexing and targeted ad funnels to generate direct phone calls, WhatsApp leads, and RFQs.",
  },
];

export const metrics = [
  { label: "Custom Architecture", value: "100%" },
  { label: "Mobile Page Load", value: "<1.0s" },
  { label: "Founder-Led Delivery", value: "Direct" },
  { label: "Technical Schema", value: "100%" },
];

export const comparison = [
  {
    feature: "Technology Stack",
    legacy: "Bloated WordPress & plugin-heavy templates (3-6s load)",
    rankvra: "Custom Next.js & React engineered for sub-second speeds",
  },
  {
    feature: "Primary Goal",
    legacy: "Fluffy vanity metrics (impressions, fake clicks)",
    rankvra: "Verified phone calls, booked appointments & WhatsApp RFQs",
  },
  {
    feature: "Team & Accountability",
    legacy: "Junior account managers & outsourced freelancers",
    rankvra: "Direct collaboration with Founder Naveen Panchal",
  },
  {
    feature: "Code & Asset Ownership",
    legacy: "Proprietary lock-ins & hostage recurring retainers",
    rankvra: "100% Client ownership of clean source code and assets",
  },
];

export const testimonials = [
  {
    quote:
      "Every web app we engineer is built on clean Next.js architecture with sub-second speeds, verified JSON-LD schema, and conversion funnels mapped to real commercial queries.",
    name: "Engineering Standard",
    role: "Core Technical Protocol",
    metric: "Sub-Second Speed",
  },
  {
    quote:
      "We operate with 100% transparency. Clients get direct founder collaboration, full source code ownership, and zero agency runaround.",
    name: "Founder Direct",
    role: "Led by Naveen Panchal",
    metric: "100% Code Ownership",
  },
  {
    quote:
      "Our SEO and paid campaigns focus exclusively on commercial outcomes: verified phone calls, booked appointments, and container-load RFQs.",
    name: "Commercial Focus",
    role: "Inbound Pipeline Growth",
    metric: "Outcome-Driven",
  },
];

export const faqs = [
  {
    q: "Who is RankVRA and where are you located?",
    a: "RankVRA is a web development and digital growth agency founded by Naveen Panchal (lw_avee), headquartered in Udaipur, Rajasthan 313001. We serve businesses locally in Udaipur, across Rajasthan and India, and internationally across the US, UK, and UAE.",
  },
  {
    q: "What makes RankVRA different from standard agencies?",
    a: "Standard agencies use slow WordPress templates and report vanity impressions. RankVRA takes a software-engineering approach: custom Next.js websites that load under 1 second, high-intent Google SEO, and direct WhatsApp/phone inquiry funnels.",
  },
  {
    q: "How soon can we launch and start capturing leads?",
    a: "Most custom web platforms and initial SEO/Ad frameworks are architected and deployed within 2 to 3 weeks, with direct founder communication throughout.",
  },
  {
    q: "How can I get started?",
    a: "Request a free website growth audit online or message founder Naveen Panchal directly on WhatsApp at +91 7297875798.",
  },
];

export const caseStudies = [
  {
    name: "Lakeview Heritage Resort",
    category: "Hospitality & Luxury Stays",
    result: "Boutique Udaipur resort shifted room inventory from 20% OTA commissions to direct WhatsApp & website reservations.",
    lift: "+41% Direct Bookings",
    slug: "lakeview-heritage-resort",
    tags: ["Next.js", "Local SEO", "WhatsApp Desk"],
  },
  {
    name: "Mewar Stone & Marble Exports",
    category: "Industrial B2B & Export",
    result: "Natural stone processor captured verified container-load export inquiries from US and UAE architects via international SEO.",
    lift: "19 Export RFQs",
    slug: "mewar-stone-marble-exports",
    tags: ["Technical SEO", "B2B Catalog", "Global Trade"],
  },
  {
    name: "Smile Care Dental Clinic",
    category: "Healthcare & Local SEO",
    result: "Multi-specialty dental practice achieved consistent Google 3-Pack placement across 5 Udaipur neighborhoods.",
    lift: "+125% Phone Inquiries",
    slug: "smile-care-dental",
    tags: ["Google 3-Pack", "Medical Schema", "Review Engine"],
  },
];

export const clients = [
  "Next.js 16",
  "Google Maps 3-Pack",
  "Technical SEO",
  "B2B Lead Funnels",
  "WhatsApp Cloud API",
  "Core Web Vitals Pass",
  "Google Ads ROAS",
  "TypeScript",
];
