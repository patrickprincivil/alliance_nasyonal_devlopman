import Link from "next/link";
const operators = ["Starlink / SpaceX", "Eutelsat OneWeb", "SES O3b mPOWER", "Viasat", "Hughes / EchoStar", "Amazon Leo"];
const features = [
  ["Connectivity", "Satellite backhaul, managed Wi-Fi, fiber links, backup uplinks"],
  ["Communities", "Homes, clinics, schools, farms, businesses and local offline library"],
  ["Devices", "Cameras, TVs, computers, sensors, robots and vehicle telemetry"],
  ["Operations", "Installation requests, inventory, tickets, capacity and support"],
  ["Finance", "Projected budgets, donor-funded access and subscriber billing"],
  ["Security", "Segmentation, access controls, privacy, logs and incident response"],
  ["Regulation", "Country-specific CONATEL and INDOTEL compliance gates"],
  ["AI assistance", "Monitoring and forecasts, subject to human approval"],
];
export default function SatelliteNetworkPlanningPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / TELECOM_WIFI</p>
    <h1>Silveroak Global Satellite Network</h1>
    <p>Haiti & Dominican Republic — V3.1 planning dashboard. These services, operators and sites are proposals. No provider is contracted, no permit is confirmed and no network has been deployed.</p>
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
