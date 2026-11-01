import Link from "next/link";

const centers = [
  { title: "Projects & sectors", detail: "Project registry, tasks, dependencies and milestones", href: "/programs" },
  { title: "AI production", detail: "AI-assisted delivery and agent operations (planned)", href: "/agent-control-center" },
  { title: "App Factory", detail: "Customer-facing AI App Launch service", href: "/silveroak-app-launch" },
  { title: "Global Employment", detail: "Jobs, employer verification, candidate rights and recruitment roadmap (planned)", href: "/global-employment" },
  { title: "Silveroak CRM", detail: "Contacts, leads, pipeline, quotes and follow-ups (MVP blueprint)", href: "/silveroak-crm" },
  { title: "Marketing Integration Hub", detail: "Social, ads, analytics and AI connector planning (not connected)", href: "/marketing-engine" },
  { title: "Global Broadcasting", detail: "Studio, streaming and satellite broadcasting roadmap (planning only)", href: "/broadcasting" },
  { title: "Revenue", detail: "Quotes, invoices and subscriptions (integration pending)", href: "/digital-products" },
  { title: "Foundation", detail: "Donations and community programs", href: "/donations" },
  { title: "Awards & Recognition", detail: "Nominations, independent judging and certificates (planned)", href: "/awards" },
  { title: "National dashboard", detail: "Existing transparency dashboard", href: "/dashboard" },
];

export default function MasterControlCenterPage() {
  return (
    <main className="page">
      <p className="eyebrow">MASTER DEVLOPMAN / V1 foundation</p>
      <h1>Unified Master Control Center</h1>
      <p>One central navigation point for existing Silveroak and Alliance Nasyonal modules. This page is a foundation, not a live financial, AI, or infrastructure dashboard.</p>
      <section className="subSection">
        <h2>Connected workspaces</h2>
        <div className="gridSection">
          {centers.map((c) => (
            <Link key={c.title} className="card" href={c.href}>
              <h2>{c.title}</h2><p>{c.detail}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="subSection">
        <h2>Data integrity</h2>
        <p>No revenue, paid customers, agent completions or deployments are claimed here. Live metrics require authentication, a verified database connection and service integrations.</p>
      </section>
    </main>
  );
}
