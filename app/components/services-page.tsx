"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe,
  Megaphone,
  PanelsTopLeft,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Search Engine Optimisation (SEO)",
    tagline: "Own page one. Keep it.",
    color: "indigo",
    description:
      "We build technical SEO foundations and content architectures that compound month over month — turning your website into a high-intent traffic machine.",
    deliverables: [
      "Technical SEO audit & remediation",
      "Keyword research & content strategy",
      "On-page & schema optimisation",
      "Link building & authority growth",
      "Monthly performance reporting",
    ],
    result: "+146% organic traffic in 6 months",
  },
  {
    icon: Target,
    title: "Paid Advertising (PPC)",
    tagline: "Every rupee, maximised.",
    color: "cyan",
    description:
      "ROI-first Google, Meta, and LinkedIn campaigns built by strategists who treat your budget like their own — with ruthless optimisation and full funnel thinking.",
    deliverables: [
      "Google Search & Shopping campaigns",
      "Meta & Instagram ads",
      "LinkedIn B2B advertising",
      "Landing page strategy",
      "Weekly bid & creative optimisation",
    ],
    result: "6.2× ROAS for Luminary Skincare",
  },
  {
    icon: PanelsTopLeft,
    title: "Web Design & Development",
    tagline: "Built to convert, not just impress.",
    color: "violet",
    description:
      "Conversion-obsessed websites designed from first principles — fast, secure, and architected to guide every visitor toward becoming a customer.",
    deliverables: [
      "UX research & wireframing",
      "Custom design (no templates)",
      "Next.js / React development",
      "Performance optimisation (Core Web Vitals)",
      "CMS integration & ongoing support",
    ],
    result: "Sub-1.5s load times, guaranteed",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    tagline: "Authority, built in public.",
    color: "pink",
    description:
      "Strategic content systems and community management that build genuine brand authority — so your audience stays engaged and your competitors stay worried.",
    deliverables: [
      "Content strategy & calendar",
      "Short-form video & creative direction",
      "Community management",
      "Influencer identification & outreach",
      "Monthly analytics & reporting",
    ],
    result: "3× engagement rate improvement",
  },
  {
    icon: Sparkles,
    title: "Content Marketing",
    tagline: "Content that works while you sleep.",
    color: "amber",
    description:
      "Strategic content that ranks, educates, and converts — building long-term organic assets that fuel both SEO and your audience's trust in your brand.",
    deliverables: [
      "Content audit & gap analysis",
      "Blog & long-form writing",
      "Thought leadership articles",
      "Email nurture sequences",
      "Content distribution strategy",
    ],
    result: "+60 Page 1 rankings for Apex Tech",
  },
  {
    icon: BarChart3,
    title: "Conversion Rate Optimisation (CRO)",
    tagline: "More revenue. Same traffic.",
    color: "emerald",
    description:
      "Data-driven analysis of where your funnel leaks, followed by A/B testing, UX improvements, and copy refinement that squeezes maximum revenue from every visitor.",
    deliverables: [
      "Funnel audit & heatmap analysis",
      "A/B & multivariate testing",
      "Landing page optimisation",
      "Checkout & lead form improvements",
      "Conversion reporting & iteration",
    ],
    result: "Avg 34% lift in conversion rate",
  },
];

const colorMap: Record<string, string> = {
  indigo: "bg-[#eef2ff] text-[#4f46e5] border-[#e0e7ff]",
  cyan: "bg-[#ecfeff] text-[#0891b2] border-[#a5f3fc]",
  violet: "bg-[#f5f3ff] text-[#7c3aed] border-[#ddd6fe]",
  pink: "bg-[#fdf2f8] text-[#be185d] border-[#fbcfe8]",
  amber: "bg-[#fffbeb] text-[#b45309] border-[#fde68a]",
  emerald: "bg-[#ecfdf5] text-[#059669] border-[#a7f3d0]",
};
const iconBgMap: Record<string, string> = {
  indigo: "from-[#4f46e5] to-[#4338ca]",
  cyan: "from-[#0891b2] to-[#0e7490]",
  violet: "from-[#7c3aed] to-[#6d28d9]",
  pink: "from-[#db2777] to-[#be185d]",
  amber: "from-[#d97706] to-[#b45309]",
  emerald: "from-[#059669] to-[#047857]",
};

export function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#eef2ff] blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4f46e5]">
              Our Services
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-[#0f172a] sm:text-6xl leading-[1.05]">
              Everything you need to{" "}
              <span className="text-gradient">dominate</span> your market.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#475569] max-w-2xl">
              Six integrated services. One mission: turning your digital
              presence into a revenue-generating engine that compounds every
              single month.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#4f46e5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4338ca] hover:shadow-[#4f46e5]/30 hover:shadow-lg"
              >
                Get a custom proposal
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#services-list"
                className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-7 py-3.5 text-sm font-semibold text-[#475569] hover:border-[#c7d2fe] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all duration-300"
              >
                Browse services ↓
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section id="services-list" className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
                  className="rounded-[28px] border border-[#e2e8f0] bg-white p-8 shadow-sm lg:p-10"
                >
                  <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
                    <div>
                      {/* Icon + title */}
                      <div className="flex items-start gap-4 mb-5">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${iconBgMap[service.color]} shadow-md`}
                        >
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <p
                            className={`inline-block rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${colorMap[service.color]}`}
                          >
                            {service.tagline}
                          </p>
                          <h2 className="mt-2 text-2xl font-bold text-[#0f172a] sm:text-3xl">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base leading-8 text-[#475569] max-w-2xl">
                        {service.description}
                      </p>

                      {/* Deliverables */}
                      <div className="mt-6 grid gap-2 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-[#4f46e5] mt-0.5 shrink-0" />
                            <span className="text-sm text-[#475569]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Result callout */}
                    <div className="lg:w-56 shrink-0">
                      <div className="rounded-2xl border border-[#e0e7ff] bg-[#eef2ff] p-5 text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#4f46e5]">
                          Real result
                        </p>
                        <p className="mt-3 text-sm font-bold text-[#0f172a] leading-6">
                          {service.result}
                        </p>
                      </div>
                      <Link
                        href="/contact"
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm font-semibold text-[#4f46e5] shadow-sm hover:border-[#c7d2fe] hover:bg-[#eef2ff] transition-all duration-200"
                      >
                        Get started <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 py-12 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#4f46e5] via-[#4338ca] to-[#3730a3] px-8 py-14 text-center shadow-xl shadow-[#4f46e5]/20 lg:py-20">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-base text-indigo-100 max-w-xl mx-auto">
              Book a free strategy call. We&apos;ll audit your current setup
              and tell you exactly where your biggest opportunities are.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#4f46e5] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Book your free audit <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
