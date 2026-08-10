const authorityQuestions = [
  "Who had legal authority on July 7, 2021?",
  "Was there a sworn prime minister at the time?",
  "Was there only a designated prime minister?",
  "Did the Council of Ministers meet and vote?",
  "Was the Cour de Cassation consulted?",
  "Was Parliament functional or absent?",
  "What role did foreign statements play?",
  "Which decisions were published in official records?",
  "Which court confirmed the transition?",
  "Which contracts and national decisions were signed afterward?",
];

const dorvalQuestions = [
  {
    id: "dorval-reform-position",
    title: "Dorval and Constitutional Reform",
    question:
      "What exactly did Monferrier Dorval say about changing parts of the 1987 Constitution?",
    status: "Public report",
  },
  {
    id: "security-zone",
    title: "Security Zone Review",
    question:
      "What security zone existed near Dorval’s residence and the presidential residence area?",
    status: "Police file needed",
  },
  {
    id: "jovenel-statements",
    title: "Jovenel Public Statements",
    question:
      "What did Jovenel Moïse publicly say about Dorval’s killing, constitutional reform, and responsibility?",
    status: "Public statement review",
  },
  {
    id: "dcpj-file",
    title: "DCPJ Investigation File",
    question:
      "Where is the full DCPJ file, and which court currently controls the case record?",
    status: "Court file needed",
  },
  {
    id: "evidence-chain",
    title: "Evidence Chain",
    question:
      "Which photos, calls, messages, witness statements, security logs, and police records were preserved?",
    status: "Evidence review",
  },
  {
    id: "public-report",
    title: "Final Public Report",
    question:
      "Why has the Haitian public not received a complete final report with verified facts and court status?",
    status: "Public accountability",
  },
];

export default function PostJovenelReviewPage() {
  return (
    <section className="page">
      <p className="eyebrow">Post-July 7, 2021 Review</p>

      <h1>Post-Jovenel Moïse Constitutional Review</h1>

      <p>
        This section organizes the legal questions, public documents, court
        files, official statements, foreign role questions, and constitutional
        issues after the death of President Jovenel Moïse.
      </p>

      <section className="subSection">
        <h2>Executive Authority Questions</h2>

        <p>
          Every major decision after July 7, 2021 must be reviewed under the
          Constitution of 1987, public law, court authority, and official
          records.
        </p>

        <ol className="timeline">
          {authorityQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </section>

      <section className="subSection">
        <h2>Monferrier Dorval / Constitutional Reform Case Review</h2>

        <p>
          This section records public questions about Monferrier Dorval,
          constitutional reform, security around presidential spaces, DCPJ
          investigation files, PNH responsibility, witness claims, evidence
          preservation, and court transparency.
        </p>

        <div className="gridSection noPadding">
          {dorvalQuestions.map((item) => (
            <article className="card" key={item.id}>
              <h2>{item.title}</h2>

              <p>{item.question}</p>

              <span className="statusBadge">{item.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="subSection">
        <h2>Legal Classification Rule</h2>

        <p>
          Every claim must be classified before publication. The purpose is not
          revenge. The purpose is truth, legality, evidence, public order, and
          national rebuilding.
        </p>

        <div className="gridSection noPadding">
          {[
            "Public document",
            "Public report",
            "Witness statement",
            "Needs verification",
            "Police file needed",
            "Court file needed",
            "Under investigation",
            "Confirmed by court",
          ].map((status) => (
            <article className="card" key={status}>
              <h2>{status}</h2>
              <p>
                This label helps the public separate verified facts from claims,
                testimony, missing files, and court decisions.
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

