import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  Phone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare & Clinic Marketing in Udaipur & Rajasthan | RankVRA",
  description:
    "We help dental clinics, doctors, and healthcare centers in Udaipur secure top 3 Google Maps rankings and attract qualified patients through ethical local SEO.",
  alternates: { canonical: "https://www.rankvra.com/industries/clinics" },
  openGraph: {
    title: "Healthcare & Clinic Marketing in Udaipur & Rajasthan | RankVRA",
    description:
      "Ethical patient acquisition, Google Maps local SEO, and custom high-speed websites for clinics, dental centers, and healthcare specialists in Rajasthan.",
    url: "https://www.rankvra.com/industries/clinics",
    siteName: "RankVRA",
    locale: "en_IN",
    type: "website",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rankvra.com/industries/clinics#webpage",
      url: "https://www.rankvra.com/industries/clinics",
      name: "Healthcare & Clinic Marketing in Udaipur & Rajasthan | RankVRA",
      description:
        "Ethical local SEO, Google Business Profile optimization, and appointment funnels for clinics, dental practices, and hospitals in Udaipur.",
      isPartOf: {
        "@id": "https://www.rankvra.com/#website",
      },
      breadcrumb: {
        "@id": "https://www.rankvra.com/industries/clinics#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rankvra.com/industries/clinics#breadcrumb",
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
          name: "Industries",
          item: "https://www.rankvra.com/industries",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthcare & Clinics",
          item: "https://www.rankvra.com/industries/clinics",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.rankvra.com/industries/clinics#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do patients in Udaipur find healthcare providers online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Over 80% of healthcare inquiries start on mobile Google Maps searches for terms like 'dental clinic near me', 'pediatrician in Bhopalpura', or 'orthopedic doctor in Udaipur'. Appearing in the Google 3-Pack is the single most important factor for daily appointment volume.",
          },
        },
        {
          "@type": "Question",
          name: "Are your medical marketing practices compliant with medical ethics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We focus exclusively on organic technical SEO, Google Business Profile accuracy, verified patient testimonials, and educational doctor credentials without misleading medical claims or unethical promises.",
          },
        },
        {
          "@type": "Question",
          name: "Can patients book appointments via WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We implement one-tap WhatsApp appointment scheduling that connects patients directly with your clinic reception desk, capturing their preferred date, time, and medical consultation type.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "How do patients in Udaipur find healthcare providers online?",
    a: "Over 80% of healthcare inquiries start on mobile Google Maps searches for terms like 'dental clinic near me', 'pediatrician in Bhopalpura', or 'orthopedic doctor in Udaipur'. Appearing in the Google 3-Pack is the single most important factor for daily appointment volume.",
  },
  {
    q: "Are your medical marketing practices compliant with medical ethics?",
    a: "Yes. We focus exclusively on organic technical SEO, Google Business Profile accuracy, verified patient testimonials, and educational doctor credentials without misleading medical claims or unethical promises.",
  },
  {
    q: "Can patients book appointments via WhatsApp?",
    a: "Yes. We implement one-tap WhatsApp appointment scheduling that connects patients directly with your clinic reception desk, capturing their preferred date, time, and medical consultation type.",
  },
];

export default function ClinicsIndustryPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
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
                <Link href="/industries" className="hover:text-[#4f46e5] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <ChevronRight size={12} className="text-[#94a3b8]" />
              </li>
              <li className="text-[#0f172a]" aria-current="page">
                Healthcare &amp; Clinics
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-6">
              <HeartPulse size={14} />
              Healthcare &amp; Medical Practices
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.1]">
              Attract More Patients With{" "}
              <span className="text-gradient">Local Google Maps SEO</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-8">
              When a resident in Udaipur searches for &lsquo;dental clinic in Udaipur&rsquo;, &lsquo;hair transplant specialist&rsquo;, or &lsquo;pediatrician near me&rsquo;, they need trustworthy care immediately. We build fast, ethical websites and local SEO that position your practice as the premier choice in Udaipur and across Rajasthan.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/free-growth-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all"
              >
                Get Clinic SEO Audit
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20run%20a%20clinic/hospital%20and%20need%20more%20patient%20appointments."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
              >
                <Phone size={15} />
                WhatsApp Our Team
              </a>
            </div>
          </div>

          {/* Case Study Cross-Link */}
          <div className="mt-14 rounded-3xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2">
                  <TrendingUp size={14} />
                  Featured Healthcare Case Study
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a]">
                  Smile Care Dental Clinic, Udaipur
                </h3>
                <p className="mt-2 text-sm text-[#64748b] leading-relaxed">
                  How a specialized multi-specialty dental practice achieved consistent Google 3-Pack placement across central Udaipur and scaled monthly appointment calls by 125%.
                </p>
              </div>
              <Link
                href="/case-studies/smile-care-dental"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-[#cbd5e1] px-6 py-3 text-xs font-bold text-[#0f172a] shadow-xs hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all shrink-0 self-start sm:self-center"
              >
                Read Dental Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Healthcare Features */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              Local SEO Engine for Medical Practices
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Google Maps 3-Pack Rankings</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Optimize local signals across Udaipur neighborhoods (Panchwati, Hiran Magri, Fatehpura, Sukher) so nearby patients call your reception first.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Doctor Credentials &amp; Trust</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Highlight physician qualifications, university credentials, and clinic hygiene standards with MedicalClinic and Physician schema markup.
                </p>
              </div>

              <div className="p-8 rounded-[30px] border border-[#e2e8f0] bg-[#f8fafc]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">WhatsApp Appointment Booking</h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-6">
                  Make appointment scheduling seamless with one-tap WhatsApp integration that alerts your clinic desk instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Deliverables */}
          <div className="mt-16 rounded-3xl border border-[#e2e8f0] bg-white p-8">
            <h2 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#4f46e5]" />
              Healthcare Marketing Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "MedicalClinic structured JSON-LD schema for Google Rich Results",
                "Google Business Profile category and primary sub-category refinement",
                "Udaipur neighborhood-specific service landing pages",
                "Ethical review generation workflow with direct patient feedback links",
                "Mobile-first sub-second website speed for patients on cellular data",
                "Direct WhatsApp and call-button integration for urgent care",
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
