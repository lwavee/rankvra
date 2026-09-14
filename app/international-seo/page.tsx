import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Globe,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "International SEO Agency for Global Markets | RankVRA",
  description:
    "Expand your search visibility across the USA, UK, UAE, and Europe. RankVRA engineers multi-country international SEO architectures that capture overseas buyers.",
  alternates: { canonical: "https://www.rankvra.com/international-seo" },
};

export default function InternationalSeoPage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Globe size={14} />
              Global Organic Growth
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              International SEO Engineered for{" "}
              <span className="text-gradient">Overseas Markets</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              Selling products or services to clients in the United States, United Kingdom, Middle East, or Europe requires more than basic English translation. We implement technically correct multi-region SEO architectures that help your domain rank in foreign search engines.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get International SEO Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20interested%20in%20international%20SEO."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Global Desk
              </a>
            </div>
          </div>

          {/* Core Technical Strategy */}
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Hreflang &amp; Geo-Targeting</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Accurate hreflang implementation and language tagging to signal to Google which regional audience each page is crafted for.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Global CDN &amp; Latency</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Edge caching and high-speed multi-region server distribution ensuring under-1-second delivery for users in North America, Europe, or the Gulf.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Currency &amp; Compliance</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Transparent international shipping guidelines, GDPR/privacy compliance, and multi-currency pricing displays that remove buyer friction.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
