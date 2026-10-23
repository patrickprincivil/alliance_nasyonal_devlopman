import Link from "next/link";
import { SATELLITE_OPERATORS, SATELLITE_GATES } from "@/lib/silveroak/satellite-network";
export default function SatelliteOperatorsPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / TELECOM_WIFI / PROCUREMENT</p>
    <h1>Satellite Operator Evaluation</h1>
    <p>Potential suppliers only. No commercial agreement, national coverage, resale authorization or SLA has been confirmed.</p>
    <section className="gridSection">{SATELLITE_OPERATORS.map(p => <article className="card" key={p.id}>
      <h2>{p.name}</h2><p>Orbit: {p.orbit}</p><p>Proposed use: {p.use}</p><p>Status: Candidate — RFQ required</p>
    </article>)}</section>
    <section className="subSection"><h2>Mandatory no-go gates before activation</h2>
      <ol>{SATELLITE_GATES.map(g => <li key={g}>{g}</li>)}</ol>
    </section><Link href="/satellite-network">Return to satellite master</Link>
  </main>;
}
