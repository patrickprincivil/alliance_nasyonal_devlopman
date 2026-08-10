const dashboardItems = [
  {
    label: "Constitutional questions",
    value: "12",
    description:
      "Article 149, prime minister rules, eligibility, reform, and sovereignty.",
  },
  {
    label: "Post-July 7 review questions",
    value: "10",
    description:
      "Executive authority, courts, public records, foreign role questions, and national decisions.",
  },
  {
    label: "Public contract categories",
    value: "12",
    description:
      "Ports, roads, rail, water, security, agriculture, energy, land, and public money.",
  },
  {
    label: "Public money files",
    value: "4",
    description:
      "PetroCaribe, earthquake funds, contract spending, and asset recovery.",
  },
  {
    label: "Transport projects",
    value: "6",
    description:
      "Train, bus, truck, ride-share, air cargo, and sea ferry systems.",
  },
  {
    label: "Farming departments",
    value: "10",
    description:
      "All Haiti departments must organize food production, storage, irrigation, and transport.",
  },
  {
    label: "Public hearings",
    value: "3",
    description:
      "Citizen testimony, public-service rackets, police trust, and municipal abuse concerns.",
  },
  {
    label: "Journalist tools",
    value: "12",
    description:
      "Search records, download public reports, submit questions, and track court status.",
  },
];

export default function DashboardPage() {
  return (
    <main className="page">
      <p className="eyebrow">Transparency Dashboard</p>

      <h1>National Public Accountability Dashboard</h1>

      <p>
        This dashboard shows constitutional questions, public files, contracts,
        public money cases, transport projects, farming production, public
        hearings, journalist tools, and national rebuilding progress.
      </p>

      <section className="subSection">
        <h2>Platform Summary</h2>

        <p>
          These numbers are starter placeholders. Later, they should connect to
          real documents, court files, audit records, public testimony, farming
          reports, and project dashboards.
        </p>

        <div className="gridSection noPadding">
          {dashboardItems.map((item) => (
            <article className="card" key={item.label}>
              <h2>{item.value}</h2>

              <p>
                <strong>{item.label}</strong>
              </p>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

