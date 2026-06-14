import Navbar from "../components/Navbar";

export default function HaitiNationalResetPage() {
  const stewardship = [
    {
      title: "Sea Protection",
      text: "Protect coastlines, fishing zones, mangroves, coral reefs, clean fishing, aquaculture, and lawful reporting of illegal dumping or illegal boats.",
    },
    {
      title: "River Protection",
      text: "Clean riverbanks, stop waste dumping, protect drinking-water sources, restore watersheds, plant trees, and protect irrigation systems.",
    },
    {
      title: "Clean Food Reproduction",
      text: "Clean fish farming, clean agriculture, seed banks, fruit-tree nurseries, vegetable gardens, clean water, local markets, and food safety inspection.",
    },
    {
      title: "Illegal Construction Review",
      text: "Review buildings near sea edges, rivers, ravines, canals, drainage systems, flood zones, public land, and unsafe construction without permits.",
    },
    {
      title: "Justice and Accountability",
      text: "Audit public money, recover stolen funds through court, review CSCCA reports, review DGI and customs records, protect witnesses, and guarantee due process.",
    },
  ];

  const biblicalFoundation = [
    {
      title: "Leviticus 11",
      text: "Clean and unclean food principles, food discipline, health protection, and separation from contamination.",
    },
    {
      title: "Deuteronomy 5",
      text: "God’s law, no stealing, no false witness, respect for life, moral responsibility, and national obedience to justice.",
    },
  ];

  const constructionReview = [
    "Sea Edges",
    "Riverbanks",
    "Ravines",
    "Drainage Canals",
    "Flood Zones",
    "Protected Mangrove Zones",
    "Public Land",
    "Land Title Review",
    "Building Permit Review",
    "Environmental Approval",
    "Municipal Approval",
    "Disaster-Risk Review",
    "Court Dispute Status",
  ];

  const cleanFood = [
    "Clean Fish",
    "Small-Scale Fishing Cooperatives",
    "Legal Fishing Zones",
    "No Poisoned Water",
    "No Illegal Nets",
    "No Overfishing",
    "Cold Storage for Fishermen",
    "Tilapia Ponds Where Legal and Safe",
    "Clean Water Monitoring",
    "No Sewage Dumping",
    "No Chemical Contamination",
    "Community Fish Nurseries",
    "Seed Banks",
    "Fruit Trees",
    "Vegetable Gardens",
    "Composting",
    "Clean Irrigation",
    "Local Grain Storage",
    "Farmer Cooperatives",
  ];

  const authorities = [
    {
      title: "Ministry of Environment",
      text: "Environmental protection, watershed protection, and coastal-zone policy.",
    },
    {
      title: "Ministry of Agriculture",
      text: "Fisheries, agriculture, aquaculture, and food production.",
    },
    {
      title: "SEMANAH",
      text: "Maritime navigation and sea safety.",
    },
    {
      title: "Haitian Coast Guard",
      text: "Maritime law enforcement, sea safety, and rescue.",
    },
    {
      title: "AGD Customs",
      text: "Ports, cargo, illegal imports, exports, and customs records.",
    },
    {
      title: "DGI",
      text: "Fiscal identity, business verification, and tax records.",
    },
    {
      title: "CSCCA",
      text: "Public audits, state accounts, PetroCaribe records, and public-money review.",
    },
    {
      title: "Municipalities",
      text: "Building permits, local land use, sanitation, and local enforcement.",
    },
    {
      title: "Civil Protection",
      text: "Disaster risk, flood risk, and emergency planning.",
    },
    {
      title: "Courts",
      text: "Legal disputes, corruption cases, land cases, and due process.",
    },
    {
      title: "Independent Anti-Corruption Court Proposal",
      text: "Public money cases, asset recovery, sanctions follow-up, and lawful referrals.",
    },
  ];

  const justicePrinciples = [
    "No Private Revenge",
    "No Mob Justice",
    "No Corrupt Investigation",
    "No Political Protection",
    "No Fake Accusations",
    "No Secret Deals",
    "Independent Judges",
    "Public Case Registry",
    "Witness Protection",
    "Asset Recovery",
    "CSCCA Audit Evidence",
    "DGI Tax Evidence",
    "Customs Evidence",
    "Bank Evidence Through Legal Process",
    "Public Procurement Evidence",
    "Final Judgment by a Lawful Court",
  ];

  const resetCouncil = [
    {
      title: "Clean Water Commission",
      text: "Rivers, wells, springs, drainage, water testing, sanitation, and drinking-water protection.",
    },
    {
      title: "Sea and Coast Commission",
      text: "Coastline protection, fishing zones, mangroves, maritime safety, and illegal boat reporting.",
    },
    {
      title: "Clean Food Commission",
      text: "Farming, aquaculture, seed banks, food markets, and food inspection.",
    },
    {
      title: "Land and Housing Commission",
      text: "Illegal construction review, riverbank protection, coastal setback, flood-zone relocation, and safe housing plans.",
    },
    {
      title: "Public Money Commission",
      text: "CSCCA reports, PetroCaribe, earthquake aid, public contracts, DGI records, and customs records.",
    },
    {
      title: "Independent Justice Commission",
      text: "Case review, evidence protection, witness protection, court referral, asset freezing through lawful orders, and asset recovery.",
    },
  ];

  const reportCategories = [
    "Pollution",
    "Illegal Construction",
    "Illegal Boat",
    "Corruption Evidence",
    "Food Safety Issue",
    "River Damage",
    "Coastal Damage",
    "Public Money Misuse",
    "Unsafe Housing",
    "Environmental Abuse",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Haiti Sea, River, Clean Food & Justice Reset Program</h1>

        <p>
          Haiti must rebuild food, land, water, sea protection, housing safety,
          public money accountability, and justice through lawful documentation,
          courts, public institutions, communities, and transparent records.
        </p>

        <p>
          This is not private control by force. This is lawful national
          stewardship, food security, coastal protection, river protection,
          clean construction review, and justice reset under public law.
        </p>

        <a className="button" href="/contact">
          Report an Issue
        </a>

        <a className="button" href="/justice">
          Justice System
        </a>

        <a className="button" href="/journal">
          Journal Archive
        </a>
      </section>

      <section className="hero">
        <h1>Haiti National Stewardship Reset</h1>
      </section>

      <section className="grid">
        {stewardship.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Biblical Stewardship Foundation</h1>

        <p>
          The Bible references are used as a moral foundation, not as a
          replacement for Haitian law, courts, public institutions, and due
          process.
        </p>

        <p>
          Haiti must rebuild food, land, water, and justice on clean principles:
          clean food, clean water, clean courts, clean public money, and clean
          leadership.
        </p>
      </section>

      <section className="grid">
        {biblicalFoundation.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Legal Rule for Houses Near Sea and Rivers</h1>

        <p>
          Unsafe and illegal construction near the sea, rivers, ravines, canals,
          drainage systems, public land, mangroves, and flood zones must be
          reviewed by lawful urban-planning, environmental, municipal, civil
          protection, and court authorities.
        </p>

        <p>
          No violence. No illegal eviction. Every case needs written notice,
          inspection report, legal verification, court review when needed,
          relocation planning, social support, and environmental restoration.
        </p>
      </section>

      <section className="grid">
        {constructionReview.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Construction review item for safety, land title, permits,
              environmental protection, disaster-risk control, and public
              accountability.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Clean Food Production Plan</h1>

        <p>
          Haiti can strengthen food security through clean fishing, clean
          aquaculture, clean agriculture, local markets, food inspection, water
          testing, cold storage, seed banks, fruit trees, and farmer
          cooperatives.
        </p>
      </section>

      <section className="grid">
        {cleanFood.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Clean food action for public health, food security, local jobs,
              farmers, fishermen, markets, and community development.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Legal Authorities to Include</h1>
      </section>

      <section className="grid">
        {authorities.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Justice Reset: Courts, Not Revenge</h1>

        <p>
          All public officials, contractors, business actors, political leaders,
          and foreign or local organizations accused of stealing or misusing
          Haitian public money must face lawful investigation before independent
          courts.
        </p>

        <p>
          No person should be declared guilty without evidence and judgment, but
          no person should be protected from investigation because of political
          power, money, party, gang influence, or foreign connections.
        </p>
      </section>

      <section className="grid">
        {justicePrinciples.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Justice reset principle for lawful investigation, evidence,
              accountability, due process, and final judgment by court.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Haiti National Reset Council - Lawful Model</h1>
      </section>

      <section className="grid">
        {resetCouncil.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Public Declaration</h1>

        <p>
          Haiti must start again on truth, clean water, clean food, clean land,
          clean justice, and clean public money.
        </p>

        <p>
          The sea, rivers, coasts, mangroves, farms, markets, and public
          resources of Haiti belong to the nation and must be protected for the
          survival of the people.
        </p>

        <p>
          The goal is not revenge. The goal is national restoration, lawful
          justice, food security, public health, and the protection of future
          generations.
        </p>
      </section>

      <section className="hero">
        <h1>Report Center</h1>

        <p>
          Citizens, communities, churches, farmers, fishermen, lawyers,
          engineers, journalists, and public institutions can document problems
          through lawful reporting and evidence preservation.
        </p>
      </section>

      <section className="grid">
        {reportCategories.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Report category for documentation, inspection, official review,
              evidence archive, and lawful follow-up.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

