import Link from "next/link";

const services = [
  { title: "Solar Power & Storage", description: "Community solar, battery storage, metering and safe electrical systems." },
  { title: "Safe Water & Sanitation", description: "Tested water sources, treatment, distribution and wastewater planning." },
  { title: "Affordable Food & Restaurants", description: "Community kitchens, fritay stalls, low-cost meals, buffet concepts and food safety." },
  { title: "Housing & Shelter", description: "Safe, permitted, affordable homes and dignified temporary shelter." },
  { title: "Work & Local Enterprise", description: "Employment training, farmer sourcing and small business support." },
];

export default function EssentialServicesPage() {
  return (
    <main className="page">
      <p className="eyebrow">Master Devlopman / National Essential Services</p>
      <h1>Power, Water, Food, Housing & Jobs</h1>
      <p>Long-term development vision for Haiti and the Dominican Republic. No nationwide service, funding or approved construction project is implied.</p>
      <section className="gridSection">
        {services.map((s) => <article className="card" key={s.title}><h2>{s.title}</h2><p>{s.description}</p><p>Status: feasibility planning</p></article>)}
      </section>
      <section className="subSection">
        <h2>Two proposed demonstration areas</h2>
        <p>San Pedro de Macorís / Los Llanos, Dominican Republic; Jacmel / Morne-à-Brûlé, Haiti. Each site requires local consultation, safety engineering, permits and sustainable financing.</p>
        <p>Affordable and free-to-beneficiary services require a transparent funding or subsidy mechanism. Solar generation, drinking water, commercial cooking and housing must be designed and inspected by qualified professionals.</p>
        <p><Link href="/master-control-center">Return to Master Control Center</Link></p>
      </section>
    </main>
  );
}
