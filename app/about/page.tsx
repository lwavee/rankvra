import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { AboutPage } from "@/app/components/about-page";

export const metadata: Metadata = {
  title: "About Us | Rankvra Digital Marketing Agency",
  description:
    "Meet the team behind Rankvra. We are a growth-obsessed digital marketing agency built on the belief that great strategy and relentless execution change businesses.",
};

export default function About() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
