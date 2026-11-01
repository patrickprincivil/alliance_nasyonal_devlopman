import Link from "next/link";
import { ACADEMY_DEPARTMENTS, ACADEMY_TRACKS, ACADEMY_LEARNING_FLOW } from "@/lib/silveroak/python-academy";
export default function PythonAcademyPage() {
return <main className="page"><p className="eyebrow">MASTER DEVLOPMAN / Global Education</p>
<h1>Silveroak Global Python & AI Engineering Academy</h1>
<p>Curriculum roadmap only. Courses, quizzes, enrollment, certificates and coding labs are not yet operational. Silveroak content must be original or properly licensed; this is not a Real Python affiliation.</p>
<section className="subSection"><h2>Learning process</h2><p>{ACADEMY_LEARNING_FLOW.join(" → ")}</p></section>
<section className="subSection"><h2>Curriculum pathways</h2><div className="gridSection">{ACADEMY_TRACKS.map(t=><article className="card" key={t.group}><h2>{t.group}</h2><ul>{t.names.map(n=><li key={n}>{n}</li>)}</ul></article>)}</div></section>
<section className="subSection"><h2>24 technical departments</h2><ul>{ACADEMY_DEPARTMENTS.map(x=><li key={x}>{x}</li>)}</ul></section>
<p><Link href="/global-education">Back to Silveroak Global Education</Link></p>
</main>;
}
