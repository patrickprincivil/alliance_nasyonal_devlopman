import Navbar from "./Navbar";

export default function Home() {
  const systems = [
    "Constitution of Haiti 1987",
    "Highest Courts",
    "Justice System",
    "Case Management Software",
    "Legal Archive",
    "Court Directory",
    "Public Records",
    "AI Legal Assistant",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>🏛️ Alliance Nasyonal pou Devlopman</h1>

        <p>
          Digital platform for justice, constitutional education, highest
          courts, public records, civic organization, national modernization,
          software tools, and legal transparency.
        </p>
      </section>

      <section className="grid">
        {systems.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>National digital management module.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

