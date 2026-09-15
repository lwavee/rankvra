"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Sparkles,
  Search,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { BlogPost } from "./data";

interface BlogClientProps {
  initialPosts: BlogPost[];
}

const CATEGORIES = [
  "All Guides",
  "Search Strategy",
  "Local & Udaipur",
  "Web Engineering",
  "Hospitality",
  "B2B & Industrial",
  "Conversion & CRO",
];

export function BlogClient({ initialPosts }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Guides");
  const [searchQuery, setSearchQuery] = useState("");

  // Featured flagship post is Post 2 (SEO Cost & ROI) or Post 1 (SEO Agency)
  const featuredPost = initialPosts[1] || initialPosts[0];

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // Category match
      let matchesCategory = true;
      if (selectedCategory === "Local & Udaipur") {
        matchesCategory =
          post.slug.includes("udaipur") ||
          post.category.includes("Local") ||
          post.title.includes("Udaipur");
      } else if (selectedCategory === "Web Engineering") {
        matchesCategory =
          post.category.includes("Web") || post.slug.includes("web") || post.slug.includes("website");
      } else if (selectedCategory === "Hospitality") {
        matchesCategory =
          post.category.includes("Hospitality") || post.slug.includes("hotel");
      } else if (selectedCategory === "B2B & Industrial") {
        matchesCategory =
          post.category.includes("B2B") || post.slug.includes("manufacturers");
      } else if (selectedCategory === "Conversion & CRO") {
        matchesCategory =
          post.category.includes("Conversion") ||
          post.category.includes("CRO") ||
          post.slug.includes("leads") ||
          post.slug.includes("converting");
      } else if (selectedCategory !== "All Guides") {
        matchesCategory = post.category === selectedCategory;
      }

      // Search query match
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Editorial Hero Masthead */}
      <section className="relative overflow-hidden border-b border-[#e2e8f0] bg-gradient-to-b from-[#f8fafc] via-white to-white pt-10 pb-12 sm:pt-14 sm:pb-16">
        {/* Subtle engineering grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Ambient gradient glow spheres */}
        <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-[#4f46e5]/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-[#06b6d4]/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Publication Title & Value Prop */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c7d2fe] bg-[#eef2ff] px-4 py-1.5 text-xs font-bold tracking-wide text-[#4f46e5] shadow-sm">
                <ShieldCheck size={14} className="text-[#4f46e5]" />
                <span>RankVRA Research &amp; Engineering Publications</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.12]">
                Practical Playbooks for <span className="text-gradient">Real Business</span> Growth
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                Field-tested guides on search engine optimization, Core Web Vitals, Google Maps 3-Pack dominance, and modern web architectures. Written from first-hand engineering experience in Udaipur and global markets.
              </p>

              {/* Author & Verification Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-[#64748b]">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/ceo-naveen.png"
                    alt="Naveen Panchal"
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-[#4f46e5]/30 object-cover shadow-sm"
                  />
                  <div>
                    <span className="font-bold text-[#0f172a] block">Naveen Panchal (lw_avee)</span>
                    <span className="text-[11px] text-[#64748b]">Founder &amp; Technical Director</span>
                  </div>
                </div>
                <span className="hidden sm:inline text-[#cbd5e1]">•</span>
                <span className="inline-flex items-center gap-1.5 text-[#10b981] font-semibold">
                  <CheckCircle2 size={13} />
                  Zero AI Filler • 100% Primary Data
                </span>
                <span className="hidden sm:inline text-[#cbd5e1]">•</span>
                <span className="text-[#64748b]">Updated for 2026 AI Search &amp; SGE</span>
              </div>

              {/* Publication Key Metrics */}
              <div className="pt-4 border-t border-[#f1f5f9] grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#0f172a]">10</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">In-Depth Guides</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#4f46e5]">&lt; 1.0s</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">Mobile LCP Speed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#0f172a]">Udaipur</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">HQ &amp; Global Scope</div>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Flagship Blueprint Card */}
            {featuredPost && (
              <div className="lg:col-span-5">
                <div className="relative rounded-[28px] border border-[#c7d2fe] bg-white p-6 shadow-xl shadow-[#4f46e5]/5 transition-all hover:border-[#818cf8] hover:shadow-2xl hover:shadow-[#4f46e5]/10 group">
                  <div className="flex items-center justify-between text-xs mb-3.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef2ff] px-3 py-1 font-bold text-[#4f46e5] uppercase tracking-wider text-[10px]">
                      <Sparkles size={12} />
                      Featured Strategy
                    </span>
                    <span className="text-[#64748b] font-medium flex items-center gap-1 text-[11px]">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link href={`/blogs/${featuredPost.slug}`} className="block">
                    <div className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-slate-900 aspect-[1200/630] mb-4">
                      <Image
                        src={featuredPost.featuredImage.url}
                        alt={featuredPost.featuredImage.alt}
                        width={600}
                        height={315}
                        unoptimized
                        priority
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h2 className="text-lg sm:text-xl font-extrabold text-[#0f172a] group-hover:text-[#4f46e5] transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="mt-2 text-xs sm:text-sm text-[#475569] line-clamp-2 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </Link>

                  <div className="mt-5 pt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#64748b]">
                      Pillar 01 • Pricing Architecture
                    </span>
                    <Link
                      href={`/blogs/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#4f46e5] hover:text-[#3730a3]"
                    >
                      Read Full Blueprint <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Filter & Search Bar Section */}
      <section className="sticky top-[69px] z-30 border-b border-[#e2e8f0] bg-white/95 backdrop-blur-md py-3.5 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-[#4f46e5] text-white shadow-sm shadow-[#4f46e5]/20"
                        : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#0f172a]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-72">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles or topics..."
                className="w-full rounded-full border border-[#e2e8f0] bg-[#f8fafc] pl-10 pr-4 py-1.5 text-xs text-[#0f172a] placeholder-[#94a3b8] focus:border-[#4f46e5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94a3b8] hover:text-[#0f172a]"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Main Blog Articles Grid */}
      <section className="py-12 sm:py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight">
                {selectedCategory === "All Guides" ? "All Engineering Publications" : `${selectedCategory} Blueprints`}
              </h2>
              <p className="text-xs sm:text-sm text-[#64748b] mt-1">
                Showing {filteredPosts.length} of {initialPosts.length} strategic articles
              </p>
            </div>

            {selectedCategory !== "All Guides" && (
              <button
                onClick={() => setSelectedCategory("All Guides")}
                className="text-xs font-semibold text-[#4f46e5] hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-12 text-center my-8">
              <BookOpen size={36} className="mx-auto text-[#94a3b8] mb-3" />
              <h3 className="text-lg font-bold text-[#0f172a]">No matching articles found</h3>
              <p className="text-sm text-[#64748b] mt-1">
                Try adjusting your search query or clear the filter to see all guides.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Guides");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#4f46e5] px-5 py-2 text-xs font-semibold text-white hover:bg-[#4338ca]"
              >
                Show All Articles
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((blog) => (
                <article
                  key={blog.id}
                  className="group flex flex-col justify-between rounded-[24px] bg-white border border-[#e2e8f0] shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(79,70,229,0.09)] hover:border-[#c7d2fe] overflow-hidden"
                >
                  <div>
                    {/* Featured Image Thumbnail */}
                    {blog.featuredImage && (
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="block overflow-hidden bg-slate-900 border-b border-[#e2e8f0] aspect-[1200/630]"
                      >
                        <Image
                          src={blog.featuredImage.url}
                          alt={blog.featuredImage.alt}
                          width={600}
                          height={315}
                          unoptimized
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="rounded-full bg-[#eef2ff] px-3 py-1 font-semibold text-[#4f46e5]">
                          {blog.category}
                        </span>
                        <span className="flex items-center gap-1 text-[#64748b] font-medium text-[11px]">
                          <Clock size={12} />
                          {blog.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold leading-snug text-[#0f172a] group-hover:text-[#4f46e5] transition-colors line-clamp-2">
                        <Link href={`/blogs/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      <p className="mt-2.5 line-clamp-3 text-xs sm:text-sm leading-relaxed text-[#475569]">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between border-t border-[#f1f5f9] pt-4">
                      <div className="flex items-center gap-2.5">
                        <Image
                          src={blog.author.avatar || "/ceo-naveen.png"}
                          alt={blog.author.name}
                          width={32}
                          height={32}
                          className="rounded-full border border-[#4f46e5]/30 object-cover"
                        />
                        <div>
                          <div className="text-xs font-bold text-[#0f172a]">{blog.author.name}</div>
                          <div className="text-[11px] text-[#64748b]">{blog.date}</div>
                        </div>
                      </div>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="inline-flex items-center text-xs font-bold text-[#4f46e5] group-hover:translate-x-1 transition-transform"
                      >
                        Read <ArrowRight size={13} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Growth Audit CTA Banner */}
      <section className="bg-white py-16 border-t border-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#818cf8]">
                Personalized Search Engineering
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight">
                Want these strategies implemented on your website?
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
                  <ArrowUpRight size={16} />
                </Link>
                <a
                  href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20read%20your%20RankVRA%20publications%20and%20would%20like%20to%20discuss%20growing%20our%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all"
                >
                  WhatsApp Founder Naveen (+91 7297875798)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
