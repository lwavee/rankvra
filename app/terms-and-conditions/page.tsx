import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | RankVRA",
  description: "Terms of service and project engagement policies for RankVRA.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <SiteShell>
      <main className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-4">
            <ShieldCheck size={14} />
            Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-[#64748b]">Last Updated: September 2026</p>

          <div className="mt-10 space-y-8 text-base text-[#475569] leading-8 border-t border-[#e2e8f0] pt-8">
            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Scope of Engagement</h2>
              <p>
                RankVRA provides custom web development, search engine optimization (SEO), digital advertising management, and business growth consulting. All client engagements are governed by clearly defined statements of work, agreed deliverables, and transparent milestones.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. Asset Ownership &amp; IP</h2>
              <p>
                Unlike agencies that retain hostage control over your website or ad accounts, RankVRA believes in 100% client ownership. Upon completion of milestone payments, clients retain full ownership of their custom code, domains, media assets, and advertising accounts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. Transparent Expectations &amp; SEO Performance</h2>
              <p>
                While RankVRA adheres to Google Search Essentials and industry-best white-hat technical practices, search engine algorithms remain under third-party control. We commit to rigorous keyword research, technical architecture, and transparent monthly progress reporting, without making unsubstantiated guarantees that violate search guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Payment Terms &amp; Invoicing</h2>
              <p>
                Project timelines, milestone disbursements, and retainer terms are agreed upon prior to project kickoff. Invoices are issued with transparent deliverables and standard payment terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. Governing Law</h2>
              <p>
                These terms are governed by the applicable commercial laws of India, under the jurisdiction of courts in Udaipur, Rajasthan.
              </p>
            </section>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
