import Navbar from "../components/Navbar";

export default function HaitiRestitutionClaimPage() {
  const claimOverview = [
    {
      title: "Base Restitution Claim",
      text: "Proposed recovery claim: $21,000,000,000 USD. This must be documented, audited, legally reviewed, and supported by historical and financial evidence.",
    },
    {
      title: "Interest Review",
      text: "The platform can calculate simple interest and compound interest models, but the final amount must be determined by legal, historical, financial, and diplomatic review.",
    },
    {
      title: "France / Restitution File",
      text: "Create a formal evidence file for the historical financial claim involving France, Haiti's independence debt, interest, lost development, and public recovery demands.",
    },
    {
      title: "Recovery Purpose",
      text: "Recovered funds should be directed to bridges, roads, water systems, electricity, agriculture, hospitals, schools, markets, insurance, and public infrastructure.",
    },
  ];

  const recoveryUses = [
    "Water source systems",
    "Clean public markets",
    "Roadside electricity",
    "Solar energy program",
    "Household generator program",
    "Bridge reconstruction",
    "Road drainage",
    "Garbage and flood control",
    "Agriculture and farms",
    "Tractors and equipment",
    "Vehicle insurance system",
    "Public schools",
    "Hospitals and clinics",
    "Internet and emergency communication",
    "Public audit system",
    "Anti-corruption court support",
  ];

  const evidenceFiles = [
    {
      title: "Historical Debt Evidence",
      text: "Collect treaties, payment records, historical documents, official archives, academic reports, and government records connected to Haiti's historical financial claims.",
    },
    {
      title: "Interest Calculation Evidence",
      text: "Track the base amount, interest method, annual rate, time period, inflation adjustment, legal theory, and expert financial review.",
    },
    {
      title: "Diplomatic File",
      text: "Track official letters, petitions, international statements, parliamentary records, diplomatic responses, and public claims.",
    },
    {
      title: "Legal File",
      text: "Track lawyers, legal arguments, courts, international law theories, restitution arguments, and official responses.",
    },
    {
      title: "Public Infrastructure File",
      text: "Connect the claim to bridges, roads, water, electricity, farms, schools, hospitals, markets, and disaster prevention.",
    },
    {
      title: "Public Accountability File",
      text: "Track every dollar requested, received, spent, audited, recovered, frozen, paid back, or still pending.",
    },
  ];

  const interestModels = [
    {
      title: "Base Claim",
      text: "$21,000,000,000 USD before interest.",
    },
    {
      title: "Simple Interest Model",
      text: "Base claim × annual interest rate × number of years. This is a policy model, not a final legal amount.",
    },
    {
      title: "Compound Interest Model",
      text: "Base claim grows yearly with interest added to the previous balance. This usually creates a much larger number.",
    },
    {
      title: "Inflation Adjustment",
      text: "Historical value can be adjusted using purchasing power, inflation, gold value, or lost opportunity models.",
    },
    {
      title: "Development Loss Model",
      text: "Estimate what Haiti could have built with the money: roads, bridges, water, electricity, agriculture, schools, and hospitals.",
    },
    {
      title: "Legal Settlement Model",
      text: "A diplomatic or legal settlement could use a payment plan, infrastructure fund, public trust, or long-term recovery agreement.",
    },
  ];

  const paybackPlan = [
    {
      title: "Symbolic Minimum Payment",
      text: "If a person, institution, or government accepts responsibility, even $1 per month can be tracked publicly as a formal recovery payment.",
    },
    {
      title: "Infrastructure Trust Fund",
      text: "All recovery money should go into a protected public trust for water, electricity, roads, bridges, agriculture, hospitals, and schools.",
    },
    {
      title: "Public Dashboard",
      text: "Every payment should be shown publicly: amount, date, payer, purpose, project, audit status, and remaining balance.",
    },
    {
      title: "No Private Pocket Rule",
      text: "No worker, minister, judge, contractor, or administrator should collect under-the-table money from public services.",
    },
    {
      title: "Audit Before Spending",
      text: "Major recovery money should be locked until project design, public tender, anti-corruption review, and audit controls are ready.",
    },
    {
      title: "Community Monitoring",
      text: "Citizens, churches, journalists, engineers, accountants, and diaspora committees should monitor projects and spending.",
    },
  ];

  const waterElectricityReform = [
    {
      title: "Water Source Protection",
      text: "Create public water points, legal billing, digital receipts, community monitoring, repair teams, and anti-bribe reporting.",
    },
    {
      title: "Electricity Roadside Responsibility",
      text: "Government should maintain public roadside electricity, poles, safety systems, public lighting, and grid protection.",
    },
    {
      title: "Household Solar Freedom",
      text: "Families can build legal solar, battery, and generator systems for their homes instead of waiting forever for unreliable public service.",
    },
    {
      title: "Digital Payment Receipts",
      text: "Every water and electricity payment must produce a receipt so workers cannot take small bribes while the state loses major revenue.",
    },
    {
      title: "Anti-Corruption Hotline",
      text: "Citizens should report illegal fees, fake bills, stolen equipment, bribes, and public-service abuse.",
    },
    {
      title: "Public Worker Accountability",
      text: "Workers must have ID, work assignment, supervisor, digital payment system, audit trail, and penalty for under-the-table collection.",
    },
  ];

  const insuranceReform = [
    "Affordable vehicle insurance",
    "Motorcycle insurance",
    "Truck insurance",
    "Taxi and tap-tap insurance",
    "Farm equipment insurance",
    "Public liability insurance",
    "Accident victim support",
    "Road safety fund",
    "Driver registration",
    "Vehicle inspection",
    "Digital insurance proof",
    "Court-linked accident claims",
  ];

  const databaseFields = [
    "Claim ID",
    "Claim title",
    "Base amount",
    "Currency",
    "Interest model",
    "Interest rate",
    "Start year",
    "End year",
    "Evidence source",
    "Legal status",
    "Audit status",
    "Responsible institution",
    "Recovery purpose",
    "Payment received",
    "Remaining balance",
    "Public notes",
  ];

  return (
    <main className="page">
      <Navbar />

      <section className="hero">
        <h1>Haiti Restitution Claim and Recovery Registry</h1>

        <p>
          A public accountability platform for Haiti recovery claims, including
          the proposed $21 billion USD restitution claim with interest review,
          infrastructure rebuilding, water reform, electricity reform, insurance
          reform, agriculture, roads, bridges, markets, audits, and public-money
          recovery.
        </p>

        <p>
          This page does not declare guilt. It creates a structured legal,
          historical, financial, and public evidence registry for claims that
          must be verified by official records, audits, courts, treaties,
          archives, and public documentation.
        </p>

        <a className="button" href="/public-money">
          Public Money
        </a>

        <a className="button" href="/justice">
          Justice
        </a>
      </section>

      <section className="hero">
        <h1>Claim Overview</h1>
      </section>

      <section className="grid">
        {claimOverview.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Interest and Restitution Models</h1>
      </section>

      <section className="grid">
        {interestModels.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Evidence Files Required</h1>
      </section>

      <section className="grid">
        {evidenceFiles.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Recovery Uses</h1>

        <p>
          Every recovery dollar should be connected to a real public project,
          not private pockets.
        </p>
      </section>

      <section className="grid">
        {recoveryUses.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Recovery category for rebuilding Haiti through lawful public
              investment, audits, engineering, jobs, and transparent spending.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Water and Electricity Reform</h1>

        <p>
          Public services must stop under-the-table payments. Every payment must
          be official, receipted, audited, and connected to real service.
        </p>
      </section>

      <section className="grid">
        {waterElectricityReform.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Insurance Reform</h1>

        <p>
          Rich or poor, every vehicle owner should carry reasonable insurance to
          protect accident victims, drivers, passengers, families, and property.
        </p>
      </section>

      <section className="grid">
        {insuranceReform.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Insurance reform item for safer roads, fair responsibility,
              accident support, and national financial protection.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Payback and Public Trust Plan</h1>
      </section>

      <section className="grid">
        {paybackPlan.map((item) => (
          <div className="card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>Database Fields</h1>

        <p>
          These fields can become the public registry table for claims, payments,
          evidence, audits, and project spending.
        </p>
      </section>

      <section className="grid">
        {databaseFields.map((item) => (
          <div className="card" key={item}>
            <h2>{item}</h2>
            <p>
              Registry field for tracking restitution claims, interest models,
              evidence, payments, projects, and audits.
            </p>
          </div>
        ))}
      </section>

      <section className="hero">
        <h1>System Diagram</h1>

        <p>
          Historical claim → evidence file → legal review → interest model →
          diplomatic demand → recovery trust fund → public projects → audit
          dashboard → citizen monitoring.
        </p>
      </section>

      <section className="hero">
        <h1>Legal Publication Rule</h1>

        <p>
          Use careful language: proposed claim, alleged loss, historical claim,
          audit required, legal review required, official record needed,
          confirmed by audit, confirmed by court, or confirmed by public record.
        </p>
      </section>
    </main>
  );
}

