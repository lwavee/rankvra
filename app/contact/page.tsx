import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { ContactPage } from "@/app/components/contact-page";

export const metadata: Metadata = {
  title: "Contact | Book a Strategy Call | Rankvra",
  description:
    "Ready to grow? Book a free strategy call with Rankvra. We will audit your current marketing, identify your biggest opportunities, and map a clear path to results.",
};

export default function Contact() {
  return (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  );
}
