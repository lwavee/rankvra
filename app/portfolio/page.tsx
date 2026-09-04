import { Metadata } from "next";
import { ArrowUpRight, Code2, Globe, Star, GitFork } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";

export const metadata: Metadata = {
  title: "Portfolio | Rankvra",
  description: "Explore our latest digital projects, tools, and open-source contributions.",
};

// Next.js config to revalidate fetch requests every 1 hour (3600 seconds)
export const revalidate = 3600;

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export default async function PortfolioPage() {
  let repos: Repo[] = [];
  try {
    // Fetch repositories from the user's GitHub
    const res = await fetch("https://api.github.com/users/lwavee/repos?sort=updated&per_page=20");
    if (res.ok) {
      repos = await res.json();
      // Filter out forks if you only want original projects, 
      // but since they might be important, we'll keep them for now.
    }
  } catch (error) {
    console.error("Failed to fetch GitHub repos", error);
  }

  return (
    <SiteShell>
      <main className="min-h-screen bg-[#f8fafc]">
      {/* Header Section */}
      <section className="bg-white border-b border-[#e2e8f0] pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#4f46e5] uppercase mb-4">
              Our Work
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#475569]">
              A curated selection of our digital builds, platforms, and AI tools crafted for scale.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {repos.length === 0 ? (
            <div className="text-center py-20 text-[#64748b]">
              Loading projects or GitHub API rate limit reached. Please try again later.
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="group flex flex-col justify-between rounded-[28px] border border-[#e2e8f0] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#c7d2fe] hover:shadow-[0_24px_50px_rgba(79,70,229,0.06)]"
                >
                  <Link href={`/portfolio/${repo.name}`} className="block flex-1 cursor-pointer">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f46e5]/10 to-[#0891b2]/10 border border-[#e0e7ff]">
                        <Code2 size={20} className="text-[#4f46e5]" />
                      </div>
                      <div className="flex items-center gap-3 text-sm font-medium text-[#64748b]">
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-amber-400 fill-amber-400" />
                            <span>{repo.stargazers_count}</span>
                          </div>
                        )}
                        {repo.forks_count > 0 && (
                          <div className="flex items-center gap-1">
                            <GitFork size={14} />
                            <span>{repo.forks_count}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold tracking-tight text-[#0f172a] mb-3 group-hover:text-[#4f46e5] transition-colors">
                      {repo.name}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-[#475569] line-clamp-3 mb-6">
                      {repo.description || "No description provided."}
                    </p>
                    
                    {(repo.language || (repo.topics && repo.topics.length > 0)) && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {repo.language && (
                          <span className="inline-flex items-center rounded-md bg-[#f1f5f9] px-2.5 py-1 text-xs font-semibold text-[#475569]">
                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#4f46e5]" />
                            {repo.language}
                          </span>
                        )}
                        {repo.topics?.slice(0, 2).map((topic) => (
                          <span key={topic} className="inline-flex items-center rounded-md bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1 text-xs font-medium text-[#64748b]">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>

                  {repo.homepage && (
                    <div className="pt-6 border-t border-[#f1f5f9]">
                      <a
                        href={repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4f46e5] py-3 text-sm font-bold text-white shadow-md shadow-[#4f46e5]/20 transition-all hover:-translate-y-0.5 hover:bg-[#4338ca] hover:shadow-lg hover:shadow-[#4f46e5]/30"
                      >
                        <Globe size={16} />
                        Visit Site
                        <ArrowUpRight size={14} className="opacity-70" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
    </SiteShell>
  );
}
