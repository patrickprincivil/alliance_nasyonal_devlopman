import Navbar from "../components/Navbar";

export default function JournalPage() {
  const sourceCards = [
    {
      title: "Haiti-Based News Sources",
      text: "Le Nouvelliste, AyiboPost, AlterPresse, Haiti Libre, Radio Télévision Caraïbes, Radio Kiskeya, and other Haitian journalism sources.",
    },
    {
      title: "International News Sources",
      text: "CNN, Fox News, Reuters, AP, BBC, France 24, Al Jazeera, Miami Herald, and other public reporting sources.",
    },
    {
      title: "Official Records",
      text: "Court records, audit reports, public finance records, government notices, sanctions lists, police statements, and human rights reports.",
    },
  ];

  const journalCategories = [
    {
      title: "Governance and Prime Ministers",
      text: "Track prime minister changes, de facto authority questions, public statements, international support, elections, and constitutional debates.",
    },
    {
      title: "Core Group and Foreign Influence",
      text: "Track Core Group activity, embassy statements, Canada, France, United States, international missions, sanctions, aid conditions, and diplomatic involvement.",
    },
    {
      title: "Article 149 Constitutional Review",
      text: "Track how Article 149 of the 1987 Constitution has been interpreted, ignored, challenged, or bypassed during presidential vacancy and transition periods.",
    },
    {
      title: "Constitution 1987 Protection",
      text: "Defend the principle that no constitution should be changed by unlawful, de facto, corruption-linked, foreign-selected, or unaccountable political arrangements.",
    },
    {
      title: "Judicial Appointment Review",
      text: "Track reported or alleged court appointments, forced appointments, political appointments, judge removals, judge nominations, and judicial interference claims.",
    },
    {
      title: "Corrupt Judge Evidence File",
      text: "Build a lawful evidence file for judges accused in public reports, official complaints, audit records, sanctions, land theft cases, or court manipulation.",
    },
    {
      title: "Political Party Reform",
      text: "Track the number of political parties, party registration rules, party finance, party programs, electoral reform, and the proposal for three strong national political blocs.",
    },
    {
      title: "Security and Gang Crisis",
      text: "Track gang violence reports, displaced families, police updates, international security missions, public safety conditions, and institutional failures.",
    },
    {
      title: "Public Money and Audit Archive",
      text: "Track PetroCaribe, public contracts, foreign aid, national budget questions, public spending, development funds, and audit documents.",
    },
    {
      title: "Land, Property, and Court Abuse",
      text: "Track reported land theft, fraudulent sales, forged papers, illegal demolition, court manipulation, police involvement, and property abuse.",
    },
    {
      title: "Ghost Payroll and Zombie Checks",
      text: "Track reports of ghost employees, zombie checks, double salaries, absent workers, fake government staff, illegal payroll networks, and public salary abuse.",
    },
    {
      title: "Diaspora and International Policy",
      text: "Track diaspora support, migration policy, sanctions, foreign statements, international missions, and Haiti relations with other countries.",
    },
  ];

  const leadershipFiles = [
    {
      title: "Jovenel Moïse File",
      text: "Track public statements, reported court appointment concerns, land allegations, Pèlerin-related claims, constitutional questions, official responses, journalist reports, and court documents.",
    },
    {
      title: "Martine Moïse File",
      text: "Track public statements, legal status, reports, interviews, allegations, denials, court documents, and official records related to national accountability questions.",
    },
    {
      title: "Ariel Henry File",
      text: "Track de facto government questions, court appointment concerns, transitional authority, public statements, international support, allegations, denials, and official records.",
    },
    {
      title: "Michel Martelly File",
      text: "Track reported public allegations, court appointment concerns, nationality debates, public statements, sanctions questions, denials, and official records.",
    },
    {
      title: "Moïse Jean-Charles Public Statements",
      text: "Archive public statements, Senate-era claims, nationality allegations, passport claims, political warnings, and documents presented publicly.",
    },
    {
      title: "Prime Ministers and Ministers Review",
      text: "Track prime ministers, ministers, transitional officials, appointments, de facto authority, alleged conflicts of interest, and official responses.",
    },
  ];

  const institutions = [
    {
      title: "DCPJ Review",
      text: "Track investigations, public silence, case handling, political pressure claims, reports, official actions, and failures to act in major public accountability matters.",
    },
    {
      title: "FADH Review",
      text: "Track constitutional role, national security role, public statements, institutional weakness, silence, and legal responsibility during national crisis.",
    },
    {
      title: "Police Review",
      text: "Track police actions, court enforcement, illegal demolition allegations, land conflict involvement, gang crisis response, and public protection failures.",
    },
    {
      title: "Court System Review",
      text: "Track judges, prosecutors, clerks, lawyers, court corruption allegations, land cases, political cases, and public trust problems.",
    },
    {
      title: "Notary and Land Registry Review",
      text: "Track notaries, archives, property records, duplicate titles, forged deeds, registration abuse, and land transfer fraud claims.",
    },
    {
      title: "Bar Association and Lawyers Review",
      text: "Track lawyers accused in public reports of using legal language, court access, forged papers, or procedural manipulation to help steal land, houses, or public property.",
    },
  ];

  const payrollRules = [
    {
      title: "Real Identity Verification",
      text: "Every public worker must have verified identity, appointment file, work assignment, supervisor, office location, and public service role.",
    },
    {
      title: "Attendance Verification",
      text: "Salaries should be connected to verified attendance, work logs, supervisor validation, and service delivery records.",
    },
    {
      title: "Residence and Work Location",
      text: "Public employees paid to serve in Haiti should disclose work location, active assignment, lawful leave, and foreign travel status when relevant.",
    },
    {
      title: "No Duplicate Payroll",
      text: "A person should not receive multiple salaries from multiple public institutions unless the law clearly authorizes it and the record is public.",
    },
    {
      title: "Public Payroll Dashboard",
      text: "Publish institution-level payroll totals, number of employees, vacant positions, active positions, salary categories, and audit results.",
    },
    {
      title: "Recovery of Public Money",
      text: "If an official audit confirms illegal payments, the state should seek lawful recovery, suspension, discipline, prosecution, and public reporting.",
    },
  ];

  const evidenceLevels = [
    {
      title: "Level 1: News Report",
      text: "Article or broadcast published by a recognized journalist, newspaper, radio station, television station, or media outlet.",
    },
    {
      title: "Level 2: Official Statement",
      text: "Statement from government office, police, court, ministry, anti-corruption agency, election authority, or public institution.",
    },
    {
      title: "Level 3: Official Report",
      text: "Audit report, UN report, human rights report, public finance report, court record, sanctions list, or investigative file.",
    },
    {
      title: "Level 4: Court Finding",
      text: "Court decision, conviction, formal judgment, confirmed legal ruling, or final official legal determination.",
    },
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Haiti Journal and Evidence Archive</h1>

        <p>
          This journal organizes Haiti reports, public allegations, official
          records, court questions, constitutional issues, public money concerns,
          land cases, political reform, and institutional accountability.
        </p>

        <p>
          The goal is truth, evidence, lawful review, protection of families,
          protection of land, protection of public money, protection of the
          Constitution, and rebuilding Haiti with justice.
        </p>
      </section>

      <section className="hero">
        <h1>Journal Sources</h1>
      </section>

      <section className="grid">
        {sourceCards.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Main Journal Categories</h1>
      </section>

      <section className="grid">
        {journalCategories.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Leadership Accountability Files</h1>

        <p>
          This section does not declare guilt. It creates structured files for
          public allegations, official statements, journalist reports, legal
          documents, sanctions, denials, and court findings involving public
          leaders.
        </p>
      </section>

      <section className="grid">
        {leadershipFiles.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Institutional Accountability</h1>

        <p>
          Public institutions must be reviewed by evidence. The journal must
          track what institutions did, what they failed to do, and what records
          prove.
        </p>
      </section>

      <section className="grid">
        {institutions.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Ghost Payroll, Zombie Checks, and Public Salary Abuse</h1>

        <p>
          This section tracks reports of ghost employees, zombie checks, double
          salaries, absent workers, fake government staff, illegal payroll
          networks, and public officials being paid while not living or not
          working in Haiti.
        </p>
      </section>

      <section className="grid">
        {payrollRules.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Ghost Payroll Evidence Template</h1>

        <p>
          Name or code • Institution • Job title • Salary amount • Date paid •
          Appointment record • Work location • Attendance record • Supervisor •
          Residence status • Travel status • Bank or payment record • Source •
          What is alleged • What is confirmed • Official response • Legal
          status • Next action.
        </p>
      </section>

      <section className="hero">
        <h1>Evidence Levels</h1>
      </section>

      <section className="grid">
        {evidenceLevels.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Publication Rule</h1>

        <p>
          Use careful legal wording: reported, alleged, suspected, publicly
          stated, under audit, under investigation, sanctioned, charged, denied,
          confirmed by payroll record, confirmed by audit, confirmed by official
          record, or confirmed by court.
        </p>

        <p>
          Do not write that a person is guilty unless a court, official audit,
          official sanction, or verified legal record supports that statement.
        </p>
      </section>

            <section className="hero">
        <h1>Foreign Interference Withdrawal Demand</h1>

        <p>
          This section documents Haiti’s lawful demand for the withdrawal of
          foreign political control, unelected diplomatic interference, private
          security arrangements, and any external influence operating without
          clear constitutional authority, public transparency, Haitian consent,
          independent oversight, and court review.
        </p>

        <p>
          This is not a call for violence, revenge, or private action. This is a
          lawful sovereignty demand for documents, audits, courts, elections,
          public transparency, and withdrawal through legal national pressure.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>UN / LONU Role Review</h2>
          <p>
            Track UN mandates, Security Council decisions, mission documents,
            public statements, Haiti consent, human rights safeguards, funding,
            and measurable results delivered to the Haitian population.
          </p>
        </div>

        <div className="card">
          <h2>United States Role Review</h2>
          <p>
            Track diplomatic pressure, security policy, sanctions, aid programs,
            public statements, election policy, contract influence, and any role
            in unelected transition arrangements.
          </p>
        </div>

        <div className="card">
          <h2>Canada Role Review</h2>
          <p>
            Track sanctions, aid funding, security support, diplomatic
            statements, Haiti policy, public-money oversight, and any influence
            over transition decisions.
          </p>
        </div>

        <div className="card">
          <h2>France Role Review</h2>
          <p>
            Track diplomatic conduct, public statements, Haiti policy,
            historical responsibility discussions, transition influence, and
            respect for Haitian sovereignty.
          </p>
        </div>

        <div className="card">
          <h2>CARICOM Role Review</h2>
          <p>
            Track mediation, transition proposals, meeting records, official
            declarations, legal authority questions, and whether CARICOM actions
            respected Haitian constitutional order.
          </p>
        </div>

        <div className="card">
          <h2>Core Group Role Review</h2>
          <p>
            Track diplomatic coordination, public statements, political
            influence, transition recommendations, and the fact that the Core
            Group is not a Haitian constitutional governing authority.
          </p>
        </div>

        <div className="card">
          <h2>Unelected Transition Review</h2>
          <p>
            Track all unelected transition structures, appointment decrees,
            legal basis, public consent, court challenges, mandate limits,
            election calendar, and constitutional objections.
          </p>
        </div>

        <div className="card">
          <h2>Foreign Security Contractors</h2>
          <p>
            Track all private security contracts, drone operations, task forces,
            financing sources, public contract text, oversight bodies, human
            rights safeguards, and measurable results.
          </p>
        </div>

        <div className="card">
          <h2>Gang-Financing Investigation</h2>
          <p>
            Track sanctions evidence, public allegations, financial networks,
            customs records, banking evidence obtained legally, court files, and
            prosecution status for alleged gang financiers.
          </p>
        </div>

        <div className="card">
          <h2>Public Money and Donor Money</h2>
          <p>
            Track donor funds, public contracts, security spending, aid
            programs, audits, procurement records, CSCCA reports, and whether
            Haitian citizens received measurable benefits.
          </p>
        </div>

        <div className="card">
          <h2>Election Calendar Demand</h2>
          <p>
            Track whether unelected authorities and foreign actors have provided
            a public election calendar, security plan, voter protection plan,
            constitutional pathway, and transfer-of-power process.
          </p>
        </div>

        <div className="card">
          <h2>Withdrawal Demand</h2>
          <p>
            Demand the withdrawal of foreign political control, unelected
            interference, secret security contracts, and any arrangement that
            operates without Haitian constitutional authority, public
            transparency, and independent oversight.
          </p>
        </div>
      </section>

      <section className="hero">
        <h1>Required Public Questions</h1>

        <p>
          Show the law. Show the decree. Show who signed. Show who paid. Show
          the public contract. Show the court review. Show the human rights
          safeguards. Show the election calendar. Show the results delivered to
          the Haitian population.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Legal Rule</h2>
          <p>
            No threats. No private revenge. No mob action. No fake accusations.
            No violence. Use documents, courts, audits, public records,
            independent investigation, and lawful civic pressure.
          </p>
        </div>

        <div className="card">
          <h2>Evidence Rule</h2>
          <p>
            Every claim must be labeled as reported, alleged, disputed, under
            investigation, audited, sanctioned, charged, denied, confirmed by
            official record, or confirmed by court judgment.
          </p>
        </div>

        <div className="card">
          <h2>Population Result Test</h2>
          <p>
            Ask whether Haitians received safer streets, reopened schools,
            protected hospitals, lower kidnappings, secure roads, restored
            courts, reopened businesses, and a real election pathway.
          </p>
        </div>

        <div className="card">
          <h2>Public Demand</h2>
          <p>
            Haiti must be governed by Haitian people under Haitian law, with
            transparent institutions, independent courts, clean public money,
            national sovereignty, and real elections.
          </p>
        </div>
      </section>

      
    </main>
  );
}

