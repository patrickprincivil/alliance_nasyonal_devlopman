// Read-only MVP registry. Reuse shared CRM, pricing, approvals and audit.
export const COMMERCE_MODULES = [
  { id:"products", label:"Product Catalog", description:"Digital and physical listings with eligibility review" },
  { id:"marketplaces", label:"Marketplaces", description:"Etsy and Walmart connector readiness; no active connection" },
  { id:"crm", label:"Customer CRM", description:"Reuse existing clients, inquiries and lead workflow" },
  { id:"manufacturing", label:"Manufacturing & Sourcing", description:"Customer specification, RFQ, vendor checks and quality gates" },
  { id:"finance", label:"Revenue & Pricing", description:"Reuse RevenueOS quote, payment and profitability services" },
  { id:"automation", label:"Automation", description:"Approvals before external communications, charges or fulfillment" },
  { id:"software-intelligence", label:"Software Intelligence", description:"Capterra vendor comparison and license evaluation" },
] as const;
export const PLATFORM_CANDIDATES = [
  { name:"Etsy", role:"Original products and digital goods", state:"Not connected" },
  { name:"Walmart Marketplace", role:"Eligible physical goods", state:"Not connected" },
  { name:"Capterra", role:"Research and product comparisons", state:"Research only" },
  { name:"MOD Leads", role:"Manufacturing agency offer to verify", state:"Not subscribed" },
  { name:"GoHighLevel", role:"CRM/automation integration candidate", state:"Not connected" },
] as const;
