import { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { BLOG_POSTS } from "./data";
import { BlogClient } from "./blog-client";

export const metadata: Metadata = {
  title: "Search Strategy & Web Engineering Blog | RankVRA",
  description:
    "Explore actionable technical SEO blueprints, local search guides, hospitality direct booking frameworks, and web performance insights by Founder Naveen Panchal.",
  alternates: { canonical: "https://www.rankvra.com/blogs" },
  openGraph: {
    title: "Search Strategy & Web Engineering Blog | RankVRA",
    description:
      "Explore actionable technical SEO blueprints, local search guides, and web performance insights by Founder Naveen Panchal.",
    url: "https://www.rankvra.com/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "RankVRA Insights & Strategy",
    url: "https://www.rankvra.com/blogs",
    description:
      "Actionable engineering, algorithmic search, and revenue optimization blueprints for ambitious businesses.",
    publisher: {
      "@id": "https://www.rankvra.com/#organization",
    },
  };

  return (
    <SiteShell>
      <main className="min-h-screen bg-white">
        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Professional Editorial Blog Client Component */}
        <BlogClient initialPosts={BLOG_POSTS} />
      </main>
    </SiteShell>
  );
}
