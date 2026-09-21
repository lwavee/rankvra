import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Globe2,
  PackageCheck,
  PanelsTopLeft,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ecommerce Website Development & High-Speed Stores | RankVRA",
  description:
    "Custom ecommerce web development: headless Next.js storefronts, sub-second checkout speeds, payment integrations (Stripe, Razorpay), and technical ecommerce SEO.",
  alternates: { canonical: "https://www.rankvra.com/services/ecommerce-development" },
  openGraph: {
    title: "Ecommerce Website Development & High-Speed Stores | RankVRA",
    description:
      "Custom ecommerce web development: headless Next.js storefronts, sub-second checkout speeds, payment integrations, and technical ecommerce SEO.",
    url: "https://www.rankvra.com/services/ecommerce-development",
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
      "@id": "https://www.rankvra.com/services/ecommerce-development#service",
      name: "Ecommerce Web Development Services",
      serviceType: "Ecommerce Development",
      provider: {
        "@id": "https://www.rankvra.com/#organization",
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "India" },
      ],
      description:
        "High-performance ecommerce web development built with Next.js, React, and modern checkout APIs. Engineered for sub-second catalog browsing and frictionless buyer checkout.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/ecommerce-development",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/ecommerce-development#breadcrumb",
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
          name: "Ecommerce Development",
          item: "https://www.rankvra.com/services/ecommerce-development",
        },
      ],
    },
  ],
};

export default function EcommerceDevelopmentPage() {
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
              <span className="text-[#4f46e5] font-semibold">Ecommerce Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 mb-4">
                <ShoppingBag size={13} className="text-indigo-600" />
                Headless &amp; Custom Stores
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0f172a] leading-tight">
                High-Speed Ecommerce Development Built for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Instant Checkout &amp; Growth.
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                Slow online stores destroy checkout conversions. We engineer custom, headless Next.js ecommerce storefronts with instant product filtering, frictionless payment gateways, and technical Product schema.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/free-website-audit"
                  className="rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#4338ca] transition-all"
                >
                  Audit Your Ecommerce Store
                </Link>
                <Link
                  href="/case-studies/e-biozone"
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:bg-slate-50 transition-all"
                >
                  View B2B Catalog Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 lg:py-24 bg-white border-b border-[#e2e8f0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
                Store Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mt-2">
                Engineered for High-Volume Catalog Performance
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Zap size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Sub-Second Catalog Browsing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Static and edge-rendered product pages with instant category filters, eliminating the 4-6 second lag common in template ecommerce platforms.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <CreditCard size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Secure Global Payments</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Smooth checkout integration with Stripe, Razorpay, UPI, PayPal, and multi-currency billing for domestic and international buyers.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <PackageCheck size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">B2B RFQ &amp; Wholesale Carts</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Custom Request-for-Quotation (RFQ) flows allowing institutional and wholesale purchasers to compile multi-item quote requests without standard consumer payment gates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                  Scale Your Store
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to engineer an online store that actually converts?
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Share your catalog size and target markets with Founder Naveen Panchal for direct technical discovery.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/free-website-audit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                  >
                    Claim Free Ecommerce Audit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="https://wa.me/917297875798?text=Hi%20Naveen,%20I'd%20like%20to%20discuss%20an%20ecommerce%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    WhatsApp Naveen Directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
