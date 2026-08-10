export type LeadData = {
  targetCustomer: boolean;
  clearProblem: boolean;
  decisionMaker: boolean;
  budget: boolean;
  buyingSoon: boolean;
  requestsDemo: boolean;
};

export function calculateLeadScore(lead: LeadData) {
  let score = 0;

  if (lead.targetCustomer) score += 20;
  if (lead.clearProblem) score += 20;
  if (lead.decisionMaker) score += 20;
  if (lead.budget) score += 15;
  if (lead.buyingSoon) score += 15;
  if (lead.requestsDemo) score += 10;

  let status = "Low Intent";

  if (score >= 80) status = "High Intent";
  else if (score >= 60) status = "Qualified";
  else if (score >= 30) status = "Potential";

  return {
    score,
    status,
  };
}

