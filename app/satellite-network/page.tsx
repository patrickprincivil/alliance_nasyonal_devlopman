import Link from "next/link";
import { SATELLITE_OPERATORS, SATELLITE_FEATURES } from "@/lib/silveroak/satellite-network";
const operators = SATELLITE_OPERATORS.map(operator => operator.name);
const features = SATELLITE_FEATURES.map(f => [f.title, f.description]);
export default function SatelliteNetworkPlanningPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / TELECOM_WIFI</p>
    <h1>Silveroak Global Satellite Network</h1>
    <p>Haiti & Dominican Republic — V3.1 planning dashboard. These services, operators and sites are proposals. No provider is contracted, no permit is confirmed and no network has been deployed.</p>
    <p><Link href="/satellite-network/operators">Operator comparison and procurement gates</Link> · <Link href="/satellite-network/pilots">Two-site pilot register</Link> · <Link href="/satellite-network/cost-model">36-month cost model</Link></p>
    <section className="subSection"><h2>Potential Satellite Operators</h2>
      <div className="gridSection">{operators.map(name=><article className="card" key={name}><h3>{name}</h3><p>Commercial availability, pricing and redistribution rights require confirmation.</p><p>Status: Not verified</p></article>)}</div>
    </section>
    <section className="subSection"><h2>Planned Network Capabilities</h2>
      <div className="gridSection">{features.map(([title,desc])=><article className="card" key={title}><h3>{title}</h3><p>{desc}</p><p>Status: Planned</p></article>)}</div>
    </section>
    <section className="subSection"><h2>First Candidate Demonstrations</h2>
      <div className="gridSection"><article className="card"><h3>San Pedro de Macorís / Los Llanos</h3><p>Survey, secure Wi-Fi, cameras, local services and bandwidth tests.</p></article>
      <article className="card"><h3>Jacmel / Morne-à-Brûlé</h3><p>Solar-backed rural access, offline school resources and community services.</p></article></div>
      <p>Both locations are candidates only: site rights, technical surveys, licences and funding must be verified before installation.</p>
      <Link href="/master-control-center">Return to Master Control Center</Link>
    </section>
  </main>;
}
