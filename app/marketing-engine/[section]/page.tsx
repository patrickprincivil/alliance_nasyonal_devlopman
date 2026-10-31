import Link from "next/link";
import { notFound } from "next/navigation";
import { MARKETING_AGENTS, MARKETING_MODULES, MARKETING_PROVIDERS } from "@/lib/silveroak/marketing";
export function generateStaticParams() { return MARKETING_MODULES.map(m => ({ section: m.slug })); }
export default async function MarketingSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const module = MARKETING_MODULES.find(m => m.slug === section);
  if (!module) notFound();
  return <main className="page"><p className="eyebrow">Silveroak / Marketing Engine</p>
    <h1>{module.label}</h1><p>{module.description}</p>
    {section === "integrations" ? <section className="gridSection">{MARKETING_PROVIDERS.map(p =>
      <article className="card" key={p.name}><h2>{p.name}</h2><p>Category: {p.kind}</p><p>Status: Not connected</p></article>
    )}</section> : null}
    {section === "ai-agents" ? <section className="gridSection">{MARKETING_AGENTS.map(a =>
      <article className="card" key={a}><h2>{a}</h2><p>Planned — not enabled</p></article>
    )}</section> : null}
    {section !== "integrations" && section !== "ai-agents" ? <p>Module planned. No customer data or production service is enabled.</p> : null}
    <p><Link href="/marketing-engine">Back to Marketing Engine</Link></p>
  </main>;
}
