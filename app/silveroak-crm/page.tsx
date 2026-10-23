import Link from "next/link";
import { CRM_MVP_FEATURES, CRM_PIPELINE, CRM_INTEGRATIONS } from "@/lib/silveroak/crm";
export default function SilveroakCrmPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Business &amp; Commerce</p>
    <h1>Silveroak AI CRM</h1>
    <p>CRM MVP blueprint. No customer records, deals, messages, accounts or payments are connected yet.</p>
    <section className="subSection"><h2>Core modules</h2>
      <div className="gridSection">{CRM_MVP_FEATURES.map(x => <article className="card" key={x.name}>
        <h3>{x.name}</h3><p>{x.detail}</p><p>Status: planned</p>
      </article>)}</div>
    </section>
    <section className="subSection"><h2>Proposed sales pipeline</h2>
      <ol>{CRM_PIPELINE.map(x => <li key={x.key}>{x.label}</li>)}</ol>
      <p>These are workflow definitions only; no pipeline figures are simulated.</p>
    </section>
    <section className="subSection"><h2>Future integrations</h2>
      <p>{CRM_INTEGRATIONS.join(" · ")}</p>
      <p>Each integration will require separate permissions, testing and human-approved outbound actions.</p>
      <Link href="/silveroak-app-launch/quote">Public pricing preview</Link>
      {" · "}<Link href="/marketing-engine">Marketing Engine</Link>
    </section>
  </main>;
}
