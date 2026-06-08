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
            <section className="hero">
        <h1>Public Accountability Questions</h1>

        <p>
          This section records serious public questions raised by Haitian
          citizens, journalists, community leaders, and observers when official
          statements appear incomplete, unclear, or inconsistent.
        </p>

        <p>
          These questions are not final accusations. They are evidence-based
          questions that require official documents, journalist reports,
          independent verification, court review, or public investigation.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Police Operation Claims</h2>
          <p>
            When officials report large numbers of gang members killed, the
            Journal should document the date, location, official speaker,
            number reported, number of weapons recovered, arrests, injuries,
            and source link.
          </p>
        </div>

        <div className="card">
          <h2>Weapons Recovered Question</h2>
          <p>
            If many armed suspects are reported killed but only a small number
            of weapons are recovered, the public has the right to ask for the
            full operation report, recovered evidence list, and independent
            verification.
          </p>
        </div>

        <div className="card">
          <h2>Civilian Protection Question</h2>
          <p>
            The Journal should ask whether civilians were present, whether
            victims were identified, whether families were notified, and whether
            hospitals or local authorities confirmed the report.
          </p>
        </div>

        <div className="card">
          <h2>Official Source Required</h2>
          <p>
            Every serious claim must include the original source: PNH statement,
            government notice, journalist report, video, audio, court record,
            human rights report, or local authority confirmation.
          </p>
        </div>

        <div className="card">
          <h2>Independent Verification</h2>
          <p>
            Reports should be compared with Haitian media, local journalists,
            community testimony, hospitals, human rights groups, international
            observers, and official documents.
          </p>
        </div>

        <div className="card">
          <h2>Verification Status</h2>
          <p>
            Use Pending when the claim is not confirmed, Needs more sources
            when only one source exists, and Verified only when strong evidence
            supports the report.
          </p>
        </div>
      </section>
      
    </main>
  );
}

