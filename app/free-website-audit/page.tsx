"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe2,
  Lock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function FreeWebsiteAuditPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    website: "",
    email: "",
    phone: "",
    mainChallenge: "Website Redesign & Modernization",
    notes: "",
    honeypot: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("last_audit_lead", JSON.stringify(formData));
      }

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.business,
          website: formData.website,
          email: formData.email,
          phone: formData.phone || "Not provided",
          primaryGoal: formData.mainChallenge,
          notes: formData.notes,
          honeypot: formData.honeypot,
          source: "free-website-audit",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        router.push("/thank-you");
      } else {
        setErrorMsg(data.error || "Unable to process request. Please message us directly on WhatsApp (+91 7297875798).");
        setLoading(false);
      }
    } catch {
      // Fallback redirect to thank you
      router.push("/thank-you");
    }
  };

  return (
    <SiteShell>
      <main className="min-h-screen bg-[#f8fafc] py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
            
            {/* Left Column: Context & What We Review */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">
                <Sparkles size={13} />
                <span>100% Free &bull; Manual Review &bull; No Sales Pitch</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
                Get a Free Website, SEO &amp;{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Conversion Audit.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We will review your website and identify technical, UX, SEO, and conversion opportunities. You will receive an actionable breakdown covering real code issues, mobile speed bottlenecks, and search gaps.
              </p>

              {/* What We Inspect */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                  What Founder Naveen Panchal Reviews:
                </h2>

                {[
                  {
                    title: "Core Web Vitals & Speed",
                    desc: "Real mobile LCP, layout shift (CLS), and JavaScript execution delays on cellular networks.",
                  },
                  {
                    title: "Google Crawlability & Indexing",
                    desc: "Checking robots.txt, canonical consistency, XML sitemaps, and Schema.org markup.",
                  },
                  {
                    title: "Mobile UX & Conversion Flow",
                    desc: "Form friction, CTA prominence, and navigation clarity that might be causing buyers to drop off.",
                  },
                  {
                    title: "Competitor Ranking Gaps",
                    desc: "Comparing your search positioning against active competitors targeting the same buyer intent.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Option */}
              <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-950">Prefer Instant Chat?</p>
                    <p className="text-[11px] text-emerald-800">Send your URL directly to Naveen on WhatsApp</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/917297875798?text=Hi%20Naveen,%20here%20is%20my%20website%20URL%20for%20a%20free%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 transition-colors shrink-0 ml-2"
                >
                  WhatsApp URL
                </a>
              </div>
            </div>

            {/* Right Column: Clean & High-Trust Audit Form */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-950">Submit Your Website for Review</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    No credit card required. We deliver your review within 24-48 business hours.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-xs text-rose-700 font-medium">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-all"
                    />
                  </div>

                  {/* Business / Company Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Business / Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Risk Advisors"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-all"
                    />
                  </div>

                  {/* Website URL */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Website URL <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://example.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone or WhatsApp Number <span className="text-slate-400 font-normal">(Optional for faster reply)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000 or +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-all"
                    />
                  </div>

                  {/* Main Challenge */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Primary Commercial Goal / Main Challenge
                    </label>
                    <select
                      value={formData.mainChallenge}
                      onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-all"
                    >
                      <option value="Website Redesign & Modernization">Website Redesign &amp; Modernization</option>
                      <option value="New High-Speed Web Application / Portal">New Web Application / Custom Portal</option>
                      <option value="Technical SEO & Core Web Vitals Optimization">Technical SEO &amp; Core Web Vitals Fixes</option>
                      <option value="International / Multi-Market Search Expansion">International / Multi-Market Expansion</option>
                      <option value="Commercial Inbound Lead Conversion Lift">Inbound Lead Conversion Optimization</option>
                      <option value="Insurance Web Design / Broker Submission Portal">Insurance Web Design / Broker Portal</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Any specific questions or competitors to inspect? <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about specific issues, page speed complaints, or goals..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-[#4f46e5] hover:bg-[#4338ca] text-white py-4 px-6 text-sm font-bold shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Analyzing Your Submission...</span>
                    ) : (
                      <>
                        <span>Submit for Free Website Audit</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-5 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Lock size={12} className="text-emerald-600" />
                    Strict Privacy Guaranteed
                  </span>
                  <span>&bull;</span>
                  <span>Zero Spam</span>
                  <span>&bull;</span>
                  <span>Direct Founder Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
