import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Get Your Free Website & SEO Audit | RankVRA",
  description:
    "Request a complimentary manual review of your website. We'll inspect your speed, mobile user experience, technical SEO, and conversion opportunities.",
  alternates: {
    canonical: "https://www.rankvra.com/free-website-audit",
  },
  openGraph: {
    title: "Get Your Free Website & SEO Audit | RankVRA",
    description:
      "Request a complimentary manual review of your website. We'll inspect your speed, mobile user experience, technical SEO, and conversion opportunities.",
    url: "https://www.rankvra.com/free-website-audit",
    siteName: "RankVRA",
    locale: "en_US",
    type: "website",
  },
};

export default function FreeWebsiteAuditLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
