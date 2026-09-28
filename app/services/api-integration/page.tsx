import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  CreditCard,
  Database,
  ExternalLink,
  Layers,
  Network,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "API Development & Third-Party API Integration Services | RankVRA",
  description:
    "Custom REST/GraphQL API development and third-party integrations: payment gateways, CRMs, ERPs, WhatsApp Business API, and automated cloud webhooks.",
  alternates: { canonical: "https://www.rankvra.com/services/api-integration" },
  openGraph: {
    title: "API Development & Third-Party API Integration Services | RankVRA",
    description:
      "Connect your website with core business tools. We develop secure custom APIs and integrate third-party platforms with webhook resilience and encrypted data sync.",
    url: "https://www.rankvra.com/services/api-integration",
    siteName: "RankVRA",
    locale: "en_US",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.rankvra.com/services/api-integration#service",
      name: "API Development & Integration Services",
      serviceType: "API Engineering & Systems Integration",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "India" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
      ],
      description:
        "Custom REST and GraphQL API development, webhook processing pipelines, and third-party enterprise integrations (Payment Gateways, CRMs, ERPs, WhatsApp Cloud API, Shipping Carriers).",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/api-integration",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/api-integration#breadcrumb",
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
          name: "API Integration",
          item: "https://www.rankvra.com/services/api-integration",
        },
      ],
    },
  ],
};

export default function ApiIntegrationPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-white via-indigo-50/20 to-[#f8fafc] pt-12 pb-16 lg:pt-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs font-medium text-[#64748b]">
              <Link href="/" className="hover:text-[#4f46e5]">Home</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <Link href="/services" className="hover:text-[#4f46e5]">Services</Link>
              <ChevronRight size={12} className="text-[#94a3b8]" />
              <span className="text-[#4f46e5] font-semibold">API Integration</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 mb-4">
                <Network size={13} />
                REST, GraphQL & Webhook Pipelines
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] leading-[1.15]">
                API Development & Third-Party Integration for Seamless Business Automation
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
                Connect your website and web applications to critical external systems. We engineer custom APIs and integrate payment gateways, enterprise CRMs, ERPs, and cloud communication platforms with guaranteed data consistency and automated error recovery.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
                >
                  Discuss Your API Integration
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services/ai-automation"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-bold text-[#0f172a] hover:bg-[#f8fafc] transition-all"
                >
                  Explore AI & Automation Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Integration Reliability</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Engineering Resilience Across Third-Party APIs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Webhook Signature Verification</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Cryptographic verification of inbound webhooks (HMAC SHA-256) preventing replay attacks, data tampering, and unauthorized external payloads.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Zap size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Idempotency & Retries</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Idempotent request keys and exponential backoff retry algorithms ensure that network drops or external rate limits never result in duplicate orders or lost customer data.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Cpu size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Asynchronous Queue Handling</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  High-volume webhook ingestion decoupled into Redis-backed queues (BullMQ/Celery), acknowledging external servers in under 50ms while processing payloads in the background.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Capabilities */}
        <section className="bg-white py-16 lg:py-24 border-y border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Integrations</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Third-Party Systems We Integrate
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Payment Gateways", desc: "Stripe, Razorpay, PayPal, Authorize.Net, and automated recurring subscription billing." },
                { title: "CRM Platforms", desc: "Two-way contact and deal synchronization with HubSpot, Salesforce, Zoho, and Pipedrive." },
                { title: "WhatsApp Cloud API", desc: "Official Meta WhatsApp Business Cloud API for instant automated replies and lead qualification." },
                { title: "Logistics & Shipping", desc: "Automated tracking, label generation, and rate calculation with FedEx, DHL, Delhivery, and Shiprocket." },
                { title: "Accounting & ERPs", desc: "Real-time invoice and inventory syncing with QuickBooks, Xero, Tally, and custom ERP systems." },
                { title: "AI & LLM Services", desc: "OpenAI GPT-4o, Anthropic Claude, and Google Gemini API integration for document parsing and automated customer triage." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-[#f1f5f9] bg-[#f8fafc] hover:border-[#cbd5e1] transition-all">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#0f172a] mb-2">
                    <CheckCircle2 size={16} className="text-[#10b981]" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">Systems Connectivity</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Connect your business applications with bulletproof APIs
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Eliminate manual copy-pasting across isolated software tools. RankVRA engineers automated API integrations that streamline operations and accelerate cash flow.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#4338ca] transition-all"
                  >
                    Discuss Your API Integration Requirements
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/services/web-development"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    Explore Web Development Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
