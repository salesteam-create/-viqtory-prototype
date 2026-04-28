import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { PipelineEstimator } from "@/components/pipeline-estimator";
import {
  Check,
  Minus,
  Target,
  Zap,
  Crown,
  TrendingUp,
  Users,
  Database,
  BarChart3,
  Workflow,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Recruitment Marketing — VIQTORY",
};

export default function RecruitmentMarketingPage() {
  return (
    <>
      <PageHero />
      <ProblemFrame />
      <ProgramTiers />
      <ServicesMatrix />
      <ProcessSection />
      <EstimatorEmbed />
      <ProofStrip />
      <FAQ />
      <CTA />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative bg-hero-glow pt-20 pb-20 md:pt-28 md:pb-24">
      <div className="absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent_80%)] pointer-events-none" />
      <Container className="relative">
        <div className="max-w-4xl">
          <Eyebrow variant="electric">Recruitment Marketing</Eyebrow>
          <h1 className="mt-5 font-display text-display-2xl font-medium text-ink-900 leading-[0.98]">
            Hire from the military
            <br />
            <span className="italic font-normal text-ink-400">
              for 38% less per hire.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-[18px] md:text-[19px] text-ink-500 leading-[1.55]">
            Programmatic, social, and first-party data activation across G.I.
            Jobs®, Military Spouse®, and Military Friendly®. Three program
            tiers, all measured against cost-per-hire — never impressions.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link href="#tiers">
              <Button variant="primary" size="lg" withArrow>
                See program tiers
              </Button>
            </Link>
            <Link href="#estimator">
              <Button variant="outline" size="lg">
                Estimate my pipeline
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProblemFrame() {
  const items = [
    {
      problem: "Average enterprise cost per hire: $4,700",
      solution: "VIQTORY clients average $2,890",
      delta: "−38%",
    },
    {
      problem: "Veteran applicants: 6% of typical pipeline",
      solution: "VIQTORY pipelines: 41% military",
      delta: "+580%",
    },
    {
      problem: "Time to fill skilled trades: 51 days",
      solution: "VIQTORY trades programs: 28 days",
      delta: "−45%",
    },
  ];
  return (
    <Section className="bg-ink-50/40 border-y border-[var(--border-subtle)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>The math</Eyebrow>
            <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05]">
              Why enterprise recruiters miss military talent.
            </h2>
            <p className="mt-5 text-[16px] text-ink-500 leading-relaxed">
              Civilian recruitment funnels weren&apos;t built for military
              skill translation, transition timing, or spouse career mobility.
              VIQTORY&apos;s data layer was.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {items.map((it) => (
              <div
                key={it.problem}
                className="grid grid-cols-12 gap-3 p-5 md:p-6 rounded-xl bg-white border border-[var(--border-soft)]"
              >
                <div className="col-span-12 md:col-span-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                    Industry baseline
                  </p>
                  <p className="mt-1.5 text-[14px] text-ink-700">{it.problem}</p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-electric">
                    With VIQTORY
                  </p>
                  <p className="mt-1.5 text-[14px] font-medium text-ink-900">
                    {it.solution}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-2 md:text-right">
                  <p className="font-display text-[24px] font-semibold tracking-tight text-electric tabular-nums">
                    {it.delta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ProgramTiers() {
  const tiers = [
    {
      name: "Foundation",
      icon: <Target size={18} />,
      tag: "Up to 25 hires/yr",
      price: "From $4,500",
      priceUnit: "/month",
      desc: "Single-channel programmatic with G.I. Jobs® placement.",
      features: [
        { label: "Programmatic veteran targeting", included: true },
        { label: "G.I. Jobs® network placement", included: true },
        { label: "Monthly performance dashboard", included: true },
        { label: "Custom audience builds", included: false },
        { label: "First-party CRM activation", included: false },
        { label: "Cleared talent database", included: false },
      ],
      cta: "Start with Foundation",
      featured: false,
    },
    {
      name: "Growth",
      icon: <Zap size={18} />,
      tag: "26–300 hires/yr",
      price: "From $12,500",
      priceUnit: "/month",
      desc: "Multi-channel program with first-party data activation.",
      features: [
        { label: "Programmatic veteran targeting", included: true },
        { label: "G.I. Jobs® network placement", included: true },
        { label: "Real-time performance dashboard", included: true },
        { label: "Custom audience builds", included: true },
        { label: "First-party CRM activation", included: true },
        { label: "Cleared talent database", included: false },
      ],
      cta: "Most chosen tier",
      featured: true,
    },
    {
      name: "Enterprise",
      icon: <Crown size={18} />,
      tag: "300+ hires/yr",
      price: "Custom",
      priceUnit: "engagement",
      desc: "Full-stack program with cleared talent and ABM.",
      features: [
        { label: "Programmatic veteran targeting", included: true },
        { label: "G.I. Jobs® network placement", included: true },
        { label: "Real-time performance dashboard", included: true },
        { label: "Custom audience builds", included: true },
        { label: "First-party CRM activation", included: true },
        { label: "Cleared talent database", included: true },
      ],
      cta: "Talk to a strategist",
      featured: false,
    },
  ];

  return (
    <Section id="tiers">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Program tiers</Eyebrow>
          <h2 className="mt-4 font-display text-display-xl font-medium text-ink-900 leading-[1.05]">
            Three programs.{" "}
            <span className="text-ink-400">One outcome metric.</span>
          </h2>
          <p className="mt-5 text-[16px] text-ink-500 leading-relaxed">
            Pricing is monthly retainer plus media. All tiers measured against
            cost-per-hire and quality-of-hire — not impressions or clicks.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-7 md:p-8 transition-all duration-300 ${
                tier.featured
                  ? "bg-ink-900 text-white shadow-elevated lg:scale-[1.02] lg:-translate-y-2"
                  : "bg-white border border-[var(--border-soft)] hover:border-ink-900"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric text-white text-[11px] font-mono uppercase tracking-[0.14em]">
                  <Sparkles size={11} />
                  Recommended
                </div>
              )}

              <div
                className={`inline-flex items-center justify-center h-10 w-10 rounded-lg ${
                  tier.featured
                    ? "bg-electric/20 text-electric"
                    : "bg-ink-50 text-ink-700"
                }`}
              >
                {tier.icon}
              </div>

              <div className="mt-6 flex items-baseline justify-between">
                <h3
                  className={`font-display text-[28px] font-medium tracking-tight ${
                    tier.featured ? "text-white" : "text-ink-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
                    tier.featured ? "text-white/60" : "text-ink-400"
                  }`}
                >
                  {tier.tag}
                </span>
              </div>

              <div className="mt-5 flex items-baseline gap-1.5">
                <p
                  className={`font-display text-[36px] font-semibold tracking-tight tabular-nums ${
                    tier.featured ? "text-white" : "text-ink-900"
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`text-[14px] ${
                    tier.featured ? "text-white/50" : "text-ink-400"
                  }`}
                >
                  {tier.priceUnit}
                </p>
              </div>

              <p
                className={`mt-3 text-[14px] ${
                  tier.featured ? "text-white/70" : "text-ink-500"
                }`}
              >
                {tier.desc}
              </p>

              <div
                className={`my-7 h-px ${
                  tier.featured ? "bg-white/15" : "bg-[var(--border-subtle)]"
                }`}
              />

              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2.5">
                    {f.included ? (
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${
                          tier.featured ? "text-electric" : "text-electric"
                        }`}
                      />
                    ) : (
                      <Minus
                        size={15}
                        className={`mt-0.5 shrink-0 ${
                          tier.featured ? "text-white/30" : "text-ink-300"
                        }`}
                      />
                    )}
                    <span
                      className={`text-[14px] ${
                        f.included
                          ? tier.featured
                            ? "text-white/90"
                            : "text-ink-800"
                          : tier.featured
                          ? "text-white/40 line-through"
                          : "text-ink-400 line-through"
                      }`}
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? "secondary" : "outline"}
                size="md"
                withArrow
                className={`mt-8 w-full ${
                  tier.featured
                    ? "!bg-white !text-ink-900 hover:!bg-electric-100"
                    : ""
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-ink-400">
          All tiers include strategy, creative, and quarterly business review.
          <span className="mx-2">·</span>
          Annual contracts unlock 10–18% media discounts.
        </p>
      </Container>
    </Section>
  );
}

function ServicesMatrix() {
  const services = [
    {
      icon: <Database size={18} />,
      title: "First-Party Data Activation",
      desc: "23 years of military engagement data, segmented by MOS, branch, location, and life stage.",
    },
    {
      icon: <Target size={18} />,
      title: "Programmatic Targeting",
      desc: "Cross-network display and video buying optimized against your hiring funnel, not vanity metrics.",
    },
    {
      icon: <Users size={18} />,
      title: "Social & Custom Audiences",
      desc: "Meta-certified social campaigns with custom lookalikes built from our 22M-strong audience graph.",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Attribution & Reporting",
      desc: "Multi-touch attribution mapping every applicant back to the channel — and the cost — that delivered them.",
    },
    {
      icon: <Workflow size={18} />,
      title: "ATS & CRM Integration",
      desc: "Direct integration with Workday, Greenhouse, iCIMS, and HubSpot. No CSVs, no friction.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Quarterly Optimization",
      desc: "Dedicated strategist reviewing performance every quarter and recalibrating against your goals.",
    },
  ];

  return (
    <Section className="bg-ink-50/40 border-y border-[var(--border-subtle)]">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>What's inside</Eyebrow>
          <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05]">
            Capabilities, not buzzwords.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-[var(--border-soft)] bg-white p-6 hover:shadow-sharp transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-ink-50 text-ink-700">
                {s.icon}
              </div>
              <h3 className="mt-5 font-display text-[18px] font-medium text-ink-900 tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] text-ink-500 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ProcessSection() {
  const steps = [
    {
      n: "01",
      title: "Discovery",
      desc: "30-minute strategist call. We diagnose your funnel, hiring goals, and where military talent fits.",
    },
    {
      n: "02",
      title: "Pipeline Estimate",
      desc: "Custom audience model, CPH projection, and recommended program tier — usually within 5 business days.",
    },
    {
      n: "03",
      title: "Activation",
      desc: "Campaigns live in 14 days. ATS integration, creative assets, and tracking standardized from day one.",
    },
    {
      n: "04",
      title: "Optimization",
      desc: "Weekly performance reviews. Quarterly business review with your strategist and our data team.",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05]">
            From discovery to first hire in 30 days.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="rounded-xl border border-[var(--border-soft)] bg-white p-7 h-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-electric">
                  Step {s.n}
                </p>
                <h3 className="mt-3 font-display text-[22px] font-medium text-ink-900 tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] text-ink-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 z-10">
                  <ArrowRight size={14} className="text-ink-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function EstimatorEmbed() {
  return (
    <Section id="estimator" className="bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric/10 blur-[120px] pointer-events-none" />

      <Container className="relative">
        <div className="max-w-2xl mb-12">
          <Eyebrow variant="light">Get an estimate now</Eyebrow>
          <h2 className="mt-4 font-display text-display-lg font-medium text-white leading-[1.05]">
            Sixty seconds. No email.
          </h2>
          <p className="mt-4 text-[16px] text-white/60">
            Tell us four things about your hiring need and we&apos;ll show you
            audience, cost-per-hire, and tier — instantly.
          </p>
        </div>

        <PipelineEstimator />
      </Container>
    </Section>
  );
}

function ProofStrip() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow variant="electric">Trusted by</Eyebrow>
            <h2 className="mt-4 font-display text-display-md font-medium text-ink-900 leading-[1.1]">
              The companies who hire America&apos;s veterans.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-px bg-[var(--border-subtle)] rounded-xl overflow-hidden">
              {[
                { name: "Partner 1", src: "/trusted-partners/partner-1.png" },
                { name: "Partner 2", src: "/trusted-partners/partner-2.png" },
                { name: "Partner 3", src: "/trusted-partners/partner-3.png" },
                { name: "Partner 4", src: "/trusted-partners/partner-4.png" },
                { name: "Partner 5", src: "/trusted-partners/partner-5.png" },
              ].map((c) => (
                <div
                  key={c.name}
                  className="bg-white aspect-[4/2] grid place-items-center p-4"
                >
                  <div className="relative h-10 md:h-12 w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={c.src}
                      alt={c.name}
                      fill
                      sizes="180px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FAQ() {
  const items = [
    {
      q: "How is your cost-per-hire 38% below industry average?",
      a: "Three reasons: owned audience (no audience-rental tax), 23-year first-party data depth, and outcome-based optimization. We optimize against ATS-confirmed hires, not clicks or impressions.",
    },
    {
      q: "Do you replace our existing recruitment marketing or work alongside it?",
      a: "Both. Most clients run VIQTORY as their dedicated military channel while keeping their existing agency for civilian roles. We integrate directly with your ATS so attribution stays clean.",
    },
    {
      q: "What's the minimum contract length?",
      a: "Foundation: 6 months. Growth: 12 months. Enterprise: 12–24 months. Annual contracts come with 10–18% media discounts.",
    },
    {
      q: "Do you handle creative or do we provide it?",
      a: "We do both. Most clients use our creative team for military-specific assets while running their existing brand creative for the civilian funnel.",
    },
  ];

  return (
    <Section className="bg-ink-50/40 border-t border-[var(--border-subtle)]">
      <Container size="narrow">
        <Eyebrow>Common questions</Eyebrow>
        <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05]">
          What buyers usually ask.
        </h2>

        <div className="mt-10 divide-y divide-[var(--border-subtle)]">
          {items.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-display text-[18px] md:text-[20px] font-medium text-ink-900 tracking-tight pr-8">
                  {item.q}
                </span>
                <span className="grid place-items-center h-8 w-8 rounded-full border border-ink-200 group-open:bg-ink-900 group-open:border-ink-900 group-open:text-white transition-all shrink-0">
                  <span className="block w-3 h-px bg-current" />
                  <span className="block w-px h-3 bg-current absolute group-open:rotate-90 transition-transform" />
                </span>
              </summary>
              <div className="mt-4 text-[15px] text-ink-500 leading-relaxed max-w-3xl">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CTA() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl border border-[var(--border-soft)] bg-white p-10 md:p-14 text-center">
          <Eyebrow variant="electric" className="mx-auto justify-center">
            Ready to estimate?
          </Eyebrow>
          <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05] max-w-2xl mx-auto">
            Tell us your hardest hire. We&apos;ll show you the pipeline.
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" size="lg" withArrow>
              Book discovery call
            </Button>
            <Button variant="outline" size="lg">
              Download capabilities deck
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
