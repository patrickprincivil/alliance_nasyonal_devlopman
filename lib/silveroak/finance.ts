export const FINANCIAL_MODULES = [
  { id: "personal-budget", name: "Personal Budget", description: "Income, expense and savings planning" },
  { id: "business-finance", name: "Business Finance", description: "Cash flow, invoices and accounting exports" },
  { id: "financial-education", name: "Financial Education", description: "General education and financial literacy" },
  { id: "retirement", name: "Retirement Planning", description: "Illustrative retirement scenarios" },
  { id: "investment-research", name: "Investment Research", description: "Public-data research, not personalized investment advice" },
  { id: "tax-documents", name: "Tax Document Organizer", description: "Secure administration for licensed professionals" },
  { id: "cross-border", name: "Cross-Border Planning", description: "Administrative checklist for country-specific professionals" },
  { id: "wealth-records", name: "Wealth Records", description: "Asset inventory and reports, no custody or trading" },
  { id: "grants", name: "Grants & Funding", description: "Reuse shared grants and business services" },
  { id: "financial-reporting", name: "Reporting", description: "Financial dashboards and exports" },
] as const;

export const FINANCIAL_AI_ROLES = [
  "AI Accountant Assistant",
  "AI Budget Planner",
  "AI Retirement Scenario Planner",
  "AI Investment Research Assistant",
  "AI Tax Document Organizer",
  "AI Business Analysis Assistant",
  "AI Financial Reporting Assistant",
] as const;
