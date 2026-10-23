import Link from "next/link";
import { FINANCIAL_MODULES, FINANCIAL_AI_ROLES } from "@/lib/silveroak/finance";

export default function FinancialServicesPage() {
  return (
    <main className="page">
      <p className="eyebrow">MASTER DEVLOPMAN / Business & Revenue</p>
      <h1>Silveroak Financial & Wealth Management Support</h1>
      <p>Planned technology, education and administrative tools. No licensed financial advisory, tax preparation, insurance brokerage, custody, money transmission, or investment execution is provided through this page.</p>
      <section className="subSection">
        <h2>Product roadmap</h2>
        <div className="gridSection">
          {FINANCIAL_MODULES.map((module) => (
            <article className="card" key={module.id}>
              <h2>{module.name}</h2><p>{module.description}</p>
              <p>Status: Planned / not connected</p>
            </article>
          ))}
        </div>
      </section>
      <section className="subSection">
        <h2>Proposed AI assistant roles</h2>
        <ul>{FINANCIAL_AI_ROLES.map((role) => <li key={role}>{role} — not active</li>)}</ul>
        <p>Any sensitive actions require a human review and applicable professional authorization.</p>
      </section>
      <p><Link href="/master-control-center">Return to Master Control Center</Link></p>
    </main>
  );
}
