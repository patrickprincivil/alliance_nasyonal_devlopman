import Link from "next/link";
const items = [
  ["AI Mathematics Engine", "Exploratory mathematical calculations and learning"],
  ["Proof Verification", "Human and independent verification of claims"],
  ["Engineering Models", "Preliminary modelling only; professional sign-off for safety"],
  ["Simulation Laboratory", "Documented assumptions and reproducible experiments"],
  ["Research Archive", "Citations, provenance and version history"],
] as const;
export default function ResearchInnovationPage() {
  return <main className="page"><p className="eyebrow">MASTER DEVLOPMAN / Research & Innovation</p>
    <h1>AI Mathematics & Scientific Research</h1>
    <p>Planned research capabilities inside the existing Silveroak platform. No automated proof checker or research agent is operational.</p>
    <section className="gridSection">{items.map(([name,detail]) =>
      <article className="card" key={name}><h2>{name}</h2><p>{detail}</p><p>Status: Planned</p></article>
    )}</section><Link href="/master-control-center">Master Control Center</Link></main>;
}
