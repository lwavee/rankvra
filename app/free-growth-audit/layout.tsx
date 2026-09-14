import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Get Your Free Growth & SEO Audit | RankVRA Udaipur",
  description:
    "Request a complimentary website speed, technical SEO, and conversion audit from Founder Naveen Panchal and the RankVRA team. Delivered within 48 hours.",
  alternates: {
    canonical: "https://www.rankvra.com/free-growth-audit",
  },
  openGraph: {
    title: "Get Your Free Growth & SEO Audit | RankVRA",
    description:
      "Request a complimentary website speed, technical SEO, and conversion audit from Founder Naveen Panchal and the RankVRA team.",
    url: "https://www.rankvra.com/free-growth-audit",
  },
};

export default function FreeGrowthAuditLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
