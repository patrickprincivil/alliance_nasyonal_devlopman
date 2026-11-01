// Normalized reporting math for future, verified marketing imports.
// Values are illustrative unless backed by an authorized provider sync.
export type MarketingSnapshot = {
  currency: string;
  spendMinor: number;
  attributedRevenueMinor: number;
  leads: number;
  customers: number;
  impressions: number;
  clicks: number;
};
export function summarizeMarketing(snapshot: MarketingSnapshot) {
  const { spendMinor, attributedRevenueMinor, leads, customers, impressions, clicks } = snapshot;
  const valid = [spendMinor, attributedRevenueMinor, leads, customers, impressions, clicks].every(
    (value) => Number.isSafeInteger(value) && value >= 0
  );
  if (!valid || !/^[A-Z]{3}$/.test(snapshot.currency)) throw new Error("Invalid marketing data");
  return {
    currency: snapshot.currency,
    costPerLeadMinor: leads > 0 ? Math.round(spendMinor / leads) : null,
    customerAcquisitionCostMinor: customers > 0 ? Math.round(spendMinor / customers) : null,
    returnOnAdSpend: spendMinor > 0 ? attributedRevenueMinor / spendMinor : null,
    clickThroughRate: impressions > 0 ? clicks / impressions : null,
    conversionRate: clicks > 0 ? customers / clicks : null,
    note: "Attribution, currencies, time periods and source completeness must match before comparing channels.",
  };
}
