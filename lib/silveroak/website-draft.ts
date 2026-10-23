import { STARTER_TEMPLATES } from "./templates";

export type WebsiteDraftInput = {
  businessName: string;
  description: string;
  templateId: string;
  locale: string;
};
export type WebsiteDraft = {
  title: string;
  tagline: string;
  template: string;
  locale: string;
  sections: { heading: string; body: string }[];
  publicationState: "DRAFT";
};

// Safe deterministic draft to prove the editor workflow.
// Not an AI model call, a saved website, or a production publisher.
export function createWebsiteDraft(input: WebsiteDraftInput): WebsiteDraft {
  const businessName = input.businessName.trim().slice(0, 100);
  const description = input.description.trim().slice(0, 500);
  const template = STARTER_TEMPLATES.find((item) => item.id === input.templateId);
  if (!businessName || !description || !template) throw new Error("Valid name, description and template required");
  if (!/^[a-z]{2}(?:-[A-Z]{2})?$/.test(input.locale)) throw new Error("Invalid locale");
  return {
    title: businessName,
    tagline: description,
    template: template.name,
    locale: input.locale,
    sections: [
      { heading: "About", body: description },
      { heading: "Services", body: `Explore what ${businessName} offers. Replace this placeholder with verified details.` },
      { heading: "Contact", body: "Add business-approved contact details before publication." },
    ],
    publicationState: "DRAFT",
  };
}
