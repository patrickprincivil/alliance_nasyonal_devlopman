export type StarterTemplate = {
  id: string;
  name: string;
  industry: string;
  description: string;
  pages: readonly string[];
  features: readonly string[];
  status: "planned";
};
export const STARTER_TEMPLATES: readonly StarterTemplate[] = [
  { id: "local-business", name: "Local Business", industry: "Trades and local services",
    description: "Contact-focused website for local contractors and service providers.",
    pages: ["Home", "About", "Services", "Projects", "Contact", "Privacy"],
    features: ["Inquiries", "Service cards", "Testimonials"], status: "planned" },
  { id: "restaurant", name: "Restaurant", industry: "Food and hospitality",
    description: "Digital menu and inquiry-focused restaurant site.",
    pages: ["Home", "Menu", "About", "Gallery", "Contact", "Privacy"],
    features: ["Menu", "Opening hours", "Location"], status: "planned" },
  { id: "professional", name: "Professional", industry: "Consultants and professional services",
    description: "Professional services and lead capture website.",
    pages: ["Home", "Expertise", "About", "FAQ", "Contact", "Privacy"],
    features: ["Contact form", "Credentials", "FAQ"], status: "planned" },
  { id: "ecommerce", name: "Small Retailer", industry: "Retail",
    description: "Catalog-first storefront; checkout requires separate provider integration.",
    pages: ["Home", "Products", "About", "Contact", "Privacy", "Terms"],
    features: ["Catalog", "Product detail", "Cart specification"], status: "planned" },
  { id: "nonprofit", name: "Organization", industry: "Nonprofits and community",
    description: "Mission and program information website.",
    pages: ["Home", "Mission", "Programs", "Updates", "Contact", "Privacy"],
    features: ["Programs", "Volunteer interest", "Donation integration specification"], status: "planned" },
] as const;
