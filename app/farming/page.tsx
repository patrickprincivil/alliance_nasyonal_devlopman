const departmentPlans = [
  {
    department: "Ouest",
    mainAreas: "Port-au-Prince, Léogâne, Arcahaie, Croix-des-Bouquets",
    production:
      "Vegetables, plantain, poultry, eggs, dairy, fruit, urban farming, food distribution centers.",
  },
  {
    department: "Nord",
    mainAreas: "Cap-Haïtien, Limbé, Acul-du-Nord, Plaine-du-Nord",
    production:
      "Rice, corn, beans, cacao, banana, vegetables, fishing, cold storage, tourism food supply.",
  },
  {
    department: "Nord-Est",
    mainAreas: "Fort-Liberté, Ouanaminthe, Trou-du-Nord, Ferrier",
    production:
      "Beans, corn, livestock, peanuts, vegetables, border-market food trade, irrigation farming.",
  },
  {
    department: "Nord-Ouest",
    mainAreas: "Port-de-Paix, Jean-Rabel, Môle-Saint-Nicolas, Saint-Louis-du-Nord",
    production:
      "Fishing, goats, sorghum, peanuts, fruit trees, salt, dry-zone farming, water storage.",
  },
  {
    department: "Artibonite",
    mainAreas: "Gonaïves, Saint-Marc, Dessalines, Verrettes, Petite-Rivière",
    production:
      "Rice, beans, vegetables, corn, irrigation, grain storage, food processing, national food reserve.",
  },
  {
    department: "Centre",
    mainAreas: "Hinche, Mirebalais, Lascahobas, Belladère",
    production:
      "Corn, beans, cattle, milk, vegetables, tree planting, watershed protection, border food trade.",
  },
  {
    department: "Sud",
    mainAreas: "Les Cayes, Aquin, Camp-Perrin, Port-Salut",
    production:
      "Vetiver, fruit, vegetables, fishing, rice, cacao, coconut, food exports, cold-chain storage.",
  },
  {
    department: "Sud-Est",
    mainAreas: "Jacmel, Bainet, Belle-Anse, Marigot, Thiotte",
    production:
      "Coffee, cacao, fruit trees, vegetables, fishing, mountain farming, irrigation, export crops.",
  },
  {
    department: "Grand’Anse",
    mainAreas: "Jérémie, Anse-d’Hainault, Corail, Pestel",
    production:
      "Cacao, coffee, breadfruit, plantain, fishing, fruit, coconut, food processing.",
  },
  {
    department: "Nippes",
    mainAreas: "Miragoâne, Anse-à-Veau, Baradères, Petit-Trou-de-Nippes",
    production:
      "Fishing, rice, beans, vegetables, plantain, fruit, coastal farming, food storage.",
  },
];

const nationalRules = [
  "Every department must create a food-production plan",
  "Every commune must identify its strongest crops and livestock",
  "Every farming zone must have water, roads, storage, and market access",
  "Public land use must follow legal rules and protect farmers",
  "Each commune must support youth agriculture training",
  "Each department must create seed banks and food reserves",
  "Recovered public money must support irrigation and food security",
  "No commune should depend only on imported food",
  "Farmers must receive receipts, contracts, and fair market access",
  "Production reports must be public and updated regularly",
];

const farmingSystems = [
  "Irrigation canals",
  "Solar water pumps",
  "Seed banks",
  "Cold rooms",
  "Food warehouses",
  "Farm roads",
  "Cargo trucks",
  "Fishing docks",
  "Food processing centers",
  "Training schools",
  "Cooperative banks",
  "Public market centers",
];

export default function FarmingPage() {
  return (
    <main className="page">
      <p className="eyebrow">Food Independence</p>

      <h1>Haiti 10 Departments Food Production Plan</h1>

      <p>
        Every department and commune in Haiti must help produce food, protect
        farmers, organize water systems, store harvests, move products to
        markets, and reduce national dependence on imported food.
      </p>

      <section className="subSection">
        <h2>All 10 Departments Production Plan</h2>

        <p>
          This national plan connects communes, farms, rivers, sea zones,
          roads, trucks, markets, storage, ports, airports, schools, and public
          finance transparency.
        </p>

        <div className="gridSection noPadding">
          {departmentPlans.map((item) => (
            <article className="card" key={item.department}>
              <h2>{item.department}</h2>

              <p>
                <strong>Main communes/areas:</strong> {item.mainAreas}
              </p>

              <p>
                <strong>Food production:</strong> {item.production}
              </p>

              <span className="statusBadge">Department plan</span>
            </article>
          ))}
        </div>
      </section>

      <section className="subSection">
        <h2>New Government Food Regulation</h2>

        <p>
          The purpose is national dignity, food security, public order, and
          economic independence. Haiti must organize production legally and
          professionally in every department.
        </p>

        <ol className="timeline">
          {nationalRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>
      </section>

      <section className="subSection">
        <h2>Required Farming Systems</h2>

        <p>
          Food production cannot succeed without infrastructure. Each department
          needs practical systems that connect production, storage, transport,
          and markets.
        </p>

        <div className="gridSection noPadding">
          {farmingSystems.map((system) => (
            <article className="card" key={system}>
              <h2>{system}</h2>

              <p>
                This system supports farmers, families, markets, schools,
                hospitals, restaurants, exports, and national food security.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

