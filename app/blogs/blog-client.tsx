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
  "Paid Advertising",
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
          post.category.includes("Web") || post.slug.includes("web") || post.slug.includes("website") || post.slug.includes("vitals");
      } else if (selectedCategory === "Paid Advertising") {
        matchesCategory =
          post.category.includes("Paid") || post.slug.includes("ads") || post.slug.includes("google-ads");
      } else if (selectedCategory === "Hospitality") {
        matchesCategory =
          post.category.includes("Hospitality") || post.slug.includes("hotel");
      } else if (selectedCategory === "B2B & Industrial") {
        matchesCategory =
          post.category.includes("B2B") || post.slug.includes("manufacturers") || post.slug.includes("export");
      } else if (selectedCategory === "Conversion & CRO") {
        matchesCategory =
          post.category.includes("Conversion") ||
          post.category.includes("CRO") ||
          post.slug.includes("leads") ||
          post.slug.includes("converting") ||
          post.slug.includes("optimization");
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
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 text-slate-900 pt-6 pb-9 lg:pt-8 lg:pb-12 border-b border-slate-200/80">
        {/* Subtle engineering grid background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-gradient-to-bl from-indigo-500/10 via-sky-500/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[75px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Publication Title & Value Prop */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>RankVRA Research &amp; Engineering Publications</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight text-slate-950 leading-[1.16]">
                Growth Blueprints.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-600">
                  Field-Tested Search Strategy.
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl font-normal">
                Field-tested guides on technical SEO, Core Web Vitals, Google Maps 3-Pack, and web architectures from engineering practice in Udaipur and global markets.
              </p>

              {/* Author & Verification Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <Image
                    src="/ceo-naveen.png"
                    alt="Naveen Panchal"
                    width={28}
                    height={28}
                    className="rounded-full border border-indigo-200 object-cover shadow-2xs"
                  />
                  <div>
                    <span className="font-bold text-slate-900 text-xs leading-none block">Naveen Panchal (lw_avee)</span>
                    <span className="text-[10px] text-slate-500">Founder &amp; Technical Director</span>
                  </div>
                </div>
                <span className="text-slate-300">•</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                  <CheckCircle2 size={12} />
                  Zero AI Filler • Primary Data
                </span>
              </div>

              {/* Publication Key Metrics */}
              <div className="pt-3 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-md">
                <div>
                  <div className="text-base sm:text-lg font-black text-slate-950">10</div>
                  <div className="text-[10px] font-semibold text-slate-500">Engineering Guides</div>
                </div>
                <div className="border-l border-slate-200/80 pl-3">
                  <div className="text-base sm:text-lg font-black text-indigo-700">&lt; 1.0s</div>
                  <div className="text-[10px] font-semibold text-slate-500">Mobile LCP Speed</div>
                </div>
                <div className="border-l border-slate-200/80 pl-3">
                  <div className="text-base sm:text-lg font-black text-emerald-700">Verified</div>
                  <div className="text-[10px] font-semibold text-slate-500">Production Code</div>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Flagship Blueprint Card */}
            {featuredPost && (
              <div className="lg:col-span-5">
                <div className="relative rounded-[22px] border border-slate-200/80 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl shadow-slate-900/5 transition-all hover:border-indigo-300 hover:shadow-2xl group">
                  <div className="flex items-center justify-between text-xs mb-2.5">
                    <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 font-bold text-indigo-800 uppercase tracking-wider text-[9px]">
                      <Sparkles size={10} />
                      Featured Strategy
                    </span>
                    <span className="text-slate-500 font-medium flex items-center gap-1 text-[10px]">
                      <Clock size={11} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link href={`/blogs/${featuredPost.slug}`} className="block">
                    <h2 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="mt-1.5 text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </Link>

                  <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-500">
                      Pillar 01 • Pricing Architecture
                    </span>
                    <Link
                      href={`/blogs/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors"
                    >
                      Read Blueprint
                      <ArrowUpRight size={13} />
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
