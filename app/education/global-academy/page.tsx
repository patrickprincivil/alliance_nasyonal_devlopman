import Link from "next/link";
import { ACADEMY_DEPARTMENTS, EDUCATION_PARTNER_CANDIDATES, MANUFACTURING_LEARNING_PATH } from "@/lib/silveroak/education";
export default function GlobalAcademyPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Education</p>
    <h1>Silveroak Global Business & Technical Academy</h1>
    <p>Conceptual international learning catalog. Silveroak departments are proposed training areas, not accredited degree-awarding institutions. University relationships and admissions are not confirmed.</p>
    <h2>15 proposed departments</h2>
    <section className="gridSection">{ACADEMY_DEPARTMENTS.map(([id,name,description]) =>
      <article className="card" key={id}><h3>{name}</h3><p>{description}</p><p>Status: Planning</p></article>
    )}</section>
    <h2>Institutions for evaluation</h2>
    <section className="gridSection">{EDUCATION_PARTNER_CANDIDATES.map(p =>
      <article className="card" key={p.name}><h3>{p.name}</h3><p>{p.country} · {p.type}</p><p>Partnership: {p.partnership}</p><p>{p.admissions}</p><a href={p.url} target="_blank" rel="noopener noreferrer">Official institution website</a></article>
    )}</section>
    <h2>Manufacturing learning pathway</h2>
    <ol>{MANUFACTURING_LEARNING_PATH.map(([level,name,topics]) =>
      <li key={level}><strong>Level {level}: {name}</strong> — {topics}</li>
    )}</ol>
    <p>Autonomous machines require independent engineering review, field testing and regulatory approval before use on public roads.</p>
    <p><Link href="/master-control-center">Back to Master Control Center</Link></p>
  </main>;
}
