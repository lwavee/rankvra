import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | RankVRA",
  description: "Privacy policy and data protection terms for RankVRA website visitors and clients.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <main className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-4">
            <ShieldCheck size={14} />
            Data Protection & Trust
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[#64748b]">Last Updated: September 2026</p>

          <div className="mt-10 space-y-8 text-base text-[#475569] leading-8 border-t border-[#e2e8f0] pt-8">
            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Information We Collect</h2>
              <p>
                When you request a free website audit, strategy call, or submit an inquiry through RankVRA (https://rankvra.com), we collect contact information you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2 text-sm text-[#334155]">
                <li>Full name and email address</li>
                <li>Phone number and WhatsApp contact details</li>
                <li>Company name and website URL</li>
                <li>Project requirements, goals, and communication records</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. How We Use Your Information</h2>
              <p>
                The information collected is used exclusively to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2 text-sm text-[#334155]">
                <li>Perform your requested website, SEO, or growth audit.</li>
                <li>Respond directly to your project queries and schedule consultations.</li>
                <li>Provide ongoing development, marketing, and technical support.</li>
                <li>Improve our website performance, user experience, and service delivery.</li>
              </ul>
              <p className="mt-2">
                We do not sell, rent, or trade your personal information to third-party advertisers or data brokers under any circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. Analytics & Cookies</h2>
              <p>
                We use standard, privacy-respecting website analytics and server logging to understand visitor trends, measure page speed, and optimize conversion pathways. You can manage or disable cookie preferences through your web browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Data Security & Storage</h2>
              <p>
                We employ secure transmission protocols (HTTPS/SSL encryption) and industry-standard security practices to safeguard all submitted information against unauthorized access, loss, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. Contacting Us</h2>
              <p>
                If you have questions about this privacy policy, your personal data, or wish to request data deletion, contact us directly at:
              </p>
              <div className="mt-3 p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] text-sm text-[#0f172a]">
                <p><strong>RankVRA</strong> (Founder: Naveen Panchal)</p>
                <p>Udaipur, Rajasthan 313001, India</p>
                <p>Email: <a href="mailto:info@rankvra.com" className="text-[#4f46e5] underline">info@rankvra.com</a></p>
                <p>Phone / WhatsApp: <a href="tel:+917297875798" className="text-[#4f46e5] underline">+91 7297875798</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
