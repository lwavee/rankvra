import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Development Company in Udaipur & Rajasthan | RankVRA",
  description:
    "We build custom, lightning-fast Next.js and React websites that load under 1 second, pass Core Web Vitals, and turn Google traffic into paying clients.",
  alternates: { canonical: "https://www.rankvra.com/services/web-development" },
};

export default function WebDevelopmentServicePage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Code2 size={14} />
              Full-Stack Engineering
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Custom Web Development That{" "}
              <span className="text-gradient">Generates Customers</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              Slow websites kill conversions. If your website takes more than 3 seconds to load on a mobile phone, half of your potential clients click back to Google and call your competitor instead. At RankVRA, led by full-stack developer Naveen Panchal (lw_avee), we build clean, custom Next.js websites built for speed and sales.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get a Free Website Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20interested%20in%20custom%20web%20development."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Naveen
              </a>
            </div>
          </div>

          {/* Why Custom Next.js Beats WordPress */}
          <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
            <div className="p-8 rounded-[32px] bg-[#f8fafc] border border-[#e2e8f0]">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Why We Never Use Slow WordPress Page Builders
              </h2>
              <p className="text-sm text-[#64748b] leading-7 mb-6">
                Most agencies in Udaipur install a heavy, bloated pre-made WordPress theme with 40 random plugins. The result is a slow site that fails Google Core Web Vitals, gets penalized in search rankings, and frustrates visitors.
              </p>
              <div className="space-y-3">
                {[
                  "1-Second Load Times: Built with Next.js, React, and modern CSS architecture.",
                  "100% Responsive: Flawless layout on every screen from iPhone to 4K displays.",
                  "SEO-Engineered DOM: Clean HTML markup structured specifically for Googlebot crawlers.",
                  "Zero Plugin Vulnerabilities: Custom code eliminates security holes and frequent crashes.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-semibold text-[#0f172a]">
                    <CheckCircle2 size={18} className="text-[#4f46e5] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0f172a]">Who We Build For in Rajasthan:</h3>
              <div className="grid gap-3">
                {[
                  {
                    title: "Hotels & Heritage Resorts",
                    desc: "High-resolution photo galleries and direct booking forms that eliminate OTA fees.",
                  },
                  {
                    title: "Marble, Stone & Mineral Exporters",
                    desc: "Digital product catalogs and wholesale RFQ forms for domestic and global buyers.",
                  },
                  {
                    title: "Healthcare Clinics & Doctors",
                    desc: "Fast appointment booking and localized service pages that rank on Google.",
                  },
                  {
                    title: "E-Commerce Brands",
                    desc: "Seamless checkout with Razorpay/UPI integrations and automated WhatsApp order updates.",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[#c7d2fe] transition-all">
                    <p className="text-sm font-bold text-[#0f172a]">{item.title}</p>
                    <p className="text-xs text-[#64748b] mt-1 leading-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#4f46e5] to-[#4338ca] p-8 sm:p-12 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to build a website that actually brings customers?</h2>
            <p className="mt-3 text-sm sm:text-base text-indigo-100 max-w-xl mx-auto">
              Get a transparent quote and direct technical consultation with Naveen Panchal.
            </p>
            <Link
              href="/free-growth-audit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#4f46e5] hover:bg-slate-50 transition-all shadow-md"
            >
              Get Free Consultation &amp; Audit
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
