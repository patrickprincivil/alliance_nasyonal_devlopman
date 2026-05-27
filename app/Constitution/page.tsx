import Navbar from "../Navbar";

export default function JusticeSystemPage() {
  const systems = [
    "Court Modernization",
    "Digital Case Tracking",
    "Public Complaint Portal",
    "Legal Aid Access",
    "Anti-Corruption Reporting",
    "Human Rights Monitoring",
    "Police Accountability",
    "Prison Administration",
    "Public Prosecutor Tracking",
    "Judicial Transparency",
    "Document Archive",
    "Citizen Legal Education",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>National Justice System Software</h1>

        <p>
          Software modules for lawful justice modernization, transparency,
          legal education, public records, human rights, accountability, and
          citizen access.
        </p>
      </section>

      <section className="grid">
        {systems.map((system) => (
          <div className="card" key={system}>
            <h2>{system}</h2>
            <p>Justice system software module.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

