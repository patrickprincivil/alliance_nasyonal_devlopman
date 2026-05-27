import Navbar from "../Navbar";

export default function JournalPage() {
  const sections = [
    "Documents",
    "Reports",
    "Media Assets",
    "Legal Files",
    "News Channel",
    "Archive",
    "Sanctions Research",
    "Public Statements",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Journal Software Center</h1>

        <p>
          Central place to organize reports, documents, media files, justice
          records, e-commerce notes, and project archives.
        </p>
      </section>

      <section className="grid">
        {sections.map((section) => (
          <div className="card" key={section}>
            <h2>{section}</h2>
            <p>Organized journal section.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

