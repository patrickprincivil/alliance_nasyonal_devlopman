import Link from "next/link";
const agents = [
  ["Planner", "Translate approved customer scope into tasks"],
  ["UI", "Prepare layout and reusable components"],
  ["Next.js", "Assist implementation and tests"],
  ["Database", "Propose schemas and safe migrations"],
  ["Content", "Draft customer-approved copy"],
  ["SEO", "Review metadata and page structure"],
  ["Testing", "Identify build and acceptance failures"],
  ["Review", "Summarize quality, security and remaining risks"],
];
export default function AgentControlCenterPage() {
  return (
    <main className="page">
      <p className="eyebrow">Silveroak AI Factory / Planning workspace</p>
      <h1>Agent Control Center — V1 Foundation</h1>
      <p>Proposed agent responsibilities for the 90-day App Factory launch. No autonomous agents or background jobs are running from this page.</p>
      <section className="subSection"><h2>Initial agent registry specification</h2>
        <div className="gridSection">{agents.map(([name,role]) =>
          <article className="card" key={name}><h2>{name} Agent</h2><p>{role}</p><p>Status: not configured</p></article>
        )}</div>
      </section>
      <section className="subSection"><h2>Execution policy</h2>
        <p>Task intake → permission check → agent assignment → review → tests → human approval → deployment. Financial transactions, secret access and production deployment must be authorized server-side.</p>
        <Link className="statusBadge" href="/master-control-center">Back to Master Control Center</Link>
      </section>
    </main>
  );
}
