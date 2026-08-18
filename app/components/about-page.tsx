"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Heart,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Revenue first, always",
    copy: "Every strategy, every campaign, every line of copy is built around one metric: does this grow our client's revenue? Impressions are irrelevant if they don't convert.",
  },
  {
    icon: Lightbulb,
    title: "Clarity over complexity",
    copy: "We explain everything in plain language. No jargon, no hiding behind reports. You'll always know exactly what we're doing, why, and what it's returning.",
  },
  {
    icon: ShieldCheck,
    title: "Radical ownership",
    copy: "We treat your business like our own. When something isn't working, we fix it immediately — no finger-pointing, no excuses, no waiting for the next monthly review.",
  },
  {
    icon: TrendingUp,
    title: "Compounding thinking",
    copy: "We don't chase short-term spikes. Every decision is made with long-term brand equity and compounding returns in mind — because that's how real businesses are built.",
  },
  {
    icon: Heart,
    title: "Genuine partnership",
    copy: "We're not vendors. We're partners. We show up invested in your success, we celebrate your wins, and we work harder when things get tough.",
  },
  {
    icon: Rocket,
    title: "Relentless execution",
    copy: "Great strategy means nothing without world-class execution. We move fast, iterate constantly, and never stop optimising until the numbers say we've won.",
  },
];

const milestones = [
  { year: "2019", event: "Rankvra founded with a simple belief: marketing should be measurable." },
  { year: "2020", event: "First 10 clients scaled past ₹1 Cr/month in revenue with our campaigns." },
  { year: "2021", event: "Expanded from PPC to full-service: SEO, web design, and content." },
  { year: "2022", event: "Crossed 25 active client partnerships. 96% retention rate achieved." },
  { year: "2023", event: "Launched CRO practice — adding an average 34% lift to client funnels." },
  { year: "2024", event: "40+ brands scaled. Named a top-tier performance agency in India." },
];

const team = [
  {
    name: "Aryan Kapoor",
    role: "Founder & Growth Strategist",
    bio: "Ex-agency head with 10+ years scaling brands through paid media and SEO. Obsessed with the intersection of data and creative.",
    initials: "AK",
    color: "from-[#4f46e5] to-[#4338ca]",
  },
  {
    name: "Neha Sharma",
    role: "Head of Performance Marketing",
    bio: "Certified Google & Meta partner with a track record of managing ₹50Cr+ in ad spend. If it can be optimised, she will.",
    initials: "NS",
    color: "from-[#0891b2] to-[#0e7490]",
  },
  {
    name: "Rohan Mehra",
    role: "Lead SEO & Content Strategist",
    bio: "Built content architectures that rank for 100+ competitive keywords. Believes SEO is 80% strategy and 20% execution.",
    initials: "RM",
    color: "from-[#7c3aed] to-[#6d28d9]",
  },
  {
    name: "Priya Iyer",
    role: "Creative Director & Web Designer",
    bio: "Crafts digital experiences that convert by combining behavioral psychology with pixel-perfect design. Figma to live in record time.",
    initials: "PI",
    color: "from-[#db2777] to-[#be185d]",
  },
];

const stats = [
  { value: "40+", label: "Brands scaled" },
  { value: "96%", label: "Client retention" },
  { value: "₹200Cr+", label: "Revenue generated for clients" },
  { value: "5 yrs", label: "Of compounding expertise" },
];

export function AboutPage() {
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
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#ecfeff] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4f46e5]">
              Our Story
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-[#0f172a] sm:text-6xl leading-[1.05]">
              We exist to make growth{" "}
              <span className="text-gradient">undeniable</span>.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#475569]">
              Rankvra was built on a frustration: too many businesses were
              paying agencies for activity instead of outcomes. We decided to
              do something different — build a firm where every decision is
              measured against one standard: does it drive real revenue?
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#4f46e5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4338ca]"
              >
                Work with us
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="mt-12 grid grid-cols-2 gap-4 lg:mt-0"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-[24px] border border-[#e2e8f0] bg-white p-6 text-center shadow-sm"
              >
                <p className="text-4xl font-black text-gradient">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4f46e5]">
              What drives us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Our values aren&apos;t on a wall. They&apos;re in our work.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
                  className="group rounded-[22px] border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d2fe] hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] border border-[#e0e7ff] group-hover:bg-[#4f46e5] group-hover:border-[#4f46e5] transition-all">
                    <Icon size={19} className="text-[#4f46e5] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#64748b]">{value.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4f46e5]">
            Our journey
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Five years of compounding results.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#4f46e5]/50 via-[#c7d2fe] to-transparent hidden sm:block" />

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.06 }}
                className="flex gap-6 sm:gap-10"
              >
                {/* Year bubble */}
                <div className="relative flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4f46e5] shadow-md shadow-[#4f46e5]/20 z-10 relative">
                    <span className="text-xs font-black text-white">{m.year.slice(2)}</span>
                  </div>
                </div>

                <div className="rounded-[20px] border border-[#e2e8f0] bg-white p-5 shadow-sm flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-1">{m.year}</p>
                  <p className="text-sm font-semibold text-[#0f172a] leading-6">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4f46e5]">
              The team
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Senior operators. Zero juniors on your account.
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-base text-[#475569]">
              Every client is handled directly by a specialist with years of
              proven experience — not handed off to a trainee.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.07 }}
                className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm text-center"
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.color} shadow-md`}
                >
                  <span className="text-lg font-black text-white">{member.initials}</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0f172a]">{member.name}</h3>
                <p className="text-xs font-semibold text-[#4f46e5] mt-0.5">{member.role}</p>
                <p className="mt-3 text-sm leading-7 text-[#64748b]">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Join CTA */}
          <div className="mt-10 rounded-[24px] border border-[#e0e7ff] bg-[#eef2ff] p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4f46e5]">
                <Users size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f172a]">We&apos;re growing</p>
                <p className="text-xs text-[#64748b]">Exceptional talent wanted. No mediocrity tolerated.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#4f46e5] px-5 py-2.5 text-sm font-semibold text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white transition-all duration-200 whitespace-nowrap"
            >
              View open roles <ArrowRight size={14} />
            </Link>
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
            <Zap size={32} className="mx-auto text-white/50 mb-4" />
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to work with a team that&apos;s fully invested in your growth?
            </h2>
            <p className="mt-4 text-base text-indigo-100 max-w-xl mx-auto">
              Let&apos;s talk about where you are, where you want to be, and
              how we can build a clear path between the two.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#4f46e5] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Book a strategy call <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
