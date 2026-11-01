import Link from "next/link";
export default function AIProspectingPage() {
 return <main className="page">
  <p className="eyebrow">Silveroak AI Factory / RevenueOS</p>
  <h1>AI Prospecting — Planning Center</h1>
  <p>Prospect research, website demonstration ideas and proposals. This is a planning page: no leads are stored, no businesses are contacted and no agents run automatically.</p>
  <section className="gridSection">
   <article className="card"><h2>1. Research</h2><p>Find a business need from permitted public information.</p></article>
   <article className="card"><h2>2. Qualify</h2><p>Verify business details, consent and local marketing rules.</p></article>
   <article className="card"><h2>3. Propose</h2><p>Prepare a relevant demo and a human-reviewed quote.</p></article>
   <article className="card"><h2>4. Follow up</h2><p>Use approved channels only, then record responses in the shared CRM when available.</p></article>
  </section>
  <p><Link href="/silveroak-app-launch/quote">Review indicative pricing</Link></p>
 </main>;
}
