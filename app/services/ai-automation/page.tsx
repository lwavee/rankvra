import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Workflows & WhatsApp Automation Agency | RankVRA",
  description:
    "Automate your customer inquiries, appointment booking, and CRM lead capture with custom AI agents and WhatsApp Business automations built by RankVRA.",
  alternates: { canonical: "https://www.rankvra.com/services/ai-automation" },
  openGraph: {
    title: "AI Workflows & WhatsApp Automation Agency | RankVRA",
    description:
      "Instant lead response engines, WhatsApp Business qualification bots, and automated CRM workflows that turn website visitors into scheduled appointments.",
    url: "https://www.rankvra.com/services/ai-automation",
    siteName: "RankVRA",
    locale: "en_IN",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.rankvra.com/services/ai-automation#service",
      name: "AI Workflows & WhatsApp Business Automation",
      serviceType: "Business Process Automation",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "City", name: "Udaipur" },
        { "@type": "AdministrativeArea", name: "Rajasthan" },
        { "@type": "Country", name: "India" },
      ],
      description:
        "Engineering custom AI assistants, WhatsApp Business Cloud API integrations, automated CRM lead assignment, and instantaneous appointment booking systems.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/ai-automation",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/ai-automation#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.rankvra.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.rankvra.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI & Automation",
          item: "https://www.rankvra.com/services/ai-automation",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/services/ai-automation#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is WhatsApp automation crucial for Indian businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Over 85% of commercial conversations in India happen via WhatsApp. An automated instant response within 30 seconds increases conversion rates by up to 7x compared to waiting hours for an email reply or callback.",
          },
        },
        {
          "@type": "Question",
          name: "Do you use the official WhatsApp Business Cloud API?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We build strictly on Meta's official WhatsApp Business Cloud API, ensuring high delivery rates, zero risk of number bans, and verified green badge eligibility.",
          },
        },
        {
          "@type": "Question",
          name: "Can the AI bot answer custom questions about my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We train custom AI knowledge bases using your exact price lists, property room types, consultation fees, and company policies, ensuring factual, hallucination-free replies.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Why is WhatsApp automation crucial for Indian businesses?",
    a: "Over 85% of commercial conversations in India happen via WhatsApp. An automated instant response within 30 seconds increases conversion rates by up to 7x compared to waiting hours for an email reply or callback.",
  },
  {
    q: "Do you use the official WhatsApp Business Cloud API?",
    a: "Yes. We build strictly on Meta's official WhatsApp Business Cloud API, ensuring high delivery rates, zero risk of number bans, and verified green badge eligibility.",
  },
  {
    q: "Can the AI bot answer custom questions about my business?",
    a: "Yes. We train custom AI knowledge bases using your exact price lists, property room types, consultation fees, and company policies, ensuring factual, hallucination-free replies.",
  },
];

export default function AiAutomationServicePage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
              <li>
                <Link href="/" className="hover:text-[#4f46e5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={12} className="text-[#94a3b8]" />
              </li>
              <li>
                <Link href="/services" className="hover:text-[#4f46e5] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight size={12} className="text-[#94a3b8]" />
              </li>
              <li className="text-[#0f172a]" aria-current="page">
                AI &amp; Automation
              </li>
            </ol>
          </nav>

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
              In modern sales, response speed is everything. A prospect who receives an instant, intelligent answer on WhatsApp within 30 seconds is significantly more likely to convert than one who waits hours for an email. We engineer custom AI agents that qualify leads, answer FAQs, and notify your sales team immediately.
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
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              Automation Solutions
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
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

          {/* Verified Deliverables */}
          <div className="mt-16 rounded-3xl border border-[#e2e8f0] bg-white p-8">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f46e5]" />
              Included in AI Automation Engagements
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Official WhatsApp Business Cloud API setup and verified sender ID",
                "Automated instant greeting and qualifying question flow",
                "Direct lead webhook integration with CRM or Google Sheets",
                "Instant SMS/WhatsApp notification to sales representatives",
                "Appointment booking synchronization with Google Calendar",
                "Rigorous testing to ensure 100% compliant, spam-free message delivery",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#10b981] mt-1 shrink-0" />
                  <span className="text-sm font-medium text-[#334155]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-6">
                  <h3 className="text-base font-bold text-[#0f172a] mb-2">{faq.q}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
