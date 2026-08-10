import Navbar from "../components/Navbar";

export default function HaitiCourtConstitutionPage() {
  const courts = [
    {
      level: "1",
      french: "Tribunaux de Paix",
      english: "Peace Courts",
      role: "Local and simple civil or criminal matters.",
    },
    {
      level: "2",
      french: "Tribunaux de Première Instance",
      english: "Courts of First Instance",
      role: "Main trial courts.",
    },
    {
      level: "3",
      french: "Cours d’Appel",
      english: "Courts of Appeal",
      role: "Reviews lower-court decisions.",
    },
    {
      level: "4",
      french: "Cour de Cassation",
      english: "Court of Cassation / Supreme Court",
      role: "Highest court; reviews legal errors.",
    },
    {
      level: "5",
      french: "Tribunaux spéciaux",
      english: "Special Courts",
      role: "Created by law for specific matters.",
    },
  ];

  const articles = [
    "Articles 1–4: Haiti as sovereign republic",
    "Articles 10–18: Citizenship and nationality",
    "Articles 19–51: Fundamental rights",
    "Articles 52–52.3: Duties of citizens",
    "Articles 58–60: National sovereignty",
    "Articles 133–148: Executive power",
    "Article 149: Presidential vacancy and succession",
    "Articles 158–172: Prime Minister and Government",
    "Articles 173–184: Judicial power",
    "Articles 175–177: Cour de Cassation",
    "Articles 185–190: High Court of Justice",
    "Articles 191–199: Electoral Council",
    "Articles 217–233: Public finance",
    "Articles 263–274: Armed Forces and Police",
    "Articles 282–284: Constitutional amendment",
  ];

  const sources = [
    {
      title: "OAS — Constitution de la République d’Haïti 1987",
      link: "https://www.oas.org/juridico/pdfs/mesicic4_hti_const.pdf",
    },
    {
      title: "Georgetown PDBA — Haiti Constitution 1987",
      link: "https://pdba.georgetown.edu/Constitutions/Haiti/haiti1987.html",
    },
    {
      title: "University of Kansas / DLOC — Constitution 1987 French Creole",
      link: "https://kuscholarworks.ku.edu/entities/publication/5f2c50bd-a494-425c-8166-d98853637dea",
    },
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Haiti Court System & 1987 Constitution</h1>
        <p>
          Reference page for Haiti’s judicial structure, the 1987 Constitution,
          constitutional articles, courts, public authority, justice, elections,
          public finance, police, armed forces, and constitutional amendment.
        </p>
      </section>

      <section className="hero">
        <h1>Courts in Haiti</h1>
      </section>

      <section className="grid">
        {courts.map((court) => (
          <div className="card" key={court.french}>
            <h2>{court.level}. {court.french}</h2>
            <p><strong>English:</strong> {court.english}</p>
            <p>{court.role}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>1987 Constitution Key Articles</h1>
      </section>

      <section className="grid">
        {articles.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Constitutional reference for civic education, legal research,
              justice reform, public accountability, and national organization.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Main Source Links</h1>
      </section>

      <section className="grid">
        {sources.map((source) => (
          <div className="card" key={source.title}>
            <h2>{source.title}</h2>
            <a className="button" href={source.link} target="_blank" rel="noopener noreferrer">
              Open Source
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}

