"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  INDUSTRIES,
  ROLE_TYPES,
  REGIONS,
  HIRE_VOLUMES,
  estimate,
  INDUSTRY_AVG_CPH_PUBLIC,
} from "@/lib/estimator-data";
import { useCountUp } from "@/lib/use-count-up";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Target,
  Users,
  DollarSign,
  TrendingDown,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
} from "lucide-react";

type Step = 0 | 1 | 2 | 3 | 4;

const STEPS = [
  { id: 0, label: "Industry" },
  { id: 1, label: "Role" },
  { id: 2, label: "Region" },
  { id: 3, label: "Volume" },
  { id: 4, label: "Results" },
] as const;

function formatNumber(n: number) {
  return new Intl.NumberFormat("en-US").format(n);
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function PipelineEstimator({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState<Step>(0);
  const [industryId, setIndustryId] = useState<string>("");
  const [roleId, setRoleId] = useState<string>("");
  const [regionId, setRegionId] = useState<string>("");
  const [volumeId, setVolumeId] = useState<string>("");

  const result = useMemo(() => {
    if (!industryId || !roleId || !regionId || !volumeId) return null;
    return estimate({ industryId, roleId, regionId, volumeId });
  }, [industryId, roleId, regionId, volumeId]);

  const canProceed = (s: Step) =>
    (s === 0 && industryId) ||
    (s === 1 && roleId) ||
    (s === 2 && regionId) ||
    (s === 3 && volumeId);

  const reset = () => {
    setStep(0);
    setIndustryId("");
    setRoleId("");
    setRegionId("");
    setVolumeId("");
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-[var(--border-soft)] bg-white shadow-sharp overflow-hidden",
        compact ? "" : ""
      )}
    >
      {/* Header strip */}
      <div className="relative border-b border-[var(--border-subtle)] px-6 md:px-10 py-6 bg-gradient-to-b from-ink-50/60 to-transparent">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-display text-[22px] md:text-[26px] font-semibold tracking-tight text-ink-900">
              Military Talent Pipeline Estimator
            </h3>
          </div>
          <div className="flex items-center gap-1.5">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center gap-1.5">
                <div
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    step > s.id
                      ? "w-6 bg-electric"
                      : step === s.id
                      ? "w-10 bg-ink-900"
                      : "w-6 bg-ink-200"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 py-8 md:py-10 min-h-[420px] flex flex-col">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <p className="text-[13px] font-mono uppercase tracking-[0.14em] text-ink-400">
                Step 1 of 4
              </p>
              <h4 className="mt-2 font-display text-[28px] md:text-[34px] font-medium tracking-tight text-ink-900">
                What industry are you hiring for?
              </h4>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-2">
                {INDUSTRIES.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setIndustryId(opt.id);
                      setTimeout(() => setStep(1), 200);
                    }}
                    className={cn(
                      "px-4 py-3.5 rounded-lg border text-left text-[15px] font-semibold transition-all duration-200",
                      industryId === opt.id
                        ? "border-ink-900 bg-ink-900 text-white shadow-sharp"
                        : "border-ink-200 bg-white text-ink-900 hover:border-ink-400 hover:bg-ink-50"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <p className="text-[13px] font-mono uppercase tracking-[0.14em] text-ink-400">
                Step 2 of 4
              </p>
              <h4 className="mt-2 font-display text-[28px] md:text-[34px] font-medium tracking-tight text-ink-900">
                What kind of roles?
              </h4>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2">
                {ROLE_TYPES.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setRoleId(opt.id);
                      setTimeout(() => setStep(2), 200);
                    }}
                    className={cn(
                      "px-4 py-3.5 rounded-lg border text-left text-[15px] font-semibold transition-all duration-200 flex items-center justify-between",
                      roleId === opt.id
                        ? "border-ink-900 bg-ink-900 text-white shadow-sharp"
                        : "border-ink-200 bg-white text-ink-900 hover:border-ink-400 hover:bg-ink-50"
                    )}
                  >
                    <span>{opt.label}</span>
                    {opt.id === "cleared" && (
                      <span
                        className={cn(
                          "font-mono text-[10px] uppercase tracking-[0.14em] px-1.5 py-0.5 rounded",
                          roleId === opt.id
                            ? "bg-electric text-white"
                            : "bg-flag-gold/10 text-flag-gold"
                        )}
                      >
                        High Demand
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <p className="text-[13px] font-mono uppercase tracking-[0.14em] text-ink-400">
                Step 3 of 4
              </p>
              <h4 className="mt-2 font-display text-[28px] md:text-[34px] font-medium tracking-tight text-ink-900">
                Where are you hiring?
              </h4>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-2">
                {REGIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setRegionId(opt.id);
                      setTimeout(() => setStep(3), 200);
                    }}
                    className={cn(
                      "px-4 py-3.5 rounded-lg border text-left text-[15px] font-semibold transition-all duration-200",
                      regionId === opt.id
                        ? "border-ink-900 bg-ink-900 text-white shadow-sharp"
                        : "border-ink-200 bg-white text-ink-900 hover:border-ink-400 hover:bg-ink-50"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <p className="text-[13px] font-mono uppercase tracking-[0.14em] text-ink-400">
                Step 4 of 4
              </p>
              <h4 className="mt-2 font-display text-[28px] md:text-[34px] font-medium tracking-tight text-ink-900">
                How many hires per year?
              </h4>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2">
                {HIRE_VOLUMES.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setVolumeId(opt.id);
                      setTimeout(() => setStep(4), 200);
                    }}
                    className={cn(
                      "px-5 py-4 rounded-lg border text-left transition-all duration-200",
                      volumeId === opt.id
                        ? "border-ink-900 bg-ink-900 text-white shadow-sharp"
                        : "border-ink-200 bg-white text-ink-900 hover:border-ink-400 hover:bg-ink-50"
                    )}
                  >
                    <div className="font-display text-[20px] font-medium">
                      {opt.label}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && result && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1"
            >
              <ResultsView result={result} onReset={reset} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back button (steps 1-3) */}
        {step > 0 && step < 4 && (
          <div className="mt-auto pt-6 flex justify-between items-center">
            <button
              onClick={() => setStep((step - 1) as Step)}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-500 hover:text-ink-900 transition-colors"
            >
              <ArrowLeft size={14} />
              Back
            </button>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
              Powered by VIQTORY first-party data
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ResultsView({
  result,
  onReset,
}: {
  result: ReturnType<typeof estimate>;
  onReset: () => void;
}) {
  const audience = useCountUp(result.addressableAudience, { duration: 1400, start: true });
  const qualified = useCountUp(result.qualifiedCandidatePool, { duration: 1600, start: true });
  const cph = useCountUp(result.estimatedCPH, { duration: 1400, start: true });
  const savings = useCountUp(result.savingsPct, { duration: 1200, start: true });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-electric" />
          <Eyebrow variant="electric">Your Estimate</Eyebrow>
        </div>
        <h4 className="mt-3 font-display text-[28px] md:text-[34px] font-medium tracking-tight text-ink-900 leading-[1.1]">
          Here&apos;s what your military talent pipeline looks like.
        </h4>
        <p className="mt-3 text-[14px] text-ink-500 max-w-md">
          Estimates use VIQTORY&apos;s first-party engagement data and SHRM industry
          cost-per-hire benchmarks. Final numbers depend on campaign mix.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <Metric
            icon={<Target size={16} />}
            label="Addressable audience"
            value={formatNumber(audience)}
            sub="military prospects"
          />
          <Metric
            icon={<Users size={16} />}
            label="Qualified candidate pool"
            value={formatNumber(qualified)}
            sub="engaged with VIQTORY"
            accent
          />
          <Metric
            icon={<DollarSign size={16} />}
            label="Est. cost per hire"
            value={formatCurrency(cph)}
            sub={`vs ${formatCurrency(result.industryCPH)} industry avg`}
          />
          <Metric
            icon={<TrendingDown size={16} />}
            label="Savings vs industry"
            value={`${savings}%`}
            sub={`${formatCurrency(result.savingsVsIndustry)} per hire`}
            accent
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {result.reachChannels.map((ch) => (
            <span
              key={ch}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink-50 border border-ink-100 text-[12px] font-medium text-ink-700"
            >
              <Check size={12} className="text-electric" />
              {ch}
            </span>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="rounded-xl border border-ink-900 bg-ink-900 text-white p-6 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-electric/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <Eyebrow variant="light" className="!text-white/70">
              Recommended Tier
            </Eyebrow>
            <p className="mt-3 font-display text-[36px] font-semibold tracking-tight">
              {result.recommendedTier}
            </p>
            <p className="mt-1 text-[13px] text-white/60">
              Based on {result.estimatedHires} estimated hires
            </p>

            <div className="mt-6 space-y-2.5 text-[13px]">
              <Bullet>Dedicated programmatic + social campaign</Bullet>
              <Bullet>Featured G.I. Jobs® placement</Bullet>
              <Bullet>First-party CRM activation</Bullet>
              <Bullet>Quarterly performance review</Bullet>
            </div>

            <Button
              variant="secondary"
              size="md"
              withArrow
              className="mt-7 w-full !bg-white !text-ink-900 hover:!bg-electric-100"
            >
              Get a custom proposal
            </Button>

            <button
              onClick={onReset}
              className="mt-3 w-full text-center text-[12px] text-white/60 hover:text-white transition-colors"
            >
              Start over with different inputs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4",
        accent
          ? "border-electric/30 bg-electric-100/40"
          : "border-ink-100 bg-ink-50/40"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.14em]",
          accent ? "text-electric-600" : "text-ink-500"
        )}
      >
        {icon}
        <span>{label}</span>
      </div>
      <p className="mt-2 font-display text-[28px] md:text-[32px] font-semibold tracking-tight text-ink-900 tabular-nums">
        {value}
      </p>
      <p className="mt-1 text-[12px] text-ink-500">{sub}</p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <Check size={14} className="text-electric mt-0.5 shrink-0" />
      <span className="text-white/85">{children}</span>
    </div>
  );
}
