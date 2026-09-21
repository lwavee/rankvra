import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  BookOpen,
  AlertCircle,
  Info,
  Lightbulb,
} from "lucide-react";
import { SiteShell } from "@/app/components/site-shell";
import { BLOG_POSTS, getBlogPostBySlug, BlogPost } from "../data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | RankVRA Insights",
    };
  }

  const imageUrl = post.featuredImage?.url
    ? `https://www.rankvra.com${post.featuredImage.url}`
    : "https://www.rankvra.com/og-image.png";

  return {
    title: `${post.title} | RankVRA`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.rankvra.com/blogs/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.rankvra.com/blogs/${slug}`,
      publishedTime: post.date,
      modifiedTime: post.modifiedDate || post.date,
      authors: ["Naveen Panchal"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.featuredImage?.alt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      creator: "@rankvra",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.featuredImage?.url
    ? `https://www.rankvra.com${post.featuredImage.url}`
    : "https://www.rankvra.com/og-image.png";

  // Dynamic Schema.org @graph setup
  const schemaGraph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `https://www.rankvra.com/blogs/${slug}#article`,
      headline: post.title,
      description: post.excerpt,
      url: `https://www.rankvra.com/blogs/${slug}`,
      image: imageUrl,
      datePublished: post.date,
      dateModified: post.modifiedDate || post.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.rankvra.com/blogs/${slug}`,
      },
      author: {
        "@type": "Person",
        "@id": "https://www.rankvra.com/#founder",
        name: "Naveen Panchal",
        jobTitle: "Founder & Lead Technical Architect",
        url: "https://www.rankvra.com/about",
      },
      publisher: {
        "@id": "https://www.rankvra.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `https://www.rankvra.com/blogs/${slug}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.rankvra.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insights & Blog",
          item: "https://www.rankvra.com/blogs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `https://www.rankvra.com/blogs/${slug}`,
        },
      ],
    },
  ];

  // If the post has FAQs, add FAQPage schema
  if (post.faqs && post.faqs.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "@id": `https://www.rankvra.com/blogs/${slug}#faq`,
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": schemaGraph,
  };

  // Resolve related posts
  let relatedPosts: BlogPost[] = [];
  if (post.relatedSlugs && post.relatedSlugs.length > 0) {
    relatedPosts = post.relatedSlugs
      .map((s) => getBlogPostBySlug(s))
      .filter((p): p is BlogPost => p !== undefined);
  }
  if (relatedPosts.length < 3) {
    const additional = BLOG_POSTS.filter(
      (p) => p.slug !== slug && !relatedPosts.some((r) => r.slug === p.slug)
    ).slice(0, 3 - relatedPosts.length);
    relatedPosts = [...relatedPosts, ...additional];
  }

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema) }}
      />
      <main className="min-h-screen bg-[#f8fafc] pt-5 pb-12">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium text-[#64748b]">
            <Link href="/" className="hover:text-[#4f46e5] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#94a3b8]" />
            <Link href="/blogs" className="hover:text-[#4f46e5] transition-colors">
              Blog
            </Link>
            <ChevronRight size={12} className="text-[#94a3b8]" />
            <span className="text-[#4f46e5] font-semibold">{post.category}</span>
          </nav>

          {/* Article Header Card */}
          <header className="rounded-[22px] border border-[#e2e8f0] bg-white p-5 sm:p-7 shadow-xs mb-5">
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold mb-3">
              <span className="rounded-full bg-[#eef2ff] px-2.5 py-0.5 text-[#4f46e5] text-[11px] font-bold">
                {post.category}
              </span>
              <span className="text-[#94a3b8]">•</span>
              <span className="flex items-center gap-1 text-[#64748b] text-[11px]">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="text-[#94a3b8]">•</span>
              <span className="flex items-center gap-1 text-[#64748b] text-[11px]">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-[28px] font-black tracking-tight text-[#0f172a] leading-tight mb-2.5">
              {post.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal mb-4">
              {post.subtitle}
            </p>

            {/* Author bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#f1f5f9] pt-3.5">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar || "/ceo-naveen.png"}
                  alt={post.author.name}
                  width={36}
                  height={36}
                  className="rounded-full border border-[#4f46e5]/20 object-cover shadow-xs"
                />
                <div>
                  <div className="font-bold text-[#0f172a] text-xs sm:text-sm">
                    {post.author.name}
                  </div>
                  <div className="text-[11px] text-[#64748b]">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b]">
                <ShieldCheck size={16} className="text-[#10b981]" />
                <span>Verified Engineering Perspective</span>
              </div>
            </div>
          </header>

          {/* Featured Visual Graphic */}
          {post.featuredImage && (
            <div className="mb-8 overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white shadow-sm">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt}
                width={1200}
                height={630}
                priority
                unoptimized
                className="w-full h-auto object-cover"
              />
              <div className="bg-[#f8fafc] px-5 py-2 text-xs text-[#64748b] border-t border-[#f1f5f9] flex items-center justify-between">
                <span>Visual Blueprint: {post.title}</span>
                <span className="font-medium text-[#4f46e5]">RankVRA Strategy Series</span>
              </div>
            </div>
          )}

          {/* Table of Contents */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <div className="mb-8 rounded-[20px] border border-[#c7d2fe] bg-[#f5f7ff] p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4 text-[#4f46e5] font-bold text-sm tracking-wide uppercase">
                <BookOpen size={16} />
                <span>Table of Contents</span>
              </div>
              <ul className="space-y-2.5">
                {post.tableOfContents.map((item) => (
                  <li key={item.id} className="flex items-start gap-2.5">
                    <ChevronRight size={15} className="text-[#4f46e5] flex-shrink-0 mt-0.5" />
                    <a
                      href={`#${item.id}`}
                      className="text-sm sm:text-base font-medium text-[#1e293b] hover:text-[#4f46e5] transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Article Content */}
          <div className="rounded-[32px] border border-[#e2e8f0] bg-white p-6 sm:p-10 lg:p-12 shadow-sm mb-12">

            {/* Introduction Lead Section */}
            <div className="border-b border-[#f1f5f9] pb-8 mb-10">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#334155] font-medium">
                {post.content.introduction}
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {post.content.sections.map((section, idx) => (
                <section key={idx} id={section.id} className="scroll-mt-28 space-y-5">
                  <div className="border-l-4 border-[#4f46e5] pl-4 py-0.5">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
                      {section.heading}
                    </h2>
                    {section.subheading && (
                      <p className="text-sm sm:text-base text-[#64748b] font-medium mt-1">
                        {section.subheading}
                      </p>
                    )}
                  </div>

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-[#475569]">
                      {p}
                    </p>
                  ))}

                  {/* Bullets */}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2.5 my-4 bg-[#f8fafc] rounded-2xl p-5 border border-[#f1f5f9]">
                      {section.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={17} className="text-[#10b981] flex-shrink-0 mt-1" />
                          <span className="text-sm sm:text-base font-medium text-[#1e293b]">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Callout Box */}
                  {section.callout && (
                    <div
                      className={`my-6 rounded-2xl border p-5 sm:p-6 ${section.callout.type === "warning"
                        ? "border-[#fecaca] bg-[#fff5f5] text-[#991b1b]"
                        : section.callout.type === "tip"
                          ? "border-[#bbf7d0] bg-[#f0fdf4] text-[#166534]"
                          : "border-[#bfdbfe] bg-[#eff6ff] text-[#1e40af]"
                        }`}
                    >
                      <div className="flex items-center gap-2 font-bold text-sm mb-2">
                        {section.callout.type === "warning" ? (
                          <AlertCircle size={18} />
                        ) : section.callout.type === "tip" ? (
                          <Lightbulb size={18} />
                        ) : (
                          <Info size={18} />
                        )}
                        <span>{section.callout.title}</span>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed opacity-95">
                        {section.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Responsive Formatted Table */}
                  {section.table && (
                    <div className="my-8 overflow-hidden rounded-2xl border border-[#e2e8f0] shadow-sm">
                      {section.table.caption && (
                        <div className="bg-[#f8fafc] px-4 py-2 text-xs font-semibold text-[#64748b] border-b border-[#e2e8f0]">
                          {section.table.caption}
                        </div>
                      )}
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                          <thead>
                            <tr className="bg-[#f1f5f9] text-[#0f172a]">
                              {section.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="p-3.5 sm:p-4 font-bold border-b border-[#e2e8f0]">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#f1f5f9] bg-white">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-[#f8fafc]/80 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`p-3.5 sm:p-4 text-xs sm:text-sm text-[#334155] ${cIdx === 0 ? "font-semibold text-[#0f172a]" : ""
                                      }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Key Takeaways Callout */}
                  {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                    <div className="mt-6 rounded-2xl border border-[#c7d2fe] bg-[#f5f7ff] p-5 sm:p-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#4f46e5] mb-3 flex items-center gap-2">
                        <Sparkles size={15} />
                        Key Strategic Takeaways
                      </h3>
                      <ul className="space-y-2">
                        {section.keyTakeaways.map((takeaway, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-[#4f46e5] flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm font-medium text-[#1e293b]">
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
            <div className="mt-12 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-6 sm:p-8">
              <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-2 flex items-center gap-2">
                <Sparkles size={17} className="text-[#4f46e5]" />
                The Bottom Line &amp; Next Steps
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="rounded-[32px] border border-[#e2e8f0] bg-white p-6 sm:p-10 shadow-sm mb-12">
              <div className="flex items-center gap-2.5 text-[#4f46e5] font-bold text-xs uppercase tracking-wider mb-2">
                <HelpCircle size={17} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight mb-6">
                Questions Business Leaders Ask About {post.primaryKeyword}
              </h2>
              <div className="divide-y divide-[#f1f5f9]">
                {post.faqs.map((faq, fIdx) => (
                  <details key={fIdx} className="group py-4 first:pt-0 last:pb-0">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-sm sm:text-base text-[#0f172a] hover:text-[#4f46e5] transition-colors">
                      <span>{faq.question}</span>
                      <span className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#f1f5f9] text-[#64748b] group-open:rotate-180 transition-transform">
                        ▾
                      </span>
                    </summary>
                    <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed pl-1">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Comprehensive Author Bio Box */}
          <div className="rounded-[32px] border border-[#e2e8f0] bg-white p-6 sm:p-8 shadow-sm mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Image
              src={post.author.avatar || "/ceo-naveen.png"}
              alt={post.author.name}
              width={80}
              height={80}
              className="rounded-2xl border-2 border-[#4f46e5]/20 object-cover shadow-sm flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-bold text-base sm:text-lg text-[#0f172a]">
                  Written by {post.author.name}
                </h3>
                <span className="rounded-full bg-[#eef2ff] px-2.5 py-0.5 text-xs font-semibold text-[#4f46e5]">
                  Author
                </span>
              </div>
              <p className="text-xs font-semibold text-[#64748b] mb-3">
                {post.author.role}
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                {post.author.bio ||
                  "Naveen Panchal leads engineering and algorithmic search optimization at RankVRA, building high-speed digital engines for businesses across Rajasthan and internationally."}
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-[#4f46e5]">
                <Link href="/about" className="hover:underline flex items-center gap-1">
                  About the Author <ArrowRight size={13} />
                </Link>
                <span className="text-[#cbd5e1]">•</span>
                <Link href="/free-growth-audit" className="hover:underline">
                  Request Direct Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Action CTA Banner */}
          <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-12 text-white shadow-xl mb-16 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                Elevate Your Search Engine Visibility
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Want to implement these strategies for your business?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                RankVRA engineers high-speed web platforms, localized Google Maps dominance, and algorithmic SEO funnels that turn searchers into long-term clients.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/free-growth-audit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#4f46e5]/30 hover:bg-[#4338ca] transition-all"
                >
                  Claim Free Growth Audit
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20read%20your%20RankVRA%20article%20and%20would%20like%20to%20discuss%20our%20website%20growth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  <MessageSquare size={15} />
                  Chat with Naveen on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                    Related Growth Blueprints
                  </h2>
                  <p className="text-xs sm:text-sm text-[#64748b]">
                    Explore more strategic articles from the RankVRA engineering desk.
                  </p>
                </div>
                <Link
                  href="/blogs"
                  className="text-xs sm:text-sm font-semibold text-[#4f46e5] hover:underline flex items-center gap-1"
                >
                  View All <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blogs/${related.slug}`}
                    className="group rounded-[24px] border border-[#e2e8f0] bg-white p-5 shadow-sm transition-all hover:border-[#c7d2fe] hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      {related.featuredImage && (
                        <div className="mb-4 overflow-hidden rounded-xl border border-[#f1f5f9]">
                          <Image
                            src={related.featuredImage.url}
                            alt={related.featuredImage.alt}
                            width={400}
                            height={210}
                            unoptimized
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <span className="inline-block rounded-full bg-[#f1f5f9] px-2.5 py-1 text-[11px] font-semibold text-[#4f46e5] mb-2">
                        {related.category}
                      </span>
                      <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors line-clamp-2 leading-snug">
                        {related.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#64748b] line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-semibold text-[#4f46e5] group-hover:translate-x-1 transition-transform border-t border-[#f1f5f9] pt-3">
                      Read Article <ArrowRight size={13} className="ml-1" />
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
