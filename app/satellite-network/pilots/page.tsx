import Link from "next/link";
import { SATELLITE_PILOTS } from "@/lib/silveroak/satellite-network";
export default function SatellitePilotsPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / TELECOM_WIFI / PILOTS</p>
    <h1>Two-Site Satellite Pilot Plan</h1>
    <p>Both sites are candidates only. No survey, contract, licence, installation, or service is confirmed.</p>
    <section className="gridSection">{SATELLITE_PILOTS.map(site => <article className="card" key={site.id}>
      <h2>{site.id} — {site.location}</h2><p>{site.country} / {site.regulator}</p>
      <p>Proposed services:</p><ul>{site.services.map(s => <li key={s}>{s}</li>)}</ul>
      <p>Next step: site survey, legal review, written business RFQs, funded capacity design and human approval.</p>
      </article>)}</section>
    <section className="subSection"><h2>Pilot acceptance criteria</h2>
      <p>Validate availability, authorized use, measured throughput and latency, fault recovery, backup power, security isolation, support coverage and actual total cost before scaling.</p>
    </section><Link href="/satellite-network">Return to satellite master</Link>
  </main>;
}
