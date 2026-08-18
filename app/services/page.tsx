import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { ServicesPage } from "@/app/components/services-page";

export const metadata: Metadata = {
  title: "Services | Rankvra Digital Marketing Agency",
  description:
    "From SEO and paid ads to web design and conversion optimisation — explore Rankvra full suite of digital marketing services engineered for ROI.",
};

export default function Services() {
  return (
    <SiteShell>
      <ServicesPage />
    </SiteShell>
  );
}
