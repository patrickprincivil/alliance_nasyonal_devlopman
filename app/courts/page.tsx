import Navbar from "../components/Navbar";

export default function CourtsPage() {
  return (
    <main className="page">
      <Navbar />

      {/* keep your other courts sections above here */}

      <section className="hero">
        <h1>Haitian-Led Lawful Transition Framework</h1>

        <p>
          This framework organizes the lawful steps Haiti needs for a clean
          national transition, honest public leadership, sanctions review,
          public audits, election preparation, and constitutional rebuilding.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Public Accountability Registry</h2>
          <p>
            Track public officials, contracts, public funds, audit findings,
            responsibilities, court status, and accountability records.
          </p>
        </div>

        <div className="card">
          <h2>Sanctions Registry</h2>
          <p>
            Track sanctioned individuals and entities from official sources,
            including date, authority, reason, legal basis, and review status.
          </p>
        </div>

        <div className="card">
          <h2>PetroCaribe Audit Archive</h2>
          <p>
            Organize PetroCaribe reports, contracts, ministries, contractors,
            payments, missing records, and court follow-up.
          </p>
        </div>

        <div className="card">
          <h2>Independence Debt Claim Archive</h2>
          <p>
            Research Haiti’s independence debt, historical payments, legal
            claims, reparations arguments, and international records.
          </p>
        </div>

        <div className="card">
          <h2>Court Reform Platform</h2>
          <p>
            Build honest courts, case tracking, public records, protected
            evidence, transparent hearings, and lawful review systems.
          </p>
        </div>

        <div className="card">
          <h2>Honest Judges and Lawyers Registry</h2>
          <p>
            Verify judges, lawyers, ethics records, legal aid participation,
            professional status, and public service commitment.
          </p>
        </div>

        <div className="card">
          <h2>Election and Transition Demand</h2>
          <p>
            Demand a lawful Haitian-led transition, clear election path,
            constitutional order, public security, and protection from corrupt
            control.
          </p>
        </div>

        <div className="card">
          <h2>Diaspora Support Network</h2>
          <p>
            Organize Haitian professionals, donors, lawyers, engineers,
            educators, pastors, auditors, media workers, and civic leaders.
          </p>
        </div>
      </section>
    </main>
  );
}

