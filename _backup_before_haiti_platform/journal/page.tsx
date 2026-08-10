const journalistTools = [
  "Public Records Search",
  "Court Case Tracker",
  "Hearing Calendar",
  "Document Archive",
  "Interview Notes",
  "Source Verification",
  "Legal Status Checker",
  "Investigation Timeline",
];

const publicAccessRules = [
  "Use public records responsibly.",
  "Do not publish private personal information without legal permission.",
  "Verify documents before sharing them publicly.",
  "Respect court orders, privacy laws, and official restrictions.",
  "Separate facts, opinions, and allegations clearly.",
];

export default function JournalistCenterPage() {
  return (
    <main className="page">
      <section className="heroSection">
        <p className="eyebrow">Alliance Nasyonal Devlopman</p>

        <h1>Journalist Center</h1>

        <p className="heroText">
          A public information center for journalists, researchers, citizens,
          and community leaders who need access to public records, court
          information, hearings, legal updates, and verified documents.
        </p>
      </section>

      <section className="subSection">
        <h2>Mission</h2>

        <p>
          The Journalist Center helps organize public information so people can
          follow national issues, public hearings, justice matters, government
          activity, and development projects with clarity and responsibility.
        </p>
      </section>

      <section className="subSection">
        <h2>Journalist Tools</h2>

        <div className="gridSection noPadding">
          {journalistTools.map((tool) => (
            <article className="card" key={tool}>
              <h2>{tool}</h2>

              <p>
                This tool should connect to public records, official files,
                audit documents, court status, and public hearing materials.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="subSection">
        <h2>Public Access Rules</h2>

        <ol className="timeline">
          {publicAccessRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}