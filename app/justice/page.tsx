export default function JusticeSystemPage() {
  const systems = [
    "Courts",
    "Police",
    "Legal Aid",
    "Anti-Corruption",
    "Prison Administration",
    "Human Rights",
    "Investigations",
    "Public Records",
    "Digital Case Tracking",
  ];

  return (
    <main style={{ padding: "60px", color: "white" }}>
      <h1 style={{ fontSize: "48px" }}>
        National Justice System
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
        {systems.map((item) => (
          <div
            key={item}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h2>{item}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}

