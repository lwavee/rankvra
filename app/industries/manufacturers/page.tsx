import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Factory,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Lead Generation for Manufacturers in Rajasthan & India | RankVRA",
  description:
    "Generate qualified wholesale inquiries and RFQs for your manufacturing business. We build digital spec catalogs and targeted B2B Google Ads that reach buyers.",
  alternates: { canonical: "https://rankvra.com/industries/manufacturers" },
};

export default function ManufacturersIndustryPage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Factory size={14} />
              Manufacturing &amp; Industrial B2B
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              B2B Lead Generation for{" "}
              <span className="text-gradient">Industrial Manufacturers</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              Industrial buyers don&apos;t make purchases on impulse. They look for detailed specifications, compliance certificates, and reliable production capacity. At RankVRA, we build modern B2B websites and Google Search campaigns that put your factory in front of commercial distributors, contractors, and procurement managers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get a Manufacturing SEO Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20a%20manufacturer%20and%20need%20more%20wholesale%20leads."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Our B2B Team
              </a>
            </div>
          </div>

          {/* Core Pillars for Manufacturers */}
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Technical Product Catalogs</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Fast, downloadable specification sheets and technical data tables that procurement officers and architects can quickly evaluate.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Commercial Intent Google Ads</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Target high-ticket search terms such as &lsquo;wholesale stone supplier in Rajasthan&rsquo; or &lsquo;industrial valve manufacturer in India&rsquo;.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Frictionless RFQ Funnels</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Simple Request-For-Quote forms that capture volume requirements, delivery locations, and instant WhatsApp alerts for your sales team.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
