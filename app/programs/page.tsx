export default function ProgramsPage() {
  const programs = [
    "Education",
    "Infrastructure",
    "Healthcare",
    "Technology",
    "Agriculture",
    "Logistics",
    "Emergency Response",
    "Economic Growth",
    "AI & Innovation",
    "Transportation",
    "Housing",
    "Energy",
  ];

  return (
    <main
      style={{
        padding: "60px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "40px",
        }}
      >
        National Development Programs
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {programs.map((program, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "18px",
            }}
          >
            <h2>{program}</h2>

            <p
              style={{
                marginTop: "15px",
                color: "#cbd5e1",
              }}
            >
              National development initiative.
            </p>

            <button
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                border: "none",
                borderRadius: "10px",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

