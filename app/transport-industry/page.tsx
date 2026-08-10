const transportProjects = [
  {
    name: "National Bus Grid",
    mode: "Bus",
    route: "Port-au-Prince, Cap-Haïtien, Jacmel, Les Cayes, Gonaïves",
    purpose:
      "Create safe city and intercity routes for students, workers, families, farmers, and visitors.",
  },
  {
    name: "Farm Cargo Truck System",
    mode: "Truck / Cargo",
    route: "All 10 departments",
    purpose:
      "Move food from farms to markets, ports, storage centers, schools, hospitals, and cities.",
  },
  {
    name: "Port-au-Prince Civic Tram",
    mode: "Train / Tram",
    route: "Airport, Delmas, Champs de Mars, National Palace, Port Area",
    purpose:
      "Connect the airport, city center, palace area, public offices, and port.",
  },
  {
    name: "Haitian Ride-Share App",
    mode: "Ride-share",
    route: "Major cities and communes",
    purpose:
      "Create a Haitian-owned Uber-style system with GPS, receipts, driver registration, and safety rules.",
  },
  {
    name: "Air Cargo System",
    mode: "Airplane / Cargo",
    route: "Port-au-Prince, Cap-Haïtien, Jacmel, Les Cayes, Jérémie",
    purpose:
      "Move medicine, emergency supplies, food exports, documents, and passengers between regions.",
  },
  {
    name: "Sea Ferry Network",
    mode: "Sea Travel / Ferry",
    route: "Port-au-Prince, Jacmel, Les Cayes, Jérémie, Cap-Haïtien",
    purpose:
      "Use the sea for passenger travel, fishing, cargo, tourism, and emergency movement.",
  },
];

const transportRules = [
  "Driver registration",
  "Vehicle inspection",
  "Public receipts",
  "GPS safety system",
  "Digital and cash payment options",
  "Insurance requirements",
  "Complaint system",
  "Public route maps",
  "Training schools",
  "Court and audit review for contracts",
];

export default function TransportIndustryPage() {
  return (
    <main className="page">
      <p className="eyebrow">National Mobility</p>

      <h1>Haiti Transport Industry System</h1>

      <p>
        Haiti needs a complete transport economy: buses, trucks, trains,
        ride-share, taxis, airplanes, sea travel, ports, ferries, logistics,
        repair shops, driver schools, and public safety rules.
      </p>

      <section className="subSection">
        <h2>Transport Projects</h2>

        <div className="gridSection noPadding">
          {transportProjects.map((item) => (
            <article className="card" key={item.name}>
              <h2>{item.name}</h2>

              <p>
                <strong>Mode:</strong> {item.mode}
              </p>

              <p>
                <strong>Route:</strong> {item.route}
              </p>

              <p>{item.purpose}</p>

              <span className="statusBadge">Planning</span>
            </article>
          ))}
        </div>
      </section>

      <section className="subSection">
        <h2>Transport Industry Rules</h2>

        <div className="gridSection noPadding">
          {transportRules.map((rule) => (
            <article className="card" key={rule}>
              <h2>{rule}</h2>

              <p>
                This rule protects passengers, drivers, tourists, workers,
                students, farmers, businesses, and public money.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

