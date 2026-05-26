export default function SanctionsPage() {
  const sanctions = [
    {
      year: "2022",
      country: "Canada / United States / UN",
      topic: "Initial sanctions and visa restrictions related to Haiti instability, gang support, corruption, and political interference.",
    },
    {
      year: "2023",
      country: "Canada / United States / UN",
      topic: "Expanded sanctions on political and economic elites accused of supporting instability or armed groups.",
    },
    {
      year: "2024",
      country: "United States / Canada",
      topic: "Additional sanctions connected to gang financing, drug trafficking, and human rights concerns.",
    },
    {
      year: "2025",
      country: "United States / Canada / UN",
      topic: "More designations connected to gang coalitions, terrorism designations, and continued instability.",
    },
  ];

  return (
    <main style={{ padding: "60px", color: "white" }}>
      <h1 style={{ fontSize: "48px" }}>Haiti Sanctions Research Archive</h1>

      <p style={{ color: "#cbd5e1", fontSize: "20px", marginTop: "20px" }}>
        Organized timeline of sanctions, visa restrictions, public reports,
        and justice documents related to Haiti from old to new.
      </p>

      <div style={{ marginTop: "40px", display: "grid", gap: "20px" }}>
        {sanctions.map((item) => (
          <div
            key={item.year}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h2>{item.year}</h2>
            <p style={{ color: "#93c5fd" }}>{item.country}</p>
            <p style={{ color: "#cbd5e1", marginTop: "10px" }}>
              {item.topic}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

