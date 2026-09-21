import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { ContactPage } from "@/app/components/contact-page";

export const metadata: Metadata = {
  title: "Contact RankVRA | Web Development & Growth Partner | Global & India",
  description:
    "RankVRA is based in India and works with businesses across India, the USA, Canada, the UK, and international markets. Connect directly with Founder Naveen Panchal (+91 7297875798 / info@rankvra.com).",
  alternates: { canonical: "https://www.rankvra.com/contact" },
  openGraph: {
    title: "Contact RankVRA | Web Development & Growth Partner | Global & India",
    description:
      "RankVRA is based in India and works with businesses across India, the USA, Canada, the UK, and international markets. Speak directly with Founder Naveen Panchal.",
    url: "https://www.rankvra.com/contact",
    siteName: "RankVRA",
    locale: "en_US",
    type: "website",
  },
};

export default function Contact() {
  return (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  );
}
