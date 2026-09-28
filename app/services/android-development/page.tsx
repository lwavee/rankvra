import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Layers,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Android App Development & Cross-Platform Mobile Engineering | RankVRA",
  description:
    "Custom Android and cross-platform mobile application development. Native Kotlin, React Native, offline-first sync, and secure enterprise mobile solutions.",
  alternates: { canonical: "https://www.rankvra.com/services/android-development" },
  openGraph: {
    title: "Android App Development & Cross-Platform Mobile Engineering | RankVRA",
    description:
      "Enterprise mobile app engineering. Native Android (Kotlin) and React Native solutions with sub-second responsiveness, background push sync, and Google Play compliance.",
    url: "https://www.rankvra.com/services/android-development",
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
      "@id": "https://www.rankvra.com/services/android-development#service",
      name: "Android Mobile Application Development",
      serviceType: "Mobile Application Engineering",
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
        "High-performance Android and cross-platform mobile application development utilizing Kotlin, React Native, SQLite/Room local caching, and secure cloud REST APIs.",
      offers: {
        "@type": "Offer",
        url: "https://www.rankvra.com/services/android-development",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/services/android-development#breadcrumb",
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
          name: "Android Development",
          item: "https://www.rankvra.com/services/android-development",
        },
      ],
    },
  ],
};

export default function AndroidDevelopmentPage() {
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
              <span className="text-[#4f46e5] font-semibold">Android Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 mb-4">
                <Smartphone size={13} />
                Native Kotlin & React Native
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0f172a] leading-[1.15]">
                Custom Android Application Development & Cross-Platform Mobile Solutions
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
                We engineer scalable Android and cross-platform mobile apps for startups and growing enterprises. From field-agent operations tools to customer-facing mobile platforms, we deliver hardware-optimized performance, offline-first synchronization, and Google Play Store compliance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
                >
                  Discuss Your Mobile App Project
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services/web-application-development"
                  className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 py-3.5 text-sm font-bold text-[#0f172a] hover:bg-[#f8fafc] transition-all"
                >
                  Compare with Web Applications
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-2">Engineering Standards</h2>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                Mobile Architecture Built for Enterprise Reliability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Zap size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Offline-First Data Sync</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Local database persistence with Room / SQLite allowing seamless app functionality without cellular reception, syncing automatically upon network restoration.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <Cpu size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Hardware-Level Optimization</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Camera scanning, biometric fingerprint authentication, GPS geo-fencing, and Bluetooth device connectivity optimized for low battery consumption.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-xs hover:border-[#c7d2fe] transition-all">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] mb-6">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Secure Keychain & Play Compliance</h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Hardware-backed Android Keystore token encryption, ProGuard/R8 code obfuscation, and strict adherence to Google Play Target API level requirements.
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
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">Mobile Architecture Consultation</span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Should you build an Android app or a Progressive Web App?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  Consult with RankVRA to evaluate your user journey, hardware integration needs, and development budget before investing in native mobile development.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#4338ca] transition-all"
                  >
                    Discuss Your Mobile or Web Application
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/services/web-application-development"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                    Explore Web Application Development
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
