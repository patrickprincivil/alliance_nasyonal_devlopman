import Link from "next/link";
import { MARKETING_MODULES } from "@/lib/silveroak/marketing";
export default function MarketingEnginePage() {
  return <main className="page"><p className="eyebrow">Silveroak AI Factory / Marketing Engine</p>
    <h1>Marketing Ecosystem & Integration Hub</h1>
    <p>Planning dashboard inside MASTER DEVLOPMAN. No external accounts are connected and no campaigns are live.</p>
    <section className="gridSection">{MARKETING_MODULES.map(m => <article className="card" key={m.slug}>
      <h2>{m.label}</h2><p>{m.description}</p>
      <Link href={`/marketing-engine/${m.slug}`}>Open {m.label}</Link>
    </article>)}</section>
  </main>;
}
