import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Briefcase,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Lead Generation Agency for High-Value Services | RankVRA",
  description:
    "We build reliable B2B customer acquisition funnels for service providers, industrial manufacturers, and tech firms using Google Search and intent data.",
  alternates: { canonical: "https://www.rankvra.com/b2b-lead-generation" },
};

export default function B2bLeadGenerationPage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Briefcase size={14} />
              High-Ticket B2B Acquisition
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Predictable B2B Leads for{" "}
              <span className="text-gradient">High-Value Services</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              B2B transactions require high trust, technical depth, and clear business justification. We design focused organic search architectures and intent-driven paid search funnels that attract corporate decision-makers actively searching for solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Audit Your B2B Funnel
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20am%20interested%20in%20B2B%20lead%20generation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                Discuss Your B2B Model
              </a>
            </div>
          </div>

          {/* Strategy Blocks */}
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Intent-Driven Keywords</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Target high-value, solution-specific queries that only genuine decision-makers type into Google when preparing an RFP or purchasing proposal.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">White-Paper &amp; Audit Funnels</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Convert cold visitors into qualified prospects by offering valuable technical audits, calculators, or transparent specification sheets.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Rapid CRM Qualification</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Filter out unqualified inquiries automatically, routing genuine high-value opportunities straight to your senior sales team.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
