import { SERVICE_PACKAGES } from "./catalog";

export const ADDON_CATALOG = [
  { id: "ecommerce", name: "E-commerce", setupCad: 750 },
  { id: "booking", name: "Appointment booking", setupCad: 400 },
  { id: "crm", name: "CRM integration", setupCad: 500 },
  { id: "automation", name: "AI automation", setupCad: 500 },
  { id: "portal", name: "Customer portal", setupCad: 750 },
  { id: "payments", name: "Payment integration", setupCad: 300 },
  { id: "membership", name: "Membership", setupCad: 600 },
  { id: "multilingual", name: "Multilingual setup", setupCad: 300 },
  { id: "dashboard", name: "Advanced dashboard", setupCad: 1000 },
  { id: "agent", name: "Custom AI agent", setupCad: 750 },
  { id: "pwa", name: "PWA package", setupCad: 500 },
] as const;

export function quoteFromCatalog(packageId: string, addonIds: string[]) {
  const selectedPackage = SERVICE_PACKAGES.find((p) => p.id === packageId);
  if (!selectedPackage) throw new Error("Unknown package");
  if (addonIds.length > ADDON_CATALOG.length || new Set(addonIds).size !== addonIds.length) {
    throw new Error("Duplicate or excessive add-ons");
  }
  const selectedAddons = addonIds.map((id) => {
    const addon = ADDON_CATALOG.find((x) => x.id === id);
    if (!addon) throw new Error("Unknown add-on");
    return addon;
  });
  return {
    currency: "CAD" as const,
    package: selectedPackage.name,
    addons: selectedAddons.map((a) => ({ id: a.id, name: a.name, setupCad: a.setupCad })),
    setupCad: selectedPackage.setupCad + selectedAddons.reduce((total, a) => total + a.setupCad, 0),
    monthlyCad: selectedPackage.monthlyCad,
    status: "ESTIMATE_ONLY" as const,
    notice: "Non-binding estimate before tax. Scope, third-party costs and terms require confirmation.",
  };
}
