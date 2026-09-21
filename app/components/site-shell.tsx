"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowUpRight, MessageCircle, MapPin, Mail, Globe } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries/insurance", label: "Insurance" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/markets", label: "Markets" },
  { href: "/blogs", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0f172a] flex flex-col justify-between">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group py-1" aria-label="RankVRA Home">
            <Image
              src="/logo-icon.png"
              alt="RankVRA - Web Development & Growth Company"
              width={54}
              height={40}
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="text-xl font-bold tracking-tight text-[#0f172a]">
              Rank<span className="text-[#4f46e5]">VRA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-0.5 transition-colors duration-200 ${
                    isActive
                      ? "text-[#4f46e5] font-semibold"
                      : "text-[#64748b] hover:text-[#0f172a]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4f46e5] rounded-full" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917297875798"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f172a] bg-[#f1f5f9] hover:bg-[#e2e8f0] px-3.5 py-2 rounded-full transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#16a34a]" />
              WhatsApp
            </a>
            <Link
              href="/free-website-audit"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#4f46e5] px-4.5 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#4338ca] hover:shadow-md"
            >
              Free Website Audit
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <button
              className="flex items-center justify-center rounded-full border border-[#e2e8f0] bg-white p-2 text-[#64748b] md:hidden hover:text-[#0f172a] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-full w-full border-b border-[#e2e8f0] bg-white px-6 py-6 shadow-xl backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium transition-colors ${
                      isActive ? "text-[#4f46e5] font-semibold" : "text-[#475569]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  href="/free-website-audit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-semibold text-white"
                >
                  Get a Free Website Audit
                </Link>
                <a
                  href="https://wa.me/917297875798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  WhatsApp Us (+91 7297875798)
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Clean & Authoritative Global Footer */}
      <footer className="border-t border-slate-200 bg-[#f8fafc] text-sm text-slate-600">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Col 1: Brand & Positioning (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="inline-flex items-center gap-2.5 group" aria-label="RankVRA Home">
                <Image
                  src="/logo-icon.png"
                  alt="RankVRA"
                  width={42}
                  height={32}
                  className="h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
                <span className="text-xl font-black tracking-tight text-[#0f172a]">
                  Rank<span className="text-[#4f46e5]">VRA</span>
                </span>
              </Link>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                India-based web development, custom software engineering, and search growth systems serving national and international businesses.
              </p>
              <div className="space-y-1.5 text-xs text-slate-600">
                <p className="flex items-center gap-2">
                  <Globe size={13} className="text-[#4f46e5] shrink-0" />
                  <span>Serving USA, Canada, UK, India &amp; Global Markets</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#4f46e5] shrink-0" />
                  <span>Headquarters: Udaipur, Rajasthan 313001, India</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={13} className="text-[#4f46e5] shrink-0" />
                  <a href="mailto:info@rankvra.com" className="hover:text-[#4f46e5] transition-colors">info@rankvra.com</a>
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://www.instagram.com/lw_avee/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@Lw_avee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="https://github.com/lwavee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Col 2: Services (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">Core Services</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><Link href="/services/web-development" className="hover:text-[#4f46e5] transition-colors">Web Development</Link></li>
                <li><Link href="/services/website-design" className="hover:text-[#4f46e5] transition-colors">Website Design</Link></li>
                <li><Link href="/services/website-redesign" className="hover:text-[#4f46e5] transition-colors">Website Redesign</Link></li>
                <li><Link href="/services/web-application-development" className="hover:text-[#4f46e5] transition-colors">Custom Web Apps</Link></li>
                <li><Link href="/services/technical-seo" className="hover:text-[#4f46e5] transition-colors">Technical SEO</Link></li>
                <li><Link href="/services/international-seo" className="hover:text-[#4f46e5] transition-colors">International SEO</Link></li>
              </ul>
            </div>

            {/* Col 3: Markets & Industries (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">Markets &amp; Industries</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><Link href="/markets/usa" className="hover:text-[#4f46e5] transition-colors">United States Market</Link></li>
                <li><Link href="/markets/uk" className="hover:text-[#4f46e5] transition-colors">United Kingdom Market</Link></li>
                <li><Link href="/markets/canada" className="hover:text-[#4f46e5] transition-colors">Canada Market</Link></li>
                <li><Link href="/markets/india" className="hover:text-[#4f46e5] transition-colors">India (Delhi NCR &amp; Metros)</Link></li>
                <li><Link href="/industries/insurance" className="hover:text-[#4f46e5] transition-colors font-medium text-indigo-600">Insurance Technology</Link></li>
                <li><Link href="/case-studies" className="hover:text-[#4f46e5] transition-colors">Featured Case Studies</Link></li>
              </ul>
            </div>

            {/* Col 4: Direct Founder Desk (3 cols) */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#0f172a]">Direct Founder Desk</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-3.5">
                  Direct architectural discovery and project planning with Founder Naveen Panchal.
                </p>
                <a
                  href="https://wa.me/917297875798?text=Hi%20Naveen,%20I%20want%20to%20discuss%20a%20project%20with%20RankVRA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#16a34a] hover:bg-[#15803d] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp: +91 7297875798</span>
                </a>
                <div className="mt-3 text-center">
                  <Link href="/free-website-audit" className="text-[11px] font-semibold text-indigo-600 hover:underline">
                    Or request a Free Website Audit &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Strip */}
          <div className="mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} RankVRA. All rights reserved. Based in India, serving global businesses.</p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
              <a href="/sitemap.xml" className="hover:text-slate-800 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
