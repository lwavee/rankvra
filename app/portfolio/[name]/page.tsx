import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Globe, ArrowUpRight, CheckCircle2, Layers, ShieldCheck, Zap, BarChart3, Users, Sparkles } from "lucide-react";
import { SiteShell } from "@/app/components/site-shell";

interface PageProps {
  params: Promise<{ name: string }>;
}

// Rich curated project intelligence for flagship builds
const projectShowcaseData: Record<string, {
  title: string;
  category: string;
  tagline: string;
  description: string;
  liveUrl?: string;
  highlights: { title: string; desc: string; icon: string }[];
  techStack: string[];
  capabilities: string[];
  targetAudience: string;
  deliverables: string[];
}> = {
  "AMS-project": {
    title: "AMS 360 Agency Management System",
    category: "Enterprise Cloud Application",
    tagline: "An automated insurance & agency management platform built for modern brokerages.",
    description:
      "Inspired by industry-standard AMS 360 systems, this web application centralizes customer profiles, policy lifecycles, broker commissions, and administrative workflows into a unified, high-speed dashboard. It eliminates paperwork and fragmented spreadsheets by providing role-gated access for agents, agency managers, and executive administrators.",
    liveUrl: "https://ams-project-frontend.vercel.app",
    highlights: [
      {
        title: "Customer & Policy Central",
        desc: "Complete lifecycle tracking, match code indexing, and executive assignment for instant customer retrieval.",
        icon: "users",
      },
      {
        title: "Three-Tier Role Security",
        desc: "Strictly isolated dashboards and permissions tailored for Agents, Agency Directors, and Super Admins.",
        icon: "shield",
      },
      {
        title: "Executive Reports & KPI Insights",
        desc: "Live analytics for policy conversions, renewal schedules, and agent productivity metrics.",
        icon: "chart",
      },
      {
        title: "Modern API-Driven Architecture",
        desc: "Engineered with a responsive Next.js frontend and ultra-fast asynchronous Python/FastAPI backend.",
        icon: "zap",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI (Python)", "PostgreSQL / Supabase", "JWT Auth"],
    capabilities: [
      "Automated policy renewal tracking and reminder workflows",
      "Customer match code generator and unified record lookup",
      "Role-gated security preventing unauthorized data export",
      "Real-time operational status dashboards for brokerage leaders",
      "Scalable REST API endpoints compliant with OpenAPI standards",
    ],
    targetAudience: "Insurance Agencies, Financial Brokerages, and Enterprise Service Providers.",
    deliverables: [
      "Production-ready responsive web application",
      "Role-based authentication & session governance",
      "Custom analytics dashboard with live data feeds",
      "Scalable relational database schema and API integration",
    ],
  },
  "sarala-ai": {
    title: "Sarala AI Platform",
    category: "AI & Intelligence Tool",
    tagline: "Intelligent conversational and automation assistant for streamlined workflows.",
    description:
      "Sarala AI is an advanced artificial intelligence interface built to automate complex query responses, assist users in real-time information retrieval, and boost team operational speed using cutting-edge LLM models and intuitive UI components.",
    liveUrl: "https://sarala-ai-pi.vercel.app",
    highlights: [
      {
        title: "Real-time AI Processing",
        desc: "Instant responses powered by modern generative models and low-latency API routes.",
        icon: "zap",
      },
      {
        title: "Intuitive Conversational UI",
        desc: "Carefully crafted chat interface designed for seamless knowledge transfer and query execution.",
        icon: "sparkles",
      },
      {
        title: "Enterprise-grade Security",
        desc: "Encrypted interactions and secure API tokens safeguarding proprietary business data.",
        icon: "shield",
      },
    ],
    techStack: ["Next.js", "TypeScript", "OpenAI / LLM APIs", "Tailwind CSS", "Vercel Cloud"],
    capabilities: [
      "Context-aware dialogue management and conversation memory",
      "Smart document analysis and summary generation",
      "Multi-device responsive layout with dark-mode aesthetic",
    ],
    targetAudience: "Growth teams, customer support operations, and founders wanting instant AI capabilities.",
    deliverables: [
      "Cloud-hosted interactive AI portal",
      "Real-time streaming response UI",
      "API orchestration and rate-limit handling",
    ],
  },
  "CRM": {
    title: "Client Acquisition & CRM Engine",
    category: "Sales Automation & CRM",
    tagline: "High-performance customer relationship management engine to convert leads into revenue.",
    description:
      "A purpose-built CRM platform designed to capture, nurture, and track client interactions from initial outreach to deal closing. Offers custom lead pipeline stages, automated reminders, and client activity logs.",
    highlights: [
      {
        title: "Lead Pipeline Tracking",
        desc: "Visual funnel stages to monitor incoming client prospects and deal status.",
        icon: "chart",
      },
      {
        title: "Automated Follow-ups",
        desc: "Scheduled reminders ensuring no sales opportunity falls through the cracks.",
        icon: "zap",
      },
      {
        title: "Activity History",
        desc: "Comprehensive client interaction timelines including notes, emails, and calls.",
        icon: "users",
      },
    ],
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Cloud Database"],
    capabilities: [
      "End-to-end prospect tracking across custom pipeline columns",
      "Client profile management with custom notes and contact logs",
      "Actionable analytics detailing conversion velocity and deal values",
    ],
    targetAudience: "Digital marketing agencies, B2B sales teams, and consulting firms.",
    deliverables: [
      "Fully customized CRM pipeline dashboard",
      "Lead scoring and client interaction hub",
    ],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = await params;
  const project = projectShowcaseData[name];
  return {
    title: `${project ? project.title : name} | Rankvra Portfolio`,
    description: project ? project.tagline : `Explore the work and features of ${name} built by Rankvra.`,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  // In Next.js 15/16, params is a Promise that must be awaited
  const { name } = await params;

  let repoData: any = null;
  try {
    const res = await fetch(`https://api.github.com/repos/lwavee/${name}`, {
      headers: { "User-Agent": "Rankvra-Portfolio-App" },
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      repoData = await res.json();
    }
  } catch (err) {
    console.warn("GitHub fetch note:", err);
  }

  // Combine curated intelligence with live repository metadata
  const curated = projectShowcaseData[name];
  const title = curated?.title || repoData?.name || name;
  const category = curated?.category || (repoData?.language ? `${repoData.language} Solution` : "Digital Platform");
  const tagline = curated?.tagline || repoData?.description || "High-performance digital project built for scale.";
  const description = curated?.description || repoData?.description || "A custom web system developed to streamline business operations, elevate digital performance, and deliver measurable results.";
  
  // Prefer curated live URL, then GitHub homepage
  const liveUrl = curated?.liveUrl || repoData?.homepage || null;
  const techStack = curated?.techStack || (repoData?.language ? [repoData.language, "Next.js", "TypeScript", "Tailwind CSS"] : ["TypeScript", "Next.js", "Modern Web Architecture"]);
  const highlights = curated?.highlights || [
    {
      title: "Optimized Performance",
      desc: "Architected for high reliability, minimal load times, and fluid user interactions across all devices.",
      icon: "zap",
    },
    {
      title: "Clean Modular Code",
      desc: "Built using modern component-driven engineering principles for effortless future scaling.",
      icon: "layers",
    },
    {
      title: "Secure by Design",
      desc: "Protected with industry best practices in data validation, route shielding, and safe endpoints.",
      icon: "shield",
    },
  ];

  return (
    <SiteShell>
      <main className="min-h-screen bg-[#f8fafc] pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4f46e5] hover:text-[#4338ca] transition-colors"
            >
              <ArrowLeft size={16} />
              Back to All Projects
            </Link>
          </div>

          {/* Hero Overview Card */}
          <div className="rounded-[32px] border border-[#e2e8f0] bg-white p-8 sm:p-12 shadow-[0_24px_60px_rgba(79,70,229,0.05)] mb-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-[#f1f5f9]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5]/10 px-3.5 py-1 text-xs font-bold text-[#4f46e5] uppercase tracking-wider mb-4">
                  <Sparkles size={13} />
                  {category}
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-4">
                  {title}
                </h1>
                <p className="text-lg text-[#475569] max-w-2xl font-medium leading-relaxed">
                  {tagline}
                </p>
              </div>

              {/* Action: Visit Site button (Only option shown, as requested) */}
              {liveUrl && (
                <div className="flex-shrink-0 pt-2">
                  <a
                    href={liveUrl.startsWith("http") ? liveUrl : `https://${liveUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-2xl bg-[#4f46e5] px-7 py-4 text-base font-bold text-white shadow-xl shadow-[#4f46e5]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4338ca] hover:shadow-2xl hover:shadow-[#4f46e5]/35"
                  >
                    <Globe size={18} />
                    Visit Live Website
                    <ArrowUpRight size={18} className="opacity-80" />
                  </a>
                </div>
              )}
            </div>

            {/* About / Deep-Dive Explanation */}
            <div className="pt-8">
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">Project Summary & Purpose</h2>
              <p className="text-base text-[#475569] leading-relaxed mb-8">
                {description}
              </p>

              {/* Technologies Applied */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#94a3b8] mb-3">
                  Technologies & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-xl bg-[#f1f5f9] px-3.5 py-1.5 text-xs font-semibold text-[#334155] border border-[#e2e8f0]"
                    >
                      <span className="mr-2 h-2 w-2 rounded-full bg-[#4f46e5]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights & Architecture Grid */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
              How This System Works
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] border border-[#e2e8f0] bg-white p-7 shadow-sm transition-all hover:border-[#c7d2fe] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f46e5]/10 text-[#4f46e5] mb-4">
                    {item.icon === "users" && <Users size={22} />}
                    {item.icon === "shield" && <ShieldCheck size={22} />}
                    {item.icon === "chart" && <BarChart3 size={22} />}
                    {item.icon === "layers" && <Layers size={22} />}
                    {item.icon === "sparkles" && <Sparkles size={22} />}
                    {(!item.icon || item.icon === "zap") && <Zap size={22} />}
                  </div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities & What this platform delivers */}
          {curated?.capabilities && (
            <div className="rounded-[28px] border border-[#e2e8f0] bg-white p-8 sm:p-10 shadow-sm mb-10">
              <h2 className="text-xl font-bold text-[#0f172a] mb-5">
                Core Capabilities & Features
              </h2>
              <div className="grid gap-3.5 sm:grid-cols-2">
                {curated.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#4f46e5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#475569] font-medium leading-normal">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Target Audience & Deliverables Card */}
          {curated?.targetAudience && (
            <div className="grid gap-6 sm:grid-cols-2 mb-10">
              <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-7 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748b] mb-2">
                  Target Audience
                </h3>
                <p className="text-base font-semibold text-[#0f172a]">
                  {curated.targetAudience}
                </p>
              </div>
              <div className="rounded-[24px] border border-[#e2e8f0] bg-white p-7 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748b] mb-2">
                  Project Status
                </h3>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-base font-semibold text-emerald-700">
                    Live & Operational
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Live Site Banner */}
          {liveUrl && (
            <div className="rounded-[28px] bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#818cf8] mb-1">
                  Ready to test?
                </p>
                <h3 className="text-2xl font-bold">Experience {title} in action</h3>
                <p className="text-sm text-[#94a3b8] mt-1">
                  Open the live production deployment directly in your browser.
                </p>
              </div>
              <a
                href={liveUrl.startsWith("http") ? liveUrl : `https://${liveUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0f172a] hover:bg-[#f1f5f9] transition-all flex-shrink-0 shadow-md"
              >
                <Globe size={16} />
                Open Live Web App
                <ArrowUpRight size={16} />
              </a>
            </div>
          )}

        </div>
      </main>
    </SiteShell>
  );
}
