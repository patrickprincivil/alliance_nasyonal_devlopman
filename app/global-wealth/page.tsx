import Link from "next/link";
const modules=["Wealth Management Center","Trust Administration System","Estate & Inheritance Planning","Family Wealth Governance","Ethical Investment Analytics","AI Financial Advisory Support","Cryptocurrency Asset Monitoring","International Wealth Structuring","Trustee Compliance & Audit","Dispute Resolution Management","Privacy & Confidentiality Center","Financial Education Academy","Cross-Border Residency Planning","Succession & Legacy Management","Financial Risk Management"];
export default function GlobalWealthPage() {
 return <main className="page"><p className="eyebrow">MASTER DEVLOPMAN / BUSINESS & REVENUE</p>
 <h1>Global Wealth, Trust & Financial Services</h1>
 <p>Architecture V2.0 — education and future administrative software. No regulated financial or fiduciary service is operational.</p>
 <section className="subSection"><h2>First three planned deliverables</h2><ul><li>Encrypted wealth and trust document management</li><li>Family assets and liabilities dashboard (non-advisory)</li><li>Silveroak Wealth Academy</li></ul></section>
 <section className="gridSection">{modules.map((m,i)=><article key={m} className="card"><h2>SO-WM-{String(i+1).padStart(2,"0")}</h2><p>{m}</p><p>Planned — not activated</p></article>)}</section>
 <p><Link href="/master-control-center">Return to Master Control Center</Link></p>
 </main>;
}
