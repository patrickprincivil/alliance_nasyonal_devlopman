export default function CourtsPage() {
  const courts = [
    "Cour de Cassation (Supreme Court)",
    "Cour d’Appel",
    "Tribunal de Première Instance",
    "Tribunal de Paix",
    "Commercial Courts",
    "Labor Courts",
    "Land Dispute Courts",
    "Constitutional Justice Systems",
  ];

  return (
    <main style={{ padding: "60px", color: "white" }}>
      <h1 style={{ fontSize: "48px" }}>
        Haiti Court System
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {courts.map((court) => (
          <div
            key={court}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h2>{court}</h2>

            <p
              style={{
                marginTop: "10px",
                color: "#cbd5e1",
              }}
            >
              Justice and legal administration system.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

