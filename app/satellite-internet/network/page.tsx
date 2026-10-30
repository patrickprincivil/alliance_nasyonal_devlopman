import Link from "next/link";
import { SATELLITE_OPERATORS, SATELLITE_PILOTS, SATELLITE_GATES, SATELLITE_FEATURES } from "@/lib/silveroak/satellite-network";

export default function NetworkPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / TELECOM_WIFI</p>
    <h1>Silveroak Global Satellite Network V3</h1>
    <p>Haiti and Dominican Republic national coverage proposal. Planning only: no live sites, provider contracts or regulatory authorizations are claimed.</p>
    <section className="subSection"><h2>Provider candidates</h2><div className="gridSection">
      {SATELLITE_OPERATORS.map(p => <article className="card" key={p.id}>
        <h3>{p.name}</h3><p>{p.orbit} — {p.use}</p><p>Quote pending, not a confirmed partner.</p>
      </article>)}
    </div></section>
    <section className="subSection"><h2>Proposed pilots</h2><div className="gridSection">
      {SATELLITE_PILOTS.map(p => <article className="card" key={p.id}>
        <h3>{p.location}</h3><p>{p.country} — {p.regulator}</p><p>{p.services.join("; ")}</p>
        <p>Planning only. Site approval and licenses pending.</p>
      </article>)}
    </div></section>
    <section className="subSection"><h2>System modules</h2><div className="gridSection">
      {SATELLITE_FEATURES.map(f => <article className="card" key={f.title}><h3>{f.title}</h3><p>{f.description}</p></article>)}
    </div></section>
    <section className="subSection"><h2>Approval gates</h2><ol style={{ paddingLeft: "1.5rem" }}>
      {SATELLITE_GATES.map(g => <li key={g}>{g}</li>)}
    </ol><p>Satellite coverage does not equal household Wi-Fi coverage; distribution requires infrastructure and authorization.</p>
      <Link href="/satellite-internet">Back to existing Satellite Internet page</Link>
    </section>
  </main>;
}
