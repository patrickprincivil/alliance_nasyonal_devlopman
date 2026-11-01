import Link from "next/link";
import { SOFTWARE_ACADEMY_TOPICS } from "@/lib/silveroak/academy";
export default function AiSoftwareAcademy() {
return <main className="page"><p className="eyebrow">MASTER DEVLOPMAN / AI Factory / Education</p>
<h1>AI Software Development & Automation Academy</h1>
<p>Silveroak's original curriculum outline inspired by common AI-assisted development practices; not a reproduction of Real Python course materials or a delivered training program.</p>
<section className="gridSection">{SOFTWARE_ACADEMY_TOPICS.map((topic,i)=>
<article className="card" key={topic}><h2>Module {i+1}</h2><p>{topic}</p><p>Status: curriculum planned.</p></article>)}</section>
<p>Build projects on a feature branch, run tests and security review, and require human sign-off before production deployment.</p>
<p><Link href="/global-academy">Back to Global Academy</Link></p>
</main>;
}
