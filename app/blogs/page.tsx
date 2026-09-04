import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { SiteShell } from "@/app/components/site-shell";
import { BLOG_POSTS } from "./data";

export const metadata: Metadata = {
  title: "Blog & Insights | Rankvra",
  description:
    "Read the latest digital marketing strategies, SEO techniques, and growth insights from the Rankvra team.",
};

export default function BlogsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Rankvra Blog",
    "url": "https://rankvra.com/blogs",
    "description": "Insights and strategies on digital marketing, SEO, and paid media.",
    "publisher": {
      "@type": "Organization",
      "name": "Rankvra"
    }
  };

  return (
    <SiteShell>
      <main className="min-h-screen bg-[#f8fafc]">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Section */}
      <section className="bg-white border-b border-[#e2e8f0] pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#4f46e5] uppercase mb-4">
              Insights & Strategies
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
              Rankvra <span className="text-gradient">Blog</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#475569]">
              Actionable insights, deep dives, and expert strategies to help you scale your business in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
            {BLOG_POSTS.map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col items-start justify-between rounded-[28px] bg-white p-8 border border-[#e2e8f0] shadow-sm transition-all hover:shadow-[0_20px_40px_rgba(79,70,229,0.06)] hover:border-[#c7d2fe]"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={blog.date} className="text-[#64748b] flex items-center gap-1.5">
                    <Calendar size={13} />
                    {blog.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-[#eef2ff] px-3 py-1.5 font-medium text-[#4f46e5]">
                    {blog.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-6 text-xl font-bold leading-tight text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                    <Link href={`/blogs/${blog.slug}`}>
                      <span className="absolute inset-0" />
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#475569]">
                    {blog.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between w-full border-t border-[#f1f5f9] pt-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1f5f9] text-[#94a3b8]">
                      <User size={14} />
                    </div>
                    <span className="font-semibold text-[#0f172a]">{blog.author.name}</span>
                  </div>
                  <div className="flex items-center text-sm font-semibold text-[#4f46e5]">
                    Read <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
    </SiteShell>
  );
}
