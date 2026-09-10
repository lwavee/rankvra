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
    title: "Best Web Development Agency in Udaipur",
    copy: "We don't build clunky, slow WordPress templates. We develop lightning-fast, custom websites with Next.js and clean code that load under 1 second, pass Google Core Web Vitals, and turn local visitors into paying customers.",
    icon: PanelsTopLeft,
    badge: "Most Requested in Udaipur",
  },
  {
    title: "Local SEO & Google Page 1 Rankings",
    copy: "When people in Udaipur or tourists search for your service, does your business show up on Google Maps and Page 1? We optimize your Google Business Profile and website keywords so you rank above local competitors.",
    icon: Globe,
    badge: "High Organic ROI",
  },
  {
    title: "Best Digital Marketing Agency in Udaipur",
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
  { label: "Client Inquiries Increase", value: "+140%" },
  { label: "Google Page 1 Keywords", value: "85+" },
  { label: "Client Retention Rate", value: "96%" },
  { label: "Businesses Scaled in Rajasthan", value: "40+" },
];

export const features = [
  {
    title: "Handcrafted in Udaipur, Serving All Rajasthan",
    copy: "You work directly with founder Naveen Panchal (lw_avee) and our in-house team. No outsourced offshore freelancers and no disappearing acts after your website goes live.",
  },
  {
    title: "1-Second Load Speed (No Slow Templates)",
    copy: "Google penalizes slow websites. We write clean Next.js and modern code that loads instantly on mobile 4G/5G, keeping visitors from bouncing to competitors.",
  },
  {
    title: "Phone Calls & WhatsApp Inquiries First",
    copy: "We design every page around what matters to your business: customers picking up the phone, messaging you on WhatsApp, or visiting your local store in Udaipur.",
  },
  {
    title: "Complete Transparency & Honest Pricing",
    copy: "We explain everything in plain Hindi and English. You own 100% of your website, domain, and ad accounts. No hidden lock-ins or surprise fees.",
  },
];

export const testimonials = [
  {
    quote:
      "Before Rankvra, our resort was paying high commissions to booking portals. Naveen and his team rebuilt our website and ranked us on Google for Udaipur luxury stays. Direct website bookings jumped over 200% within 90 days.",
    name: "Vikramaditya Singh",
    role: "Owner, Lakeview Heritage Resort, Udaipur",
    metric: "+200% Direct Bookings",
  },
  {
    quote:
      "We were spending ₹40,000 monthly on Facebook ads with another agency and getting junk leads. Rankvra revamped our Google Ads and local SEO in Udaipur. Now our phone rings daily with genuine wholesale buyers.",
    name: "Manish Paliwal",
    role: "Director, Mewar Stone & Marble Exports, Udaipur",
    metric: "4.8× Qualified Leads",
  },
  {
    quote:
      "Best web development agency in Udaipur without a doubt. Fast delivery, beautiful design, and their SEO work got our clinic to #1 on Google Maps for dental implants in Udaipur. Highly recommended!",
    name: "Dr. Ananya Mehta",
    role: "Founder, Smile Care Dental Clinic, Udaipur",
    metric: "#1 on Google Maps",
  },
];

export const faqs = [
  {
    q: "Do you work with clients across India and internationally?",
    a: "Yes! While our engineering headquarters are in Udaipur, RankVRA operates nationally and internationally. We partner with B2B enterprises, industrial manufacturers, healthcare chains, and digital brands across Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, and Jaipur, as well as overseas clients in the United States, UK, UAE (Dubai), and Europe.",
  },
  {
    q: "How is RankVRA different from standard digital marketing agencies?",
    a: "Most agencies run vanity campaigns focused on 'impressions' and 'likes' using slow WordPress templates. RankVRA takes a software-engineering approach: we build custom Next.js web applications that load in under 1 second, build technical search architectures that rank for high-intent buyer queries, and track verified pipeline revenue and sales inquiries.",
  },
  {
    q: "How much does a custom high-performance website cost?",
    a: "Investments depend on your technical scope and business goals. High-converting custom corporate and lead-generation websites typically range from ₹25,000 to ₹65,000 ($350 - $900 USD), while scalable web applications and enterprise e-commerce platforms start from ₹60,000+ ($800+ USD). We provide clear, milestone-based quotes with 100% intellectual property ownership.",
  },
  {
    q: "How long does it take to rank on Google nationally or internationally?",
    a: "Initial crawl and index improvements often reflect within 3 to 6 weeks. For competitive national commercial keywords across India and international markets, organic dominance compounds over 3 to 6 months through rigorous technical SEO, programmatic page speed optimization, and topical authority clusters.",
  },
  {
    q: "How do you coordinate with clients in different time zones?",
    a: "We maintain streamlined asynchronous and direct communication via WhatsApp, Slack, Google Meet, and email. Our team regularly supports clients operating across IST (India), EST/PST (United States), GMT (United Kingdom), and GST (United Arab Emirates).",
  },
  {
    q: "Can you handle both web development and continuous growth marketing together?",
    a: "Yes, this full-stack integration is our core competitive edge. Because the same technical engineers build your web infrastructure and manage your conversion funnels, your landing pages load instantly and convert incoming traffic into paying customers at the highest possible rate.",
  },
];

export const caseStudies = [
  {
    name: "Lakeview Heritage Resort",
    category: "Hospitality & Tourism (Udaipur)",
    result: "Achieved Google Page 1 ranking for Udaipur luxury resort keywords, driving ₹32L+ in direct booking revenue.",
    lift: "+200% Bookings",
  },
  {
    name: "Mewar Stone & Marble",
    category: "B2B Manufacturing (Rajasthan)",
    result: "Engineered Google Search ads and international SEO funnel, generating 45+ B2B commercial export inquiries per month.",
    lift: "4.8× Leads",
  },
  {
    name: "Smile Care Dental Clinic",
    category: "Healthcare & Local Services (Udaipur)",
    result: "Optimized Google Business Profile and localized landing pages, capturing #1 spot on Google Maps for dental implants.",
    lift: "#1 Rank",
  },
];

export const clients = [
  "Lakeview Heritage Resort",
  "Mewar Stone & Marble",
  "Smile Care Dental Clinic",
  "Udaipur Royal Handicrafts",
  "Rajasthan Organic Goods",
  "Kalyan Textiles Bhilwara",
  "Zenith Commerce",
  "Apex Tech Solutions",
  "Northfield Capital",
  "Nova Education",
];
