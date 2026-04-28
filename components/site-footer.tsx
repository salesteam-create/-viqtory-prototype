import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";

const FOOTER_GROUPS = [
  {
    title: "Solutions",
    links: [
      { label: "Recruitment Marketing", href: "/recruitment-marketing" },
      { label: "Government & Cybersecurity", href: "/government-solutions" },
      { label: "Command Platform", href: "/command-platform" },
      { label: "Consumer Marketing", href: "#" },
      { label: "Franchise Marketing", href: "#" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "G.I. Jobs®", href: "#" },
      { label: "Military Spouse®", href: "#" },
      { label: "Military Friendly®", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "#" },
      { label: "Industry Reports", href: "#" },
      { label: "White Papers", href: "#" },
      { label: "Press Releases", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-ink-900 text-ink-200 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <div className="flex items-center">
              <Image
                src="/viqtory-logo.png"
                alt="VIQTORY"
                width={180}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-300">
              The data and marketing layer for the U.S. military community.
              22M+ veterans, active duty, and military spouses across G.I. Jobs®,
              Military Spouse®, and Military Friendly®.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
                SDVOSB Certified
              </span>
              <span className="h-px w-8 bg-white/20" />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
                Meta Certified
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <Eyebrow variant="light" className="!text-white/60">
                  {group.title}
                </Eyebrow>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-ink-200 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-[12px] text-ink-400 font-mono">
            © 2026 VIQTORY, Inc. — All rights reserved. Pittsburgh, PA.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[12px] text-ink-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-[12px] text-ink-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-[12px] text-ink-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
