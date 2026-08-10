const topics = [
  {
    title: "Article 149 Review",
    text: "Review presidential vacancy, executive authority, and constitutional transition rules.",
  },
  {
    title: "Prime Minister Rules",
    text: "Review appointment, Parliament confidence vote, and legal authority.",
  },
  {
    title: "Nationality & Eligibility",
    text: "Review public office eligibility, nationality claims, and court clearance.",
  },
  {
    title: "Sovereignty",
    text: "No foreign actor, political party, armed group, contractor, ambassador, or international organization is above the Haitian Constitution.",
  },
];

const constitutionReformIssues = [
  {
    id: "diaspora-political-rights",
    title: "Diaspora Political Rights",
    currentProblem:
      "Many Haitian diaspora citizens believe the political system keeps them outside national decision-making.",
    courtQuestion:
      "How can Haiti protect sovereignty while allowing honest diaspora Haitians to vote, serve, invest, and help rebuild the country?",
    proposedFix:
      "Create clear rules for diaspora voting, public-office eligibility, asset declaration, foreign influence screening, and conflict-of-interest review.",
    status: "Court question",
  },
  {
    id: "constitutional-amendment-process",
    title: "Legal Constitutional Reform Process",
    currentProblem:
      "Haiti needs constitutional modernization, but reform must not be used to bypass democratic safeguards.",
    courtQuestion:
      "Which reform process is legal under the Constitution of 1987?",
    proposedFix:
      "Require court review, public hearings, official translations, public publication, and legal certification before any national vote.",
    status: "Public debate",
  },
  {
    id: "public-office-eligibility",
    title: "Public Office Eligibility",
    currentProblem:
      "The public needs a clear legal system to determine who can serve in high office.",
    courtQuestion:
      "Who has legal authority to certify nationality, eligibility, conflict of interest, and public-office clearance?",
    proposedFix:
      "Create a Public Clearance Registry showing court documents, dates, decisions, appeals, and evidence status.",
    status: "Court question",
  },
];

export default function ConstitutionPage() {
  return (
    <section className="page">
      <p className="eyebrow">Constitution First</p>

      <h1>Haiti Constitution of 1987 Review Center</h1>

      <p>
        Every major decision affecting Haiti must be measured against the
        Constitution of 1987, public law, court authority, and the rights of the
        Haitian people.
      </p>

      <div className="gridSection noPadding">
        {topics.map((topic) => (
          <article className="card" key={topic.title}>
            <h2>{topic.title}</h2>
            <p>{topic.text}</p>
          </article>
        ))}
      </div>

      <section className="subSection">
        <h2>Constitution Reform & Diaspora Political Rights</h2>

        <p>
          This section reviews what must be fixed legally, especially diaspora
          political rights, public-office eligibility, national sovereignty, and
          protection against hidden foreign control.
        </p>

        <div className="gridSection noPadding">
          {constitutionReformIssues.map((issue) => (
            <article className="card" key={issue.id}>
              <h2>{issue.title}</h2>

              <p>
                <strong>Problem:</strong> {issue.currentProblem}
              </p>

              <p>
                <strong>Court question:</strong> {issue.courtQuestion}
              </p>

              <p>
                <strong>Proposed fix:</strong> {issue.proposedFix}
              </p>

              <span className="statusBadge">{issue.status}</span>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

