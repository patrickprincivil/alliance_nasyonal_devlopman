export const BROADCAST_STAGES = [
  { id: 1, name: "Digital studio", goal: "Record and edit multilingual programmes", status: "planned" },
  { id: 2, name: "Internet live streaming", goal: "One moderated online channel", status: "planned" },
  { id: 3, name: "IPTV and mobile applications", goal: "Authorized digital distribution", status: "planned" },
  { id: 4, name: "Broadcast master control", goal: "Scheduling, playout and monitoring", status: "planned" },
  { id: 5, name: "Licensed satellite uplink", goal: "Lease capacity and obtain appropriate authorizations", status: "planned" },
  { id: 6, name: "Haiti and DR distribution", goal: "Regional downlinks and distribution partnerships", status: "planned" },
  { id: 7, name: "Caribbean expansion", goal: "Partner broadcasting networks", status: "planned" },
  { id: 8, name: "International distribution", goal: "Scale only after proven financial and regulatory readiness", status: "planned" },
] as const;
export const BROADCAST_MODULES = [
  "Production Studio", "Master Control", "Media Storage", "Programming",
  "Streaming and CDN", "Rights and Licensing", "Captioning and Translation",
  "Audience Analytics", "Power and Resilience", "Cybersecurity",
  "Satellite Uplink", "Downlink Distribution", "Equipment Maintenance",
  "Regulatory Compliance", "Human Editorial Review",
] as const;
// Illustrative USD purchasing assumptions, not vendor quotes.
// Optional laptop cost assumes the owner has no suitable computer.
export const STARTER_BUDGET = [
  { item: "Production computer", low: 0, high: 900, notes: "Reuse a compatible existing computer; high end if purchase needed" },
  { item: "Two 1080p webcams or HDMI cameras", low: 100, high: 400, notes: "Check interface compatibility and capture needs" },
  { item: "Microphones and audio accessories", low: 80, high: 250, notes: "Two microphones, mounts/cables, monitoring headphones" },
  { item: "Lighting and tripods", low: 80, high: 220, notes: "Two lights and stable stands" },
  { item: "Switching / capture", low: 0, high: 445, notes: "OBS software-only or optional ATEM Mini Pro hardware" },
  { item: "Storage and cables", low: 70, high: 180, notes: "External backup storage, adapters, HDMI/USB cables" },
  { item: "Backup electricity", low: 200, high: 850, notes: "UPS or solar/battery sized from measured load" },
  { item: "Internet setup", low: 40, high: 200, notes: "Router/connection equipment; monthly service excluded" },
] as const;
export const STARTER_TOTALS = STARTER_BUDGET.reduce(
  (totals, item) => ({ low: totals.low + item.low, high: totals.high + item.high }),
  { low: 0, high: 0 },
);
