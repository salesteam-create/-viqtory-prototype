"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useCountUp } from "@/lib/use-count-up";
import { Section, Container } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { PipelineEstimator } from "@/components/pipeline-estimator";
import {
  Target,
  Building2,
  ShieldCheck,
  ArrowUpRight,
  Database,
  Users,
  Layers,
  Activity,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const viewportOnce = { once: true, margin: "-100px" } as const;

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <DataAssetSection />
      <DataBar />
      <BuyerPaths />
      <EstimatorSection />
      <BrandsSection />
      <CaseStudies />
      <CommandPlatformTeaser />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden h-[70vh] md:h-[90vh] min-h-[560px] bg-ink-900">
      <Image
        src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=2400&q=85"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-hero-cinematic-overlay pointer-events-none" />

      <div className="relative h-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col justify-end pb-14 md:pb-20">
        <div className="max-w-4xl">
          <div className="reveal" style={{ animationDelay: "0ms" }}>
            <Eyebrow variant="electric">
              The Military Talent & Data Engine
            </Eyebrow>
          </div>

          <h1
            className="reveal mt-5 font-display text-display-2xl font-medium text-white leading-[1.02]"
            style={{ animationDelay: "120ms" }}
          >
            Reach the people{" "}
            <span className="italic font-normal text-electric">civilian</span>
            <br />
            recruiters can&apos;t.
          </h1>

          <p
            className="reveal mt-7 max-w-2xl text-[18px] md:text-[19px] leading-[1.55] text-white/70"
            style={{ animationDelay: "240ms" }}
          >
            Twenty-three years of first-party data on{" "}
            <span className="text-white font-medium">
              22M+ veterans, active duty service members, and military spouses
            </span>
            . The marketing layer behind every Fortune 500 military hiring,
            consumer, and government program.
          </p>

          <div
            className="reveal mt-9 flex flex-col sm:flex-row gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Button
              variant="secondary"
              size="lg"
              withArrow
              className="!bg-white !text-ink-900 hover:!bg-electric-100"
            >
              Estimate your talent pipeline
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="!text-white !border !border-white/30 hover:!bg-white/10"
            >
              Talk to a strategist
            </Button>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/70 animate-scroll-hint pointer-events-none"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
          Scroll
        </span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}

function TrustedPartners() {
  const partners = [
    { name: "Partner 1", src: "/trusted-partners/partner-1.png" },
    { name: "Partner 2", src: "/trusted-partners/partner-2.png" },
    { name: "Partner 3", src: "/trusted-partners/partner-3.png" },
    { name: "Partner 4", src: "/trusted-partners/partner-4.png" },
    { name: "Partner 5", src: "/trusted-partners/partner-5.png" },
  ];
  // Duplicate so the translateX(-50%) loop is seamless
  const track = [...partners, ...partners];
  return (
    <section className="bg-white border-b border-[var(--border-subtle)] py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400 shrink-0">
            Trusted partner to
          </p>
          <div className="marquee-pause relative flex-1 overflow-hidden mask-fade-x">
            <div className="animate-marquee flex items-center gap-12 md:gap-16">
              {track.map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="relative h-10 md:h-12 w-[150px] md:w-[170px] shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="170px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataAssetSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <Section className="bg-hero-glow">
      <Container>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-display italic text-[15px] font-normal text-ink-400">
              The data asset
            </span>
            <h2 className="mt-4 font-display text-display-xl font-medium text-ink-900 leading-[1.05]">
              What 22.4 million
              <br />
              <span className="text-ink-400">looks like.</span>
            </h2>
            <p className="mt-5 text-[16px] text-ink-500 leading-relaxed max-w-md">
              Network composition, real-time. Veterans, active-duty, military
              spouses, and cleared talent — all first-party, all opted in,
              segmented by branch, MOS, clearance, and life stage.
            </p>
          </motion.div>

          <motion.div className="lg:col-span-7" style={{ y: cardY }}>
            <DataVizCard />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

function DataVizCard() {
  return (
    <div
      className="reveal relative rounded-2xl border border-[var(--border-soft)] bg-white shadow-elevated overflow-hidden"
      style={{ animationDelay: "300ms" }}
    >
      {/* Card header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-subtle)] bg-ink-50/40">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-electric animate-pulse-soft" />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-600">
            Live Reach — Q4 2026
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">
          First-party
        </span>
      </div>

      {/* Big number */}
      <div className="px-6 py-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
          Total network reach
        </p>
        <div className="mt-2 flex items-baseline gap-3">
          <p className="font-display text-[64px] font-semibold tracking-tight text-ink-900 leading-none tabular-nums">
            22.4
          </p>
          <p className="font-display text-[24px] font-medium text-ink-500">
            million
          </p>
        </div>
        <p className="mt-1 text-[13px] text-ink-500">
          Active military, veteran, and spouse profiles
        </p>

        {/* Mini chart */}
        <div className="mt-6 space-y-2.5">
          <DistRow label="Veterans" value={68} count="15.2M" />
          <DistRow label="Active Duty" value={18} count="4.0M" accent />
          <DistRow label="Military Spouses" value={11} count="2.5M" />
          <DistRow label="Cleared Talent" value={3} count="0.7M" highlight />
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-[var(--border-subtle)] px-5 py-3 flex items-center justify-between bg-ink-50/40">
        <div className="flex items-center gap-2">
          <ShieldCheck size={13} className="text-electric" />
          <span className="text-[11px] font-medium text-ink-600">
            SDVOSB Certified · Meta Certified
          </span>
        </div>
        <Link
          href="#"
          className="inline-flex items-center gap-1 text-[11px] font-medium text-ink-700 hover:text-ink-900"
        >
          Methodology
          <ArrowUpRight size={11} />
        </Link>
      </div>
    </div>
  );
}

function DistRow({
  label,
  value,
  count,
  accent,
  highlight,
}: {
  label: string;
  value: number;
  count: string;
  accent?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-32 text-[12px] text-ink-700 font-medium">{label}</span>
      <div className="flex-1 h-1.5 bg-ink-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${
            highlight
              ? "bg-flag-gold"
              : accent
              ? "bg-electric"
              : "bg-ink-700"
          }`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="w-14 text-right font-mono text-[11px] text-ink-600 tabular-nums">
        {count}
      </span>
    </div>
  );
}

type StatSpec = {
  label: string;
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

function DataBar() {
  const stats: StatSpec[] = [
    { label: "Years of first-party data", target: 23 },
    { label: "Verified military profiles", target: 22.4, decimals: 1, suffix: "M" },
    { label: "Avg. reduction in CPH", target: 38, suffix: "%" },
    { label: "Brands in network", target: 3 },
    { label: "Enterprise clients", target: 400, suffix: "+" },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-y border-[var(--border-subtle)] bg-ink-50/30">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[var(--border-subtle)]">
          {stats.map((s, i) => (
            <DataBarStat
              key={s.label}
              stat={s}
              start={inView}
              alignClass={`py-7 ${i === 0 ? "pr-6" : "px-6"} md:px-7 ${
                i % 2 === 0 ? "border-r md:border-r" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DataBarStat({
  stat,
  start,
  alignClass,
}: {
  stat: StatSpec;
  start: boolean;
  alignClass: string;
}) {
  const animated = useCountUp(stat.target, {
    duration: 1400,
    decimals: stat.decimals ?? 0,
    start,
  });
  const display = stat.decimals
    ? animated.toFixed(stat.decimals)
    : Math.round(animated).toString();
  return (
    <div className={alignClass}>
      <p className="font-display text-[28px] md:text-[36px] font-semibold tracking-tight text-ink-900 tabular-nums">
        {stat.prefix ?? ""}
        {display}
        {stat.suffix ?? ""}
      </p>
      <p className="mt-1 text-[12px] text-ink-500 font-mono uppercase tracking-[0.12em]">
        {stat.label}
      </p>
    </div>
  );
}

function BuyerPaths() {
  const paths = [
    {
      icon: <Target size={20} />,
      eyebrow: "Recruitment Marketing",
      title: "Hire from the military.",
      desc: "Reduce cost-per-hire by an average of 38% with programmatic, social, and first-party data activation across our network.",
      href: "/recruitment-marketing",
      accent: false,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85",
    },
    {
      icon: <ShieldCheck size={20} />,
      eyebrow: "Government & Cybersecurity",
      title: "Win federal & defense contracts.",
      desc: "SDVOSB-certified prime and subcontractor on government marketing, cyber staffing, and cleared talent acquisition.",
      href: "/government-solutions",
      accent: true,
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=85",
    },
    {
      icon: <Building2 size={20} />,
      eyebrow: "Consumer & Brand",
      title: "Reach the military consumer.",
      desc: "1.1M military spouses, $1.2T in household spending power. Activated through Military Spouse® and Military Friendly® brands.",
      href: "#",
      accent: false,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=85",
    },
  ];

  return (
    <Section>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={itemVariants} className="max-w-3xl">
            <span className="font-display italic text-[15px] text-ink-400">
              What we do
            </span>
            <h2 className="mt-4 font-display text-display-xl font-medium text-ink-900">
              Three paths into the military market.{" "}
              <span className="text-ink-400">One data engine behind them.</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-3">
            {paths.map((p) => (
              <motion.div key={p.title} variants={itemVariants}>
                <Link
                  href={p.href}
                  className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 block h-full ${
                    p.accent
                      ? "border-ink-900 bg-ink-900 text-white hover:shadow-elevated"
                      : "border-[var(--border-soft)] bg-white hover:border-ink-900 hover:shadow-sharp"
                  }`}
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      className={`absolute inset-0 ${
                        p.accent
                          ? "bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-ink-900/20"
                          : "bg-gradient-to-t from-white/40 to-transparent"
                      }`}
                    />
                  </div>
                  <div className="p-7 md:p-8">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${
                        p.accent
                          ? "bg-electric/20 text-electric"
                          : "bg-ink-50 text-ink-700 group-hover:bg-ink-900 group-hover:text-white"
                      } transition-colors duration-300`}
                    >
                      {p.icon}
                    </div>
                    <p
                      className={`mt-6 font-mono text-[11px] uppercase tracking-[0.16em] ${
                        p.accent ? "text-electric" : "text-ink-500"
                      }`}
                    >
                      {p.eyebrow}
                    </p>
                    <h3
                      className={`mt-3 font-display text-[26px] md:text-[28px] font-medium tracking-tight ${
                        p.accent ? "text-white" : "text-ink-900"
                      } leading-[1.1]`}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={`mt-4 text-[15px] leading-[1.55] ${
                        p.accent ? "text-white/70" : "text-ink-500"
                      }`}
                    >
                      {p.desc}
                    </p>
                    <div
                      className={`mt-7 inline-flex items-center gap-1.5 text-[13px] font-medium ${
                        p.accent ? "text-white" : "text-ink-900"
                      }`}
                    >
                      Explore
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

function EstimatorSection() {
  return (
    <Section className="bg-ink-50/40 border-y border-[var(--border-subtle)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="font-display italic text-[15px] font-normal text-ink-400">
              Built for buyers
            </span>
            <h2 className="mt-4 font-display text-display-xl font-medium text-ink-900 leading-[1.05]">
              See what your military pipeline is worth.
            </h2>
            <p className="mt-5 text-[16px] text-ink-500 leading-relaxed">
              Most agencies pitch you a deck. We give you the math up front.
              Tell us your industry, role, and hiring volume — get a directional
              audience size, cost-per-hire estimate, and recommended program.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "60-second estimate, no email required",
                "Anchored on real first-party data",
                "Recommended program tier instantly",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[14px] text-ink-700">
                  <CheckCircle2 size={16} className="text-electric mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <PipelineEstimator />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function BrandsSection() {
  const brands = [
    {
      name: "G.I. Jobs®",
      logo: "https://www.viqtory.com/wp-content/uploads/elementor/thumbs/GIJ_Logo-qzco3oavr65z9f37frfwrvcf7deofaq77rtg5ut1q8.png",
    },
    {
      name: "Military Spouse®",
      logo: "https://www.viqtory.com/wp-content/uploads/2020/07/MSM_Logo-resized.png",
    },
    {
      name: "Military Friendly®",
      logo: "https://www.viqtory.com/wp-content/uploads/2020/07/MF_Logo-resized.png",
    },
  ];
  return (
    <Section>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <span className="font-display italic text-[15px] text-ink-400">
                The network
              </span>
              <h2 className="mt-4 font-display text-display-xl font-medium text-ink-900 leading-[1.05]">
                Three brands the military
                <br />
                actually reads.
              </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-6 lg:col-start-7">
              <p className="text-[17px] text-ink-500 leading-relaxed">
                Owned media, not rented audience. Every brand in our network is a
                destination — not a pop-up — which means deeper engagement,
                stronger first-party signals, and audiences that compound year
                over year.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center">
            {brands.map((b) => (
              <motion.div
                variants={itemVariants}
                key={b.name}
                className="flex items-center justify-center"
              >
                <div className="relative h-24 md:h-32 w-full max-w-[320px]">
                  <Image
                    src={b.logo}
                    alt={`${b.name} logo`}
                    fill
                    sizes="320px"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

function CaseStudies() {
  const studies = [
    {
      client: "AECOM",
      industry: "Engineering",
      headline: "221 qualified veteran applicants in 60 days",
      metric: "221",
      metricLabel: "applicants",
      sub: "Programmatic + first-party social activation",
      bg: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=85",
    },
    {
      client: "Signal 88 Security",
      industry: "Security Services",
      headline: "Cost per veteran lead reduced by 65.8%",
      metric: "−65.8%",
      metricLabel: "CPL",
      sub: "Programmatic targeting + custom audiences",
      bg: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=85",
    },
    {
      client: "Division I University",
      industry: "Higher Education",
      headline: "Military spouse enrollment exceeded by 175%",
      metric: "+175%",
      metricLabel: "vs. goal",
      sub: "Military Spouse network + content syndication",
      bg: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=85",
    },
    {
      client: "DynCorp International",
      industry: "Defense",
      headline: "Veteran recruitment funnel scaled 4×",
      metric: "4×",
      metricLabel: "scale",
      sub: "Cleared-talent social targeting at scale",
      bg: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=85",
    },
  ];
  return (
    <Section id="case-studies" className="bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric/10 blur-[120px] pointer-events-none" />

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <span className="font-display italic text-[15px] text-white/50">
                Proof of work
              </span>
              <h2 className="mt-4 font-display text-display-xl font-medium text-white leading-[1.05]">
                Numbers we&apos;ve put on the board.
              </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-5 lg:col-start-8 self-end">
              <p className="text-[16px] text-white/60 leading-relaxed">
                Every campaign measured against ROI, not impressions. Below are
                clients who let us share results — there are many more under NDA.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {studies.map((s) => (
              <motion.div
                variants={itemVariants}
                key={s.client}
                className="group relative rounded-2xl overflow-hidden h-[280px] md:h-[360px] cursor-pointer"
              >
                <Image
                  src={s.bg}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Default overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/50 to-ink-900/30 transition-opacity duration-300 group-hover:opacity-0" />
                {/* Hover overlay — full coverage */}
                <div className="absolute inset-0 bg-ink-900/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Always-visible: industry tag (top-left) */}
                <div className="absolute top-6 left-6 right-6 flex items-start justify-between gap-4 z-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                    {s.industry}
                  </p>
                  <div className="text-right">
                    <p className="font-display text-[32px] md:text-[40px] font-semibold tracking-tight text-electric leading-none tabular-nums">
                      {s.metric}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
                      {s.metricLabel}
                    </p>
                  </div>
                </div>

                {/* Always-visible: client name (bottom-left) */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p className="font-display text-[22px] font-medium tracking-tight text-white">
                    {s.client}
                  </p>

                  {/* Hover-revealed details */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-[200px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="mt-3 text-[15px] text-white/85 leading-snug">
                      {s.headline}
                    </p>
                    <p className="mt-2 text-[12px] text-white/55">{s.sub}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-white">
                      Read full case study
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

function CommandPlatformTeaser() {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-[var(--border-soft)] bg-white overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 p-10 md:p-14 lg:p-16">
              <Eyebrow variant="electric">New · Command Platform</Eyebrow>
              <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05]">
                Your military marketing,
                <br />
                <span className="italic font-normal">in one console.</span>
              </h2>
              <p className="mt-5 text-[16px] text-ink-500 leading-relaxed max-w-md">
                Manage campaigns, audiences, and case-data activation across
                G.I. Jobs, Military Spouse, and Military Friendly. Real-time
                reporting, first-party CRM sync, and a single source of truth
                for every program.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: <Database size={16} />, label: "Unified data layer" },
                  { icon: <Users size={16} />, label: "Audience builder" },
                  { icon: <Activity size={16} />, label: "Live performance" },
                  { icon: <TrendingUp size={16} />, label: "Attribution model" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <div className="grid place-items-center h-7 w-7 rounded-md bg-electric-100 text-electric-600">
                      {f.icon}
                    </div>
                    <span className="text-[13px] font-medium text-ink-800">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/command-platform">
                  <Button variant="primary" size="md" withArrow>
                    Tour the platform
                  </Button>
                </Link>
                <Button variant="outline" size="md">
                  Request a demo
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative bg-ink-900 p-10 md:p-14 lg:p-16 flex items-center justify-center min-h-[480px] overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-[0.18]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=85"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-ink-900 via-ink-900/70 to-ink-900/30 pointer-events-none" />
              <div className="absolute inset-0 bg-grid opacity-[0.04]" />
              <div className="absolute inset-0 bg-electric-glow opacity-50" />
              <div className="relative z-10">
                <CommandPlatformMockup />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

function CommandPlatformMockup() {
  return (
    <div className="relative w-full max-w-md">
      {/* Stacked dashboard cards */}
      <div className="absolute -top-6 -left-4 right-12 bottom-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm" />
      <div className="absolute top-3 left-2 right-6 bottom-6 rounded-xl bg-white/[0.07] border border-white/10" />

      <div className="relative rounded-xl bg-white shadow-elevated p-5 border border-ink-100">
        <div className="flex items-center justify-between pb-4 border-b border-ink-100">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-electric animate-pulse-soft" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-600">
              Active Campaign
            </span>
          </div>
          <span className="font-mono text-[10px] text-ink-400">VIQ-2401</span>
        </div>

        <div className="mt-4">
          <p className="text-[12px] text-ink-500">AECOM · Veteran Engineering</p>
          <p className="mt-1 font-display text-[24px] font-semibold text-ink-900 tabular-nums">
            1,247 <span className="text-[14px] text-ink-400 font-normal">applicants</span>
          </p>
        </div>

        <div className="mt-4 space-y-2">
          {[
            { l: "Programmatic", v: 62 },
            { l: "Social", v: 28 },
            { l: "G.I. Jobs", v: 76 },
          ].map((c) => (
            <div key={c.l} className="flex items-center gap-2">
              <span className="w-20 text-[11px] text-ink-600">{c.l}</span>
              <div className="flex-1 h-1 bg-ink-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-ink-900 rounded-full"
                  style={{ width: `${c.v}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-ink-500 tabular-nums">
                {c.v}%
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-ink-100 grid grid-cols-2 gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">
              CPH
            </p>
            <p className="mt-1 font-display text-[18px] font-semibold text-ink-900 tabular-nums">
              $2,840
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">
              Δ vs target
            </p>
            <p className="mt-1 font-display text-[18px] font-semibold text-electric tabular-nums">
              −34%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <Section className="bg-ink-50/30">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-3xl bg-ink-900 text-white p-10 md:p-16 lg:p-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-[0.04]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 blur-[120px] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <Eyebrow variant="light">Start the conversation</Eyebrow>
              <h2 className="mt-4 font-display text-display-xl font-medium text-white leading-[1.0]">
                Show us your hardest hire.
                <br />
                <span className="text-white/50 italic font-normal">
                  We&apos;ll show you the pipeline.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="secondary"
                  size="lg"
                  withArrow
                  className="!bg-white !text-ink-900 hover:!bg-electric-100"
                >
                  Book a discovery call
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="!text-white hover:!bg-white/10"
                >
                  Email a strategist
                </Button>
              </div>
              <p className="mt-5 text-[12px] text-white/40 font-mono uppercase tracking-[0.14em]">
                30-min discovery · No deck, just questions
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
