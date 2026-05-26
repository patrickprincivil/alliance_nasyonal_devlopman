export default function DashboardPage() {
  const systems = [
    "Justice System",
    "Courts",
    "Constitution",
    "Education",
    "Healthcare",
    "Infrastructure",
    "Transportation",
    "Agriculture",
    "Media Center",
    "AI Assistant",
    "E-Commerce",
    "Journal System",
    "Analytics",
    "National Archive",
    "Smart Cities",
    "Security Systems",
  ];

  return (
    <main
      style={{
        padding: "60px",
        color: "white",
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #0f172a, #111827)",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "bold",
        }}
      >
        National Operations Dashboard
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "22px",
          color: "#cbd5e1",
          maxWidth: "1000px",
        }}
      >
        Unified digital platform for justice,
        governance, civic organization,
        national modernization, media,
        analytics, and economic systems.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "24px",
          marginTop: "50px",
        }}
      >
        {systems.map((system) => (
          <div
            key={system}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "18px",
              border: "1px solid #334155",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
              }}
            >
              {system}
            </h2>

            <p
              style={{
                marginTop: "12px",
                color: "#cbd5e1",
              }}
            >
              National digital management module.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

