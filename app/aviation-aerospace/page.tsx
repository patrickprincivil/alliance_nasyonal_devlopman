import Link from "next/link";
const programs = [
  ["Aviation Engineering", "Aircraft systems, structures and design education"],
  ["Aircraft Maintenance", "Inspection, documentation and maintenance training"],
  ["Aerospace Research", "Aerodynamics, materials and simulation research"],
  ["Aviation Training Academy", "Technician and engineering learning modules"],
  ["Aviation Heritage Center", "Conservation and historical aircraft displays"],
] as const;
export default function AviationAerospacePage() {
  return <main className="page"><p className="eyebrow">MASTER DEVLOPMAN / Aviation & Aerospace</p>
    <h1>Aviation Research, Training & Heritage</h1>
    <p>Concept roadmap inspired in part by preservation of historical supersonic aircraft such as the Tu-144. Silveroak has no aircraft, maintenance approval or airworthiness certification represented here.</p>
    <section className="gridSection">{programs.map(([name,detail]) =>
      <article className="card" key={name}><h2>{name}</h2><p>{detail}</p><p>Status: Proposed</p></article>)}</section>
    <p>Historical restoration is not authorization to fly. Maintenance and safety-critical engineering require qualified personnel and applicable aviation regulators.</p>
    <Link href="/master-control-center">Back to Master Control Center</Link></main>;
}
