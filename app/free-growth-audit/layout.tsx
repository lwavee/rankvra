import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Get Your Free Website & Growth Audit | RankVRA",
  description:
    "Request a complimentary website speed, technical SEO, and conversion audit from Founder Naveen Panchal and the RankVRA team. Delivered within 24-48 hours.",
  alternates: {
    canonical: "https://www.rankvra.com/free-website-audit",
  },
  openGraph: {
    title: "Get Your Free Website & Growth Audit | RankVRA",
    description:
      "Request a complimentary website speed, technical SEO, and conversion audit from Founder Naveen Panchal and the RankVRA team.",
    url: "https://www.rankvra.com/free-website-audit",
  },
};

export default function FreeGrowthAuditLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
