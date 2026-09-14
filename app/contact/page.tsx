import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { ContactPage } from "@/app/components/contact-page";

export const metadata: Metadata = {
  title: "Contact RankVRA | Web Development & SEO Agency Udaipur",
  description:
    "Get in touch with RankVRA in Udaipur, Rajasthan. Speak directly with Founder Naveen Panchal (+91 7297875798 / info@rankvra.com) to discuss web development, SEO, and digital growth.",
  alternates: { canonical: "https://www.rankvra.com/contact" },
};

export default function Contact() {
  return (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  );
}
