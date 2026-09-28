import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileCheck,
  KeyRound,
  Lock,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Application Security & OWASP Hardening Services | RankVRA",
  description:
    "Protect your business web application from data breaches. We implement OWASP Top 10 defenses, strict CSP headers, SQL injection protection, and secure authentication.",
  alternates: { canonical: "https://www.rankvra.com/services/web-security" },
  openGraph: {
    title: "Web Application Security & OWASP Hardening Services | RankVRA",
    description:
      "Enterprise web security audits and software hardening. Prevent SQL injection, XSS attacks, session hijacking, and unauthorized API exploitation.",
    url: "https://www.rankvra.com/services/web-security",
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
      "@id": "https://www.rankvra.com/services/web-security#service",
      name: "Web Application Security & Hardening Services",
      serviceType: "Cybersecurity & Web Application Hardening",
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
        "Full-scope web application security auditing, code remediation, and architectural hardening adhering to OWASP Top 10 guidelines, Content Security Policies, and secure session management.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/web-security",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/web-security#breadcrumb",
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
          name: "Web Security",
          item: "https://www.rankvra.com/services/web-security",
        },
      ],
    },
  ],
};

export default function WebSecurityPage() {
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
              <span className="text-[#4f46e5] font-semibold">Web Security</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 mb-4">
                <ShieldCheck size={13} />
                OWASP Top 10 &amp; Zero-Trust Hardening
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] leading-[1.15]">
                Web Application Security &amp; Vulnerability Hardening for Modern Business
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
                Protect your proprietary business data, customer records, and digital assets from automated bots and malicious actors. We conduct code-level security audits, fix vulnerabilities, configure defense-in-depth headers, and engineer zero-trust access controls.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
                >
                  Discuss Your Web Security
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services/web-application-development"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-bold text-[#0f172a] hover:bg-[#f8fafc] transition-all"
                >
                  Explore Secure Web Applications
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Defense in Depth</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Essential Protection Layers for Business Web Apps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Lock size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Cryptographic Session Tokens</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  HttpOnly, Secure, SameSite=Strict cookies preventing Cross-Site Scripting (XSS) credential theft and token exfiltration.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <FileCheck size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Strict Content Security Policy</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Locking down script execution with cryptographic nonces, HSTS preloading, X-Frame-Options clickjacking defense, and MIME-sniffing prevention.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <ShieldAlert size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">API Rate Limiting &amp; WAF</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Edge Web Application Firewall (WAF) rules and Redis token-bucket rate limiters defending against brute force attacks, credential stuffing, and scraper scraping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">Security Review</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Concerned about potential vulnerabilities in your web platform?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Request a confidential security review with RankVRA. We inspect your authentication flows, API endpoint authorization, and database protections.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#4338ca] transition-all"
                  >
                    Discuss Your Web Security
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
