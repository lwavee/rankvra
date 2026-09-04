import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, CheckCircle2, Share2, Sparkles } from "lucide-react";
import { SiteShell } from "@/app/components/site-shell";
import { BLOG_POSTS, getBlogPostBySlug } from "../data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Rankvra Blog",
    };
  }

  return {
    title: `${post.title} | Rankvra Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Related posts
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <SiteShell>
      <main className="min-h-screen bg-[#f8fafc] pt-28 pb-20">
        <article className="mx-auto max-w-4xl px-6 lg:px-8">
          
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f46e5] hover:text-[#4338ca] transition-colors"
            >
              <ArrowLeft size={16} />
              Back to All Articles
            </Link>
          </div>

          {/* Article Header */}
          <header className="rounded-[32px] border border-[#e2e8f0] bg-white p-8 sm:p-12 shadow-sm mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold mb-6">
              <span className="rounded-full bg-[#eef2ff] px-3.5 py-1 text-[#4f46e5]">
                {post.category}
              </span>
              <span className="text-[#94a3b8]">•</span>
              <span className="flex items-center gap-1.5 text-[#64748b]">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="text-[#94a3b8]">•</span>
              <span className="flex items-center gap-1.5 text-[#64748b]">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed font-medium mb-8">
              {post.subtitle}
            </p>

            {/* Author bar */}
            <div className="flex items-center justify-between border-t border-[#f1f5f9] pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5] to-[#0891b2] text-white font-bold text-base shadow-sm">
                  {post.author.name[0]}
                </div>
                <div>
                  <div className="font-bold text-[#0f172a] text-sm sm:text-base">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-[#64748b] font-medium">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3.5 py-1.5 text-xs font-semibold text-[#64748b]">
                <Sparkles size={13} className="text-[#4f46e5]" />
                Rankvra Insights
              </span>
            </div>
          </header>

          {/* Article Body */}
          <div className="rounded-[32px] border border-[#e2e8f0] bg-white p-8 sm:p-12 shadow-sm mb-12">
            {/* Intro */}
            <div className="border-b border-[#f1f5f9] pb-8 mb-8">
              <p className="text-lg sm:text-xl leading-relaxed text-[#334155] font-normal">
                {post.content.introduction}
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
              {post.content.sections.map((section, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-[#475569]">
                      {p}
                    </p>
                  ))}

                  {/* Key Takeaways Callout */}
                  {section.keyTakeaways && (
                    <div className="mt-6 rounded-2xl border border-[#c7d2fe] bg-[#f5f7ff] p-6 sm:p-7">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#4f46e5] mb-3 flex items-center gap-2">
                        <Sparkles size={16} />
                        Key Strategic Takeaways
                      </h3>
                      <ul className="space-y-2.5">
                        {section.keyTakeaways.map((takeaway, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-[#4f46e5] flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base font-medium text-[#1e293b]">
                              {takeaway}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Conclusion */}
            <div className="mt-12 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-7 sm:p-8">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">Final Verdict</h3>
              <p className="text-base text-[#475569] leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          {/* Action CTA Banner */}
          <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-12 text-white shadow-xl mb-16 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                Elevate Your Marketing
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Want to implement these strategies for your business?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                Our team at Rankvra builds customized, performance-obsessed SEO and paid acquisition funnels designed to scale ambitious brands.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                >
                  Book a Strategy Call
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
                More Articles You May Like
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blogs/${related.slug}`}
                    className="group rounded-[24px] border border-[#e2e8f0] bg-white p-6 shadow-sm transition-all hover:border-[#c7d2fe] hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-semibold text-[#4f46e5] mb-3">
                        {related.category}
                      </span>
                      <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#64748b] line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center text-xs font-semibold text-[#4f46e5] group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight size={14} className="ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </article>
      </main>
    </SiteShell>
  );
}
