import { SERVICE_PACKAGES } from "./catalog";

export type QuoteInput = {
  packageId: (typeof SERVICE_PACKAGES)[number]["id"];
  addons?: { name: string; setupCad: number }[];
};
export type QuoteEstimate = {
  currency: "CAD";
  baseSetupCad: number;
  addonsSetupCad: number;
  totalSetupCad: number;
  monthlyCad: number;
  description: string;
};

// Deterministic pricing preview; no taxes, payments, or legally binding quote.
export function calculateQuote(input: QuoteInput): QuoteEstimate {
  const chosen = SERVICE_PACKAGES.find((p) => p.id === input.packageId);
  if (!chosen) throw new Error("Unknown package");
  const addons = input.addons ?? [];
  if (addons.some((a) => !Number.isFinite(a.setupCad) || a.setupCad < 0 || a.setupCad > 1000000)) {
    throw new Error("Invalid add-on amount");
  }
  const extras = addons.reduce((sum, a) => sum + a.setupCad, 0);
  return {
    currency: "CAD",
    baseSetupCad: chosen.setupCad,
    addonsSetupCad: extras,
    totalSetupCad: chosen.setupCad + extras,
    monthlyCad: chosen.monthlyCad,
    description: "Illustrative pre-tax estimate only. Confirm scope, terms and third-party costs before signing.",
  };
}
