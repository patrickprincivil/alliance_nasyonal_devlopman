import Link from "next/link";
import { ACADEMY_PROGRAMS, EDUCATION_NOTICE } from "@/lib/silveroak/education";
export default function GlobalEducationCenterPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Global Education Center</p>
    <h1>Silveroak AI Academy</h1>
    <p>{EDUCATION_NOTICE}</p>
    <p>Four independently organized learning pathways with fourteen topic references. The previously described offline Course Lab is not installed in this web page.</p>
    <section className="gridSection">{ACADEMY_PROGRAMS.map(program =>
      <article className="card" key={program.id}><h2>{program.title}</h2>
        <ul>{program.modules.map(mod => <li key={mod}>{mod}</li>)}</ul>
        <p>Status: roadmap catalog; learning accounts and lesson completion not connected.</p>
      </article>)}</section>
    <p><Link href="/global-digital-library">Open Global Digital Library</Link></p>
  </main>;
}
