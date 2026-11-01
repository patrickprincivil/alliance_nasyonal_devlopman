// Silveroak CRM public planning catalog; never store live customers here.
export const CRM_PIPELINE = [
  { key: "NEW", label: "New lead" },
  { key: "QUALIFIED", label: "Qualified" },
  { key: "DISCOVERY", label: "Discovery" },
  { key: "PROPOSAL", label: "Proposal" },
  { key: "NEGOTIATION", label: "Negotiation" },
  { key: "WON", label: "Won" },
  { key: "LOST", label: "Lost" },
] as const;
export const CRM_MVP_FEATURES = [
  { name: "Contacts & companies", detail: "Account records with consent and organization-level access." },
  { name: "Opportunities", detail: "Track deal owner, stage, next action and expected close date." },
  { name: "Quotes", detail: "Reuse the existing Silveroak server-side pricing catalog." },
  { name: "Activities", detail: "Follow-up tasks, reminders and meetings." },
  { name: "Reporting", detail: "Pipeline totals, conversions and revenue forecasts from verified records." },
] as const;
export const CRM_INTEGRATIONS = [
  "Gmail", "Outlook", "WhatsApp Business", "Stripe", "PayPal", "Square",
] as const;
