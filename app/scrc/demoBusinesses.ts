// src/lib/scoring/leadScoring.ts

export interface LeadData {
  targetCustomer: boolean;
  clearBusinessNeed: boolean;
  decisionMaker: boolean;
  hasBudget: boolean;
  buyingWithin30Days: boolean;
  requestsDemo: boolean;
}

export type LeadCategory =
  | "LOW_INTENT"
  | "POTENTIAL"
  | "QUALIFIED"
  | "HIGH_INTENT";

export interface LeadScoreResult {
  score: number;
  category: LeadCategory;
}

export function calculateLeadScore(lead: LeadData): LeadScoreResult {
  let score = 0;

  if (lead.targetCustomer) {
    score += 20;
  }

  if (lead.clearBusinessNeed) {
    score += 20;
  }

  if (lead.decisionMaker) {
    score += 20;
  }

  if (lead.hasBudget) {
    score += 15;
  }

  if (lead.buyingWithin30Days) {
    score += 15;
  }

  if (lead.requestsDemo) {
    score += 10;
  }

  let category: LeadCategory;

  if (score >= 80) {
    category = "HIGH_INTENT";
  } else if (score >= 60) {
    category = "QUALIFIED";
  } else if (score >= 30) {
    category = "POTENTIAL";
  } else {
    category = "LOW_INTENT";
  }

  return {
    score,
    category,
  };
}


