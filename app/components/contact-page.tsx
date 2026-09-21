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
    phone: "",
    company: "",
    budget: "",
    message: "",
    service: "",
    honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          primaryGoal: formState.service ? `Service: ${formState.service} (Budget: ${formState.budget})` : "General Growth Inquiry",
          notes: formState.message,
          source: "contact-page",
          honeypot: formState.honeypot,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Unable to send message. Please reach us via WhatsApp or email directly.");
      }
    } catch {
      setErrorMsg("Network error. Please try messaging us on WhatsApp (+91 7297875798).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-gradient-to-bl from-indigo-500/10 via-sky-500/10 to-transparent blur-[80px]" />
          <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[75px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8 items-center">
            {/* Left Column — Concise High-Traction Copy */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 shadow-xs mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Direct Technical Discovery • Serving US, UK, Canada &amp; India</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-slate-950 leading-[1.16]">
                Direct Discovery.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600">
                  Speak With Founder Naveen.
                </span>
              </h1>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl font-normal">
                Book a direct technical strategy evaluation. We analyze your website speed, Google search visibility, and conversion bottlenecks with zero sales pressure.
              </p>

              {/* Quick Proof Counters */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-md">
                <div>
                  <div className="text-base sm:text-lg font-black text-slate-950">&lt; 15 mins</div>
                  <div className="text-[10px] font-semibold text-slate-500">WhatsApp Speed</div>
                </div>
                <div className="border-l border-slate-200/80 pl-3">
                  <div className="text-base sm:text-lg font-black text-indigo-700">Direct</div>
                  <div className="text-[10px] font-semibold text-slate-500">Founder Led</div>
                </div>
                <div className="border-l border-slate-200/80 pl-3">
                  <div className="text-base sm:text-lg font-black text-emerald-700">100% Free</div>
                  <div className="text-[10px] font-semibold text-slate-500">Technical Audit</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column — Live Founder Availability Desk Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-[22px] border border-slate-200/80 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5">
                {/* Header with Live Status */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200">
                      <Zap size={16} />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        Direct Founder Desk
                        <span className="text-[10px] text-indigo-600 font-mono">LIVE</span>
                      </h2>
                      <p className="text-[10px] text-slate-500">Naveen Panchal (lw_avee)</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Online &amp; Active
                  </span>
                </div>

                {/* Direct Action Box */}
                <a
                  href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20discuss%20a%20project%20with%20RankVRA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 transition-all hover:bg-emerald-50 mb-3 shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white font-bold shadow-xs">
                      <Phone size={15} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-emerald-800">Instant WhatsApp Chat</div>
                      <div className="text-xs sm:text-sm font-black text-slate-950">+91 7297875798</div>
                    </div>
                  </div>
                  <ArrowRight size={15} className="text-emerald-700 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Quick Info Grid */}
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 border border-slate-100">
                    <span className="text-slate-500">Direct Email</span>
                    <a href="mailto:info@rankvra.com" className="font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                      info@rankvra.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 border border-slate-100">
                    <span className="text-slate-500">Headquarters</span>
                    <span className="font-bold text-slate-900">Udaipur, Rajasthan 313001</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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

                  {/* Phone + Company row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#475569] mb-1.5"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 transition-all"
                      />
                    </div>
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
                      rows={4}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Share your current challenges, current website URL, or target keywords..."
                      className="w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:border-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/10 transition-all resize-none"
                    />
                  </div>

                  {/* Honeypot spam trap */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formState.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={loading}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4f46e5] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 transition-all duration-300 hover:bg-[#4338ca] hover:shadow-xl hover:shadow-[#4f46e5]/30 cursor-pointer disabled:opacity-50"
                  >
                    <Send size={15} />
                    {loading ? "Sending Details..." : "Submit"}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
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
                  { icon: BarChart3, value: "<1.0s", label: "Speed" },
                  { icon: Globe, value: "Direct", label: "Founder Led" },
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
