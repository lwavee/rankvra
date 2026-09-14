"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  GraduationCap,
  Heart,
  Layers,
  Lightbulb,
  MapPin,
  Megaphone,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

// Custom SVG Icons for Social Media
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// CEO Details
const ceoProfile = {
  name: "Naveen Panchal",
  nickname: "lw_avee",
  brandHandle: "Learn with Avee 🚀",
  role: "Founder & Chief Executive Officer (CEO)",
  location: "Udaipur, Rajasthan, India",
  experience: "3+ Years of Hands-on Experience",
  photo: "/ceo-naveen.png",
  bio: "Full-stack web engineer, AI developer, performance digital marketer, and educator. Naveen founded RankVRA to deliver enterprise-grade web development, technical SEO, and ROI-driven marketing to ambitious brands across India (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Jaipur) and worldwide (United States, UK, UAE, and Europe). With an engineering-first philosophy, Naveen has guided businesses from local beginnings to multi-crore national and international digital sales funnels.",
  quote:
    "High-performance digital engineering shouldn't be confined to expensive metro agencies in Mumbai, Bangalore, or London. We build world-class web applications, technical SEO architectures, and automated B2B sales pipelines that compete and win in any market worldwide.",
  socials: [
    {
      name: "Instagram",
      handle: "@lw_avee",
      url: "https://www.instagram.com/lw_avee/?__pwa=1",
      icon: InstagramIcon,
      color: "from-[#f09433] via-[#e6683c] via-[#dc2743] to-[#bc1888]",
      hoverBg: "hover:border-pink-300 hover:text-pink-600",
      followers: "3.3K+ community",
    },
    {
      name: "YouTube",
      handle: "@Lw_avee",
      url: "https://www.youtube.com/@Lw_avee",
      icon: YouTubeIcon,
      color: "from-[#ff0000] to-[#cc0000]",
      hoverBg: "hover:border-red-300 hover:text-red-600",
      followers: "Tech & Coding Tutorials",
    },
    {
      name: "Facebook",
      handle: "lwavee",
      url: "https://www.facebook.com/lwavee?locale=hi_IN",
      icon: FacebookIcon,
      color: "from-[#1877f2] to-[#0d5ec4]",
      hoverBg: "hover:border-blue-300 hover:text-blue-600",
      followers: "Official Profile",
    },
    {
      name: "GitHub",
      handle: "lwavee",
      url: "https://github.com/lwavee",
      icon: GitHubIcon,
      color: "from-[#24292e] to-[#0f172a]",
      hoverBg: "hover:border-slate-400 hover:text-slate-900",
      followers: "Open Source Code",
    },
  ],
  pillars: [
    {
      icon: Code2,
      title: "Web Developer",
      desc: "Building clean, custom Next.js, React, and TypeScript websites that load in 1 second, rank on Google, and convert traffic into customers.",
      accent: "text-[#4f46e5] bg-[#eef2ff] border-[#e0e7ff]",
    },
    {
      icon: Brain,
      title: "AI Developer",
      desc: "Integrating ChatGPT, LLMs, smart WhatsApp bots, and automated CRM pipelines that help local businesses handle customer inquiries 24/7.",
      accent: "text-[#0891b2] bg-[#ecfeff] border-[#cffafe]",
    },
    {
      icon: Megaphone,
      title: "Digital Marketer",
      desc: "Running targeted Google Ads, Meta Ads, and Local SEO that rank businesses in Udaipur on Google Page 1 and generate verified customer leads.",
      accent: "text-[#7c3aed] bg-[#f5f3ff] border-[#ede9fe]",
    },
    {
      icon: GraduationCap,
      title: "Teacher & Mentor",
      desc: "Creator of 'Learn with Avee', having taught coding, web development, cybersecurity, and modern AI tools to thousands of students across India.",
      accent: "text-[#db2777] bg-[#fdf2f8] border-[#fce7f3]",
    },
  ],
  skills: [
    "Next.js & React",
    "Tailwind CSS",
    "Node.js & Python",
    "ChatGPT & AI Automations",
    "Google Maps Local SEO",
    "Meta & Google Ads",
    "WhatsApp CRM Funnels",
    "E-Commerce Development",
    "Cyber Security Basics",
    "Technical Consulting",
  ],
};

// Agency Core Pillars
const agencyPillars = [
  {
    icon: Code2,
    badge: "Udaipur & Rajasthan",
    title: "Best Web Development Agency in Udaipur",
    description:
      "We avoid generic WordPress page-builders that take 6 seconds to load. We write clean, custom Next.js code tailored to your business, whether you run a luxury resort near Lake Pichola, a marble factory in Rajsamand, or a boutique in Jaipur.",
    highlights: ["1-second mobile load time", "Clean code architecture", "100% mobile responsive", "Google Core Web Vitals passed"],
  },
  {
    icon: TrendingUp,
    badge: "Local Search Ranking",
    title: "Google Maps & Local SEO in Udaipur",
    description:
      "When someone in Udaipur searches 'best wedding planner in Udaipur' or 'marble exporter in Rajasthan', your business must show up in the top 3 on Google Maps. We optimize your local presence so customers call you first.",
    highlights: ["Google Business Profile setup", "Udaipur local citations", "Review generation strategy", "Page 1 search engine keywords"],
  },
  {
    icon: Target,
    badge: "Lead Generation",
    title: "Performance Digital Marketing (Meta & Google)",
    description:
      "No more boosting random Instagram posts for ₹500 with zero sales. We design laser-targeted ad campaigns on Google Search, Instagram, and Facebook that put your offer directly in front of ready-to-buy customers.",
    highlights: ["High-intent search campaigns", "Direct WhatsApp click-to-chat ads", "Remarketing to warm leads", "Clear cost-per-lead tracking"],
  },
  {
    icon: Bot,
    badge: "Modern Technology",
    title: "AI Workflows & WhatsApp Lead Automation",
    description:
      "Speed is everything in local sales. We integrate custom WhatsApp automation that instantly greets leads, shares your catalog or pricing, and notifies your sales team immediately on their phone.",
    highlights: ["Instant WhatsApp replies", "Automated lead capture", "CRM integration", "Zero missed customer calls"],
  },
];

// Values
const values = [
  {
    icon: Target,
    title: "Phone calls and sales first",
    copy: "We judge our success by one metric: did your business get more inquiries, direct calls, and paying customers? Vanity impressions don't pay bills.",
  },
  {
    icon: Cpu,
    title: "Clean engineering, zero bloat",
    copy: "Your website shouldn't freeze on a mobile connection. We write fast, modern code that gives your visitors a seamless, premium experience.",
  },
  {
    icon: ShieldCheck,
    title: "100% Transparency & ownership",
    copy: "You own your domain, your hosting, your code, and your ad accounts. We believe in earning your trust month after month, with no sneaky lock-ins.",
  },
  {
    icon: MapPin,
    title: "Rooted in Udaipur, serving Rajasthan",
    copy: "We understand the local economy, local buyer behavior, and the unique seasonal rhythms of businesses across Udaipur, Jaipur, Jodhpur, and Rajasthan.",
  },
  {
    icon: Lightbulb,
    title: "AI-powered efficiency",
    copy: "We use modern AI tools to streamline content and lead follow-ups, giving your business an unfair advantage over competitors using outdated methods.",
  },
  {
    icon: Heart,
    title: "Direct founder access",
    copy: "When you partner with Rankvra, you work directly with founder Naveen Panchal and our senior operators — not an untrained junior intern.",
  },
];

// Timeline Milestones
const milestones = [
  {
    year: "2022",
    title: "The Genesis: Learn with Avee (lw_avee)",
    event:
      "Naveen Panchal begins creating coding, web development, and tech tutorials under the moniker 'lw_avee', building an engaged community of over 3,300 followers on Instagram and launching active YouTube tutorials.",
  },
  {
    year: "2023",
    title: "Rankvra Founded in Udaipur",
    event:
      "Seeing local business owners in Udaipur and Rajasthan get frustrated by sub-par freelancers and slow templates, Naveen officially launches Rankvra as a dedicated web development and performance agency.",
  },
  {
    year: "2024",
    title: "AI & Local SEO Expansion Across Rajasthan",
    event:
      "Rankvra integrates custom AI workflows, WhatsApp automations, and local SEO services, scaling resorts, marble exporters, clinics, and e-commerce stores across Udaipur, Jaipur, and Bhilwara.",
  },
  {
    year: "2025+",
    title: "The Go-To Growth Partner in Rajasthan",
    event:
      "With 40+ brands scaled and a 96% client retention rate, Rankvra establishes itself as the premier web development and digital marketing agency in Udaipur and across Rajasthan.",
  },
];

// Stats
const stats = [
  { value: "3+ Yrs", label: "Real Experience" },
  { value: "40+", label: "Rajasthan Brands" },
  { value: "85+", label: "Page 1 Keywords" },
  { value: "96%", label: "Client Retention" },
];

export function AboutPage() {
  return (
    <main className="relative bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-[#e2e8f0]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#eef2ff] blur-[140px]" />
          <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#ecfeff] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-semibold text-[#4f46e5] w-fit mb-6 shadow-xs">
              <MapPin size={14} className="text-[#4f46e5]" />
              <span>Founded in Udaipur • Serving Businesses Across Rajasthan</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl leading-[1.15]">
              The Best Web Development &amp;{" "}
              <span className="text-gradient">Digital Marketing Agency</span>{" "}
              in Udaipur.
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-8 text-[#475569]">
              Rankvra was founded on a simple, honest premise: local business owners in Udaipur and Rajasthan deserve world-class websites that load in 1 second and digital marketing campaigns that actually produce paying customers.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-7 text-[#64748b]">
              Led by Founder &amp; CEO <strong>Naveen Panchal (lw_avee)</strong>, our in-house team combines modern Next.js coding, artificial intelligence automations, and local Google Page 1 SEO to help hotels, manufacturers, retailers, and service businesses thrive.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#ceo-spotlight"
                className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#4f46e5]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4338ca]"
              >
                Meet Naveen Panchal (CEO)
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/917297875798"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-7 py-3.5 text-sm font-semibold text-[#334155] transition-all duration-300 hover:border-[#4f46e5] hover:text-[#4f46e5] hover:bg-[#f8fafc]"
              >
                <Phone size={15} className="text-[#4f46e5]" />
                WhatsApp Us (+91 7297875798)
              </a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
            className="mt-12 lg:mt-0 lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-[26px] border border-[#e2e8f0] bg-white/80 p-6 backdrop-blur-sm shadow-xs hover:shadow-md hover:border-[#c7d2fe] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#4f46e5]/10 to-transparent rounded-bl-full pointer-events-none" />
                <p className="text-3xl sm:text-4xl font-black text-gradient">{stat.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#64748b]">
                  {stat.label}
                </p>
              </div>
            ))}
            <div className="col-span-2 rounded-[26px] border border-[#e0e7ff] bg-gradient-to-r from-[#eef2ff] via-[#f5f3ff] to-[#ecfeff] p-5 text-center">
              <p className="text-xs font-bold text-[#4f46e5] uppercase tracking-wider">
                Our Promise to Udaipur Businesses
              </p>
              <p className="mt-1 text-sm font-semibold text-[#0f172a]">
                Custom Code • No Slow WordPress • Real Phone &amp; WhatsApp Leads
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED CEO SPOTLIGHT SECTION */}
      <section id="ceo-spotlight" className="relative scroll-mt-20 py-20 lg:py-28 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] shadow-xs">
              <Users size={13} className="text-[#4f46e5]" />
              Leadership &amp; Founder
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
              Meet Our Founder &amp; CEO
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748b]">
              Full-stack software developer, AI engineer, growth marketer, and educator from Udaipur, Rajasthan.
            </p>
          </div>

          {/* Main CEO Card */}
          <div className="relative overflow-hidden rounded-[36px] border border-[#e2e8f0] bg-white shadow-xl shadow-[#4f46e5]/5">
            {/* Subtle Gradient Glow Backdrop */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-[#4f46e5]/10 via-[#0891b2]/5 to-transparent blur-3xl pointer-events-none" />

            <div className="p-8 sm:p-12 lg:p-14">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* CEO Profile Card (Left Column) */}
                <div className="lg:col-span-5 flex flex-col items-center text-center rounded-[30px] border border-[#e2e8f0] bg-gradient-to-b from-[#f8fafc] to-white p-8 shadow-sm">
                  {/* Avatar with Glow */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#4f46e5] via-[#0891b2] to-[#7c3aed] opacity-75 blur-sm animate-pulse" />
                    <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-xl bg-[#0f172a]">
                      <Image
                        src={ceoProfile.photo}
                        alt={ceoProfile.name}
                        width={176}
                        height={176}
                        className="h-full w-full object-cover"
                        priority
                      />
                    </div>
                    {/* Verified Badge */}
                    <div className="absolute bottom-2 right-2 flex items-center justify-center h-9 w-9 rounded-full bg-white border-2 border-white shadow-md text-[#0891b2]" title="Verified Founder">
                      <CheckCircle2 size={26} className="fill-[#0891b2] text-white" />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
                    {ceoProfile.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-bold text-[#4f46e5] border border-[#e0e7ff]">
                      {ceoProfile.brandHandle}
                    </span>
                    <span className="text-xs font-bold text-[#0891b2]">
                      ({ceoProfile.nickname})
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-[#0f172a]">
                    {ceoProfile.role}
                  </p>
                  <p className="text-xs font-semibold text-[#64748b]">
                    📍 {ceoProfile.location} • {ceoProfile.experience}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px w-full bg-[#e2e8f0]" />

                  {/* Social Profile Links */}
                  <div className="w-full space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] text-left px-1">
                      Connect with Naveen Online
                    </p>
                    {ceoProfile.socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-between rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm font-semibold text-[#0f172a] shadow-xs transition-all duration-200 hover:-translate-y-0.5 ${social.hoverBg} group`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${social.color} text-white shadow-xs`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <p className="text-xs font-bold leading-none group-hover:text-[#4f46e5] transition-colors">
                                {social.name}
                              </p>
                              <p className="text-[11px] text-[#64748b] leading-tight mt-0.5">
                                {social.handle}
                              </p>
                            </div>
                          </div>
                          <span className="text-[11px] font-medium text-[#64748b] bg-[#f1f5f9] px-2 py-0.5 rounded-full">
                            {social.followers}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* CEO Detailed Story & Expertise (Right Column) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#4f46e5] uppercase tracking-wider mb-2">
                    <Sparkles size={14} />
                    The Story Behind Rankvra
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                    From Tech Educator in Udaipur to Growth Agency Leader
                  </h3>

                  <p className="mt-4 text-base leading-7 text-[#475569]">
                    Known across social platforms as <strong>lw_avee</strong> (&ldquo;Learn with Avee 🚀&rdquo;), Naveen Panchal has spent over 3 years immersed in full-stack programming, artificial intelligence, and digital growth.
                  </p>

                  <p className="mt-3 text-base leading-7 text-[#64748b]">
                    Living in Udaipur, Naveen saw too many local business owners — from resorts and tour operators to marble exporters and healthcare clinics — get cheated by substandard agencies that delivered slow, crashing WordPress websites and ran clueless ads that wasted money.
                  </p>

                  <p className="mt-3 text-base leading-7 text-[#64748b]">
                    He founded Rankvra to fix this. With clean Next.js code, practical Google Maps Local SEO, and ROI-driven ad management, Naveen and his team have helped over 40 businesses across Udaipur and Rajasthan turn their digital presence into a profitable growth engine.
                  </p>

                  {/* 4 Specialized Core Pillars */}
                  <div className="mt-6 grid sm:grid-cols-2 gap-3.5">
                    {ceoProfile.pillars.map((pillar) => {
                      const Icon = pillar.icon;
                      return (
                        <div
                          key={pillar.title}
                          className="rounded-[20px] border border-[#e2e8f0] bg-[#f8fafc] p-4 transition-all hover:bg-white hover:border-[#c7d2fe] hover:shadow-xs"
                        >
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-lg border ${pillar.accent}`}>
                              <Icon size={16} />
                            </div>
                            <h4 className="text-sm font-bold text-[#0f172a]">{pillar.title}</h4>
                          </div>
                          <p className="text-xs leading-5 text-[#64748b]">{pillar.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quote Banner */}
                  <div className="mt-6 rounded-[22px] border border-[#e0e7ff] bg-gradient-to-r from-[#eef2ff] to-[#f5f3ff] p-5 relative">
                    <p className="text-xs sm:text-sm font-medium italic text-[#334155] leading-6">
                      &ldquo;{ceoProfile.quote}&rdquo;
                    </p>
                    <p className="mt-2 text-xs font-bold text-[#4f46e5]">
                      — Naveen Panchal (lw_avee), Founder &amp; CEO, Rankvra
                    </p>
                  </div>

                  {/* Tech & Skills Badges */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#475569] mr-1">Skills:</span>
                    {ceoProfile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1 text-[11px] font-semibold text-[#475569] shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & THE LOCAL ADVANTAGE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-4">
                <Compass size={13} className="text-[#4f46e5]" />
                Our Vision &amp; Origin
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
                We believe ambitious businesses deserve world-class technology.
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-8 text-[#475569]">
                RankVRA was founded on a simple principle: high-performance digital engineering shouldn&apos;t be confined to expensive legacy agencies in Mumbai, Bengaluru, or London.
              </p>
              <p className="mt-4 text-base leading-7 text-[#64748b]">
                Headquartered in Udaipur, Rajasthan, and serving brands nationally across India and internationally across the US, UK, and UAE, RankVRA engineers custom Next.js web applications, technical SEO systems, and B2B growth pipelines that deliver undeniable commercial results.
              </p>

              <div className="mt-8 space-y-3.5">
                {[
                  "No slow WordPress templates — custom Next.js web applications that load in under 1 second",
                  "Google Business Profile & Local Map Pack domination for high-intent search queries in Udaipur",
                  "Hyper-targeted ad campaigns on Google & Meta that prioritize verified calls & WhatsApp messages",
                  "Direct founder access with Naveen Panchal — clear answers, honest advice, zero corporate runaround",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#4f46e5] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-[#334155]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Comparison Card */}
            <div className="lg:col-span-6">
              <div className="rounded-[32px] border border-[#e2e8f0] bg-[#f8fafc] p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#0f172a] mb-6 text-center">
                  Typical Freelancers vs. The Rankvra Experience
                </h3>

                <div className="space-y-4">
                  {/* Traditional Agencies */}
                  <div className="rounded-2xl border border-red-100 bg-red-50/50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
                      Typical Freelancers &amp; Inexperienced Agencies
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Bloated WordPress themes with 40 plugins that crash and load slowly
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Boosting Instagram posts with no lead capture or conversion strategy
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        They stop picking up your phone calls after the final payment is cleared
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Zero understanding of Google Local Maps SEO or modern AI automations
                      </li>
                    </ul>
                  </div>

                  {/* The Rankvra Way */}
                  <div className="rounded-2xl border border-indigo-200 bg-white p-5 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2 flex items-center gap-2">
                      <Sparkles size={14} />
                      The Rankvra Standard in Udaipur
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#0f172a] font-medium">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#4f46e5]" />
                        Sub-second custom Next.js websites that pass Google Core Web Vitals
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#4f46e5]" />
                        Direct phone calls, WhatsApp leads, and verified booking inquiries
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#4f46e5]" />
                        Personalized support from Naveen Panchal (lw_avee) &amp; local team
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-[#4f46e5]" />
                        Transparent pricing in plain Hindi &amp; English with 100% asset ownership
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 4 AGENCY PILLARS */}
      <section className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] shadow-xs">
              <Layers size={13} className="text-[#4f46e5]" />
              Our Core Disciplines
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
              Web Development &amp; Digital Marketing Services in Udaipur
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748b]">
              Engineered specifically to help Udaipur and Rajasthan businesses generate customer inquiries and build long-term local authority.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {agencyPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-[30px] border border-[#e2e8f0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d2fe] hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] border border-[#e0e7ff] text-[#4f46e5]">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full bg-[#f1f5f9] px-3.5 py-1 text-xs font-bold text-[#475569]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f172a]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#64748b]">{pillar.description}</p>

                  <div className="mt-6 pt-5 border-t border-[#f1f5f9] grid grid-cols-2 gap-2">
                    {pillar.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#334155]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4f46e5]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CORE OPERATING PRINCIPLES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5]">
              <Target size={13} className="text-[#4f46e5]" />
              How We Work
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
              Principles We Stand By Every Day
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748b]">
              Honest, practical standards that guide every website we build and ad campaign we run in Rajasthan.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#c7d2fe] hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef2ff] text-[#4f46e5] border border-[#e0e7ff] mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#0f172a]">{val.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#64748b]">{val.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TIMELINE / OUR JOURNEY */}
      <section className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] shadow-xs">
              <Rocket size={13} className="text-[#4f46e5]" />
              The Journey
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
              3+ Years of Proven Track Record
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748b]">
              From educational tech tutorials as &apos;lw_avee&apos; to building Rajasthan&apos;s leading growth agency.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#4f46e5] via-[#0891b2] to-[#7c3aed] hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
                  {/* Year Marker */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4f46e5] text-white shadow-md shadow-[#4f46e5]/25 z-10">
                    <span className="text-xs font-black">{m.year}</span>
                  </div>

                  {/* Card Content */}
                  <div className="rounded-[26px] border border-[#e2e8f0] bg-white p-6 sm:p-7 shadow-sm flex-1 hover:border-[#c7d2fe] transition-colors">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                      {m.title}
                    </span>
                    <p className="mt-2 text-sm sm:text-base font-medium leading-7 text-[#334155]">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM STRATEGY CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#4f46e5] via-[#4338ca] to-[#312e81] p-10 sm:p-16 text-center text-white shadow-2xl shadow-[#4f46e5]/25">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#0891b2]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-200 backdrop-blur-md mb-6">
                <Zap size={13} className="text-indigo-200" />
                Udaipur &amp; Rajasthan Consultation
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Ready to rank your business on Google and get real leads?
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-8 text-indigo-100">
                Talk directly with Founder &amp; CEO Naveen Panchal. We&apos;ll review your current website, analyze your Google rankings in Udaipur, and share an honest roadmap to grow your inquiries.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/917297875798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#4f46e5] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-slate-50"
                >
                  Chat with Naveen on WhatsApp
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                >
                  Book a Strategy Call
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-indigo-200 font-medium">
                <span>✓ 100% Free Website &amp; SEO Audit</span>
                <span>✓ Direct CEO Consultation in Udaipur</span>
                <span>✓ Transparent Fixed Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
