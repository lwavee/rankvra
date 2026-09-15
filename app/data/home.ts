import { Bot, Globe, Megaphone, PanelsTopLeft, Sparkles, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  copy: string;
  icon: LucideIcon;
  badge?: string;
};

export const services: Service[] = [
  {
    title: "Custom Web Development & Next.js Engineering in Udaipur",
    copy: "We don't build clunky, slow WordPress templates. We develop lightning-fast, custom websites with Next.js and clean code that load under 1 second, pass Google Core Web Vitals, and turn local visitors into paying customers.",
    icon: PanelsTopLeft,
    badge: "Next.js & React",
  },
  {
    title: "Local SEO & Google Page 1 Rankings",
    copy: "When people in Udaipur or tourists search for your service, does your business show up on Google Maps and Page 1? We optimize your Google Business Profile and website keywords so you rank above local competitors.",
    icon: Globe,
    badge: "High Organic ROI",
  },
  {
    title: "Performance Digital Marketing & Google Ads in Udaipur",
    copy: "Stop burning money on useless Facebook 'Boost Post' buttons. We build targeted Meta and Google Ad funnels engineered to bring qualified inquiries, direct calls, and WhatsApp leads to your business every single day.",
    icon: Target,
    badge: "Lead Generation",
  },
  {
    title: "Social Media Marketing in Udaipur & Rajasthan",
    copy: "Build a brand that local customers recognize and trust. We create high-engagement Instagram reels, creative graphics, and active community campaigns tailored to the Rajasthani and national audience.",
    icon: Megaphone,
  },
  {
    title: "E-Commerce Website Development in Rajasthan",
    copy: "Sell your handicrafts, textiles, jewellery, or direct-to-consumer products across India and globally. Secure payment gateways (Razorpay, UPI), automated shipping integrations, and high-conversion checkouts.",
    icon: Sparkles,
  },
  {
    title: "AI Workflows & WhatsApp Lead Automation",
    copy: "Never miss a potential client while you sleep. Led by AI developer Naveen Panchal (lw_avee), we set up smart WhatsApp bots and CRM automations that instantly reply to inquiries and schedule appointments.",
    icon: Bot,
  },
];

export const steps = [
  {
    step: "01",
    title: "Local Market & Competitor Audit",
    copy: "We analyze your existing website, your Google rankings in Udaipur, your competitors, and the exact keywords your potential buyers in Rajasthan are typing into Google.",
  },
  {
    step: "02",
    title: "High-Speed Website & Funnel Build",
    copy: "Our development team designs a modern, mobile-friendly website tailored to your brand, complete with clear WhatsApp call-to-actions and conversion-focused copy.",
  },
  {
    step: "03",
    title: "Targeted Launch & Google Ranking",
    copy: "We launch your website, optimize your Google Maps Local Pack, and initiate hyper-targeted ad campaigns targeting high-intent buyers in Udaipur, Rajasthan, and nationwide.",
  },
  {
    step: "04",
    title: "Measure, Refine & Scale Revenue",
    copy: "Every month, you receive a straightforward report detailing phone calls, form submissions, and sales generated — with zero technical jargon or smoke and mirrors.",
  },
];

export const metrics = [
  { label: "Custom Next.js Engineering", value: "100%" },
  { label: "Target Load Speed", value: "<1.0s" },
  { label: "Direct Founder Architecture", value: "Direct" },
  { label: "Technical SEO Compliance", value: "100%" },
];

export const features = [
  {
    title: "Handcrafted in Udaipur, Serving Nationwide & Global Clients",
    copy: "You work directly with founder Naveen Panchal (lw_avee) and our technical team. No outsourced offshore freelancers and no disappearing acts after your website goes live.",
  },
  {
    title: "1-Second Load Speed (No Slow Templates)",
    copy: "Google penalizes slow websites. We write clean Next.js and modern code that loads instantly on mobile 4G/5G, keeping visitors from bouncing to competitors.",
  },
  {
    title: "Phone Calls & WhatsApp Inquiries First",
    copy: "We design every page around what matters to your business: customers picking up the phone, messaging you on WhatsApp, or requesting an audit.",
  },
  {
    title: "Complete Transparency & Direct Ownership",
    copy: "We explain everything clearly in plain Hindi and English. You own 100% of your website code, domain, and ad accounts. No hidden lock-ins or surprise fees.",
  },
];

export const testimonials = [
  {
    quote:
      "Every website we engineer is built on clean Next.js architecture with sub-second page speeds, technical SEO schema, and direct conversion funnels tailored to real commercial queries.",
    name: "Engineering-First Standard",
    role: "RankVRA Quality Protocol",
    metric: "Sub-Second Speed",
  },
  {
    quote:
      "We operate with complete transparency. Clients receive full source code ownership, clean DNS/hosting setups, and direct founder collaboration with zero outsourced runaround.",
    name: "Direct Client Collaboration",
    role: "Led by Founder Naveen Panchal",
    metric: "100% Code Ownership",
  },
  {
    quote:
      "Our search engine optimization and digital campaigns focus strictly on business outcomes: qualified phone inquiries, WhatsApp leads, and high-intent commercial keyword rankings.",
    name: "Commercial Strategy",
    role: "Outcome-Driven Focus",
    metric: "High-Intent SEO",
  },
];

export const faqs = [
  {
    q: "Who is RankVRA and where is it located?",
    a: "RankVRA is a web development, SEO, and digital growth agency founded by Naveen Panchal. Our engineering headquarters are located in Udaipur, Rajasthan 313001, India. We partner with ambitious businesses locally in Udaipur, across Rajasthan and India, and internationally across the US, UK, and UAE.",
  },
  {
    q: "Who founded RankVRA?",
    a: "RankVRA was founded by Naveen Panchal (known online as lw_avee), a full-stack engineer and technical digital marketer based in Udaipur, Rajasthan. Naveen personally architects the web platforms and search strategies for all RankVRA clients.",
  },
  {
    q: "What core services does RankVRA provide?",
    a: "RankVRA provides custom web development (Next.js, TypeScript, modern React), technical Google SEO, local SEO and Google Business Profile optimization, Google Ads PPC campaigns, and AI/WhatsApp lead automation funnels.",
  },
  {
    q: "How can businesses contact RankVRA?",
    a: "You can reach Founder Naveen Panchal directly via phone or WhatsApp at +91 7297875798, email us at info@rankvra.com, or request a free review of your current website at https://www.rankvra.com/free-growth-audit.",
  },
  {
    q: "How is RankVRA different from standard digital marketing agencies?",
    a: "Most agencies run vanity campaigns using slow, clunky WordPress templates. RankVRA takes a software-engineering approach: we build custom Next.js web applications that load in under 1 second, build technical search architectures that rank for high-intent buyer queries, and track verified pipeline revenue and sales inquiries.",
  },
  {
    q: "How do you coordinate with clients in different locations or time zones?",
    a: "We maintain streamlined direct communication via WhatsApp, Google Meet, email, and phone. Our team regularly coordinates with clients across IST (India), EST/PST (United States), GMT (United Kingdom), and GST (United Arab Emirates).",
  },
];

export const caseStudies = [
  {
    name: "AMS 360 Agency Management System",
    category: "Enterprise Cloud Application",
    result: "Automated insurance brokerage management with unified client profiles, policy lifecycles, and sub-second Next.js dashboards.",
    lift: "Enterprise Cloud",
  },
  {
    name: "Sarala AI Platform",
    category: "AI & Operational Automation",
    result: "Built real-time conversational AI and smart automation workflows for business intelligence and instant query resolution.",
    lift: "AI Workflow",
  },
  {
    name: "Client Acquisition CRM Engine",
    category: "Sales Automation & Funnels",
    result: "Architected high-performance lead pipeline management with automated follow-ups and client activity history.",
    lift: "CRM Engine",
  },
];

export const clients = [
  "Next.js Engineering",
  "Technical SEO",
  "Google Maps 3-Pack",
  "Core Web Vitals",
  "B2B Lead Generation",
  "Google Ads PPC",
  "WhatsApp Lead Automation",
  "Conversion Rate Optimization",
];
