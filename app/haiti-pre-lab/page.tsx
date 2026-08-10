import Navbar from "../components/Navbar";

export default function HaitiPreLabPage() {
  const modules = [
    "Haiti Sovereignty Dashboard",
    "Constitution 1987 Center",
    "Public Money Tracking",
    "Justice & Court Reform",
    "Anti-Corruption Evidence Archive",
    "Gang Financing Investigation Tracker",
    "Police Accountability Tracker",
    "Land Theft & Property Protection",
    "Sea, River & Food Security",
    "Housing & Illegal Construction Review",
    "Diaspora Support System",
    "Church & Community Ministry",
    "Education & Training Center",
    "Employment & Skills Platform",
    "Agriculture & Clean Food Program",
    "Infrastructure Reconstruction",
    "Media & Journalist Source Hub",
    "Foreign Influence Tracker",
    "Sanctions & Legal Review",
    "National Reset Command Center",
  ];

  const launchOrder = [
    "Constitution and Legal Foundation",
    "Evidence Archive",
    "Security and User Accounts",
    "Public Money Dashboard",
    "Justice Tracker",
    "Media Source Hub",
    "Community Reporting System",
    "Diaspora Support System",
    "Beta Testing",
    "Public Launch",
  ];

  const checklist = [
    "Constitution 1987 Added",
    "Legal Rules Added",
    "Evidence Labels Added",
    "No Revenge Policy Added",
    "Due Process Rule Added",
    "Public Money Tracker Ready",
    "Journalist Sources Ready",
    "Report Forms Ready",
    "Security Rules Ready",
    "Backup System Tested",
    "Admin Approval System Ready",
    "Mobile View Tested",
    "Final Haiti Lab Approval",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Haiti Pre-Lab National Reset Checklist</h1>
        <p>
          A lawful, evidence-based Haiti platform for sovereignty, justice,
          public money, churches, education, land, food, water, media,
          reconstruction, and national development.
        </p>
      </section>

      <section className="hero">
        <h1>Haiti Platform Modules</h1>
      </section>

      <section className="grid">
        {modules.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Required Haiti module for lawful documentation, public
              transparency, national development, justice, and community action.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Launch Order</h1>
      </section>

      <section className="grid">
        {launchOrder.map((item, index) => (
          <div className="card" key={item}>
            <h2>Step {index + 1}</h2>
            <p>{item}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Haiti Pre-Lab Approval Checklist</h1>
      </section>

      <section className="grid">
        {checklist.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>Status: Pending review before Haiti platform lab approval.</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Success Metrics</h1>
        <p>
          Verified reports, public money records, court cases tracked, community
          reports, churches involved, youth trained, farmers supported, families
          helped, diaspora participation, media sources archived, and lawful
          action completed.
        </p>
      </section>
    </main>
  );
}

