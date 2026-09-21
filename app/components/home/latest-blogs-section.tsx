import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/app/blogs/data";

export function LatestBlogsSection() {
  // Select 3 high-impact strategic articles with unique slugs
  const selectedSlugs = [
    "core-web-vitals-nextjs-optimization",
    "b2b-lead-generation-india",
    "ecommerce-seo-india-guide",
  ];

  const featured = selectedSlugs
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is (typeof BLOG_POSTS)[number] => Boolean(p));

  return (
    <section id="insights" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 border-t border-slate-100">
      <div className="reveal">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-3">
              <BookOpen size={13} />
              Technical Blueprints &amp; Research
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
              Search Strategy &amp;{" "}
              <span className="text-gradient">Engineering Publications</span>.
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-2xl leading-relaxed">
              In-depth research on technical SEO, Core Web Vitals, local search algorithms, and high-performance web engineering.
            </p>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/60 px-5 py-2.5 text-xs font-bold text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white transition-all shrink-0"
          >
            <span>Explore All 20 Guides</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3 Featured Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-[#e2e8f0] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d2fe] hover:shadow-xl overflow-hidden"
            >
              <div>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="block overflow-hidden bg-slate-900 border-b border-[#e2e8f0] aspect-[1200/630]"
                >
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt}
                    width={600}
                    height={315}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="rounded-full bg-[#eef2ff] px-3 py-1 font-semibold text-[#4f46e5]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[#64748b] font-medium text-[11px]">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold leading-snug text-[#0f172a] group-hover:text-[#4f46e5] transition-colors line-clamp-2">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-xs sm:text-sm leading-relaxed text-[#475569]">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between border-t border-[#f1f5f9] pt-4">
                  <span className="text-[11px] font-semibold text-slate-400">
                    {post.date}
                  </span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#4f46e5] group-hover:translate-x-1 transition-transform"
                  >
                    Read Blueprint <ArrowRight size={13} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
