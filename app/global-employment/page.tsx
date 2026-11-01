import Link from "next/link";
import { JOB_SECTORS, RECRUITMENT_COUNTRIES, RECRUITMENT_MODULES, RECRUITMENT_SAFEGUARDS } from "@/lib/silveroak/recruitment";
export default function GlobalEmploymentPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Silveroak Global Employment</p>
    <h1>Global Employment & AI Recruitment</h1>
    <p>Early-stage information architecture, not a live job board, recruiting agency or applicant tracking system. No current vacancies, placements or automated job alerts are claimed.</p>
    <section className="subSection">
      <h2>Target countries</h2><p>{RECRUITMENT_COUNTRIES.join(" · ")}</p>
      <h2>Industry focus</h2><p>{JOB_SECTORS.join(" · ")}</p>
    </section>
    <section className="gridSection">{RECRUITMENT_MODULES.map(m =>
      <article key={m.slug} className="card"><h2>{m.title}</h2><p>{m.description}</p><p>Status: Planned</p><Link href={`/global-employment/${m.slug}`}>View scope</Link></article>
    )}</section>
    <section className="subSection"><h2>Candidate rights and safety</h2>
      <ul>{RECRUITMENT_SAFEGUARDS.map(x => <li key={x}>{x}</li>)}</ul>
    </section>
  </main>;
}
