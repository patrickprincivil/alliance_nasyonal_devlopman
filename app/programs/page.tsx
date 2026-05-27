import Navbar from "../Navbar";

export default function ProgramsPage() {
  const programs = [
    "Education",
    "Infrastructure",
    "Healthcare",
    "Technology",
    "Agriculture",
    "Logistics",
    "Transportation",
    "Smart Cities",
    "Economic Growth",
    "Civil Protection",
    "Justice Modernization",
    "Public Records",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>National Development Programs</h1>

        <p>
          Programs for education, infrastructure, justice, technology,
          agriculture, healthcare, and national modernization.
        </p>
      </section>

      <section className="grid">
        {programs.map((program) => (
          <div className="card" key={program}>
            <h2>{program}</h2>
            <p>National development initiative.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

