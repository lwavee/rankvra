"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blog" },
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
              alt="RankVRA - Web Development & SEO Agency"
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
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
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
              href="/free-growth-audit"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#4f46e5] px-4.5 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#4338ca] hover:shadow-md"
            >
              Free Growth Audit
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
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  href="/free-growth-audit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#4f46e5] px-6 py-3 text-sm font-semibold text-white"
                >
                  Get Free Growth Audit
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

      {/* Footer */}
      <footer className="border-t border-[#e2e8f0] bg-[#f8fafc] text-sm text-[#475569]">
        {/* Main Footer Links */}
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Col 1: Brand & Contact */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-3" aria-label="RankVRA Home">
                <Image
                  src="/logo-icon.png"
                  alt="RankVRA - Web Development, SEO & Digital Growth Agency"
                  width={46}
                  height={34}
                  className="h-8 w-auto object-contain"
                />
                <span className="text-xl font-bold tracking-tight text-[#0f172a]">
                  Rank<span className="text-[#4f46e5]">VRA</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-[#64748b] max-w-sm">
                RankVRA helps businesses build high-converting websites, improve search visibility and generate qualified enquiries through SEO, digital marketing and technology. Engineering headquarters in Udaipur, Rajasthan.
              </p>
              <div className="space-y-1.5 text-xs text-[#64748b] pt-1">
                <p><strong>Founder &amp; Technical Lead:</strong> Naveen Panchal (lw_avee)</p>
                <p><strong>Headquarters:</strong> Udaipur, Rajasthan 313001, India</p>
                <p><strong>Serving:</strong> India (Nationwide) &bull; Global (US, UK, UAE)</p>
                <p><strong>Direct Call / WhatsApp:</strong> <a href="tel:+917297875798" className="text-[#0f172a] font-semibold hover:text-[#4f46e5]">+91 7297875798</a></p>
                <p><strong>Inquiries:</strong> <a href="mailto:info@rankvra.com" className="text-[#0f172a] font-semibold hover:text-[#4f46e5]">info@rankvra.com</a></p>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://www.instagram.com/lw_avee/?__pwa=1" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-600 hover:text-indigo-600">Instagram</a>
                <a href="https://www.youtube.com/@Lw_avee" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-600 hover:text-indigo-600">YouTube</a>
                <a href="https://www.facebook.com/lwavee?locale=hi_IN" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-600 hover:text-indigo-600">Facebook</a>
                <a href="https://github.com/lwavee" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-600 hover:text-indigo-600">GitHub</a>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">Core Services</h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/services/web-development" className="hover:text-[#4f46e5] transition-colors">Web Development</Link></li>
                <li><Link href="/services/seo" className="hover:text-[#4f46e5] transition-colors">Technical &amp; Local SEO</Link></li>
                <li><Link href="/services/local-seo" className="hover:text-[#4f46e5] transition-colors">Maps 3-Pack SEO</Link></li>
                <li><Link href="/services/google-ads" className="hover:text-[#4f46e5] transition-colors">Google Ads (PPC)</Link></li>
                <li><Link href="/services/digital-marketing" className="hover:text-[#4f46e5] transition-colors">Digital Marketing</Link></li>
                <li><Link href="/services/ai-automation" className="hover:text-[#4f46e5] transition-colors">AI &amp; Automation</Link></li>
              </ul>
            </div>

            {/* Col 3: Industry Solutions */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">Industries</h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/industries/hotels" className="hover:text-[#4f46e5] transition-colors">Hotels &amp; Resorts</Link></li>
                <li><Link href="/industries/manufacturers" className="hover:text-[#4f46e5] transition-colors">Manufacturers</Link></li>
                <li><Link href="/industries/exporters" className="hover:text-[#4f46e5] transition-colors">Exporters &amp; Marble</Link></li>
                <li><Link href="/industries/clinics" className="hover:text-[#4f46e5] transition-colors">Clinics &amp; Healthcare</Link></li>
                <li><Link href="/b2b-lead-generation" className="hover:text-[#4f46e5] transition-colors">B2B Lead Generation</Link></li>
                <li><Link href="/international-seo" className="hover:text-[#4f46e5] transition-colors">International SEO</Link></li>
              </ul>
            </div>

            {/* Col 4: Presence & Locations */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">Locations</h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/locations/udaipur" className="text-[#4f46e5] font-semibold hover:underline">Udaipur (HQ)</Link></li>
                <li><Link href="/locations/rajasthan" className="hover:text-[#4f46e5] transition-colors">Rajasthan Regional</Link></li>
                <li><Link href="/locations/india" className="hover:text-[#4f46e5] transition-colors">India (Nationwide)</Link></li>
                <li><Link href="/international-seo" className="hover:text-[#4f46e5] transition-colors">US, UK &amp; UAE Global</Link></li>
                <li><Link href="/case-studies" className="text-[#4f46e5] font-semibold hover:underline">Client Case Studies</Link></li>
                <li><Link href="/portfolio" className="hover:text-[#4f46e5] transition-colors">Developer Projects &amp; R&amp;D</Link></li>
                <li><Link href="/free-growth-audit" className="text-[#4f46e5] font-semibold hover:underline">Free Website Audit</Link></li>
              </ul>
            </div>

            {/* Col 5: Blog & Strategic Guides */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">Blog &amp; Guides</h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/blogs" className="text-[#4f46e5] font-bold hover:underline flex items-center gap-1">All Blog Articles <ArrowUpRight className="w-3 h-3" /></Link></li>
                <li><Link href="/blogs/seo-agency-udaipur" className="hover:text-[#4f46e5] transition-colors">SEO Agency in Udaipur</Link></li>
                <li><Link href="/blogs/seo-cost-udaipur" className="hover:text-[#4f46e5] transition-colors">SEO Cost &amp; Pricing</Link></li>
                <li><Link href="/blogs/hotel-marketing-udaipur-direct-bookings" className="hover:text-[#4f46e5] transition-colors">Direct Hotel Bookings</Link></li>
                <li><Link href="/blogs/web-development-company-udaipur" className="hover:text-[#4f46e5] transition-colors">Web Development Guide</Link></li>
                <li><Link href="/blogs/local-seo-udaipur" className="hover:text-[#4f46e5] transition-colors">Local SEO 3-Pack Guide</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Strip */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]">
            <p>© {new Date().getFullYear()} RankVRA. All rights reserved. Registered in Udaipur, Rajasthan.</p>
            <div className="flex items-center gap-6">
              <Link href="/blogs" className="text-[#4f46e5] font-semibold hover:underline">Blog</Link>
              <Link href="/privacy-policy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
              <a href="/sitemap.xml" className="hover:text-slate-600 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
