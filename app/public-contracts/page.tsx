const contractReviewSteps = [
  "Collect the contract or public agreement",
  "Verify the date and signatures",
  "Identify Haitian officials who signed",
  "Identify foreign governments, companies, NGOs, or organizations involved",
  "Identify the sector: land, ports, airports, roads, rail, water, security, farming, energy, public money",
  "Translate the contract into Kreyòl, French, English, and Spanish",
  "Publish a public summary",
  "Send a copy to courts, auditors, and national archives",
  "Open journalist questions",
  "Open citizen questions",
  "Hold a public hearing when required",
  "Publish the final legal decision",
];

const publicServiceProblems = [
  {
    id: "id-card-racket",
    service: "National Identification Card",
    problem:
      "Citizens report unofficial fees, line manipulation, under-table payments, and unequal treatment.",
    legalFix:
      "Publish official prices, require receipts, ticket numbers, online appointments, camera audit, and an anti-racket hotline.",
    evidenceNeeded:
      "Receipt, date, office location, amount requested, worker name if known, and witness statement.",
  },
  {
    id: "bank-line-racket",
    service: "Banks and Public Payment Offices",
    problem:
      "Citizens report agents outside offices selling access or pushing some people ahead of others.",
    legalFix:
      "Require numbered queue systems, security oversight, complaint QR codes, and public service standards.",
    evidenceNeeded:
      "Location, date, fee requested, witness statement, and photo/video only when lawful and safe.",
  },
  {
    id: "stamp-under-table",
    service: "Public Office Stamps and Documents",
    problem:
      "Citizens report that basic stamps or document processing can require unofficial payments or unreasonable delays.",
    legalFix:
      "Publish service times, publish official prices, require digital receipts, rotate staff, and audit delays.",
    evidenceNeeded:
      "Document type, office, date, amount requested, official receipt or proof that no receipt was given.",
  },
  {
    id: "street-seller-seizure",
    service: "Municipal Street Vending Control",
    problem:
      "Street sellers report sudden confiscation of goods without fair planning, legal notice, receipt, or safe market alternatives.",
    legalFix:
      "Create legal vending zones, written warnings, relocation plans, receipts for seized goods, and appeal process.",
    evidenceNeeded:
      "Municipality, date, items seized, officials involved if known, and witness statement.",
  },
];

const contractCategories = [
  "Foreign agreements",
  "Public money contracts",
  "Airport contracts",
  "Port contracts",
  "Road contracts",
  "Rail contracts",
  "Water contracts",
  "Energy contracts",
  "Security contracts",
  "Agriculture contracts",
  "Telecommunication contracts",
  "Land agreements",
];

export default function PublicContractsPage() {
  return (
    <section className="page">
      <p className="eyebrow">No Secret Contracts</p>

      <h1>Public Contract Review & Anti-Racket System</h1>

      <p>
        Any agreement affecting Haiti’s land, ports, airports, roads, railways,
        farms, water, security, public money, energy, or national resources must
        be public, translated, audited, reviewed by competent courts, and
        accessible to journalists and citizens.
      </p>

      <section className="subSection">
        <h2>Public Contract Review Process</h2>

        <p>
          This process protects Haiti from illegal contracts, hidden agreements,
          foreign pressure, under-table signatures, and public money abuse.
        </p>

        <ol className="timeline">
          {contractReviewSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="subSection">
        <h2>Contract Categories Under Review</h2>

        <p>
          Every major contract must be classified by sector so courts, auditors,
          journalists, and citizens know what part of the country is affected.
        </p>

        <div className="gridSection noPadding">
          {contractCategories.map((category) => (
            <article className="card" key={category}>
              <h2>{category}</h2>
              <p>
                This category must include the contract file, signatories,
                amount, duration, public purpose, court status, and final
                decision.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="subSection">
        <h2>Public Services Anti-Racket System</h2>

        <p>
          Public offices, banks, ID services, municipal services, licensing
          offices, and document offices must not be controlled by outside agents,
          under-table payments, line manipulation, intimidation, or unequal
          treatment.
        </p>

        <div className="gridSection noPadding">
          {publicServiceProblems.map((item) => (
            <article className="card" key={item.id}>
              <h2>{item.service}</h2>

              <p>
                <strong>Problem:</strong> {item.problem}
              </p>

              <p>
                <strong>Legal fix:</strong> {item.legalFix}
              </p>

              <p>
                <strong>Evidence needed:</strong> {item.evidenceNeeded}
              </p>

              <span className="statusBadge">Needs verification</span>
            </article>
          ))}
        </div>
      </section>

      <section className="subSection">
        <h2>Public Rule</h2>

        <p>
          No public service should require unofficial payments. No citizen should
          be forced to pay a racket to receive a legal document. No contractor,
          public worker, outside agent, mayor, police officer, political leader,
          or foreign actor should be above the law.
        </p>

        <div className="gridSection noPadding">
          {[
            "Official price published",
            "Receipt required",
            "Queue number required",
            "Complaint system required",
            "Camera or audit review",
            "Court referral for corruption",
            "Journalist access",
            "Citizen appeal process",
          ].map((rule) => (
            <article className="card" key={rule}>
              <h2>{rule}</h2>
              <p>
                This rule helps protect citizens, diaspora visitors, poor
                sellers, workers, and honest public servants.
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

