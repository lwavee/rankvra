import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Bot,
  Brain,
  MessageSquare,
  Phone,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Workflows & WhatsApp Automation Agency | RankVRA",
  description:
    "Automate your customer inquiries, appointment booking, and CRM lead capture with custom AI agents and WhatsApp Business automations built by RankVRA.",
  alternates: { canonical: "https://www.rankvra.com/services/ai-automation" },
};

export default function AiAutomationServicePage() {
  return (
    <SiteShell>
      <main className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <Bot size={14} />
              AI &amp; Workflow Automations
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Never Miss A Lead With{" "}
              <span className="text-gradient">Smart AI &amp; WhatsApp Bots</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              In modern sales, response speed is everything. A prospect who receives an instant, intelligent answer on WhatsApp within 30 seconds is 7× more likely to buy than one who waits hours for an email. We engineer custom AI agents that qualify leads, answer FAQs, and notify your sales team immediately.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Explore Automation Options
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20automate%20my%20WhatsApp%20leads."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Demo
              </a>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                <MessageSquare size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">WhatsApp Auto-Responders</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Instantly greet inbound inquiries from Google or Meta ads, share service catalogs, and capture visitor requirements automatically.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                <Brain size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Custom AI Knowledge Bots</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                Train private AI models on your company&apos;s exact pricing, availability, and policies so prospective clients get accurate answers 24/7.
              </p>
            </div>

            <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
              <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4f46e5] mb-5">
                <Zap size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Instant Sales Alerts</h3>
              <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                When a qualified buyer completes a form or WhatsApp interaction, your phone and sales team receive an instant push notification with full details.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
