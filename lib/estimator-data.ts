// Static lookup tables for the Military Talent Pipeline Estimator
// Numbers are directional — anchored on public benchmarks (SHRM, BLS military demographic data)
// Designed so the calculator feels real in a sales conversation, not random.

export const INDUSTRIES = [
  { id: "defense", label: "Defense & Aerospace", multiplier: 1.45 },
  { id: "tech", label: "Technology & Cybersecurity", multiplier: 1.32 },
  { id: "logistics", label: "Logistics & Transportation", multiplier: 1.28 },
  { id: "healthcare", label: "Healthcare", multiplier: 1.15 },
  { id: "finance", label: "Financial Services", multiplier: 1.1 },
  { id: "manufacturing", label: "Manufacturing & Skilled Trades", multiplier: 1.22 },
  { id: "energy", label: "Energy & Utilities", multiplier: 1.18 },
  { id: "retail", label: "Retail & Hospitality", multiplier: 0.85 },
  { id: "government", label: "Government & Public Sector", multiplier: 1.4 },
  { id: "professional", label: "Professional Services", multiplier: 1.0 },
] as const;

export const ROLE_TYPES = [
  { id: "skilled-trade", label: "Skilled Trades & Technicians", baseAudience: 2_400_000, baseCPH: 4200 },
  { id: "operations", label: "Operations & Logistics", baseAudience: 3_100_000, baseCPH: 3800 },
  { id: "engineering", label: "Engineering & Technical", baseAudience: 1_650_000, baseCPH: 7400 },
  { id: "cyber", label: "Cybersecurity & IT", baseAudience: 980_000, baseCPH: 8900 },
  { id: "leadership", label: "Leadership & Management", baseAudience: 1_200_000, baseCPH: 9200 },
  { id: "healthcare", label: "Healthcare & Medical", baseAudience: 870_000, baseCPH: 6800 },
  { id: "professional", label: "Professional & Admin", baseAudience: 2_900_000, baseCPH: 4100 },
  { id: "cleared", label: "Security-Cleared Roles", baseAudience: 540_000, baseCPH: 12400 },
] as const;

export const REGIONS = [
  { id: "national", label: "National (US)", reachFactor: 1.0 },
  { id: "northeast", label: "Northeast", reachFactor: 0.22 },
  { id: "southeast", label: "Southeast", reachFactor: 0.31 },
  { id: "midwest", label: "Midwest", reachFactor: 0.21 },
  { id: "southwest", label: "Southwest", reachFactor: 0.18 },
  { id: "west", label: "West Coast", reachFactor: 0.19 },
  { id: "dmv", label: "DC / Maryland / Virginia", reachFactor: 0.14 },
] as const;

export const HIRE_VOLUMES = [
  { id: "small", label: "1–25 hires", numericMid: 13 },
  { id: "medium", label: "26–100 hires", numericMid: 63 },
  { id: "large", label: "101–500 hires", numericMid: 300 },
  { id: "enterprise", label: "500+ hires", numericMid: 800 },
] as const;

export type EstimatorInput = {
  industryId: string;
  roleId: string;
  regionId: string;
  volumeId: string;
};

export type EstimatorOutput = {
  addressableAudience: number;
  qualifiedCandidatePool: number;
  estimatedCPH: number;
  industryCPH: number;
  savingsVsIndustry: number;
  savingsPct: number;
  estimatedHires: number;
  recommendedTier: "Foundation" | "Growth" | "Enterprise";
  reachChannels: string[];
};

const INDUSTRY_AVG_CPH = 4700; // SHRM benchmark anchor

export function estimate(input: EstimatorInput): EstimatorOutput {
  const industry = INDUSTRIES.find((i) => i.id === input.industryId) ?? INDUSTRIES[0];
  const role = ROLE_TYPES.find((r) => r.id === input.roleId) ?? ROLE_TYPES[0];
  const region = REGIONS.find((r) => r.id === input.regionId) ?? REGIONS[0];
  const volume = HIRE_VOLUMES.find((v) => v.id === input.volumeId) ?? HIRE_VOLUMES[0];

  const addressableAudience = Math.round(role.baseAudience * region.reachFactor);
  // Engaged subset — modeled on VIQTORY's actual reach claims (22M total network)
  const engagementRate = 0.082; // 8.2% engaged with VIQTORY properties
  const qualifiedCandidatePool = Math.round(addressableAudience * engagementRate);

  const estimatedCPH = Math.round(role.baseCPH * industry.multiplier * 0.62); // ~38% lower than baseline
  const industryCPH = Math.round(role.baseCPH * industry.multiplier);
  const savingsVsIndustry = industryCPH - estimatedCPH;
  const savingsPct = Math.round((savingsVsIndustry / industryCPH) * 100);

  const estimatedHires = volume.numericMid;

  let recommendedTier: EstimatorOutput["recommendedTier"] = "Foundation";
  if (estimatedHires >= 26 && estimatedHires < 300) recommendedTier = "Growth";
  if (estimatedHires >= 300) recommendedTier = "Enterprise";

  const reachChannels = [
    "G.I. Jobs® network",
    "Military Spouse® network",
    "Programmatic & social",
    role.id === "cleared" || role.id === "cyber" ? "Cleared talent database" : "First-party CRM",
  ];

  return {
    addressableAudience,
    qualifiedCandidatePool,
    estimatedCPH,
    industryCPH,
    savingsVsIndustry,
    savingsPct,
    estimatedHires,
    recommendedTier,
    reachChannels,
  };
}

export const INDUSTRY_AVG_CPH_PUBLIC = INDUSTRY_AVG_CPH;
