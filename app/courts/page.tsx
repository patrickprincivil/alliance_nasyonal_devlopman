import Navbar from "../components/Navbar";

export default function CourtsPage() {
  const courtSystem = [
    {
      title: "Cour de Cassation",
      english: "Supreme Court / Court of Cassation",
      text: "Highest judicial court for reviewing legal decisions, protecting lawful procedure, and preserving national legal consistency.",
    },
    {
      title: "Cours d’Appel",
      english: "Courts of Appeal",
      text: "Regional appeal courts that review decisions from lower courts and help correct legal or procedural errors.",
    },
    {
      title: "Tribunaux de Première Instance",
      english: "Courts of First Instance",
      text: "Main trial courts for civil, criminal, commercial, family, property, and public legal matters.",
    },
    {
      title: "Tribunaux de Paix",
      english: "Peace Courts",
      text: "Local courts for community-level disputes, minor cases, early legal access, and local justice services.",
    },
    {
      title: "Tribunaux Spéciaux",
      english: "Special Courts",
      text: "Specialized courts created by law for specific subjects such as labor, administrative, financial, land, commercial, or public accountability matters.",
    },
    {
      title: "École de la Magistrature",
      english: "Judicial Training School",
      text: "Training and professional development system for judges, legal officers, ethics, law, procedure, and public service.",
    },
  ];

  const honestJudgeProgram = [
    {
      title: "Merit-Based Selection",
      text: "Judges should be selected through transparent qualifications, exams, legal experience, ethics review, and public service record.",
    },
    {
      title: "Ethics and Integrity Review",
      text: "Every judge, prosecutor, clerk, and court officer should follow a written ethics code with conflict-of-interest checks.",
    },
    {
      title: "Public Case Tracking",
      text: "Courts should use digital case numbers, hearing dates, public status updates, and secure records to reduce disappearance of files.",
    },
    {
      title: "Anti-Corruption Office",
      text: "Create an independent court integrity office to investigate bribery, missing files, fake judgments, and abuse of authority.",
    },
    {
      title: "Protected Reporting",
      text: "Citizens, lawyers, clerks, and honest judges need a safe way to report corruption, threats, fraud, and political pressure.",
    },
    {
      title: "Judicial Security",
      text: "Courts, judges, witnesses, victims, files, and evidence must be protected from gangs, intimidation, theft, and destruction.",
    },
    {
      title: "Digital Evidence Archive",
      text: "Build a secure archive for court records, land records, contracts, financial evidence, public decisions, and constitutional documents.",
    },
    {
      title: "Court Performance Dashboard",
      text: "Track pending cases, resolved cases, appeal delays, prison detention delays, corruption reports, and public access statistics.",
    },
    {
      title: "Community Legal Education",
      text: "Teach citizens their rights, court steps, complaint forms, legal deadlines, and how to avoid fraud or false legal promises.",
    },
    {
      title: "International Lawful Cooperation",
      text: "Cooperate lawfully with courts, auditors, anti-corruption agencies, and human rights institutions while protecting Haitian sovereignty.",
    },
  ];

  const developmentProgram = [
    {
      title: "Justice First",
      text: "No serious development can survive without courts that protect contracts, property, families, businesses, and public money.",
    },
    {
      title: "Land and Property Security",
      text: "Digitize land records, stop fake deeds, protect lawful ownership, and make property disputes faster and transparent.",
    },
    {
      title: "Financial Crime Court Track",
      text: "Create a dedicated track for corruption, stolen public funds, sanctions evidence, contract fraud, money laundering, and public procurement crimes.",
    },
    {
      title: "Business Protection",
      text: "Protect small businesses, online commerce, investors, workers, farmers, churches, schools, and community organizations under clear laws.",
    },
    {
      title: "Youth and Family Protection",
      text: "Use courts and social programs to protect children, families, schools, churches, and vulnerable people from violence and exploitation.",
    },
    {
      title: "Public Works Accountability",
      text: "Every road, bridge, school, hospital, water, electricity, internet, and infrastructure contract should have public legal review.",
    },
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Courts System and Honest Justice Program</h1>

        <p>
          A lawful court system for Haiti must protect truth, families,
          property, contracts, public money, national sovereignty, and human
          dignity. This page organizes the court structure and a clean program
          for honest judges, transparent courts, and national development.
        </p>
      </section>

      <section className="hero">
        <h1>Haiti Court Structure</h1>
        <p>
          The court system should be organized from local access to national
          review: peace courts, first instance courts, appeal courts, the Court
          of Cassation, special courts created by law, and judicial training.
        </p>
      </section>

      <section className="grid">
        {courtSystem.map((court) => (
          <div className="card" key={court.title}>
            <h2>{court.title}</h2>
            <h3>{court.english}</h3>
            <p>{court.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Honest Judges Program</h1>
        <p>
          The goal is not political revenge. The goal is lawful justice,
          integrity, training, protection, transparent records, and public trust.
        </p>
      </section>

      <section className="grid">
        {honestJudgeProgram.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Justice for National Development</h1>
        <p>
          Haiti needs courts that can protect development projects, public
          funds, land records, businesses, families, schools, churches,
          infrastructure, and national reconstruction.
        </p>
      </section>

      <section className="grid">
        {developmentProgram.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Four-Language Public Mission</h1>

        <p>
          English: Build honest courts, protect public money, defend families,
          and support national development.
        </p>

        <p>
          Français : Construire des tribunaux honnêtes, protéger l’argent
          public, défendre les familles et soutenir le développement national.
        </p>

        <p>
          Español: Construir tribunales honestos, proteger el dinero público,
          defender a las familias y apoyar el desarrollo nacional.
        </p>

        <p>
          Kreyòl Ayisyen: Bati tribinal onèt, pwoteje lajan piblik, defann
          fanmi yo, epi soutni devlopman nasyonal.
        </p>
      </section>
    </main>
  );
}

