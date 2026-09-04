"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-1" aria-label="Rankvra Home">
            <Image
              src="/logo-icon.png"
              alt="Rankvra"
              width={54}
              height={40}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
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
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#4f46e5] to-[#0891b2] rounded-full" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#4f46e5]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4338ca] hover:shadow-[#4f46e5]/25 hover:shadow-lg"
            >
              Book a Call
            </Link>
            <button
              className="flex items-center justify-center rounded-full border border-[#e2e8f0] bg-white p-2.5 text-[#64748b] md:hidden hover:text-[#0f172a] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-full w-full border-b border-[#e2e8f0] bg-white/98 px-6 py-6 shadow-xl backdrop-blur-xl md:hidden">
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
                      isActive ? "text-[#4f46e5]" : "text-[#475569]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[#4f46e5] px-6 py-3.5 text-sm font-semibold text-white"
              >
                Book a Strategy Call
              </Link>
            </nav>
          </div>
        )}
      </header>

      {children}

      {/* Footer */}
      <footer className="border-t border-[#e2e8f0] bg-[#f8fafc]">
        {/* CTA Band */}
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-white border border-[#e2e8f0] p-10 sm:p-14 text-center shadow-[0_24px_80px_rgba(79,70,229,0.06)]">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-[#4f46e5]/4 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-[#0891b2]/4 blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#4f46e5] uppercase">
                Ready to grow?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-gradient">remarkable</span>.
              </h2>
              <p className="mt-5 mx-auto max-w-xl text-base leading-7 text-[#475569]">
                We take on a limited number of new clients each month to ensure
                every partnership gets the focus and intensity it deserves.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#4f46e5]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4338ca] hover:shadow-[#4f46e5]/30 hover:shadow-xl"
                >
                  Book a Strategy Call
                </Link>
                <div className="flex flex-col items-center sm:items-start gap-1 text-sm font-medium">
                  <a
                    href="tel:+917297875798"
                    className="text-[#64748b] hover:text-[#4f46e5] transition-colors"
                  >
                    +91 7297875798
                  </a>
                  <a
                    href="mailto:info@rankvra.com"
                    className="text-[#64748b] hover:text-[#4f46e5] transition-colors"
                  >
                    info@rankvra.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center group" aria-label="Rankvra Home">
              <Image
                src="/logo-icon.png"
                alt="Rankvra"
                width={46}
                height={34}
                className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            <nav className="flex items-center gap-6 text-sm text-[#94a3b8]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#475569] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="text-sm text-[#94a3b8]">
              © 2025 Rankvra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
