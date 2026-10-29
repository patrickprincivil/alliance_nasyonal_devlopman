import Link from "next/link";
import { AWARD_EVALUATION_METHODS, AWARD_MODULES, AWARD_STAGES } from "@/lib/silveroak/awards";

export default function AwardsPage(){
return <main className="page">
<p className="eyebrow">MASTER DEVLOPMAN / Recognition Center</p>
<h1>Silveroak Global Awards & Recognition Center</h1>
<p>Proposed multi-sector awards management workspace. This is a planning interface: nominations, voting, judges, certificates and payments are not enabled. No award program is currently accepting applications here.</p>
<section className="subSection"><h2>Evaluation methods</h2><div className="gridSection">{AWARD_EVALUATION_METHODS.map(x=><article key={x.id} className="card"><h2>{x.name}</h2><p>{x.description}</p></article>)}</div></section>
<section className="subSection"><h2>Shared service components</h2><div className="gridSection">{AWARD_MODULES.map(x=><article key={x} className="card"><h2>{x}</h2><p>Status: planned; requires shared authentication, tenant controls and audit records.</p></article>)}</div></section>
<section className="subSection"><h2>Proposed program stages</h2><p>{AWARD_STAGES.join(" → ")}</p><p>AI assistance may prepare summaries, but independent judges and authorized human reviewers must decide winners.</p></section>
<p><Link href="/master-control-center">Return to Master Control Center</Link></p>
</main>;
}
