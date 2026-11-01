export const AGENT_REGISTRY = [
 { id: "research", label: "Research", requiresApproval: false },
 { id: "coding", label: "Coding", requiresApproval: true },
 { id: "prospecting", label: "Prospecting", requiresApproval: true },
 { id: "marketing", label: "Marketing", requiresApproval: true },
 { id: "security", label: "Defensive Security", requiresApproval: true },
 { id: "finance", label: "Finance", requiresApproval: true },
 { id: "satellite", label: "Satellite Network", requiresApproval: true },
 { id: "foundation", label: "Foundation", requiresApproval: true },
] as const;
export type AgentId = (typeof AGENT_REGISTRY)[number]["id"];
export type DispatcherTask = { id: string; agent: AgentId; title: string; mode: "read_only" | "propose_action"; };
export function classifyTask(task: DispatcherTask) {
 const agent = AGENT_REGISTRY.find(a => a.id === task.agent);
 if (!agent || !task.title.trim() || !task.id.trim()) throw new Error("Invalid task");
 return { ...task, state: task.mode === "propose_action" || agent.requiresApproval ? "AWAITING_HUMAN_REVIEW" as const : "DRAFT_READ_ONLY" as const };
}
// Design-only dispatcher: does not call models, run tools, spend money, or persist tasks.
