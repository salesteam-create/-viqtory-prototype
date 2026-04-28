import { Section, Container } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Lock,
  FileCheck2,
  Users,
  Building2,
  CircleCheck,
  Server,
  Eye,
  AlertTriangle,
  Workflow,
  Network,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Government & Cybersecurity Solutions — VIQTORY",
};

export default function GovernmentSolutionsPage() {
  return (
    <>
      <PageHero />
      <CredentialStrip />
      <CapabilitiesSection />
      <ClearedTalentSection />
      <ContractVehiclesSection />
      <CyberSection />
      <CapabilityStatement />
      <CTA />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative bg-ink-900 text-white pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-electric/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-flag-gold/5 blur-[100px] pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <ShieldCheck size={14} className="text-electric" />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/80">
                  SDVOSB Certified
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <FileCheck2 size={14} className="text-electric" />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/80">
                  NAICS 541810 · 541511
                </span>
              </div>
            </div>

            <Eyebrow variant="light">Government & Cybersecurity Solutions</Eyebrow>
            <h1 className="mt-5 font-display text-display-2xl font-medium text-white leading-[0.98]">
              Cleared talent.
              <br />
              Cyber capability.
              <br />
              <span className="italic font-normal text-white/40">
                SDVOSB delivery.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[17px] text-white/70 leading-[1.55]">
              VIQTORY delivers staffing, marketing, and cybersecurity services
              to federal agencies and prime contractors — backed by 23 years
              of relationships with the cleared veteran community.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button
                variant="secondary"
                size="md"
                withArrow
                className="!bg-white !text-ink-900 hover:!bg-electric-100"
              >
                Capability Statement
              </Button>
              <Button
                variant="ghost"
                size="md"
                className="!text-white hover:!bg-white/10"
              >
                Contact GovCon
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CredentialStrip() {
  const credentials = [
    { label: "CAGE Code", value: "5R2K9" },
    { label: "DUNS / UEI", value: "079485213" },
    { label: "NAICS", value: "541810, 541511, 541612" },
    { label: "Certifications", value: "SDVOSB, SBVOSB" },
    { label: "Founded", value: "2001" },
    { label: "HQ", value: "Pittsburgh, PA" },
  ];
  return (
    <section className="border-b border-[var(--border-subtle)] bg-ink-50/30">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-[var(--border-subtle)]">
          {credentials.map((c) => (
            <div key={c.label} className="py-5 px-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                {c.label}
              </p>
              <p className="mt-1.5 font-display text-[15px] font-medium text-ink-900 tabular-nums">
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const capabilities = [
    {
      icon: <Users size={20} />,
      title: "Cleared Talent Acquisition",
      lines: [
        "TS / SCI / Polygraph candidate sourcing",
        "Veteran-first recruiting funnel",
        "Direct integration with prime contractor ATS",
        "Average 28-day fill on cleared roles",
      ],
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Cybersecurity Services",
      lines: [
        "Risk management & compliance (NIST, CMMC)",
        "Vulnerability assessment & penetration testing",
        "SOC augmentation with cleared veteran analysts",
        "Cyber workforce development & training",
      ],
    },
    {
      icon: <Building2 size={20} />,
      title: "Government Marketing",
      lines: [
        "Recruitment marketing for federal agencies",
        "Public-facing campaign development",
        "Multi-channel programmatic and social",
        "First-party military audience activation",
      ],
    },
    {
      icon: <Workflow size={20} />,
      title: "Staffing & Workforce Solutions",
      lines: [
        "Direct hire, contract, and contract-to-hire",
        "Specialized in defense, IT, and cleared roles",
        "Veteran preference programs",
        "Surge capacity for prime contractors",
      ],
    },
  ];

  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Core capabilities</Eyebrow>
          <h2 className="mt-4 font-display text-display-xl font-medium text-ink-900 leading-[1.05]">
            What we deliver to government & prime contractors.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-[var(--border-soft)] bg-white p-7 md:p-8 hover:shadow-sharp transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-ink-900 text-white">
                {c.icon}
              </div>
              <h3 className="mt-6 font-display text-[24px] font-medium text-ink-900 tracking-tight">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {c.lines.map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-2.5 text-[14px] text-ink-700"
                  >
                    <CircleCheck
                      size={15}
                      className="text-electric mt-0.5 shrink-0"
                    />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ClearedTalentSection() {
  return (
    <Section className="bg-ink-50/40 border-y border-[var(--border-subtle)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Eyebrow variant="electric">Cleared talent database</Eyebrow>
            <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05]">
              540K+ cleared veterans.
              <br />
              <span className="italic font-normal text-ink-400">
                One activation layer.
              </span>
            </h2>
            <p className="mt-5 text-[16px] text-ink-500 leading-relaxed">
              The cleared talent shortage is the #1 constraint on federal
              contract delivery. Our 23-year relationship with the veteran
              community gives prime contractors direct access to a pool of
              transitioning service members with active or recently expired
              clearances — before they hit the open market.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "540K+", l: "Cleared profiles" },
                { v: "28d", l: "Avg. fill time" },
                { v: "73%", l: "Retention at 12mo" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-[28px] md:text-[32px] font-semibold tracking-tight text-ink-900 tabular-nums">
                    {s.v}
                  </p>
                  <p className="mt-1 text-[12px] font-mono uppercase tracking-[0.14em] text-ink-500">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <ClearanceBreakdown />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ClearanceBreakdown() {
  const tiers = [
    { label: "Top Secret / SCI", count: 142000, pct: 26, accent: true },
    { label: "Top Secret", count: 184000, pct: 34 },
    { label: "Secret", count: 174000, pct: 32 },
    { label: "Public Trust", count: 40000, pct: 8 },
  ];
  return (
    <div className="rounded-2xl border border-[var(--border-soft)] bg-white p-7 md:p-8">
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
            Network composition
          </p>
          <p className="mt-1 font-display text-[20px] font-medium text-ink-900 tracking-tight">
            Cleared talent breakdown
          </p>
        </div>
        <Lock size={16} className="text-ink-400" />
      </div>

      <div className="mt-6 space-y-5">
        {tiers.map((t) => (
          <div key={t.label}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] font-medium text-ink-800">
                {t.label}
              </span>
              <span className="font-mono text-[12px] text-ink-600 tabular-nums">
                {new Intl.NumberFormat("en-US").format(t.count)}
              </span>
            </div>
            <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  t.accent ? "bg-electric" : "bg-ink-700"
                }`}
                style={{ width: `${t.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[12px]">
        <span className="text-ink-500">
          Updated quarterly · Self-reported & verified
        </span>
        <span className="font-mono uppercase tracking-[0.14em] text-electric font-medium">
          Q4 2026
        </span>
      </div>
    </div>
  );
}

function ContractVehiclesSection() {
  const vehicles = [
    { name: "GSA Schedule", code: "70 IT", status: "Active" },
    { name: "SeaPort-NxG", code: "Subcontractor", status: "Active" },
    { name: "CIO-SP4", code: "Pursuing", status: "In progress" },
    { name: "OASIS+ SB", code: "Pursuing", status: "In progress" },
    { name: "8(a) STARS III", code: "Subcontractor", status: "Active" },
    { name: "VA T4NG", code: "Subcontractor", status: "Active" },
  ];
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Contract vehicles</Eyebrow>
          <h2 className="mt-4 font-display text-display-lg font-medium text-ink-900 leading-[1.05]">
            How agencies buy from us.
          </h2>
          <p className="mt-4 text-[16px] text-ink-500 leading-relaxed">
            VIQTORY delivers under multiple contract vehicles as both prime and
            subcontractor. Selected vehicles below — full schedule available on
            request.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--border-soft)] overflow-hidden">
          <table className="w-full">
            <thead className="bg-ink-50/60">
              <tr className="text-left">
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 font-medium">
                  Vehicle
                </th>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 font-medium">
                  Role
                </th>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              {vehicles.map((v) => (
                <tr key={v.name} className="bg-white hover:bg-ink-50/40 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-display text-[16px] font-medium text-ink-900">
                      {v.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[14px] text-ink-700">{v.code}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium ${
                        v.status === "Active"
                          ? "bg-electric-100 text-electric-600"
                          : "bg-flag-gold/10 text-flag-gold"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          v.status === "Active"
                            ? "bg-electric"
                            : "bg-flag-gold"
                        }`}
                      />
                      {v.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}

function CyberSection() {
  const services = [
    {
      icon: <Server size={18} />,
      title: "Risk Management & Compliance",
      lines: ["NIST 800-53 / 800-171", "CMMC 2.0 readiness", "FedRAMP advisory"],
    },
    {
      icon: <Eye size={18} />,
      title: "Assessment & Testing",
      lines: ["Vulnerability assessment", "Penetration testing", "Red team exercises"],
    },
    {
      icon: <AlertTriangle size={18} />,
      title: "SOC & Threat Operations",
      lines: ["24/7 monitoring augmentation", "Incident response", "Threat hunting"],
    },
    {
      icon: <Network size={18} />,
      title: "Workforce Development",
      lines: ["Cyber upskilling for veterans", "DoD 8570 / 8140 alignment", "Cleared analyst pipeline"],
    },
  ];

  return (
    <Section className="bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow variant="light">Cybersecurity</Eyebrow>
            <h2 className="mt-4 font-display text-display-xl font-medium text-white leading-[1.05]">
              Where compliance meets cleared workforce.
            </h2>
            <p className="mt-5 text-[16px] text-white/60 leading-relaxed">
              Cyber capability delivered through Assured LogIQ, our affiliated
              IT services and risk management practice. The same SDVOSB
              advantage. The same cleared veteran talent pool.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all"
                >
                  <div className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-electric/15 text-electric">
                    {s.icon}
                  </div>
                  <h3 className="mt-5 font-display text-[18px] font-medium text-white tracking-tight">
                    {s.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {s.lines.map((l) => (
                      <li
                        key={l}
                        className="text-[13px] text-white/60 flex items-start gap-2"
                      >
                        <span className="mt-2 h-px w-3 bg-white/30 shrink-0" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CapabilityStatement() {
  return (
    <Section>
      <Container>
        <div className="rounded-2xl border border-[var(--border-soft)] bg-white p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <Eyebrow variant="electric">Differentiators</Eyebrow>
              <h2 className="mt-4 font-display text-display-md font-medium text-ink-900 leading-[1.1]">
                Why agencies and primes choose VIQTORY.
              </h2>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    h: "23 years of veteran community trust",
                    s: "Built the largest civilian-produced veteran transition resource in the country (G.I. Jobs®). That trust translates into pipeline access no competitor can replicate.",
                  },
                  {
                    h: "SDVOSB set-aside eligibility",
                    s: "Verified service-disabled veteran-owned. Eligible for set-aside contracts and meets prime subcontracting goals automatically.",
                  },
                  {
                    h: "Vertically integrated cyber + staffing",
                    s: "Through Assured LogIQ, we deliver both the cleared workforce and the cyber capability under one accountable partner.",
                  },
                  {
                    h: "First-party data moat",
                    s: "22M+ military profiles. No vendor in the federal space matches our depth on cleared veteran sourcing.",
                  },
                ].map((p) => (
                  <li key={p.h} className="flex items-start gap-4">
                    <Award size={18} className="text-electric mt-1 shrink-0" />
                    <div>
                      <p className="font-display text-[18px] font-medium text-ink-900">
                        {p.h}
                      </p>
                      <p className="mt-1 text-[14px] text-ink-500 leading-relaxed">
                        {p.s}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-ink-50/60 border border-[var(--border-subtle)] p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
                  Past performance
                </p>
                <h3 className="mt-2 font-display text-[20px] font-medium text-ink-900">
                  Selected agencies & primes
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "Department of Veterans Affairs",
                    "Department of Defense (subcontractor)",
                    "DynCorp International",
                    "Vinnell Arabia",
                    "AECOM",
                    "FirstEnergy",
                  ].map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2.5 text-[14px] text-ink-700"
                    >
                      <span className="h-1 w-1 rounded-full bg-electric" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-5 border-t border-[var(--border-subtle)] text-[12px] text-ink-400">
                  Full past performance available under NDA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CTA() {
  return (
    <Section className="bg-ink-50/30">
      <Container>
        <div className="rounded-3xl bg-ink-900 text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.04]" />
          <div className="absolute -top-32 right-0 w-[500px] h-[400px] bg-electric/15 blur-[120px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow variant="light">GovCon engagement</Eyebrow>
              <h2 className="mt-4 font-display text-display-lg font-medium text-white leading-[1.05]">
                Tell us about the contract.
              </h2>
              <p className="mt-4 text-[15px] text-white/60 max-w-md">
                30-minute capability discussion with our Government Solutions
                team. We&apos;ll pull our cleared talent dashboard live.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Button
                variant="secondary"
                size="lg"
                withArrow
                className="!bg-white !text-ink-900 hover:!bg-electric-100"
              >
                Book GovCon call
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="!text-white hover:!bg-white/10"
              >
                Download cap statement
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
