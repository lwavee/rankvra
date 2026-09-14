import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { ServicesPage } from "@/app/components/services-page";

export const metadata: Metadata = {
  title: "Services | Web Development, SEO & Digital Growth | RankVRA",
  description:
    "Explore RankVRA's core digital growth services: high-speed Next.js web development, technical Google SEO, local Maps 3-Pack, Google Ads PPC, and AI automation.",
  alternates: { canonical: "https://www.rankvra.com/services" },
};

export default function Services() {
  return (
    <SiteShell>
      <ServicesPage />
    </SiteShell>
  );
}
