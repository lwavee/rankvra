import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { ArrowRight, Compass, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="min-h-[70vh] flex items-center justify-center bg-white px-6 py-24">
        <div className="max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
            <Compass size={14} />
            Page Not Found (404)
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Looking for something specific?
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#64748b] leading-relaxed">
            The page you are looking for has either moved or no longer exists. Explore our core services or get in touch directly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
            >
              <Home size={16} />
              Return Home
            </Link>
            <Link
              href="/free-growth-audit"
              className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-7 py-3.5 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
            >
              Get Free Growth Audit
              <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/917297875798"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-7 py-3.5 text-sm font-semibold hover:bg-emerald-100 transition-all"
            >
              <Phone size={15} />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-[#e2e8f0] grid sm:grid-cols-3 gap-4 text-left">
            <Link
              href="/services/web-development"
              className="p-4 rounded-2xl border border-[#e2e8f0] hover:border-[#c7d2fe] hover:bg-[#f8fafc] transition-all"
            >
              <p className="text-sm font-bold text-[#0f172a]">Web Development</p>
              <p className="text-xs text-[#64748b] mt-1">High-speed custom Next.js builds</p>
            </Link>
            <Link
              href="/services/seo"
              className="p-4 rounded-2xl border border-[#e2e8f0] hover:border-[#c7d2fe] hover:bg-[#f8fafc] transition-all"
            >
              <p className="text-sm font-bold text-[#0f172a]">SEO & Local Search</p>
              <p className="text-xs text-[#64748b] mt-1">Google Maps & Page 1 rankings</p>
            </Link>
            <Link
              href="/services/google-ads"
              className="p-4 rounded-2xl border border-[#e2e8f0] hover:border-[#c7d2fe] hover:bg-[#f8fafc] transition-all"
            >
              <p className="text-sm font-bold text-[#0f172a]">Google Ads</p>
              <p className="text-xs text-[#64748b] mt-1">High-ROI lead generation</p>
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
