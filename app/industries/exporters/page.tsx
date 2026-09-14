import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Globe2,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "International SEO & Digital Marketing for Exporters | RankVRA",
  description:
    "Help your stone, marble, handicraft, or textile export business rank on Google in the USA, UK, UAE, and Europe to attract high-value international buyers.",
  alternates: { canonical: "https://www.rankvra.com/industries/exporters" },
};

export default function ExportersIndustryPage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Globe2 size={14} />
              Global Trade &amp; Export
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              International SEO For{" "}
              <span className="text-gradient">Indian Exporters</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              Whether you export green marble from Udaipur, sandstone from Jodhpur, textiles from Bhilwara, or handcrafted goods to the US, UK, and UAE, international buyers rely on Google search to vet trustworthy overseas suppliers. We optimize your website to rank globally and generate container-load inquiries.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get an Export Website Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20an%20exporter%20seeking%20international%20buyers."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Global Trade Desk
              </a>
            </div>
          </div>

          {/* Export Pillars */}
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Targeted International SEO</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Structure your website with international hreflang tags, high-speed CDN delivery, and country-specific keyword optimization for the US, Europe, and Middle East.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Global Trust Architecture</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Showcase factory certifications (ISO, CE), international port shipping terms (FOB, CIF, EXW), and verified export container packing videos that build foreign buyer trust.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Direct Buyer RFQs</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Capture commercial inquiries directly without middleman B2B directory commissions, allowing you to build direct long-term buyer relationships.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
