export default function NationalEngineeringPage() {
  const sections = [
    "Engineering Schools",
    "Naval & Maritime Engineering",
    "Aerospace Science",
    "Mechanical Systems",
    "Research Centers",
    "Civil Protection",
    "Emergency Logistics",
    "Ethics & Law",
  ];

  return (
    <main style={{ padding: "60px", color: "white" }}>
      <h1 style={{ fontSize: "48px" }}>
        National Engineering & Security Education
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "20px",
          color: "#cbd5e1",
          maxWidth: "950px",
        }}
      >
        Educational archive for engineering, national resilience,
        civil protection, maritime systems, aerospace science,
        logistics, disaster response, and lawful technology development.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {sections.map((item) => (
          <div
            key={item}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
              border: "1px solid #334155",
            }}
          >
            <h2>{item}</h2>

            <p style={{ color: "#cbd5e1", marginTop: "10px" }}>
              Lawful education and institutional development module.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

