export type ProspectDraft = {
  businessName: string;
  region: string;
  publicWebsite?: string;
  need: string;
  contactPermission: "unknown" | "consented";
};
export function assessProspectDraft(draft: ProspectDraft) {
  if (!draft.businessName.trim() || !draft.region.trim() || !draft.need.trim()) {
    throw new Error("Business name, location and need are required");
  }
  return {
    ...draft,
    contactAllowed: draft.contactPermission === "consented",
    suggestedNextStep: draft.contactPermission === "consented" ?
      "Prepare a human-reviewed proposal" :
      "Verify publicly available business information and applicable outreach rules; do not send a message",
    status: "RESEARCH_DRAFT" as const,
  };
}
// No scraping, CRM persistence or outbound messaging.
