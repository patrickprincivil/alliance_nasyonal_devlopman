export const SERVICE_PACKAGES = [
  { id: "launch", name: "Launch", setupCad: 1500, monthlyCad: 149 },
  { id: "growth", name: "Growth", setupCad: 3000, monthlyCad: 299 },
  { id: "ai-business", name: "AI Business", setupCad: 5000, monthlyCad: 499 },
] as const;

export const PROJECT_STAGES = [
  "NEW_LEAD", "QUALIFIED", "DISCOVERY", "QUOTE_SENT", "DEPOSIT_PAID",
  "BUILDING", "REVIEW", "LAUNCH", "MONTHLY_CLIENT",
] as const;

export type ProjectStage = (typeof PROJECT_STAGES)[number];
export const TASK_STAGES = [
  "BACKLOG", "READY", "RUNNING", "REVIEW", "APPROVED", "FAILED", "DEPLOYED",
] as const;
export type TaskStage = (typeof TASK_STAGES)[number];
