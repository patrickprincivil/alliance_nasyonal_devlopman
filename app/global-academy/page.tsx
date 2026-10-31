import Link from "next/link";
import { ACADEMY_DEPARTMENTS, TRAINING_LEVELS } from "@/lib/silveroak/academy";
export default function GlobalAcademyPage() {
return <main className="page"><p className="eyebrow">MASTER DEVLOPMAN / Education</p>
<h1>Silveroak Global Business & Technical Academy</h1>
<p>Proposed departments and learning pathways, not accredited Silveroak degrees or confirmed university partnerships.</p>
<section className="subSection"><h2>15 proposed departments</h2><div className="gridSection">{ACADEMY_DEPARTMENTS.map((d,i)=>
<article className="card" key={d}><h2>{String(i+1).padStart(2,"0")}. {d}</h2><p>Curriculum and partner verification pending.</p></article>)}</div></section>
<section className="subSection"><h2>Industrial learning pathway</h2><div className="gridSection">{TRAINING_LEVELS.map(l=>
<article className="card" key={l.level}><h2>Level {l.level} — {l.title}</h2><p>{l.details}</p></article>)}</div></section>
<p><Link href="/ai-software-academy">Explore AI Software Development Academy</Link></p>
</main>;
}
