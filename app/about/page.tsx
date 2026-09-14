import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { AboutPage } from "@/app/components/about-page";

export const metadata: Metadata = {
  title: "About RankVRA | Founder Naveen Panchal | Udaipur, India",
  description:
    "Learn about RankVRA, an engineering-first web development and digital growth agency founded by Naveen Panchal (lw_avee) in Udaipur, Rajasthan. We build high-speed websites, technical SEO, and conversion pipelines.",
  alternates: { canonical: "https://www.rankvra.com/about" },
};

export default function About() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
