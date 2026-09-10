import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export default function ThankYouPage() {
  return (
    <SiteShell>
      <main className="min-h-[75vh] flex items-center justify-center bg-white px-6 py-20">
        <div className="max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mb-6">
            <CheckCircle2 size={36} />
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Your Growth Audit Request Is Received!
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Thank you for sharing your website details. Founder &amp; CEO <strong>Naveen Panchal</strong> and our technical team will review your speed, search rankings, and conversion funnels within 24 to 48 business hours.
          </p>

          <div className="mt-8 p-6 rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-3">
              What Happens Next:
            </p>
            <ul className="space-y-2.5 text-sm text-[#334155]">
              <li className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4f46e5] text-white text-xs font-bold">1</span>
                <span>We inspect your mobile load speed, Google indexing, and search competitors.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4f46e5] text-white text-xs font-bold">2</span>
                <span>We prepare an action plan highlighting your top 3 growth opportunities.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4f46e5] text-white text-xs font-bold">3</span>
                <span>We email the audit report or message you on WhatsApp with clear recommendations.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20just%20submitted%20a%20growth%20audit%20request%20on%20Rankvra."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#4f46e5]/25 hover:bg-[#4338ca] transition-all"
            >
              <Phone size={16} />
              Fast-Track on WhatsApp (+91 7297875798)
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-8 py-4 text-sm font-semibold text-[#334155] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all"
            >
              Explore Our Work
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
