import { Section, Container } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Database,
  Layers,
  Users,
  Workflow,
  Zap,
  TrendingUp,
  Eye,
  PlayCircle,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Command Platform — VIQTORY",
};

export default function CommandPlatformPage() {
  return (
    <>
      <PageHero />
      <ProductMockup />
      <FeatureGrid />
      <IntegrationsSection />
      <UseCases />
      <PricingTeaser />
      <CTA />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative bg-hero-glow pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent_80%)] pointer-events-none" />

      <Container className="relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-100 border border-electric/20">
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse-soft" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-electric-600">
              New · Command Platform v2
            </span>
          </div>

          <h1 className="mt-6 font-display text-display-2xl font-medium text-ink-900 leading-[0.98]">
            One console for every
            <br />
            <span className="italic font-normal text-ink-400">
              military marketing program.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-[18px] md:text-[19px] text-ink-500 leading-[1.55]">
            Manage campaigns, audiences, attribution, and reporting across G.I.
            Jobs®, Military Spouse®, and Military Friendly® — in real time, in
            one place. The only software built specifically for marketing to
            the U.S. military community.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button variant="primary" size="lg" withArrow>
              Request a demo
            </Button>
            <Button variant="outline" size="lg">
              <PlayCircle size={16} />
              <span className="ml-2">Watch 2-min walkthrough</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProductMockup() {
  return (
    <section className="pb-20 md:pb-24 relative">
      <Container>
        <div className="relative rounded-2xl border border-[var(--border-soft)] bg-ink-900 overflow-hidden shadow-elevated">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-ink-800">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
            </div>
            <div className="ml-4 flex-1 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-white/50">
                <span className="text-electric">●</span>
                command.viqtory.com / campaigns / aecom-eng-q4
              </div>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="grid grid-cols-12 gap-px bg-white/5">
            {/* Sidebar */}
            <div className="col-span-3 lg:col-span-2 bg-ink-900 p-5">
              <div className="flex items-center gap-2 mb-7">
                <div className="h-6 w-6 rounded bg-white grid place-items-center">
                  <span className="font-display text-[12px] font-semibold text-ink-900">V</span>
                </div>
                <span className="font-display text-[14px] font-medium text-white">
                  Command
                </span>
              </div>
              <nav className="space-y-1">
                {[
                  { l: "Overview", active: false },
                  { l: "Campaigns", active: true },
                  { l: "Audiences", active: false },
                  { l: "Reports", active: false },
                  { l: "Integrations", active: false },
                ].map((n) => (
                  <div
                    key={n.l}
                    className={`px-3 py-1.5 rounded-md text-[12px] ${
                      n.active
                        ? "bg-white/10 text-white font-medium"
                        : "text-white/50"
                    }`}
                  >
                    {n.l}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main panel */}
            <div className="col-span-9 lg:col-span-10 bg-ink-800/50 p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                    Active campaign
                  </p>
                  <h3 className="mt-1 font-display text-[20px] font-medium text-white">
                    AECOM · Veteran Engineering · Q4
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-electric/20 text-electric">
                    Live
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { l: "Applicants", v: "1,247", d: "+18%", accent: true },
                  { l: "Cost / hire", v: "$2,840", d: "−34%", accent: true },
                  { l: "Reach", v: "892K", d: "+4%" },
                  { l: "Conversion", v: "3.2%", d: "+0.8pp" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-lg bg-ink-900 border border-white/5 p-4"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                      {s.l}
                    </p>
                    <p className="mt-2 font-display text-[24px] font-semibold text-white tabular-nums">
                      {s.v}
                    </p>
                    <p
                      className={`mt-1 text-[11px] font-mono ${
                        s.accent ? "text-electric" : "text-white/50"
                      }`}
                    >
                      {s.d} vs target
                    </p>
                  </div>
                ))}
              </div>

              {/* Channel breakdown */}
              <div className="mt-6 rounded-lg bg-ink-900 border border-white/5 p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-display text-[14px] font-medium text-white">
                    Channel performance
                  </p>
                  <span className="font-mono text-[10px] text-white/40">
                    Last 30 days
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { l: "G.I. Jobs Network", v: 76, c: "412 applicants" },
                    { l: "Programmatic Display", v: 62, c: "318 applicants" },
                    { l: "Social (Meta + LinkedIn)", v: 54, c: "287 applicants" },
                    { l: "Military Spouse Network", v: 38, c: "230 applicants" },
                  ].map((c) => (
                    <div key={c.l} className="flex items-center gap-4">
                      <span className="w-44 text-[12px] text-white/70 truncate">{c.l}</span>
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-electric rounded-full"
                          style={{ width: `${c.v}%` }}
                        />
                      </div>
                      <span className="w-32 text-right font-mono text-[11px] text-white/60 tabular-nums">
                        {c.c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureGrid() {
  const features = [
    {
      icon: <Database size={18} />,
      title: "Unified data layer",
      desc: "All three brand audiences in one queryable layer. Build segments, run lookalikes, activate across channels — without exporting CSVs.",
    },
    {
      icon: <Activity size={18} />,
      title: "Real-time performance",
      desc: "Sub-minute reporting on every campaign. ATS-confirmed hires, not estimated conversions.",
    },
    {
      icon: <Users size={18} />,
      title: "Audience builder",
      desc: "Drag-and-drop segments by MOS, branch, location, life stage, clearance level, and 40+ first-party attributes.",
    },
    {
      icon: <Layers size={18} />,
      title: "Cross-channel orchestration",
      desc: "One campaign, every channel. Programmatic, social, owned media — coordinated and de-duplicated.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Multi-touch attribution",
      desc: "See exactly which channel, creative, and audience drove each hire — not last-click, not modeled.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Native ATS integrations",
      desc: "Workday, Greenhouse, iCIMS, Lever, SmartRecruiters. Two-way sync. No middleware.",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="mt-4 font-display text-display-xl font-medium text-ink-900 leading-[1.05]">
            Everything you&apos;d build,
            <br />
            <span className="text-ink-400">if you had 23 years.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-[var(--border-soft)] bg-white p-7 hover:shadow-sharp transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-ink-900 text-white">
                {f.icon}
              </div>
              <h3 className="mt-6 font-display text-[20px] font-medium text-ink-900 tracking-tight">
                {f.title}
              </h3>
              <p className="mt-3 text-[14px] text-ink-500 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function IntegrationsSection() {
  const ats = ["Workday", "Greenhouse", "iCIMS", "Lever", "SmartRecruiters", "Bullhorn"];
  const data = ["Snowflake", "Databricks", "Salesforce", "HubSpot", "Segment", "BigQuery"];
  const ad = ["Meta", "LinkedIn", "Google Ads", "TikTok", "Reddit", "X"];

  return (
    <Section className="bg-ink-50/40 border-y border-[var(--border-subtle)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow variant="electric">Integrations</Eyebrow>
            <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05]">
              Plays well with your stack.
            </h2>
            <p className="mt-5 text-[16px] text-ink-500 leading-relaxed">
              Native two-way integrations with every major ATS, CDP, and ad
              platform. SOC 2 Type II, GDPR, and CCPA compliant.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {[
              { label: "Applicant Tracking", items: ats },
              { label: "Data Platforms", items: data },
              { label: "Ad Platforms", items: ad },
            ].map((g) => (
              <div key={g.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400 mb-3">
                  {g.label}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {g.items.map((item) => (
                    <div
                      key={item}
                      className="aspect-[5/2] rounded-lg bg-white border border-[var(--border-subtle)] grid place-items-center hover:border-ink-300 transition-colors"
                    >
                      <span className="font-display text-[14px] font-medium text-ink-700 tracking-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function UseCases() {
  const cases = [
    {
      tag: "Enterprise recruiter",
      title: "Cut cost-per-hire across 40 requisitions",
      desc: "AECOM consolidated 40 active military-targeted reqs into a single Command Platform program — single dashboard, single attribution model, single bill.",
      metric: "−42%",
      metricLabel: "Avg CPH",
    },
    {
      tag: "Higher education",
      title: "Recruit military spouse students at scale",
      desc: "A Division I university uses Command Platform to orchestrate Military Spouse® network campaigns against their admissions CRM in real time.",
      metric: "+175%",
      metricLabel: "vs. enrollment goal",
    },
    {
      tag: "Defense prime",
      title: "Cleared talent pipeline visibility",
      desc: "DynCorp uses Command Platform to monitor cleared talent funnel health across multiple programs — from sourcing to onboarding.",
      metric: "4×",
      metricLabel: "Funnel scale",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>How teams use it</Eyebrow>
          <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05]">
            Built for the way enterprise hires.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-[var(--border-soft)] bg-white p-7 md:p-8 hover:border-ink-900 hover:shadow-sharp transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                  {c.tag}
                </span>
                <Eye size={14} className="text-ink-300 group-hover:text-ink-700 transition-colors" />
              </div>
              <p className="font-display text-[40px] font-semibold tracking-tight text-electric tabular-nums leading-none">
                {c.metric}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
                {c.metricLabel}
              </p>

              <h3 className="mt-7 font-display text-[20px] font-medium text-ink-900 tracking-tight leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-[14px] text-ink-500 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PricingTeaser() {
  return (
    <Section className="bg-ink-50/40 border-y border-[var(--border-subtle)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow variant="electric">Pricing</Eyebrow>
            <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05]">
              Bundled with your program.
              <br />
              <span className="italic font-normal text-ink-400">
                Or standalone.
              </span>
            </h2>
            <p className="mt-5 text-[16px] text-ink-500 leading-relaxed max-w-md">
              Command Platform is included with Growth and Enterprise tier
              programs at no additional cost. Available standalone for $2,400 /
              month for organizations running their own media.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-white p-8">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-[24px] font-medium text-ink-900">
                Standalone
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">
                For self-managed
              </span>
            </div>
            <div className="mt-5 flex items-baseline gap-2">
              <p className="font-display text-[44px] font-semibold tracking-tight text-ink-900 tabular-nums">
                $2,400
              </p>
              <p className="text-[14px] text-ink-400">/ month</p>
            </div>
            <ul className="mt-6 space-y-2.5">
              {[
                "Unlimited campaigns",
                "All three brand audiences",
                "Up to 5 user seats",
                "Standard ATS integrations",
                "Email support",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[14px] text-ink-700"
                >
                  <Check size={15} className="text-electric mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="primary" size="md" withArrow className="mt-8 w-full">
              Start a 14-day pilot
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CTA() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl bg-ink-900 text-white p-10 md:p-16 lg:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.04]" />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[400px] bg-electric/15 blur-[120px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <Eyebrow variant="light">See it live</Eyebrow>
              <h2 className="mt-4 font-display text-display-xl font-medium text-white leading-[1.0]">
                Book a 20-minute demo.
                <br />
                <span className="text-white/50 italic font-normal">
                  Bring your hardest req.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="secondary"
                  size="lg"
                  withArrow
                  className="!bg-white !text-ink-900 hover:!bg-electric-100"
                >
                  Request demo
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="!text-white hover:!bg-white/10"
                >
                  Watch the tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
