import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Hotel,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hotel & Resort Marketing Agency in Udaipur & Rajasthan | RankVRA",
  description:
    "We help hotels, heritage resorts, and luxury stays in Udaipur and Rajasthan increase direct website bookings, cut OTA commissions, and rank #1 on Google.",
  alternates: { canonical: "https://rankvra.com/industries/hotels" },
};

export default function HotelsIndustryPage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Hotel size={14} />
              Hospitality &amp; Luxury Stays
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Increase Direct Bookings &amp;{" "}
              <span className="text-gradient">Stop Losing 20% to OTAs</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              Booking portals and OTAs charge hotels and resorts in Udaipur anywhere from 18% to 25% commission on every room night. At RankVRA, we build custom high-speed websites, Google Maps dominance, and targeted Meta &amp; Google ad campaigns that get high-value guests booking directly with you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get Hotel Direct Booking Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20run%20a%20hotel/resort%20and%20want%20more%20direct%20bookings."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Our Hotel Strategist
              </a>
            </div>
          </div>

          {/* Core Hotel Strategy */}
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">High-Speed Photo Galleries</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Travelers book with their eyes. We build sub-second loading photo galleries that showcase your property, views, and suites without freezing on mobile phones.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Google Hotel SEO &amp; Maps</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Dominate Google Maps for &lsquo;luxury resort in Udaipur&rsquo;, &lsquo;heritage stay in Rajasthan&rsquo;, and wedding venue searches so guests see your direct website first.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">WhatsApp Direct Reservations</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Indian and NRI travelers love booking over WhatsApp. We build direct reservation chats that handle room inquiries and dates instantly with zero booking fees.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
