import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { AboutPage } from "@/app/components/about-page";

export const metadata: Metadata = {
  title:
    "About Us | Best Web Development & Digital Marketing Agency in Udaipur | Naveen Panchal (lw_avee)",
  description:
    "Meet Founder & CEO Naveen Panchal (lw_avee) and the team behind Rankvra — the best web development and digital marketing agency in Udaipur, serving brands across Rajasthan.",
};

export default function About() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
