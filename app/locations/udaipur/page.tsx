import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development & Digital Marketing Agency in Udaipur | RankVRA",
  description:
    "RankVRA is your local growth partner in Udaipur, Rajasthan. We build custom 1-second Next.js websites and high-ROI Google & Meta ad campaigns for local businesses.",
  alternates: { canonical: "https://www.rankvra.com/locations/udaipur" },
};

export default function UdaipurLocationPage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <MapPin size={14} />
              Udaipur, Rajasthan (313001)
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Your Local Growth Partner in{" "}
              <span className="text-gradient">Udaipur, Rajasthan</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              Based right here in Udaipur and led by Founder Naveen Panchal (lw_avee), RankVRA provides businesses in the City of Lakes with modern full-stack web engineering, Google Page 1 SEO, and high-conversion ad management.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get Free Website &amp; SEO Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20a%20business%20in%20Udaipur%20and%20want%20to%20discuss%20growth."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Naveen (+91 7297875798)
              </a>
            </div>
          </div>

          {/* Localized Details */}
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Hospitality &amp; Heritage Stays</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                From boutique stays near Lake Pichola and Fateh Sagar to destination wedding venues, we drive direct customer bookings.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Marble &amp; Mining Hub</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                We help manufacturers in Sukher, Rajnagar, and Madri Industrial Area capture domestic wholesale and container export inquiries.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Healthcare &amp; Retail Brands</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                We position local clinics, showrooms, and retail stores at the top of Google Maps so neighborhood shoppers call first.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
