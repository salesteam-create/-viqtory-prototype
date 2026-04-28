"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Recruitment Marketing", href: "/recruitment-marketing" },
  { label: "Government & Cyber", href: "/government-solutions" },
  { label: "Command Platform", href: "/command-platform" },
  { label: "Case Studies", href: "/#case-studies" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[var(--border-subtle)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-[72px] md:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/viqtory-logo.png"
            alt="VIQTORY"
            width={160}
            height={40}
            priority
            className="h-8 md:h-9 w-auto object-contain"
          />
          <span className="hidden md:inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400 border-l border-ink-200 pl-2">
            EST. 2001
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[14px] font-medium text-ink-700 transition-colors hover:text-ink-900"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink-900 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="primary" size="sm" withArrow>
            Book Discovery Call
          </Button>
        </div>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md hover:bg-ink-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[var(--border-subtle)] bg-white">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-ink-800"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="md" withArrow className="mt-2 w-full">
              Book Discovery Call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
