export const RECRUITMENT_MODULES = [
  { slug: "jobs", title: "Job Discovery", description: "Verified, source-linked job listings only" },
  { slug: "candidates", title: "Candidate Readiness", description: "Skills, consent and voluntary registration design" },
  { slug: "employers", title: "Employer Verification", description: "Check company identity, vacancies and recruitment authorization" },
  { slug: "matching", title: "Skills Matching", description: "Explainable suggestions reviewed by a qualified recruiter" },
  { slug: "alerts", title: "Job Alerts", description: "Opt-in notifications and unsubscribe controls" },
  { slug: "relocation", title: "Relocation Readiness", description: "Housing, travel budgets, licensing and immigration requirements" },
] as const;
export const JOB_SECTORS = [
  "Healthcare", "Agriculture", "Construction", "Transport",
  "Aviation", "Information Technology", "Manufacturing", "Public Service",
] as const;
export const RECRUITMENT_COUNTRIES = ["Canada", "United States", "Haiti", "Dominican Republic"] as const;
export const RECRUITMENT_SAFEGUARDS = [
  "Candidate consent and data minimization",
  "No discriminatory protected-attribute scoring",
  "Human review before hiring decisions",
  "No unverified employer or vacancy portrayed as approved",
  "No candidate recruitment fees where prohibited",
  "Work authorization and licensing verified locally",
  "Relocation budget guidance: six months living costs or documented support is an internal planning recommendation",
] as const;
