/** Planning-only data: no partner, coverage or licence is confirmed. */
export const SATELLITE_OPERATORS = [
  { id: "starlink", name: "Starlink / SpaceX", orbit: "LEO", use: "Pilot backhaul" },
  { id: "oneweb", name: "Eutelsat OneWeb", orbit: "LEO", use: "Community / enterprise" },
  { id: "ses", name: "SES O3b mPOWER", orbit: "MEO", use: "Regional hub capacity" },
  { id: "viasat", name: "Viasat", orbit: "GEO / multi-service", use: "Enterprise or backup" },
  { id: "hughes", name: "Hughes / EchoStar", orbit: "Satellite", use: "Rural access" },
  { id: "amazon", name: "Amazon Leo", orbit: "LEO", use: "Future option assessment" },
] as const;
export const SATELLITE_PILOTS = [
  { id: "DR-001", country: "Dominican Republic", location: "Los Llanos / San Pedro de Macorís", regulator: "INDOTEL",
    services: ["Local offline learning", "Managed community Wi-Fi (only if authorized)", "Cameras", "Smart agriculture"] },
  { id: "HT-001", country: "Haiti", location: "Jacmel / Morne-à-Brûlé", regulator: "CONATEL",
    services: ["Offline school library", "Solar power", "Rural communications (only if authorized)", "Agriculture"] },
] as const;
export const SATELLITE_GATES = [
  "Site ownership / permission verified",
  "Provider service availability and offer received",
  "Explicit right to redistribute service confirmed",
  "Country-specific regulator advice / approvals obtained",
  "Capacity model and field survey approved",
  "Hardware import / type approval checked",
  "Power, grounding and environmental safety reviewed",
  "Security segmentation and privacy review completed",
  "36-month total-cost and funding review approved",
  "Written human approval before procurement or activation",
] as const;
export const SATELLITE_FEATURES = [
  { title: "Provider procurement", description: "Compare quotes, 36-month cost, uptime, latency, CIR and redistribution rights." },
  { title: "Haiti & DR sites", description: "Site inventories, permits, maps, capacity and phased regional hub planning." },
  { title: "Three service levels", description: "Offline LAN, approved community internet and enterprise connectivity." },
  { title: "Wi-Fi and fiber", description: "Segmented local APs, backhaul, access control and lawful distribution." },
  { title: "Devices and cameras", description: "Local-first cameras, computers, sensors, smart TVs and robot monitoring." },
  { title: "Offline education", description: "LAN-accessible teaching content and library, subject to rights and safeguarding." },
  { title: "Resilience", description: "UPS / solar, failover and incident response plans." },
  { title: "Network operations", description: "Future tickets, telemetry, capacity alerts and human-reviewed AI recommendations." },
  { title: "Billing / subsidies", description: "Reuse shared RevenueOS; no new payment silo." },
  { title: "Regulatory / security", description: "Country-specific INDOTEL and CONATEL gates, tenant separation and audit." },
] as const;
