const hearingRules = [
  "No secret national agreement",
  "No public contract without public review",
  "No foreign agreement without legal review",
  "No armed group above the Constitution",
  "No judge above the law",
  "No prime minister above constitutional process",
  "Every accused person has the right to answer",
  "Every victim has the right to be heard",
  "Every journalist has the right to ask questions",
  "Every court decision must be published",
];

const citizenTestimonies = [
  {
    id: "petion-ville-police-trust",
    title: "Public Trust Failure Near Police Station",
    location: "Pétion-Ville",
    category: "Police trust",
    summary:
      "Witness account alleges that citizens did not trust a nearby police station to handle a public violence situation and moved toward another station.",
    status: "Witness statement",
    recommendedAction:
      "Require police response review, station audit, public complaint channel, and community trust investigation.",
  },
  {
    id: "public-office-racket",
    title: "Public Office Line and Payment Racket",
    location: "Public offices",
    category: "Public service corruption",
    summary:
      "Witness account alleges unofficial payments, line manipulation, and unequal treatment in public offices.",
    status: "Witness statement",
    recommendedAction:
      "Create ticket system, receipts, complaint QR code, camera audit, and anti-corruption hotline.",
  },
  {
    id: "municipal-seller-abuse",
    title: "Street Seller Seizure and Municipal Abuse Concern",
    location: "Municipal areas",
    category: "Municipal abuse",
    summary:
      "Witness account alleges that municipal authorities sometimes ignore informal selling until later confiscating poor sellers’ products without a fair system.",
    status: "Witness statement",
    recommendedAction:
      "Create legal vending zones, seller permits, warning process, receipt for seized goods, and appeal process.",
  },
];

const classificationLabels = [
  "Public document",
  "Public report",
  "Witness statement",
  "Needs verification",
  "Police file needed",
  "Court file needed",
  "Under investigation",
  "Confirmed by court",
  "Cleared by court",
  "False claim",
];

export default function HearingsPage() {
  return (
    <section className="page">
      <p className="eyebrow">Live Public Review</p>

      <h1>Public Hearings & National Questions</h1>

      <p>
        Major national decisions must be reviewed publicly with court authority,
        evidence, journalists, lawyers, citizens, victims, and official records.
      </p>

      <section className="subSection">
        <h2>Public Hearing Rules</h2>

        <p>
          Public hearings must protect the Constitution, the people, witnesses,
          victims, journalists, and the legal rights of accused persons.
        </p>

        <ol className="timeline">
          {hearingRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>
      </section>

      <section className="subSection">
        <h2>Citizen Testimony & Public Trust Hearings</h2>

        <p>
          Citizens and diaspora witnesses can submit testimony about corruption,
          public service rackets, municipal abuse, police trust failure, and
          security breakdowns. Testimony must be verified before becoming a
          court finding.
        </p>

        <div className="gridSection noPadding">
          {citizenTestimonies.map((item) => (
            <article className="card" key={item.id}>
              <h2>{item.title}</h2>

              <p>
                <strong>Location:</strong> {item.location}
              </p>

              <p>
                <strong>Category:</strong> {item.category}
              </p>

              <p>{item.summary}</p>

              <p>
                <strong>Recommended action:</strong> {item.recommendedAction}
              </p>

              <span className="statusBadge">{item.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="subSection">
        <h2>Legal Classification Labels</h2>

        <p>
          Every claim must be classified before publication. This protects truth,
          witnesses, victims, honest officials, and the rights of accused
          persons.
        </p>

        <div className="gridSection noPadding">
          {classificationLabels.map((label) => (
            <article className="card" key={label}>
              <h2>{label}</h2>
              <p>
                This label helps the public separate verified evidence from
                claims, missing files, testimony, and final court decisions.
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

