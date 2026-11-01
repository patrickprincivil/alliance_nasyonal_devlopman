"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICE_PACKAGES } from "@/lib/silveroak/catalog";
import { calculateQuote } from "@/lib/silveroak/quote";

const upgrades = [
  { name: "E-commerce", setupCad: 750 },
  { name: "Appointment booking", setupCad: 400 },
  { name: "CRM integration", setupCad: 500 },
  { name: "AI automation", setupCad: 500 },
  { name: "Customer portal", setupCad: 750 },
  { name: "Payment integration", setupCad: 300 },
  { name: "Membership", setupCad: 600 },
  { name: "Multilingual setup", setupCad: 300 },
  { name: "Advanced dashboard", setupCad: 1000 },
  { name: "Custom AI agent", setupCad: 750 },
  { name: "PWA package", setupCad: 500 },
];

export default function QuotePreviewPage() {
  const [packageId, setPackageId] = useState<(typeof SERVICE_PACKAGES)[number]["id"]>("launch");
  const [selected, setSelected] = useState<string[]>([]);
  const chosen = upgrades.filter((addon) => selected.includes(addon.name));
  const quote = calculateQuote({ packageId, addons: chosen });
  return (
    <main className="page">
      <p className="eyebrow">Silveroak / Pricing Preview</p>
      <h1>Estimate a Business App Project</h1>
      <p>Public planning estimate, not a binding quote or invoice. Taxes, hosting, domains, usage and custom scope are excluded.</p>
      <section className="subSection">
        <label htmlFor="service-package">Choose a package</label>
        <select id="service-package" value={packageId} onChange={(e) => setPackageId(e.target.value as typeof packageId)} style={{ padding: 12, display: "block", margin: "16px 0" }}>
          {SERVICE_PACKAGES.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <h2>Optional one-time upgrades</h2>
        <div style={{ display: "grid", gap: 10, margin: "18px 0 26px" }}>
          {upgrades.map((addon) => (
            <label key={addon.name} style={{ display: "flex", gap: 12 }}>
              <input type="checkbox" checked={selected.includes(addon.name)} onChange={(e) => setSelected((before) => e.target.checked ? [...before, addon.name] : before.filter((x) => x !== addon.name))} />
              {addon.name} — CA${addon.setupCad.toLocaleString("en-CA")}
            </label>
          ))}
        </div>
        <h2>Indicative estimate</h2>
        <p>Setup: <strong>CA${quote.totalSetupCad.toLocaleString("en-CA")}</strong></p>
        <p>Monthly: <strong>CA${quote.monthlyCad.toLocaleString("en-CA")}</strong></p>
        <p>{quote.description}</p>
        <Link className="statusBadge" href="/silveroak-app-launch/request">Request a consultation</Link>
      </section>
    </main>
  );
}
