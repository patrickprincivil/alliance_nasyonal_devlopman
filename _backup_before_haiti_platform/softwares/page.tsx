import Navbar from "../Navbar";

export default function SoftwaresPage() {
  const softwares = [
    "AI Legal Assistant",
    "Court Directory System",
    "Case Management System",
    "Document Archive",
    "Public Records Portal",
    "Complaint Tracking System",
    "Constitution Education App",
    "Sanctions Research Archive",
    "Journal and Reports System",
    "Media Center",
    "Analytics Dashboard",
    "E-Commerce Safety Scanner",
    "Translation System",
    "Admin Control Panel",
    "User Access System",
    "Notification System",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>National Software Systems</h1>

        <p>
          Software tools for justice, courts, constitution, public records,
          AI support, civic education, reports, analytics, and safe digital
          operations.
        </p>
      </section>

      <section className="grid">
        {softwares.map((software) => (
          <div className="card" key={software}>
            <h2>{software}</h2>
            <p>Digital platform software module.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

