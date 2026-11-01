import Link from "next/link";
import { JOB_CATEGORIES, JOB_SOURCES } from "@/lib/silveroak/employment";

export default function EmploymentCenterPage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Employment Center</p>
    <h1>Silveroak Employment Center — Canada & USA</h1>
    <p>Career discovery and workforce planning prototype. Job listings below are not synced, no employer partnership is claimed, and applications are not sent by Silveroak.</p>
    <section className="subSection"><h2>Verified sources to search</h2>
      <ul>{JOB_SOURCES.map(x => <li key={x.url}><a href={x.url} target="_blank" rel="noopener noreferrer">{x.label}</a></li>)}</ul>
    </section>
    <section className="subSection"><h2>Job categories to monitor</h2>
      <div className="gridSection">{JOB_CATEGORIES.map(x => <article key={x.label} className="card"><h2>{x.label}</h2><p>{x.examples}</p></article>)}</div>
    </section>
    <section className="subSection"><h2>Eligibility, verification and six-month move budget</h2>
      <p>Check each employer, closing date, posted salary, licensing, and whether you already have legal authorization to work in the destination country. A job advertisement is not a work permit.</p>
      <p>Before relocating, estimate six months of local rent, deposits, food, transport, insurance and emergency costs. This is a financial planning recommendation, not a universal government immigration rule. Verify promised family accommodation in writing.</p>
      <p>Do not pay suspicious recruitment or visa-guarantee fees. Use official government guidance on recruiter obligations and candidate rights.</p>
      <p>See the <Link href="/master-control-center">Master Control Center</Link> for the wider platform roadmap.</p>
    </section>
  </main>;
}
