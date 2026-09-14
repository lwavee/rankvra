import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  HeartPulse,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare & Clinic Marketing in Udaipur & Rajasthan | RankVRA",
  description:
    "We help dental clinics, doctors, and healthcare centers in Udaipur rank #1 on Google Maps and attract qualified patients through ethical local SEO.",
  alternates: { canonical: "https://www.rankvra.com/industries/clinics" },
};

export default function ClinicsIndustryPage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <HeartPulse size={14} />
              Healthcare &amp; Medical Practices
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Attract More Patients With{" "}
              <span className="text-gradient">Local Google Maps SEO</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              When someone in Udaipur searches for &lsquo;best dental clinic in Udaipur&rsquo;, &lsquo;hair transplant specialist&rsquo;, or &lsquo;pediatrician near me&rsquo;, they need trustworthy care immediately. We build fast, ethical websites and local SEO that position your practice as the premier choice in Udaipur and across Rajasthan.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get Clinic SEO Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20run%20a%20clinic/hospital%20and%20need%20more%20patient%20appointments."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Our Team
              </a>
            </div>
          </div>

          {/* Healthcare Features */}
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Google Maps 3-Pack Rankings</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Dominate local searches across Udaipur neighborhoods (Panchwati, Hiran Magri, Fatehpura, Sukher) so nearby patients find and call your clinic first.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Doctor Credentials &amp; Trust</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Highlight physician qualifications, before/after case studies (where compliant), and clinic hygiene standards to build immediate patient confidence.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">WhatsApp Appointment Booking</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Make booking frictionless with one-tap WhatsApp appointment scheduling that instantly alerts your reception desk.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
