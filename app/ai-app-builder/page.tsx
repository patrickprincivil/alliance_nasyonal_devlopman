import Link from "next/link";
const phases = ["Discover", "Specify", "Architect", "Build", "Review", "Test", "Deploy", "Operate"] as const;
export default function AppBuilderBlueprintPage() {
  return <main className="page"><p className="eyebrow">MASTER DEVLOPMAN / AI Factory</p>
    <h1>Silveroak AI App Builder — Blueprint</h1>
    <p>Long-term Silveroak-owned system. External rapid prototyping tools, such as Atoms.dev, are optional evaluation tools only; no provider account is connected.</p>
    <section className="gridSection">{phases.map(phase => <article className="card" key={phase}>
      <h2>{phase}</h2><p>Planned capability. Requires review and approval.</p></article>)}</section>
    <p>Never publish generated code, expose secrets or charge customers without testing and authorization.</p>
    <Link href="/silveroak-app-launch">App Launch</Link></main>;
}
