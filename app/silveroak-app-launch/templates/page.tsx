import Link from "next/link";
import { STARTER_TEMPLATES } from "@/lib/silveroak/templates";
export default function AppTemplatesPage() {
  return (
    <main className="page">
      <p className="eyebrow">Silveroak Software Factory / Roadmap</p>
      <h1>Reusable Website Templates</h1>
      <p>Five starter template specifications for our 90-day launch. These templates are planned, not complete customer websites or live demos.</p>
      <section className="gridSection">
        {STARTER_TEMPLATES.map((template) => (
          <article key={template.id} className="card">
            <h2>{template.name}</h2>
            <p><strong>{template.industry}</strong></p>
            <p>{template.description}</p>
            <p>Planned pages: {template.pages.join(", ")}.</p>
            <p>Features: {template.features.join(", ")}.</p>
            <p>Status: Not built</p>
          </article>
        ))}
      </section>
      <Link className="statusBadge" href="/silveroak-app-launch/request">Request a consultation</Link>
    </main>
  );
}
