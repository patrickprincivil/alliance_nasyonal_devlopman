export default function SoftwaresPage() {
  const softwares = [
    "AI Assistant",
    "Case Management System",
    "Court Scheduling",
    "Digital Archive",
    "E-Commerce Scanner",
    "Analytics Dashboard",
    "Media Center",
    "National Registry",
    "Education Platform",
    "Healthcare Records",
    "Transportation Tracker",
    "Smart City Systems",
  ];

  return (
    <main style={{ padding: "60px", color: "white" }}>
      <h1 style={{ fontSize: "48px" }}>
        National Software Systems
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {softwares.map((software) => (
          <div
            key={software}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h2>{software}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}

