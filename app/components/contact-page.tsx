"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Zap,
} from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

const benefits = [
  "Free 45-minute strategy session",
  "Full audit of your current marketing",
  "Competitor analysis included",
  "Clear growth roadmap delivered",
  "No hard sell, no obligation",
];

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "We respond to all enquiries within 4 business hours. Strategy calls are typically scheduled within 48 hours of initial contact.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "We work on flexible retainer models — no long lock-in contracts. Most clients choose 3-month engagements so we have enough runway to show meaningful results.",
  },
  {
    q: "What happens in the strategy call?",
    a: "We review your business, current marketing, competitors, and goals. You leave with a clear picture of your biggest opportunities — whether you work with us or not.",
  },
];

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production: send to API route or form service
    setSubmitted(true);
  };

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

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4f46e5]">
              Get in touch
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-[#0f172a] sm:text-6xl leading-[1.05]">
              Let&apos;s talk about{" "}
              <span className="text-gradient">your growth</span>.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#475569]">
              Book a free strategy call. We&apos;ll audit your current
              marketing, identify your biggest opportunities, and give you a
              clear roadmap — no obligation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-12">

            {/* Left — Form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[28px] border border-[#c7d2fe] bg-[#eef2ff] p-10 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#4338ca] shadow-md mb-5">
                    <CheckCircle2 size={28} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0f172a]">
                    We&apos;ve got your message!
                  </h2>
                  <p className="mt-3 text-base text-[#475569]">
                    Expect a reply within 4 business hours. We&apos;re looking
                    forward to learning about your business.
                  </p>
                  <p className="mt-5 text-sm font-semibold text-[#4f46e5]">
                    info@rankvra.com
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-[28px] border border-[#e2e8f0] bg-white p-7 shadow-sm space-y-5 lg:p-8"
                >
                  <h2 className="text-xl font-bold text-[#0f172a]">
                    Book a free strategy call
                  </h2>

                  {/* Name + Email row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#475569] mb-1.5"
                      >
                        Full name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Arjun Mehta"
                        className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#475569] mb-1.5"
                      >
                        Work email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="arjun@zenith.com"
                        className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-semibold text-[#475569] mb-1.5"
                    >
                      Company name
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Zenith Commerce Pvt. Ltd."
                      className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 transition-all"
                    />
                  </div>

                  {/* Service + Budget row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs font-semibold text-[#475569] mb-1.5"
                      >
                        Service interested in
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 transition-all appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="seo">SEO</option>
                        <option value="ppc">Paid Advertising</option>
                        <option value="web">Web Design & Development</option>
                        <option value="social">Social Media</option>
                        <option value="content">Content Marketing</option>
                        <option value="cro">CRO</option>
                        <option value="full">Full-Service Retainer</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="block text-xs font-semibold text-[#475569] mb-1.5"
                      >
                        Monthly budget range
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 transition-all appearance-none"
                      >
                        <option value="">Select budget...</option>
                        <option value="25k-50k">₹25k – ₹50k</option>
                        <option value="50k-1L">₹50k – ₹1L</option>
                        <option value="1L-3L">₹1L – ₹3L</option>
                        <option value="3L-5L">₹3L – ₹5L</option>
                        <option value="5L+">₹5L+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#475569] mb-1.5"
                    >
                      Tell us about your goals *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="We're looking to scale our e-commerce sales through paid ads and SEO. Currently getting X visitors a month but struggling to convert..."
                      className="w-full resize-none rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#4f46e5] py-4 text-sm font-bold text-white shadow-md shadow-[#4f46e5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4338ca] hover:shadow-[#4f46e5]/30 hover:shadow-lg"
                  >
                    <Send size={15} />
                    Send Message & Book a Call
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-xs text-[#94a3b8]">
                    We respond within 4 business hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>

            {/* Right — Info sidebar */}
            <div className="space-y-5">
              {/* What you get */}
              <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-[#0f172a] mb-4">
                  What you get on the call:
                </p>
                <div className="space-y-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#4f46e5] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#475569]">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-[24px] border border-[#e0e7ff] bg-[#eef2ff] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4f46e5]">
                    <Clock size={16} className="text-white" />
                  </div>
                  <p className="text-sm font-bold text-[#0f172a]">Fast response</p>
                </div>
                <p className="text-sm text-[#475569]">
                  We reply to every enquiry within{" "}
                  <strong className="text-[#0f172a]">4 business hours</strong>.
                  Strategy calls are typically scheduled within 48 hours.
                </p>
              </div>

              {/* Direct contacts */}
              <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm space-y-4">
                <p className="text-sm font-bold text-[#0f172a]">Prefer to reach out directly?</p>
                <div className="space-y-3">
                  <a
                    href="mailto:info@rankvra.com"
                    className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#4f46e5] transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1f5f9]">
                      <Mail size={14} className="text-[#4f46e5]" />
                    </div>
                    info@rankvra.com
                  </a>
                  <a
                    href="tel:+917297875798"
                    className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#4f46e5] transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1f5f9]">
                      <Phone size={14} className="text-[#4f46e5]" />
                    </div>
                    +91 7297875798
                  </a>
                  <a
                    href="https://wa.me/917297875798"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#4f46e5] transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1f5f9]">
                      <MessageSquare size={14} className="text-[#4f46e5]" />
                    </div>
                    WhatsApp us
                  </a>
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, value: "4hr", label: "Response" },
                  { icon: BarChart3, value: "40+", label: "Brands" },
                  { icon: Globe, value: "96%", label: "Retention" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-[18px] border border-[#e2e8f0] bg-white p-4 text-center shadow-sm"
                    >
                      <Icon size={17} className="mx-auto text-[#4f46e5] mb-2" />
                      <p className="text-lg font-black text-[#0f172a]">{stat.value}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#94a3b8]">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-12 pb-24 lg:px-8">
        <div className="rounded-[28px] border border-[#e2e8f0] bg-white p-7 shadow-sm lg:p-10">
          <h2 className="text-xl font-bold text-[#0f172a] mb-6">
            Quick answers
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[18px] border border-[#e2e8f0] bg-[#f8fafc] p-5">
                <p className="text-sm font-bold text-[#0f172a] mb-2">{faq.q}</p>
                <p className="text-sm leading-7 text-[#64748b]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
