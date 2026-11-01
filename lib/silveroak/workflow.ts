import { PROJECT_STAGES, TASK_STAGES, type ProjectStage, type TaskStage } from "./catalog";

// Only explicit transitions are permitted. These helpers do not persist data
// or grant permission: callers must enforce server-side authorization.
const projectTransitions: Record<ProjectStage, readonly ProjectStage[]> = {
  NEW_LEAD: ["QUALIFIED"],
  QUALIFIED: ["DISCOVERY"],
  DISCOVERY: ["QUOTE_SENT"],
  QUOTE_SENT: ["DEPOSIT_PAID", "DISCOVERY"],
  DEPOSIT_PAID: ["BUILDING"],
  BUILDING: ["REVIEW"],
  REVIEW: ["BUILDING", "LAUNCH"],
  LAUNCH: ["MONTHLY_CLIENT"],
  MONTHLY_CLIENT: [],
};
const taskTransitions: Record<TaskStage, readonly TaskStage[]> = {
  BACKLOG: ["READY"],
  READY: ["RUNNING", "BACKLOG"],
  RUNNING: ["REVIEW", "FAILED"],
  REVIEW: ["RUNNING", "APPROVED", "FAILED"],
  APPROVED: ["DEPLOYED"],
  FAILED: ["READY"],
  DEPLOYED: [],
};

export function isProjectStage(value: unknown): value is ProjectStage {
  return typeof value === "string" && PROJECT_STAGES.some((stage) => stage === value);
}
export function isTaskStage(value: unknown): value is TaskStage {
  return typeof value === "string" && TASK_STAGES.some((stage) => stage === value);
}
export function canTransitionProject(from: ProjectStage, to: ProjectStage) {
  return projectTransitions[from].includes(to);
}
export function canTransitionTask(from: TaskStage, to: TaskStage) {
  return taskTransitions[from].includes(to);
}
