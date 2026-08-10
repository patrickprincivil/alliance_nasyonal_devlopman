const publicMoneyCases = [
  {
    id: "petrocaribe-review",
    title: "PetroCaribe Public Money Review",
    status: "Under audit",
    summary:
      "Track PetroCaribe reports, contracts, ministries, contractors, projects, missing money allegations, court files, and asset recovery.",
  },
  {
    id: "earthquake-fund-review",
    title: "Earthquake Reconstruction Fund Review",
    status: "Under review",
    summary:
      "Track reconstruction funds, foreign aid, NGOs, contractors, government officials, promised projects, completed projects, and abandoned projects.",
  },
  {
    id: "public-contract-spending",
    title: "Public Contract Spending Review",
    status: "Needs verification",
    summary:
      "Organize allegations, public reports, contracts, payment records, and court questions connected to public spending.",
  },
  {
    id: "asset-recovery",
    title: "Asset Recovery System",
    status: "Court action needed",
    summary:
      "Track frozen accounts, properties, companies, vehicles, bank records, court orders, international requests, and money returned to Haiti.",
  },
];

const moneyReviewSteps = [
  "Identify the public money program",
  "Collect official budgets and contracts",
  "Identify who approved the money",
  "Identify who received the money",
  "Identify contractors and subcontractors",
  "Compare promised projects with completed projects",
  "Classify missing, abandoned, completed, or fake projects",
  "Send files to courts and auditors",
  "Open journalist and citizen questions",
  "Publish court status",
  "Recover money where legally proven",
  "Assign recovered money to public rebuilding projects",
];

const recoveryUses = [
  "Farming and irrigation",
  "Clean water systems",
  "Roads and rail",
  "Schools and universities",
  "Hospitals and clinics",
  "Palace and national archives",
  "Housing and sanitation",
  "Waste cleanup",
  "Police and court modernization",
  "Victim compensation",
  "Food storage and cold chain",
  "Ports and transport systems",
];

export default function PublicMoneyPage() {
  return (
    <section className="page">
      <p className="eyebrow">Public Money Accountability</p>

      <h1>PetroCaribe, Aid, Contracts, and Asset Recovery</h1>

      <p>
        Every dollar, gourde, grant, loan, aid package, and public contract must
        be traceable from approval to final result. Public money must serve the
        Haitian people, not private networks, hidden contractors, or political
        protection.
      </p>

      <section className="subSection">
        <h2>Public Money Files</h2>

        <p>
          Each file must show the amount, source, date, officials involved,
          contractors involved, project location, evidence status, court status,
          and final public decision.
        </p>

        <div className="gridSection noPadding">
          {publicMoneyCases.map((item) => (
            <article className="card" key={item.id}>
              <h2>{item.title}</h2>

              <p>{item.summary}</p>

              <span className="statusBadge">{item.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="subSection">
        <h2>Money Review Process</h2>

        <p>
          This process separates verified public documents from allegations,
          missing files, audit questions, court cases, and final judgments.
        </p>

        <ol className="timeline">
          {moneyReviewSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="subSection">
        <h2>Recovered Money Must Rebuild Haiti</h2>

        <p>
          Money recovered through legal process should go directly to national
          rebuilding priorities with public reporting, receipts, audits, and
          visible project results.
        </p>

        <div className="gridSection noPadding">
          {recoveryUses.map((item) => (
            <article className="card" key={item}>
              <h2>{item}</h2>
              <p>
                This priority must include a budget, location, contractor list,
                completion photos, inspection report, and public dashboard
                update.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="subSection">
        <h2>Legal Classification Rule</h2>

        <p>
          A person or institution is not legally guilty unless a competent court
          gives a final decision. Every claim must be classified as public
          document, public report, witness statement, needs verification, under
          audit, court pending, confirmed by court, cleared by court, or false
          claim.
        </p>
      </section>
    </section>
  );
}

