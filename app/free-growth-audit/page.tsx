"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function FreeGrowthAuditPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    company: "",
    primaryGoal: "National / Pan-India Inbound Lead Generation",
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
          ...formData,
          source: "free-growth-audit",
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
      // Still allow redirect if offline or push to thank you
      router.push("/thank-you");
    }
  };

  return (
    <SiteShell>
      <main className="bg-white py-5 sm:py-7 lg:py-9">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column — Value Proposition & Proof */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-3">
                <Sparkles size={13} />
                100% Free • Direct Founder Audit
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0f172a] tracking-tight leading-[1.18]">
                Get Your Free Website &amp;{" "}
                <span className="text-gradient">Growth Audit</span>.
              </h1>

              <p className="mt-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
                Send us your website URL and current commercial target. Our senior technical team, led by Founder Naveen Panchal (lw_avee), will manually analyze your website speed, search visibility, and conversion bottlenecks.
              </p>

              {/* What's Included */}
              <div className="mt-5 space-y-2.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#94a3b8]">
                  What You Receive Within 48 Hours:
                </p>
                {[
                  {
                    title: "Google Technical SEO & Indexing Check",
                    desc: "Find out why your pages aren't ranking on Google Page 1 or Google Maps for high-intent keywords.",
                  },
                  {
                    title: "Core Web Vitals & Speed Audit",
                    desc: "See how slow load times on mobile 4G/5G are driving potential customers straight to your competitors.",
                  },
                  {
                    title: "Competitor Keyword Gap Analysis",
                    desc: "Discover the exact commercial queries your local and regional competitors are winning right now.",
                  },
                  {
                    title: "Conversion Leak Identification",
                    desc: "Specific recommendations to increase calls, WhatsApp clicks, and booking forms on your current pages.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                    <CheckCircle2 size={16} className="text-[#4f46e5] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#0f172a]">{item.title}</p>
                      <p className="text-[11px] sm:text-xs text-[#64748b] mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-[#64748b]">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-[#4f46e5]" /> Delivered in 48 hrs
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock size={13} className="text-[#4f46e5]" /> 100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#4f46e5]" /> Zero hard sales
                </span>
              </div>
            </div>

            {/* Right Column — Frictionless Audit Form */}
            <div className="lg:col-span-6">
              <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-5 sm:p-7 shadow-lg shadow-[#4f46e5]/5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-black text-[#0f172a] tracking-tight">
                    Request Your Audit
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Queue Active
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#64748b]">
                  Fill out this brief form and we&apos;ll begin your review immediately.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-[#cbd5e1] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-hidden transition-all"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-2xl border border-[#cbd5e1] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-hidden transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-2xl border border-[#cbd5e1] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                        Website URL *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://yourwebsite.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full rounded-2xl border border-[#cbd5e1] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-hidden transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Industrial Solutions"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-2xl border border-[#cbd5e1] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                      Primary Growth Goal
                    </label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                      className="w-full rounded-2xl border border-[#cbd5e1] px-4 py-3 text-sm text-[#0f172a] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-hidden transition-all bg-white"
                    >
                      <option>National / Pan-India Inbound Lead Generation</option>
                      <option>International SEO &amp; Export Sales (US, UK, UAE)</option>
                      <option>Rank Page 1 on Google for High-Intent Commercial Keywords</option>
                      <option>Rebuild Slow / Legacy Website with High-Speed Next.js</option>
                      <option>Lower Paid Ad CAC &amp; Maximize ROAS (Google &amp; Meta)</option>
                      <option>Local &amp; Regional Google Maps 3-Pack Domination</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
                      Additional Notes or Biggest Frustration (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what hasn't worked in the past or what specific results you need..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-2xl border border-[#cbd5e1] px-4 py-3 text-sm text-[#0f172a] placeholder-[#94a3b8] focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/20 outline-hidden transition-all resize-none"
                    />
                  </div>

                  {/* Honeypot spam trap */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4f46e5] py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? "Processing Audit Request..." : "Get My Free Growth Audit"}
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-center text-xs text-[#94a3b8] mt-3">
                    Prefer immediate WhatsApp chat?{" "}
                    <a
                      href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20would%20like%20a%20free%20website%20growth%20audit."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4f46e5] font-semibold underline"
                    >
                      Click here to message Naveen (+91 7297875798)
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
