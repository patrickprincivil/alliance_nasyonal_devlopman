export const MARKETING_MODULES = [
  { slug: "integrations", label: "Integration Hub", description: "Connection inventory and approval queue" },
  { slug: "campaigns", label: "Campaigns", description: "Campaign planning and review" },
  { slug: "analytics", label: "Analytics", description: "Metrics definitions and report plans" },
  { slug: "automation", label: "Automation", description: "Human-approved workflow designs" },
  { slug: "ai-agents", label: "AI Agents", description: "Eight proposed marketing roles" },
  { slug: "leads", label: "Leads", description: "CRM intake design" },
  { slug: "revenue", label: "Revenue", description: "RevenueOS reporting links" },
] as const;
export const MARKETING_PROVIDERS = [
  { name: "Google Analytics", kind: "analytics", status: "not_connected" },
  { name: "Google Ads", kind: "ads", status: "not_connected" },
  { name: "Meta Ads", kind: "ads", status: "not_connected" },
  { name: "Facebook / Instagram", kind: "social", status: "not_connected" },
  { name: "HubSpot", kind: "crm", status: "not_connected" },
  { name: "Salesforce", kind: "crm", status: "not_connected" },
  { name: "YouTube", kind: "social", status: "not_connected" },
] as const;
export const MARKETING_AGENTS = [
  "AI Marketing Director", "AI Content Creator", "AI Social Media Manager",
  "AI Lead Generation", "AI Customer Research", "AI Campaign Analyst",
  "AI Sales Assistant", "AI Revenue Analyst",
] as const;
