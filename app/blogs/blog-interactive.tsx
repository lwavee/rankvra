"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Check, Copy, Share2, BookOpen, ChevronRight } from "lucide-react";
import { TableOfContentItem } from "./data";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrolled = (totalScroll / windowHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3.5px] z-50 bg-slate-100/50 backdrop-blur-xs">
      <div
        className="h-full bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 transition-all duration-150 ease-out will-change-[width]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function InteractiveTOC({ items }: { items: TableOfContentItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <div className="rounded-[24px] border border-indigo-100 bg-gradient-to-br from-indigo-50/50 via-white to-slate-50/50 p-6 sm:p-7 shadow-xs">
      <div className="flex items-center gap-2 mb-4 text-[#4f46e5] font-bold text-xs uppercase tracking-wider">
        <BookOpen size={16} />
        <span>Table of Contents</span>
      </div>
      <ul className="space-y-2">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`group flex items-start gap-2.5 rounded-xl px-3 py-2 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white font-semibold shadow-xs shadow-indigo-600/20 translate-x-1"
                    : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/60 font-medium"
                }`}
              >
                <ChevronRight
                  size={14}
                  className={`mt-1 flex-shrink-0 transition-transform ${
                    isActive ? "text-white translate-x-0.5" : "text-indigo-400 group-hover:translate-x-0.5"
                  }`}
                />
                <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function FloatingReadingToolbar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          url: window.location.href,
        });
      } catch {
        handleCopy();
      }
    } else {
      handleCopy();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 animate-fadeIn">
      {/* Share / Copy Button */}
      <button
        onClick={handleShare}
        aria-label="Share article"
        className="group relative flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-md transition-all hover:border-indigo-300 hover:bg-white hover:text-indigo-600 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
      >
        {copied ? (
          <>
            <Check size={14} className="text-emerald-600 animate-scaleIn" />
            <span className="text-emerald-600 font-bold">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 size={14} className="text-indigo-600 group-hover:rotate-12 transition-transform" />
            <span>Share Guide</span>
          </>
        )}
      </button>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition-all hover:bg-indigo-600 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
}
