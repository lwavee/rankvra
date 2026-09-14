import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development & Digital Marketing Agency in Rajasthan | RankVRA",
  description:
    "Serving ambitious businesses across Jaipur, Jodhpur, Udaipur, Kota, and Bhilwara with high-speed custom web development, Google SEO, and paid ad management.",
  alternates: { canonical: "https://www.rankvra.com/locations/rajasthan" },
};

export default function RajasthanLocationPage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <MapPin size={14} />
              Serving All Across Rajasthan
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Web Development &amp;{" "}
              <span className="text-gradient">Digital Marketing in Rajasthan</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              Rajasthan&apos;s business landscape is expanding rapidly. From Jaipur&apos;s startup ecosystem and jewellery houses to Jodhpur&apos;s handicrafts, Bhilwara&apos;s textile mills, and Udaipur&apos;s world-famous luxury tourism — we provide enterprise-grade web development and ROI-focused digital growth across the entire state.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Request Free Website Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20a%20business%20in%20Rajasthan%20and%20want%20to%20scale."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Our Strategist
              </a>
            </div>
          </div>

          {/* Regional Hubs */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-base font-bold text-[#0f172a] mb-1">Jaipur Hub</h3>
              <p className="text-xs text-[#64748b] leading-5">
                E-commerce jewellery, fashion D2C brands, and modern software startups requiring high-speed Next.js platforms.
              </p>
            </div>

            <div className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-base font-bold text-[#0f172a] mb-1">Udaipur Hub (HQ)</h3>
              <p className="text-xs text-[#64748b] leading-5">
                Heritage luxury resorts, marble manufacturing, wedding planning, and healthcare local SEO domination.
              </p>
            </div>

            <div className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-base font-bold text-[#0f172a] mb-1">Jodhpur Hub</h3>
              <p className="text-xs text-[#64748b] leading-5">
                Wooden furniture manufacturers, sandstone exporters, and tourism businesses targeting global buyers.
              </p>
            </div>

            <div className="p-6 rounded-[24px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-base font-bold text-[#0f172a] mb-1">Bhilwara &amp; Kota</h3>
              <p className="text-xs text-[#64748b] leading-5">
                Textile manufacturing B2B catalogs, educational institutes, and coaching academies seeking qualified student admissions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
