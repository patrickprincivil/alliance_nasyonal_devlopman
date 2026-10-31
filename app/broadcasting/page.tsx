import Link from "next/link";
import { BROADCAST_MODULES, BROADCAST_STAGES, STARTER_BUDGET, STARTER_TOTALS } from "@/lib/silveroak/broadcasting";

export default function BroadcastingPage() {
  return (
    <main className="page">
      <p className="eyebrow">MASTER DEVLOPMAN / Global Communications</p>
      <h1>Silveroak Broadcasting Development</h1>
      <p>Haiti and Dominican Republic digital media roadmap.</p>
      <p>Planning only. No broadcast services are active.</p>
      <section className="subSection">
        <h2>Phased roadmap</h2>
        <div className="gridSection">
          {BROADCAST_STAGES.map((stage) => (
            <article className="card" key={stage.id}>
              <h3>Phase {stage.id}: {stage.name}</h3>
              <p>{stage.goal}</p>
              <p>Status: planned</p>
            </article>
          ))}
        </div>
      </section>
      <section className="subSection">
        <h2>Proposed functions</h2>
        <ul>{BROADCAST_MODULES.map((name) => <li key={name}>{name}</li>)}</ul>
      </section>
      <section className="subSection">
        <h2>Starter studio budget (USD)</h2>
        <p>Planning estimates, not quotations. Shipping, monthly costs, taxes and staff excluded.</p>
        <div className="gridSection">
          {STARTER_BUDGET.map((item) => (
            <article className="card" key={item.item}>
              <h3>{item.item}</h3>
              <p>USD {item.low} – {item.high}</p>
              <p>{item.notes}</p>
            </article>
          ))}
        </div>
        <p>Equipment range: USD {STARTER_TOTALS.low} – {STARTER_TOTALS.high}.</p>
      </section>
      <Link href="/master-control-center">Master Control Center</Link>
    </main>
  );
}
