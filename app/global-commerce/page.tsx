import Link from "next/link";
import { COMMERCE_MODULES, PLATFORM_CANDIDATES } from "@/lib/silveroak/commerce";

export default function GlobalCommercePage() {
  return <main className="page">
    <p className="eyebrow">MASTER DEVLOPMAN / Silveroak Global</p>
    <h1>Global Commerce & Manufacturing</h1>
    <p>Planning workspace integrated into the shared Silveroak architecture. No seller accounts, manufacturing contracts, payments or vendor APIs are connected here.</p>
    <section className="gridSection">{COMMERCE_MODULES.map(m=><article className="card" key={m.id}>
      <h2>{m.label}</h2><p>{m.description}</p>
      <p>Status: Planned</p>
    </article>)}</section>
    <section className="subSection"><h2>External services under evaluation</h2>
      <div className="gridSection">{PLATFORM_CANDIDATES.map(p=><article className="card" key={p.name}>
        <h2>{p.name}</h2><p>{p.role}</p><p>{p.state}</p>
      </article>)}</div>
    </section>
    <p><Link href="/silveroak-app-launch/quote">Use existing quote preview</Link> · <Link href="/marketing-engine">Marketing Engine</Link></p>
  </main>;
}
