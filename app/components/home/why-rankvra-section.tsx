import { features } from "@/app/data/home";
import { CheckCircle2 } from "lucide-react";

export function WhyRankvraSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-center">
        {/* Left — Problem framing */}
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#4f46e5]">
            Why Choose Rankvra in Udaipur
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl leading-[1.15]">
            Tired of vanity metrics?{" "}
            <span className="text-[#64748b] font-medium">We deliver real customer calls &amp; inquiries.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-[#475569] max-w-xl">
            Whether you run a resort in Udaipur, a stone &amp; marble export firm, or a retail brand in Rajasthan, you don&apos;t need complicated 30-page PDF reports showing &ldquo;impressions&rdquo;. You need high-intent buyers finding your business on Google, messaging you on WhatsApp, and paying for your services.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Custom Next.js websites built from scratch — zero slow, bloated WordPress templates",
              "Local SEO & Google Maps optimization to rank #1 in Udaipur & Rajasthan",
              "Direct communication with founder Naveen Panchal (lw_avee) & core operators",
              "Transparent monthly reporting in plain language — you own 100% of your assets",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2 size={17} className="text-[#4f46e5] mt-0.5 shrink-0" />
                <span className="text-sm text-[#475569] font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Feature cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((item) => (
            <div
              key={item.title}
              className="reveal group rounded-[22px] border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d2fe] hover:shadow-md hover:shadow-[#4f46e5]/5"
            >
              <p className="text-base font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                {item.title}
              </p>
              <p className="mt-2.5 text-sm leading-7 text-[#64748b]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
