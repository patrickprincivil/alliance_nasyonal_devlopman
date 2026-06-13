const journalistTools = [
  "Search public contracts",
  "Download court documents",
  "Download audit summaries",
  "Submit public hearing questions",
  "Request interviews",
  "Track public officials",
  "Track contractors",
  "Track money trail",
  "View public hearing calendar",
  "View final court decisions",
  "Download public reports",
  "Check legal classification status",
];

const publicAccessRules = [
  "Public money means public records",
  "Public contracts must be searchable",
  "Court decisions must be published",
  "Audit summaries must be downloadable",
  "Journalists must be able to ask questions",
  "Citizens must be able to submit evidence",
  "Witnesses must be protected",
  "Sensitive information must be handled legally",
];

export default function JournalistCenterPage() {
  return (
    <main className="page">
      <p className="eyebrow">Public Records</p>

      <h1>Journalist Access Center</h1>

      <p>
        Journalists must have access to public contracts, court files, audit
        records, public money reports, government decisions, hearing records,
        and legal classification labels.
      </p>

      <section className="subSection">
        <h2>Journalist Tools</h2>

        <div className="gridSection noPadding">
          {journalistTools.map((tool) => (
            <article className="card" key={tool}>
              <h2>{tool}</h2>

              <p>
                This tool should connect to public records, official files,
                audit documents, court status, and public hearing materials.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="subSection">
        <h2>Public Access Rules</h2>

        <ol className="timeline">
          {publicAccessRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>
      </section>

            <section className="hero">
        <h1>Haiti Political Party Reform Journal</h1>

        <p>
          Haiti needs a serious national political reform discussion. A small
          country cannot build strong institutions when political parties are
          fragmented, weak, temporary, personality-based, or created only for
          elections.
        </p>

        <p>
          This section studies how Haiti can move toward fewer, stronger,
          lawful, transparent, program-based political parties through electoral
          reform, civic education, accountability, and constitutional debate.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Political Fragmentation Problem</h2>
          <p>
            Track reports, legal records, electoral data, and public debates
            about the large number of registered political parties in Haiti,
            weak party programs, weak internal democracy, and lack of national
            development plans.
          </p>
        </div>

        <div className="card">
          <h2>Foreign Influence Review</h2>
          <p>
            Track public statements, diplomatic interventions, international
            policy decisions, Core Group activity, embassy statements, sanctions,
            aid conditions, and foreign involvement in Haiti political
            transitions.
          </p>
        </div>

        <div className="card">
          <h2>Electoral Council Reform</h2>
          <p>
            Study how the electoral system can require transparent party
            registration, public programs, audited finances, internal elections,
            member lists, regional representation, and anti-corruption rules.
          </p>
        </div>

        <div className="card">
          <h2>Party Registration Standards</h2>
          <p>
            Require each political party to publish a national development
            program, leadership list, constitution, finance report, membership
            structure, youth program, women participation plan, and public
            accountability policy.
          </p>
        </div>

        <div className="card">
          <h2>Public Finance Transparency</h2>
          <p>
            Political parties should report donations, campaign spending,
            public funding, foreign support, advertising costs, contractors,
            consultants, and debts.
          </p>
        </div>

        <div className="card">
          <h2>Anti-Gang Political Firewall</h2>
          <p>
            Any candidate or party accused in credible reports of gang support,
            corruption, kidnapping financing, weapons trafficking, or public
            money abuse should face lawful review before receiving public
            authority or public funds.
          </p>
        </div>
      </section>

      <section className="hero">
        <h1>Three Strong National Political Blocs</h1>

        <p>
          The goal is not dictatorship and not forced silence. The goal is to
          encourage lawful consolidation into three strong national political
          blocs with clear programs, transparent leadership, internal democracy,
          and national development plans.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>1. Justice, Constitution & Accountability Bloc</h2>
          <p>
            Focus: Constitution 1987, courts, honest judges, honest lawyers,
            anti-corruption, sanctions review, public contracts, public money,
            civil rights, police reform, and legal accountability.
          </p>
        </div>

        <div className="card">
          <h2>2. Economy, Infrastructure & Reconstruction Bloc</h2>
          <p>
            Focus: roads, ports, airports, agriculture, energy, water, housing,
            jobs, small business, manufacturing, technology, trade, and national
            reconstruction.
          </p>
        </div>

        <div className="card">
          <h2>3. Family, Education & Social Development Bloc</h2>
          <p>
            Focus: schools, universities, children, churches, health, food,
            youth training, music, media, moral education, community services,
            and diaspora cooperation.
          </p>
        </div>
      </section>

      <section className="hero">
        <h1>Required Political Party Program</h1>

        <p>
          Every serious party should publish a complete national plan before
          asking the people for power.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Justice Plan</h2>
          <p>
            Court reform, police reform, prison reform, land protection,
            anti-corruption, public complaint system, and legal aid.
          </p>
        </div>

        <div className="card">
          <h2>Security Plan</h2>
          <p>
            Public safety, anti-gang strategy, border control, police training,
            intelligence coordination, community protection, and human rights.
          </p>
        </div>

        <div className="card">
          <h2>Economic Plan</h2>
          <p>
            Jobs, agriculture, factories, tourism, exports, taxation, small
            business support, diaspora investment, and public finance.
          </p>
        </div>

        <div className="card">
          <h2>Infrastructure Plan</h2>
          <p>
            Roads, bridges, ports, airports, electricity, solar power, water,
            sanitation, housing, hospitals, schools, and digital networks.
          </p>
        </div>

        <div className="card">
          <h2>Education Plan</h2>
          <p>
            Public schools, vocational training, online learning, AI education,
            music, science, language, agriculture, trades, and leadership.
          </p>
        </div>

        <div className="card">
          <h2>Diaspora Plan</h2>
          <p>
            Diaspora voting, investment, land protection, remittance programs,
            professional service networks, reconstruction funds, and business
            partnerships.
          </p>
        </div>
      </section>

      <section className="hero">
        <h1>Legal Reform Steps</h1>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Step 1: National Audit of Political Parties</h2>
          <p>
            Create a public database of registered parties, leaders, programs,
            finances, membership, legal status, and election history.
          </p>
        </div>

        <div className="card">
          <h2>Step 2: Minimum National Program Requirement</h2>
          <p>
            No party should participate seriously without a written program for
            justice, economy, education, infrastructure, security, and public
            finance.
          </p>
        </div>

        <div className="card">
          <h2>Step 3: Coalition and Merger Incentives</h2>
          <p>
            Encourage smaller parties to merge into strong national blocs
            instead of creating hundreds of weak temporary organizations.
          </p>
        </div>

        <div className="card">
          <h2>Step 4: Electoral Threshold</h2>
          <p>
            Study a lawful minimum vote threshold for public funding, ballot
            access, parliamentary seats, and national recognition.
          </p>
        </div>

        <div className="card">
          <h2>Step 5: Party Finance Transparency</h2>
          <p>
            Require audited reports for donations, public funding, foreign
            support, campaign expenses, contractors, and debts.
          </p>
        </div>

        <div className="card">
          <h2>Step 6: Public Debate Requirement</h2>
          <p>
            Require televised and online public debates where each party must
            explain its program before the people.
          </p>
        </div>
      </section>

      <section className="hero">
        <h1>Publication Rule</h1>

        <p>
          This journal must not publish unsupported accusations as final facts.
          Use lawful language: reported, alleged, under investigation, audited,
          sanctioned, charged, denied, confirmed by court, or confirmed by
          official record.
        </p>
      </section>

      
    </main>
  );
}

