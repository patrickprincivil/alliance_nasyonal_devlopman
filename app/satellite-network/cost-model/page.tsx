"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const initial = {
  terminals: 1, terminalCost: 850, installation: 500, wifiEquipment: 650,
  solarBackup: 900, shippingPermits: 400, monthlyService: 150,
  monthlyPower: 30, monthlySupport: 70, reservePct: 15,
};

type CostInput = typeof initial;
function nonnegative(value: number) {
  return Number.isFinite(value) ? Math.max(0, Math.min(value, 100000000)) : 0;
}

export default function SatelliteCostModel() {
  const [values, setValues] = useState<CostInput>(initial);
  const result = useMemo(() => {
    const oneTime = values.terminals * values.terminalCost + values.installation +
      values.wifiEquipment + values.solarBackup + values.shippingPermits;
    const monthly = values.monthlyService + values.monthlyPower + values.monthlySupport;
    const recurring = monthly * 36;
    const subtotal = oneTime + recurring;
    const reserve = subtotal * values.reservePct / 100;
    return { oneTime, monthly, recurring, reserve, total: subtotal + reserve };
  }, [values]);
  const fields: { key: keyof CostInput; label: string; step?: number }[] = [
    { key: "terminals", label: "Satellite terminals (quantity)", step: 1 },
    { key: "terminalCost", label: "Cost per terminal (USD)" },
    { key: "installation", label: "Installation (USD)" },
    { key: "wifiEquipment", label: "Wi-Fi/router/network equipment (USD)" },
    { key: "solarBackup", label: "Solar, inverter, UPS (USD)" },
    { key: "shippingPermits", label: "Estimated import/permissions budget (USD)" },
    { key: "monthlyService", label: "Monthly satellite service (USD)" },
    { key: "monthlyPower", label: "Monthly power/hosting (USD)" },
    { key: "monthlySupport", label: "Monthly maintenance/support (USD)" },
    { key: "reservePct", label: "Contingency (%)" },
  ];
  const money = (v: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(v);
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / TELECOM_WIFI / FINANCIAL PLANNING</p>
    <h1>Satellite pilot — 36-month cost scenario</h1>
    <p>Editable planning assumptions in USD. These are illustrative values only, not operator quotations, approved budgets, taxes or a financing offer. Values stay in your browser state and are not saved.</p>
    <section className="subSection">
      <h2>Inputs</h2>
      <div style={{ display: "grid", gap: 12, maxWidth: 600 }}>
        {fields.map(field => <label key={field.key} style={{ display: "grid", gap: 5 }}>
          {field.label}
          <input type="number" min={0} max={field.key === "reservePct" ? 100 : 100000000}
            step={field.step ?? 1} value={values[field.key]}
            onChange={event => setValues(current => ({ ...current, [field.key]:
              Math.min(field.key === "reservePct" ? 100 : 100000000,
                field.key === "terminals" ? Math.floor(nonnegative(Number(event.target.value))) : nonnegative(Number(event.target.value))) }))}
            style={{ padding: 9, maxWidth: 220 }} />
        </label>)}
      </div>
      <h2>Estimated cost</h2>
      <p>One-time equipment and installation: <strong>{money(result.oneTime)}</strong></p>
      <p>Monthly operating cost: <strong>{money(result.monthly)}</strong></p>
      <p>36-month operating cost: <strong>{money(result.recurring)}</strong></p>
      <p>Contingency reserve: <strong>{money(result.reserve)}</strong></p>
      <p>Estimated 36-month total: <strong>{money(result.total)}</strong></p>
      <p>Excluded until verified: financing, taxes, insurance, staffed NOC, tower/land lease, engineering surveys, customs variations, data overages, and exchange-rate changes.</p>
    </section>
    <p><Link href="/satellite-network">Return to Satellite Network Center</Link></p>
  </main>;
}
