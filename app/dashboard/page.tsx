import Navbar from "../Navbar";

export default function DashboardPage() {
  const systems = [
    "Justice System",
    "Courts",
    "Constitution",
    "Education",
    "Healthcare",
    "Infrastructure",
    "Transportation",
    "Agriculture",
    "Media Center",
    "AI Assistant",
    "E-Commerce",
    "Journal System",
    "Analytics",
    "National Archive",
    "Smart Cities",
    "Security Systems",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>National Operations Dashboard</h1>

        <p>
          Unified digital dashboard for justice, governance, civic
          organization, national modernization, media, analytics, and economic
          systems.
        </p>
      </section>

      <section className="grid">
        {systems.map((system) => (
          <div className="card" key={system}>
            <h2>{system}</h2>
            <p>National digital management module.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

