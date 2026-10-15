import Link from "next/link";

const included = [
  "Responsive business website (up to 5–10 primary pages)",
  "Contact and inquiry forms",
  "Basic SEO, domain and hosting configuration",
  "Analytics setup and security basics",
  "Maintenance and agreed monthly support",
];
const packages = [
  { name: "Launch", setup: "CA$1,500", monthly: "CA$149/month", desc: "Business site, inquiry forms, hosting setup and maintenance." },
  { name: "Growth", setup: "CA$3,000", monthly: "CA$299/month", desc: "Launch plus scoped CRM, scheduling and automation." },
  { name: "AI Business", setup: "From CA$5,000", monthly: "From CA$499/month", desc: "Growth plus scoped AI assistant and specialized workflows." },
];

export default function SilveroakAppLaunchPage() {
  return (
    <main className="page">
      <p className="eyebrow">Silveroak Digital Solutions / Proposed service</p>
      <h1>Silveroak AI App Launch</h1>
      <p>Custom business websites and practical automation built with reusable components. Packages below are proposed starting prices, subject to scope, contract, availability and tax.</p>
      <section className="subSection">
        <h2>Packages</h2>
        <div className="gridSection">
          {packages.map((p) => <article className="card" key={p.name}>
            <h2>{p.name}</h2>
            <p><strong>{p.setup} setup + {p.monthly}</strong></p>
            <p>{p.desc}</p>
          </article>)}
        </div>
      </section>
      <section className="subSection">
        <h2>What the starting Launch package includes</h2>
        <ul style={{ paddingLeft: "1.4rem", lineHeight: 2 }}>
          {included.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p>Optional AI assistants, online payments, e-commerce, booking and customer portals require separate scope and testing; none are represented as deployed here.</p>
        <Link className="statusBadge" href="/silveroak-app-launch/request">Request a project consultation</Link>
      </section>
    </main>
  );
}
