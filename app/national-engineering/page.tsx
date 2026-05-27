import Navbar from "../Navbar";

export default function NationalEngineeringPage() {
  const sections = [
    "National Engineering",
    "Civil Protection",
    "Security Education",
    "Technology Development",
    "Emergency Preparedness",
    "Maritime Engineering",
    "Aerospace Science",
    "Mechanical Systems",
    "Disaster Response",
    "Infrastructure Protection",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>National Engineering and Civil Protection</h1>

        <p>
          Educational platform for engineering, civil protection, emergency
          preparedness, infrastructure resilience, maritime systems, aerospace
          science, and lawful technology development.
        </p>
      </section>

      <section className="grid">
        {sections.map((section) => (
          <div className="card" key={section}>
            <h2>{section}</h2>
            <p>Lawful education and national resilience module.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

