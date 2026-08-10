import Navbar from "../Navbar";

export default function JusticePage() {
  const systems = [
    "Courts",
    "Anti-Corruption",
    "Legal Aid",
    "Human Rights",
    "Police Oversight",
    "Constitution",
    "Investigations",
    "Public Records",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Haiti Justice System</h1>

        <p>
          Digital modernization and transparency systems for justice access,
          accountability, constitutional education, and public trust.
        </p>
      </section>

      <section className="grid">
        {systems.map((system) => (
          <div className="card" key={system}>
            <h2>{system}</h2>
            <p>Justice modernization system.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

